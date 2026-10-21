# אופק ביטוח — מבחן בית RAG

עוזר AI לנציגי מוקד בחברת ביטוח פיקטיבית: שאלה בעברית חופשית → תשובה מבוססת מסמכים עם מקורות שניתן לפתוח. עדיף «לא מצאתי» על המצאה.

## דוגמת שימוש

```bash
pnpm install
cp .env.example .env   # מלאו OPENAI_API_KEY
pnpm prepare:rag       # ingest → chunk → index (פעם ראשונה)
pnpm dev               # http://localhost:3000
```

בממשק: «מה שעות הפעילות של מוקד שירות הלקוחות ביום שישי?» → תשובה + כפתור מקור עם טקסט הקטע מהאינדקס.

CLI: `pnpm ask -- "…"`

מסלול מפורט: [`docs/INSTALL.md`](docs/INSTALL.md) · תסריט הדגמה: [`docs/DEMO-SCRIPT.md`](docs/DEMO-SCRIPT.md)

## ארכיטקטורה (קצר)

```
corpus/ ──ingest──► data/parsed/ ──chunk──► data/chunks.json
                                              │
                                         index (embeddings)
                                              ▼
                                      data/index/embeddings.json
                                              │
     UI (HomeDemo) ──► POST /api/ask ──► ask() ──► hybrid retrieve
                         │                    ├── context expand (budget)
                         │                    └── generate (Hebrew + answerParts)
                         └◄── display DTO (status, answer, sources…)
```

**למה Next.js אחד + ליבת RAG עצמאית?**  
אפליקציה אחת להגשה ולהדגמה; הליבה ב־`src/rag/` ניתנת להרצה מ־CLI, מ־API ומסקריפטי eval בלי תלות ברכיבי React. כך אפשר לבדוק `ask()` בבידוד ולחבר UI בלי לשנות את לוגיקת המענה.

## חילוץ מסמכים (Ingestion)

- 33 קבצים ב־`corpus/`: Markdown (`unified`/`remark`/`remark-gfm`), DOCX (`mammoth`), PDF (`unpdf`).
- טבלאות כמבנה + ייצוג טקסטואלי `עמודה: ערך`.
- אזהרות אופייניות: ב־PDF מבנה טבלה מחושב ממיקומים (`structureInferred`); DOCX לעיתים עם סגנונות לא ממופים; הערות HTML ב־Markdown מוסרות מטקסט החיפוש.
- פקודה: `pnpm ingest` → `data/ingestion-report.json`.

## Chunking

- יעד אורך היוריסטי (לא tokenizer של מודל); מסמכים קצרים נשארים **קטע אחד** כדי לא לפצל עובדות קצרות.
- מסמכים ארוכים (למשל תנאים כלליים) מפוצלים לפי סעיפים / קבוצות טבלה.
- סיבה: שמירה על הקשר מקומי + מטא־דאטה (מסמך, סעיף, עמודים) לכל קטע.
- `pnpm chunk` → 49 קטעים בריצה האחרונה.

## מודלים והגדרות

| תפקיד | ברירת מחדל | הגדרה |
| --- | --- | --- |
| Embedding | `text-embedding-3-small` (1536) | `OPENAI_EMBEDDING_MODEL` / `OPENAI_EMBEDDING_DIMENSIONS` |
| מענה | `gpt-4.1-mini` | `GENERATION_MODEL` |
| מפתח | שרת בלבד | `OPENAI_API_KEY` (ראה `.env.example`) |

בחירת embedding: מודל זול ומהיר לקורפוס קטן בעברית+אנגלית, עם אינדקס מקומי (בלי vector DB).

## שליפה — למה Hybrid

ניסוי אחד (בלי כוונון יתר) על 14 שאלות עם מקורות:

| Mode | R@5 | MRR |
| --- | --- | --- |
| vector | 0.643 | 0.589 |
| lexical | 0.857 | 0.952 |
| **hybrid** | **0.929** | **0.732** |

Hybrid שיפר R@5 מול vector ב־5 שאלות ללא נסיגות על הסט. Lexical חזק כאן אך מחליש חלק מ־multi-doc. פירוט: `eval_results/hybrid-comparison.md`, סיכום: `docs/EVALUATION-SUMMARY.md`.

Recall@K סופר **קטעים** ב־top-K; D04 מוחרג ממדדי התאמת מקורות.

## הקשר ותקציב

