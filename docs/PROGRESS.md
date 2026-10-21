# Progress status

## Stage 0 — Review and plan

- **Status:** Done

## Stage 1 — HomeDemo UI + Mock

- **Status:** Done
- UI from HomeDemo @ `9845a8ba…`; runtime separated; mock labeled

## Stage 2 — Corpus ingestion

- **Status:** Done (including targeted fix for multi-row PDF tables)
- Libraries: `unpdf` (PDF+Hebrew+positions), `mammoth` (DOCX+HTML tables), `unified`/`remark-parse`/`remark-gfm` (Markdown), `node-html-parser` (HTML from mammoth)
- Last result: **33 documents** — success=24, success_with_warnings=9, failure=0; no `extractionIncomplete` on checked tables
- Commands: `pnpm ingest`, `pnpm test:ingestion`
- Tests: typecheck, lint, 7 preservation tests — passed (including multi-row cell merge in forms catalog, deductibles, TAMA 38, spacing by position)

### PDF quality fix (after stage 2)

- **Issue:** Continuation rows across columns marked as new rows (`startsNewRow` by cluster count), splitting content like 4401; `join("")` glued tokens without spaces
- **Fix:** New row only when key column full (or form id); continuations merge into cells; spaces from horizontal gap between text items; stop table region before prose
- **Quality flags:** `structureInferred` = inferred layout; `extractionIncomplete` / `Partial extraction` = suspected loss/mis-association (different things)

### Typical warnings

- PDF: table structure from text positions (`structureInferred`); loss flagged separately if detected
- DOCX: `Compact` style unmapped in mammoth (checked tables OK)
- Markdown: HTML comments removed from search text

## Stage 3 — Chunking

- **Status:** Done
- Module: `src/chunking/` (independent of Next.js)
- Commands: `pnpm chunk`, `pnpm test:chunking`, `pnpm test:rag-prep`
- Output: `data/chunks.json`, `data/chunking-report.json`
- Last result: **33 documents → 49 chunks** — success=24, warnings=9 (from ingestion), failure=0
- Estimated length (heuristic): min≈50, median≈130, max≈359; **no outliers above 700 target**
- Policy: short docs one chunk; `03_car_general_terms` split by numbered sections; forms catalog split by row groups with repeated headers
- Tests: 8 chunking + 7 ingestion — passed; typecheck/lint — passed

## Stage 4 — Embeddings + retrieval + retrieval eval

- **Status:** Done including live run (after billing fix)
- Modules: `src/rag/`, `src/eval/`; commands `pnpm index` / `retrieve` / `eval:retrieval`
- Index: **49** chunks, `text-embedding-3-small`, dims=**1536**, formatVersion=1 → `data/index/embeddings.json`
- API usage at index: prompt/total **23,084** tokens; second run: **full reuse** (0 new chunk embeddings)
- `eval:retrieval` (14 questions with sources; D04=N/A): R@1≈**0.357**, R@3≈**0.536**, R@5≈**0.643**, MRR≈**0.589**; query tokens **737**; avg embed≈303ms / search≈0.4ms
- Reports: `eval_results/retrieval-eval.json`, `retrieval-eval.md`
- Key finding: Document Recall ≠ enough to answer (e.g. D06 finds `03_car_general_terms` but not definition/exception sections; D03 ranks 2024 before 2026)
- **Did not** change chunking/retrieval to chase scores at this stage

### Index/ranking sanity review (after D09/D12)

- **Conclusion:** No implementation bug found; failures consistent with vector-only limits on those questions.
- Checked: `chunkId→embeddingText→vector→storage`; input/text hashes; dims 1536; no zero vectors; 49 unique hashes; batch `item.index`; cache keyed by text+model+dims.
- Independent check: fresh embedding (no cache) for `12_home_contents_limits` and `07_towing_roadside` — cosine vs stored ≈0.9998 / ≈0.99999; search with fresh vector returns same chunk #1.
- D08/D09/D12 (rank vs all 49): needed info **is** in target `embeddingText`; target ranks 8 / 9 / 17; direct cosine ≡ retrieve score; top1 stable on recompute.

### Hybrid experiment — BM25 + RRF (single config, no tuning)

