# Ask eval — Stage 6 extended holdout

generatedAt: 2026-10-21T13:33:16.160Z
setId: extended_eval_stage6
setSha256: 92d7081b46b94ee769be6878407841b6bcf6b9247784048b1e0c4e615f962e75 (matched=True)
model: gpt-4.1-mini; mode: hybrid; review: false

Active freeze: hybrid + Stage-4 applicability + ANSWER_REVIEW_ENABLED=false. See docs/stage6-config-freeze.md.

Quality dimensions are AI-assisted judgments against corpus evidence and the frozen rubric. They are not an independent human evaluation. The Stage-5 answer-review component is not the judge.

## Aggregates

- status: {"answered": 16, "clarification_needed": 1, "insufficient_evidence": 3}
- system_errors: 0
- retrieval averages (n=15, N/A excluded): R@1=0.6 R@3=0.8666666666666667 R@5=0.8666666666666667 MRR=0.7666666666666667
- evidence coverage: {"full": 12, "partial": 1, "missing": 2, "n_a": 5}
- quality: {"conclusion": {"pass": 13, "fail": 3, "n_a": 4}, "claimSupport": {"pass": 13, "fail": 2, "n_a": 4, "partial": 1}, "completeness": {"pass": 13, "partial": 1, "fail": 2, "n_a": 4}, "behavior": {"pass": 17, "fail": 3}}

## E01 (factual)
- question: מי זכאי להטבות של תוכנית "אופק פלוס"?
- expected: answered
- status: answered
- requestId: d8746a9b-b027-4e23-8ae7-e6a8586a1fe6
- retrieval: R@5=1 RR=1
- evidenceCoverage: full — All 1 evidence chunkId(s) in context.
- quality: conclusion=pass support=pass complete=pass behavior=pass
- cited: 31_ofek_plus_vip.docx
- answer: זכאי לתוכנית "אופק פלוס" הוא לקוח שמחזיק 3 פוליסות פעילות או יותר באופק ביטוח, בכל שילוב של רכב, דירה ונסיעות.  הטבות בתוכנית כוללות נציג אישי עם קו ישיר, הנחה של 50% בהשתתפות העצמית בתיקון במוסך הסדר פעם בשנה, הנחה של 7% על הפרמיה בפוליסה השלישית ואילך, והרחבת גאדג'טים בביטוח נסיעות ללא עלות.  ההטבה בהשתתפות העצמית אינה חלה על גניבה, אובדן גמור או מוסך שאינו בהסדר, ואינה מצטברת עם הכפלת ההשתתפות העצמית לנהג צעיר.
- timingsMs: {"retrieveMs": 863.1454160000001, "contextMs": 5.132292000000234, "generationMs": 3502.8318339999996, "totalMs": 4411.528542}; usage: {"embeddingPromptTokens": 36, "generationPromptTokens": 6452, "generationCompletionTokens": 243, "generationTotalTokens": 6695}
- reviewNotes: Eligibility correct; extra benefit list still supported. | AI-assisted vs corpus; not independent human study.

## E02 (factual)
- question: תוך כמה ימי עסקים אמור להתבצע ביקור שמאי ברכב לפי אמנת השירות?
- expected: answered
- status: answered
- requestId: 35057bee-f520-4f9f-8df9-6cf3ee1e48d7
- retrieval: R@5=1 RR=1
- evidenceCoverage: full — All 1 evidence chunkId(s) in context.
- quality: conclusion=pass support=pass complete=pass behavior=pass
- cited: 21_claims_sla.md, 18_claims_process_car.md
- answer: לפי אמנת השירות של אופק ביטוח, ביקור שמאי ברכב אמור להתבצע בתוך עד 3 ימי עסקים.
- timingsMs: {"retrieveMs": 853.2982499999998, "contextMs": 1.1257499999992433, "generationMs": 3196.932417000001, "totalMs": 4103.809709}; usage: {"embeddingPromptTokens": 59, "generationPromptTokens": 6000, "generationCompletionTokens": 70, "generationTotalTokens": 6070}
- reviewNotes: 3 business days for car appraiser. | AI-assisted vs corpus; not independent human study.

