# Cancellation partial-update fix — 2026-10-21

## Active config

- `GENERATION_MODEL=gpt-4.1-mini` in `.env` (no `.env.local` override; Terra support retained).
- `ANSWER_REVIEW_ENABLED` off (default / example `0`).
- Verify runs requested `generationModel: "gpt-4.1-mini"`; API returned `gpt-4.1-mini-2025-04-14`.

## What changed in generation context (and why)

Previously, applicability metadata said “partial update — replaced section: חישוב ההחזר” at **document** level, but the packed base chunk still presented the old **5%** bullets as ordinary source text. The generator could treat both 5% and 3%/150 as current.

**Fix (prompt-only annotation, citation bodies unchanged):**

1. Derive section bindings from manifest relationship `affectedSections` (not amount regex).
2. On the **base** chunk: header + wrap the verified refund-section span in `<<<SUPERSEDED_SECTION … status="former_rule_only">>>`.
3. On the **update** chunk: header marking it as the current replacement for those sections.
4. Unreplaced 2023 wording stays outside the markers (form 4401, cancel anytime, etc.).

### Before / after (indexed base chunk around 5%)

**Before (raw packed text — 5% looks current):**

```text
- ההחזר מחושב באופן יחסי לתקופה שנותרה עד תום תקופת הביטוח (pro-rata).
- מסכום ההחזר מנוכים דמי טיפול בשיעור 5%.
- ההחזר יועבר לאמצעי התשלום המקורי, או לחשבון בנק לפי טופס 4410, בתוך 14 ימי עסקים.
```

**After (section-level former-rule markers; text kept for provenance):**

```text
<<<SUPERSEDED_SECTION name="חישוב ההחזר" replaced_by="corpus/23_cancellation_procedure_update_2025" effective_replacement_from="2025-01-01" status="former_rule_only">>>
- ההחזר מחושב באופן יחסי לתקופה שנותרה עד תום תקופת הביטוח (pro-rata).
- מסכום ההחזר מנוכים דמי טיפול בשיעור 5%.
- ההחזר יועבר לאמצעי התשלום המקורי, או לחשבון בנק לפי טופס 4410, בתוך 14 ימי עסקים.
<<<END_SUPERSEDED_SECTION name="חישוב ההחזר">>>
```

Update chunk gains a REPLACEMENT header pointing at section `חישוב ההחזר` from `2025-01-01`.

## Focused verification

Artifact: `eval_results/cancellation-partial-update-verify-2026-10-21T14-44-54-882Z.json`  
Offline rescore: `…882Z.rescored.json` (pattern tweak for “ללא ניכוי”; gap check for start-vs-purchase).

| Case | Result | Notes |
| --- | --- | --- |
| Within 10 days / purchase / no claim | Pass (after offline pattern) | Full refund, no fee; cites update; no 5% |
| After 14 days | Pass | 3% + 150 ₪; no 5% |
| Compare both ×3 | Pass ×3 | Stable; 5% only as old when mentioned |
| Unreplaced 2023 rule (form 4401) | Pass | Base still used |
| Start vs purchase clock | **Fail (remaining)** → see `docs/cancellation-clock-base-fix-2026-10-22.md` | Clock-base prompt rule 10 added; A/B still fail after one reinforce |

## Generation comparison rescore (no new model calls)

See `eval_results/generation-comparison-2026-10-21T14-29-23-846Z.rescore.md` (original MD preserved).

- Cost: saved rows lack `cachedInputTokens` → cache-sensitive USD **not fully verifiable**; recalculated averages assume all prompt tokens uncached; `reasoningTokens=0` on all saved runs (no double-count).
- Pricing source: OpenAI standard short-context list prices.

## Gates

- Unit: `annotate-partial-updates`, `resolve`, `model-request-params` — pass
- `pnpm lint` — pass
- `pnpm typecheck` / `pnpm build` — pass (ChatCompletion cast + mock `GenerateAnswerResult` fields)

## Out of scope (stopped here)

Retrieval / multi-applicability / UI / full model re-runs / push / deploy.
