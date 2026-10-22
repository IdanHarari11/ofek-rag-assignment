# Conversation eval (Stage 2)

generatedAt: 2026-10-22T09:01:17.857Z
fixtures: 8, turns: 8
systemErrorCount: 0
standaloneCheckFailures: 0
rewrite: 6667ms, promptTokens=3462, completionTokens=332

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
- standalone: מהי ההשתתפות העצמית במוסך שאינו מוסך הסדר בפוליסה של רכב מקיף החל מ-1.3.2026?
- unresolved: (none)
- status: answered
- standaloneChecks: include=true exclude=true
- answer: ההשתתפות העצמית במוסך שאינו מוסך הסדר בפוליסת רכב מקיף החל מ-1.3.2026 היא 2,100 ₪. ההשתתפות העצמית צמודה למדד המחירים לצרכן הידוע ביום 1.3.2026.
- sources: 02_car_comprehensive_policy_2026.pdf (corpus/02_car_comprehensive_policy_2026:c000)
- notes: Explicit user correction wins over earlier date.

## C03 — מעבר מרכב לכבודה — אין זליגה
- question: ומה לגבי פיצוי על איחור כבודה של 8 שעות?
- standalone: מה הפיצוי שמציעה חברת אופק ביטוח על איחור של 8 שעות בכבודה?
- unresolved: פיצוי על איחור כבודה
- status: answered
- standaloneChecks: include=true exclude=true
- answer: ביטוח נסיעות של אופק ביטוח כולל פיצוי על איחור בכבודה מעל 6 שעות, כאשר הפיצוי הוא עד 150 דולר לרכישת פריטים חיוניים. במקרה של איחור של 8 שעות, הפיצוי יהיה במסגרת זו. בנוסף, אם האיחור עולה על 24 שעות, ניתן לקבל פיצוי נוסף של עד 150 דולר.

כדי לקבל את הפיצוי יש להגיש לחברת התעופה דו"ח אי-הגעת כבודה (PIR) בשדה התעופה.
- sources: 16_travel_luggage.md (corpus/16_travel_luggage:c000)
- notes: Topic switch must not inherit auto product/date.

## C04 — הבהרה → תשובה קצרה (fixture, לא בדיקת D05 חיה)
- question: רכב מקיף, מוסך הסדר, פוליסה מ-1.3.2026
- standalone: מהי ההשתתפות העצמית בפוליסת רכב מקיף עם מוסך הסדר, בתוקף החל מ-1.3.2026?
- unresolved: (none)
- status: answered
- standaloneChecks: include=true exclude=true
- answer: בהתאם לפוליסת רכב מקיף של אופק ביטוח בע"מ בתוקף החל מ-1.3.2026, ההשתתפות העצמית במקרה של נזק חלקי עם תיקון במוסך הסדר היא 1,100 ₪.
- sources: 02_car_comprehensive_policy_2026.pdf (corpus/02_car_comprehensive_policy_2026:c000)
- notes: Join short clarification reply to prior clarify question.

## C05a — אותו ניסוח המשך — הקשר רכב
- question: ומה במקרה של נזק חלקי?
- standalone: מהי ההשתתפות עצמית במקרה של נזק חלקי בפוליסת רכב מקיף מ-1.3.2026 במוסך הסדר?
- unresolved: (none)
- status: answered
- standaloneChecks: include=true exclude=true
- answer: במקרה של נזק חלקי בפוליסת רכב מקיף שהונפקה או חודשה מ-1.3.2026 ואילך, כאשר התיקון נעשה במוסך הסדר, סכום ההשתתפות העצמית הוא 1,100 ₪. ההשתתפות העצמית צמודה למדד המחירים לצרכן הידוע ביום 1.3.2026.
- sources: 02_car_comprehensive_policy_2026.pdf (corpus/02_car_comprehensive_policy_2026:c000)
- notes: Same follow-up wording, auto context.

## C05b — אותו ניסוח המשך — הקשר כבודה
- question: ומה במקרה של נזק חלקי?
- standalone: מה הפיצוי במקרה של נזק חלקי לכבודה?
- unresolved: כבודה
- status: answered
- standaloneChecks: include=true exclude=true
- answer: במקרה של נזק חלקי לרכב במסגרת ביטוח רכב מקיף, הפוליסה כוללת השתתפות עצמית לתיקון במוסך הסדר או במוסך שאינו בהסדר. בגרסת 2024, סכום ההשתתפות העצמית הוא 950 ₪ במוסך הסדר ו-1,850 ₪ במוסך שאינו בהסדר. בגרסת 2026, סכום ההשתתפות העצמית הוא 1,100 ₪ במוסך הסדר ו-2,100 ₪ במוסך שאינו בהסדר. ההשתתפות העצמית צמודה למדד המחירים לצרכן ביום תחילת הפוליסה.
- sources: 01_car_comprehensive_policy_2024.pdf, 02_car_comprehensive_policy_2026.pdf (corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000)
- notes: Same follow-up wording, baggage context — must not leak auto.

## C06 — תשובת assistant שגויה אינה הופכת לראיה
- question: אתה בטוח? מה כתוב במסמכים?
- standalone: מהן שעות המוקד ביום שישי כפי שמופיע במסמכים של אופק ביטוח?
- unresolved: (none)
- status: answered
- standaloneChecks: include=true exclude=true
- answer: שעות פעילות מוקד שירות הלקוחות של אופק ביטוח ביום שישי הן מ-08:00 עד 12:00.
- sources: 28_call_center_hours.md (corpus/28_call_center_hours:c000)
- notes: Prior wrong assistant hours must not become factual evidence; corpus wins.

## C07 — הפניה שלא ניתן לפתור — בלי המצאה
- question: מה ההשתתפות של אותו מוצר שדיברנו עליו?
- standalone: מהי ההשתתפות העצמית של המוצר שעליו דיברנו קודם?
- unresolved: אותו מוצר שדיברנו עליו
- status: clarification_needed
- standaloneChecks: include=true exclude=true
- answer: על מנת לספק מידע מדויק לגבי ההשתתפות העצמית, אנא ציין באיזו פוליסה או מוצר ביטוחי מדובר.
- sources: (none) ()
- notes: No product was established — unresolvedReferences expected; no invent.

