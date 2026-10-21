# Index / ranking integrity audit

Date: after live Stage-4 eval (D09/D12 follow-up).

## Verdict

No implementation bug found. Failures on D08/D09/D12 are consistent with a vector-only baseline limitation.

## Checks performed

1. Chain: chunkId → embeddingText → stored vector → retrieve path.
2. Manifest hashes match rebuilt fingerprints from `data/chunks.json`.
3. Batch API placement uses `response.data[].index` (no order assumption alone).
4. Cache reuse requires identical embeddingText + same model/dimensions.
5. All 49 vectors: dim=1536, non-zero, finite; 49 unique vector hashes for 49 distinct texts.
6. Fresh re-embed (no cache) of contents + towing targets ≈ cosine 0.9998+ vs stored; fresh-vector search ranks each target #1.
7. D08/D09/D12: target answer span present in indexed embeddingText; target ranks 8/9/17; direct cosine equals ranked score; retrieve top-1 recomputes consistently.

## Suggested next experiment (not implemented)

Lightweight hybrid (lexical signal + cosine) or query expansion for coverage terms — evaluate against this frozen vector-only baseline.
