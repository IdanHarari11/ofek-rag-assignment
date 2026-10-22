# Submission clean-install verification

Verified **2026-10-22** from local commit **`1679625`** (`git archive` extract — no `node_modules` / `data` / `.env` from the working tree).

| Step | Result |
| --- | --- |
| `git archive 1679625` → `/tmp/ofek-rag-submission-clean-1679625` | OK |
| `pnpm install --frozen-lockfile` | OK |
| `pnpm prepare:rag` | 33 docs → 49 chunks → index 49/49; `chunksInputHash=cf3e80be3731…` `embeddingTextHash=7a261a23b62d…` (matches freeze) |
| Retrieval aliases + document-relations present in tree | OK |
| `pnpm build` | OK |
| `pnpm ask -- "…שישי?"` | `answered`; source `28_call_center_hours.md`; mode=hybrid |
| `POST /api/ask` on `PORT=3010` | `answered` + source text in DTO |

Key: **`OPENAI_API_KEY` in environment only**; `.env` in the clean copy left the key field empty.

**Not done:** push / remote / deploy.