אחרי retrieve: הרחבת אחים לפי `documentId` עד תקציב משוער **3500** טוקנים (`DEFAULT_CONTEXT_BUDGET_TOKENS`). קטעים שלמים; retrieved קודם, הרחבות אחר כך. תקציב עלול להשמיט סעיפים (למשל §12 ב־D06).

## מדיניות מענה

- תשובה בעברית מתוך ההקשר שסופק בלבד.
- תחולה / גרסאות: התאמה לתאריך או לגרסה הרלוונטית כשהיא ידועה.
- סתירות: מסמך מחייב גובר על שיווק.
- הימנעות: `insufficient_evidence` בניסוח ניטרלי.
- הבהרה: `clarification_needed` כשחסר מידע חיוני (לא תמיד מצליח — ראו D05).
- ציטוטים: המודל מחזיר `answerParts` עם `sourceChunkIds`; השרת מרכיב `answer`/`citations` ומוודא מזהים — **לא** אימות סמנטי של תוכן.

## retrievedChunks / contextChunks / sources

| שכבה | משמעות |
| --- | --- |
| `retrievedChunks` | top-K משליפה (Hybrid) |
| `contextChunks` | מה שנכנס לפרומפט אחרי הרחבה ותקציב |
| `sources` (לתצוגה) | רק קטעים שצוטטו ב־`answerParts` + טקסט מהאינדקס |

## ממשק מקורות

Renderer **קבוע** ב־React (`home-demo/sources.tsx`) על `metadata.custom.rag` — לא יצירת HTML/רכיבים חופשית על ידי המודל, ולא GenUI.

## פקודות עיקריות

```bash
pnpm prepare:rag          # ingest + chunk + index
pnpm dev                  # UI + API
pnpm ask -- "שאלה"
pnpm retrieve -- "שאלה" [--mode hybrid]
pnpm eval:retrieval       # vector baseline
pnpm eval:hybrid
pnpm eval:ask             # כותב ask-eval.*; להגשה השתמשו ב-stage5.3 השמור
pnpm test:gates           # typecheck + lint + בדיקות + build
pnpm test:ingestion && pnpm test:chunking && pnpm test:rag && pnpm test:api
```

## תיעוד להגשה

| מסמך | תוכן |
| --- | --- |
| [`docs/REQUIREMENTS-CHECKLIST.md`](docs/REQUIREMENTS-CHECKLIST.md) | דרישות המטלה ↔ מימוש / פערים |
| [`docs/INSTALL.md`](docs/INSTALL.md) | התקנה + אימות עותק זמני |
| [`docs/EVALUATION-SUMMARY.md`](docs/EVALUATION-SUMMARY.md) | שליפה + מענה + זמן/עלות |
| [`docs/FAILURES-AND-NEXT-WEEK.md`](docs/FAILURES-AND-NEXT-WEEK.md) | כשלים + שיפורים |
| [`docs/DEMO-SCRIPT.md`](docs/DEMO-SCRIPT.md) | הדגמה ~5 דקות |
| [`docs/CODE-MAP.md`](docs/CODE-MAP.md) | איפה לשנות מה |
| [`docs/PROGRESS.md`](docs/PROGRESS.md) / [`docs/PLAN.md`](docs/PLAN.md) | התקדמות ותכנון |

דוחות גולמיים: `eval_results/`.

## זמן ועלות (תמצית)

מחירון רשמי נבדק 2026-10-21 — קישורים ב־`docs/EVALUATION-SUMMARY.md`.

- אינדוקס: ~23k טוקני embedding ≈ **$0.0005**.
- שאלה ממוצעת (15 שאלות stage5.3, **טורי**): ~**1.8s** wall; עלות אומדן ~**$0.002**/שאלה (input/output מופרדים; cached input לא נמדד אצלנו).

## כלי AI במהלך העבודה

**Cursor Agent** שימש לסקירה, הקמת Next/HomeDemo, ingestion/chunking/RAG, ניסויי hybrid ו־ask, חיבור UI, ותיעוד הגשה.  
החלטות ליבה (Hybrid, תקציב, מדיניות, דחיית Clarify מקדים) מתועדות בדוחות וב־PROGRESS — בשיחת המשך ניתן להסביר כל שורה בקוד.

## מגבלות ידועות

D05 (עמימות), D11 (השמטת PIR), תקציב הקשר, אין זיכרון שיחה/streaming, סט dev קטן בלי הוכחת הכללה — פירוט ב־`docs/FAILURES-AND-NEXT-WEEK.md`.
