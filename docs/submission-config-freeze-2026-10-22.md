# Submission configuration freeze (2026-10-22)

**This is the active submission configuration.** Older freezes (`docs/stage6-config-freeze.md`) and historical eval reports remain for history only — they do **not** describe this tree after retrieval aliases, multi-scenario keep, temporal facts, and sources UI.

Secrets are never recorded here. API keys stay in the environment only.

## Identity

| Field | Value |
| --- | --- |
| Freeze label | `submission-2026-10-22` |
| `promptBundleId` | `prompt-939569b5812dce49` |
| Git submission commit (clean-install verified) | `1679625` (`167962594febd2a6443848ebc29ba904f1285ea6`) |
| Working tree after commit | Clean except ignored/local `.planning/` |
| Freeze time (UTC) | 2026-10-22 |

Clean-install path verified from `git archive 1679625` → `pnpm install --frozen-lockfile` → `pnpm prepare:rag` (hashes match) → `pnpm build` → CLI `ask` + `POST /api/ask`.

## Models

| Role | Setting |
| --- | --- |
| Embeddings | `text-embedding-3-small`, dimensions **1536** |
| Generation / rewrite | `gpt-4.1-mini` (`GENERATION_MODEL`) |
| Answer review | **Off** (`ANSWER_REVIEW_ENABLED=0`) |

## Index / corpus fingerprints

| Field | Value |
| --- | --- |
| Path | `data/index/embeddings.json` (gitignored; rebuild with `pnpm prepare:rag`) |
| `chunkCount` | 49 |
| `chunksInputHash` | `cf3e80be3731404fc22ee4504b8a7a641504de5f43b11982b310660ae410a4f3` |
| `embeddingTextHash` | `7a261a23b62d3261ee6c44e3bd28ca38f0b8165040be72e3547c5848cec57043` |
| Search-only aliases | `src/rag/retrieval-aliases.ts` (in `embeddingText` only — not citation body) |

## Active ask path

| Knob | Value |
| --- | --- |
| Retrieval | **Hybrid** (BM25 + vector RRF), `topK=5` |
| Document relations / applicability | On (`config/document-relations.manifest.json`) |
| Multi-scenario comparisons | Keep both car policy versions (`multi_scenario_comparison_keep_versions`) |
| Partial-update section annotation | On (cancellation refund section) |
| Computed temporal facts | On (prompt arithmetic block; Generation may still ignore) |
| Conversational rewrite | On when history present (`HISTORY_MAX_TURNS=6`, `HISTORY_MAX_TOTAL_CHARS=6000`) |
| Context budget | `DEFAULT_CONTEXT_BUDGET_TOKENS=3500` |
| Output | `answerParts` + server-assembled citations / sources |
| Answer review | Off |

## Evaluation commands (must pass Hybrid explicitly)

Submission suite: `pnpm eval:submission-final` → forces `mode: "hybrid"` on ask / conversation / manual-fail paths.

Historical **vector-only** baseline remains `pnpm eval:retrieval` (default mode=vector) — do not treat it as the submission retrieval path. Hybrid comparison: `pnpm eval:hybrid`.

## Explicit non-claims

- Hybrid Document Recall@5 is **not** answer accuracy.
- Computed day differences do **not** guarantee correct Generation use.
- Threads live in browser `localStorage` only; history window is capped.
- No streaming; experimental semantic review stays off.
- Model-comparison conclusions are from limited experiments.
- Dollar costs are estimates when usage splits are incomplete.
