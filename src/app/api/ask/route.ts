import { connection, NextResponse } from "next/server";
import {
  ASK_MAX_QUESTION_CHARS,
  toAskDisplayResponse,
} from "@/lib/ask-display";
import { HE_API_ERRORS } from "@/lib/user-facing-he";
import {
  ask,
  AnswerReviewFailedError,
  AnswerReviewSystemError,
  createRequestId,
  GenerationSystemError,
  getGenerationModel,
  getOpenAiApiKey,
  HistoryValidationError,
  HISTORY_MAX_TURNS,
  HISTORY_MAX_TOTAL_CHARS,
  IndexMismatchError,
  isAbortError,
  isAnswerReviewEnabled,
  loadEnv,
  MissingApiKeyError,
  RewriteSystemError,
  TRACE_LOG_POLICY,
} from "@/rag";

/**
 * Route handlers default to the Node.js server runtime (not Edge), which is
 * required to read the local index from disk. With cacheComponents enabled we
 * cannot set `runtime` / `dynamic` segment configs — use `connection()` instead.
 */

type AskBody = {
  question?: unknown;
  history?: unknown;
};

function safeErrorMessage(status: number, code?: string): string {
  if (status === 400) {
    if (code?.startsWith("invalid_history") || code === "forbidden_history_role") {
      return HE_API_ERRORS.invalidHistory;
    }
    return HE_API_ERRORS.invalidQuestion;
  }
  if (status === 503) {
    return HE_API_ERRORS.serviceUnavailable;
  }
  if (code === "rewrite_failed") {
    return HE_API_ERRORS.rewriteFailed;
  }
  if (code === "answer_review_failed") {
    return HE_API_ERRORS.answerReviewFailed;
  }
  if (code === "answer_review_error") {
    return HE_API_ERRORS.answerReviewError;
  }
  return HE_API_ERRORS.internalError;
}

function errorJson(
  requestId: string,
  status: number,
  code: string,
  extra?: Record<string, unknown>,
): NextResponse {
  return NextResponse.json(
    {
      requestId,
      error: safeErrorMessage(status, code),
      code,
      ...extra,
    },
    { status },
  );
}

export async function POST(request: Request): Promise<Response> {
  await connection();
  loadEnv();
  const requestId = createRequestId();

  let body: AskBody;
  try {
    body = (await request.json()) as AskBody;
  } catch {
    return errorJson(requestId, 400, "invalid_json");
  }

  if (typeof body.question !== "string") {
    return errorJson(requestId, 400, "invalid_question_type");
  }

  const question = body.question.trim();
  if (!question) {
    return errorJson(requestId, 400, "empty_question");
  }
  if (question.length > ASK_MAX_QUESTION_CHARS) {
    return errorJson(requestId, 400, "question_too_long", {
      maxChars: ASK_MAX_QUESTION_CHARS,
    });
  }

  try {
    getOpenAiApiKey({ required: true });
    const result = await ask(question, {
      mode: "hybrid",
      topK: 5,
      history: body.history,
      signal: request.signal,
      requestId,
      traceSource: "api",
    });
    if (request.signal.aborted) {
      return new Response(null, {
        status: 499,
        headers: { "x-request-id": requestId },
      });
    }
    return NextResponse.json(toAskDisplayResponse(result));
  } catch (error) {
    if (request.signal.aborted || isAbortError(error)) {
      return new Response(null, {
        status: 499,
        headers: { "x-request-id": requestId },
      });
    }
    return mapAskError(error, requestId);
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
    historyMaxTurns: HISTORY_MAX_TURNS,
    historyMaxTotalChars: HISTORY_MAX_TOTAL_CHARS,
    followUpSupported: true,
    answerReviewEnabled: isAnswerReviewEnabled(),
    tracing: {
      askPath: true,
      logDirectory: TRACE_LOG_POLICY.directoryRelative,
      threadTitleTraced: false,
    },
  });
}

function mapAskError(error: unknown, requestId: string): NextResponse {
  if (error instanceof HistoryValidationError) {
    return errorJson(requestId, 400, error.code);
  }
  if (error instanceof MissingApiKeyError || error instanceof IndexMismatchError) {
    return errorJson(requestId, 503, "service_unavailable");
  }
  if (error instanceof RewriteSystemError) {
    return errorJson(requestId, 500, "rewrite_failed");
  }
  if (error instanceof AnswerReviewFailedError) {
    // Not insufficient_evidence — review exhausted without a verified draft.
    return errorJson(requestId, 422, "answer_review_failed", {
      reviewOutcome: error.meta.outcome,
      reviewAttempts: error.meta.reviewAttempts,
      revisionAttempts: error.meta.revisionAttempts,
    });
  }
  if (error instanceof AnswerReviewSystemError) {
    return errorJson(requestId, 500, "answer_review_error");
  }
  if (error instanceof GenerationSystemError) {
    const isRewrite =
      error.message.toLowerCase().includes("rewrite") ||
      error.message.includes("שכתוב") ||
      error.message.includes("Query rewrite");
    return errorJson(
      requestId,
      500,
      isRewrite ? "rewrite_failed" : "generation_failed",
    );
  }
  return errorJson(requestId, 500, "internal_error");
}
