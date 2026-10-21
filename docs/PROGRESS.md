# סטטוס התקדמות

## שלב 0 — סקירה ותכנון

- **סטטוס:** הושלם

## שלב 1 — HomeDemo UI + Mock

- **סטטוס:** הושלם
- UI מ-HomeDemo @ `9845a8ba…`; Runtime מופרד; Mock מסומן

## שלב 2 — Ingestion לקורפוס

- **סטטוס:** הושלם (כולל תיקון ממוקד לטבלאות PDF מרובות-שורות)
- ספריות: `unpdf` (PDF+עברית+מיקומים), `mammoth` (DOCX+טבלאות HTML), `unified`/`remark-parse`/`remark-gfm` (Markdown), `node-html-parser` (HTML מ-mammoth)
- תוצאה אחרונה: **33 מסמכים** — success=24, success_with_warnings=9, failure=0; אין `extractionIncomplete` בטבלאות שנבדקו
- פקודות: `pnpm ingest`, `pnpm test:ingestion`
- בדיקות: typecheck, lint, 7 בדיקות שימור מידע — עברו (כולל איחוד תאים מרובי שורות בקטלוג טפסים, השתתפויות, תמ״א 38, ורווחים לפי מיקומים)

### תיקון איכות PDF (לאחר שלב 2)

- **בעיה:** שורות המשך מרובות-עמודות סומנו כשורות חדשות (`startsNewRow` לפי מספר clusters), ולכן תוכן כמו 4401 פוצל לשורות נפרדות; בנוסף `join("")` הדביק טוקנים בלי רווח
- **תיקון:** שורת חדשה רק כשעמודת המפתח מלאה (או מזהה טופס); המשכים מתמזגים לתאים; רווחים לפי פער אופקי בין text items; עצירת אזור טבלה לפני פרוזה
- **סימון איכות:** `structureInferred` = הסקת מבנה; `extractionIncomplete` / אזהרת `Partial extraction` = חשד לאובדן/שיוך שגוי (לא אותו דבר)

### אזהרות אופייניות

- PDF: מבנה טבלה מחושב ממיקומי טקסט (`structureInferred`); אובדן מידע מסומן בנפרד אם זוהה
- DOCX: סגנון `Compact` לא ממופה ב-mammoth (לא פוגע בטבלאות שנבדקו)
- Markdown: הסרת HTML comments מטקסט החיפוש

## שלב 3 — Chunking

- **סטטוס:** הושלם
- מודול: `src/chunking/` (עצמאי מ-Next.js)
- פקודות: `pnpm chunk`, `pnpm test:chunking`, `pnpm test:rag-prep`
- פלט: `data/chunks.json`, `data/chunking-report.json`
- תוצאה אחרונה: **33 מסמכים → 49 קטעים** — success=24, warnings=9 (מורשות מ-ingestion), failure=0
- אורך משוער (heuristic): min≈50, median≈130, max≈359; **אין חריגות מעל יעד 700**
- מדיניות: מסמכים קצרים נשארים קטע אחד; `03_car_general_terms` מפוצל לפי סעיפים ממוספרים; קטלוג טפסים מפוצל לקבוצות שורות עם כותרות חוזרות
- בדיקות: 8 בדיקות chunking + 7 ingestion — עברו; typecheck/lint — עברו

## שלב 4 — Embeddings + שליפה + הערכת שליפה

- **סטטוס:** הושלם כולל הרצה חיה (אחרי תיקון billing)
- מודולים: `src/rag/`, `src/eval/`; פקודות `pnpm index` / `retrieve` / `eval:retrieval`
- אינדקס: **49** קטעים, `text-embedding-3-small`, dims=**1536**, formatVersion=1 → `data/index/embeddings.json`
- שימוש API באינדוקס: prompt/total **23,084** טוקנים; הרצה שנייה: **reuse מלא** (0 embeddings חדשים לקטעים)
- `eval:retrieval` (14 שאלות עם מקורות; D04=N/A): R@1≈**0.357**, R@3≈**0.536**, R@5≈**0.643**, MRR≈**0.589**; טוקני שאלות **737**; זמן ממוצע embed≈303ms / search≈0.4ms
- דוחות: `eval_results/retrieval-eval.json`, `retrieval-eval.md`
- ממצא מרכזי: Document Recall ≠ מספיק למענה (למשל D06 מוצא `03_car_general_terms` אבל לא סעיפי הגדרה/חריג; D03 מדרג 2024 לפני 2026)
- **לא** שונו chunking/retrieval לשיפור ציון בשלב זה

