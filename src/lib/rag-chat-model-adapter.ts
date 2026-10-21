import type { ChatModelAdapter, ThreadMessage } from "@assistant-ui/react";
import {
  ASK_CUSTOM_METADATA_KEY,
  isAskDisplayResponse,
  type AskDisplayResponse,
} from "@/lib/ask-display";

function lastUserText(messages: readonly ThreadMessage[]): string {
  for (let i = messages.length - 1; i >= 0; i -= 1) {
    const message = messages[i];
    if (message?.role !== "user") continue;
    const parts = message.content;
    const text = parts
      .filter((part): part is { type: "text"; text: string } => part.type === "text")
      .map((part) => part.text)
      .join("\n")
      .trim();
    if (text) return text;
  }
  return "";
}

/**
 * LocalRuntime adapter: browser → POST /api/ask → same ask() as the CLI.
 * No streaming. Structured RAG payload goes in metadata.custom (not answer text).
 */
export const ragChatModelAdapter: ChatModelAdapter = {
  async run({ messages, abortSignal }) {
    const question = lastUserText(messages);
    if (!question) {
      throw new Error("לא נמצאה שאלת משתמש לשליחה.");
    }

    const response = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
      signal: abortSignal,
    });

    if (abortSignal.aborted) {
      throw new DOMException("Request aborted", "AbortError");
    }

    if (!response.ok) {
      let message = "אירעה שגיאת מערכת בעת יצירת התשובה. נסו שוב.";
      try {
        const payload = (await response.json()) as { error?: string };
        if (typeof payload.error === "string" && payload.error.trim()) {
          message = payload.error.trim();
        }
      } catch {
        // keep default safe message
      }
      throw new Error(message);
    }

    const data: unknown = await response.json();
    if (abortSignal.aborted) {
      throw new DOMException("Request aborted", "AbortError");
    }
    if (!isAskDisplayResponse(data)) {
      throw new Error("התקבל פלט לא תקין מהשרת.");
    }

    const display: AskDisplayResponse = data;
    return {
      content: [{ type: "text", text: display.answer }],
      status: { type: "complete", reason: "stop" },
      metadata: {
        custom: {
          [ASK_CUSTOM_METADATA_KEY]: display,
        },
      },
    };
  },
};
