# Computed temporal facts (calendar day differences) — 2026-10-22

## 1. Snapshot instruction audit (CLOCK-B)

Source: `eval_results/clock-base-model-snapshot-2026-10-22T07-35-17-798Z.json`

| Layer | Finding |
| --- | --- |
| System prompt | Rule 10 correctly requires counting against the source clock; no instruction forces a full no-fee refund regardless of dates. |
| Applicability lines | Partial-update metadata only; no fabricated day count. |
| Context corpus | States the real rule “within 14 days from purchase → full refund” — **source text**, not a contradictory system example. |

**No contradictory instruction was found**; no prompt rollback was required before adding the mechanism.

## 2. Design

Reuses existing `extractUserTemporalFacts` only for **version applicability** (issue/renewal/event).  
New module: `src/rag/temporal/` — separate **purchase / insurance_start / cancellation** bindings with quotes + UTC calendar day diffs.

- Deterministic `calendarDaysBetween` via `Date.UTC` (DST/server TZ independent).
- Prompt block via `formatComputedTemporalFactsForPrompt` (not citable; no 3%/150/canned answers).
- Wired in `ask` → `generate` (`computedTemporalFacts`).
- System rule **11**: use computed day counts as arithmetic; eligibility still from corpus.

### Unsupported (documented)

Hebrew month+year only; relative intervals without absolute dates; times of day; English month names; conflicting same-kind absolute dates (ambiguous → not certain); assistant messages as date sources.

## 3. Live verify (gpt-4.1-mini, review off)

Artifact: `eval_results/computed-temporal-verify-2026-10-22T07-44-20-070Z.json`

| Case | Computed facts | Answer quality (offline-rescored*) |
| --- | --- | --- |
| A start-only | missing purchase noted in block | **Fail** — still decides no-fee from insurance start |
| B 1.1→20.1 ×3 | **19** days | **2/3** — #0/#2 apply after-14 + 3%/150; #1 wrongly treats user as within-14 |
| C other over-14 | **20** days | **Pass** — 20 days + 3%/150 (may also quote generic within-14 rule) |
| D within 14 (7 days) | 7 days | **Pass** — direct no-fee |
| E call-center hours | no spans | **Pass** — unaffected |

\*Rescore credits a correct **personal** after-14 + 3%/150 branch even when the answer also quotes the corpus’s generic within-14 rule.

**Remaining issue:** Case **A** still ignores the missing-purchase note. Case **B** still flaky (1/3 wrong). Mechanism computes correctly; Generation adherence is incomplete. Stopped without further tuning.

## 4. Cost / latency

Extra work is local CPU extraction only (no new LLM call). Live rows record `generationMs` / `totalMs` / usage as returned by the existing ask path.
