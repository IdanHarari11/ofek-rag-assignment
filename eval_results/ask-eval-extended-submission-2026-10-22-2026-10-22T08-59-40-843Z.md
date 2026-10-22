# Ask eval — Stage 6 extended holdout

generatedAt: 2026-10-22T09:00:55.728Z
setId: extended_eval_stage6
setSha256: 92d7081b46b94ee769be6878407841b6bcf6b9247784048b1e0c4e615f962e75 (matched=true)
model: gpt-4.1-mini-2025-04-14; mode: hybrid; review: false

Active freeze: hybrid + Stage-4 applicability + ANSWER_REVIEW_ENABLED=false. See docs/stage6-config-freeze.md.

Quality dimensions are AI-assisted judgments against corpus evidence and the frozen rubric. They are not an independent human evaluation. The Stage-5 answer-review component is not the judge.

## Aggregates

- status: {"answered":16,"insufficient_evidence":4}
- system_errors: 0
- retrieval averages (n=15, N/A excluded): R@1=0.6 R@3=0.9333333333333333 R@5=0.9333333333333333 MRR=0.8
- evidence coverage: {"full":13,"partial":1,"missing":1,"n_a":5}
- quality: {"conclusion":{},"claimSupport":{},"completeness":{},"behavior":{}}

## E01 (factual)
- question: מי זכאי להטבות של תוכנית "אופק פלוס"?
- expected: answered
- status: answered
- requestId: cb7e5fcc-51ee-4fe4-8c5f-b676493c2056
- retrieval: R@5=1 RR=1
- evidenceCoverage: full — All 1 evidence chunkId(s) in context.
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: 31_ofek_plus_vip.docx
- answer: זכאי להטבות של תוכנית "אופק פלוס" הוא לקוח שמחזיק 3 פוליסות פעילות או יותר באופק ביטוח, בכל שילוב של רכב, דירה ונסיעות.  הטבות התוכנית כוללות נציג אישי עם קו ישיר, הנחה של 50% בהשתתפות העצמית בתיקון במוסך הסדר פעם אחת בשנה, הנחה של 7% על הפוליסה השלישית ואילך, והרחבת גאדג'טים בביטוח נסיעות ללא עלות.  ההטבה בהשתתפות העצמית אינה חלה על גניבה, אובדן גמור או מוסך שאינו בהסדר, ואינה מצטברת עם הכפלת ההשתתפות העצמית לנהג צעיר.
- timingsMs: {"retrieveMs":226.3572090000016,"contextMs":0.4735419999997248,"generationMs":2476.1166250000024,"totalMs":2753.7302500000005}; usage: {"embeddingPromptTokens":36,"generationPromptTokens":6410,"generationCompletionTokens":245,"generationTotalTokens":6655}
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E02 (factual)
- question: תוך כמה ימי עסקים אמור להתבצע ביקור שמאי ברכב לפי אמנת השירות?
- expected: answered
- status: answered
- requestId: 989baebc-baa9-414d-86ab-ae695320bbb6
- retrieval: R@5=1 RR=1
- evidenceCoverage: full — All 1 evidence chunkId(s) in context.
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: 21_claims_sla.md, 18_claims_process_car.md
- answer: לפי אמנת השירות של אופק ביטוח, ביקור שמאי ברכב אמור להתבצע בתוך עד 3 ימי עסקים.
- timingsMs: {"retrieveMs":309.5459169999958,"contextMs":0.4323339999973541,"generationMs":1091.5502500000002,"totalMs":1446.0135420000006}; usage: {"embeddingPromptTokens":59,"generationPromptTokens":5967,"generationCompletionTokens":70,"generationTotalTokens":6037}
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E03 (factual)
- question: בשיחת מוקד, אילו פרטים נדרשים לזיהוי לקוח מעבר למספר תעודת זהות?
- expected: answered
- status: answered
- requestId: 52a90b2f-e869-456b-99ce-7c95ac6c539f
- retrieval: R@5=1 RR=1
- evidenceCoverage: full — All 1 evidence chunkId(s) in context.
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: 33_customer_identification.md
- answer: בשיחת מוקד, מעבר למספר תעודת זהות, הלקוח נדרש למסור שניים מתוך שלושת הפרטים הבאים: תאריך לידה, מספר פוליסה, ו-4 הספרות האחרונות של כרטיס האשראי שבו משולמת הפוליסה.
- timingsMs: {"retrieveMs":196.27291699999478,"contextMs":0.17829200000414858,"generationMs":1290.755833999996,"totalMs":1531.8387500000026}; usage: {"embeddingPromptTokens":63,"generationPromptTokens":2521,"generationCompletionTokens":87,"generationTotalTokens":2608}
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E04 (table)
- question: מה פריסת התשלומים המקסימלית בכרטיס אשראי, ומה קורה אם תשלום לא נפרע בתוך 21 יום?
- expected: answered
- status: answered
- requestId: bf5a0be8-717a-43b3-961a-1a80f7f898a6
- retrieval: R@5=1 RR=1
- evidenceCoverage: full — All 2 evidence chunkId(s) in context.
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: 24_payment_methods.md
- answer: פריסת התשלומים המקסימלית בכרטיס אשראי היא עד 12 תשלומים ללא ריבית.  אם התשלום לא נפרע בתוך 21 יום, נשלחת ללקוח הודעה בכתב על ביטול הפוליסה.
- timingsMs: {"retrieveMs":194.2700840000034,"contextMs":0.7533750000002328,"generationMs":1308.0867089999956,"totalMs":1550.3192089999939}; usage: {"embeddingPromptTokens":78,"generationPromptTokens":5926,"generationCompletionTokens":96,"generationTotalTokens":6022}
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E05 (table)
- question: מה ההשתתפות העצמית בנזקי מים בדירה, ומה משתנה אם משתמשים באינסטלטור מרשת אופק עם כתב שירות אינסטלציה?
- expected: answered
- status: answered
- requestId: 6e560a48-1755-4dec-a345-27cb7061fefa
- retrieval: R@5=1 RR=1
- evidenceCoverage: full — All 2 evidence chunkId(s) in context.
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: 11_home_water_damage.md
- answer: ההשתתפות העצמית בנזקי מים בדירה היא 750 ₪ לכל אירוע נזקי מים.  אם המבוטח רכש כתב שירות אינסטלציה ומשתמש באינסטלטור מרשת אופק, ההשתתפות העצמית יורדת ל-250 ₪ לכל ביקור, כולל איתור נזילה.
- timingsMs: {"retrieveMs":206.04904199999874,"contextMs":3.2753329999977723,"generationMs":1410.1389170000039,"totalMs":1663.689624999999}; usage: {"embeddingPromptTokens":101,"generationPromptTokens":6359,"generationCompletionTokens":116,"generationTotalTokens":6475}
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E06 (table)
- question: מה בסיס חישוב ההשתתפות העצמית ברעידת אדמה לפרק המבנה, ומה שיעור ההשתתפות בדירה שעברה חיזוק תמ"א 38?
- expected: answered
- status: answered
- requestId: 0ec7e096-9f17-4bb5-a52f-d32dd07d8587
- retrieval: R@5=1 RR=1
- evidenceCoverage: full — All 2 evidence chunkId(s) in context.
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: 13_home_earthquake_annex.pdf
- answer: בסיס חישוב ההשתתפות העצמית ברעידת אדמה לפרק המבנה הוא 10% מסכום ביטוח המבנה.  לגבי דירה שעברה חיזוק לפי תמ"א 38, שיעור ההשתתפות העצמית ברעידת אדמה בפרק המבנה הוא 5% מסכום ביטוח המבנה.
- timingsMs: {"retrieveMs":172.61074999999983,"contextMs":0.4056669999990845,"generationMs":1451.8554999999978,"totalMs":1670.2484169999952}; usage: {"embeddingPromptTokens":93,"generationPromptTokens":6115,"generationCompletionTokens":130,"generationTotalTokens":6245}
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E07 (applicability)
- question: מה ההשתתפות העצמית בתיקון במוסך הסדר בפוליסת מקיף שהונפקה ב-28.2.2026?
- expected: answered
- status: answered
- requestId: 62110e45-7f88-4970-8097-c1314d3fa8bd
- retrieval: R@5=1 RR=1
- evidenceCoverage: partial — Partial: files 1/2, chunks 1/2.
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: 01_car_comprehensive_policy_2024.pdf
- answer: ההשתתפות העצמית בתיקון במוסך הסדר בפוליסת מקיף שהונפקה ב-28.2.2026 היא 950 ש"ח. ההשתתפות העצמית צמודה למדד המחירים לצרכן הידוע ביום 1.1.2024.
- timingsMs: {"retrieveMs":193.59274999999616,"contextMs":0.5497079999986454,"generationMs":1266.3764579999988,"totalMs":1503.735624999994}; usage: {"embeddingPromptTokens":66,"generationPromptTokens":6776,"generationCompletionTokens":98,"generationTotalTokens":6874}
- failureStageHint: context
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E08 (applicability)
- question: מה ההשתתפות העצמית במוסך הסדר בפוליסת מקיף שהונפקה בדיוק ב-1.3.2026?
- expected: answered
- status: answered
- requestId: e36eaa8c-f79e-4dc0-8361-a44d78d390d7
- retrieval: R@5=1 RR=0.5
- evidenceCoverage: full — All 2 evidence chunkId(s) in context.
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: 02_car_comprehensive_policy_2026.pdf
- answer: בפוליסת ביטוח רכב מקיף שהונפקה ב-1.3.2026, ההשתתפות העצמית בנזק חלקי לתיקון במוסך הסדר היא 1,100 ₪. ההשתתפות העצמית צמודה למדד המחירים לצרכן הידוע ביום ההנפקה, כלומר ביום 1.3.2026.
- timingsMs: {"retrieveMs":231.51654199999757,"contextMs":0.41420900000230176,"generationMs":1480.9532499999987,"totalMs":1756.370167000001}; usage: {"embeddingPromptTokens":65,"generationPromptTokens":6816,"generationCompletionTokens":114,"generationTotalTokens":6930}
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E09 (applicability)
- question: מה דמי הטיפול בהחזר אם הלקוח מבטל פוליסה אחרי יותר מ-14 יום ממועד הרכישה (לאחר תחילת עדכון 2025)?
- expected: answered
- status: answered
- requestId: 0ea1711c-3ebc-4e3f-bc8c-1c119fb5bb39
- retrieval: R@5=1 RR=1
- evidenceCoverage: full — All 1 evidence chunkId(s) in context.
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: 23_cancellation_procedure_update_2025.md
- answer: אם הלקוח מבטל פוליסה אחרי יותר מ-14 יום ממועד הרכישה, דמי הטיפול בהחזר הם 3% מסכום ההחזר, ולא יותר מ-150 ₪. ההחזר מחושב באופן יחסי (pro-rata).
- timingsMs: {"retrieveMs":208.39066699999967,"contextMs":0.6599580000038259,"generationMs":1746.9938330000004,"totalMs":1991.2179590000014}; usage: {"embeddingPromptTokens":90,"generationPromptTokens":6503,"generationCompletionTokens":90,"generationTotalTokens":6593}
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E10 (applicability)
- question: מתי נכנס לתוקף ביטול פוליסה לפי הנוהל, והאם עדכון 2025 שינה את הכלל הזה?
- expected: answered
- status: answered
- requestId: e3625e5f-8cc3-4aa1-9124-d9386c5fe2e2
- retrieval: R@5=1 RR=1
- evidenceCoverage: full — All 2 evidence chunkId(s) in context.
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: 22_cancellation_procedure_2023.md, 23_cancellation_procedure_update_2025.md
- answer: לפי נוהל ביטול פוליסה של אופק ביטוח מ-2023, הביטול נכנס לתוקף במועד שביקש הלקוח, אך לא לפני מועד קבלת בקשת הביטול. כלומר, מועד כניסת הביטול הוא מועד קבלת הבקשה או מועד מאוחר יותר לפי בקשת הלקוח.  בעדכון נוהל ביטול הפוליסה מ-2025, שנכנס לתוקף מיום 1.1.2025, לא שונה כלל הכלל לגבי מועד כניסת הביטול לתוקף. העדכון שינה רק את סעיף חישוב ההחזר, אך שאר הוראות הנוהל מ-2023, כולל מועד כניסת הביטול לתוקף, נותרו בתוקף ללא שינוי.
- timingsMs: {"retrieveMs":195.09458299999824,"contextMs":0.7814589999979944,"generationMs":2361.4235839999965,"totalMs":2597.6436659999963}; usage: {"embeddingPromptTokens":70,"generationPromptTokens":6693,"generationCompletionTokens":244,"generationTotalTokens":6937}
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E11 (multi_doc)
- question: העלון השיווקי מציע "גרירות ללא הגבלה". כמה גרירות מותרות בפועל לפי כתב השירות, ומה מעמד העלון?
- expected: answered
- status: answered
- requestId: cc3009ba-afe4-438a-8b5f-eda57c4e6fcf
- retrieval: R@5=1 RR=0.5
- evidenceCoverage: full — All 2 evidence chunkId(s) in context.
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: 07_towing_roadside.md, 09_marketing_brochure_car.md
- answer: לפי כתב השירות לגרירה ושירותי דרך, מותרות עד 4 גרירות בשנה ביטוחית.  העלון השיווקי מציע "גרירות ללא הגבלה" אך מצוין בו שהמידע הוא שיווקי בלבד והתנאים המחייבים הם תנאי הפוליסה וכתבי השירות.
- timingsMs: {"retrieveMs":200.63700000000244,"contextMs":0.3594999999986612,"generationMs":3364.981332999996,"totalMs":3608.100207999996}; usage: {"embeddingPromptTokens":87,"generationPromptTokens":4031,"generationCompletionTokens":118,"generationTotalTokens":4149}
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E12 (multi_doc)
- question: לקוח אופק פלוס שואל אם ההנחה של 50% בהשתתפות עצמית במוסך הסדר חלה גם על גניבת רכב.
- expected: answered
- status: answered
- requestId: 85271194-5b8f-4094-935b-f04a5f5c76d3
- retrieval: R@5=1 RR=1
- evidenceCoverage: full — All 1 evidence chunkId(s) in context.
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: 31_ofek_plus_vip.docx
- answer: ההטבה של 50% הנחה בהשתתפות העצמית במוסך הסדר במסגרת אופק פלוס אינה חלה על מקרים של גניבת רכב. כלומר, במקרה של גניבה, ההנחה הזו לא תינתן.
- timingsMs: {"retrieveMs":227.2512080000015,"contextMs":0.43066600000020117,"generationMs":1212.9815830000007,"totalMs":1485.2079999999987}; usage: {"embeddingPromptTokens":82,"generationPromptTokens":6318,"generationCompletionTokens":85,"generationTotalTokens":6403}
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E13 (multi_doc)
- question: האם הנחת אופק פלוס בהשתתפות עצמית מצטברת עם הכפלת ההשתתפות לנהג צעיר כאשר נהג צעיר נהג ברכב?
- expected: answered
- status: answered
- requestId: 2fce4eed-7911-4123-8002-22ff2ed19d03
- retrieval: R@5=1 RR=0.5
- evidenceCoverage: full — All 1 evidence chunkId(s) in context.
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: 31_ofek_plus_vip.docx, 04_young_driver_annex.docx
- answer: הנחת אופק פלוס בהשתתפות עצמית אינה מצטברת עם הכפלת ההשתתפות העצמית לנהג צעיר. כאשר נהג צעיר נהג ברכב, לא תינתן הנחת אופק פלוס בהשתתפות העצמית.  לפי נספח נהג צעיר, במקרה ביטוח שאירע בעת שהרכב היה נהוג בידי נהג צעיר, ההשתתפות העצמית תהיה כפולה מההשתתפות העצמית הנקובה בפוליסה לאותו סוג אירוע.
- timingsMs: {"retrieveMs":207.53991600000154,"contextMs":0.4529590000020107,"generationMs":2272.3259999999937,"totalMs":2523.0632499999992}; usage: {"embeddingPromptTokens":98,"generationPromptTokens":6435,"generationCompletionTokens":166,"generationTotalTokens":6601}
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E14 (cross_lingual)
- question: מה קורה לעמלת הסוכן אם הלקוח מבטל פוליסה תוך 120 יום מההנפקה?
- expected: answered
- status: answered
- requestId: c8b17fad-ee0a-4b3a-a735-0968e3ecbab8
- retrieval: R@5=1 RR=0.5
- evidenceCoverage: full — All 1 evidence chunkId(s) in context.
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: 30_agent_faq_en.md
- answer: אם הלקוח מבטל את הפוליסה תוך 120 יום מההנפקה, העמלה של הסוכן מוחזרת במלואה (clawback מלא).
- timingsMs: {"retrieveMs":234.1437500000029,"contextMs":0.22674999999435386,"generationMs":1057.9795830000003,"totalMs":1331.8911670000016}; usage: {"embeddingPromptTokens":60,"generationPromptTokens":3120,"generationCompletionTokens":66,"generationTotalTokens":3186}
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E15 (cross_lingual)
- question: מה אחוז ההנחה המרבי שסוכן רשאי לתת לפי שיקול דעתו בלי אישור מנהל מכירות?
- expected: answered
- status: insufficient_evidence
- requestId: d565f431-558a-4a0e-8214-f44253aff195
- retrieval: R@5=0 RR=0
- evidenceCoverage: missing — No required evidence file/chunk appeared in generation context.
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: (none)
- answer: לא מצאתי במקורות שסופקו מידע מספיק כדי לענות על השאלה.
- timingsMs: {"retrieveMs":186.45958400000382,"contextMs":0.5477079999982379,"generationMs":803.3669579999987,"totalMs":1038.3278750000027}; usage: {"embeddingPromptTokens":65,"generationPromptTokens":6221,"generationCompletionTokens":12,"generationTotalTokens":6233}
- failureStageHint: retrieval
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E16 (ambiguous)
- question: מה ההטבות שלי?
- expected: clarification_needed
- status: answered
- requestId: feda94c9-3de7-4304-8d6d-60b6fb01a858
- retrieval: R@5=N/A RR=N/A
- evidenceCoverage: n_a — No required evidence sources (ambiguous / no_answer).
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: 31_ofek_plus_vip.docx
- answer: אם אתה לקוח שמחזיק 3 פוליסות פעילות או יותר באופק ביטוח (בכל שילוב של רכב, דירה ונסיעות), אתה זכאי להטבות במסגרת תוכנית "אופק פלוס". ההטבות כוללות: נציג אישי עם קו ישיר, הנחה של 50% בהשתתפות העצמית בתיקון במוסך הסדר פעם אחת בשנה, הנחה של 7% על הפרמיה בפוליסה השלישית ואילך, והרחבת גאדג'טים בביטוח נסיעות ללא עלות. שים לב שההטבה בהשתתפות העצמית אינה חלה על גניבה, אובדן גמור או מוסך שאינו בהסדר, ואינה מצטברת עם הכפלת ההשתתפות העצמית לנהג צעיר.
- timingsMs: {"retrieveMs":210.88450000000012,"contextMs":0.4758339999971213,"generationMs":2186.213791999995,"totalMs":2447.724833}; usage: {"embeddingPromptTokens":13,"generationPromptTokens":2624,"generationCompletionTokens":215,"generationTotalTokens":2839}
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E17 (ambiguous)
- question: תוך כמה זמן מגיע שמאי?
- expected: clarification_needed
- status: answered
- requestId: 660bd153-d5c5-4c5c-8b3d-31c8be267361
- retrieval: R@5=N/A RR=N/A
- evidenceCoverage: n_a — No required evidence sources (ambiguous / no_answer).
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: 18_claims_process_car.md, 21_claims_sla.md
- answer: שמאי מטעם החברה יתאם בדיקה של הרכב בתוך 3 ימי עסקים ממועד קבלת התביעה.  זמן היעד לביקור שמאי ברכב הוא עד 3 ימי עסקים.
- timingsMs: {"retrieveMs":188.1305840000132,"contextMs":0.5320000000065193,"generationMs":1294.4024999999965,"totalMs":1519.7964159999974}; usage: {"embeddingPromptTokens":22,"generationPromptTokens":6112,"generationCompletionTokens":93,"generationTotalTokens":6205}
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E18 (no_answer)
- question: האם אופק ביטוח מציעה ביטוח סייבר לעסקים קטנים?
- expected: insufficient_evidence
- status: insufficient_evidence
- requestId: 9f51a4d3-04ac-49db-a902-1b4c59e1d1ac
- retrieval: R@5=N/A RR=N/A
- evidenceCoverage: n_a — No required evidence sources (ambiguous / no_answer).
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: (none)
- answer: לא מצאתי במקורות שסופקו מידע מספיק כדי לענות על השאלה.
- timingsMs: {"retrieveMs":212.98562500000116,"contextMs":0.3523339999956079,"generationMs":735.3840420000051,"totalMs":990.6236250000075}; usage: {"embeddingPromptTokens":47,"generationPromptTokens":5261,"generationCompletionTokens":12,"generationTotalTokens":5273}
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E19 (no_answer)
- question: מה גבול האחריות בפוליסת ביטוח יאכטות של אופק?
- expected: insufficient_evidence
- status: insufficient_evidence
- requestId: aea28844-8647-4ad3-ad67-3fe70ee073cd
- retrieval: R@5=N/A RR=N/A
- evidenceCoverage: n_a — No required evidence sources (ambiguous / no_answer).
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: (none)
- answer: לא מצאתי במקורות שסופקו מידע מספיק כדי לענות על השאלה.
- timingsMs: {"retrieveMs":274.62208299999475,"contextMs":0.7690409999922849,"generationMs":1678.626041999989,"totalMs":2002.6619999999966}; usage: {"embeddingPromptTokens":44,"generationPromptTokens":6099,"generationCompletionTokens":12,"generationTotalTokens":6111}
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.

## E20 (no_answer)
- question: מה סכום הביטוח המינימלי בביטוח חיים למשכנתא באופק?
- expected: insufficient_evidence
- status: insufficient_evidence
- requestId: 2db4045d-3c21-4033-a7b1-3506a6dd40a0
- retrieval: R@5=N/A RR=N/A
- evidenceCoverage: n_a — No required evidence sources (ambiguous / no_answer).
- quality: conclusion=pending support=pending complete=pending behavior=pending
- cited: (none)
- answer: לא מצאתי במקורות שסופקו מידע מספיק כדי לענות על השאלה.
- timingsMs: {"retrieveMs":194.4825000000128,"contextMs":0.541083999996772,"generationMs":761.6506250000093,"totalMs":1010.8196670000034}; usage: {"embeddingPromptTokens":48,"generationPromptTokens":6020,"generationCompletionTokens":12,"generationTotalTokens":6032}
- reviewNotes: AI-assisted scoring vs corpus evidence — not an independent human evaluation.
