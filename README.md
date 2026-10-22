# Ofek Insurance — RAG take-home assignment

AI assistant for fictional insurance call-center agents: free-form Hebrew question → document-grounded answer with openable sources. Prefer “I couldn’t find it” over invention.

**This is a homework / demo system, not production software.** Answers are not verified ground truth; citation checks are structural (`chunkId`), not semantic proof.

**Live demo:** [https://ofek-rag-assignment.vercel.app](https://ofek-rag-assignment.vercel.app) (requires a valid server-side `OPENAI_API_KEY` on Vercel).

**Requires Node.js ≥ 22** and **pnpm** (lockfile verified with pnpm 12.x; see `package.json` `engines` / `packageManager`). Full install notes: [`docs/INSTALL.md`](docs/INSTALL.md).

## Quick start

```bash
pnpm install
cp .env.example .env   # set OPENAI_API_KEY (server-only; never commit .env)
pnpm prepare:rag       # ingest → chunk → index (first time; rebuilds local data/)
pnpm dev               # http://localhost:3000
```

In the UI, try: «מה שעות הפעילות של מוקד שירות הלקוחות ביום שישי?» → answer + source button with chunk text from the index.

CLI: `pnpm ask -- "…"`

UI shell adapted from [assistant-ui](https://github.com/assistant-ui/assistant-ui) HomeDemo — attribution and MIT license: [`docs/ATTRIBUTION.md`](docs/ATTRIBUTION.md). Demo script: [`docs/DEMO-SCRIPT.md`](docs/DEMO-SCRIPT.md).

## Architecture (short)

```
corpus/ ──ingest──► data/parsed/ ──chunk──► data/chunks.json
                                              │
                                         index (embeddings)
                                              ▼
                                      data/index/embeddings.json
                                              │
     UI (HomeDemo) ──► POST /api/ask ──► ask() ──► hybrid retrieve
                         │                    ├── context expand (budget)
                         │                    └── generate (Hebrew + answerParts)
                         └◄── display DTO (status, answer, sources…)
```

**Why one Next.js app + standalone RAG core?**  
Single app for submission and demo; core in `src/rag/` runs from CLI, API, and eval scripts without React. You can test `ask()` in isolation and wire UI without changing answer logic.

## Document ingestion

- 33 files under `corpus/`: Markdown (`unified`/`remark`/`remark-gfm`), DOCX (`mammoth`), PDF (`unpdf`).
- Tables as structure + textual `column: value` representation.
- Typical warnings: PDF table structure inferred from positions (`structureInferred`); DOCX sometimes unmapped styles; HTML comments stripped from Markdown search text.
- Command: `pnpm ingest` → `data/ingestion-report.json`.

## Chunking

- Target length is heuristic (not the model tokenizer); short documents stay **one chunk** so brief facts are not split.
- Long documents (e.g. general terms) split by sections / table row groups.
- Rationale: local context + metadata (document, section, pages) per chunk.
- `pnpm chunk` → 49 chunks in the last run.

## Models and settings

| Role | Default | Env |
| --- | --- | --- |
| Embedding | `text-embedding-3-small` (1536) | `OPENAI_EMBEDDING_MODEL` / `OPENAI_EMBEDDING_DIMENSIONS` |
| Generation (and rewrite / optional review) | `gpt-4.1-mini` | `GENERATION_MODEL` |
| API key | server only | `OPENAI_API_KEY` (see `.env.example`) |

Embedding choice: cheap/fast for a small Hebrew+English corpus with a local index (no vector DB).

## Retrieval — why Hybrid

Active path: **hybrid** (BM25 + vector via equal-weight RRF). `pnpm eval:retrieval` defaults to **vector** only — do not mix those numbers with Hybrid.

Dev-set (14 scored questions), post search-only retrieval aliases (2026-10-22):

| Mode | R@5 | MRR | Report |
| --- | --- | --- | --- |
| vector | 0.714 | 0.607 | `eval:retrieval` / hybrid-comparison vector column |
| lexical | 0.893 | 1.000 | hybrid-comparison |
| **hybrid (active)** | **0.929** | **0.774** | `eval_results/hybrid-comparison-after-aliases-2026-10-22.*` |

Pre-alias Hybrid baseline (2026-10-21): R@5=0.929, MRR=0.732 — same R@5 after aliases. Alignment notes: `docs/retrieval-metrics-alignment-2026-10-22.md`.

**R@5 / MRR** = whether reference **documents** appear in top‑K **chunks** on **14** scored 15-dev questions (D04 N/A). They are **retrieval** metrics only — **not** “93% answer accuracy” and not claim-support quality. End-to-end answer judgments: [`docs/submission-final-evaluation-2026-10-22.md`](docs/submission-final-evaluation-2026-10-22.md).

Search-only **retrieval aliases** (Hebrew bridges for EN FAQ / home cash ceilings) live in `embeddingText` only; cited source cards show chunk body text, never aliases.

D04 is excluded from source-match averages (no reference sources).

## Context and budget

After retrieve: sibling expansion by `documentId` up to ~**3500** estimated tokens (`DEFAULT_CONTEXT_BUDGET_TOKENS`). Whole chunks only; retrieved first, expansions after. Budget can drop sections (e.g. §12 on D06).

## Answer policy

- Hebrew answer from supplied context only.
- Applicability / versions: match explicit issue or renewal date when known.
- Conflicts: binding policy terms beat marketing.
- Abstention: neutral `insufficient_evidence`.
- Clarification: `clarification_needed` when essential info is missing (not always achieved — see D05).
- Citations: model returns `answerParts` with `sourceChunkIds`; server assembles `answer`/`citations` and validates ids — **not** semantic validation of content.

## retrievedChunks / contextChunks / sources

| Layer | Meaning |
| --- | --- |
| `retrievedChunks` | top‑K from Hybrid retrieval |
| `contextChunks` | what enters the prompt after expansion + budget |
| `sources` (UI) | only chunks cited in `answerParts` + text from index; stable `[n]` numbers across the answer; version labels from relations manifest when verified |

## Sources UI

Fixed React renderer (`home-demo/sources.tsx`) on `metadata.custom.rag` — not free-form HTML/components from the model, not GenUI.

## Main commands

```bash
pnpm prepare:rag          # ingest + chunk + index
pnpm dev                  # UI + API
pnpm ask -- "שאלה"          # prints requestId; writes trace to data/traces/
pnpm trace -- <requestId>   # stages/tokens/sources summary from JSONL
pnpm retrieve -- "שאלה" [--mode hybrid]
pnpm eval:retrieval       # vector-only baseline (historical; not submission path)
pnpm eval:hybrid          # vector vs lexical vs hybrid on 15-dev
pnpm eval:submission-final  # frozen Hybrid suite → ask 15 + extended 20 + conversations + manual-fail
pnpm eval:ask / eval:conversation  # individual Hybrid runners
pnpm test:gates           # typecheck + lint + tests + build
```

## Submission docs (start here)

| Doc | Content |
| --- | --- |
| **[`docs/submission-final-evaluation-2026-10-22.md`](docs/submission-final-evaluation-2026-10-22.md)** | **Final frozen-config evaluation** (Hybrid; denominators; remaining failures) |
| [`docs/submission-config-freeze-2026-10-22.md`](docs/submission-config-freeze-2026-10-22.md) | Submission freeze: models, hashes, `promptBundleId`, knobs |
| [`docs/INSTALL.md`](docs/INSTALL.md) | Install + clean-copy verify |
| [`docs/FAILURES-AND-NEXT-WEEK.md`](docs/FAILURES-AND-NEXT-WEEK.md) | Failures + “with another week” |
| [`docs/CODE-MAP.md`](docs/CODE-MAP.md) | Where to change what |
| [`docs/REQUIREMENTS-CHECKLIST.md`](docs/REQUIREMENTS-CHECKLIST.md) | Assignment PDF ↔ implementation / gaps |
| [`docs/DEMO-SCRIPT.md`](docs/DEMO-SCRIPT.md) | ~5 minute demo |
| [`docs/EVALUATION-SUMMARY.md`](docs/EVALUATION-SUMMARY.md) | Historical run index (not the final freeze result) |

Raw / historical reports: `eval_results/` (keep as history; do not treat older stage* files as the final configuration).

## Time and cost (brief)

Official pricing checked **2026-10-21** — links in `docs/EVALUATION-SUMMARY.md`.

- Indexing: ~23k embedding tokens ≈ **$0.0005**.
- Average question (15 questions stage5.3, **serial**): ~**1.8s** wall; estimate ~**$0.002**/question (input/output split).
- Tracing: `cachedInputTokens` logged when provider reports (subset of input — not double-counted); no dollar estimate in trace. **Tracing overhead was not measured separately** (no A/B for trace write cost).

## AI tools used during development

**Cursor Agent** was used for review, Next/HomeDemo setup, ingestion/chunking/RAG, hybrid and ask experiments, UI wiring, submission documentation, and **scope beyond the base PDF** (conversation context + rewrite, ask tracing, document applicability/versions, optional semantic answer review experiment, Stage 6 extended holdout, English developer-doc translation in Stage 7).

Core decisions (Hybrid default, context budget, policies, rejected pre-retrieve Clarify gate) are recorded in reports and `PROGRESS.md`.

## Stage 7 — developer docs + English prompts

- **Developer-facing** markdown (this README and `docs/*` prose) is in **English**; Hebrew **user** copy, corpus, and eval Q/A examples stay Hebrew.
- **System/developer prompts** are English; user answers remain Hebrew. Current submission `promptBundleId`: **`prompt-939569b5812dce49`** (see freeze doc). Stage 7 translation regression notes: [`docs/stage7-prompt-translation-regression.md`](docs/stage7-prompt-translation-regression.md) on the **same** exposed extended set — **not** unseen testing.

## Tracing (ask path)

- Each `ask()` gets a server `requestId`; returned by API (success and error) and shown in CLI.
- Local JSONL: `data/traces/ask-traces.jsonl` (gitignored; no public endpoint).
- Metadata only (stages, timings, tokens, chunk ids, scores) — not questions/answers/history/source text/prompts/keys.
- File policy: ~5MB active file, up to 20 rotation files; cross-process lock on rotate.
- Scope: ask path only — thread title generation is **not** included in ask token totals.
- Trace `validation` = structure/`chunkId` only — not semantic support check.
- `context` stage can include applicability/version decisions when manifest is active.

## Applicability and document versions

- Small manifest: `config/document-relations.manifest.json` — evidence-based entries only + `sourceHash` (stale mapping rejected at load).
- After Hybrid: version pick / partial update / linked docs within context budget; Recall@5 stays on original top‑K.
- Dates only when explicit (issue / renewal / event) — do not substitute; event date does not prove issue date.
- Eval: `pnpm eval:ask-stage4` → `eval_results/ask-eval-stage4.*`.
- Extended holdout (Stage 6): `pnpm eval:ask-stage6-extended` — frozen set in `dev_set/extended_eval_stage6.json` (not in index/prompts). Summary: `docs/stage6-quality-summary.md`.

## Optional draft answer review

- After generation: structured support/completeness check + at most one revision on the same sources.
- **Off by default** (`ANSWER_REVIEW_ENABLED=0`) — paired eval showed false blocks and misses; see `eval_results/ask-eval-stage5-comparison.md`.
- Enable for experiments: `ANSWER_REVIEW_ENABLED=1` or `pnpm eval:ask-stage5-paired`.
- Semantic review failure → `answer_review_failed` (not `insufficient_evidence`); API/JSON failure → `answer_review_error`.
- Reviewer does **not** validate absolute truth.

## Conversation context (follow-ups)

- Client sends current user question + optional **active branch** history (user/assistant only).
- Window: up to **6** prior turns and ≤**6000** characters; oldest turns dropped whole (`HISTORY_MAX_TURNS`, `HISTORY_MAX_TOTAL_CHARS`).
- With history: extra model call for query rewriting (`standaloneQuestion` + `unresolvedReferences`) before retrieval — extra cost/latency by history length.
- Without history: no rewrite; same path as before.
- Facts and citations must still come from **current-turn** retrieved sources only.

**Historical (Stage 0–1 / early UI):** each question was treated in isolation with no rewrite. **Current behavior** supports follow-ups as above.

## Browser persistence (threads)

- Thread list and messages persist in **browser `localStorage` only** (`ofek-rag:` prefix) for demo convenience — **not** cloud sync, not shared across devices, cleared if user clears site data.
- Follow-up context for `ask()` is taken from the **active branch** sent to `/api/ask`, subject to the history caps above.

## Known limitations (submission)

- **Hybrid R@5 is not answer accuracy**; Document Recall ≠ claim support.
- **Computed temporal / day-diff facts do not guarantee** correct Generation use (clock mix-ups can remain).
- Threads persist in **browser `localStorage` only**; history window is capped (6 turns / 6000 chars).
- **No streaming**; experimental semantic **answer review is off**.
- Generation **model-comparison** conclusions are from **limited** experiments.
- Dollar **costs are estimates** when usage splits are incomplete.
- Remaining quality gaps (E15 retrieval, E16 ambiguity, D11 PIR, MF-D clocks): [`docs/submission-final-evaluation-2026-10-22.md`](docs/submission-final-evaluation-2026-10-22.md), [`docs/FAILURES-AND-NEXT-WEEK.md`](docs/FAILURES-AND-NEXT-WEEK.md).

## Active configuration (summary)

**Submission freeze:** Hybrid + search-only retrieval aliases + document-relations (incl. multi-scenario keep) + computed temporal facts + rewrite (with history) + `answerParts`/citations; answer review **OFF**; `gpt-4.1-mini`; embeddings `text-embedding-3-small` 1536; context budget **3500**.

Details: [`docs/submission-config-freeze-2026-10-22.md`](docs/submission-config-freeze-2026-10-22.md). Older Stage 6 freeze docs are historical.
