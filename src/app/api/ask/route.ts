import { connection, NextResponse } from "next/server";
import {
  ASK_MAX_QUESTION_CHARS,
  toAskDisplayResponse,
} from "@/lib/ask-display";
import {
  ask,
  GenerationSystemError,
  getGenerationModel,
  getOpenAiApiKey,
  IndexMismatchError,
  loadEnv,
  MissingApiKeyError,
} from "@/rag";

/**
 * Route handlers default to the Node.js server runtime (not Edge), which is
 * required to read the local index from disk. With cacheComponents enabled we
 * cannot set `runtime` / `dynamic` segment configs — use `connection()` instead.
 */

type AskBody = {
  question?: unknown;
};

function safeErrorMessage(status: number): string {
  if (status === 400) {
    return "השאלה אינה תקינה. בדקו שהטקסט אינו ריק ואינו ארוך מדי.";
  }
  if (status === 503) {
    return "שירות המענה אינו זמין כרגע. נסו שוב מאוחר יותר.";
  }
  return "אירעה שגיאת מערכת בעת יצירת התשובה. נסו שוב.";
}

export async function POST(request: Request): Promise<Response> {
  await connection();
  loadEnv();

  let body: AskBody;
  try {
    body = (await request.json()) as AskBody;
  } catch {
    return NextResponse.json(
      { error: safeErrorMessage(400), code: "invalid_json" },
      { status: 400 },
    );
  }

  if (typeof body.question !== "string") {
    return NextResponse.json(
      { error: safeErrorMessage(400), code: "invalid_question_type" },
      { status: 400 },
    );
  }

  const question = body.question.trim();
  if (!question) {
    return NextResponse.json(
      { error: safeErrorMessage(400), code: "empty_question" },
      { status: 400 },
    );
  }
  if (question.length > ASK_MAX_QUESTION_CHARS) {
    return NextResponse.json(
      {
        error: safeErrorMessage(400),
        code: "question_too_long",
        maxChars: ASK_MAX_QUESTION_CHARS,
      },
      { status: 400 },
    );
  }

  try {
    getOpenAiApiKey({ required: true });
    const result = await ask(question, { mode: "hybrid", topK: 5 });
    if (request.signal.aborted) {
      return new Response(null, { status: 499 });
    }
    return NextResponse.json(toAskDisplayResponse(result));
  } catch (error) {
    if (request.signal.aborted) {
      return new Response(null, { status: 499 });
    }
    return mapAskError(error);
  }
}

/** Lightweight config for UI labels (no secrets). */
export async function GET(): Promise<Response> {
  await connection();
  loadEnv();
  return NextResponse.json({
    generationModel: getGenerationModel(),
    maxQuestionChars: ASK_MAX_QUESTION_CHARS,
    retrievalModeDefault: "hybrid",
  });
}

function mapAskError(error: unknown): NextResponse {
  if (error instanceof MissingApiKeyError || error instanceof IndexMismatchError) {
    return NextResponse.json(
      { error: safeErrorMessage(503), code: "service_unavailable" },
      { status: 503 },
    );
  }
  if (error instanceof GenerationSystemError) {
    return NextResponse.json(
      { error: safeErrorMessage(500), code: "generation_failed" },
      { status: 500 },
    );
  }
  return NextResponse.json(
    { error: safeErrorMessage(500), code: "internal_error" },
    { status: 500 },
  );
}
