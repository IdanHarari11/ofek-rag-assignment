# מסלול התקנה והרצה

נבדק בפרויקט עם **Node.js v22.23.3** ו־**pnpm 12.11.2** (`packageManager` ב־`package.json`; `engines.node: >=22`).

## שלושה מצבים נפרדים

| מצב | מתי | מה מריצים | מפתח API |
| --- | --- | --- | --- |
| **הכנה ראשונה** | שכפול חדש / אין `data/index` | `pnpm install` → `.env` → `pnpm prepare:rag` → `pnpm dev` | כן — embeddings ב־`pnpm index` |
| **הפעלה רגילה** | אינדקס קיים ולא שיניתם קורפוס | `pnpm dev` (או `pnpm ask -- "…"`) | כן — לכל שאלה (embed שאלה + generation) |
| **בנייה מחדש אחרי שינוי קורפוס** | שינוי ב־`corpus/` | `pnpm prepare:rag` (ingest→chunk→index) | כן — אינדקס מחדש לקטעים שהשתנו (reuse כשאפשר) |

`pnpm prepare:rag` רק מרכיב את הסקריפטים הקיימים: `ingest && chunk && index` — **בלי** לשכפל לוגיקה.

## שלבים (הכנה ראשונה)

```bash
# 1) התקנת תלויות עם lockfile
pnpm install

# 2) הגדרת סביבה (בלי סודות בריפו)
cp .env.example .env
# ערכו .env ומלאו OPENAI_API_KEY (שרת בלבד; לא NEXT_PUBLIC_)

# 3) חילוץ → chunking → אינדקס
pnpm prepare:rag

# 4) ממשק
pnpm dev
```

CLI ללא UI:

```bash
pnpm ask -- "מה שעות הפעילות של מוקד שירות הלקוחות ביום שישי?"
```

## מה לא לשכוח

- בלי `OPENAI_API_KEY` תקין: `pnpm index` / `ask` / `/api/ask` ייכשלו (שגיאת שירות — לא `insufficient_evidence`).
- `data/` ב־gitignore — כל מפתח מקומי בונה את האינדקס אצלו (או מעתיק `data/` מחוץ לריפו אם סוכם כך).
- `eval_results/` מיועדים להגשה (דוחות שמורים); אין צורך להריץ מחדש את כל ה־eval אם לא שיניתם לוגיקת מענה.

## הערת pnpm 12 — build של esbuild

ב־`pnpm-workspace.yaml` מוגדר `allowBuilds.esbuild: true` כדי ש־`pnpm install --frozen-lockfile` יריץ את postinstall של esbuild (נדרש ל־tsx/vite). בלי זה pnpm 12 עלול להיכשל ב־`ERR_PNPM_IGNORED_BUILDS`.

## אימות מסלול בעותק זמני

### שלב 7 (חלקי)

עותק נקי: התקנה + ingest + chunk; אינדוקס בלי מפתח נכשל כמצופה.

### שלב 8 — מאפס כולל אינדוקס אמיתי

עותק: `/tmp/ofek-rag-e2e-poyucM` (ללא `node_modules`/`data` מהמקור).  
מפתח: **רק `OPENAI_API_KEY` בסביבה**; קובץ `.env` בעותק נשאר ריק ממפתח.

| שלב | תוצאה |
| --- | --- |
| `pnpm install --frozen-lockfile` | OK |
| `pnpm prepare:rag` | 33 מסמכים → 49 קטעים → אינדקס 49/49; usage **23,084** טוקנים; hashes זהים למקור |
| `pnpm ask -- "…שישי?"` | answered + מקור `28_call_center_hours.md` (embed 42 / gen_total 2070) |
| `POST /api/ask` | answered + מקור עם טקסט מהאינדקס |

פירוט: `docs/SUBMISSION-VERIFY.md`.
