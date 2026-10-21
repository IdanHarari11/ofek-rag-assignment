# Evaluation summary report

> **Stage 7 note:** Developer prose in this file is in English. Historical run artifacts under `eval_results/*.json` and per-run `*.md` reports are **unchanged** (Hebrew answers and original wording preserved). After English prompt translation, `promptBundleId` may differ from `docs/stage6-config-freeze.md`; re-run **`pnpm eval:ask-stage6-extended`** (and related) on the **same** frozen holdout for **regression** — not as a new unseen set.

One readable report pointing to detailed artifacts. **Do not mix runs** — every figure names its source run. **No pooled average** that hides differences between evaluation groups.

This system is **not production-ready**; manual and AI-assisted quality scores are **not** verified ground truth.

## Data sources

| Topic | File / run | Created |
| --- | --- | --- |
| Vector retrieval (baseline) | `eval_results/retrieval-eval.*` | 2026-10-21T05:34:48Z |
| vector / lexical / hybrid compare | `eval_results/hybrid-comparison.*` | 2026-10-21T05:50:21Z |
| Answer — historical baseline (before structured applicability) | `eval_results/ask-eval-stage5.3.*` | 2026-10-21T06:30:31Z |
| **Answer — active config** (Hybrid + applicability, review=off) | **`eval_results/ask-eval-stage4.*`** | 2026-10-21T12:44:53Z |
| Extended holdout 20 (Stage 6) | `eval_results/ask-eval-stage6-extended.*` + `docs/stage6-quality-summary.md` | Stage 6 |
| Conversations — active config (review=off) | `conversation-eval-2026-10-21T13-32-26-763Z.*` | Stage 6 |
| Config freeze / reviewer closure | `docs/stage6-config-freeze.md`, `docs/stage6-reviewer-experiment-closure.md` | Stage 6 |
| **Stage 7 prompt-EN regression** (same sets; not unseen) | `ask-eval-stage7-dev15.*`, `ask-eval-stage7-extended.*`, `conversation-eval-2026-10-21T13-50-44-473Z.*` + `docs/stage7-prompt-translation-regression.md` | Stage 7 |
| History / experiments | `ask-eval-stage5-baseline.*`, `stage5.1*`, `stage5.2*`, `stage5-paired*` | pre/active experiment |

`ANSWER_REVIEW_ENABLED` remains **off** in the active configuration. Active ask path after Stage 7 uses English **prompt instructions** (`promptBundleId` `prompt-11221afce7f41ed1`); answers to users remain Hebrew.

---

## Retrieval

### Metric definitions

- **Document Recall@K:** Fraction of unique reference **documents** appearing among the first **K retrieved chunks** (not K documents). Duplicate chunks from the same document do not increase the score. See `src/eval/retrieval-metrics.ts`.
- **MRR:** Reciprocal rank of the first chunk whose document is in the reference set.
- **D04** (no reference sources): source-match metrics = **N/A**, excluded from averages (14 questions with sources).
- Similarity / RRF scores are **not** probability the answer is correct.
- **Document match ≠ sufficient evidence for an answer:** a document can rank in top5 without the critical section (definition/exception/condition) entering context or the answer.

**R@5 and MRR measure retrieval only**, not end-to-end answer correctness.

### Results (hybrid-comparison)

| Mode | R@1 | R@3 | R@5 | MRR | avg local search ms |
| --- | --- | --- | --- | --- | --- |
| vector | 0.357 | 0.536 | 0.643 | 0.589 | 0.46 |
| lexical | 0.750 | 0.857 | 0.857 | 0.952 | 0.96 |
| hybrid | 0.429 | 0.821 | 0.929 | 0.732 | 0.34 |

- Hybrid vs vector on R@5: **+5 / −0 / =9**.
- Hybrid chosen as default for `ask()` — retrieval gain on this set without R@5 regressions (**not** generalization proof).
- Per-question detail: `eval_results/hybrid-comparison.md`.

---

## Answer — three groups (Stage 6)

Detailed summary: **`docs/stage6-quality-summary.md`**.

### A. Original 15 `dev_set` (active config = stage4)

- Hybrid + document-relations; **review=off**; model `gpt-4.1-mini`
- Status: answered=14, insufficient_evidence=1; avg ~2.3s / ~4971 gen tokens
- **D05 / D11 not considered fixed** (still answered without clarification / full PIR)
- Historical 4-dimension table below remains from **stage5.3** (pre-applicability) — **do not** mix with stage4 statuses as one scored run

### B. New 20-question holdout

- Frozen file: `dev_set/extended_eval_stage6.json` (sha256 in `.sha256`); AI-assisted during development — **not** an external independent gold set
- R@5≈0.87 (n=15 with sources); evidence full=12 / partial=1 (E07) / missing=2 (E14–E15 EN FAQ)
- Generation failures: E04 (wrong payment timeline), E16 (Ofek Plus assumption); retrieval: E14–E15
- **E07 partial evidence:** 2026 transition chunk omitted from context; 2024 policy chunk present — answer **950 ₪** still **pass** on all quality dimensions (see stage6-quality-summary)
- **E17:** presenting **both** SLA alternatives accepted under frozen rubric (pass) even though JSON `expectedBehavior` says clarification
- Quality scoring AI-assisted vs corpus — not independent human panel; Stage 5 reviewer **not** used as judge

### C. Conversation fixtures (active config)

- Run: `conversation-eval-2026-10-21T13-32-26-763Z.*` — standalone failures=0
- C05b → clarification; C06 → insufficient; C07 → clarification (**not** assumed permanently fixed)
- Rewrite success ≠ answer correctness

---

## Answer (stage5.3 run — historical, before Stage 4)