- **Config:** BM25 k1=1.2 b=0.75 on `embeddingText`; RRF c=60 equal weight; NFKC tokenization, no stemming
- **Command:** `pnpm eval:hybrid` → `eval_results/hybrid-comparison.*` (original vector reports **not** overwritten)
- **Averages (14 questions with sources):**

  | Mode | R@1 | R@3 | R@5 | MRR |
  | --- | --- | --- | --- | --- |
  | vector | 0.357 | 0.536 | 0.643 | 0.589 |
  | lexical | 0.750 | 0.857 | 0.857 | 0.952 |
  | hybrid | 0.429 | 0.821 | 0.929 | 0.732 |

- Hybrid vs vector: R@5 **+5 / −0 / =9**; RR **+6 / −0 / =8**
- Content: D08/D09/D12 — doc+info in hybrid top5; D06 still missing §2/§12; D01/D02/D10/D14 no R@5/RR regression
- **Adoption recommendation (dev only):** Hybrid preferred over vector-only on this corpus; lexical very strong but weakens multi-doc (D06 R@5=0.5). Limits: no stemming, D05 ambiguous, version ranking not solved, no proof on new questions

## Stage 5 — Grounded generation (Hybrid default)

- **Status:** Done in code + E2E on 15 questions; stopped before UI / GenUI / push / deploy
- Modules: `context-builder`, `generate`, `validate-answer`, `ask`; commands `pnpm ask`, `pnpm eval:ask`
- Answer model: **`gpt-4.1-mini`** (`GENERATION_MODEL`; Structured Outputs per OpenAI)
- Context budget: **3500** estimated tokens (same heuristic as chunking); whole chunks; retrieved first, then `documentId` expansion
- E2E (`eval_results/ask-eval.*`): 15/15 no system_error; statuses: answered=14, insufficient_evidence=1 (D04)
- Synthetic injection test (outside corpus): model did not follow pirate instruction / did not invent OfekPets — **no guarantee of full robustness**
- Tests: `pnpm test:rag` (26 passed + 1 skip without key), typecheck, lint — passed

### Manual review (not an automatic metric)

Method: after `ask()`, compare to `reference_answer`/`sources` on correctness / claim support / completeness + FOCUS checks. Reference not in prompt.

| id | FOCUS / note |
| --- | --- |
| D03 | **pass** — 2026 version (1,100 ₪) despite 2024 ranking first |
| D04 | **pass** — `insufficient_evidence`, no pet insurance invention |
| D05 | **partial** — no `clarification_needed`; showed car options (allowed by reference) but skipped home |
| D06 | **partial** — expansion brought definitions (§2/c002); exception §12 (c012) dropped by budget; answer correct via annex+definition |
| D08 | **partial** — 2025 update (full refund in 14 days) applied, but contradictory pro-rata wording added |
| D10 | **pass** — service letter limits preserved vs marketing |

### Remaining failures (no tuning round) — before 5.1

- D05 does not move to `clarification_needed`
- D06: §12 not always in context at current budget when many siblings in doc
- D08: partial mix of old pro-rata with 2025 update
- Expansion by documentId can add irrelevant siblings when large doc in top5 (noise, not Recall@5 change)

## Stage 5.1 — Targeted answer quality + eval

- **Status:** One fix round; model and retrieval unchanged; original report kept as `ask-eval-stage5-baseline.*`
- Stronger policy in `generate.ts` (ambiguity / no-info / applicability / precision / non-contradiction) — without D01–D15 id tuning
- Eval: 4 separate dimensions — conclusion / claimSupport / completeness / behavior; chunkId = technical only
- Claim audit: `docs/stage5.1-claim-audit.md`
- Run: `ask-eval-stage5.1.*` + comparison `ask-eval-stage5.1-comparison.md`
- Extra tests (not in reference set): X01 ambiguity → `clarification_needed`; X02 missing topic → `insufficient_evidence`

### Targeted results (after)

| id | Change |
| --- | --- |
| D04 | Wording improved (limited sources); abstention behavior pass; claimSupport still partial on citation |
| D05 | **Not fixed** — still `answered` with car deductibles (behavior failure) |
| D06 | Conclusion supported by definition+annex; §12 still outside budget |
| D08 | **Fixed in answer text** — full refund without pro-rata contradiction; pro-rata citations may remain in list |
| D10 | Still correct; theft/total loss supported |
| D11 | **Fixed** — PIR included |
| D14 | Calculation base correct |

