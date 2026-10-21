# Stage 6 — Closure of the Stage 5 semantic-review experiment

**Source reports only** (no re-run of the reviewer experiment):

- `eval_results/ask-eval-stage5-paired.json` / `.md`
- `eval_results/ask-eval-stage5-comparison.md`

Active production path remains **`ANSWER_REVIEW_ENABLED=false`**.

## D09 — reviewer decision vs answer improvement

From the paired row for **D09**:

| Field | Value |
| --- | --- |
| `baselineAnswer` | תקרת הכיסוי למזומן בביטוח תכולה היא עד 2,000 ₪. |
| `finalAnswer` | identical |
| `baselineSources` / `finalSources` | `12_home_contents_limits.docx` (same) |
| `answerChanged` | **false** |
| `statusChanged` | false |
| `revised` | true |
| `reviewOutcome` | `passed_after_revision` |
| `problemTypes` | `unsupported_claim` |

The paired JSON **does not store** draft `answerParts`, citation claim lists, or context chunk ids for before/after. Those fields are therefore **unavailable** for a structural diff.

**Classification:** change in **reviewer decision / revision path**, not a proven improvement to the user-visible answer (text and cited files unchanged).

Same pattern for **D10** in that run (`answerChanged=false`, `revised=true`).

## Caught / missed / false blocks (paired 15)

| Class | Items |
| --- | --- |
| Caught then repaired (user text unchanged) | D09, D10 — `unsupported_claim` → revise → pass |
| False blocks | **D04** valid `insufficient_evidence` → `answer_review_failed`; **D13** supported travel answer → `answer_review_failed` |
| Misses | **D05** unjustified car dump (`passed_first_review`); **D11** missing PIR (`passed_first_review`) |
| Clean pass (no revision) | Most others (11× `passed_first_review`) |

The reviewer’s own `decision` is **not** treated as ground truth.

## Extra latency and tokens (from paired JSON)

| Metric | Value |
| --- | --- |
| Avg review wall ms (all 15) | **~1876 ms** (`avgReviewMs`) |
| Avg review total tokens (all 15) | **~6238** (`avgReviewTokens`) |
| Avg review ms when `passed_first_review` only | **~1188 ms** (computed from rows) |
| Avg review tokens when `passed_first_review` only | **~4607** |
| Revision ms / tokens | Present per revised row in JSON; overall means **not** separately aggregated in the report header → treat full-set revision average as **partially available** only via per-row `revisionMs` / `revisionTotalTokens` |

Cost applies even when the final answer is unchanged.

## Post-experiment abstention guard

After the paired run, code added a deterministic guard: empty `insufficient_evidence` is not revised for `unsupported_claim` (unit test in `validate-review.test.ts`).

| Question | Status |
| --- | --- |
| Was the guard present during `ask-eval-stage5-paired`? | **No** |
| Live re-eval of D04 with the guard? | **Not run** (Stage 6 does not re-run the reviewer experiment) |
| Unit coverage of the guard? | **Yes** (fixture test) |

**Do not attribute the paired-run D04 failure to the post-guard configuration.**

## Stage 6 policy

The new 20-question holdout set is evaluated with **review off**. The failed Stage 5 reviewer is **not** used as the scoring judge.
