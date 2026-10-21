import {
  buildGenerationContext,
  DEFAULT_CONTEXT_BUDGET_TOKENS,
} from "./context-builder";
import { generateGroundedAnswer, getGenerationModel } from "./generate";
import { loadValidatedIndex } from "./index-store";
import { defaultChunksPath, defaultIndexPath } from "./paths";
import { retrieve, type RetrieveDependencies } from "./retrieve";
import type { AskResult } from "./ask-types";
import { GenerationSystemError } from "./ask-types";
import { assembleAnswerFromParts } from "./validate-answer";
import type { LocalIndex, RetrieveMode } from "./types";

export interface AskOptions {
  topK?: number;
  mode?: RetrieveMode;
  contextBudgetTokens?: number;
  generationModel?: string;
  indexPath?: string;
  chunksPath?: string;
}

export interface AskDependencies extends RetrieveDependencies {
  index?: LocalIndex;
  generate?: typeof generateGroundedAnswer;
}

/**
 * End-to-end grounded ask:
 * Hybrid retrieve → context expand → generate answerParts → assemble.
 * Ambiguity / insufficient / answered are decided at generation time.
 * Independent of Next.js / UI. Does not read dev_set.
 *
 * Note: a pre-retrieve Clarify gate was tried in Stage 5.2 and rejected
 * (fixed one ambiguity case but caused widespread over-clarification).
 * The module `clarify.ts` is retained only as historical reference and is unused here.
 */
export async function ask(
  question: string,
  options: AskOptions = {},
  deps: AskDependencies = {},
): Promise<AskResult> {
  const trimmed = question.trim();
  if (!trimmed) {
    throw new Error("ask() requires a non-empty question");
  }

  const mode = options.mode ?? "hybrid";
  const topK = options.topK ?? 5;
  const model = options.generationModel ?? getGenerationModel();
  const totalStarted = performance.now();

  const index =
    deps.index ??
    (await loadValidatedIndex({
      chunksPath: options.chunksPath ?? deps.chunksPath ?? defaultChunksPath(),
      indexPath: options.indexPath ?? deps.indexPath ?? defaultIndexPath(),
      config: deps.embedder?.config,
    }));

  const retrieveStarted = performance.now();
  const retrieval = await retrieve(
    trimmed,
    { topK, mode },
    { ...deps, index },
  );
  const retrieveMs = performance.now() - retrieveStarted;

  const contextStarted = performance.now();
  const context = buildGenerationContext(retrieval.hits, index, {
    budgetTokens: options.contextBudgetTokens ?? DEFAULT_CONTEXT_BUDGET_TOKENS,
  });
  const contextMs = performance.now() - contextStarted;

  const generateFn = deps.generate ?? generateGroundedAnswer;
  let generation;
  try {
    generation = await generateFn({
      question: trimmed,
      contextChunks: context.contextChunks,
      model,
    });
  } catch (error) {
    if (error instanceof GenerationSystemError) throw error;
    const message = error instanceof Error ? error.message : String(error);
    throw new GenerationSystemError(message);
  }

  const assembled = assembleAnswerFromParts(
    generation.payload,
    context.contextChunks,
  );

  return {
    question: trimmed,
    status: assembled.status,
    answer: assembled.answer,
    answerParts: assembled.answerParts,
    citations: assembled.citations,
    sources: assembled.sources,
    retrievedChunks: retrieval.hits,
    contextChunks: context.contextChunks,
    contextMeta: {
      budgetTokens: context.budgetTokens,
      estimatedContextTokens: context.estimatedContextTokens,
      tokenEstimateMethod: context.tokenEstimateMethod,
      contextComplete: context.contextComplete,
      omittedRetrieved: context.omittedRetrieved,
      omittedExpansions: context.omittedExpansions,
    },
    validation: {
      structureOk: true,
      citationsOk: assembled.citationsOk,
      invalidCitationIds: assembled.invalidCitationIds,
    },
    retrievalMode: retrieval.mode,
    generationModel: generation.model,
    embeddingModel: retrieval.model,
    usage: {
      embeddingPromptTokens: retrieval.usage?.promptTokens,
      generationPromptTokens: generation.usage?.promptTokens,
      generationCompletionTokens: generation.usage?.completionTokens,
      generationTotalTokens: generation.usage?.totalTokens,
    },
    timingsMs: {
      retrieveMs,
      contextMs,
      generationMs: generation.latencyMs,
      totalMs: performance.now() - totalStarted,
    },
  };
}
