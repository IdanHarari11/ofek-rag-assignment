# Short code map

| What to change | Where |
| --- | --- |
| **Chunking** (section boundaries, short docs as one chunk, token estimate) | `src/chunking/` — mainly split policy and CLI `scripts/chunk.ts` |
| **Retrieval** (vector / BM25 / hybrid RRF, topK) | `src/rag/retrieve.ts`, `bm25.ts`, `rrf.ts`, `tokenize.ts`; called from `ask()` / `scripts/retrieve.ts` |
| **Prompt / answer policy** (applicability, abstention, clarification, `answerParts` shape) | `src/rag/generate.ts` (`buildSystemPrompt`, `buildUserPrompt`, output schema) |
| **Context budget / per-document expansion** | `src/rag/context-builder.ts` (base) + `src/rag/document-relations/enrich-context.ts` (versions/relations) — `DEFAULT_CONTEXT_BUDGET_TOKENS` (3500) |
| **Applicability / versions / partial updates** | `config/document-relations.manifest.json` + `src/rag/document-relations/` (dates, resolve, enrich, load+sourceHash) |
| **Draft review / limited revision (Stage 5 experiment)** | `src/rag/answer-review/` — `ANSWER_REVIEW_ENABLED` (default: off); up to 2 reviews + 1 revision |
| **Citation id validation and answer/citations assembly** | `src/rag/validate-answer.ts` (structure only — not semantic_review) |
| **Orchestration** | `src/rag/ask.ts` — rewrite? → Hybrid → enriched context → generate → [review?] → assemble |
| **Conversation history** | `src/rag/history.ts`, `src/rag/rewrite-query.ts`; caps `HISTORY_MAX_TURNS=6`, `HISTORY_MAX_TOTAL_CHARS=6000` |
| **Tracing (ask)** | `src/rag/trace/` — `AskTraceSession`, JSONL in `data/traces/`; `context` stage includes applicability; read: `pnpm trace -- <requestId>` |
| **Thin browser API** | `src/app/api/ask/route.ts` + DTO in `src/lib/ask-display.ts` (includes `requestId`) |
| **Answer → UI mapping** | `src/lib/rag-chat-model-adapter.ts` → `metadata.custom.rag`; display in `src/components/home-demo/messages.tsx`, `sources.tsx` |
| **Runtime separate from shell** | `src/components/demo-runtime/demo-runtime-provider.tsx` (localStorage threads + history to API) |
| **Retrieval / hybrid / ask eval** | `src/eval/`, `scripts/eval-*.ts` (`dev_set` read only here) |
| **Stage 6 holdout (20 questions)** | `dev_set/extended_eval_stage6.json` + `.sha256`; load/freeze: `src/eval/load-extended-set.ts`; run: `pnpm eval:ask-stage6-extended` |
| **Stage 6 quality summary** | `docs/stage6-quality-summary.md`, `docs/stage6-config-freeze.md` |

Clarification: the sources renderer is **fixed** (React) on structured data — not GenUI / free HTML from the model.

**Active vs rejected:** `src/rag/clarify.ts` (pre-retrieve clarify) exists but is **not** wired to `ask()` — rejected after Stage 5.2. Semantic review is implemented but **off** by default.