### ביקורת תקינות אינדקס/דירוג (אחרי D09/D12)

- **מסקנה:** לא נמצא באג מימוש; הכשלים עקביים עם מגבלת vector-only על השאלות האלה.
- נבדק: התאמת `chunkId→embeddingText→וקטור→אחסון`; hashes של קלט/טקסטים; ממדים 1536; אין וקטור-אפס; 49 hashes ייחודיים ל-49 טקסטים; שימוש ב-`item.index` ב-batch; cache תלוי טקסט+מודל+ממדים.
- אימות עצמאי: embedding חדש (ללא cache) ל-`12_home_contents_limits` ול-`07_towing_roadside` — cosine מול השמור ≈0.9998 / ≈0.99999; חיפוש עם הווקטור החדש מחזיר את אותו קטע ב-#1.
- D08/D09/D12 (דירוג מול כל 49): המידע הנדרש **כן** ב-`embeddingText` של היעד; דירוג היעד 8 / 9 / 17 בהתאמה; cosine ישיר ≡ ציון ב-retrieve; top1 של retrieve עקבי בחישוב חוזר.
### ניסוי Hybrid — BM25 + RRF (תצורה אחת, ללא כוונון)

- **תצורה:** BM25 k1=1.2 b=0.75 על `embeddingText`; RRF c=60 משקל שווה; טוקניזציה NFKC ללא stemming
- **פקודה:** `pnpm eval:hybrid` → `eval_results/hybrid-comparison.*` (דוחות vector המקוריים **לא** נדרסו)
- **ממוצעים (14 שאלות עם מקורות):**

  | Mode | R@1 | R@3 | R@5 | MRR |
  | --- | --- | --- | --- | --- |
  | vector | 0.357 | 0.536 | 0.643 | 0.589 |
  | lexical | 0.750 | 0.857 | 0.857 | 0.952 |
  | hybrid | 0.429 | 0.821 | 0.929 | 0.732 |

- Hybrid מול vector: R@5 **+5 / −0 / =9**; RR **+6 / −0 / =8**
- תוכן: D08/D09/D12 — מסמך+מידע ב-hybrid top5; D06 עדיין בלי ס׳2/ס׳12; D01/D02/D10/D14 ללא נסיגת R@5/RR
- **המלצת אימוץ (dev בלבד):** Hybrid עדיף כברירת מחדל על vector-only בקורפוס הזה; lexical חזק מאוד כאן אך מחליש multi-doc (D06 R@5=0.5). מגבלות: בלי stemming, D05 עמומה, דירוג גרסאות לא נפתר, אין הוכחה לשאלות חדשות

## שלב 5 — Generation מבוסס מקורות (Hybrid כברירת מחדל)

- **סטטוס:** הושלם בקוד + הרצת E2E על 15 שאלות; עצירה לפני UI / GenUI / Push / Deploy
- מודולים: `context-builder`, `generate`, `validate-answer`, `ask`; פקודות `pnpm ask`, `pnpm eval:ask`
- מודל מענה: **`gpt-4.1-mini`** (`GENERATION_MODEL`; Structured Outputs לפי תיעוד OpenAI)
- תקציב הקשר: **3500** טוקנים משוערים (אותה היוריסטיקה כמו chunking); קטעים שלמים; retrieved קודם, הרחבה לפי `documentId` אחר כך
- E2E (`eval_results/ask-eval.*`): 15/15 ללא system_error; סטטוסים: answered=14, insufficient_evidence=1 (D04)
- בדיקת הזרקה סינתטית (מחוץ לקורפוס): המודל לא מילא הוראת pirate / לא המציא OfekPets — **אין הבטחת חסינות מלאה**
- בדיקות: `pnpm test:rag` (26 עברו + 1 skip בלי מפתח), typecheck, lint — עברו

