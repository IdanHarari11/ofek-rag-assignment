# Stage 6 — Extended evaluation quality summary

> **Stage 7 note:** Prose here is English; `eval_results/ask-eval-stage6-extended.*` run reports are unchanged. Post–English-prompt runs on the same JSON file are **regression**, not new holdout testing.

**Config freeze:** `docs/stage6-config-freeze.md`  
**Reviewer experiment closure:** `docs/stage6-reviewer-experiment-closure.md`  
**Semantic review:** off (`ANSWER_REVIEW_ENABLED=false`)  
**No RAG / prompt / model changes in this stage.**

Scoring of the new holdout was **AI-assisted against corpus evidence** (Cursor). It is **not** an independent human study and does **not** use the Stage-5 answer-review component as judge.

Three groups are reported **separately** — no pooled average that hides set differences.

---

## Group A — Original 15 `dev_set` questions

| Item | Value |
| --- | --- |
| Matching active-config run | **`eval_results/ask-eval-stage4.*`** (`stageLabel=stage4-applicability`, `2026-10-21T12:44:53.717Z`) |
| Why not stage5.3? | stage5.3 predates Stage-4 applicability enrichment |
| Status counts | answered=14, insufficient_evidence=1, system_error=0 |
| Avg wall ms / question | ~2339 |
| Avg generation total tokens | ~4971 |

### Quality note for Group A

Stage 4 report stores answers/status but **does not** re-score the four manual dimensions. For dimension counts historically tied to **stage5.3** (pre-applicability), see `docs/EVALUATION-SUMMARY.md`. Do not mix those counts with Stage-4 status as if they were one scored run.

### Open items (do not assume fixed)

| id | In stage4 active run |
| --- | --- |
| **D05** | Still `answered` with car deductibles (ambiguity / unjustified product) |
| **D11** | Still answered without guaranteeing PIR completeness (same class of failure as before) |

---

## Group B — New 20-question holdout

| Item | Value |
| --- | --- |
| Set file | `dev_set/extended_eval_stage6.json` |
| Frozen SHA-256 | `92d7081b46b94ee769be6878407841b6bcf6b9247784048b1e0c4e615f962e75` (`extended_eval_stage6.sha256`) |
| Provenance | In-development set, AI-assisted authoring; **not** an external independent gold set |
| Run | `eval_results/ask-eval-stage6-extended.*` |
| Review | false |

### Status (n=20)

| status | count |
| --- | ---: |
| answered | 16 |
| clarification_needed | 1 |
| insufficient_evidence | 3 |
| system_error | 0 |

### Retrieval (same Document Recall@K / MRR definitions; N/A excluded)

Denominator = **15** questions with non-empty `sources` (E16–E20 N/A).

| Metric | Value |
| --- | ---: |
| R@1 | ~0.733 |
| R@3 | ~0.867 |
| R@5 | **~0.867** |
| MRR | **~0.767** |

### Evidence coverage in generation context

| coverage | count | note |
| --- | ---: | --- |
| full | 12 | All listed evidence chunkIds in context |
| partial | 1 | E07 — see note below (context metric ≠ answer failure) |
| missing | 2 | E14, E15 — EN FAQ not retrieved |
| n_a | 5 | Ambiguous / no_answer |

#### E07 — partial evidence vs answer quality

- **Question:** «מה ההשתתפות העצמית בתיקון במוסך הסדר בפוליסת מקיף שהונפקה ב-28.2.2026?»
- **Partial flag means:** eval saw only **1/2** listed evidence chunks in generation context (2024 policy amount chunk in; 2026 transition rule chunk out). Retrieval R@5 was still 1.
- **Practice for claims in the answer:** 950 ₪ from `01_car_comprehensive_policy_2024.pdf` is sufficient for all statements in the active run; frozen set allows citing 2024 alone (`acceptableSourceAlternatives`). All four manual dimensions scored **pass** — partial is a **context-coverage diagnostic**, not a failed answer.

#### E17 — ambiguous SLA (do not change rubric retroactively)

- Reference allows clarification **or** presenting car (3 business days) vs home (>10k ₪, 5 days) as **explicit alternatives**.
- Run chose `answered` with both alternatives → **pass** on behavior/conclusion. JSON `expectedBehavior: clarification_needed` is a soft target; scoring used the frozen written rubric above.

### Answer quality (AI-assisted; denominator = 20 per dimension, including n_a)

| Dimension | pass | partial | fail | n_a |
| --- | ---: | ---: | ---: | ---: |
| conclusion | 13 | 0 | 3 | 4 |
| claimSupport | 13 | 1 | 2 | 4 |
| completeness | 13 | 1 | 2 | 4 |
| behavior | 17 | 0 | 3 | 0 |

### Per-question results (Group B)

