import { afterEach, describe, expect, it, vi } from "vitest";
import type { ChatModelRunResult, ThreadMessage } from "@assistant-ui/react";
import { ASK_CUSTOM_METADATA_KEY } from "./ask-display";
import { ragChatModelAdapter } from "./rag-chat-model-adapter";

async function runAdapter(
  ...args: Parameters<typeof ragChatModelAdapter.run>
): Promise<ChatModelRunResult> {
  const result = await ragChatModelAdapter.run(...args);
  if (Symbol.asyncIterator in Object(result)) {
    throw new Error("Expected non-streaming ChatModelRunResult");
  }
  return result as ChatModelRunResult;
}

function userMessage(text: string): ThreadMessage {
  return {
    id: "u1",
    createdAt: new Date(),
    role: "user",
    content: [{ type: "text", text }],
    attachments: [],
    metadata: { custom: {} },
  } as ThreadMessage;
}

function answeredFixture() {
  return {
    status: "answered",
    answer: "שעות המוקד בשישי הן 08:00–13:00.",
    answerParts: [
      {
        text: "שעות המוקד בשישי הן 08:00–13:00.",
        sourceChunkIds: ["hours:c000"],
      },
    ],
    citations: [{ chunkId: "hours:c000", claims: ["שעות"] }],
    sources: [
      {
        chunkId: "hours:c000",
        documentId: "hours",
        fileName: "hours.md",
        relativePath: "hours.md",
        text: "יום שישי: 08:00–13:00",
        origin: "retrieved",
        claims: ["שעות"],
      },
    ],
    generationModel: "gpt-4.1-mini",
    retrievalMode: "hybrid",
  };
}

describe("ragChatModelAdapter", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("posts last user question and attaches rag metadata", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => answeredFixture(),
    });
    vi.stubGlobal("fetch", fetchMock);

    const abortSignal = new AbortController().signal;
    const result = await runAdapter({
      messages: [userMessage("מה שעות המוקד בשישי?")],
      abortSignal,
      runConfig: {},
      context: {},
      unstable_getMessage: () => userMessage("מה שעות המוקד בשישי?"),
    });

    expect(fetchMock).toHaveBeenCalledWith(
      "/api/ask",
      expect.objectContaining({
        method: "POST",
        signal: abortSignal,
        body: JSON.stringify({ question: "מה שעות המוקד בשישי?" }),
      }),
    );
    expect(result.content?.[0]).toEqual({
      type: "text",
      text: answeredFixture().answer,
    });
    expect(result.metadata?.custom?.[ASK_CUSTOM_METADATA_KEY]).toMatchObject({
      status: "answered",
      sources: expect.any(Array),
    });
  });

  it("surfaces server error without mock fallback", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 500,
        json: async () => ({
          error: "אירעה שגיאת מערכת בעת יצירת התשובה. נסו שוב.",
          code: "internal_error",
        }),
      }),
    );

    await expect(
      runAdapter({
        messages: [userMessage("שאלה")],
        abortSignal: new AbortController().signal,
        runConfig: {},
        context: {},
        unstable_getMessage: () => userMessage("שאלה"),
      }),
    ).rejects.toThrow(/שגיאת מערכת/);
  });

  it("propagates abort without attaching a late answer", async () => {
    const controller = new AbortController();
    vi.stubGlobal(
      "fetch",
      vi.fn().mockImplementation((_url: string, init?: RequestInit) => {
        return new Promise((_resolve, reject) => {
          init?.signal?.addEventListener("abort", () => {
            reject(new DOMException("Request aborted", "AbortError"));
          });
        });
      }),
    );

    const runPromise = runAdapter({
      messages: [userMessage("שאלה")],
      abortSignal: controller.signal,
      runConfig: {},
      context: {},
      unstable_getMessage: () => userMessage("שאלה"),
    });
    controller.abort();

    await expect(runPromise).rejects.toMatchObject({ name: "AbortError" });
  });

  it("rejects invalid display payload", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ status: "answered" }),
      }),
    );

    await expect(
      runAdapter({
        messages: [userMessage("שאלה")],
        abortSignal: new AbortController().signal,
        runConfig: {},
        context: {},
        unstable_getMessage: () => userMessage("שאלה"),
      }),
    ).rejects.toThrow(/לא תקין/);
  });
});