## E03 (factual)
- question: בשיחת מוקד, אילו פרטים נדרשים לזיהוי לקוח מעבר למספר תעודת זהות?
- expected: answered
- status: answered
- requestId: 793e386d-7f17-4e94-a770-f1a101e5e91d
- retrieval: R@5=1 RR=1
- evidenceCoverage: full — All 1 evidence chunkId(s) in context.
- quality: conclusion=pass support=pass complete=pass behavior=pass
- cited: 33_customer_identification.md
- answer: בשיחת מוקד, מעבר למספר תעודת זהות, הלקוח נדרש למסור שניים מתוך שלושת הפרטים הבאים: תאריך לידה, מספר פוליסה, ו-4 הספרות האחרונות של כרטיס האשראי שבו משולמת הפוליסה.
- timingsMs: {"retrieveMs": 205.17191700000149, "contextMs": 0.5144579999996495, "generationMs": 1833.027082999999, "totalMs": 2083.1393750000007}; usage: {"embeddingPromptTokens": 63, "generationPromptTokens": 2454, "generationCompletionTokens": 87, "generationTotalTokens": 2541}
- reviewNotes: ID + 2 of 3 details. | AI-assisted vs corpus; not independent human study.

## E04 (table)
- question: מה פריסת התשלומים המקסימלית בכרטיס אשראי, ומה קורה אם תשלום לא נפרע בתוך 21 יום?
- expected: answered
- status: answered
- requestId: 17ea46df-b1b5-4e27-9473-2908598e5383
- retrieval: R@5=1 RR=1
- evidenceCoverage: full — All 2 evidence chunkId(s) in context.
- quality: conclusion=fail support=fail complete=partial behavior=pass
- cited: 24_payment_methods.md
- answer: פריסת התשלומים המקסימלית בכרטיס אשראי היא עד 12 תשלומים ללא ריבית.  אם תשלום לא נפרע בתוך 21 יום, נשלחת ללקוח הודעת SMS ומייל, ואם התשלום לא הוסדר בתוך 21 יום נוספים, נשלחת הודעה בכתב על ביטול הפוליסה.  בנוסף, הנציג רשאי לאשר דחייה חד-פעמית של עד 14 יום לתשלום.
- timingsMs: {"retrieveMs": 212.7066250000007, "contextMs": 0.48400000000037835, "generationMs": 2344.153709, "totalMs": 2607.2218749999993}; usage: {"embeddingPromptTokens": 78, "generationPromptTokens": 6198, "generationCompletionTokens": 159, "generationTotalTokens": 6357}
- failureStageHint: generation
- reviewNotes: Invented second 21-day window after SMS; source: SMS/email then written cancel if unpaid within 21 days. | AI-assisted vs corpus; not independent human study.

## E05 (table)
- question: מה ההשתתפות העצמית בנזקי מים בדירה, ומה משתנה אם משתמשים באינסטלטור מרשת אופק עם כתב שירות אינסטלציה?
- expected: answered
- status: answered
- requestId: 051ea4d3-1bf9-4280-a8ca-7b2108ff7b74
- retrieval: R@5=1 RR=1
- evidenceCoverage: full — All 2 evidence chunkId(s) in context.
- quality: conclusion=pass support=pass complete=pass behavior=pass
- cited: 11_home_water_damage.md
- answer: ההשתתפות העצמית בנזקי מים בדירה היא 750 ₪ לכל אירוע נזקי מים.  אם המבוטח רכש כתב שירות אינסטלציה ומשתמש באינסטלטור מרשת אופק, ההשתתפות העצמית יורדת ל-250 ₪ לכל ביקור, כולל איתור נזילה.
- timingsMs: {"retrieveMs": 195.4822499999991, "contextMs": 1.4174579999998969, "generationMs": 2148.1735419999986, "totalMs": 2393.6064579999984}; usage: {"embeddingPromptTokens": 101, "generationPromptTokens": 6390, "generationCompletionTokens": 116, "generationTotalTokens": 6506}
- reviewNotes: 750 / 250 with plumbing rider. | AI-assisted vs corpus; not independent human study.