| id | cat | status | R@5 | evidence | conclusion | support | complete | behavior | short failure note |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| E01 | factual | answered | 1 | full | pass | pass | pass | pass | — |
| E02 | factual | answered | 1 | full | pass | pass | pass | pass | — |
| E03 | factual | answered | 1 | full | pass | pass | pass | pass | — |
| E04 | table | answered | 1 | full | fail | fail | partial | pass | Invented extra 21-day window (**generation**) |
| E05 | table | answered | 1 | full | pass | pass | pass | pass | — |
| E06 | table | answered | 1 | full | pass | pass | pass | pass | — |
| E07 | applicability | answered | 1 | partial | pass | pass | pass | pass | Context missing 2026 transition chunk; 2024 chunk sufficient for 950 ₪ |
| E08 | applicability | answered | 1 | full | pass | pass | pass | pass | — |
| E09 | applicability | answered | 1 | full | pass | pass | pass | pass | — |
| E10 | applicability | answered | 1 | full | pass | pass | pass | pass | — |
| E11 | multi_doc | answered | 1 | full | pass | pass | pass | pass | — |
| E12 | multi_doc | answered | 1 | full | pass | pass | pass | pass | — |
| E13 | multi_doc | answered | 1 | full | pass | pass | pass | pass | — |
| E14 | cross_lingual | answered | 0 | missing | fail | fail | fail | fail | Wrong Hebrew cancel fees; EN clawback missed (**retrieval**) |
| E15 | cross_lingual | clarification_needed | 0 | missing | n_a | n_a | fail | fail | Needed EN 5% agent discount (**retrieval**) |
| E16 | ambiguous | answered | N/A | n_a | fail | partial | n_a | fail | Assumed Ofek Plus (**generation**) |
| E17 | ambiguous | answered | N/A | n_a | pass | pass | pass | pass | **Frozen rubric:** stating both SLA options explicitly is **accepted** (pass), even though set JSON `expectedBehavior` is `clarification_needed` — do not retroactively fail |
| E18 | no_answer | insufficient_evidence | N/A | n_a | n_a | n_a | n_a | pass | — |
| E19 | no_answer | insufficient_evidence | N/A | n_a | n_a | n_a | n_a | pass | — |
| E20 | no_answer | insufficient_evidence | N/A | n_a | n_a | n_a | n_a | pass | — |

### Failures by stage (Group B only)

| Stage | Examples |
| --- | --- |
| rewriting | (none — no history on this set) |
| retrieval | E14, E15 (EN-only evidence, R@5=0) |
| context | E07 — `evidenceCoverage=partial` (1/2 evidence chunks in prompt); cited 2024 policy only; conclusion/support/completeness/behavior still **pass** |
| applicability | no measured wrong-version pick on E07–E10 in this run |
| generation | E04 invented timeline; E16 unjustified product benefits |

### Timing / tokens (Group B, no history)

| | |
| --- | --- |
| Avg `totalMs` | ~3606 |
| Avg generation total tokens | ~5889 |

---

## Group C — Conversation fixtures

| Item | Value |
| --- | --- |
| Active-config run | **`eval_results/conversation-eval-2026-10-21T13-32-26-763Z.*`** (review **off**) |
| Prior review-ON run (not active) | `conversation-eval-2026-10-21T13-16-33-956Z.*` |
| Standalone check failures | **0** |
| System errors | **0** |

### Dimensions (reported separately from rewrite success)

| Dimension | Finding (this active run) |
| --- | --- |
| Standalone rewrite correctness | All 8 turns passed include/exclude checks |
| User detail retention / corrections | C01–C05a preserved issue dates / topics in standalone text |
| Isolation / topic shift | C05b shifted to luggage ambiguity → clarification; C06 topic break → abstention |
| Answer content / sources | Scored per turn in conversation report; not folded into rewrite metric |
| Clarifications justified vs unnecessary | **C05b** clarification after underspecified follow-up — justified; **C07** clarification on “your policy” deductible — justified this run |

### Explicit focus turns

| id | status (review off) | Note |
| --- | --- | --- |
| **C05b** | `clarification_needed` | Unstable across runs historically; this run asked car vs home luggage |
| **C06** | `insufficient_evidence` | Topic switch / weak retrieval — abstained |
| **C07** | `clarification_needed` | Did **not** dump car amounts this run — **do not treat as permanently solved** |

Rewrite success **≠** answer correctness (kept separate).

With-history cost for this run: see report `totalRewriteMs` / rewrite token totals.

---

## Next three improvements (measure only — not implemented in Stage 6)

1. **Cross-lingual retrieval for agent EN FAQ** — E14/E15 failed because Hebrew queries did not surface `30_agent_faq_en.md`.
2. **Ambiguity / unjustified product assumptions without a global pre-retrieve gate** — E16 and residual D05.
3. **Faithful multi-step procedure narration** — E04 invented an extra waiting period; tighten generation faithfulness for sequenced SLA/payment rules.

---

## Measurement limits

- Holdout authored with AI assistance during development → risk of accidental alignment; disclosed above.
- Quality scores AI-assisted, not a separate human panel.
- Group A dimension table not re-scored on stage4 answers in this stage.
- Conversation metrics remain small-n (8 turns).
- No system tuning against the new holdout was performed after seeing results.
