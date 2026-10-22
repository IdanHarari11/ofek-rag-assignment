# Generation model comparison (controlled) — 2026-10-21

## Scope

API compatibility for `gpt-5.6-terra` + isolated **generation-only** comparison vs `gpt-4.1-mini`.

- Same frozen questions, context chunks, applicability prompt lines, system prompt, and `answerParts` JSON schema.
- No rewrite/retrieval re-run per model for probe cases (snapshot from manual-fail diagnosis + index).
- Answer review **off**. Prompts / embeddings / retrieval / budget / relations **unchanged**.

Artifacts (do not overwrite prior reports):

- `eval_results/generation-comparison-snapshot-2026-10-21T14-29-23-846Z.json`
- `eval_results/generation-comparison-2026-10-21T14-29-23-846Z.json`
- `eval_results/generation-comparison-2026-10-21T14-29-23-846Z.md`

## API compatibility

| Item | Finding |
| --- | --- |
| Endpoint | Chat Completions (`v1/chat/completions`) — supported for both models per OpenAI model pages |
| Structured outputs | `json_schema` / `answerParts` smoke **OK** for both |
| `temperature:0` on Terra | **400** — only default (1) supported; code now **omits** temperature for reasoning-family models |
| `max_tokens` on Terra | Rejected; use `max_completion_tokens` (rewrite path updated) |
| Reasoning | Terra sends `reasoning_effort=medium` (documented default); returned in run meta |
| Fallback | **None** — requested id is sent unchanged |
| UI | Composer no longer treats GET env model as a successful live call |

Pricing used (OpenAI standard short-context, documented):

- `gpt-4.1-mini`: $0.40 / $1.60 per 1M (input/output); cached input $0.10
- `gpt-5.6-terra`: $2.00 / $12.00 per 1M; cached input $0.20

## Out of scope (not solved by generation swap)

- **MF-A** — demoted 2024 chunk (`demoted_version_omit_retrieved`)
- **MF-C** — home contents retrieval miss
- **MF-E** — English agent FAQ retrieval miss

## Recommendation (updated after rescore — see `.rescore.md`)

After correcting brittle scoring (invented/contradictory user dates = fail; omitting restatement ≠ fail; CTRL-replacement material completeness ≠ exact `כתב שירות` string):

- **Terra** was stronger on the **date-handling** probes (MF-B t1 and t2) and **does not regress** on CTRL-replacement under the corrected criterion.
- **MF-D** (superseded 5% leak) was a **context/applicability** issue, not solved by model swap alone (addressed separately via section-level partial-update annotation).
- **MF-F** still passes for both under frozen context.
- **Model choice remains open.** Cached vs uncached token split was not stored, so **exact cost ratios are not verifiable** from the saved run — do not cite a precise multiple. Terra is still expected to be more expensive and slower at `reasoning_effort=medium`, but that is qualitative only until usage breakdown is logged.

**Active default for isolating prompt/context fixes:** keep **`gpt-4.1-mini`**. Terra remains supported for experiments; do not treat the original (pre-rescore) CTRL/B-t2 narrative as authoritative.