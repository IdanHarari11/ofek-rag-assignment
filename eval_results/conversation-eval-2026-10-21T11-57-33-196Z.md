# Conversation eval (Stage 2)

generatedAt: 2026-10-21T11:57:33.196Z
fixtures: 8, turns: 8
systemErrorCount: 0
standaloneCheckFailures: 1
rewrite: 8903ms, promptTokens=4010, completionTokens=395

## C01 — רכב מקיף + תאריך → מוסך שאינו בהסדר
- question: ומה במוסך שאינו בהסדר?
- standalone: מהי ההשתתפות העצמית בפוליסת רכב מקיף שהונפקה ב-1.3.2026 במוסך שאינו מוסך הסדר?
- unresolved: (none)
- status: answered
- standaloneChecks: include=true exclude=true
- answer: בפוליסת רכב מקיף שהונפקה ב-1.3.2026, ההשתתפות העצמית במקרה של נזק חלקי כאשר התיקון נעשה במוסך שאינו מוסך הסדר היא 2,100 ₪. ההשתתפות העצמית צמודה למדד המחירים לצרכן הידוע ביום 1.3.2026.
- sources: 02_car_comprehensive_policy_2026.pdf (corpus/02_car_comprehensive_policy_2026:c000)
- notes: Keep issue date + comprehensive auto; swap workshop type only.

## C02 — תיקון תאריך על ידי המשתמש
- question: ומה ההשתתפות במוסך שאינו בהסדר?
- standalone: מהי ההשתתפות העצמית במוסך שאינו מוסך הסדר בפוליסה לרכב מקיף החל מ-1.3.2026?
- unresolved: פוליסה מ-1.3.2026; מוסך שאינו בהסדר
- status: answered
- standaloneChecks: include=true exclude=true
- answer: בפוליסה לביטוח רכב מקיף של אופק ביטוח החל מ-1.3.2026, ההשתתפות העצמית במקרה של נזק חלקי ותיקון במוסך שאינו מוסך הסדר היא 2,100 ₪.
- sources: 02_car_comprehensive_policy_2026.pdf (corpus/02_car_comprehensive_policy_2026:c000)
- notes: Explicit user correction wins over earlier date.

## C03 — מעבר מרכב לכבודה — אין זליגה
- question: ומה לגבי פיצוי על איחור כבודה של 8 שעות?
- standalone: מה הפיצוי שמגיע במקרה של איחור במסירת הכבודה למשך 8 שעות במסגרת פוליסת ביטוח רכב מקיף?
- unresolved: פוליסת ביטוח רכב מקיף; פיצוי על איחור כבודה
- status: insufficient_evidence
- standaloneChecks: include=true exclude=false
  - leakedExcludes: רכב מקיף
- answer: לא מצאתי במקורות שסופקו מידע מספיק כדי לענות על השאלה.
- sources: (none) ()
- notes: Topic switch must not inherit auto product/date.

## C04 — הבהרה → תשובה קצרה (fixture, לא בדיקת D05 חיה)
- question: רכב מקיף, מוסך הסדר, פוליסה מ-1.3.2026
- standalone: מהי ההשתתפות העצמית בפוליסת רכב מקיף שנרכשה ב-1.3.2026 עבור תיקון במוסך הסדר?
- unresolved: (none)
- status: answered
- standaloneChecks: include=true exclude=true
- answer: בפוליסת רכב מקיף של אופק ביטוח שנרכשה או חודשה החל מ-1.3.2026, ההשתתפות העצמית עבור תיקון במוסך הסדר היא 1,100 ₪.
- sources: 02_car_comprehensive_policy_2026.pdf (corpus/02_car_comprehensive_policy_2026:c000)
- notes: Join short clarification reply to prior clarify question.

## C05a — אותו ניסוח המשך — הקשר רכב
- question: ומה במקרה של נזק חלקי?
- standalone: מהי ההשתתפות העצמית במוסך הסדר במקרה של נזק חלקי בפוליסת רכב מקיף מ-1.3.2026?
- unresolved: (none)
- status: answered
- standaloneChecks: include=true exclude=true
- answer: בפוליסת רכב מקיף של אופק ביטוח מיום 1.3.2026, ההשתתפות העצמית במקרה של נזק חלקי כאשר התיקון נעשה במוסך הסדר היא 1,100 ₪.

