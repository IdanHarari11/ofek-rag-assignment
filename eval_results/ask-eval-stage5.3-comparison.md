# Ask eval comparison — ask-eval-stage5.2.json → ask-eval-stage5.3.json

- Before: 2026-10-21T06:18:06.851Z (statusCounts={"answered":4,"clarification_needed":10,"insufficient_evidence":1})
- After: 2026-10-21T06:30:31.065Z (statusCounts={"answered":14,"insufficient_evidence":1})
- After cost (15+probes, actual calls only): embed_prompt≈806, gen_total≈74025, wall≈31301ms
- Note: Stage 5.2 pre-retrieve Clarify is off the active path; after report has no clarify tokens.

| id | before status | after status | notes |
| --- | --- | --- | --- |
| D01 | answered | answered | — |
| D02 | answered | answered | answer changed |
| D03 | clarification_needed | answered | status clarification_needed→answered; answer changed |
| D04 | insufficient_evidence | insufficient_evidence | — |
| D05 | clarification_needed | answered | status clarification_needed→answered; answer changed |
| D06 | clarification_needed | answered | status clarification_needed→answered; answer changed |
| D07 | answered | answered | answer changed |
| D08 | clarification_needed | answered | status clarification_needed→answered; answer changed |
| D09 | clarification_needed | answered | status clarification_needed→answered; answer changed |
| D10 | clarification_needed | answered | status clarification_needed→answered; answer changed |
| D11 | clarification_needed | answered | status clarification_needed→answered; answer changed |
| D12 | clarification_needed | answered | status clarification_needed→answered; answer changed |
| D13 | clarification_needed | answered | status clarification_needed→answered; answer changed |
| D14 | clarification_needed | answered | status clarification_needed→answered; answer changed |
| D15 | answered | answered | answer changed |

## Focus / previously over-clarified — after answers

### D03 (answered)

בפוליסת ביטוח רכב מקיף שהונפקה באפריל 2026, ההשתתפות העצמית בתיקון במוסך הסדר היא 1,100 ₪.

Parts: [{"text":"בפוליסת ביטוח רכב מקיף שהונפקה באפריל 2026, ההשתתפות העצמית בתיקון במוסך הסדר היא 1,100 ₪.","sourceChunkIds":["corpus/02_car_comprehensive_policy_2026:c000"]}]
Sources: corpus/02_car_comprehensive_policy_2026:c000
Tokens/ms: embed=68 gen=3189 totalMs=1306

### D04 (insufficient_evidence)

לא מצאתי במקורות שסופקו מידע מספיק כדי לענות על השאלה.

Parts: []
Sources: (none)
Tokens/ms: embed=35 gen=4957 totalMs=1064

### D05 (answered)

ההשתתפות העצמית בפוליסת ביטוח רכב מקיף של אופק ביטוח משתנה לפי סוג האירוע והגרסה של הפוליסה. בגרסת 2024 ההשתתפות העצמית היא: נזק חלקי במוסך הסדר - 950 ₪, נזק חלקי במוסך שאינו בהסדר - 1,850 ₪, גניבה או אובדן גמור - 5% מערך הרכב ולא פחות מ-2,500 ₪, ונזק לשמשות לפי כתב שירות שמשות.

בגרסת 2026 ההשתתפות העצמית היא: נזק חלקי במוסך הסדר - 1,100 ₪, נזק חלקי במוסך שאינו בהסדר - 2,100 ₪, גניבה או אובדן גמור - 5% מערך הרכב ולא פחות מ-3,000 ₪, ונזק לשמשות לפי כתב שירות שמשות.

לגבי נזק לשמשות, ההשתתפות העצמית לפי כתב שירות שמשות היא: ברשת שמשות אופק אין השתתפות עצמית, מחוץ לרשת ההשתתפות העצמית היא 400 ₪ בניכוי ההחזר עד מחיר הרשת, בכפוף לחשבונית מקורית.

