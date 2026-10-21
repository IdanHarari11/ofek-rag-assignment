# מפת קוד קצרה

| מה לשנות | איפה |
| --- | --- |
| **Chunking** (גבולות סעיפים, מסמכים קצרים כקטע אחד, הערכת טוקנים) | `src/chunking/` — בעיקר מדיניות הפיצול וה־CLI `scripts/chunk.ts` |
| **Retrieval** (vector / BM25 / hybrid RRF, topK) | `src/rag/retrieve.ts`, `bm25.ts`, `rrf.ts`, `tokenize.ts`; קריאה מ־`ask()` / `scripts/retrieve.ts` |
| **Prompt / מדיניות מענה** (תחולה, הימנעות, הבהרה, מבנה `answerParts`) | `src/rag/generate.ts` (`buildSystemPrompt`, `buildUserPrompt`, סכמת הפלט) |
| **תקציב הקשר / הרחבה לפי מסמך** | `src/rag/context-builder.ts` — `DEFAULT_CONTEXT_BUDGET_TOKENS` (3500) |
| **אימות מזהי ציטוט והרכבת answer/citations** | `src/rag/validate-answer.ts` |
| **אורקסטרציה** | `src/rag/ask.ts` — Hybrid → context → generate → assemble |
| **API דק לדפדפן** | `src/app/api/ask/route.ts` + DTO ב־`src/lib/ask-display.ts` |
| **מיפוי תשובה לממשק** | `src/lib/rag-chat-model-adapter.ts` → `metadata.custom.rag`; תצוגה ב־`src/components/home-demo/messages.tsx`, `sources.tsx` |
| **Runtime מופרד מהעיצוב** | `src/components/demo-runtime/demo-runtime-provider.tsx` |
| **הערכת שליפה / hybrid / ask** | `src/eval/`, `scripts/eval-*.ts` (קוראים ל־`dev_set` רק כאן) |

הבהרה: renderer המקורות הוא **קבוע** (React) על נתונים מובנים — לא GenUI / HTML חופשי מהמודל.
