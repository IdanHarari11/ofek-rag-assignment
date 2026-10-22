# Sources UI closure (2026-10-22)

## Behavior

- Stable citation numbers for the whole assistant answer (`buildCitationNumberMap`).
- Same `chunkId` → same `[n]` in inline buttons and the sources list.
- Version disambiguation via verified `versionLabel` from `config/document-relations.manifest.json` (e.g. גרסה 2024 / 2026); otherwise file name.
- Section / pages only when useful metadata exists (section omitted if it only repeats the title).
- Source card body = index chunk text (no retrieval aliases, no computed temporal facts).
- `chunkId` validity is structural only — UI does not claim semantic verification.
- Optional `versionLabel` on the display DTO; legacy localStorage messages without it still render.

## Browser checks (screenshots)

Under `eval_results/screenshots-sources-2026-10-22/`:

| File | Case |
| --- | --- |
| `sources-multi-desktop.png` | Three-policy compare; `[1]`/`[2]`; 2024 vs 2026 |
| `sources-multi-mobile.png` | Same, mobile width + open source card |
| `sources-none-pets-mobile.png` | No corpus answer — no sources block |
| `sources-restore-after-reload.png` | Thread restored from localStorage after reload |
