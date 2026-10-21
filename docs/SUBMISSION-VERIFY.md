# Final submission verification (stage 8)

Date: **2026-10-21**. No push/deploy in this stage.

> **Stage 7:** Developer documentation translated to English; assignment PDF and eval run reports under `eval_results/` are unchanged. Post–Stage 7 prompt translation should be verified with regression on `dev_set/extended_eval_stage6.json`, not claimed as fresh holdout.

## 1. Assignment PDF

- Visual render: both pages to PNG via PDFKit (`/tmp/ofek-pdf-pages/page-0{1,2}.png`).
- Parallel PDFKit text extract for cross-check.

### Page 1 completed (was not fully available earlier)

| Area | After render + PDFKit |
| --- | --- |
| Background / task / “prefer couldn’t find” | **Fully read** |
| “What’s included” — zip table | **Semantically clear**: `assignment.zip` with `corpus/` (33 MD/Word/PDF) and `dem_set/` + `dem_questions.json` (**15** questions with reference answer and sources). Auto-extract broke folder names with underscores — **does not** change requirement meaning |
| Mandatory req 1 — Ingestion | **Full read**: all three formats including Word/PDF tables (page 2 continues reqs 2–7) |

### Comparison to `REQUIREMENTS-CHECKLIST.md`

- No additional mandatory requirement beyond the 7 items + submission bundle already documented.
- Accuracy fix: PDF question file is `dem_questions.json` under `dem_set/` (in repo: `dev_set/dev_questions.json` — same role).
- **Did not adopt** Vision-only contradictory claims (e.g. 32 questions / README.pdf) — inconsistent with PDFKit and on-disk layout.

**Conclusion:** Mandatory and submission requirements **read in full** (pages 1+2). Only limitation is technical garbling of names in the “what’s included” table — content recovered.

## 2. Run from zero (temp copy)

Path: `/tmp/ofek-rag-e2e-poyucM` (does not touch original workspace).  
API key: **environment variable only**; `.env` in copy leaves key field empty.

| Step | Result |
| --- | --- |
| `pnpm install --frozen-lockfile` | Success (after `allowBuilds.esbuild: true` in `pnpm-workspace.yaml`) |
| `pnpm prepare:rag` | ingest **33** / chunk **49** / index **49/49** |
| hashes | `chunksInputHash` / `embeddingTextHash` **match** original index |
| index tokens | prompt/total **23,084** |
| `pnpm ask -- "…שישי?"` | `answered`; 08:00–12:00; source `28_call_center_hours.md`; embed=42, gen_total=2070; ~2.9s |
| `POST /api/ask` (temp next dev port) | `answered` + source with index text |

**Conclusion:** Build from zero **completed**, including real index — not reuse of original `data/`.

## 3. Submission files / secrets

| Check | Result |
| --- | --- |
| `.env` / `.env.*` gitignored; `.env.example` has no secret value | OK |
| `node_modules`, `.next`, `data/` excluded | OK |
| `eval_results/` included | OK |
| `corpus/`, `dev_set/` | OK |
| `docs/licenses/assistant-ui-MIT.txt`, `docs/ATTRIBUTION.md` | OK |
| Secret string scan in non-`.env` files | No key-like values in code/reports (paths only if any) |

## 4. Local Git

| | |
| --- | --- |
| Branch | `main` |
| Commit | `8f1787e1ac4ebfae23278fbf3ab6414f6ba0d063` |
| Message | `Initial RAG assignment implementation` |
| Remote | **None** — local commit only, no push |

Git identity was configured globally beforehand; global Git config was not changed here.
