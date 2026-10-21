# Ask eval comparison — Stage 4 baseline vs Stage 5 semantic review

**Baseline (kept):** `ask-eval-stage4.*` (applicability on, review off)  
**Paired experiment:** `ask-eval-stage5-paired.*` (same draft + context; review applied after)  
**Model:** unchanged (`gpt-4.1-mini`)

The reviewer’s own decision is **not** proof it was correct — answers were checked against sources separately.

## Decision: default OFF (experiment flag)

Like the old Stage 5.2 clarify gate, the paired run showed **material regressions** when review+revision stayed on the critical path:

| Issue | Evidence |
| --- | --- |
| Valid abstention blocked | **D04** `insufficient_evidence` → reviewer forced revise → `answer_review_failed` |
| Supported answer blocked | **D13** pregnancy-week answer → `answer_review_failed` after revision |
| Missed known failures | **D05** still answered with car amounts (`passed_first_review`, no findings); **D11** still omitted PIR |
| Cost even on pass | ~1s / ~6k review tokens per question with no revision |

Enable with `ANSWER_REVIEW_ENABLED=1` or `ask({ answerReviewEnabled: true })`.  
A deterministic guard was added so empty `insufficient_evidence` is not revised for `unsupported_claim` (mitigates D04-class false blocks); **D13-class blocks and D05/D11 misses remain**, so default stays off.

## Paired summary (15 questions)

| Metric | Value |
| --- | ---: |
| Passed first review (unchanged) | 11 |
| Passed after revision | 2 (D09, D10 — answer text unchanged in this run) |
| `answer_review_failed` | 2 (D04, D13) |
| Avg extra review ms (all) | see JSON `avgReviewMs` |
| Avg extra review tokens | see JSON `avgReviewTokens` |

## Focus IDs

| id | Baseline | After review | Independent note |
| --- | --- | --- | --- |
| D05 | answered (car dump) | unchanged pass | Reviewer **missed** unjustified product assumption |
| D11 | answered without PIR | unchanged pass | Reviewer **missed** material PIR condition |
| D04 | insufficient_evidence | review_failed | False block of valid abstention (prompt/guard mitigated later; default still off) |
| D13 | answered | review_failed | False block of a supported travel rule |

## Conversation set (review ON)

Report: `conversation-eval-2026-10-21T13-16-33-956Z.*` (prior Stage 2 reports kept).

| id | With review ON | Note |
| --- | --- | --- |
| C05b | `system_error` / `answer_review_failed` | Follow-up instability + review block (not insufficient_evidence) |
| C06 | `insufficient_evidence` | Abstention path (history/rewrite fragile) |
| C07 | `answered` with car amounts | Unjustified product assumption **not** caught |

Confirms: review can surface as dedicated failure codes, but also blocks or misses in follow-up flows — another reason default stays off.

## Correct detections vs noise (this run)

- **Helpful revisions:** D09/D10 entered revise path for `unsupported_claim` then passed; final user-visible text matched baseline (little product gain).
- **False blocks:** D04, D13.
- **Misses:** D05, D11.
- **No automatic retuning** performed from these results.
