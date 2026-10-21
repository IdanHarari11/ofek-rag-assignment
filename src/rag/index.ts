export {
  DEFAULT_EMBEDDING_DIMENSIONS,
  DEFAULT_EMBEDDING_MODEL,
  INDEX_FORMAT_VERSION,
  IndexMismatchError,
  MissingApiKeyError,
} from "./types";
export type {
  EmbeddingConfig,
  IndexManifest,
  IndexedChunk,
  LocalIndex,
  RetrievalHit,
  RetrieveMode,
  RetrieveOptions,
  RetrieveResult,
} from "./types";

export { loadEnv, getEmbeddingConfig, getOpenAiApiKey } from "./env";
export { buildEmbeddingText } from "./embedding-text";
export { cosineSimilarity, rankByCosine } from "./cosine";
export { createOpenAiEmbedder } from "./embedder";
export type { Embedder, EmbedBatchResult } from "./embedder";
export {
  assertIndexCompatible,
  canReuseIndex,
  loadChunksFile,
  loadValidatedIndex,
  readLocalIndex,
  writeLocalIndex,
} from "./index-store";
export { buildLocalIndex, buildIndexFromVectors, ensureIndexReady } from "./build-index";
export { retrieve, HYBRID_EXPERIMENT_CONFIG } from "./retrieve";
export { buildBm25Index, BM25_DEFAULTS } from "./bm25";
export { fuseRrf, RRF_DEFAULT_C } from "./rrf";
export { tokenizeForBm25, BM25_TOKENIZER_NOTES } from "./tokenize";
export { defaultChunksPath, defaultIndexPath, defaultEvalDir } from "./paths";

export { ask } from "./ask";
export type { AskOptions, AskDependencies } from "./ask";
export {
  DEFAULT_CONTEXT_BUDGET_TOKENS,
  CONTEXT_BUDGET_NOTES,
  buildGenerationContext,
  formatContextForPrompt,
  allowedChunkIds,
} from "./context-builder";
export {
  DEFAULT_GENERATION_MODEL,
  GENERATION_MODEL_NOTES,
  getGenerationModel,
  generateGroundedAnswer,
  parseModelGenerationPayload,
  buildSystemPrompt,
  buildUserPrompt,
} from "./generate";
export { assembleAnswerFromParts } from "./validate-answer";
// clarify.ts exists as historical Stage 5.2 experiment — not exported on the active path.
export {
  GenerationSystemError,
  NEUTRAL_INSUFFICIENT_ANSWER,
} from "./ask-types";
export type {
  AnswerStatus,
  AnswerSource,
  AnswerPart,
  AskResult,
  Citation,
  ContextChunk,
  ContextBuildResult,
  ContextOrigin,
  ModelGenerationPayload,
} from "./ask-types";