## E06 (table)
- question: מה בסיס חישוב ההשתתפות העצמית ברעידת אדמה לפרק המבנה, ומה שיעור ההשתתפות בדירה שעברה חיזוק תמ"א 38?
- expected: answered
- status: answered
- requestId: 2a469bd6-af49-4eb6-bcde-9025ba567996
- retrieval: R@5=1 RR=1
- evidenceCoverage: full — All 2 evidence chunkId(s) in context.
- quality: conclusion=pass support=pass complete=pass behavior=pass
- cited: 13_home_earthquake_annex.pdf
- answer: בסיס חישוב ההשתתפות העצמית ברעידת אדמה לפרק המבנה הוא 10% מסכום ביטוח המבנה.  במקרה של דירה בבניין שעבר חיזוק לפי תמ"א 38, שיעור ההשתתפות העצמית בפרק המבנה הוא 5% מסכום ביטוח המבנה.
- timingsMs: {"retrieveMs": 192.47962499999994, "contextMs": 0.5692500000004657, "generationMs": 2201.5985, "totalMs": 2433.9690840000003}; usage: {"embeddingPromptTokens": 93, "generationPromptTokens": 6141, "generationCompletionTokens": 128, "generationTotalTokens": 6269}
- reviewNotes: 10% / 5% TAMA38 of sum insured. | AI-assisted vs corpus; not independent human study.

## E07 (applicability)
- question: מה ההשתתפות העצמית בתיקון במוסך הסדר בפוליסת מקיף שהונפקה ב-28.2.2026?
- expected: answered
- status: answered
- requestId: 1d12ec98-28a9-4a27-b9a9-051f42b5c21c
- retrieval: R@5=1 RR=1
- evidenceCoverage: partial — Partial: files 1/2, chunks 1/2.
- quality: conclusion=pass support=pass complete=pass behavior=pass
- cited: 01_car_comprehensive_policy_2024.pdf
- answer: בהתאם לפוליסת ביטוח רכב מקיף שהונפקה לפני 1.3.2026, סכום ההשתתפות העצמית בתיקון במוסך הסדר הוא 950 ₪. סכום זה צמוד למדד המחירים לצרכן הידוע ביום 1.1.2024.
- timingsMs: {"retrieveMs": 208.30308299999888, "contextMs": 1.172999999998865, "generationMs": 2048.092457999999, "totalMs": 2304.909208000001}; usage: {"embeddingPromptTokens": 66, "generationPromptTokens": 6444, "generationCompletionTokens": 101, "generationTotalTokens": 6545}
- failureStageHint: context
- reviewNotes: 950 for issue 28.2.2026; 2026 doc not required once 2024 amount cited. | AI-assisted vs corpus; not independent human study.

## E08 (applicability)
- question: מה ההשתתפות העצמית במוסך הסדר בפוליסת מקיף שהונפקה בדיוק ב-1.3.2026?
- expected: answered
- status: answered
- requestId: 5c1b89ac-8009-475b-8bf8-349a26d10e9e
- retrieval: R@5=1 RR=0.5
- evidenceCoverage: full — All 2 evidence chunkId(s) in context.
- quality: conclusion=pass support=pass complete=pass behavior=pass
- cited: 02_car_comprehensive_policy_2026.pdf
- answer: בהתאם לפוליסת ביטוח רכב מקיף שהונפקה ביום 1.3.2026, סכום ההשתתפות העצמית עבור נזק חלקי בתיקון במוסך הסדר הוא 1,100 ₪.
- timingsMs: {"retrieveMs": 200.0264590000006, "contextMs": 0.7387500000004366, "generationMs": 2830.4067499999983, "totalMs": 3094.6983330000003}; usage: {"embeddingPromptTokens": 65, "generationPromptTokens": 6483, "generationCompletionTokens": 85, "generationTotalTokens": 6568}
- reviewNotes: 1100 on transition day. | AI-assisted vs corpus; not independent human study.

## E09 (applicability)
- question: מה דמי הטיפול בהחזר אם הלקוח מבטל פוליסה אחרי יותר מ-14 יום ממועד הרכישה (לאחר תחילת עדכון 2025)?
- expected: answered
- status: answered
- requestId: c8e3c8e7-5ea2-46ba-98ab-0abdb2e8a837
- retrieval: R@5=1 RR=1
- evidenceCoverage: full — All 1 evidence chunkId(s) in context.
- quality: conclusion=pass support=pass complete=pass behavior=pass
- cited: 23_cancellation_procedure_update_2025.md
- answer: אם הלקוח מבטל פוליסה אחרי יותר מ-14 יום ממועד הרכישה, דמי הטיפול בהחזר מחושבים לפי העדכון החל מ-1.1.2025, שהם 3% מסכום ההחזר, אך לא יותר מ-150 ₪.
- timingsMs: {"retrieveMs": 193.22070900000108, "contextMs": 1.9755839999997988, "generationMs": 11758.430458000003, "totalMs": 12008.003125}; usage: {"embeddingPromptTokens": 90, "generationPromptTokens": 6284, "generationCompletionTokens": 95, "generationTotalTokens": 6379}
- reviewNotes: 3% max 150. | AI-assisted vs corpus; not independent human study.