- Retrieval mode: **hybrid**; model: **gpt-4.1-mini**
- Status (D01–D15): answered=14, insufficient_evidence=1 (D04); system_error=0
- Questions run **serially** (`for` in `run-ask-eval.ts`), not parallel.
- Full answers + context: `eval_results/ask-eval-stage5.3.md` (and JSON).

### Unified manual rubric (4 dimensions)

| Score | Meaning |
| --- | --- |
| **pass** | Meets dimension requirement for that question |
| **partial** | Material gap but not a full unsupported conclusion |
| **fail** | Failed dimension |
| **n_a** | Dimension N/A (e.g. conclusion when clarification was required) |

Dimensions:

1. **conclusion** — main conclusion correctness  
2. **claimSupport** — claims supported by supplied context  
3. **completeness** — material eligibility / exceptions / calculation bases  
4. **behavior** — answered / clarification / abstention fit  

**Required clarifications:**

- Review is **manual**, organized with AI tools (Cursor) — human responsibility for scores.
- **`answered` is not a correctness score.**
- **chunkId validation is not semantic support checking.**

### D01–D15 table (summary; short answer)

Full answers: `ask-eval-stage5.3.md`. Sources = cited in run `sources`.

| id | status | cited sources | conclusion | claimSupport | completeness | behavior | answer (short) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| D01 | `answered` | 28_call_center_hours.md | pass | pass | pass | pass | שישי 08:00–12:00 |
| D02 | `answered` | 20_forms_catalog.pdf, 22_cancellation_procedure_2023.md | pass | pass | pass | pass | טופס 4401 (+ ערוץ מוקד) |
| D03 | `answered` | 02_car_comprehensive_policy_2026.pdf | pass | pass | pass | pass | 1,100 ₪ (2026) |
| D04 | `insufficient_evidence` | — | pass | pass | pass | pass | neutral; no invention |
| D05 | `answered` | car policies 2024/2026, windshield | n_a | partial | fail | fail | car amounts without clarify |
| D06 | `answered` | terms+annex+policies+add driver | pass | pass | partial | pass | no cover; §12 outside budget |
| D07 | `answered` | 15_travel_preexisting_conditions.docx | pass | pass | pass | pass | 3 business days |
| D08 | `answered` | 23_cancellation_procedure_update_2025.md | pass | pass | pass | pass | full refund within 14 days |
| D09 | `answered` | 12_home_contents_limits.docx | pass | pass | pass | pass | cash up to 2,000 ₪ |
| D10 | `answered` | 08_replacement_car.md, 09_marketing_brochure_car.md | pass | pass | pass | pass | service letter limits vs marketing |
| D11 | `answered` | 16_travel_luggage.md | pass | pass | partial | pass | up to $150; **PIR omitted** |
| D12 | `answered` | 07_towing_roadside.md | pass | pass | pass | pass | up to 4 tows |
| D13 | `answered` | 15_travel_preexisting_conditions.docx | pass | pass | pass | pass | pregnancy complications to week 26 only |
| D14 | `answered` | 13_home_earthquake_annex.pdf | pass | pass | pass | pass | 10% / 5% TAMA structure |
| D15 | `answered` | 03_car_general_terms.pdf, 18_claims_process_car.md | pass | pass | pass | pass | police report within 24h |

### Aggregate counts (D01–D15 only, stage5.3)

| Dimension | pass | partial | fail | n_a |
| --- | --- | --- | --- | --- |
| conclusion | 14 | 0 | 0 | 1 |
| claimSupport | 14 | 1 | 0 | 0 |
| completeness | 12 | 2 | 1 | 0 |
| behavior | 14 | 0 | 1 | 0 |

Extra checks (not in reference set): X01 → `clarification_needed` (behavior pass); X02 → `insufficient_evidence` (pass).

---

## Live finding from Stage 6 (separate from 5.3 run)

Live browser/API on baggage delay (~8 hours): compensation amount returned but **PIR condition omitted again**, similar to partial completeness on D11 in 5.3.

This **does not rewrite** stage5.3 score table; it confirms the failure on the UI path.

Screenshots: `docs/screenshots-stage6/`.

---

## Time and cost (estimate)

Official pricing checked **2026-10-21**:

- Embeddings `text-embedding-3-small`: **$0.02 / 1M tokens** — [OpenAI API pricing](https://openai.com/api/pricing/)
- `gpt-4.1-mini`: input **$0.40**, cached input **$0.10**, output **$1.60** / 1M — [GPT-4.1 mini](https://developers.openai.com/api/docs/models/gpt-4.1-mini) / [pricing](https://developers.openai.com/api/docs/pricing)

### First index build

| | |
| --- | --- |
| Tokens (manifest) | prompt/total **23,084** (embeddings only) |
| Cost estimate | ≈ **$0.00046** |
| Wall time | **not measured separately** in index report (usage only) |

### Typical question (average over 15 stage5.3 questions, serial)

| Component | Value |
| --- | --- |
| Embedding (user question) | 737 input tokens total over 15 (~49/question) |
| Generation input | 61,380 tokens total |
| Generation output | 1,864 tokens total |
| Cached input | **not reported** in our usage — no discount assumed |
| Cost estimate for 15 questions | ≈ **$0.028** (≈ **$0.0018**/question avg) |
| Total time per question (avg `totalMs`) | ≈ **1.82s** |
| Of which retrieveMs (network embed + search) | ≈ **0.30s** |
| generationMs (provider) | ≈ **1.50s** |
| Local search only (hybrid-comparison) | ≈ **0.3–1ms** avg |

Do not infer cost from generation `total_tokens` alone — input and output rates differ.

Conversation + rewrite costs: see conversation eval reports (`totalRewriteMs`, rewrite token fields) — **not** included in the stage5.3 averages above.