Parts: [{"text":"ההשתתפות העצמית בפוליסת ביטוח רכב מקיף של אופק ביטוח משתנה לפי סוג האירוע והגרסה של הפוליסה. בגרסת 2024 ההשתתפות העצמית היא: נזק חלקי במוסך הסדר - 950 ₪, נזק חלקי במוסך שאינו בהסדר - 1,850 ₪, גניבה או אובדן גמור - 5% מערך הרכב ולא פחות מ-2,500 ₪, ונזק לשמשות לפי כתב שירות שמשות.","sourceChunkIds":["corpus/01_car_comprehensive_policy_2024:c000"]},{"text":"בגרסת 2026 ההשתתפות העצמית היא: נזק חלקי במוסך הסדר - 1,100 ₪, נזק חלקי במוסך שאינו בהסדר - 2,100 ₪, גניבה או אובדן גמור - 5% מערך הרכב ולא פחות מ-3,000 ₪, ונזק לשמשות לפי כתב שירות שמשות.","sourceChunkIds":["corpus/02_car_comprehensive_policy_2026:c000"]},{"text":"לגבי נזק לשמשות, ההשתתפות העצמית לפי כתב שירות שמשות היא: ברשת שמשות אופק אין השתתפות עצמית, מחוץ לרשת ההשתתפות העצמית היא 400 ₪ בניכוי ההחזר עד מחיר הרשת, בכפוף לחשבונית מקורית.","sourceChunkIds":["corpus/06_windshield_service:c000"]}]
Sources: corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000, corpus/06_windshield_service:c000
Omitted expansions: corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c015
Tokens/ms: embed=19 gen=6077 totalMs=3030

### D06 (answered)

בפוליסת 'כל נהג' הכיסוי חל על כל נהג מורשה כהגדרתו בתנאים הכלליים, כלומר כל אדם שבידו רישיון נהיגה בתוקף לסוג הרכב, שגילו 24 ומעלה ושהוותק שלו בנהיגה שנתיים לפחות, וכן נהג צעיר שנכלל בנספח נהג צעיר בתוקף.

נהג בן 22 נחשב לנהג צעיר (מתחת לגיל 24), ולכן כדי שיהיה לו כיסוי בפוליסה יש צורך בנספח נהג צעיר שנרכש לפוליסה. במקרה שבו נהג צעיר אינו נקוב בנספח, האירוע אינו מכוסה.

Parts: [{"text":"בפוליסת 'כל נהג' הכיסוי חל על כל נהג מורשה כהגדרתו בתנאים הכלליים, כלומר כל אדם שבידו רישיון נהיגה בתוקף לסוג הרכב, שגילו 24 ומעלה ושהוותק שלו בנהיגה שנתיים לפחות, וכן נהג צעיר שנכלל בנספח נהג צעיר בתוקף.","sourceChunkIds":["corpus/01_car_comprehensive_policy_2024:c000","corpus/03_car_general_terms:c002","corpus/25_adding_driver:c000"]},{"text":"נהג בן 22 נחשב לנהג צעיר (מתחת לגיל 24), ולכן כדי שיהיה לו כיסוי בפוליסה יש צורך בנספח נהג צעיר שנרכש לפוליסה. במקרה שבו נהג צעיר אינו נקוב בנספח, האירוע אינו מכוסה.","sourceChunkIds":["corpus/04_young_driver_annex:c000","corpus/01_car_comprehensive_policy_2024:c000","corpus/02_car_comprehensive_policy_2026:c000"]}]
Sources: corpus/01_car_comprehensive_policy_2024:c000, corpus/03_car_general_terms:c002, corpus/25_adding_driver:c000, corpus/04_young_driver_annex:c000, corpus/02_car_comprehensive_policy_2026:c000
Omitted expansions: corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c015
Tokens/ms: embed=86 gen=6165 totalMs=2398

### D08 (answered)

לקוח שמבטל פוליסה בתוך 14 יום ממועד הרכישה, ולא הגיש תביעה, יקבל החזר מלא של דמי הביטוח ששילם, ללא דמי טיפול.

Parts: [{"text":"לקוח שמבטל פוליסה בתוך 14 יום ממועד הרכישה, ולא הגיש תביעה, יקבל החזר מלא של דמי הביטוח ששילם, ללא דמי טיפול.","sourceChunkIds":["corpus/23_cancellation_procedure_update_2025:c000"]}]
Sources: corpus/23_cancellation_procedure_update_2025:c000
Tokens/ms: embed=69 gen=2074 totalMs=1355