### סקירה ידנית (לא מדד אוטומטי)

שיטה: אחרי `ask()`, השוואה ל-`reference_answer`/`sources` בממדים נכונות / תמיכה בטענות / שלמות + בדיקות FOCUS. ייחוס לא נכנס לפרומפט.

| id | FOCUS / הערה |
| --- | --- |
| D03 | **pass** — נבחרה גרסת 2026 (1,100 ₪) למרות דירוג 2024 בראש השליפה |
| D04 | **pass** — `insufficient_evidence`, בלי המצאת ביטוח חיות מחמד |
| D05 | **partial** — לא ביקש הבהרה (`clarification_needed`); הציג אפשרויות רכב (מותר לפי ייחוס) אך דילג על דירה |
| D06 | **partial** — הרחבה הביאה הגדרות (§2/c002); חריג §12 (c012) נפל מתקציב; המענה נכון דרך נספח+הגדרה |
| D08 | **partial** — עדכון 2025 (החזר מלא ב־14 יום) יושם, אך נוספה ניסוח pro-rata סותר |
| D10 | **pass** — מגבלות כתב השירות נשמרו מול השיווק |

### כשלים שנשארו (בלי סבב כוונון) — לפני 5.1

- D05 לא עובר ל-`clarification_needed`
- D06: §12 לא תמיד נכנס להקשר בתקציב הנוכחי כשיש הרבה אחים במסמך
- D08: ערבוב חלקי עם ניסוח ישן (pro-rata) לצד עדכון 2025
- הרחבה לפי documentId יכולה למלא הקשר בקטעים לא רלוונטיים כשמסמך גדול מופיע ב-top5 (רעש, לא שינוי Recall@5)

## שלב 5.1 — תיקון ממוקד איכות מענה + הערכה

- **סטטוס:** סבב תיקון אחד; מודל ושליפה ללא שינוי; דוח מקורי נשמר כ-`ask-eval-stage5-baseline.*`
- מדיניות מענה חוזקה ב-`generate.ts` (עמימות / אין-מידע / תחולה / דיוק / אי-סתירה) — ללא זיהוי D01–D15
- הערכה: 4 ממדים נפרדים — conclusion / claimSupport / completeness / behavior; chunkId = טכני בלבד
- ביקורת תביעות: `docs/stage5.1-claim-audit.md`
- הרצה: `ask-eval-stage5.1.*` + השוואה `ask-eval-stage5.1-comparison.md`
- בדיקות נוספות (לא בסט ייחוס): X01 עמימות → `clarification_needed`; X02 נושא חסר → `insufficient_evidence`

### תוצאות ממוקדות (אחרי)

| id | שינוי |
| --- | --- |
| D04 | שיפור ניסוח (מגבלת מקורות שסופקו); התנהגות abstention עברה; claimSupport עדיין חלקי בציטוט |
| D05 | **לא נפתר** — עדיין `answered` עם סכומי רכב (כשל התנהגות) |
| D06 | מסקנה נתמכת בהגדרה+נספח; §12 עדיין מחוץ לתקציב |
| D08 | **נפתר במענה** — החזר מלא בלי סתירת pro-rata בטקסט; ציטוטי pro-rata עדיין ברשימת citations |
| D10 | נותר תקין; גניבה/אובדן נתמכים |
| D11 | **נפתר** — PIR נכלל |
| D14 | בסיס חישוב תקין |

### כשלים שלא נפתרו אחרי 5.1

- **D05:** עדיין לא מבקש הבהרה כשהמוצר לא צוין
- **D06:** §12 לא נכנס להקשר (תקציב; ללא הגדלה בשלב זה)
- **D08:** טקסט מענה נקי, אך מערך `citations` עדיין עשוי לכלול טענות pro-rata מהקטע
- **D04:** ציטוט עלול עדיין להכליל מעט על תוכן המקורות
- רעש הרחבת מסמך גדול ב-top5 — ללא שינוי

## שלב 5.2 — תיקון ליבת מענה אחרון (לפני UI)

