import type { RetrievalHit } from "./types";

export type AnswerStatus =
  | "answered"
  | "clarification_needed"
  | "insufficient_evidence";

export type ContextOrigin = "retrieved" | "expanded";

export interface ContextChunk {
  chunkId: string;
  documentId: string;
  relativePath: string;
  text: string;
  embeddingText?: string;
  documentTitle?: string;
  sectionPath?: string[];
  pages?: number[];
  warnings: string[];
  origin: ContextOrigin;
  /** Estimated tokens of this chunk's packed context block (heuristic). */
  estimatedTokens: number;
}

export interface ContextBuildResult {
  contextChunks: ContextChunk[];
  /** Retrieved hits that did not fit the budget (should be rare). */
  omittedRetrieved: Array<{ chunkId: string; reason: string }>;
  /** Sibling expansions skipped due to budget. */
  omittedExpansions: Array<{ chunkId: string; reason: string }>;
  estimatedContextTokens: number;
  budgetTokens: number;
  tokenEstimateMethod: string;
  contextComplete: boolean;
}

/** One grounded fragment: text plus the chunkIds that support it. */
export interface AnswerPart {
  text: string;
  sourceChunkIds: string[];
}

export interface Citation {
  chunkId: string;
  /** Texts of answer parts that cite this chunk (server-derived). */
  claims: string[];
}

/**
 * Raw model generation payload (answerParts only — no free-form citation claims).
 * Status includes clarification_needed decided at generation time (with context).
 */
export interface ModelGenerationPayload {
  status: AnswerStatus;
  answerParts: AnswerPart[];
}

export interface AnswerSource {
  chunkId: string;
  documentId: string;
  relativePath: string;
  fileName: string;
  documentTitle?: string;
  sectionPath?: string[];
  pages?: number[];
  claims: string[];
  origin: ContextOrigin;
}

/** Neutral server copy for insufficient_evidence (Hebrew). */
export const NEUTRAL_INSUFFICIENT_ANSWER =
  "לא מצאתי במקורות שסופקו מידע מספיק כדי לענות על השאלה.";

export interface AskResult {
  question: string;
  status: AnswerStatus;
  answer: string;
  /** Server-assembled parts that produced answer + citations. */
  answerParts: AnswerPart[];
  citations: Citation[];
  sources: AnswerSource[];
  retrievedChunks: RetrievalHit[];
  contextChunks: ContextChunk[];
  contextMeta: {
    budgetTokens: number;
    estimatedContextTokens: number;
    tokenEstimateMethod: string;
    contextComplete: boolean;
    omittedRetrieved: ContextBuildResult["omittedRetrieved"];
    omittedExpansions: ContextBuildResult["omittedExpansions"];
  };
  validation: {
    structureOk: boolean;
    citationsOk: boolean;
    invalidCitationIds: string[];
  };
  retrievalMode: string;
  generationModel: string;
  embeddingModel: string;
  usage?: {
    embeddingPromptTokens?: number;
    generationPromptTokens?: number;
    generationCompletionTokens?: number;
    generationTotalTokens?: number;
  };
  timingsMs: {
    retrieveMs: number;
    contextMs: number;
    generationMs: number;
    totalMs: number;
  };
}

export class GenerationSystemError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "GenerationSystemError";
  }
}
