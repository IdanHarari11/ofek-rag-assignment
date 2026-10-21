# Failure analysis and “with one more week”

Based on:

- **Active config:** Hybrid + applicability, **`ANSWER_REVIEW_ENABLED=false`** (`docs/stage6-config-freeze.md`)
- 15 dev: `ask-eval-stage4.*` (+ historical quality dimensions from stage5.3 where noted)
- Holdout 20: `ask-eval-stage6-extended.*` / `docs/stage6-quality-summary.md`
- Conversations: `conversation-eval-2026-10-21T13-32-26-763Z.*`

Do **not** pool scores across groups as if they were one run.

**Rejected experiments (not active):** pre-retrieve Clarify gate (Stage 5.2); semantic answer review on by default (Stage 5 paired).

## Documented failures and limits

### D05 — ambiguity not always → clarification

- Question: «מה ההשתתפות העצמית?» without product/event.
- In **stage4 (Hebrew prompts)**: still `answered` with car amounts.
- After **Stage 7 prompt-EN regression** (`ask-eval-stage7-dev15.*`): `clarification_needed` — improved vs ambiguity policy; **not** claimed as a tuned fix (prompt translation side-effect).
- Holdout parallel: **E16** («מה ההטבות שלי?») — still fails (product dump / Ofek Plus) on Stage 7 extended run.
- Rejected experiment (5.2): Clarify before retrieve fixed D05 but caused 9 clarification regressions.

### D11 — omission of material condition (PIR)

- In stage4: amount given without PIR guarantee — **not considered fixed**.
- Historical UI finding matches; old run scores are not rewritten.

### E14 / E15 — language gap (retrieval)

- Hebrew questions about agent rules that appear **only** in `30_agent_faq_en.md`.
- R@5=0; system answered customer cancel fees (E14) or asked clarification (E15) instead of 5% agent discount.

### E04 — procedure sequence fidelity

- Source: SMS/email then cancel notice if not resolved within 21 days.
- Answer invented an **extra** 21-day window — generation failure despite full retrieval.

### E07 — partial evidence in context (not an answer failure)

- Metric `evidenceCoverage=partial`: transition chunk from `02_car_comprehensive_policy_2026.pdf` missing from prompt context; **2024** policy chunk present.
- Active run: **950 ₪** for issue 28.2.2026 — correct; all manual quality dimensions **pass**. Citing 2024 alone is acceptable per frozen rubric (`acceptableSourceAlternatives`). Partial flags **context completeness for eval**, not “unsupported answer.”

### E17 — ambiguous SLA (rubric frozen)

- Set JSON lists `expectedBehavior: clarification_needed`, but reference allows **stating both car (3 business days) and home (>10k ₪, 5 days) as explicit alternatives**.
- Stage 6 run: `answered` with both options — scored **pass** on behavior/conclusion. **Do not retroactively change the rubric.**
- Stage 7 prompt-EN regression: `answered` with **car-only** SLA — **regression** vs frozen rubric (single target without stating dependence). Documented in `docs/stage7-prompt-translation-regression.md`; no question-specific patch.

### C05b / C06 / C07 (conversations)

- Historical instability on C05b/C06; Stage 6 run (review off): C05b=clarification, C06=insufficient, C07=clarification.
- Stage 7 regression: C05b/C07 still clarification; **C06** → `answered` with corpus Friday hours (08:00–12:00), aligning with fixture note (“corpus wins” over wrong assistant) — improvement vs Stage 6 abstention.
- **Do not assume C07 is permanently fixed** — earlier runs dumped car amounts without user confirmation.
- Rewrite success metric is separate from answer correctness (here standalone_ok=true for all turns).

### Answer reviewer experiment (Stage 5) — off by default

- Closure: `docs/stage6-reviewer-experiment-closure.md`
- D09: identical answer before/after → reviewer decision changed, not proven answer improvement
- False blocks D04/D13; misses D05/D11; cost ~1.2s/~4.6k tokens even on first-pass pass
- Post-experiment abstention guard added **after** paired run — not re-evaluated on live set

### Context expansion vs budget / technical validation

- Budget ~3500; Document Recall ≠ sufficient evidence for claims.
- `chunkId` validation ≠ semantic support.

### Holdout authored during development

- 20 new questions AI-assisted during build — not an external independent gold set; disclosed in Stage 6 docs.
- After Stage 7 prompt translation, same file is used for **regression only** — not unseen testing.

## Rejected experiments (detail)

| Experiment | Outcome |
| --- | --- |
| Clarify before retrieve (5.2) | 9 clarification regressions |
| Semantic review on by default (5 paired) | False blocks + cost; remains opt-in flag |

## With one more week — top three (measured failures; not implemented in Stage 6)

| Priority | Improvement | Why | Measure |
| --- | --- | --- | --- |
| 1 | **Retrieval / language bridge** for `30_agent_faq_en.md` (or controlled bilingual embeddingText) | E14/E15 | R@5>0 on E14/E15; clawback/5% answers without D01–D03 regression |
| 2 | **Product ambiguity without global pre-gate** | D05, E16, C07 | Clarify when product unknown; no regressions on explicit questions |
| 3 | **Faithful procedure / eligibility in citations** | E04, D11 | No invented intermediate steps; PIR when citing baggage delay compensation |

Not prioritized here: streaming, free GenUI, re-enabling reviewer by default.

## Score label meanings (manual review)

| Label | Meaning |
| --- | --- |
| **pass** | Meets dimension for that question |
| **partial** | Material gap but conclusion not fully unsupported |
| **fail** | Dimension failed |
| **n_a** | Dimension not applicable (e.g. conclusion on pure clarification cases) |
| **unknown** | Not used in saved rubric tables — treat as unscored |
