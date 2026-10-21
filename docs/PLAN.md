# Development plan — Ofek Insurance RAG

## Direction

- Next.js + TypeScript, single project (no microservices at this stage).
- assistant-ui for chat shell.
- RAG core independent of UI and Next.js — runnable from API and eval scripts.
- Ingestion as upfront scripts; model choices after measurable RAG path.
- Python for extraction only if TypeScript is unreliable (not assumed upfront).

## Agreed clarifications (keep throughout)

1. **Ingestion:** Success = completeness and quality of extraction (tables, applicability), not merely no crash.
2. **Retrieval:** Similarity scores are **not** probability the answer is correct. Abstention policy set later from evidence and measurement.
3. **Evaluation:** Separate retrieval quality, answer correctness, condition completeness, source support, clarification vs no-info.
4. **cross_lingual:** D07 can be answered from Hebrew docs. Reference `sources` lists are not exhaustive of all valid sources.
5. **Final README:** Document which AI tools were used and for what (including scope beyond base PDF).
6. **dev_set:** Evaluation only — not indexed, not in answer prompts. Do not tune to question ids.

## Planned architecture

```
corpus/ + parsers → chunks → embeddings → local index
ask(question) → retrieve → generate(answer + sources)
UI / API / evaluate.ts → same ask() core
```

## Development stages

| Stage | Content | Done when |
| --- | --- | --- |
| 0 | Review and plan | Done |
| 1 | Next.js + HomeDemo UI + Mock | Done |
| 2 | Ingestion for full corpus (md/pdf/docx) | Done — `pnpm ingest`, report 33/33 |
| 3 | Chunking on structured blocks | Done — `pnpm chunk`, 49 chunks / 33 docs |
| 4 | Embeddings + retrieve + retrieval eval | Done — local index + `retrieve` + `eval:retrieval` |
| 5 | Generation + source policy | Done — `ask()` Hybrid + context expand + validated citations |
| 5.1 | Targeted answer fix + eval | Done — stronger policy; 4 review dimensions; before/after report |
| 5.2 | Clarify before retrieve + answerParts | **Tried; rejected** — over-clarification (9 regressions + wanted D05) |
| 5.3 | Roll back Clarify gate; keep answerParts | Hybrid→gen path; open: D05 ambiguity |
| 6 | Wire UI to core | Done — API + LocalRuntime → ask(); sources in UI |
| 7 | Submission prep + demo docs | Done — checklist, INSTALL, summary, README, failures, demo |
| 8 | Final submission verify + local Git | Done — visual PDF, E2E from zero, local commit (no push) |
| 7 (docs) | English developer documentation + English system prompts | In progress — Hebrew user/corpus examples preserved |

## Folder layout

- `src/ingestion/` — parsers + types (stage 2)
- `scripts/ingest.ts` — `pnpm ingest`
- `data/parsed/` — JSON per document
- `data/ingestion-report.json` — summary
- `src/chunking/` — chunk split (stage 3)
- `scripts/chunk.ts` — `pnpm chunk`
- `data/chunks.json`, `data/chunking-report.json` — chunk outputs
- `src/rag/` — embeddings + index + retrieve + `ask()` (stages 4–5)
- `src/eval/` — retrieval/answer eval vs `dev_set` (only here; not in prompts)
- `scripts/index.ts`, `retrieve.ts`, `ask.ts`, `eval-retrieval.ts`, `eval-ask.ts`
- `data/index/embeddings.json` — vectors + manifest
- `eval_results/retrieval-eval.*`, `hybrid-comparison.*`, `ask-eval.*`

## Ingestion notes

- Success = extraction completeness (tables, applicability), not only no crash.
- PDF tables marked `structureInferred` + warning; verify critical cells.
- `structureInferred` ≠ information loss. Suspected partial extract → `extractionIncomplete` / `Partial extraction` warning.
- HTML comments removed from Markdown search text — not a substitute for prompt-injection defense.
- Generative UI deferred; no `render_spec` yet.

## Chunking notes

- Chunk ≠ ingestion block: block = document structure unit; chunk = search/citation unit with context.
- Length = heuristic token estimate `max(words*1.3, chars/2.8)` — not model tokenizer.
- Short documents stay one chunk; no split just to hit a size target.
- Large table: row groups with repeated headers + `tableRowRange`; do not cut logical rows.
- Applicability/title context from same doc recorded in `contextBlockIds` separately from `sourceBlockIds`.

## Embeddings / retrieval notes

- Index input: `data/chunks.json` only. `dev_set` not indexed.
- Same model and dimensions for chunks and queries; default `text-embedding-3-small` / 1536.
- Embedding text: title + section + body — no technical ids or extraction warnings.
- Local index with manifest (model, dims, hashes, formatVersion); mismatch → rebuild message (`pnpm index`).
- `retrieve({ mode })`: `vector` (cosine) | `lexical` (BM25) | `hybrid` (RRF c=60). Score ≠ confidence.
- BM25 on same `embeddingText`; no stemming/synonyms; k1=1.2 b=0.75 not tuned on dev set.
- Document Recall@K = unique reference **documents** in top‑K **chunks** — not proof the right section was retrieved.
- Reports: `eval_results/retrieval-eval.*` (baseline) and `hybrid-comparison.*` — do not overwrite each other.

## Generation / ask notes (stage 5)

- **Three layers:** (1) `retrievedChunks` = Hybrid top‑K for Recall@5; (2) `contextChunks` = sent to model after `documentId` expansion within budget; (3) `sources`/`citations` = cited parts validated against context only.
- Context expansion is after Hybrid — does not change Recall@5 ranking.
- Default budget: 3500 estimated tokens (`heuristic_he_en_v1`); whole chunks only; no mid-table/section cut.
- Answer model: `GENERATION_MODEL` (default `gpt-4.1-mini` — Structured Outputs per OpenAI docs).
- Statuses: `answered` | `clarification_needed` | `insufficient_evidence`. API/JSON errors = `GenerationSystemError`, not insufficient.
- `chunkId` check ≠ claim supported by source. No numeric confidence.
- `dev_set` read only in `eval:ask` after answering for manual review.

## Active path vs experiments

| Path | Status |
| --- | --- |
| Hybrid + applicability + rewrite (with history) | **Active** |
| Pre-retrieve Clarify | **Rejected** (code retained, unwired) |
| `ANSWER_REVIEW_ENABLED=1` default | **Rejected** — default **0** |
