# Conversation eval (Stage 2)

generatedAt: 2026-10-21T13:32:26.763Z
fixtures: 8, turns: 8
systemErrorCount: 0
standaloneCheckFailures: 0
rewrite: 9773ms, promptTokens=4522, completionTokens=365

## C01 — רכב מקיף + תאריך → מוסך שאינו בהסדר
- question: ומה במוסך שאינו בהסדר?
- standalone: מהי ההשתתפות העצמית בפוליסת רכב מקיף שהונפקה ב-1.3.2026 במוסך שאינו מוסך הסדר?
- unresolved: (none)
- status: answered
- standaloneChecks: include=true exclude=true
- answer: בפוליסת רכב מקיף שהונפקה ב-1.3.2026, ההשתתפות העצמית עבור נזק חלקי כאשר התיקון נעשה במוסך שאינו מוסך הסדר היא 2,100 ₪. ההשתתפות העצמית צמודה למדד המחירים לצרכן הידוע ביום 1.3.2026.
- sources: 02_car_comprehensive_policy_2026.pdf (corpus/02_car_comprehensive_policy_2026:c000)
- notes: Keep issue date + comprehensive auto; swap workshop type only.

## C02 — תיקון תאריך על ידי המשתמש
- question: ומה ההשתתפות במוסך שאינו בהסדר?
- standalone: מהי ההשתתפות העצמית במוסך שאינו מוסך הסדר בפוליסה מקיפה מ-1.3.2026?
- unresolved: פוליסה מקיפה מ-1.3.2026
- status: answered
- standaloneChecks: include=true exclude=true
- answer: בהתאם לפוליסה לביטוח רכב מקיף מ-1.3.2026, ההשתתפות העצמית במקרה של נזק חלקי כאשר התיקון נעשה במוסך שאינו מוסך הסדר היא 2,100 ₪. ההשתתפות העצמית צמודה למדד המחירים לצרכן הידוע ביום 1.3.2026.
- sources: 02_car_comprehensive_policy_2026.pdf (corpus/02_car_comprehensive_policy_2026:c000)
- notes: Explicit user correction wins over earlier date.

## C03 — מעבר מרכב לכבודה — אין זליגה
- question: ומה לגבי פיצוי על איחור כבודה של 8 שעות?
- standalone: מה הפיצוי שמגיע על איחור של 8 שעות בכבודה?
- unresolved: פיצוי על איחור כבודה
- status: answered
- standaloneChecks: include=true exclude=true
- answer: במקרה של איחור בכבודה מעל 6 שעות, מגיע פיצוי עד 150 דולר לרכישת פריטים חיוניים. במקרה של איחור מעל 24 שעות, מגיע פיצוי נוסף של עד 150 דולר.

כדי לקבל את הפיצוי יש להגיש לחברת התעופה דו"ח אי-הגעת כבודה (PIR) בשדה התעופה.
- sources: 16_travel_luggage.md (corpus/16_travel_luggage:c000)
- notes: Topic switch must not inherit auto product/date.

## C04 — הבהרה → תשובה קצרה (fixture, לא בדיקת D05 חיה)
- question: רכב מקיף, מוסך הסדר, פוליסה מ-1.3.2026
- standalone: מהי ההשתתפות העצמית בפוליסת רכב מקיף שנרכשה ב-1.3.2026, כאשר התיקון מתבצע במוסך הסדר?
- unresolved: (none)
- status: answered
- standaloneChecks: include=true exclude=true
- answer: ההשתתפות העצמית בפוליסת רכב מקיף שהונפקה או חודשה החל מ-1.3.2026, כאשר התיקון מתבצע במוסך הסדר, היא 1,100 ₪.
- sources: 02_car_comprehensive_policy_2026.pdf (corpus/02_car_comprehensive_policy_2026:c000)
- notes: Join short clarification reply to prior clarify question.

## C05a — אותו ניסוח המשך — הקשר רכב
- question: ומה במקרה של נזק חלקי?
- standalone: מהי ההשתתפות העצמית במוסך הסדר במקרה של נזק חלקי בפוליסת רכב מקיף מ-1.3.2026?
- unresolved: נזק חלקי
- status: answered
- standaloneChecks: include=true exclude=true
- answer: בפוליסת רכב מקיף מ-1.3.2026 של אופק ביטוח, במקרה של נזק חלקי כאשר התיקון נעשה במוסך הסדר, סכום ההשתתפות העצמית הוא 1,100 ₪.
- sources: 02_car_comprehensive_policy_2026.pdf (corpus/02_car_comprehensive_policy_2026:c000)
- notes: Same follow-up wording, auto context.

## C05b — אותו ניסוח המשך — הקשר כבודה
- question: ומה במקרה של נזק חלקי?
- standalone: מה הפיצוי במקרה של נזק חלקי לכבודה?
- unresolved: כבודה
- status: clarification_needed
- standaloneChecks: include=true exclude=true
- answer: האם השאלה מתייחסת לנזק חלקי לכבודה במסגרת ביטוח דירה או לנזק חלקי לרכב במסגרת ביטוח רכב מקיף?
- sources: (none) ()
- notes: Same follow-up wording, baggage context — must not leak auto.

## C06 — תשובת assistant שגויה אינה הופכת לראיה
- question: אתה בטוח? מה כתוב במסמכים?
- standalone: מהן שעות פעילות מוקד השירות ביום שישי כפי שמופיע במסמכים הרשמיים של אופק ביטוח?
- unresolved: מסמכים רשמיים של אופק ביטוח לגבי שעות מוקד ביום שישי
- status: insufficient_evidence
- standaloneChecks: include=true exclude=true
- answer: לא מצאתי במקורות שסופקו מידע מספיק כדי לענות על השאלה.
- sources: (none) ()
- notes: Prior wrong assistant hours must not become factual evidence; corpus wins.

## C07 — הפניה שלא ניתן לפתור — בלי המצאה
- question: מה ההשתתפות של אותו מוצר שדיברנו עליו?
- standalone: מהי ההשתתפות העצמית בפוליסה שלך?
- unresolved: אותו מוצר שדיברנו עליו
- status: clarification_needed
- standaloneChecks: include=true exclude=true
- answer: אנא ציין באיזו גרסת פוליסה מדובר או פרט נוסף על המוצר כדי שאוכל לספק את סכום ההשתתפות העצמית המדויק.
- sources: (none) ()
- notes: No product was established — unresolvedReferences expected; no invent.

