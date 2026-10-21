# Ask eval — Stage 6 extended holdout

generatedAt: 2026-10-21T13:50:04.978Z
setId: extended_eval_stage6
setSha256: 92d7081b46b94ee769be6878407841b6bcf6b9247784048b1e0c4e615f962e75 (matched=true)
model: gpt-4.1-mini; mode: hybrid; review: false

Active freeze: hybrid + Stage-4 applicability + ANSWER_REVIEW_ENABLED=false. See docs/stage6-config-freeze.md.

Quality dimensions are AI-assisted judgments against corpus evidence and the frozen rubric. They are not an independent human evaluation. The Stage-5 answer-review component is not the judge.

## Aggregates

- status: {"answered":16,"clarification_needed":1,"insufficient_evidence":3}
- system_errors: 0
- retrieval averages (n=15, N/A excluded): R@1=0.6 R@3=0.8666666666666667 R@5=0.8666666666666667 MRR=0.7666666666666667
- evidence coverage: {"full":12,"partial":1,"missing":2,"n_a":5}
- quality: {"conclusion":{},"claimSupport":{},"completeness":{},"behavior":{}}

## E01 (factual)
- question: מי זכאי להטבות של תוכנית "אופק פלוס"?
- expected: answered
- status: answered
- requestId: 8e3cff02-1b94-42cc-bd2d-f9370660546e
- retrieval: R@5=1 RR=1
- evidenceCoverage: full — All 1 evidence chunkId(s) in context.
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: 31_ofek_plus_vip.docx
- answer: תוכנית "אופק פלוס" מיועדת ללקוחות שמחזיקים 3 פוליסות פעילות או יותר באופק ביטוח, בכל שילוב של רכב, דירה ונסיעות.  הטבות בתוכנית כוללות נציג אישי עם קו ישיר, הנחה של 50% בהשתתפות העצמית בתיקון במוסך הסדר פעם בשנה, הנחה של 7% על הפוליסה השלישית ואילך, והרחבת גאדג'טים בביטוח נסיעות ללא עלות.  ההנחה בהשתתפות העצמית אינה חלה על גניבה, אובדן גמור או מוסך שאינו בהסדר, ואינה מצטברת עם הכפלת ההשתתפות העצמית לנהג צעיר.
- timingsMs: {"retrieveMs":214.95770800000003,"contextMs":3.239417000000003,"generationMs":2636.9580419999998,"totalMs":2898.726583}; usage: {"embeddingPromptTokens":36,"generationPromptTokens":6096,"generationCompletionTokens":239,"generationTotalTokens":6335}
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E02 (factual)
- question: תוך כמה ימי עסקים אמור להתבצע ביקור שמאי ברכב לפי אמנת השירות?
- expected: answered
- status: answered
- requestId: d468d29c-6533-4158-99d6-ba85307a5ab5
- retrieval: R@5=1 RR=1
- evidenceCoverage: full — All 1 evidence chunkId(s) in context.
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: 21_claims_sla.md, 18_claims_process_car.md
- answer: לפי אמנת השירות של אופק ביטוח, ביקור שמאי ברכב אמור להתבצע בתוך עד 3 ימי עסקים.
- timingsMs: {"retrieveMs":177.45570799999996,"contextMs":0.931583000000046,"generationMs":1300.6814590000004,"totalMs":1518.9871659999994}; usage: {"embeddingPromptTokens":59,"generationPromptTokens":5627,"generationCompletionTokens":70,"generationTotalTokens":5697}
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E03 (factual)
- question: בשיחת מוקד, אילו פרטים נדרשים לזיהוי לקוח מעבר למספר תעודת זהות?
- expected: answered
- status: answered
- requestId: 96b43be9-d4bc-45a4-9132-8dcf162a8a6f
- retrieval: R@5=1 RR=1
- evidenceCoverage: full — All 1 evidence chunkId(s) in context.
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: 33_customer_identification.md
- answer: בשיחת מוקד, מעבר למספר תעודת זהות, הלקוח נדרש למסור שניים מתוך שלושת הפרטים הבאים: תאריך לידה, מספר פוליסה, או 4 הספרות האחרונות של כרטיס האשראי שבו משולמת הפוליסה.
- timingsMs: {"retrieveMs":179.76925000000028,"contextMs":0.4509589999997843,"generationMs":1799.7506249999997,"totalMs":2020.5795420000004}; usage: {"embeddingPromptTokens":63,"generationPromptTokens":2181,"generationCompletionTokens":87,"generationTotalTokens":2268}
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E04 (table)
- question: מה פריסת התשלומים המקסימלית בכרטיס אשראי, ומה קורה אם תשלום לא נפרע בתוך 21 יום?
- expected: answered
- status: answered
- requestId: 697a857b-0280-478e-a2e6-98aa3c5ab789
- retrieval: R@5=1 RR=1
- evidenceCoverage: full — All 2 evidence chunkId(s) in context.
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: 24_payment_methods.md
- answer: פריסת התשלומים המקסימלית בכרטיס אשראי היא עד 12 תשלומים ללא ריבית.  אם התשלום לא נפרע בתוך 21 יום, נשלחת הודעה בכתב על ביטול הפוליסה.  בנוסף, נשלחת ללקוח הודעת SMS ומייל לפני כן.  הנציג רשאי לאשר דחייה חד-פעמית של עד 14 יום לתשלום.
- timingsMs: {"retrieveMs":262.0236250000007,"contextMs":0.520542000000205,"generationMs":2259.1069580000003,"totalMs":2567.9601669999993}; usage: {"embeddingPromptTokens":78,"generationPromptTokens":5586,"generationCompletionTokens":165,"generationTotalTokens":5751}
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E05 (table)
- question: מה ההשתתפות העצמית בנזקי מים בדירה, ומה משתנה אם משתמשים באינסטלטור מרשת אופק עם כתב שירות אינסטלציה?
- expected: answered
- status: answered
- requestId: 1e4badd0-0488-4ab1-9d87-8ec9250a2996
- retrieval: R@5=1 RR=1
- evidenceCoverage: full — All 2 evidence chunkId(s) in context.
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: 11_home_water_damage.md
- answer: ההשתתפות העצמית בנזקי מים בדירה היא 750 ₪ לכל אירוע נזקי מים.  אם המבוטח רכש כתב שירות אינסטלציה ומשתמש באינסטלטור מרשת אופק, ההשתתפות העצמית יורדת ל-250 ₪ לכל ביקור, כולל איתור נזילה.
- timingsMs: {"retrieveMs":184.71754200000032,"contextMs":1.361957999999504,"generationMs":1660.0292910000007,"totalMs":1892.0157500000005}; usage: {"embeddingPromptTokens":101,"generationPromptTokens":6019,"generationCompletionTokens":116,"generationTotalTokens":6135}
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E06 (table)
- question: מה בסיס חישוב ההשתתפות העצמית ברעידת אדמה לפרק המבנה, ומה שיעור ההשתתפות בדירה שעברה חיזוק תמ"א 38?
- expected: answered
- status: answered
- requestId: bb53fba2-2606-4d73-9d13-07f2108e5c2d
- retrieval: R@5=1 RR=1
- evidenceCoverage: full — All 2 evidence chunkId(s) in context.
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: 13_home_earthquake_annex.pdf
- answer: בסיס חישוב ההשתתפות העצמית ברעידת אדמה לפרק המבנה הוא 10% מסכום ביטוח המבנה.  לגבי דירה שעברה חיזוק לפי תמ"א 38, שיעור ההשתתפות העצמית ברעידת אדמה בפרק המבנה הוא 5% מסכום ביטוח המבנה.
- timingsMs: {"retrieveMs":221.89808300000004,"contextMs":0.5552499999994325,"generationMs":2332.7426250000008,"totalMs":2600.599459000001}; usage: {"embeddingPromptTokens":93,"generationPromptTokens":5775,"generationCompletionTokens":130,"generationTotalTokens":5905}
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E07 (applicability)
- question: מה ההשתתפות העצמית בתיקון במוסך הסדר בפוליסת מקיף שהונפקה ב-28.2.2026?
- expected: answered
- status: answered
- requestId: f0287ea3-d21f-48e1-8bcf-099efe4e5554
- retrieval: R@5=1 RR=1
- evidenceCoverage: partial — Partial: files 1/2, chunks 1/2.
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: 01_car_comprehensive_policy_2024.pdf
- answer: ההשתתפות העצמית בתיקון במוסך הסדר בפוליסת רכב מקיף שהונפקה ב-28.2.2026 היא 950 ש"ח, צמודה למדד המחירים לצרכן הידוע ביום 1.1.2024.
- timingsMs: {"retrieveMs":223.3273330000011,"contextMs":0.7781670000003942,"generationMs":2716.2646670000013,"totalMs":2979.5769579999996}; usage: {"embeddingPromptTokens":66,"generationPromptTokens":6057,"generationCompletionTokens":94,"generationTotalTokens":6151}
- failureStageHint: context
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E08 (applicability)
- question: מה ההשתתפות העצמית במוסך הסדר בפוליסת מקיף שהונפקה בדיוק ב-1.3.2026?
- expected: answered
- status: answered
- requestId: 1c8992c0-b826-40a4-94ed-138f1ffe4776
- retrieval: R@5=1 RR=0.5
- evidenceCoverage: full — All 2 evidence chunkId(s) in context.
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: 02_car_comprehensive_policy_2026.pdf
- answer: בהתאם לפוליסת ביטוח רכב מקיף שהונפקה מיום 1.3.2026 ואילך, ההשתתפות העצמית בנזק חלקי לתיקון במוסך הסדר היא 1,100 ₪. ההשתתפות העצמית צמודה למדד המחירים לצרכן הידוע ביום 1.3.2026.
- timingsMs: {"retrieveMs":198.02525000000242,"contextMs":0.47370800000135205,"generationMs":2055.0441250000003,"totalMs":2333.8052500000013}; usage: {"embeddingPromptTokens":65,"generationPromptTokens":6096,"generationCompletionTokens":113,"generationTotalTokens":6209}
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E09 (applicability)
- question: מה דמי הטיפול בהחזר אם הלקוח מבטל פוליסה אחרי יותר מ-14 יום ממועד הרכישה (לאחר תחילת עדכון 2025)?
- expected: answered
- status: answered
- requestId: 124b0cfc-1db0-416c-898c-069035849ebf
- retrieval: R@5=1 RR=1
- evidenceCoverage: full — All 1 evidence chunkId(s) in context.
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: 23_cancellation_procedure_update_2025.md
- answer: אם הלקוח מבטל פוליסה אחרי יותר מ-14 יום ממועד הרכישה, דמי הטיפול בהחזר הם 3% מסכום ההחזר, ולא יותר מ-150 ₪, בהתאם לעדכון נוהל ביטול פוליסה החל מ-1.1.2025.
- timingsMs: {"retrieveMs":196.31979200000205,"contextMs":0.803250000000844,"generationMs":1532.7466249999998,"totalMs":1768.9806250000001}; usage: {"embeddingPromptTokens":90,"generationPromptTokens":5893,"generationCompletionTokens":98,"generationTotalTokens":5991}
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E10 (applicability)
- question: מתי נכנס לתוקף ביטול פוליסה לפי הנוהל, והאם עדכון 2025 שינה את הכלל הזה?
- expected: answered
- status: answered
- requestId: 7c256a77-1bd0-41b0-8679-e25dd00f545b
- retrieval: R@5=1 RR=1
- evidenceCoverage: full — All 2 evidence chunkId(s) in context.
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: 22_cancellation_procedure_2023.md, 23_cancellation_procedure_update_2025.md
- answer: לפי נוהל ביטול הפוליסה מ-2023, הביטול נכנס לתוקף במועד שביקש הלקוח, אך לא לפני מועד קבלת בקשת הביטול. כלומר, הביטול אינו מתבצע רטרואקטיבית אלא מהיום שבו התקבלה הבקשה אצל המבטח.  עדכון נוהל ביטול הפוליסה מ-2025 לא שינה את הכלל הזה לגבי מועד כניסת הביטול לתוקף. העדכון מיום 1.1.2025 שינה רק את סעיף חישוב ההחזר, אך שאר הוראות נוהל 2023, כולל מועד כניסת הביטול לתוקף, נותרו כפי שהיו.
- timingsMs: {"retrieveMs":197.80791600000157,"contextMs":0.7132089999977325,"generationMs":2425.036583000001,"totalMs":2665.972665999998}; usage: {"embeddingPromptTokens":70,"generationPromptTokens":6110,"generationCompletionTokens":226,"generationTotalTokens":6336}
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E11 (multi_doc)
- question: העלון השיווקי מציע "גרירות ללא הגבלה". כמה גרירות מותרות בפועל לפי כתב השירות, ומה מעמד העלון?
- expected: answered
- status: answered
- requestId: 57370946-89b5-423b-9bf0-b62058f4ed12
- retrieval: R@5=1 RR=0.5
- evidenceCoverage: full — All 2 evidence chunkId(s) in context.
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: 07_towing_roadside.md, 09_marketing_brochure_car.md
- answer: לפי כתב השירות לגרירה ושירותי דרך, מותרות עד 4 גרירות בשנה במסגרת שירות גרירה לאחר תאונה או תקלה.  העלון השיווקי מציע "גרירות ללא הגבלה" אך מצוין בו שהמידע הוא שיווקי בלבד והתנאים המחייבים הם תנאי הפוליסה וכתבי השירות.
- timingsMs: {"retrieveMs":163.6297909999994,"contextMs":0.2987920000014128,"generationMs":3361.097833,"totalMs":3567.895708}; usage: {"embeddingPromptTokens":87,"generationPromptTokens":3691,"generationCompletionTokens":125,"generationTotalTokens":3816}
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E12 (multi_doc)
- question: לקוח אופק פלוס שואל אם ההנחה של 50% בהשתתפות עצמית במוסך הסדר חלה גם על גניבת רכב.
- expected: answered
- status: answered
- requestId: b7085547-ceca-4205-be13-273ce85d54d1
- retrieval: R@5=1 RR=1
- evidenceCoverage: full — All 1 evidence chunkId(s) in context.
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: 31_ofek_plus_vip.docx
- answer: ההנחה של 50% בהשתתפות העצמית במוסך הסדר במסגרת אופק פלוס אינה חלה על מקרים של גניבת רכב. ההטבה בהשתתפות העצמית חלה רק על תיקון במוסך הסדר, ופעם אחת בשנה ביטוחית, אך לא על גניבה, אובדן גמור או מוסך שאינו בהסדר.
- timingsMs: {"retrieveMs":224.49954100000105,"contextMs":0.39562499999738066,"generationMs":2079.645124999999,"totalMs":2349.2328750000015}; usage: {"embeddingPromptTokens":82,"generationPromptTokens":5978,"generationCompletionTokens":117,"generationTotalTokens":6095}
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E13 (multi_doc)
- question: האם הנחת אופק פלוס בהשתתפות עצמית מצטברת עם הכפלת ההשתתפות לנהג צעיר כאשר נהג צעיר נהג ברכב?
- expected: answered
- status: answered
- requestId: 4618c145-21e3-4e44-959a-d7b397df75aa
- retrieval: R@5=1 RR=0.5
- evidenceCoverage: full — All 1 evidence chunkId(s) in context.
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: 31_ofek_plus_vip.docx, 04_young_driver_annex.docx
- answer: הנחת אופק פלוס בהשתתפות עצמית אינה מצטברת עם הכפלת ההשתתפות העצמית לנהג צעיר. כאשר נהג צעיר נהג ברכב, לא תינתן הנחת אופק פלוס בהשתתפות העצמית.  בנספח נהג צעיר נקבע כי במקרה ביטוח שאירע בעת שהרכב היה נהוג בידי נהג צעיר, ההשתתפות העצמית תהיה כפולה מההשתתפות העצמית הנקובה בפוליסה לאותו סוג אירוע.
- timingsMs: {"retrieveMs":189.5240829999966,"contextMs":0.465541999998095,"generationMs":2523.8386249999967,"totalMs":2752.689000000002}; usage: {"embeddingPromptTokens":98,"generationPromptTokens":6095,"generationCompletionTokens":167,"generationTotalTokens":6262}
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E14 (cross_lingual)
- question: מה קורה לעמלת הסוכן אם הלקוח מבטל פוליסה תוך 120 יום מההנפקה?
- expected: answered
- status: answered
- requestId: 22c342d4-62c4-49ed-842d-550213b1ecc0
- retrieval: R@5=0 RR=0
- evidenceCoverage: missing — No required evidence file/chunk appeared in generation context.
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: 22_cancellation_procedure_2023.md, 23_cancellation_procedure_update_2025.md
- answer: אם הלקוח מבטל פוליסה בתוך 120 יום מההנפקה, עמלת הסוכן מושפעת מחישוב ההחזר על דמי הביטוח ששולמו. לפי נוהל ביטול פוליסה בתוקף מיום 1.4.2023, ההחזר מחושב באופן יחסי לתקופה שנותרה עד תום תקופת הביטוח (pro-rata), ומסכום ההחזר מנוכים דמי טיפול בשיעור 5%.  עם זאת, החל מ-1.1.2025, יש עדכון בנוהל הביטול לגבי חישוב ההחזר: אם הביטול נעשה בתוך 14 יום ממועד הרכישה והלקוח לא הגיש תביעה, ההחזר יהיה מלא ללא דמי טיפול. דמי הטיפול שהופחתו במקרה זה הם 3% מסכום ההחזר, ולא יותר מ-150 ₪. שאר ההחזר ממשיך להיות מחושב באופן יחסי (pro-rata).
- timingsMs: {"retrieveMs":179.39929200000188,"contextMs":0.860499999995227,"generationMs":3678.387042000002,"totalMs":3905.0260419999977}; usage: {"embeddingPromptTokens":60,"generationPromptTokens":5890,"generationCompletionTokens":265,"generationTotalTokens":6155}
- failureStageHint: retrieval
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E15 (cross_lingual)
- question: מה אחוז ההנחה המרבי שסוכן רשאי לתת לפי שיקול דעתו בלי אישור מנהל מכירות?
- expected: answered
- status: clarification_needed
- requestId: 2bc3a76a-4f6c-4fd7-a456-82b613b60324
- retrieval: R@5=0 RR=0
- evidenceCoverage: missing — No required evidence file/chunk appeared in generation context.
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: (none)
- answer: מהו סוג הביטוח או הפוליסה שאליה מתייחס השאלה לגבי אחוז ההנחה המרבי שסוכן רשאי לתת בלי אישור מנהל מכירות?
- timingsMs: {"retrieveMs":214.38895800000319,"contextMs":0.44558300000062445,"generationMs":1833.0304170000018,"totalMs":2087.1262080000015}; usage: {"embeddingPromptTokens":65,"generationPromptTokens":5881,"generationCompletionTokens":56,"generationTotalTokens":5937}
- failureStageHint: retrieval
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E16 (ambiguous)
- question: מה ההטבות שלי?
- expected: clarification_needed
- status: answered
- requestId: 71ea9a81-d5c8-42a0-a6dd-e0ca14afa6ce
- retrieval: R@5=N/A RR=N/A
- evidenceCoverage: n_a — No required evidence sources (ambiguous / no_answer).
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: 05_car_third_party.md, 06_windshield_service.md, 11_home_water_damage.md, 31_ofek_plus_vip.docx, 13_home_earthquake_annex.pdf
- answer: אם יש לך ביטוח צד שלישי לרכב, אתה מכוסה בגין נזק שגרמת לרכוש של אחרים עד לסכום של 1,000,000 ₪ לאירוע, ללא השתתפות עצמית בתביעות צד ג'. ביטוח צד שלישי אינו כולל רכב חלופי, גרירה או שמשות אלא אם נרכשו כתבי שירות נפרדים.  אם רכשת כתב שירות שמשות, תוכל לקבל החלפה או תיקון של שמשות הרכב ברשת 'שמשות אופק' ללא השתתפות עצמית, עם מגבלה של עד 2 החלפות שמשה קדמית בשנה.  בביטוח דירה, נזקי מים מכוסים במקרה של פריצה או דליפה פתאומית של צנרת בתוך הדירה, כולל נזק לתכולה אם נרכש פרק תכולה, עם השתתפות עצמית של 750 ₪ לכל אירוע.  אם אתה לקוח אופק פלוס (מחזיק 3 פוליסות פעילות או יותר), אתה זכאי לנציג אישי עם קו ישיר, הנחה של 50% בהשתתפות העצמית בתיקון במוסך הסדר פעם בשנה, הנחה של 7% על הפוליסה השלישית ואילך, והרחבת ביטוח נסיעות לגאדג'טים ללא עלות.  אם רכשת נספח רעידת אדמה ונזקי טבע בביטוח דירה, יש השתתפות עצמית של 10% מסכום ביטוח המבנה או התכולה, או 5% במקרה של דירה שעברה חיזוק לפי תמ"א 38. נזקי טבע כמו סערה, שיטפון, שלג וברד כוללים השתתפות עצמית של 1,500 ₪ לאירוע.
- timingsMs: {"retrieveMs":239.67250000000058,"contextMs":0.1850830000039423,"generationMs":6204.344416,"totalMs":6484.888500000001}; usage: {"embeddingPromptTokens":13,"generationPromptTokens":2393,"generationCompletionTokens":489,"generationTotalTokens":2882}
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E17 (ambiguous)
- question: תוך כמה זמן מגיע שמאי?
- expected: clarification_needed
- status: answered
- requestId: fb2f2a29-647b-4128-9128-e0cbe1d896b9
- retrieval: R@5=N/A RR=N/A
- evidenceCoverage: n_a — No required evidence sources (ambiguous / no_answer).
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: 21_claims_sla.md, 18_claims_process_car.md
- answer: שמאי מטעם החברה יתאם בדיקה של הרכב בתוך עד 3 ימי עסקים ממועד קבלת התביעה.
- timingsMs: {"retrieveMs":201.96808299999975,"contextMs":0.9245410000003176,"generationMs":1277.7094580000048,"totalMs":1521.4179589999985}; usage: {"embeddingPromptTokens":22,"generationPromptTokens":5772,"generationCompletionTokens":66,"generationTotalTokens":5838}
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E18 (no_answer)
- question: האם אופק ביטוח מציעה ביטוח סייבר לעסקים קטנים?
- expected: insufficient_evidence
- status: insufficient_evidence
- requestId: d58c15de-ad56-4ff4-b2d5-e41f85b6c88f
- retrieval: R@5=N/A RR=N/A
- evidenceCoverage: n_a — No required evidence sources (ambiguous / no_answer).
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: (none)
- answer: לא מצאתי במקורות שסופקו מידע מספיק כדי לענות על השאלה.
- timingsMs: {"retrieveMs":244.92900000000373,"contextMs":0.6881670000002487,"generationMs":854.5152920000037,"totalMs":1137.9019170000029}; usage: {"embeddingPromptTokens":47,"generationPromptTokens":4921,"generationCompletionTokens":12,"generationTotalTokens":4933}
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E19 (no_answer)
- question: מה גבול האחריות בפוליסת ביטוח יאכטות של אופק?
- expected: insufficient_evidence
- status: insufficient_evidence
- requestId: f8aba5f9-7da2-4844-a02f-b4c8fb84fb3e
- retrieval: R@5=N/A RR=N/A
- evidenceCoverage: n_a — No required evidence sources (ambiguous / no_answer).
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: (none)
- answer: לא מצאתי במקורות שסופקו מידע מספיק כדי לענות על השאלה.
- timingsMs: {"retrieveMs":298.0912920000046,"contextMs":0.5305410000000848,"generationMs":1051.512542000004,"totalMs":1392.3145000000004}; usage: {"embeddingPromptTokens":44,"generationPromptTokens":5759,"generationCompletionTokens":12,"generationTotalTokens":5771}
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E20 (no_answer)
- question: מה סכום הביטוח המינימלי בביטוח חיים למשכנתא באופק?
- expected: insufficient_evidence
- status: insufficient_evidence
- requestId: f01b83fc-5a64-41f5-ab86-3705ebfd4526
- retrieval: R@5=N/A RR=N/A
- evidenceCoverage: n_a — No required evidence sources (ambiguous / no_answer).
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: (none)
- answer: לא מצאתי במקורות שסופקו מידע מספיק כדי לענות על השאלה.
- timingsMs: {"retrieveMs":188.7991669999974,"contextMs":0.2942089999996824,"generationMs":1418.8043749999997,"totalMs":1643.299874999997}; usage: {"embeddingPromptTokens":48,"generationPromptTokens":5678,"generationCompletionTokens":12,"generationTotalTokens":5690}
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.
