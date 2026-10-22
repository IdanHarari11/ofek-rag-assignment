# Rescore / clarification — generation comparison (no new model calls)

Original report preserved: `generation-comparison-2026-10-21T14-29-23-846Z.md`  
This file only corrects evaluation criteria and cost accounting notes.

## Criteria (applied uniformly to both models)

1. **Contradictory / invented user issue date** → fail.  
2. **Omitting restatement of the user date** alone → not a fail.  
3. **“גרסת 2024”** is OK when it is the document version, not presented as the user’s issue date.  
4. Amounts/version must still match facts (Feb 2026 no renewal → 2024 wording amounts).  
5. **CTRL-replacement:** requiring the exact string `כתב שירות` is too brittle when the answer already states purchase of the service rider (`כתב השירות`) + network workshop + 21-day cap. Material completeness ≠ exact phrase.

## MF-B-t1 (correction after February 2026)

| Model | Original | Rescored | Notes |
| --- | --- | --- | --- |
| gpt-4.1-mini | 0/3 | **2/3** | Run1 invents issue on 1.1.2024 → fail. Runs 0/2 keep Feb 2026 and state version effective 1.1.2024 → pass. Amount 950 OK. |
| gpt-5.6-terra | 3/3 | **3/3** | Keeps Feb 2026; 950; index base as index — OK. |

## MF-B-t2 (non-network workshop)

| Model | Original | Rescored | Notes |
| --- | --- | --- | --- |
| gpt-4.1-mini | 2/3 | **1/3** | Runs 0/2 invent **February 2024** (contradicts user Feb 2026) → fail. Run1 omits date but 1,850 + גרסת 2024 → pass. |
| gpt-5.6-terra | 0/3 | **3/3** | Omits restating Feb 2026 but does not invent a rival issue date; 1,850 OK. |

## CTRL-replacement

| Model | Original | Rescored | Notes |
| --- | --- | --- | --- |
| gpt-4.1-mini | 3/3 | **3/3** | Unchanged. |
| gpt-5.6-terra | 2/3 | **3/3** | Run1 said `כתב השירות` + 21 days + מוסך הסדר — material OK under corrected criterion. |

## Cost verification (from saved usage fields)

Saved rows expose `promptTokens`, `completionTokens`, `totalTokens`, `reasoningTokens` only — **not** `cachedInputTokens`.

**Assumptions for recalculation:**

- Source list prices: OpenAI standard short-context ([pricing](https://developers.openai.com/api/docs/pricing)):  
  - gpt-4.1-mini: $0.40 / $1.60 per 1M (input/output); cached input $0.10  
  - gpt-5.6-terra: $2.00 / $12.00; cached input $0.20  
- Treat **all prompt tokens as uncached** (cache split not stored → cost not fully verifiable).  
- `reasoningTokens` were **0** on all saved runs → no double-count of reasoning vs completion.  
- Figures below are **per-run recalculated averages** from saved token counts (not the inconsistent `costUsd` field in the original JSON).

| Case | Model | Avg prompt | Avg completion | Recalc avg USD (uncached assumption) |
| --- | --- | --- | --- | --- |
| MF-B-t1 | mini | 6057 | 106 | ≈ $0.00259 |
| MF-B-t1 | terra | 6053 | 124 | ≈ $0.0136 |
| MF-B-t2 | mini | 6059 | 113 | ≈ $0.00260 |
| MF-B-t2 | terra | 6055 | 203 | ≈ $0.0145 |
| CTRL-replacement | mini | 5852 | 245 | ≈ $0.00273 |
| CTRL-replacement | terra | 5848 | 166 | ≈ $0.0137 |

**Note:** Original `costUsd` values for identical token counts disagree across runs (e.g. mini B-t1 run0 ≈0.00083 vs run2 ≈0.00260). Treat original `costUsd` as **unreliable**; use recalculated column above, and mark cache-sensitive totals as **not fully verifiable** without cached token breakdown.

## Recommendation impact

After rescore, Terra looks stronger on **B-t1/t2 date handling** and no longer loses CTRL-replacement on a brittle phrase. **Model choice remains open**; **gpt-4.1-mini** stays active to isolate prompt/context fixes. Do **not** cite an exact cost multiple — cached input tokens were not stored, so cache-sensitive totals are not fully verifiable. MF-D (5% leak) unchanged by rescore — addressed in the partial-update context fix (separate change). See also `docs/generation-model-comparison-2026-10-21.md` (updated recommendation).
