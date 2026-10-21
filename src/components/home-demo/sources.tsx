"use client";

import { useAuiState } from "@assistant-ui/react";
import { useMemo, useState, type ReactNode } from "react";
import {
  ASK_CUSTOM_METADATA_KEY,
  isAskDisplayResponse,
  type AskDisplayResponse,
  type AskDisplaySource,
} from "@/lib/ask-display";
import { cn } from "@/lib/utils";

function readRagPayload(custom: unknown): AskDisplayResponse | null {
  if (!custom || typeof custom !== "object") return null;
  const rag = (custom as Record<string, unknown>)[ASK_CUSTOM_METADATA_KEY];
  return isAskDisplayResponse(rag) ? rag : null;
}

function sourceLabel(source: AskDisplaySource): string {
  return source.documentTitle?.trim() || source.fileName;
}

function sectionLabel(source: AskDisplaySource): string | null {
  if (!source.sectionPath?.length) return null;
  return source.sectionPath.join(" › ");
}

/**
 * Fixed RAG source renderer — reads structured metadata.custom.rag only.
 * Does not invent file URLs; chunk text comes from the server DTO (index).
 */
export function Sources(): ReactNode {
  const custom = useAuiState((s) => s.message.metadata?.custom);
  const rag = readRagPayload(custom);
  const [openId, setOpenId] = useState<string | null>(null);

  if (!rag || rag.status === "insufficient_evidence" || rag.sources.length === 0) {
    return null;
  }

  const byDoc = groupByDocument(rag.sources);

  return (
    <div className="mt-4 border-t border-foreground/10 pt-3" dir="rtl">
      <p className="text-muted-foreground mb-2 text-[12px]">
        מקורות שצוטטו בתשובה
        {rag.generationModel ? (
          <span className="text-muted-foreground/70"> · {rag.generationModel}</span>
        ) : null}
      </p>
      <ul className="flex flex-col gap-2">
        {byDoc.map((group) => (
          <li key={group.key} className="text-[13px]">
            <div className="font-medium text-foreground/90">{group.label}</div>
            <ul className="mt-1 flex flex-col gap-1">
              {group.sources.map((source, index) => {
                const isOpen = openId === source.chunkId;
                const pages =
                  source.pages?.length ? `עמודים ${source.pages.join(", ")}` : null;
                const section = sectionLabel(source);
                return (
                  <li key={source.chunkId}>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenId(isOpen ? null : source.chunkId)
                      }
                      className={cn(
                        "text-muted-foreground hover:text-foreground rounded-control w-full text-start text-[12px] underline-offset-2 hover:underline",
                      )}
                      aria-expanded={isOpen}
                    >
                      [{index + 1}] {section ?? source.fileName}
                      {pages ? ` · ${pages}` : ""}
                    </button>
                    {isOpen ? (
                      <div
                        className="border-foreground/10 bg-muted/40 mt-1 rounded-control border px-3 py-2 text-[12px] leading-relaxed"
                        dir="auto"
                      >
                        <p
                          className="text-muted-foreground mb-1 font-mono text-[11px]"
                          dir="ltr"
                        >
                          {source.fileName}
                          <span dir="rtl">
                            {section ? ` · ${section}` : ""}
                            {pages ? ` · ${pages}` : ""}
                          </span>
                        </p>
                        <p className="whitespace-pre-wrap wrap-break-word">
                          {source.text || "(אין טקסט קטע זמין)"}
                        </p>
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

function groupByDocument(sources: AskDisplaySource[]) {
  const map = new Map<
    string,
    { key: string; label: string; sources: AskDisplaySource[] }
  >();
  for (const source of sources) {
    const key = source.documentId || source.relativePath;
    const existing = map.get(key);
    if (existing) {
      existing.sources.push(source);
    } else {
      map.set(key, {
        key,
        label: sourceLabel(source),
        sources: [source],
      });
    }
  }
  return [...map.values()];
}

/** Inline citation chips next to an answer part. */
export function PartCitations({
  sourceChunkIds,
  sources,
}: {
  sourceChunkIds: string[];
  sources: AskDisplaySource[];
}): ReactNode {
  const [openId, setOpenId] = useState<string | null>(null);
  const indexed = useMemo(() => {
    return sourceChunkIds
      .map((id) => sources.find((s) => s.chunkId === id))
      .filter((s): s is AskDisplaySource => Boolean(s));
  }, [sourceChunkIds, sources]);

  if (indexed.length === 0) return null;

  return (
    <span className="ms-1 inline-flex flex-wrap items-center gap-1 align-super">
      {indexed.map((source) => {
        const isOpen = openId === source.chunkId;
        return (
          <span key={source.chunkId} className="relative inline-block">
            <button
              type="button"
              className="text-muted-foreground hover:text-foreground rounded-control border-foreground/15 border px-1 py-px text-[10px] leading-none"
              aria-label={`מקור: ${sourceLabel(source)}`}
              onClick={() => setOpenId(isOpen ? null : source.chunkId)}
            >
              מקור
            </button>
            {isOpen ? (
              <span
                className="border-foreground/10 bg-background absolute end-0 top-full z-20 mt-1 w-[min(22rem,70vw)] rounded-control border p-2 text-[12px] shadow-sm"
                dir="auto"
              >
                <span className="text-muted-foreground mb-1 block font-mono text-[11px]">
                  {sourceLabel(source)}
                  {sectionLabel(source) ? ` · ${sectionLabel(source)}` : ""}
                  {source.pages?.length
                    ? ` · עמודים ${source.pages.join(", ")}`
                    : ""}
                </span>
                <span className="block whitespace-pre-wrap wrap-break-word">
                  {source.text || "(אין טקסט קטע זמין)"}
                </span>
              </span>
            ) : null}
          </span>
        );
      })}
    </span>
  );
}

export function useMessageRag(): AskDisplayResponse | null {
  const custom = useAuiState((s) => s.message.metadata?.custom);
  return readRagPayload(custom);
}
