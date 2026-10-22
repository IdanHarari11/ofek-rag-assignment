# Final submission evaluation (2026-10-22)

**Configuration:** frozen Hybrid submission path — see [`docs/submission-config-freeze-2026-10-22.md`](submission-config-freeze-2026-10-22.md).

| Field | Value |
| --- | --- |
| Freeze label | `submission-2026-10-22` |
| `promptBundleId` | `prompt-939569b5812dce49` |
| Generation | `gpt-4.1-mini` |
| Answer review | **off** |
| Retrieval | **hybrid** `topK=5` |
| Index | 49 chunks; `chunksInputHash=cf3e80be3731…`; `embeddingTextHash=7a261a23b62d…` |
| Suite runner | `pnpm eval:submission-final` |
| Bundle JSON | `eval_results/submission-final-submission-2026-10-22-2026-10-22T08-59-40-843Z.json` |
| API failures / retries | **none** (5/5 suite stages ok) |

This is **not** production software. **`answered` ≠ pass.** Hybrid **R@5 / MRR are retrieval metrics only**, not answer accuracy. Quality labels below marked **AI-assisted** were assigned by the coding agent from this run’s answers and corpus notes — not independent human adjudication and not verified ground truth.

The extended 20-question set was **authored/exposed during development**. It is a **regression / exposed extended set**, **not** a new holdout.

Historical reports under `eval_results/` remain history; **this document** is the final-config result.

---

## Group A — Retrieval (15-dev, denominators)

Source: `eval_results/hybrid-comparison.json` (same freeze run copy: `hybrid-comparison-submission-2026-10-22-*.json`).

Denominator: **14** questions with reference sources (D04 N/A). Metric = reference **documents** in top‑K **chunks**.

| Mode | R@1 | R@3 | R@5 | MRR |
| --- | --- | --- | --- | --- |
| vector | 0.357 | 0.536 | 0.714 | 0.607 |
| lexical | 0.821 | 0.857 | 0.893 | 1.000 |
| **hybrid (active)** | **0.500** | **0.750** | **0.929** | **0.774** |

Do **not** read MRR=1.000 (lexical) as perfect answer quality.

---

## Group B — Dev 15 ask (Hybrid)

Artifact: `eval_results/ask-eval-submission-2026-10-22.{json,md}`

| Denominator | Count |
| --- | --- |
| Questions | 15 |
| `answered` | 13 |
| `clarification_needed` | 1 (D05) |
| `insufficient_evidence` | 1 (D04) |
| `system_error` | 0 |

Approx latency/usage (serial): avg ~**1.77s**/question; embed tokens 737; generation ~75k total tokens. Cost ≈ rough OpenAI list estimate only (see EVALUATION-SUMMARY pricing links) — **estimate**, not invoice.

### Required spot checks (AI-assisted quality)

| ID | status | conclusion | claimSupport | completeness | behavior | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| D05 | clarification_needed | n_a | n_a | n_a | **pass** | Asks for product/version; does not dump amounts |
| D11 | answered | **partial** | **partial** | **fail** | pass | Amounts for 8h delay OK; **omits PIR** condition (corpus requires PIR at airport) |
| D01 | answered | pass | pass | pass | pass | Friday 08:00–12:00 + call-center source |
| D04 | insufficient_evidence | n_a | n_a | n_a | pass | Abstains on “all docs car-only” overclaim |

Other D0x: not fully rescored in this table; statuses recorded in the JSON artifact. Do not treat 13×`answered` as 13 passes.

---

## Group C — Extended 20 (exposed set, Hybrid)

Artifact: `eval_results/ask-eval-extended-submission-2026-10-22-*.{json,md}`

| Denominator | Count |
| --- | --- |
| Questions | 20 |
| `answered` | 16 |
| `insufficient_evidence` | 4 (E15, E18, E19, E20) |
| `clarification_needed` | 0 |
| `system_error` | 0 |
| Evidence coverage | full=13, partial=1 (E07), missing=1 (E15), n_a=5 |

Retrieval on items with refs (among others): E14 R@5=1 (agent FAQ retrieved); **E15 R@5=0** (still missing).

### Required spot checks (AI-assisted)

| ID | status | conclusion | claimSupport | completeness | behavior | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| E04 | answered | **pass** | pass | pass | pass | Matches material facts (12 installments; 21-day unpaid → cancel notice) |
| E14 | answered | **pass** | pass | pass | pass | Full clawback within 120 days; cites `30_agent_faq_en` |
| E15 | insufficient_evidence | n_a | n_a | n_a | **fail** (retrieval) | Agent 5% discount still not retrieved (R@5=0) |
| E16 | answered | **fail** | partial | partial | **fail** | Ambiguous “מה ההטבות שלי?” → unjustified Ofek Plus dump instead of clarify |
| E07 | answered | pass | pass | partial | pass | 950 ₪ correct; evidenceCoverage=partial (2026 transition chunk) |

---

## Group D — Conversation fixtures (Hybrid + rewrite)

Artifact: `eval_results/conversation-eval-submission-2026-10-22-*.{json,md}`

| Denominator | Count |
| --- | --- |
| Turns | 8 |
| `system_error` | 0 |
| Standalone check failures | 0 |

| ID | status | behavior (AI-assisted) | Notes |
| --- | --- | --- | --- |
| C07 | clarification_needed | **pass** | Vague “אותו מוצר” → asks which product |
| C05b / C06 | answered | pass / pass | Hours / corpus-aligned answers on this run |

---

## Group E — Manual-fail regression fixtures (exposed)

Artifact: `eval_results/manual-fail-submission-2026-10-22-*.{json,md}` — 10 turns, Hybrid.

| Case | Result (this run) | Severity if still wrong |
| --- | --- | --- |
| MF-A multi-applicability | **OK** — 950 / 1,100 / 1,100; both policy versions | — |
| MF-B date correction | **OK** path to Feb → 950 | — |
| MF-C topic switch home cash | **OK** 2,000 ₪ after car | — |
| MF-D clock base (start vs purchase) | **FAIL** — treats 10 days after **insurance start** as within 14 days of **purchase** | High (known Generation ignore of clock / temporal facts) |
| MF-E agent clawback | **OK** day 130 vs 100 distinction present | — |
| MF-F luggage | answered (see D11-class PIR risk) | Medium if PIR omitted |

Computed temporal facts remain in the prompt path; **this run reconfirms Generation may ignore them** (MF-D).

---

## Remaining failures (honest)

| Failure | Severity | Group |
| --- | --- | --- |
| E15 agent discount retrieval miss | High (product gap for EN FAQ paraphrases) | C |
| E16 unjustified Ofek Plus on ambiguous benefits | High (behavior) | C |
| D11 PIR omission | Medium–High (material condition) | B |
| MF-D / clock confusion | High on cancel-fee eligibility | E |
| D05-class ambiguity on some other phrasings (E16) | High | C |
| No streaming; browser-only threads; capped history | Product limits | — |

---

## With another week

1. Cross-lingual / paraphrase coverage for remaining agent FAQ items (E15) without hardcoding eval IDs.  
2. Stronger product-ambiguity behavior when retrieval returns VIP/marketing chunks (E16) without a global pre-retrieve Clarify gate.  
3. Force Generation to bind cancel-fee branches to the source clock (or abstain) when computed temporal facts disagree with the draft.

---

## Commands to reproduce

```bash
export GENERATION_MODEL=gpt-4.1-mini
export ANSWER_REVIEW_ENABLED=0
# OPENAI_API_KEY in environment only
pnpm prepare:rag   # if index missing
pnpm eval:submission-final
```
