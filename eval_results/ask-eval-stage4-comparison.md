# Ask eval comparison — Stage 5.3 → Stage 4 (applicability)

Baseline: `ask-eval-stage5.3.*`  
After: `ask-eval-stage4.*` (Hybrid + conversation rewrite path + document-relations enrichment)

Note: Generation wording can vary between runs even when status stays the same; do not attribute every phrasing change to the new mechanism.

## Status counts

| | answered | insufficient_evidence | clarification_needed |
| --- | ---: | ---: | ---: |
| Stage 5.3 | 14 | 1 | 0 |
| Stage 4 | 14 | 1 | 0 |

No status flips on the 15-question set in this run.

## Timing and tokens (15 questions, sequential)

| | Stage 5.3 | Stage 4 |
| --- | ---: | ---: |
| Avg wall ms / question | ~1824 | ~2339 |
| Avg generation total tokens | ~4216 | ~4971 |

Context enrichment can add linked chunks (reported separately as `linkedChunkIds`). Recall@5 still uses Hybrid top-K only (`hybridTopKChunkIds`).

Tracing wall overhead was **not measured separately** in this stage; no extra experiment was run for it.

## Applicability / context decisions (highlights)

| id | Version / relationship outcome | Notes |
| --- | --- | --- |
| D03 | `car_comprehensive_policy` **selected** → 2026 (`issue`, on/after 1.3.2026) | Answer cites 1,100 ₪ from 2026 policy; demoted 2024 omitted from generation context |
| D05 | **unresolved** (`missing_issue_or_renewal_date`) | Both policy alternatives kept; model still answered with car amounts (known ambiguity limitation; not fixed by version rules alone) |
| D08 | `cancellation_procedure` **partial_update** | Answer uses 2025 refund rule; base kept for non-replaced sections |
| D10 | `car_marketing` **selected** / marketing non-binding | Binding rider (`08_replacement_car`) cited; brochure deferral activated |

## Answer / citation quality vs baseline

- **D03:** Correct 2026 amount with explicit issue date — improved version selection vs retrieval rank alone.
- **D08:** Full refund within 14 days from 2025 update; no pro-rata contradiction in this run.
- **D05:** Still `answered` without `clarification_needed` (same open failure as 5.3); applicability correctly marks unresolved.
- Phrasing differences elsewhere may be model variance across runs.

## Regressions

- No status regressions vs 5.3 on this run.
- Higher average latency/tokens expected from richer context + applicability prompt lines.
- Linked expansion can consume budget (`budget_linked_expansion` omissions) — reported in context tracing, not silent.