אם התיקון נעשה במוסך שאינו מוסך הסדר, ההשתתפות העצמית במקרה של נזק חלקי היא 2,100 ₪.
- sources: 02_car_comprehensive_policy_2026.pdf (corpus/02_car_comprehensive_policy_2026:c000)
- notes: Same follow-up wording, auto context.

## C05b — אותו ניסוח המשך — הקשר כבודה
- question: ומה במקרה של נזק חלקי?
- standalone: מה הפיצוי במקרה של נזק חלקי לכבודה?
- unresolved: נזק חלקי
- status: answered
- standaloneChecks: include=true exclude=true
- answer: במקרה של נזק חלקי לכבודה בדירה, יש למלא טופס הודעה על נזק, לצרף צילומים של הנזק לפני תיקון, ובמקרים של נזק עד 10,000 ₪ ניתן לסלק את התביעה על בסיס הצעת מחיר וצילומים ללא צורך בשמאי. במקרה של נזק מעל 10,000 ₪ נשלח שמאי להערכת הנזק.

בפוליסת ביטוח דירה של אופק ביטוח יש השתתפות עצמית של 600 ₪ לכל נזק כללי (כגון אש, פריצה וכו'), ו-750 ₪ לכל אירוע נזקי מים, כאשר ישנם תנאים נוספים לנזקי מים בהתאם לכתב ש
- sources: 19_claims_process_home.md, 10_home_policy_overview.md, 11_home_water_damage.md (corpus/19_claims_process_home:c000, corpus/10_home_policy_overview:c000, corpus/11_home_water_damage:c000)
- notes: Same follow-up wording, baggage context — must not leak auto.

## C06 — תשובת assistant שגויה אינה הופכת לראיה
- question: אתה בטוח? מה כתוב במסמכים?
- standalone: מהן שעות פעילות המוקד ביום שישי כפי שמופיע במסמכים הרשמיים של אופק ביטוח?
- unresolved: המסמכים הרשמיים של אופק ביטוח
- status: answered
- standaloneChecks: include=true exclude=true
- answer: שעות פעילות מוקד שירות הלקוחות של אופק ביטוח ביום שישי הן מ-08:00 עד 12:00.
- sources: 28_call_center_hours.md (corpus/28_call_center_hours:c000)
- notes: Prior wrong assistant hours must not become factual evidence; corpus wins.

## C07 — הפניה שלא ניתן לפתור — בלי המצאה
- question: מה ההשתתפות של אותו מוצר שדיברנו עליו?
- standalone: מהי ההשתתפות העצמית בפוליסה של המוצר שעליו דיברנו קודם?
- unresolved: אותו מוצר שדיברנו עליו
- status: answered
- standaloneChecks: include=true exclude=true
- answer: ההשתתפות העצמית בפוליסת ביטוח רכב מקיף של אופק ביטוח היא בהתאם לסוג האירוע: נזק חלקי בתיקון במוסך הסדר - 950 ₪, נזק חלקי בתיקון במוסך שאינו בהסדר - 1,850 ₪, גניבה או אובדן גמור - 5% מערך הרכב ולא פחות מ-2,500 ₪, ונזק לשמשות - לפי כתב שירות השמשות. ההשתתפות העצמית צמודה למדד המחירים לצרכן הידוע ביום 1.1.2024.

בנוסף, ללקוחות שמחזיקים 3 פוליסות פעילות או יותר באופק ביטוח (בכל שילוב של רכב, דירה ונסי
- sources: 01_car_comprehensive_policy_2024.pdf, 31_ofek_plus_vip.docx (corpus/01_car_comprehensive_policy_2024:c000, corpus/31_ofek_plus_vip:c000)
- notes: No product was established — unresolvedReferences expected; no invent.