### Unfixed after 5.1

- **D05:** still no clarification when product unspecified
- **D06:** §12 not in context (budget; not enlarged at this stage)
- **D08:** clean answer text but `citations` may still list pro-rata claims from chunk
- **D04:** citation may still slightly overstate source scope
- Large-doc expansion noise — unchanged

## Stage 5.2 — Last core fix attempt (before UI)

- **Status:** Implemented; prior reports kept (`stage5-baseline`, `stage5.1*`)
- **Unchanged:** model, index, retrieval, context budget
- Clarify before retrieve (`src/rag/clarify.ts`); `answerParts` → server answer/citations; neutral insufficient
- Run: `ask-eval-stage5.2.*` + `ask-eval-stage5.2-comparison.md`
- Clarify gate cost (15+X01/X02): ~5000 tokens, ~16s total

### D05 — ruled out question-passing bug

- Exact text: `"מה ההשתתפות העצמית?"`
- In 5/5.1 passed as `trim()` to retrieve then generation — **no transport bug**
- Failure was product inference after retrieval; hence clarify gate **before** retrieval

### Targeted results

| Target | Result |
| --- | --- |
| Wanted D05 clarification | Pass (`skippedRetrieval`) — **1/10** clarifications |
| 9 clarification regressions | D03, D06, D08, D09, D10, D11, D12, D13, D14 |
| D04 / X02 neutral | Pass |
| D01/D02/D07/D15 | Stayed answered |

### Why pre-retrieve gate was **rejected**

- Fixed one ambiguity (D05) but caused **9 unnecessary clarifications** on answerable questions.
- Total 10 `clarification_needed` on 15-set: 9 regressions + wanted D05.

## Stage 5.3 — Roll back Clarify gate (keep 5.1/5.2 structural wins)

- **Active path:** Hybrid → context → generation (**no** pre-Clarify call)
- **Kept:** `answerParts`, chunkId validation, neutral insufficient, 5.1 policy, historical reports
- **`clarify.ts`:** historical file only — **not** wired to `ask()`
- Run: `ask-eval-stage5.3.*` + `ask-eval-stage5.3-comparison.md`
- Actual cost (15+X, no clarify): embed_prompt≈806, gen_total≈74k, wall≈31s

### 5.3 results

| | |
| --- | --- |
| Statuses | answered=14, insufficient=1 (no clarification in 15-set) |
| 9 regressed in 5.2 | **Back to answered** (D03, D06, D08–D14) |
| D08 | Single answer + 2025 source only; no pro-rata contradiction |
| D04/X02 | Neutral wording; citations=[] |
| D06 (this run) | Conclusion supported (c002+annex); §12 omitted — partial completeness |
| D05 | **Open:** still `answered` with car amounts |
| X01 | `clarification_needed` (extra test passed) |
| D11 | Amounts supported; PIR **omitted** in this run |

### Output shape

- Valid on all checked questions: answer from parts; citations=part sources only; no system_error.

## Stage 6 — Wire assistant-ui to `ask()`

- **Status:** Done in code + fixture tests; stopped before push / deploy
- **Wiring:** `useLocalRuntime(ragChatModelAdapter)` → `POST /api/ask` (Node) → same `ask()` as CLI
- **Unchanged:** model, prompts (until Stage 7 translation), retrieval, chunking, context budget
- **Display DTO:** `status`, `answer`, `answerParts`, `citations`, `sources` (+ meta); no full diagnostic dump
- **UI:** `answerParts` with clickable refs; source card shows name/section/pages + chunk text; RTL; no “verified answer” label
- **Conversation (current):** follow-ups supported — active branch history sent to API; composer hint in Hebrew; rewrite when history present. **Historical (early stage 6 note):** initially documented as each question isolated — superseded by conversation checklist below.
- **localStorage:** thread list/messages persist **browser-only** (`ofek-rag:` prefix) — not cloud; clearing site data loses threads
- **Disabled:** model picker / mic / attachments; model label from server (`GET /api/ask`)
- **Fixture tests:** `pnpm test:api` (16) — answered+sources, clarification, insufficient without sources, server error, abort, DTO without diagnostic dump
- **typecheck / lint / build:** passed (after removing `runtime`/`dynamic` for `connection()` under cacheComponents)
- **Remaining:** D05, D11 PIR omission — documented; not fixed in UI

