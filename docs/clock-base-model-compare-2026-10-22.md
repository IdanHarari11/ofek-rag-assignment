# Clock-base model comparison (focused) — 2026-10-22

Generation-only experiment on remaining cancellation **time-base** failures.  
**No** RAG / prompt / UI / default-model changes. Answer review off. App `GENERATION_MODEL` left at `gpt-4.1-mini`.

Artifacts:

- `eval_results/clock-base-model-snapshot-2026-10-22T07-35-17-798Z.json`
- `eval_results/clock-base-model-compare-2026-10-22T07-35-17-798Z.json`
- `eval_results/clock-base-model-compare-2026-10-22T07-35-17-798Z.md`

## Input validation

Prior verify JSON stored answers + context ids + applicability lines, **not** `standaloneQuestion` or full prompts — so saved mini answers were **not** reused as same-input baselines. Fresh freeze via `ask()` capture → `buildSystemPrompt` / `buildUserPrompt` hashes → generation-only replay.

| Case | Question clocks | standalone | applicability / context headers | Pre-gen error? |
| --- | --- | --- | --- | --- |
| A | תחילת ביטוח only; no purchase | Identical to question; no invented purchase | Partial-update metadata only; no day-count / fee branch | **None** |
| B | Purchase 1.1.2026, start 10.1.2026, cancel 20.1.2026 | Same dates preserved | No incorrect 14-day / fee assertion | **None** |
| CTRL | 10 days from purchase | Same | OK | **None** |

Model comparison proceeded for all three cases.

## Terra settings (same as prior experiment)

- Profile: `reasoning_family` (omit temperature)
- `reasoning_effort=medium` (default)
- No silent model fallback; requested id sent as-is

## Results (after offline CLOCK-A rescore)

| Case | gpt-4.1-mini | gpt-5.6-terra |
| --- | --- | --- |
| A (start only) | **0/3** | **3/3** |
| B (split dates) | **1/3** | **0/3** |
| CTRL (purchase +10d) | **3/3** | **3/3** |

### Reading

- **A:** Terra consistently asks for purchase date and states insurance-start ≠ purchase. Mini answers a generic purchase-window rule without naming the gap.
- **B:** Both models mostly mis-count 1.1→20.1 as “within 14 days” and promise full no-fee refund. Mini got the correct 3%/150 branch once (1/3). Terra 0/3 on this frozen input.
- **CTRL:** Both models give a direct no-fee answer — no unnecessary clarification.

This narrow experiment does **not** imply all date-handling problems are solved.

## Usage / cost notes

- Raw usage stored per run; fields absent from the API are `null` (not invented zeros). When the API returns `0`, that is recorded as `0`.
- `reasoningTokens` are **not** added again on top of `completionTokens` for cost.
- Cache-sensitive totals use reported `cachedInputTokens` when present; list prices from OpenAI standard short-context docs.