### D09 (answered)

תקרת הכיסוי למזומן בביטוח תכולה היא עד 2,000 ₪.

Parts: [{"text":"תקרת הכיסוי למזומן בביטוח תכולה היא עד 2,000 ₪.","sourceChunkIds":["corpus/12_home_contents_limits:c000"]}]
Sources: corpus/12_home_contents_limits:c000
Omitted expansions: corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c015
Tokens/ms: embed=37 gen=5728 totalMs=1432

### D10 (answered)

רכב חלופי ניתן רק למבוטחים שרכשו כתב שירות רכב חלופי, שאינו חלק מהכיסוי הבסיסי בפוליסת מקיף. עבור אירוע תאונה, רכב חלופי ניתן כל עוד הרכב בתיקון במוסך הסדר, לתקופה מקסימלית של עד 21 ימים. עבור אירוע גניבה או אובדן גמור, התקופה המקסימלית היא עד 30 ימים. עבור תקלה מכנית, רכב חלופי אינו ניתן.

עם זאת, בעלון שיווקי של אופק ביטוח מצוין כי ישנה אפשרות לרכב חלופי לכל תקופת התיקון, ללא הגבלות ("בלי כוכביות"), אך מדובר במידע שיווקי בלבד והתנאים המחייבים הם תנאי הפוליסה וכתבי השירות.

Parts: [{"text":"רכב חלופי ניתן רק למבוטחים שרכשו כתב שירות רכב חלופי, שאינו חלק מהכיסוי הבסיסי בפוליסת מקיף. עבור אירוע תאונה, רכב חלופי ניתן כל עוד הרכב בתיקון במוסך הסדר, לתקופה מקסימלית של עד 21 ימים. עבור אירוע גניבה או אובדן גמור, התקופה המקסימלית היא עד 30 ימים. עבור תקלה מכנית, רכב חלופי אינו ניתן.","sourceChunkIds":["corpus/08_replacement_car:c000"]},{"text":"עם זאת, בעלון שיווקי של אופק ביטוח מצוין כי ישנה אפשרות לרכב חלופי לכל תקופת התיקון, ללא הגבלות (\"בלי כוכביות\"), אך מדובר במידע שיווקי בלבד והתנאים המחייבים הם תנאי הפוליסה וכתבי השירות.","sourceChunkIds":["corpus/09_marketing_brochure_car:c000"]}]
Sources: corpus/08_replacement_car:c000, corpus/09_marketing_brochure_car:c000
Tokens/ms: embed=39 gen=5741 totalMs=2208

### D11 (answered)

כאשר המזוודה של נוסע מגיעה באיחור של מעל 6 שעות, הנוסע זכאי לפיצוי של עד 150 דולר לרכישת פריטים חיוניים. במקרה של איחור של מעל 24 שעות, ניתן לקבל פיצוי נוסף של עד 150 דולר נוספים.

Parts: [{"text":"כאשר המזוודה של נוסע מגיעה באיחור של מעל 6 שעות, הנוסע זכאי לפיצוי של עד 150 דולר לרכישת פריטים חיוניים. במקרה של איחור של מעל 24 שעות, ניתן לקבל פיצוי נוסף של עד 150 דולר נוספים.","sourceChunkIds":["corpus/16_travel_luggage:c000"]}]
Sources: corpus/16_travel_luggage:c000
Tokens/ms: embed=57 gen=5711 totalMs=1378

### D12 (answered)

בפוליסות ביטוח רכב של אופק ביטוח, במסגרת כתב שירות גרירה ושירותי דרך, מקבלים במסגרת שנת ביטוח עד 4 גרירות לאחר תאונה או תקלה.

Parts: [{"text":"בפוליסות ביטוח רכב של אופק ביטוח, במסגרת כתב שירות גרירה ושירותי דרך, מקבלים במסגרת שנת ביטוח עד 4 גרירות לאחר תאונה או תקלה.","sourceChunkIds":["corpus/07_towing_roadside:c000"]}]
Sources: corpus/07_towing_roadside:c000
Omitted expansions: corpus/03_car_general_terms:c015
Tokens/ms: embed=28 gen=5689 totalMs=1288

