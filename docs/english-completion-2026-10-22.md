# English completion pass (2026-10-22)

## Already English (unchanged this pass)

- Active generation / rewrite / review **prompt instructions** (Stage 7 translation) — answers still required in **Hebrew**.
- `promptBundleId` is a hash of those prompt constants (`resolvePromptBundleId`); **unchanged** this round (no prompt text edits).
- Developer CLI messages, most `src/rag/` comments, eval runners.

## Updated this pass

- README retrieval table + alias / source-number notes (English).
- `docs/CODE-MAP.md`, `docs/retrieval-metrics-alignment-2026-10-22.md`, closure failure status wording.
- New lib helpers: `citation-numbers`, `source-display`, `version-label` (English identifiers/comments; Hebrew UI strings only where user-facing).

## Kept in Hebrew (by design)

- UI copy, user-facing errors, model answers.
- Corpus / cited source bodies.
- Hebrew eval questions, fixtures, RTL tests.
- Hebrew retrieval/extraction terms (e.g. multi-scenario regexes, alias surface forms).
- Historical experiment JSON/MD outputs (English **summaries** added alongside; originals not rewritten).

## Stable IDs / contracts

No renames of API fields, storage keys, `chunkId`s, or corpus document ids for translation.
