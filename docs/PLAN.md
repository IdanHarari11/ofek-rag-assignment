# תוכנית פיתוח — אופק ביטוח RAG

## כיוון כללי

- Next.js + TypeScript, פרויקט אחד (ללא microservices בשלב זה).
- assistant-ui לממשק הצ׳אט.
- ליבת RAG עצמאית מה-UI ומ-Next.js — ניתנת להרצה מ-API ומסקריפט Evaluation.
- Ingestion כסקריפט מראש; קול ובחירת מודלים אחרי מסלול RAG מדיד.
- Python לחילוץ רק אם TypeScript אינו אמין מספיק (לא מניחים מראש).

## הבהרות מוסכמות (לשמור לאורך הפרויקט)

1. **Ingestion:** הצלחה נמדדת לפי שלמות ואיכות החילוץ (כולל טבלאות ותנאי תחולה), לא רק לפי היעדר קריסה.
2. **שליפה:** ציון דמיון אינו הסתברות שהתשובה נכונה. מדיניות "אין מספיק מידע" תיקבע בהמשך על בסיס ראיות ומדידה.
3. **Evaluation:** יפריד בין איכות שליפה, נכונות התשובה, שלמות תנאים, תמיכה במקורות, ובקשת הבהרה / אין מידע.
4. **cross_lingual:** שאלת D07 ניתנת למענה גם ממסמך בעברית. רשימות `sources` ברפרנס אינן בהכרח ממצות את כל המקורות התקפים.
5. **README סופי:** יציין באילו כלי AI השתמשנו ולשם מה.
6. **dev_set:** להערכה בלבד — לא לאינדקס ולא לפרומפט המענה. אין להתאים קוד למזהי שאלות הבדיקה.

## ארכיטקטורה מתוכננת

```
corpus/ + parsers → chunks → embeddings → local index
ask(question) → retrieve → generate(answer + sources)
UI / API / evaluate.ts → אותה ליבת ask()
```

## שלבי פיתוח

| שלב | תוכן | תנאי סיום |
| --- | --- | --- |
| 0 | סקירה ותכנון | הושלם |
| 1 | Next.js + HomeDemo UI + Mock | הושלם |
| 2 | Ingestion לכל הקורפוס (md/pdf/docx) | הושלם — `pnpm ingest`, דוח 33/33 |
| 3 | Chunking על בסיס הבלוקים המובנים | הושלם — `pnpm chunk`, 49 קטעים / 33 מסמכים |
| 4 | Embeddings + retrieve + eval שליפה | הושלם בקוד — אינדקס מקומי + `retrieve` + `eval:retrieval` |
| 5 | Generation + מדיניות מקורות | הושלם — `ask()` Hybrid + הרחבת הקשר + ציטוטים מאומתים |
| 5.1 | תיקון ממוקד מענה + הערכה | הושלם — מדיניות חזקה יותר; 4 ממדי סקירה; דוח לפני/אחרי |
| 5.2 | Clarify לפני retrieve + answerParts | נוסה; נדחה בגלל over-clarification (9 נסיגות + D05 רצויה) |
| 5.3 | חזרה מ-Clarify; שמירת answerParts | מסלול Hybrid→gen; מגבלה פתוחה: עמימות D05 |
| 6 | חיבור UI לליבה | הושלם — API + LocalRuntime → ask(); מקורות ב-UI |
| 7 | הכנה להגשה והדגמה | הושלם — checklist, INSTALL, דוח מסכם, README, כשלים, הדגמה |
| 8 | אימות הגשה סופי + Git מקומי | הושלם — PDF חזותי, E2E מאפס, commit מקומי (בלי Push) |

## מבנה תיקיות

- `src/ingestion/` — parsers + טיפוסים (שלב 2)
- `scripts/ingest.ts` — `pnpm ingest`
- `data/parsed/` — JSON לכל מסמך
- `data/ingestion-report.json` — סיכום
- `src/chunking/` — פיצול לקטעים (שלב 3)
- `scripts/chunk.ts` — `pnpm chunk`
- `data/chunks.json`, `data/chunking-report.json` — פלט קטעים
- `src/rag/` — embeddings + אינדקס + retrieve + `ask()` (שלבים 4–5)
- `src/eval/` — הערכת שליפה/מענה מול `dev_set` (רק כאן; לא בפרומפט)
- `scripts/index.ts`, `retrieve.ts`, `ask.ts`, `eval-retrieval.ts`, `eval-ask.ts`
- `data/index/embeddings.json` — וקטורים + manifest
- `eval_results/retrieval-eval.*`, `hybrid-comparison.*`, `ask-eval.*`

