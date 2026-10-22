# Closure round — multi-applicability + retrieval (2026-10-22)

**Config:** `gpt-4.1-mini`, answer review **off**. Partial-update annotation and computed temporal facts **unchanged**. Date arithmetic **not retuned** this round (Generation may still ignore computed day-diff facts).

## Changes

### 1. Multi-scenario applicability (`src/rag/document-relations/multi-scenario.ts`)

- Detect independent policy scenarios via issue anchors / explicit compare phrasing — **not** raw date count.
- On multi-scenario: `resolveVersionDecisions` → `unresolved` / `multi_scenario_comparison_keep_versions` (keeps 2024+2026 in context; no global demotion).
- **Bugfix:** evaluate each of `[original, standalone]` independently (OR). Joining them double-counted the same scenario’s `הונפקה` and falsely triggered multi-mode for single issue+renewal and conversation corrections.

### 2. One retrieval change — corpus retrieval aliases (`src/rag/retrieval-aliases.ts`)

Search-only lines appended to `embeddingText` (not citation body):

| Document | Bridge |
| --- | --- |
| `12_home_contents_limits` | Hebrew «תקרת כיסוי» ↔ corpus «גבול אחריות» / מזומנים |
| `30_agent_faq_en` | Hebrew surface forms + short paraphrase of EN clawback Q&A (BM25 has no stemming: עמלת≠עמלה, ביטל≠ביטול) |

No question→documentId routing, no hardcoded answers/eval IDs, no Generation masking, no extra retrieval mechanisms (no RRF retune).

## Verification artifacts

- Live ask probes: `eval_results/closure-multi-retrieval-2026-10-22T07-58-10-764Z.json` (14/14 OK)
- **Vector-only** snapshot (mis-labeled in an earlier draft as “retrieval after”): `eval_results/retrieval-eval-closure-after-2026-10-22.*` — mode=**vector**, R@5 0.643→0.714
- **Hybrid alignment** (correct active-path comparison): see `docs/retrieval-metrics-alignment-2026-10-22.md`
  - Hybrid before aliases: R@5=0.929 MRR=0.732
  - Hybrid after aliases: R@5=0.929 MRR=0.774 (`eval_results/hybrid-comparison-after-aliases-2026-10-22.*`)

Status: **resolved on tested regression cases** (multi-scenario probes, home cash, clawback HE/HE+EN). **E15 not claimed.**

## FAQ reference (agent commission)

From `corpus/30_agent_faq_en.md`: cancel within **120 days** of issue → **full** commission clawback; **121 days–12 months** → **pro-rata**. Day 100 → full; day 130 → pro-rata. Distinct from customer treatment fees (3%/150 under 2025 cancel update).

## Remaining limits

- Pure-Hebrew agent clawback: hybrid@5 OK after paraphrase aliases; **vector alone** may still miss (`vec@5=false` on HE-only probe) — BM25 carries hybrid.
- Rewrite on follow-ups may drop “not asking about customer fees”; distinguishing clawback/עמלה usually kept.
- Computed temporal facts: model may still ignore (out of scope this round).
- Holdout set is **not** re-presented as a new unseen holdout.