## E10 (applicability)
- question: מתי נכנס לתוקף ביטול פוליסה לפי הנוהל, והאם עדכון 2025 שינה את הכלל הזה?
- expected: answered
- status: answered
- requestId: 96cc9223-7038-4370-8603-886bc402d5ea
- retrieval: R@5=1 RR=1
- evidenceCoverage: full — All 2 evidence chunkId(s) in context.
- quality: conclusion=pass support=pass complete=pass behavior=pass
- cited: 22_cancellation_procedure_2023.md, 23_cancellation_procedure_update_2025.md
- answer: לפי נוהל ביטול הפוליסה מ-2023, הביטול נכנס לתוקף במועד שביקש הלקוח, אך לא לפני מועד קבלת בקשת הביטול. הלקוח רשאי לבטל את הפוליסה בכל עת, והבקשה מוגשת בטופס 4401 או בשיחה מוקלטת במוקד לאחר זיהוי מלא.  עדכון נוהל ביטול הפוליסה מ-2025 לא שינה את הכלל לגבי מועד כניסת הביטול לתוקף, אלא שינה רק את סעיף חישוב ההחזר. לפי העדכון, לקוח שמבטל בתוך 14 יום ממועד הרכישה, ולא הגיש תביעה, יקבל החזר מלא של דמי הביטוח ששילם ללא דמי טיפול, כאשר דמי הטיפול הופחתו ל-3% מסכום ההחזר ולא יותר מ-150 ₪.
- timingsMs: {"retrieveMs": 256.88670800000546, "contextMs": 1.5718750000014552, "generationMs": 3590.1347500000047, "totalMs": 3897.8910839999953}; usage: {"embeddingPromptTokens": 70, "generationPromptTokens": 6489, "generationCompletionTokens": 251, "generationTotalTokens": 6740}
- reviewNotes: Effective-date rule unchanged by 2025 partial update. | AI-assisted vs corpus; not independent human study.

## E11 (multi_doc)
- question: העלון השיווקי מציע "גרירות ללא הגבלה". כמה גרירות מותרות בפועל לפי כתב השירות, ומה מעמד העלון?
- expected: answered
- status: answered
- requestId: e8772f59-7f73-4ab0-ab8a-4b81be81d4f1
- retrieval: R@5=1 RR=0.5
- evidenceCoverage: full — All 2 evidence chunkId(s) in context.
- quality: conclusion=pass support=pass complete=pass behavior=pass
- cited: 09_marketing_brochure_car.md, 07_towing_roadside.md
- answer: העלון השיווקי מציע "גרירות ללא הגבלה" אך מדובר במידע שיווקי בלבד, והכיסוי בפועל נקבע לפי כתב השירות והתנאים המחייבים בפוליסה.  לפי כתב השירות לגרירה ושירותי דרך, מותרות עד 4 גרירות בשנה במסגרת שירות הגרירה לאחר תאונה או תקלה.
- timingsMs: {"retrieveMs": 226.7734999999957, "contextMs": 1.0724169999957667, "generationMs": 5829.383667000002, "totalMs": 6118.618500000004}; usage: {"embeddingPromptTokens": 87, "generationPromptTokens": 3981, "generationCompletionTokens": 126, "generationTotalTokens": 4107}
- reviewNotes: 4 tows; marketing non-binding. | AI-assisted vs corpus; not independent human study.