## הערות Ingestion

- הצלחה = שלמות חילוץ (טבלאות, תנאי תחולה), לא רק היעדר קריסה.
- טבלאות PDF מסומנות `structureInferred` + אזהרה; יש לאמת תאים קריטיים.
- `structureInferred` ≠ אובדן מידע. חשד לחילוץ חלקי מסומן ב-`extractionIncomplete` / אזהרת `Partial extraction`.
- HTML comments ב-Markdown מוסרים מטקסט החיפוש — אינו תחליף להגנת Prompt Injection.
- Generative UI נשאר לשלב מאוחר; אין `render_spec` כרגע.

## הערות Chunking

- Chunk ≠ בלוק חילוץ: בלוק הוא יחידת מבנה מהמסמך; Chunk הוא יחידת חיפוש/ציטוט עם הקשר.
- אורך = הערכת טוקנים היוריסטית `max(words*1.3, chars/2.8)` — לא tokenizer של מודל.
- מסמכים קצרים נשארים קטע אחד; אין פיצול רק כדי להגיע לגודל קבוע.
- טבלה גדולה: קבוצות שורות עם כותרות חוזרות + `tableRowRange`; לא חותכים שורה לוגית.
- הקשר תחולה/כותרת ממקור אחר באותו מסמך נרשם ב-`contextBlockIds` בנפרד מ-`sourceBlockIds`.

## הערות Embeddings / שליפה

- קלט אינדקס: `data/chunks.json` בלבד. `dev_set` לא נכנס לאינדקס.
- אותו מודל וממדים לקטעים ולשאלות; ברירת מחדל `text-embedding-3-small` / 1536.
- טקסט embedding: כותרת + סעיף + גוף — בלי מזהים טכניים ואזהרות חילוץ.
- אינדקס מקומי עם manifest (מודל, ממדים, hashes, formatVersion); אי-התאמה → הודעה לבנות מחדש (`pnpm index`).
- `retrieve({ mode })`: `vector` (cosine) | `lexical` (BM25) | `hybrid` (RRF c=60). ציון ≠ confidence.
- BM25 על אותו `embeddingText`; ללא stemming/מילים נרדפות; פרמטרים k1=1.2 b=0.75 לא כוונו על ה-dev set.
- Document Recall@K בודק הופעת מסמך ייחוס בטופ-K קטעים — לא הוכחה שנשלף הסעיף עם התשובה.
- דוחות שליפה: `eval_results/retrieval-eval.*` (baseline) ו-`hybrid-comparison.*` — לא לדרוס זה את זה.

## הערות Generation / ask (שלב 5)

- **שלוש שכבות נפרדות:** (1) `retrievedChunks` = top-K Hybrid לשליפה/Recall@5; (2) `contextChunks` = מה שנשלח למודל אחרי הרחבה לפי `documentId` בתקציב; (3) `sources`/`citations` = מה שהמודל ציטט ואשר השרת אימת מול הקשר בלבד.
- הרחבת הקשר היא שלב נפרד אחרי Hybrid — לא משנה את דירוג/Recall@5.
- תקציב ברירת מחדל: 3500 טוקנים משוערים (`heuristic_he_en_v1`); קטעים שלמים בלבד; אין חיתוך באמצע טבלה/סעיף.
- מודל מענה: `GENERATION_MODEL` (ברירת מחדל `gpt-4.1-mini` — Structured Outputs בתיעוד OpenAI).
- סטטוסים: `answered` | `clarification_needed` | `insufficient_evidence`. שגיאת API/JSON = `GenerationSystemError`, לא insufficient.
- אימות `chunkId` ≠ אימות שהמקור תומך בטענה. אין confidence מספרי.
- `dev_set` נקרא רק ב-`eval:ask` אחרי המענה לסקירה ידנית.
