# Stage 7 — Prompt English translation regression

**Purpose:** One active-config run after translating developer/model prompt instructions to English (intent preserved). **Not** a new holdout. The Stage 6 20-question set is reused for regression only.

**Config:** Hybrid + applicability ON, `ANSWER_REVIEW_ENABLED=false`, models unchanged.  
**New `promptBundleId`:** `prompt-11221afce7f41ed1` (was `prompt-ceab49598eebb4b9`).

**Note:** Translating prompts can change model behavior even when policy wording is meant to be equivalent. No quality tuning was done in Stage 7.

## Artifacts

| Set | Pre-translation (frozen) | Post-translation (Stage 7) |
| --- | --- | --- |
| Dev 15 | `eval_results/ask-eval-stage4-pre-stage7.*` (= historical `ask-eval-stage4.*`) | `eval_results/ask-eval-stage7-dev15.*` |
| Extended 20 | `eval_results/ask-eval-stage6-extended-pre-stage7.*` | `eval_results/ask-eval-stage7-extended.*` |
| Conversation | `eval_results/conversation-eval-stage6-active-pre-stage7.*` | `eval_results/conversation-eval-2026-10-21T13-50-44-473Z.*` |

Historical `ask-eval-stage4.*` and `ask-eval-stage6-extended.*` paths were **restored** to pre-translation content after copying Stage 7 outputs.

## Dev 15 (status-level)

| | Pre | Post |
| --- | --- | --- |
| statusCounts | answered 14, insufficient 1 | answered 13, insufficient 1, clarification 1 |
| system_errors | 0 | 0 |

**Material delta**

| id | Change | Assessment |
| --- | --- | --- |
| **D05** | `answered` (product dump) → `clarification_needed` | **Improvement** vs ambiguity policy; no translation-bug fix needed |
| Others | Same status; wording may differ | Spot-check: D04 abstention, D09 cash cap, D11 luggage delay still grounded |

## Extended 20 (regression on frozen holdout)

| | Pre | Post |
| --- | --- | --- |
| statusCounts | ans 16 / clar 1 / insuff 3 | **same** |
| R@5 / MRR (n=15) | ~0.867 / ~0.767 | **same** (retrieval unchanged) |
| evidenceCoverage | full 12 / partial 1 / missing 2 / n_a 5 | **same** |

**Content / quality deltas (not status-only)**

| id | Pre | Post | Assessment |
| --- | --- | --- | --- |
| **E07** | answered, evidence=partial, 950 ₪ | same pattern | Still OK: partial = missing 2026 transition chunk in context; amount still supported |
| **E14/E15** | EN FAQ miss | still miss / clarify | Unchanged retrieval gap |
| **E16** | unjustified Ofek Plus | large multi-product dump incl. Ofek Plus | **Still fail** (ambiguous “מה ההטבות שלי?”); not improved |
| **E17** | both car+home SLA alternatives → pass under frozen rubric | **car-only** SLA (3 business days) | **Regression vs frozen rubric** (`forbiddenAssumptions`: choosing one target without stating dependence). Clarification **or** explicit alternatives remain accepted; car-only is not. Documented — **no** question-specific prompt patch in Stage 7 |
| **E04** | invented payment timeline | similar invention risk | Known generation issue; unchanged class |

No proven mistranslation found that would uniquely explain E17; English prompts still require ambiguity → clarify or separate alternatives. Residual gap left open.

## Conversation

| id | Pre (Stage 6 active) | Post | Assessment |
| --- | --- | --- | --- |
| C01–C05a | answered | answered | OK |
| C05b | clarification | clarification | OK |
| **C06** | insufficient_evidence | **answered** with Fri **08:00–12:00** (corpus) | **Improvement** vs fixture intent (“corpus wins” over wrong assistant hours) |
| C07 | clarification | clarification | OK |
| standalone_failures | 0 | 0 | OK |

## Conclusion

- Retrieval metrics stable on the holdout.
- One clear quality regression: **E17** incomplete alternatives.
- D05 / C06 moved toward intended policy.
- Stage 7 did **not** tune prompts or models for these outcomes.