## E12 (multi_doc)
- question: לקוח אופק פלוס שואל אם ההנחה של 50% בהשתתפות עצמית במוסך הסדר חלה גם על גניבת רכב.
- expected: answered
- status: answered
- requestId: e0c53d6f-1849-458f-bf0f-bbb3a4db85ce
- retrieval: R@5=1 RR=1
- evidenceCoverage: full — All 1 evidence chunkId(s) in context.
- quality: conclusion=pass support=pass complete=pass behavior=pass
- cited: 31_ofek_plus_vip.docx, 01_car_comprehensive_policy_2024.pdf, 02_car_comprehensive_policy_2026.pdf
- answer: לקוח אופק פלוס זכאי להנחה של 50% בהשתתפות העצמית בתיקון במוסך הסדר, פעם אחת בשנה. עם זאת, הנחה זו אינה חלה על אירועים של גניבת רכב, אובדן גמור או תיקון במוסך שאינו מוסך הסדר.  בהתאם לפוליסת ביטוח רכב מקיף של אופק ביטוח (גרסאות 2024 ו-2026), ההשתתפות העצמית בגניבה או אובדן גמור היא אחוז מסוים מערך הרכב (5%) עם סכום מינימום, ואין בה הנחה של 50% כפי שקיימת בתיקון במוסך הסדר.
- timingsMs: {"retrieveMs": 276.2198340000032, "contextMs": 0.997709000002942, "generationMs": 4491.447708, "totalMs": 4818.407583}; usage: {"embeddingPromptTokens": 82, "generationPromptTokens": 6338, "generationCompletionTokens": 220, "generationTotalTokens": 6558}
- reviewNotes: Ofek Plus discount excludes theft. | AI-assisted vs corpus; not independent human study.

## E13 (multi_doc)
- question: האם הנחת אופק פלוס בהשתתפות עצמית מצטברת עם הכפלת ההשתתפות לנהג צעיר כאשר נהג צעיר נהג ברכב?
- expected: answered
- status: answered
- requestId: 4b788100-c172-4dfe-a8b1-bf345c4e26d1
- retrieval: R@5=1 RR=0.5
- evidenceCoverage: full — All 1 evidence chunkId(s) in context.
- quality: conclusion=pass support=pass complete=pass behavior=pass
- cited: 31_ofek_plus_vip.docx, 04_young_driver_annex.docx
- answer: הנחת אופק פלוס בהשתתפות עצמית אינה מצטברת עם הכפלת ההשתתפות העצמית לנהג צעיר. כאשר נהג צעיר נהג ברכב, לא תינתן הנחת אופק פלוס בהשתתפות העצמית.  לפי נספח נהג צעיר, במקרה ביטוח שאירע בעת שהרכב היה נהוג בידי נהג צעיר, ההשתתפות העצמית תהיה כפולה מההשתתפות העצמית הנקובה בפוליסה לאותו סוג אירוע.
- timingsMs: {"retrieveMs": 194.75591700000223, "contextMs": 0.6027909999975236, "generationMs": 2718.029792000001, "totalMs": 2960.167916999999}; usage: {"embeddingPromptTokens": 98, "generationPromptTokens": 6454, "generationCompletionTokens": 166, "generationTotalTokens": 6620}
- reviewNotes: No stacking with young-driver doubling. | AI-assisted vs corpus; not independent human study.

## E14 (cross_lingual)
- question: מה קורה לעמלת הסוכן אם הלקוח מבטל פוליסה תוך 120 יום מההנפקה?
- expected: answered
- status: answered
- requestId: 328635ba-07cc-4a4b-91ca-e3d1c73d34dd
- retrieval: R@5=0 RR=0
- evidenceCoverage: missing — No required evidence file/chunk appeared in generation context.
- quality: conclusion=fail support=fail complete=fail behavior=fail
- cited: 22_cancellation_procedure_2023.md, 23_cancellation_procedure_update_2025.md
- answer: אם הלקוח מבטל את הפוליסה בתוך 120 יום מההנפקה, ההחזר מחושב באופן יחסי לתקופה שנותרה עד תום תקופת הביטוח (pro-rata), וממסכום ההחזר מנוכים דמי טיפול בשיעור 5%.  עם זאת, אם הביטול נעשה בתוך 14 יום ממועד הרכישה והלקוח לא הגיש תביעה, דמי הטיפול מופחתים ל-3% מסכום ההחזר, ולא יותר מ-150 ₪.
- timingsMs: {"retrieveMs": 205.36216599999898, "contextMs": 1.4047499999942374, "generationMs": 2308.4895000000033, "totalMs": 2571.9928749999963}; usage: {"embeddingPromptTokens": 60, "generationPromptTokens": 6344, "generationCompletionTokens": 167, "generationTotalTokens": 6511}
- failureStageHint: retrieval
- reviewNotes: Answered customer refund fees; missed EN agent commission clawback (retrieval R@5=0). | AI-assisted vs corpus; not independent human study.