- **סטטוס:** ממומש; דוחות קודמים נשמרו (`stage5-baseline`, `stage5.1*`)
- **ללא שינוי:** מודל, אינדקס, שליפה, תקציב הקשר
- Clarify לפני retrieve (`src/rag/clarify.ts`); `answerParts` → הרכבת answer/citations בשרת; insufficient ניטרלי
- הרצה: `ask-eval-stage5.2.*` + `ask-eval-stage5.2-comparison.md`
- עלות שער הבהרה (15+X01/X02): ~5000 טוקנים, ~16s סה״כ

### D05 — שלילת באג העברת שאלה

- נוסח מדויק: `"מה ההשתתפות העצמית?"`
- ב-5/5.1 הועבר כ-`trim()` ל-retrieve ואז ל-generation — **אין תקלת העברה**
- הכשל היה הסקת מוצר אחרי שליפה; לכן שער הבהרה **לפני** שליפה

### תוצאות ממוקדות

| יעד | תוצאה |
| --- | --- |
| D05 הבהרה רצויה | עבר (`skippedRetrieval`) — **1/10** ההבהרות |
| 9 נסיגות הבהרה | D03, D06, D08, D09, D10, D11, D12, D13, D14 |
| D04 / X02 ניטרלי | עבר |
| D01/D02/D07/D15 | נשארו answered |

### מדוע נדחה ניסוי השער המקדים

- פתר עמימות אחת (D05) אך גרם ל־**9 הבהרות מיותרות** על שאלות שניתן לענות עליהן.
- סה״כ 10 `clarification_needed` בסט ה־15: 9 נסיגות + D05 רצויה.

## שלב 5.3 — חזרה ממוקדת משער Clarify (שמירת שיפורי 5.1/5.2 מבניים)

- **מסלול פעיל:** Hybrid → context → generation (בלי קריאת Clarify מקדימה)
- **נשמרו:** `answerParts`, אימות chunkId, insufficient ניטרלי, מדיניות 5.1, דוחות היסטוריים
- **clarify.ts:** נשאר לקובץ היסטורי בלבד — לא מחובר ל-`ask()`
- הרצה: `ask-eval-stage5.3.*` + `ask-eval-stage5.3-comparison.md`
- עלות בפועל (15+X, ללא clarify): embed_prompt≈806, gen_total≈74k, wall≈31s

### תוצאות 5.3

| | |
| --- | --- |
| סטטוסים | answered=14, insufficient=1 (אין clarification בסט ה־15) |
| 9 שנסוגו ב־5.2 | **חזרו ל-answered** (D03, D06, D08–D14) |
| D08 | חלק תשובה יחיד + מקור 2025 בלבד; אין סתירת pro-rata |
| D04/X02 | ניסוח ניטרלי; citations=[] |
| D06 (הרצה זו) | מסקנה נתמכת (c002+נספח); §12 omitted — completeness חלקי |
| D05 | **מגבלה פתוחה:** עדיין `answered` עם סכומי רכב |
| X01 | `clarification_needed` (בדיקה נוספת עברה) |
| D11 | סכומים נתמכים; PIR הושמט מהמענה בהרצה זו |

### מבנה פלט

- תקין בכל השאלות שנבדקו: answer נגזר מ-parts; citations=מקורות החלקים בלבד; אין system_error.

## שלב 6 — חיבור assistant-ui ל-`ask()`

- **סטטוס:** הושלם בקוד + בדיקות fixture; עצירה לפני Push / Deploy
- **חיבור:** `useLocalRuntime(ragChatModelAdapter)` → `POST /api/ask` (Node) → אותה `ask()` כמו CLI
- **ללא שינוי:** מודל, פרומפטים, שליפה, chunking, תקציב הקשר
- **DTO תצוגה:** `status`, `answer`, `answerParts`, `citations`, `sources` (+ מטא); בלי dump אבחון מלא
- **UI:** `answerParts` עם הפניות לחיצות; כרטיס מקור מציג שם/סעיף/עמודים + טקסט קטע מהאינדקס; RTL; אין "תשובה מאומתת"
- **שיחה:** כל שאלה עצמאית (הערה ליד composer); ניהול threads מקומי נשמר ללא הבטחת persistence אחרי רענון
- **מושבתים:** בחירת מודל / מיקרופון / קבצים; תווית מודל מהשרת (`GET /api/ask`)
- **בדיקות fixture:** `pnpm test:api` (16) — answered+מקורות, clarification, insufficient ללא מקורות, שגיאת שרת, abort, DTO בלי dump אבחון
- **typecheck / lint / build:** עברו (אחרי הסרת `runtime`/`dynamic` לטובת `connection()` תחת cacheComponents)
- **מגבלות נשארות:** D05 (עמימות בלי הבהרה), השמטת PIR ב-D11 — מתועדות; לא תוקנו ב-UI

