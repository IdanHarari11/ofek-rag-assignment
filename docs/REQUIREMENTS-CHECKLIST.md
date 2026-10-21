# Requirements vs assignment PDF

Source: `מבחן_בית_RAG.pdf` (2 pages).  
Stage 8 update (2026-10-21): visual render to PNG + PDFKit text extract. Details: `docs/SUBMISSION-VERIFY.md`.

## PDF reading status

| Area | Status |
| --- | --- |
| Page 1 — background, task, “prefer I couldn’t find” | **Fully read** (visual + PDFKit) |
| Page 1 — “what’s included” table | **Semantically recovered**: zip with `corpus/` (33 docs) and `dem_set/`/`dem_questions.json` (15 questions). Auto-extract of `_` names garbled — does not block understanding |
| Page 1 — mandatory req 1 (Ingestion) | **Full read**: MD/Word/PDF including tables |
| Page 2 — reqs 2–7, submission, rules, interview | **Fully read** |

Requirement check is **complete** for mandatory and submission items. Vision-only contradictory claims (e.g. 32 questions) were **not** adopted when they disagreed with PDFKit and on-disk files.

## Mandatory requirements

| # | Requirement (from PDF) | Implementation | Demo (command / file) | Gap |
| --- | --- | --- | --- | --- |
| 1 | **Ingestion** — Markdown / Word / PDF including tables | `src/ingestion/` | `pnpm ingest`; `pnpm test:ingestion` | PDF structure warnings |
| 2 | **Retrieval** — justified retrieval (vector/hybrid/rerank etc.) | Hybrid default after experiment | `pnpm eval:hybrid` | No rerank |
| 3 | **Generation** — Hebrew from retrieved chunks only | `ask()` | `pnpm ask`; stage5.3 / stage4 active | D05/D11 — see failures |
| 4 | **Source citation** — document (+ section desired) | `sources` + UI | `/api/ask`, HomeDemo | No URL to raw corpus file |
| 5 | **Know limits** — do not invent | `insufficient_evidence` | D04 / X02 | PIR omission (D11) = completeness |
| 6 | **Evaluation** — retrieval and answer separately | `eval:*` | `eval_results/` | Answer review manual / AI-assisted |
| 7 | **Interface** — API or chat + sources | API + chat + bounded history | `pnpm dev` | No streaming |

## Submission package (from PDF)

| Submission item | Implementation | Demo | Gap |
| --- | --- | --- | --- |
| GitHub repo (public or granted) + runnable code + instructions | README, INSTALL, `prepare:rag` | Zero-copy verify — SUBMISSION-VERIFY | Remote push — not done in stage 8 |
| Documented API keys | `.env.example` | same file | — |
| Detailed eval per question | `eval_results/ask-eval-stage5.3.*` etc. | EVALUATION-SUMMARY | — |
| README: split, embedding, retrieval, no-answer, cost/time | README | README | — |
| Failure analysis | `FAILURES-AND-NEXT-WEEK.md` | same | — |
| “With one more week” | same doc | same | — |

## Rules / context

| Topic | Coverage |
| --- | --- |
| Prefer “couldn’t find” | `insufficient_evidence` |
| Extra interview questions | Documented — no generalization proof |
| AI tools + README note | Documented; scope expanded beyond base PDF (conversation, tracing, applicability, review experiment, Stage 6 holdout) |
| Grade not accuracy-only | Separate review dimensions |

## Missing mandatory requirement?

**None found** in the PDF that is not covered in the tables above.

## Open gaps (quality / process)

1. D05, D11, context budget  
2. No streaming; history capped (6 turns / 6000 chars) — dropped turns invisible to the model  
3. GitHub remote + push — out of scope for stage 8  
4. **Not production-ready** — no claim that answers are verified ground truth  
5. Stage 7 English prompts may change `promptBundleId` and slightly shift behavior — regression on frozen Stage 6 set, not new holdout