## E15 (cross_lingual)
- question: מה אחוז ההנחה המרבי שסוכן רשאי לתת לפי שיקול דעתו בלי אישור מנהל מכירות?
- expected: answered
- status: clarification_needed
- requestId: 136fba1e-2925-4f75-a41c-7d77f8afe71a
- retrieval: R@5=0 RR=0
- evidenceCoverage: missing — No required evidence file/chunk appeared in generation context.
- quality: conclusion=n_a support=n_a complete=fail behavior=fail
- cited: (none)
- answer: מהו אחוז ההנחה המרבי שסוכן רשאי לתת לפי שיקול דעתו בלי אישור מנהל מכירות?
- timingsMs: {"retrieveMs": 202.99466699999903, "contextMs": 0.7745839999988675, "generationMs": 1886.0067500000005, "totalMs": 2146.3667080000014}; usage: {"embeddingPromptTokens": 65, "generationPromptTokens": 6244, "generationCompletionTokens": 48, "generationTotalTokens": 6292}
- failureStageHint: retrieval
- reviewNotes: Asked clarification instead of using EN FAQ 5% discretionary discount (not retrieved). | AI-assisted vs corpus; not independent human study.

## E16 (ambiguous)
- question: מה ההטבות שלי?
- expected: clarification_needed
- status: answered
- requestId: 5b2d7f5a-b68c-48b9-8b5a-b3887ef75d74
- retrieval: R@5=N/A RR=N/A
- evidenceCoverage: n_a — No required evidence sources (ambiguous / no_answer).
- quality: conclusion=fail support=partial complete=n_a behavior=fail
- cited: 31_ofek_plus_vip.docx, 05_car_third_party.md, 06_windshield_service.md, 11_home_water_damage.md, 13_home_earthquake_annex.pdf
- answer: ההטבות שלך בחברת אופק ביטוח תלויות בסוג הפוליסות שברשותך. אם אתה מחזיק 3 פוליסות פעילות או יותר (בכל שילוב של רכב, דירה ונסיעות), אתה זכאי להיות לקוח "אופק פלוס" ולקבל מספר הטבות: נציג אישי עם קו ישיר, הנחה של 50% בהשתתפות העצמית בתיקון במוסך הסדר פעם בשנה, הנחה של 7% על הפוליסה השלישית ואילך, והרחבת גאדג'טים בביטוח נסיעות ללא עלות.  ביטוח צד שלישי לרכב מכסה נזק שגרמת לרכוש של אחרים עד סכום של 1,000,000 ₪ לאירוע, ללא השתתפות עצמית בתביעות שמשולמות ישירות לצד השלישי. ביטוח צד ג' אינו כולל רכב חלופי, גרירה או שמשות אלא אם נרכשו כתבי שירות נפרדים.  אם רכשת כתב שירות שמשות, תוכל לקבל החלפה או תיקון של שמשות הרכב ברשת "שמשות אופק" ללא השתתפות עצמית, עד 2 החלפות שמשה קדמית בשנה. מחוץ לרשת יש השתתפות עצמית של 400 ₪ והחזר עד מחיר הרשת.  בביטוח דירה, נזקי מים מכוסים במקרה של פריצה או דליפה פתאומית של צנרת בתוך הדירה, כולל נזק לתכולה אם נרכש פרק תכולה. תיקון הצנרת מכוסה עד 2,500 ₪ לאירוע. איתור נזילה אינו מכוסה אלא אם נרכש כתב שירות אינסטלציה.  בנספח רעידת אדמה ונזקי טבע בביטוח דירה, קיימת השתתפות עצמית של 10% מסכום ביטוח המבנה או התכולה, או 5% במקרה של דירה בבניין שעבר חיזוק לפי תמ"א 38. נזקי טבע כמו סערה, שיטפון, שלג וברד כוללים השתתפות עצמית של 1,500 ₪ לאירוע.
- timingsMs: {"retrieveMs": 234.9284159999952, "contextMs": 0.3805839999986347, "generationMs": 7256.998084000006, "totalMs": 7545.768375}; usage: {"embeddingPromptTokens": 13, "generationPromptTokens": 2667, "generationCompletionTokens": 582, "generationTotalTokens": 3249}
- failureStageHint: generation
- reviewNotes: Assumed Ofek Plus / dumped benefits without user stating product. | AI-assisted vs corpus; not independent human study.

