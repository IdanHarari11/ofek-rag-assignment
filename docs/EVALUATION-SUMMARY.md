# דוח הערכה מסכם

דוח קריא אחד שמפנה לדוחות המפורטים. **אין ערבוב הרצות** — כל נתון מצוין עם מקור ההרצה.

## מקורות נתונים

| נושא | קובץ / הרצה | נוצר |
| --- | --- | --- |
| שליפה vector (baseline) | `eval_results/retrieval-eval.*` | 2026-10-21T05:34:48Z |
| השוואת vector / lexical / hybrid | `eval_results/hybrid-comparison.*` | 2026-10-21T05:50:21Z |
| מענה — לוגיקה נוכחית (Hybrid→gen, בלי Clarify מקדים) | **`eval_results/ask-eval-stage5.3.*`** | 2026-10-21T06:30:31Z |
| היסטוריה / ניסויים | `ask-eval-stage5-baseline.*`, `stage5.1*`, `stage5.2*` | לפני 5.3 |
| ביקורת תביעות מול הקשר (baseline) | `docs/stage5.1-claim-audit.md` | שלב 5.1 |
| ממצא חי UI (שלב 6) | להלן — **נפרד** מהרצת 5.3 | שלב 6 |

העתק `ask-eval.json` / `ask-eval.md` עשוי לשקף הרצה אחרונה של `pnpm eval:ask`; **לסיכום ההגשה משתמשים ב־stage5.3** כמייצג הלוגיקה הנוכחית.

---

## שליפה

### הגדרות מדדים

- **Document Recall@K:** חלק ממסמכי הייחוס הייחודיים שמופיעים בין **K הקטעים** הראשונים שנשלפו (לא K מסמכים). כפילות של אותו מסמך לא מעלה את הציון. ראו `src/eval/retrieval-metrics.ts`.
- **MRR:** דרגה הדדית של הקטע הראשון שמסמכו בייחוס.
- **D04** (אין מקורות ייחוס): מדדי התאמת מקורות = **N/A** ואינם נכנסים לממוצע (14 שאלות עם מקורות).  
- ציוני דמיון / RRF **אינם** הסתברות שהתשובה נכונה.
- **התאמת מסמך ≠ ראיות מספיקות למענה:** מסמך יכול לעלות ב־top5 בלי שהסעיף הקריטי (הגדרה/חריג/תנאי) ייכנס להקשר או לתשובה.

### תוצאות (hybrid-comparison)

| Mode | R@1 | R@3 | R@5 | MRR | avg local search ms |
| --- | --- | --- | --- | --- | --- |
| vector | 0.357 | 0.536 | 0.643 | 0.589 | 0.46 |
| lexical | 0.750 | 0.857 | 0.857 | 0.952 | 0.96 |
| hybrid | 0.429 | 0.821 | 0.929 | 0.732 | 0.34 |

- Hybrid מול vector ב־R@5: **+5 / −0 / =9**.  
- לכן Hybrid נבחר כברירת מחדל ל־`ask()` — שיפור שליפה בלי נסיגות R@5 על הסט הזה (לא הוכחת הכללה).  
- פירוט לכל שאלה: `eval_results/hybrid-comparison.md`.

---

## מענה (הרצת stage5.3)

- מצב שליפה: **hybrid**; מודל: **gpt-4.1-mini**  
- סטטוסים (D01–D15): answered=14, insufficient_evidence=1 (D04); system_error=0  
- השאלות הורצו **בטור** (`for` ב־`run-ask-eval.ts`), לא במקביל.  
- תשובות מלאות + הקשר: `eval_results/ask-eval-stage5.3.md` (וגם JSON).

### סולם ידני אחיד (4 ממדים)

| ציון | משמעות |
| --- | --- |
| **pass** | עומד בדרישת הממד לשאלה |
| **partial** | חלקי — חסר מהותי אך לא הופך את המסקנה לבלתי נתמכת / לא כשל מלא |
| **fail** | נכשל בממד |
| **n_a** | הממד לא רלוונטי (למשל conclusion בעמימות שצריכה הבהרה) |

ממדים:

1. **conclusion** — נכונות המסקנה העיקרית  
2. **claimSupport** — האם הטענות נתמכות בהקשר שסופק  
3. **completeness** — תנאי זכאות / חריגים / בסיס חישוב מהותיים  
4. **behavior** — answered / clarification / abstention בהתאם לשאלה  

**הבהרות חובה:**

- הסקירה **ידנית**, בסיוע כלי AI (Cursor) לארגון וסימון — האחריות על הציונים אנושית.  
- **`answered` אינו ציון נכונות.**  
- **בדיקת מזהי מקורות (chunkId) אינה בדיקת תמיכה סמנטית.**

### טבלת D01–D15 (סיכום; תשובה מקוצרת)

תשובות מלאות: `ask-eval-stage5.3.md`. מקורות = שצוטטו ב־`sources` בהרצה.

