# Stage 6 — Active configuration freeze

Recorded for the extended evaluation. **No RAG logic, prompts, or models were changed in Stage 6.**

> **Stage 7 (documentation / English prompts):** Developer markdown is English; system prompts may move from Hebrew to English. Expect a **new `promptBundleId`** in traces after that change even if intent is preserved — model behavior may shift slightly. Use the same Stage 6 holdout (`dev_set/extended_eval_stage6.json`) for **regression** after translation, not as a fresh unseen set.

## Identity

| Field | Value |
| --- | --- |
| `promptBundleId` (Stage 6 freeze, Hebrew prompts) | `prompt-ceab49598eebb4b9` |
| `promptBundleId` (Stage 7, English prompt instructions) | `prompt-11221afce7f41ed1` |
| Git `HEAD` (short) | `a7c0d42` (pre–Stage 7 commit; tree may be dirty) |
| Working tree | **Dirty** until Stage 7 commit — `localChangesUnknown: true` in traces. **Do not treat the commit hash as representing the full runnable tree.** |
| Freeze time (UTC) | 2026-10-21 (Stage 6 documentation); Stage 7 prompt id recorded same day |

## Models

| Role | Setting |
| --- | --- |
| Embeddings | `text-embedding-3-small`, dimensions **1536** |
| Generation / rewrite / (optional) review | `gpt-4.1-mini` (`GENERATION_MODEL`) |

## Index

| Field | Value |
| --- | --- |
| Path | `data/index/embeddings.json` |
| `formatVersion` | 1 |
| `chunkCount` | 49 |
| `chunksInputHash` | `cf3e80be3731404fc22ee4504b8a7a641504de5f43b11982b310660ae410a4f3` |
| `embeddingTextHash` | `f71d3db0075c645358d1ab70b4681d58576ee9c350c93671dbf5f2d6aacdbea4` |
| `createdAt` | `2026-10-21T05:34:38.487Z` |

## Document relations

| Field | Value |
| --- | --- |
| Manifest | `config/document-relations.manifest.json` |
| `manifestVersion` | 1 |
| Families covered | car_comprehensive_policy, car_general_terms, cancellation_procedure, car_marketing |
| Validation | `sourceHash` checked against index at load |

## Ask path (active)

| Knob | Active value |
| --- | --- |
| Retrieval | Hybrid (BM25 + vector RRF), `topK=5` |
| History window | `HISTORY_MAX_TURNS=6`, `HISTORY_MAX_TOTAL_CHARS=6000` |
| Context budget | `DEFAULT_CONTEXT_BUDGET_TOKENS=3500` (heuristic same as chunking) |
| Applicability enrichment | **On** (Stage 4 path) |
| `ANSWER_REVIEW_ENABLED` / semantic review | **false** (off) |

## Matching prior ask report

For the original 15 `dev_set` questions under this frozen path (hybrid + applicability + review off), use:

- **`eval_results/ask-eval-stage4.*`** (`stageLabel=stage4-applicability`, `generatedAt=2026-10-21T12:44:53.717Z`)

`ask-eval-stage5.3.*` predates Stage 4 applicability enrichment and is **not** the active-config baseline for Stage 6 group comparison.
