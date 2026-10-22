# Cancellation time-base (clock) fix — 2026-10-22

Continues the SUPERSEDED_SECTION partial-update work. Active model: `gpt-4.1-mini`. Answer review: off.

## Prompt change

`buildSystemPrompt` rule **10** (Generation policy only — no new clarify gate, date engine, or retrieval change):

- Distinguish the event a **source** uses to count a period from the event/date the **user** stated.
- Do not auto-equate purchase / issue / insurance start / renewal / loss / request-filing.
- If clocks differ, say so; do not treat interval on clock A as satisfying a window on clock B.
- With calendar dates, count days against the source clock before choosing a branch.
- Missing material clock: name what is missing and why; conditional branches OK; no unspoken assumption; do not re-ask known facts.
- Status: `clarification_needed` when the missing clock is required to decide the user’s case; if `answered` with conditionals, do not present as a final personal determination.

One reinforcement pass was applied after the first verify showed A/B still failing (evidence that the first minimal wording was insufficient). No further tuning rounds.

## Verify artifact

`eval_results/cancellation-clock-verify-2026-10-22T07-29-53-428Z.json`

| Case | Result |
| --- | --- |
| A start-only ×3 | Fail — answers generic purchase-window rule without naming missing purchase clock |
| B split dates (purchase 1.1, start 10.1, cancel 20.1) | Fail — incorrectly treats cancel as within 14 days of purchase |
| C purchase+10 days | Pass — direct no-fee |
| D follow-up “purchase also 10 days ago” | Pass — decides no-fee without re-ask |
| After 14 days (partial update 3%/150) | Pass |
| Unreplaced form 4401 | Pass |

## Model-comparison docs

Updated for rescore: Terra stronger on date probes; no CTRL regression under corrected scoring; model choice open; no unverifiable exact cost ratio. Mini kept active for isolation.
