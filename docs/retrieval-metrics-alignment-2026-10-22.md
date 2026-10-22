# Retrieval metrics alignment (2026-10-22)

## Correction

Closure-round notes briefly compared **vector** Document Recall (R@5≈0.643 → 0.714) as if it were the active Hybrid path. That was incorrect.

| Report | Mode | When | R@5 | MRR | Index note |
| --- | --- | --- | --- | --- | --- |
| `eval_results/retrieval-eval.json` / historical | **vector** (retrieve default) | 2026-10-21 | 0.643 | 0.589 | pre-aliases `cf3e80be3731…` chunks |
| `eval_results/retrieval-eval-closure-after-2026-10-22.*` | **vector** | 2026-10-22 post-aliases | 0.714 | 0.607 | `embeddingTextHash=7a261a23b62d…` |
| `eval_results/hybrid-comparison-before-aliases-2026-10-21.*` | vector / lexical / **hybrid** | 2026-10-21 | hybrid **0.929** / **0.732** | same | pre-aliases |
| `eval_results/hybrid-comparison-after-aliases-2026-10-22.*` (also current `hybrid-comparison.*`) | vector / lexical / **hybrid** | 2026-10-22 | hybrid **0.929** / **0.774** | vector 0.714 / 0.607 | post-aliases |

**Do not compare vector-before to hybrid-after.**

### Hybrid before → after (same mode, post retrieval-aliases)

| Mode | R@5 before | R@5 after | MRR before | MRR after |
| --- | --- | --- | --- | --- |
| vector | 0.643 | 0.714 | 0.589 | 0.607 |
| lexical | 0.857 | 0.893 | 0.952 | 1.000 |
| **hybrid (active)** | **0.929** | **0.929** | **0.732** | **0.774** |

Hybrid R@5 unchanged; MRR improved. Per-question hybrid vs vector: +4 / −0 / =10 (no R@5 regressions vs vector). No RAG retune in this closure round.

### Metric denominator

Document Recall@K / MRR: whether a **reference document** appears among the top‑K **retrieved chunks**. Not answer accuracy. Not evidence-span coverage.

### Aliases / embeddings integrity

- Retrieval aliases append to `embeddingText` only (search). Citation / UI source cards use chunk **body** text.
- After alias change, `pnpm index` re-embedded changed chunks; `embeddingTextHash` and per-item `embeddingText` match `buildEmbeddingText()` (no stale vectors with new text).

### Status language

Multi-applicability + home-cash + agent clawback HE/HE+EN probes: **resolved on tested regression cases** (see `docs/closure-multi-retrieval-2026-10-22.md`).  
**E15** (agent 5% discount holdout item): **not** claimed improved — no dedicated E15 re-run in closure.
