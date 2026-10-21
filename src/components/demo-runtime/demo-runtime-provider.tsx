"use client";

import {
  AssistantRuntimeProvider,
  useLocalRuntime,
} from "@assistant-ui/react";
import { ragChatModelAdapter } from "@/lib/rag-chat-model-adapter";
import type { ReactNode } from "react";

/**
 * Runtime stays outside the HomeDemo visual shell.
 * Active path: LocalRuntime + ragChatModelAdapter → POST /api/ask → ask().
 * (demoChatModelAdapter remains available for fixture tests only.)
 */
export function DemoRuntimeProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  const runtime = useLocalRuntime(ragChatModelAdapter);

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      {children}
    </AssistantRuntimeProvider>
  );
}