## E17 (ambiguous)
- question: תוך כמה זמן מגיע שמאי?
- expected: clarification_needed
- status: answered
- requestId: 03f9f169-e7d4-47d8-9ef1-7e3d8c88eca8
- retrieval: R@5=N/A RR=N/A
- evidenceCoverage: n_a — No required evidence sources (ambiguous / no_answer).
- quality: conclusion=pass support=pass complete=pass behavior=pass
- cited: 21_claims_sla.md, 18_claims_process_car.md, 19_claims_process_home.md
- answer: שמאי מטעם החברה מגיע לבדוק את הרכב בתוך עד 3 ימי עסקים ממועד קבלת התביעה.  בתביעות דירה, אם הנזק מעל 10,000 ₪, השמאי יגיע בתוך עד 5 ימי עסקים.
- timingsMs: {"retrieveMs": 203.41495799999393, "contextMs": 0.3957499999960419, "generationMs": 2442.099166, "totalMs": 2694.4929580000025}; usage: {"embeddingPromptTokens": 22, "generationPromptTokens": 6151, "generationCompletionTokens": 124, "generationTotalTokens": 6275}
- reviewNotes: Presented car 3d and home 5d as explicit alternatives — allowed by rubric. | AI-assisted vs corpus; not independent human study.

## E18 (no_answer)
- question: האם אופק ביטוח מציעה ביטוח סייבר לעסקים קטנים?
- expected: insufficient_evidence
- status: insufficient_evidence
- requestId: 6ac8bdd8-a541-458d-bc68-64c33a438eb3
- retrieval: R@5=N/A RR=N/A
- evidenceCoverage: n_a — No required evidence sources (ambiguous / no_answer).
- quality: conclusion=n_a support=n_a complete=n_a behavior=pass
- cited: (none)
- answer: לא מצאתי במקורות שסופקו מידע מספיק כדי לענות על השאלה.
- timingsMs: {"retrieveMs": 177.85241599999426, "contextMs": 0.7447079999983544, "generationMs": 1065.7877920000028, "totalMs": 1294.470708000008}; usage: {"embeddingPromptTokens": 47, "generationPromptTokens": 5283, "generationCompletionTokens": 12, "generationTotalTokens": 5295}
- reviewNotes: Correct abstention. | AI-assisted vs corpus; not independent human study.

## E19 (no_answer)
- question: מה גבול האחריות בפוליסת ביטוח יאכטות של אופק?
- expected: insufficient_evidence
- status: insufficient_evidence
- requestId: 84316422-58fc-4584-b4f0-b2e82c55914a
- retrieval: R@5=N/A RR=N/A
- evidenceCoverage: n_a — No required evidence sources (ambiguous / no_answer).
- quality: conclusion=n_a support=n_a complete=n_a behavior=pass
- cited: (none)
- answer: לא מצאתי במקורות שסופקו מידע מספיק כדי לענות על השאלה.
- timingsMs: {"retrieveMs": 248.55016699999396, "contextMs": 0.6890410000050906, "generationMs": 1067.3497080000088, "totalMs": 1369.9959170000075}; usage: {"embeddingPromptTokens": 44, "generationPromptTokens": 6132, "generationCompletionTokens": 12, "generationTotalTokens": 6144}
- reviewNotes: Correct abstention. | AI-assisted vs corpus; not independent human study.

## E20 (no_answer)
- question: מה סכום הביטוח המינימלי בביטוח חיים למשכנתא באופק?
- expected: insufficient_evidence
- status: insufficient_evidence
- requestId: b33136b1-578d-4b41-a56e-cda04303642d
- retrieval: R@5=N/A RR=N/A
- evidenceCoverage: n_a — No required evidence sources (ambiguous / no_answer).
- quality: conclusion=n_a support=n_a complete=n_a behavior=pass
- cited: (none)
- answer: לא מצאתי במקורות שסופקו מידע מספיק כדי לענות על השאלה.
- timingsMs: {"retrieveMs": 187.91066599999613, "contextMs": 0.4309999999968568, "generationMs": 1003.0256669999944, "totalMs": 1262.2882499999978}; usage: {"embeddingPromptTokens": 48, "generationPromptTokens": 6052, "generationCompletionTokens": 12, "generationTotalTokens": 6064}
- reviewNotes: Correct abstention. | AI-assisted vs corpus; not independent human study.

