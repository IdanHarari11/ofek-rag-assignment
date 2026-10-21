# Ask eval comparison — Stage 5 baseline → Stage 5.1

- Before: 2026-10-21T06:02:13.833Z (statusCounts={"answered":14,"insufficient_evidence":1})
- After: 2026-10-21T06:10:49.187Z (statusCounts={"answered":14,"insufficient_evidence":1})
- Model/retrieval unchanged: hybrid + generation model from env (no intentional change).

| id | before status | after status | status change | notes |
| --- | --- | --- | --- | --- |
| D01 | answered | answered | no | answer unchanged |
| D02 | answered | answered | no | answer text changed |
| D03 | answered | answered | no | answer text changed |
| D04 | insufficient_evidence | insufficient_evidence | no | answer text changed |
| D05 | answered | answered | no | answer text changed |
| D06 | answered | answered | no | answer text changed |
| D07 | answered | answered | no | answer unchanged |
| D08 | answered | answered | no | answer text changed |
| D09 | answered | answered | no | answer unchanged |
| D10 | answered | answered | no | answer text changed |
| D11 | answered | answered | no | answer text changed |
| D12 | answered | answered | no | answer text changed |
| D13 | answered | answered | no | answer text changed |
| D14 | answered | answered | no | answer text changed |
| D15 | answered | answered | no | answer unchanged |

## Focus cases — after answers (full)

### D04 (insufficient_evidence)

המקורות שסופקו כוללים רק תנאים כלליים לפוליסות רכב של אופק ביטוח ואינם כוללים מידע לגבי הצעת ביטוח לחיות מחמד. אין מספיק מידע כדי לקבוע אם אופק ביטוח מציעה ביטוח לחיות מחמד.

Sources: corpus/03_car_general_terms:c000 [expanded]
Retrieved: corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c014
Expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c015

### D05 (answered)

ההשתתפות העצמית בפוליסת ביטוח רכב מקיף של אופק ביטוח משתנה לפי סוג האירוע והגרסה של הפוליסה:\n- בפוליסות גרסה 2024 (בתוקף מיום 1.1.2024):\n  - נזק חלקי במוסך הסדר: 950 ₪\n  - נזק חלקי במוסך שאינו בהסדר: 1,850 ₪\n  - גניבה או אובדן גמור: 5% מערך הרכב, ולא פחות מ-2,500 ₪\n  - נזק לשמשות: לפי כתב שירות שמשות (למשל, ברשת שמשות אופק אין השתתפות עצמית, מחוץ לרשת יש השתתפות עצמית של 400 ₪)\n- בפוליסות גרסה 2026 (בתוקף מיום 1.3.2026 ואילך):\n  - נזק חלקי במוסך הסדר: 1,100 ₪\n  - נזק חלקי במוסך שאינו בהסדר: 2,100 ₪\n  - גניבה או אובדן גמור: 5% מערך הרכב, ולא פחות מ-3,000 ₪\n  - נזק לשמשות: לפי כתב שירות שמשות (כאמור לעיל)\nההשתתפות העצמית צמודה למדד המחירים לצרכן ביום תחילת התוקף של הפוליסה.\n\nבנוסף, בביטוח צד שלישי אין השתתפות עצמית בתביעות שמשולמות ישירות לצד שלישי.

Sources: corpus/01_car_comprehensive_policy_2024:c000 [retrieved]; corpus/02_car_comprehensive_policy_2026:c000 [retrieved]; corpus/06_windshield_service:c000 [retrieved]; corpus/05_car_third_party:c000 [retrieved]
Retrieved: corpus/06_windshield_service:c000, corpus/01_car_comprehensive_policy_2024:c000, corpus/05_car_third_party:c000, corpus/02_car_comprehensive_policy_2026:c000, corpus/03_car_general_terms:c009
Expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011
Omitted expansions: corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c015

### D06 (answered)

נהג בן 22 נחשב לנהג צעיר לפי הגדרת נספח נהג צעיר (גיל 21–23). במקרה שבו נהג צעיר נוהג ברכב עם פוליסת "כל נהג" ללא נספח נהג צעיר, אין כיסוי ביטוחי לאירוע שנגרם על ידו. זאת משום שהכיסוי לנהג צעיר בפוליסה מסוג "כל נהג" מותנה בכך שהנהג הצעיר יהיה נקוב בנספח נהג צעיר בתוקף, הכולל מילוי טופס 1007, תשלום תוספת פרמיה והחזקת רישיון נהיגה בתוקף. אירוע שבו נהג צעיר שאינו נקוב בנספח נחשב לנהג שאינו נהג מורשה ולכן אינו מכוסה בפוליסה.

Sources: corpus/04_young_driver_annex:c000 [retrieved]; corpus/01_car_comprehensive_policy_2024:c000 [retrieved]; corpus/25_adding_driver:c000 [retrieved]; corpus/03_car_general_terms:c002 [expanded]
Retrieved: corpus/04_young_driver_annex:c000, corpus/25_adding_driver:c000, corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000, corpus/03_car_general_terms:c001
Expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011
Omitted expansions: corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c015

### D08 (answered)

לקוח שמבטל פוליסה בתוך 14 יום ממועד הרכישה, ולא הגיש תביעה, יקבל החזר מלא של דמי הביטוח ששילם, ללא ניכוי דמי טיפול.

Sources: corpus/23_cancellation_procedure_update_2025:c000 [retrieved]; corpus/22_cancellation_procedure_2023:c000 [retrieved]
Retrieved: corpus/32_fraud_red_flags:c000, corpus/22_cancellation_procedure_2023:c000, corpus/23_cancellation_procedure_update_2025:c000, corpus/24_payment_methods:c000, corpus/21_claims_sla:c000