### D13 (answered)

סיבוכי הריון מכוסים במסגרת ביטוח נסיעות לחו"ל רק עד שבוע 26 להריון. החל משבוע 27 ואילך, סיבוכי הריון אינם מכוסים.

Parts: [{"text":"סיבוכי הריון מכוסים במסגרת ביטוח נסיעות לחו\"ל רק עד שבוע 26 להריון. החל משבוע 27 ואילך, סיבוכי הריון אינם מכוסים.","sourceChunkIds":["corpus/15_travel_preexisting_conditions:c000"]}]
Sources: corpus/15_travel_preexisting_conditions:c000
Tokens/ms: embed=48 gen=2312 totalMs=1819

### D14 (answered)

ההשתתפות העצמית ברעידת אדמה בפרק המבנה היא 10% מסכום ביטוח המבנה.

אם הדירה בבניין שעבר חיזוק לפי תמ"א 38, ההשתתפות העצמית בפרק המבנה ברעידת אדמה היא 5% מסכום ביטוח המבנה.

Parts: [{"text":"ההשתתפות העצמית ברעידת אדמה בפרק המבנה היא 10% מסכום ביטוח המבנה.","sourceChunkIds":["corpus/13_home_earthquake_annex:c000"]},{"text":"אם הדירה בבניין שעבר חיזוק לפי תמ\"א 38, ההשתתפות העצמית בפרק המבנה ברעידת אדמה היא 5% מסכום ביטוח המבנה.","sourceChunkIds":["corpus/13_home_earthquake_annex:c000"]}]
Sources: corpus/13_home_earthquake_annex:c000
Tokens/ms: embed=40 gen=2569 totalMs=1882

## Extra probes

### X01 (clarification_needed)

Q: מה גובה ההשתתפות העצמית שלי?

אנא פרט באיזו פוליסה או סוג כיסוי מדובר כדי שנוכל לספק את גובה ההשתתפות העצמית המדויקת עבורך.

Sources: (none)

### X02 (insufficient_evidence)

Q: האם אופק ביטוח מציעה ביטוח רחפנים מסחריים?

לא מצאתי במקורות שסופקו מידע מספיק כדי לענות על השאלה.

Sources: (none)

## Other changes

- **D02**: answered→answered
  - before: כדי לבקש ביטול פוליסה יש למלא את טופס מספר 4401 בשם "בקשה לביטול פוליסה". בנוסף, ניתן להגיש את בקשת הביטול גם בשיחה מוקלטת במוקד לאחר זיהוי מלא של הלקוח.
  - after: כדי לבקש ביטול פוליסה יש למלא את טופס מספר 4401 שנקרא "בקשה לביטול פוליסה". טופס זה משמש לביטול פוליסה ביוזמת הלקוח וניתן להגישו באזור האישי או במוקד. בנוסף, ני
- **D07**: answered→answered
  - before: חתמות רפואית עונה לבקשות לגבי מצב רפואי קודם בביטוח נסיעות בתוך 3 ימי עסקים. במקרה של בקשה דחופה, למשל כאשר הנסיעה מתוכננת בתוך 48 שעות, יש לסמן "דחוף" בטופס כד
  - after: חתמות רפואית עונה לבקשה של סוכן לגבי מצב רפואי קודם בביטוח נסיעות בתוך 3 ימי עסקים. במקרה של בקשה דחופה, למשל כאשר הנסיעה מתוכננת בתוך 48 שעות, יש לסמן "דחוף" ב
- **D15**: answered→answered
  - before: על המבוטח להגיש תלונה במשטרה על גניבת רכב בתוך 24 שעות ממועד הגילוי. בנוסף, יש להמציא למבטח את אישור התלונה במשטרה כדי להמשיך בתהליך התביעה.
  - after: על המבוטח להגיש תלונה במשטרה על גניבת רכב בתוך 24 שעות ממועד הגילוי ולהמציא למבטח את אישור התלונה. בנוהל טיפול בתביעת רכב של אופק ביטוח, לאירוע גניבה נדרש טופס 