### Live browser / API (stage 6)

| Check | Type | Result |
| --- | --- | --- |
| Call center hours Friday | live (API+UI) | `answered` + `28_call_center_hours`; source shows index text |
| Cancel form 4401 | live (API) | `answered`; sources include forms catalog + cancel procedure |
| Pet insurance | live (API+UI) | `insufficient_evidence`; no empty sources panel |
| Baggage / 8h delay | live (API+UI) | `answered` with $150; **PIR omitted** (D11 class) — not fixed in UI |
| RTL / new thread / message separation | UI | OK |
| Cancel request | UI + fetch abort | No late answer after Cancel; AbortError on fetch |
| Bad input | fixture HTTP | 400 empty/invalid_type with safe message |
| Screenshots | UI | `docs/screenshots-stage6/` |

## Stage 7 — Submission prep + demo docs (+ English developer docs)

- **Status:** Documentation and developer-facing prompts in English; **no** RAG logic change intended for translation pass; no push/deploy
- Requirements checklist vs PDF: `docs/REQUIREMENTS-CHECKLIST.md`
- Install: `docs/INSTALL.md` + `pnpm prepare:rag`; clean-copy verify without secrets
- Eval summary: `docs/EVALUATION-SUMMARY.md`
- Failures / one more week: `docs/FAILURES-AND-NEXT-WEEK.md`
- Demo + code map: `docs/DEMO-SCRIPT.md`, `docs/CODE-MAP.md`
- README updated for system explanation
- `eval_results/` kept for submission (removed from broad gitignore)
- Gates: `pnpm test:gates` — typecheck, lint, 50+16 tests, build — passed (2026-10-21)
- Submission note: workspace may lack `.git`; create repo before GitHub upload
- **Regression after English prompts:** reuse Stage 6 holdout — not unseen evaluation

## Stage 8 — Final submission verify + local Git

- **Status:** Done; **no** RAG logic change; **no** push/deploy
- PDF read visually — `docs/SUBMISSION-VERIFY.md` + updated checklist
- E2E from zero: `pnpm install --frozen-lockfile` + `prepare:rag` (33/49/index) + CLI ask + API ask
- `allowBuilds.esbuild: true` in `pnpm-workspace.yaml` for pnpm 12
- Local Git: see stage 8 summary / `git log -1`

### Next steps (out of current scope)

- Add remote + push to GitHub / deploy — only on explicit request
- D05/D11 improvements per failures doc

## Checklist — Tracing for ask path

- **Status:** Done; **no** push / deploy / answer logic change
- `requestId` per ask; returned by API (success+error) and CLI
- Events: start → stages (rewrite/embedding/retrieval/context/generation/validation) → end (success|error|cancelled)
- Embedding nested under retrieval (not a separate top-level stage)
- JSONL in `data/traces/` (privacy: no question/answer/history text); write failure does not break ask
- `pnpm trace -- <requestId>`; thread titles not in trace
- Tests: fixtures parallel/cancel/error/rotation + two live requests
- **Unchanged:** prompts (until Stage 7), models, retrieval, RTL, persistence, timing tests
- **Tracing overhead:** not measured separately from stage totals; no extra A/B

## Checklist — Conversation context (not Ingestion)

- **Status:** Done in code + fixtures + live eval + browser check; **no** tracing / push / deploy
- Contract: `ask(question, { history? })` backward compatible; no history → no rewrite
- Window: `HISTORY_MAX_TURNS=6`, `HISTORY_MAX_TOTAL_CHARS=6000`; role validation (no client system/developer)
- UI: active branch only → `/api/ask`; localStorage persistence; composer: «אפשר לשאול שאלות המשך באותה שיחה.»
- Rewrite → retrieve(`standaloneQuestion`) → generation(original + standalone + unresolved)
- Rewrite diagnostics in CLI/eval only (not in chat bubble)
- Commands: `pnpm eval:conversation`, `pnpm eval:ask-stage2`
- **Unchanged:** embedding, chunking, Hybrid
- Conversation eval (2026-10-21): 8/8 standalone checks; rewrite ≈8.4s / prompt≈4522 / completion≈360 for 8 turns → `eval_results/conversation-eval-2026-10-21T11-58-39-775Z.*`
- No-history regression: 15 questions, status like 5.3 (answered=14, insufficient=1) → `eval_results/ask-eval-stage2-nohistory.*`
- Remaining: C07 may answer wrong product; C05b/C06 sometimes clarification; D05 open

