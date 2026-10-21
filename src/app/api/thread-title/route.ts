import { connection, NextResponse } from "next/server";
import { ASK_MAX_QUESTION_CHARS } from "@/lib/ask-display";
import {
  DEFAULT_THREAD_TITLE,
  fallbackTitleFromQuestion,
} from "@/lib/thread-title";
import { generateThreadTitleFromQuestion } from "@/lib/thread-title-server";
import { loadEnv } from "@/rag";

type TitleBody = {
  question?: unknown;
};

/**
 * Separate from /api/ask: short title from the first user message only.
 * Does not retrieve corpus or generate an answer.
 */
export async function POST(request: Request): Promise<Response> {
  await connection();
  loadEnv();

  let body: TitleBody;
  try {
    body = (await request.json()) as TitleBody;
  } catch {
    return NextResponse.json(
      { title: DEFAULT_THREAD_TITLE, source: "fallback", code: "invalid_json" },
      { status: 200 },
    );
  }

  if (typeof body.question !== "string") {
    return NextResponse.json(
      {
        title: DEFAULT_THREAD_TITLE,
        source: "fallback",
        code: "invalid_question_type",
      },
      { status: 200 },
    );
  }

  const question = body.question.trim();
  if (!question || question.length > ASK_MAX_QUESTION_CHARS) {
    return NextResponse.json(
      {
        title: fallbackTitleFromQuestion(question),
        source: "fallback",
        code: question ? "question_too_long" : "empty_question",
      },
      { status: 200 },
    );
  }

  if (request.signal.aborted) {
    return new Response(null, { status: 499 });
  }

  const result = await generateThreadTitleFromQuestion(question);
  if (request.signal.aborted) {
    return new Response(null, { status: 499 });
  }

  return NextResponse.json({
    title: result.title,
    source: result.source,
    ...(result.model ? { model: result.model } : {}),
  });
}