### D10 (answered)

רכב חלופי ניתן רק למבוטחים שרכשו כתב שירות רכב חלופי, והוא אינו חלק מהכיסוי הבסיסי בפוליסת מקיף. לגבי תקופת הזכאות לרכב חלופי: במקרה של תאונה שבה הרכב מתוקן במוסך הסדר, הרכב החלופי ניתן לכל תקופת התיקון עד 21 ימים. במקרה של גניבה או אובדן גמור, ניתן רכב חלופי עד 30 ימים. במקרה של תקלה מכנית, לא ניתן רכב חלופי. בנוסף, אם הרכב מתוקן במוסך שאינו מוסך הסדר, לא תהיה זכאות לרכב חלופי. לכן, רכב חלופי אינו ניתן לכל תקופת התיקון בכל מקרה, אלא בהתאם לתנאים אלו ולתקופות המקסימליות שנקבעו בכתב השירות.

Sources: corpus/08_replacement_car:c000 [retrieved]; corpus/09_marketing_brochure_car:c000 [retrieved]
Retrieved: corpus/08_replacement_car:c000, corpus/09_marketing_brochure_car:c000, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c014
Expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c015

### D11 (answered)

במקרה של איחור בהגעת המזוודה מעל 6 שעות, הנוסע זכאי לפיצוי של עד 150 דולר עבור רכישת פריטים חיוניים. מאחר שהאיחור הוא 8 שעות, הפיצוי יהיה עד 150 דולר. יש להגיש לחברת התעופה דו"ח אי-הגעת כבודה (PIR) בשדה התעופה כדי לקבל את הפיצוי.

Sources: corpus/16_travel_luggage:c000 [retrieved]
Retrieved: corpus/16_travel_luggage:c000, corpus/03_car_general_terms:c008, corpus/14_travel_policy_overview:c000, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c010
Expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c015

### D14 (answered)

ההשתתפות העצמית ברעידת אדמה בפרק המבנה היא 10% מסכום ביטוח המבנה. אם הדירה נמצאת בבניין שעבר חיזוק לפי תמ"א 38, ההשתתפות העצמית היא 5% מסכום ביטוח המבנה.

Sources: corpus/13_home_earthquake_annex:c000 [retrieved]
Retrieved: corpus/13_home_earthquake_annex:c000, corpus/10_home_policy_overview:c000, corpus/31_ofek_plus_vip:c000, corpus/06_windshield_service:c000, corpus/11_home_water_damage:c000

## Extra probes

### X01 (clarification_needed)

Q: מה גובה ההשתתפות העצמית שלי?

כדי לענות במדויק על גובה ההשתתפות העצמית שלך, יש צורך לדעת באיזה סוג פוליסה מדובר ובאיזה אירוע ביטוחי. האם תוכל לפרט את סוג הפוליסה שלך ואת סוג האירוע (למשל, תיקון במוסך הסדר, גניבה, נזק לשמשות וכו')?

### X02 (insufficient_evidence)

Q: האם אופק ביטוח מציעה ביטוח רחפנים מסחריים?

המקורות שסופקו כוללים תנאים כלליים לפוליסות רכב של אופק ביטוח, אך אינם כוללים מידע לגבי הצעת ביטוח רחפנים מסחריים. לא ניתן לקבוע מהמידע שניתן האם אופק ביטוח מציעה ביטוח כזה.

## Possible regressions (other questions)

- **D02**: answered→answered
  - before: כדי לבקש ביטול פוליסה יש למלא את טופס מספר 4401 בשם "בקשה לביטול פוליסה". ניתן להגיש את הבקשה באמצעות אזור אישי או מוקד, וביטול הפוליסה נכנס לתוקף במועד שביקש ה
  - after: כדי לבקש ביטול פוליסה יש למלא את טופס מספר 4401 בשם "בקשה לביטול פוליסה". ניתן להגיש את הבקשה באמצעות אזור אישי או מוקד השירות. בנוסף, ניתן לבטל גם בשיחה מוקלטת
- **D03**: answered→answered
  - before: בהתאם לפוליסת ביטוח רכב מקיף שהונפקה באפריל 2026, ההשתתפות העצמית בתיקון במוסך הסדר היא 1,100 ₪. סכום זה צמוד למדד המחירים לצרכן הידוע ביום 1.3.2026.
  - after: בהתאם לגרסת הפוליסה שהונפקה או חודשה החל מ-1.3.2026, ההשתתפות העצמית בתיקון במוסך הסדר היא 1,100 ₪, צמודה למדד המחירים לצרכן הידוע ביום 1.3.2026.
- **D12**: answered→answered
  - before: בשנת ביטוח מקבלים עד 4 גרירות לאחר תאונה או תקלה, כפי שמוגדר בכתב שירות גרירה ושירותי דרך של אופק ביטוח.
  - after: בפוליסות אופק ביטוח, מגבלת הגרירות בשנת ביטוח היא עד 4 גרירות לאחר תאונה או תקלה.
- **D13**: answered→answered
  - before: סיבוכי הריון מכוסים במסגרת ביטוח נסיעות לחו"ל רק עד שבוע 26 להריון. במקרה של שבוע 28 להריון, סיבוכי הריון אינם מכוסים בביטוח נסיעות, אלא אם הוצהרו מראש ואושרו ע
  - after: סיבוכי הריון מכוסים במסגרת ביטוח נסיעות לחו"ל רק עד שבוע 26 להריון. במקרה של שבוע 28 להריון, סיבוכי הריון אינם מכוסים במסגרת הביטוח, אלא אם הוצהרו ואושרו מראש ע