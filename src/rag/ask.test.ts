import { describe, expect, it } from "vitest";
import type { Chunk } from "../chunking/types";
import { ask } from "./ask";
import type { GenerateAnswerResult } from "./generate";
import { buildIndexFromVectors } from "./build-index";
import {
  DEFAULT_EMBEDDING_DIMENSIONS,
  DEFAULT_EMBEDDING_MODEL,
} from "./types";
import {
  GenerationSystemError,
  NEUTRAL_INSUFFICIENT_ANSWER,
} from "./ask-types";

function makeChunk(id: string, docId: string, body: string): Chunk {
  return {
    chunkId: id,
    text: body,
    metadata: {
      documentId: docId,
      relativePath: `${docId}.md`,
      sourceHash: "h",
      documentTitle: docId,
      sectionPath: [docId],
      sourceBlockIds: [`${id}:b`],
      warnings: [],
      charCount: body.length,
      tokenEstimate: 10,
      tokenEstimateMethod: "heuristic_he_en_v1_max(words*1.3, chars/2.8)",
    },
  };
}

describe("ask()", () => {
  const chunks = [
    makeChunk("docA:c000", "docA", "שעות המוקד א עד ה שמונה עד חמש"),
    makeChunk("docB:c000", "docB", "ביטול פוליסה תוך 14 יום"),
  ];
  const embeddings = chunks.map((_, i) => {
    const v = Array(DEFAULT_EMBEDDING_DIMENSIONS).fill(0);
    v[0] = 1;
    v[i + 1] = 0.5;
    return v;
  });
  const index = buildIndexFromVectors(chunks, embeddings, {
    model: DEFAULT_EMBEDDING_MODEL,
    dimensions: DEFAULT_EMBEDDING_DIMENSIONS,
  });

  const embedderConfig = {
    model: DEFAULT_EMBEDDING_MODEL,
    dimensions: DEFAULT_EMBEDDING_DIMENSIONS,
  };
  const embedder = {
    config: embedderConfig,
    async embedTexts(texts: string[]) {
      return {
        embeddings: texts.map(() => {
          const v = Array(DEFAULT_EMBEDDING_DIMENSIONS).fill(0);
          v[0] = 1;
          return v;
        }),
        usage: { promptTokens: 1, totalTokens: 1 },
        config: embedderConfig,
      };
    },
  };

  it("assembles answer from parts after retrieve (no pre-retrieve clarify)", async () => {
    const generateOk = async (): Promise<GenerateAnswerResult> => ({
      payload: {
        status: "answered",
        answerParts: [
          { text: "שעות המוקד הן א׳–ה׳.", sourceChunkIds: ["docA:c000"] },
        ],
      },
      rawText: "{}",
      model: "mock-model",
      usage: { promptTokens: 10, completionTokens: 5, totalTokens: 15 },
      latencyMs: 1,
    });

    const result = await ask(
      "מה שעות המוקד?",
      { mode: "hybrid", topK: 2 },
      { index, embedder, generate: generateOk },
    );
    expect(result.status).toBe("answered");
    expect(result.retrievedChunks.length).toBeGreaterThan(0);
    expect(result.answer).toBe("שעות המוקד הן א׳–ה׳.");
    expect(result.answerParts).toHaveLength(1);
    expect(result.sources[0]?.fileName).toBe("docA.md");
    expect(result.timingsMs).not.toHaveProperty("clarifyMs");
  });

  it("rejects forged citation ids from answerParts", async () => {
    const generateBad = async (): Promise<GenerateAnswerResult> => ({
      payload: {
        status: "answered",
        answerParts: [
          { text: "טענה", sourceChunkIds: ["missing:c999"] },
        ],
      },
      rawText: "{}",
      model: "mock-model",
      latencyMs: 1,
    });

    await expect(
      ask(
        "שאלה",
        { mode: "lexical", topK: 2 },
        { index, embedder, generate: generateBad },
      ),
    ).rejects.toBeInstanceOf(GenerationSystemError);
  });

  it("returns neutral insufficient_evidence copy", async () => {
    const generate = async (): Promise<GenerateAnswerResult> => ({
      payload: { status: "insufficient_evidence", answerParts: [] },
      rawText: "{}",
      model: "mock-model",
      latencyMs: 1,
    });

    const result = await ask(
      "האם יש ביטוח רחפנים?",
      { mode: "lexical", topK: 2 },
      { index, embedder, generate },
    );
    expect(result.status).toBe("insufficient_evidence");
    expect(result.answer).toBe(NEUTRAL_INSUFFICIENT_ANSWER);
    expect(result.citations).toEqual([]);
  });

  it("passes through clarification_needed from generation without sources", async () => {
    const generate = async (): Promise<GenerateAnswerResult> => ({
      payload: {
        status: "clarification_needed",
        answerParts: [
          { text: "לאיזה מוצר הכוונה?", sourceChunkIds: [] },
        ],
      },
      rawText: "{}",
      model: "mock-model",
      latencyMs: 1,
    });

    const result = await ask(
      "מה ההשתתפות העצמית?",
      { mode: "hybrid", topK: 2 },
      { index, embedder, generate },
    );
    expect(result.status).toBe("clarification_needed");
    expect(result.answer).toBe("לאיזה מוצר הכוונה?");
    expect(result.citations).toEqual([]);
    expect(result.retrievedChunks.length).toBeGreaterThan(0);
  });
});