| id | status | מקורות שצוטטו | conclusion | claimSupport | completeness | behavior | תשובה (תקציר) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| D01 | `answered` | 28_call_center_hours.md | pass | pass | pass | pass | שישי 08:00–12:00 |
| D02 | `answered` | 20_forms_catalog.pdf, 22_cancellation_procedure_2023.md | pass | pass | pass | pass | טופס 4401 (+ ערוץ מוקד) |
| D03 | `answered` | 02_car_comprehensive_policy_2026.pdf | pass | pass | pass | pass | 1,100 ₪ (2026) |
| D04 | `insufficient_evidence` | — | pass | pass | pass | pass | ניסוח ניטרלי; אין המצאה |
| D05 | `answered` | פוליסות רכב 2024/2026, שמשות | n_a | partial | fail | fail | ענה על רכב בלי הבהרה |
| D06 | `answered` | תנאים+נספח+פוליסות+הוספת נהג | pass | pass | partial | pass | אין כיסוי; §12 מחוץ לתקציב |
| D07 | `answered` | 15_travel_preexisting_conditions.docx | pass | pass | pass | pass | 3 ימי עסקים |
| D08 | `answered` | 23_cancellation_procedure_update_2025.md | pass | pass | pass | pass | החזר מלא ב־14 יום |
| D09 | `answered` | 12_home_contents_limits.docx | pass | pass | pass | pass | מזומן עד 2,000 ₪ |
| D10 | `answered` | 08_replacement_car.md, 09_marketing_brochure_car.md | pass | pass | pass | pass | מגבלות כתב שירות מול שיווק |
| D11 | `answered` | 16_travel_luggage.md | pass | pass | partial | pass | עד 150$; **PIR הושמט** |
| D12 | `answered` | 07_towing_roadside.md | pass | pass | pass | pass | עד 4 גרירות |
| D13 | `answered` | 15_travel_preexisting_conditions.docx | pass | pass | pass | pass | סיבוכי הריון רק עד שבוע 26 |
| D14 | `answered` | 13_home_earthquake_annex.pdf | pass | pass | pass | pass | 10% / 5% תמ״א מבנה |
| D15 | `answered` | 03_car_general_terms.pdf, 18_claims_process_car.md | pass | pass | pass | pass | תלונה במשטרה תוך 24ש׳ |

### ספירות מסכמות (D01–D15 בלבד, stage5.3)

| ממד | pass | partial | fail | n_a |
| --- | --- | --- | --- | --- |
| conclusion | 14 | 0 | 0 | 1 |
| claimSupport | 14 | 1 | 0 | 0 |
| completeness | 12 | 2 | 1 | 0 |
| behavior | 14 | 0 | 1 | 0 |

בדיקות נוספות (לא בסט הייחוס): X01 → `clarification_needed` (behavior pass); X02 → `insufficient_evidence` (pass).

---

## ממצא חי משלב 6 (נפרד מהרצת 5.3)

בבדיקת דפדפן/API חיה על שאלת איחור כבודה (~8 שעות): התשובה כללה סכום פיצוי **אך השמיטה שוב את תנאי PIR**, בדומה ל־completeness החלקי ב־D11 בהרצת 5.3.  

ממצא זה **אינו** משכתב את טבלת הציונים של stage5.3; הוא מאשר שהכשל עדיין מופיע בנתיב ה־UI.

צילומים: `docs/screenshots-stage6/`.

---

## זמן ועלות (אומדן)

מחירון רשמי שנבדק ב־**2026-10-21**:

- Embeddings `text-embedding-3-small`: **$0.02 / 1M tokens** — [OpenAI API pricing](https://openai.com/api/pricing/)  
- `gpt-4.1-mini`: input **$0.40**, cached input **$0.10**, output **$1.60** / 1M — [GPT-4.1 mini model page](https://developers.openai.com/api/docs/models/gpt-4.1-mini) / [pricing docs](https://developers.openai.com/api/docs/pricing)

### אינדוקס ראשוני

| | |
| --- | --- |
| טוקנים (manifest) | prompt/total **23,084** (embeddings בלבד) |
| עלות אומדן | ≈ **$0.00046** |
| זמן קיר | **לא נמדד בנפרד** בדוח האינדקס (רק usage) |

### שאלה רגילה (ממוצע על 15 שאלות stage5.3, טורי)

| רכיב | נתון |
| --- | --- |
| Embedding (שאלת משתמש) | סה״כ 737 טוקני input על 15 שאלות (≈49/שאלה) |
| Generation input | 61,380 טוקנים סה״כ |
| Generation output | 1,864 טוקנים סה״כ |
| Cached input | **לא דווח** ב־usage שלנו — לא חושב בהנחה של הנחה |
| עלות אומדן ל־15 שאלות | ≈ **$0.028** (≈ **$0.0018** לשאלה בממוצע) |
| זמן כולל לשאלה (ממוצע `totalMs`) | ≈ **1.82s** |
| מתוכו retrieveMs (כולל embed רשת + חיפוש) | ≈ **0.30s** |
| generationMs (ספק המודל) | ≈ **1.50s** |
| חיפוש מקומי בלבד (hybrid-comparison) | ≈ **0.3–1ms** ממוצע |

אל תסיקו עלות מ־`total_tokens` של generation בלבד — תעריף input≠output.
