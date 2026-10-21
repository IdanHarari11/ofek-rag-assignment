# Install and run

Verified in this project with **Node.js v22.23.3** and **pnpm 12.11.2** (`packageManager` in `package.json`; `engines.node: >=22`).

## Three separate modes

| Mode | When | Commands | API key |
| --- | --- | --- | --- |
| **First-time setup** | Fresh clone / no `data/index` | `pnpm install` → `.env` → `pnpm prepare:rag` → `pnpm dev` | Yes — embeddings in `pnpm index` |
| **Normal run** | Index exists, corpus unchanged | `pnpm dev` (or `pnpm ask -- "…"`) | Yes — per question (embed + generation) |
| **Rebuild after corpus change** | Edits under `corpus/` | `pnpm prepare:rag` (ingest→chunk→index) | Yes — re-index changed chunks (reuse when possible) |

`pnpm prepare:rag` only chains existing scripts: `ingest && chunk && index` — **no** duplicated logic.

## Steps (first-time setup)

```bash
# 1) Install with lockfile
pnpm install

# 2) Environment (no secrets in repo)
cp .env.example .env
# Edit .env and set OPENAI_API_KEY (server only; not NEXT_PUBLIC_)

# 3) Extract → chunk → index
pnpm prepare:rag

# 4) UI
pnpm dev
```

CLI without UI:

```bash
pnpm ask -- "מה שעות הפעילות של מוקד שירות הלקוחות ביום שישי?"
```

## Do not forget

- Without a valid `OPENAI_API_KEY`, `pnpm index` / `ask` / `/api/ask` fail with a service error — not `insufficient_evidence`.
- `data/` is gitignored — each machine builds its own index (or copy `data/` out of band if agreed).
- `eval_results/` are kept for submission (saved reports); no need to re-run all evals unless answer logic changed.

## pnpm 12 — esbuild build

`pnpm-workspace.yaml` sets `allowBuilds.esbuild: true` so `pnpm install --frozen-lockfile` runs esbuild postinstall (needed for tsx/vite). Without it, pnpm 12 may fail with `ERR_PNPM_IGNORED_BUILDS`.

## Verify path on a clean copy

### Stage 7 (partial)

Clean copy: install + ingest + chunk; index without a key fails as expected.

### Stage 8 — full from zero including real index

Copy path: `/tmp/ofek-rag-e2e-poyucM` (no `node_modules`/`data` from source).  
Key: **`OPENAI_API_KEY` in environment only**; `.env` in the copy leaves the key field empty.

| Step | Result |
| --- | --- |
| `pnpm install --frozen-lockfile` | OK |
| `pnpm prepare:rag` | 33 documents → 49 chunks → index 49/49; usage **23,084** tokens; hashes match source |
| `pnpm ask -- "…שישי?"` | answered + source `28_call_center_hours.md` (embed 42 / gen_total 2070) |
| `POST /api/ask` | answered + source with index text |

Details: `docs/SUBMISSION-VERIFY.md`.