### אימות דפדפן / API חי (שלב 6)

| בדיקה | סוג | תוצאה |
| --- | --- | --- |
| שעות מוקד בשישי | חי (API+UI) | `answered` + מקור `28_call_center_hours`; פתיחת מקור מציגה טקסט מהאינדקס |
| טופס ביטול 4401 | חי (API) | `answered`; מקורות כוללים קטלוג טפסים + נוהל ביטול |
| ביטוח חיות מחמד | חי (API+UI) | `insufficient_evidence`; בלי אזור מקורות ריק |
| כבודה / איחור 8ש׳ | חי (API+UI) | `answered` עם 150$; **השמטת תנאי PIR** (כמו מגבלת D11) — לא תוקן ב-UI |
| RTL / שיחה חדשה / הפרדת הודעות | UI | תקין |
| ביטול בקשה | UI + fetch abort | אחרי Cancel אין תשובה מאוחרת בהודעה; AbortError ב-fetch |
| שגיאת קלט | fixture HTTP | 400 empty/invalid_type עם הודעה בטוחה |
| צילומים | UI | `docs/screenshots-stage6/` |

## שלב 7 — הכנה להגשה והדגמה

- **סטטוס:** הושלם בתיעוד + שערי בדיקה; **ללא** שינוי לוגיקת RAG; **ללא** Push/Deploy
- Checklist דרישות מול PDF: `docs/REQUIREMENTS-CHECKLIST.md` (צוינה קריאות חלקית בעמ׳ 1)
- התקנה: `docs/INSTALL.md` + `pnpm prepare:rag`; אימות עותק זמני ללא secrets
- דוח הערכה מסכם: `docs/EVALUATION-SUMMARY.md` (שליפה + stage5.3 + ממצא חי PIR בנפרד)
- כשלים / עוד שבוע: `docs/FAILURES-AND-NEXT-WEEK.md`
- הדגמה + מפת קוד: `docs/DEMO-SCRIPT.md`, `docs/CODE-MAP.md`
- README מעודכן להסברת המערכת
- `eval_results/` מיועדים להגשה (הוסרו מ־gitignore הכללי)
- שערי בדיקה: `pnpm test:gates` — typecheck, lint, 50+16 בדיקות, build — עברו (2026-10-21)
- הערה להגשה: תיקיית העבודה **ללא `.git`** כרגע; יש ליצור ריפו לפני העלאה ל־GitHub

## שלב 8 — אימות הגשה סופי + Git מקומי

- **סטטוס:** הושלם; **ללא** שינוי לוגיקת RAG; **ללא** Push/Deploy
- PDF נקרא חזותית (רינדור עמודים) — `docs/SUBMISSION-VERIFY.md` + checklist מעודכן
- E2E מאפס: `pnpm install --frozen-lockfile` + `prepare:rag` (33/49/אינדקס) + CLI ask + API ask
- `allowBuilds.esbuild: true` ב־`pnpm-workspace.yaml` ל־pnpm 12
- Git מקומי: ראו סיכום שלב 8 / `git log -1`

### שלבים הבאים (מחוץ להיקף הנוכחי)

- הוספת remote + Push ל־GitHub / Deploy — רק בבקשה מפורשת
- שיפורי D05/D11 לפי מסמך הכשלים

## כלי AI בשימוש עד כה

- Cursor Agent — סקירה, UI, Ingestion, Chunking, Embeddings/Retrieval, Hybrid, Generation/ask, חיבור UI↔API, תיעוד הגשה