## Checklist — Applicability, versions, partial updates (Stage 4)

- **Status:** Done in code + deterministic tests + live eval; **no** push / deploy; **before** semantic review experiment (stage 5)
- **Kept:** Hybrid, conversation/rewrite, `answerParts`, tracing
- Curated manifest: `config/document-relations.manifest.json` (explicit evidence only; `sourceHash` enforced vs index)
- Mapped corpus rules: car 2024↔2026 (issue/renewal from 1.3.2026); cancel 2025 partial update for refund section only; marketing → binding terms
- Context: Hybrid top-K kept for metrics; relation/version expansion separate; rejected version omitted from generation; partial update keeps base+update; budget not silently exceeded
- Generation gets sources + applicability summary with evidence refs (metadata ≠ substitute for chunk text)
- Tracing `context` stage: relations, version decision / unresolved, `dateKindUsed`, omissions, `manifestVersion`
- Tests: `src/rag/document-relations/*.test.ts` + `pnpm eval:ask-stage4`
- Reports: `eval_results/ask-eval-stage4.*` + comparison vs stage5.3
- **Tracing overhead:** not measured separately
- **Unchanged:** re-embed (embeddingText unchanged); no D-ids/canned answers in manifest

## Checklist — Extended evaluation (Stage 6)

- **Status:** Done in docs + holdout + runs; **no** RAG/prompt/model changes in stage; **review=off**; **no** push / deploy
- Config freeze: `docs/stage6-config-freeze.md` (`prompt-ceab49598eebb4b9` **before** Stage 7 English prompts; index hashes; dirty tree — commit not full runnable snapshot)
- Reviewer experiment closure (no re-run): `docs/stage6-reviewer-experiment-closure.md` (D09 = decision change, not answer improvement)
- Holdout 20: `dev_set/extended_eval_stage6.json` + `.sha256` (AI-assisted during development)
- Runs: `pnpm eval:ask-stage6-extended`, `pnpm eval:conversation-stage6`
- Three-group summary: `docs/stage6-quality-summary.md`; updated EVALUATION-SUMMARY + FAILURES
- **No** tuning to holdout after seeing results; next three improvements documented only
- **Stage 7+:** same holdout for post–prompt-translation **regression**

## Checklist — Claim support / completeness review (Stage 5)

- **Status:** Implemented as **experiment option**; **default off**; **no** push / deploy; followed by Stage 6 extended eval
- **Kept:** Hybrid, rewrite, document-relations, context budget, model `gpt-4.1-mini`
- Module: `src/rag/answer-review/` (review → revision×1 → re-review; structured findings; not absolute truth validator)
- Budget: one generation + up to 2 reviews + one revision; failure → `answer_review_failed` (not `insufficient_evidence`); technical failure → `answer_review_error`
- Tracing: `semantic_review` / `revision` separate from `validation` (schema/chunkIds)
- Enable: `ANSWER_REVIEW_ENABLED=1` or `ask({ answerReviewEnabled: true })`
- Eval: `pnpm eval:ask-stage5-paired` + `ask-eval-stage5-comparison.md`; conversation with review: `pnpm eval:conversation-stage5`
- **Why default off:** like 5.2 lesson — false blocks (D04 abstention, D13) + misses D05/D11 + cost even on pass-first
- Stage 4 reports not overwritten

## AI tools used so far

- **Cursor Agent** — review, UI, ingestion, chunking, embeddings/retrieval, hybrid, generation/ask, UI↔API wiring, conversation context, tracing, applicability/versions, answer review experiment, extended holdout, Stage 7 English developer documentation and prompt translation scope
