"use client";

import { AuiIf, ComposerPrimitive, MessagePrimitive } from "@assistant-ui/react";
import {
  ArrowUpIcon,
  ChevronDownIcon,
  MicIcon,
  PlusIcon,
  SquareIcon,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { HE_UI } from "@/lib/user-facing-he";

/**
 * Layout matches the HomeDemo composer. Model / mic / attachments stay disabled.
 * Model label reflects server GENERATION_MODEL when /api/ask config is available.
 */
export function Composer(): ReactNode {
  const [modelLabel, setModelLabel] = useState("אופק RAG");

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      try {
        const res = await fetch("/api/ask", { method: "GET" });
        if (!res.ok) return;
        const data = (await res.json()) as { generationModel?: string };
        if (
          !cancelled &&
          typeof data.generationModel === "string" &&
          data.generationModel.trim()
        ) {
          setModelLabel(data.generationModel.trim());
        }
      } catch {
        // keep default label
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="flex w-full flex-col gap-1.5">
      <ComposerPrimitive.Root className="relative w-full">
        <div className="border-foreground/10 bg-muted/30 focus-within:border-foreground/25 rounded-thread flex flex-col border transition-colors">
          <ComposerPrimitive.Input asChild>
            <textarea
              data-composer-input
              placeholder={HE_UI.composerPlaceholder}
              rows={1}
              dir="auto"
              className="placeholder:text-muted-foreground field-sizing-content max-h-48 w-full resize-none bg-transparent px-4 pt-3 pb-2 text-base leading-6 focus:outline-none"
            />
          </ComposerPrimitive.Input>
          <div className="flex items-center justify-between gap-2 px-2 pb-2">
            <div className="flex min-w-0 items-center gap-1">
              <button
                type="button"
                disabled
                title="קבצים — לא מחובר"
                aria-label={HE_UI.attachUnavailable}
                className="text-muted-foreground rounded-control grid size-7 shrink-0 place-items-center opacity-40"
              >
                <PlusIcon className="size-4" />
              </button>
              <button
                type="button"
                disabled
                title="מודל השרת (תצוגה בלבד)"
                aria-label={HE_UI.modelLabel(modelLabel)}
                className="text-muted-foreground rounded-control flex h-7 min-w-0 items-center gap-1 px-2 text-[13px] font-normal opacity-70"
              >
                <span className="truncate">{modelLabel}</span>
                <ChevronDownIcon className="size-3.5 opacity-70" />
              </button>
            </div>
            <div className="flex shrink-0 items-center gap-1">
              <span
                title="מונה הקשר — לא מחובר"
                className="text-muted-foreground rounded-control grid h-7 place-items-center px-2 text-[11px] opacity-50"
              >
                —
              </span>
              <button
                type="button"
                disabled
                title="קלט קולי — לא מחובר"
                aria-label={HE_UI.micUnavailable}
                className="text-muted-foreground rounded-control grid size-7 place-items-center opacity-40"
              >
                <MicIcon className="size-4" />
              </button>
              <AuiIf condition={(s) => !s.thread.isRunning}>
                <ComposerPrimitive.Send asChild>
                  <button
                    type="button"
                    aria-label={HE_UI.send}
                    className="bg-primary text-primary-foreground rounded-control grid size-7 place-items-center transition-opacity disabled:opacity-40"
                  >
                    <ArrowUpIcon className="size-4" />
                  </button>
                </ComposerPrimitive.Send>
              </AuiIf>
              <AuiIf condition={(s) => s.thread.isRunning}>
                <ComposerPrimitive.Cancel asChild>
                  <button
                    type="button"
                    aria-label="עצור"
                    className="bg-primary text-primary-foreground rounded-control grid size-7 place-items-center"
                  >
                    <SquareIcon className="size-3 fill-current" />
                  </button>
                </ComposerPrimitive.Cancel>
              </AuiIf>
            </div>
          </div>
        </div>
      </ComposerPrimitive.Root>
      <p className="text-muted-foreground px-1 text-[11px] leading-snug" dir="rtl">
        {HE_UI.followUpHint}
      </p>
    </div>
  );
}

export function EditComposer(): ReactNode {
  return (
    <MessagePrimitive.Root
      data-role="user"
      className="mx-auto flex w-full max-w-(--thread-max-width) flex-col items-end"
    >
      <ComposerPrimitive.Root className="border-foreground/10 bg-muted/30 focus-within:border-foreground/25 rounded-thread flex w-full max-w-[85%] flex-col border transition-colors">
        <ComposerPrimitive.Input asChild>
          <textarea
            autoFocus
            aria-label="עריכת הודעה"
            rows={1}
            dir="auto"
            className="field-sizing-content max-h-48 min-h-12 w-full resize-none bg-transparent px-4 pt-3.5 pb-1 text-[15px] leading-6 focus:outline-none"
          />
        </ComposerPrimitive.Input>
        <div className="flex items-center justify-end gap-1.5 px-2.5 pb-2.5">
          <ComposerPrimitive.Cancel asChild>
            <button
              type="button"
              className="text-muted-foreground hover:text-foreground rounded-control h-8 px-3 text-[13px] transition-colors"
            >
              ביטול
            </button>
          </ComposerPrimitive.Cancel>
          <ComposerPrimitive.Send asChild>
            <button
              type="button"
              className="bg-primary text-primary-foreground rounded-control h-8 px-3 text-[13px] font-medium transition-opacity disabled:opacity-40"
            >
              עדכון
            </button>
          </ComposerPrimitive.Send>
        </div>
      </ComposerPrimitive.Root>
    </MessagePrimitive.Root>
  );
}
