# Ask evaluation — stage5.1

- Generated: 2026-10-21T06:10:49.187Z
- Retrieval mode: hybrid
- Generation model: gpt-4.1-mini
- Questions: 15
- System errors: 0
- Status counts: {"answered":14,"insufficient_evidence":1}

## Method notes

After ask() returns, a human scores four separate dimensions (pass/partial/fail/n_a/pending): (1) conclusionCorrectness — is the main conclusion right for the question? (2) claimSupport — do cited/stated claims have support in the supplied context? (3) essentialCompleteness — are material eligibility/exceptions/calc bases present? (4) behaviorAppropriateness — answered vs clarification_needed vs abstention when warranted. Examples: D05 without clarification = behavior fail; D08 with material contradiction = answer fail; D04 may pass abstention behavior while failing claimSupport on an unsupported corpus-wide claim. Citation-id validation is automatic and technical only; it is not a faithfulness score. Do not average these into a single automatic metric.

Manual review dimensions are human judgments, not automatic metrics. Citation-id validation ≠ claim support. API/parse failures are system_error, not insufficient_evidence. Extra probes (X*) are behavior checks outside the reference set.

## D01 (factual)

**Question:** מה שעות הפעילות של מוקד שירות הלקוחות ביום שישי?

**Status:** answered

**Answer:**

שעות הפעילות של מוקד שירות הלקוחות ביום שישי הן מ-08:00 עד 12:00.

**Citations:** corpus/28_call_center_hours:c000
**Retrieved:** corpus/28_call_center_hours:c000, corpus/07_towing_roadside:c000, corpus/06_windshield_service:c000, corpus/21_claims_sla:c000, corpus/17_travel_claims:c000
**Context (+expanded):** corpus/28_call_center_hours:c000, corpus/07_towing_roadside:c000, corpus/06_windshield_service:c000, corpus/21_claims_sla:c000, corpus/17_travel_claims:c000
**Validation (chunkId technical only):** structure=true citations=true
**Tokens:** embed=42 gen_total=2147
**Timings (ms):** total=2507 gen=1670

**Manual review:** conclusion=pass claimSupport=pass completeness=pass behavior=pass

<details><summary>Reference (review only)</summary>

08:00–12:00.

Sources: 28_call_center_hours.md

</details>

## D02 (table)

**Question:** איזה טופס ממלאים כדי לבקש ביטול פוליסה?

**Status:** answered

**Answer:**

כדי לבקש ביטול פוליסה יש למלא את טופס מספר 4401 בשם "בקשה לביטול פוליסה". ניתן להגיש את הבקשה באמצעות אזור אישי או מוקד השירות. בנוסף, ניתן לבטל גם בשיחה מוקלטת במוקד לאחר זיהוי מלא של הלקוח.

**Citations:** corpus/20_forms_catalog:c001, corpus/22_cancellation_procedure_2023:c000
**Retrieved:** corpus/20_forms_catalog:c001, corpus/22_cancellation_procedure_2023:c000, corpus/20_forms_catalog:c000, corpus/14_travel_policy_overview:c000, corpus/33_customer_identification:c000
**Context (+expanded):** corpus/20_forms_catalog:c001, corpus/22_cancellation_procedure_2023:c000, corpus/20_forms_catalog:c000, corpus/14_travel_policy_overview:c000, corpus/33_customer_identification:c000
**Validation (chunkId technical only):** structure=true citations=true
**Tokens:** embed=38 gen_total=2904
**Timings (ms):** total=2135 gen=1894

**Manual review:** conclusion=pass claimSupport=pass completeness=pass behavior=pass

<details><summary>Reference (review only)</summary>

טופס 4401 – בקשה לביטול פוליסה.

Sources: 20_forms_catalog.pdf

</details>

## D03 (version)

**Question:** מה ההשתתפות העצמית בתיקון במוסך הסדר בפוליסת מקיף שהונפקה באפריל 2026?

**Status:** answered

**Answer:**

בהתאם לגרסת הפוליסה שהונפקה או חודשה החל מ-1.3.2026, ההשתתפות העצמית בתיקון במוסך הסדר היא 1,100 ₪, צמודה למדד המחירים לצרכן הידוע ביום 1.3.2026.

**Citations:** corpus/02_car_comprehensive_policy_2026:c000
**Retrieved:** corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000, corpus/31_ofek_plus_vip:c000, corpus/04_young_driver_annex:c000, corpus/22_cancellation_procedure_2023:c000
**Context (+expanded):** corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000, corpus/31_ofek_plus_vip:c000, corpus/04_young_driver_annex:c000, corpus/22_cancellation_procedure_2023:c000
**Validation (chunkId technical only):** structure=true citations=true
**Tokens:** embed=68 gen_total=3309
**Timings (ms):** total=2015 gen=1641

**Manual focus:**
- FOCUS pass: 2026 version

**Manual review:** conclusion=pass claimSupport=pass completeness=pass behavior=pass

<details><summary>Reference (review only)</summary>

1,100 ₪ (גרסת 2026, שחלה על פוליסות שהונפקו או חודשו מ-1.3.2026).

Sources: 02_car_comprehensive_policy_2026.pdf

</details>

## D04 (no_answer)

**Question:** האם אופק ביטוח מציעה ביטוח לחיות מחמד?

**Status:** insufficient_evidence

**Answer:**

המקורות שסופקו כוללים רק תנאים כלליים לפוליסות רכב של אופק ביטוח ואינם כוללים מידע לגבי הצעת ביטוח לחיות מחמד. אין מספיק מידע כדי לקבוע אם אופק ביטוח מציעה ביטוח לחיות מחמד.

**Citations:** corpus/03_car_general_terms:c000
**Retrieved:** corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c014
**Context (+expanded):** corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c015 — expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c015
**Validation (chunkId technical only):** structure=true citations=true
**Tokens:** embed=35 gen_total=5089
**Timings (ms):** total=2336 gen=1304

**Manual focus:**
- Abstention OK (insufficient_evidence).
- Answer now scopes to provided sources; citation claim still slightly strong ('רכב בלבד').

**Manual review:** conclusion=pass claimSupport=partial completeness=pass behavior=pass

<details><summary>Reference (review only)</summary>

המידע לא מופיע במסמכים. המערכת צריכה לומר שלא מצאה תשובה, ולא להמציא.

Sources: (none)

</details>

## D05 (ambiguous)

**Question:** מה ההשתתפות העצמית?

**Status:** answered

**Answer:**

ההשתתפות העצמית בפוליסת ביטוח רכב מקיף של אופק ביטוח משתנה לפי סוג האירוע והגרסה של הפוליסה:\n- בפוליסות גרסה 2024 (בתוקף מיום 1.1.2024):\n  - נזק חלקי במוסך הסדר: 950 ₪\n  - נזק חלקי במוסך שאינו בהסדר: 1,850 ₪\n  - גניבה או אובדן גמור: 5% מערך הרכב, ולא פחות מ-2,500 ₪\n  - נזק לשמשות: לפי כתב שירות שמשות (למשל, ברשת שמשות אופק אין השתתפות עצמית, מחוץ לרשת יש השתתפות עצמית של 400 ₪)\n- בפוליסות גרסה 2026 (בתוקף מיום 1.3.2026 ואילך):\n  - נזק חלקי במוסך הסדר: 1,100 ₪\n  - נזק חלקי במוסך שאינו בהסדר: 2,100 ₪\n  - גניבה או אובדן גמור: 5% מערך הרכב, ולא פחות מ-3,000 ₪\n  - נזק לשמשות: לפי כתב שירות שמשות (כאמור לעיל)\nההשתתפות העצמית צמודה למדד המחירים לצרכן ביום תחילת התוקף של הפוליסה.\n\nבנוסף, בביטוח צד שלישי אין השתתפות עצמית בתביעות שמשולמות ישירות לצד שלישי.

**Citations:** corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000, corpus/06_windshield_service:c000, corpus/05_car_third_party:c000
**Retrieved:** corpus/06_windshield_service:c000, corpus/01_car_comprehensive_policy_2024:c000, corpus/05_car_third_party:c000, corpus/02_car_comprehensive_policy_2026:c000, corpus/03_car_general_terms:c009
**Context (+expanded):** corpus/06_windshield_service:c000, corpus/01_car_comprehensive_policy_2024:c000, corpus/05_car_third_party:c000, corpus/02_car_comprehensive_policy_2026:c000, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011 — expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011
**Validation (chunkId technical only):** structure=true citations=true
**Omitted expansions:** corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c015
**Tokens:** embed=19 gen_total=6628
**Timings (ms):** total=5426 gen=5152

**Manual focus:**
- BEHAVIOR FAIL: answered car deductibles without clarification_needed.

**Manual review:** conclusion=n_a claimSupport=partial completeness=fail behavior=fail

<details><summary>Reference (review only)</summary>

השאלה עמומה: תלויה בקו המוצר ובסוג האירוע. תשובה טובה מבקשת הבהרה, או מציגה בקצרה את האפשרויות העיקריות עם מקורות.

Sources: 02_car_comprehensive_policy_2026.pdf, 10_home_policy_overview.md

</details>

## D06 (multi_hop)

**Question:** נהג בן 22 נהג ברכב עם פוליסת 'כל נהג' בלי נספח נהג צעיר ועשה תאונה. האם יש כיסוי?

**Status:** answered

**Answer:**

נהג בן 22 נחשב לנהג צעיר לפי הגדרת נספח נהג צעיר (גיל 21–23). במקרה שבו נהג צעיר נוהג ברכב עם פוליסת "כל נהג" ללא נספח נהג צעיר, אין כיסוי ביטוחי לאירוע שנגרם על ידו. זאת משום שהכיסוי לנהג צעיר בפוליסה מסוג "כל נהג" מותנה בכך שהנהג הצעיר יהיה נקוב בנספח נהג צעיר בתוקף, הכולל מילוי טופס 1007, תשלום תוספת פרמיה והחזקת רישיון נהיגה בתוקף. אירוע שבו נהג צעיר שאינו נקוב בנספח נחשב לנהג שאינו נהג מורשה ולכן אינו מכוסה בפוליסה.

**Citations:** corpus/04_young_driver_annex:c000, corpus/01_car_comprehensive_policy_2024:c000, corpus/25_adding_driver:c000, corpus/03_car_general_terms:c002
**Retrieved:** corpus/04_young_driver_annex:c000, corpus/25_adding_driver:c000, corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000, corpus/03_car_general_terms:c001
**Context (+expanded):** corpus/04_young_driver_annex:c000, corpus/25_adding_driver:c000, corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011 — expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011
**Validation (chunkId technical only):** structure=true citations=true
**Omitted expansions:** corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c015
**Tokens:** embed=86 gen_total=6473
**Timings (ms):** total=3776 gen=3525

**Manual focus:**
- Definition+annex in context support no-coverage.
- §12 still omitted by budget — completeness partial, not unsupported conclusion.

**Manual review:** conclusion=pass claimSupport=pass completeness=partial behavior=pass

<details><summary>Reference (review only)</summary>

לא. לפי הגדרת 'נהג מורשה' (סעיף 2) נהג מתחת לגיל 24 אינו נהג מורשה אלא אם נכלל בנספח נהג צעיר, וסעיף 12(א) מחריג נזק בעת נהיגה בידי מי שאינו נהג מורשה.

Sources: 03_car_general_terms.pdf, 04_young_driver_annex.docx

</details>

## D07 (cross_lingual)

**Question:** תוך כמה זמן חתמות רפואית עונה לבקשה של סוכן לגבי מצב רפואי קודם בביטוח נסיעות?

**Status:** answered

**Answer:**

חתמות רפואית עונה לבקשה של סוכן לגבי מצב רפואי קודם בביטוח נסיעות בתוך 3 ימי עסקים. במקרה של בקשה דחופה, למשל נסיעה בתוך 48 שעות, יש לסמן "דחוף" בטופס כדי לקבל מענה מהיר יותר.

**Citations:** corpus/15_travel_preexisting_conditions:c000
**Retrieved:** corpus/15_travel_preexisting_conditions:c000, corpus/14_travel_policy_overview:c000, corpus/17_travel_claims:c000, corpus/21_claims_sla:c000, corpus/32_fraud_red_flags:c000
**Context (+expanded):** corpus/15_travel_preexisting_conditions:c000, corpus/14_travel_policy_overview:c000, corpus/17_travel_claims:c000, corpus/21_claims_sla:c000, corpus/32_fraud_red_flags:c000
**Validation (chunkId technical only):** structure=true citations=true
**Tokens:** embed=82 gen_total=2283
**Timings (ms):** total=1777 gen=1540

**Manual review:** conclusion=pass claimSupport=pass completeness=pass behavior=pass

<details><summary>Reference (review only)</summary>

בתוך 3 ימי עסקים.

Sources: 30_agent_faq_en.md, 15_travel_preexisting_conditions.docx

</details>

## D08 (partial_override)

**Question:** לקוח מבטל פוליסה 10 ימים אחרי הרכישה ולא הגיש תביעות. כמה יקבל בחזרה?

**Status:** answered

**Answer:**

לקוח שמבטל פוליסה בתוך 14 יום ממועד הרכישה, ולא הגיש תביעה, יקבל החזר מלא של דמי הביטוח ששילם, ללא ניכוי דמי טיפול.

**Citations:** corpus/23_cancellation_procedure_update_2025:c000, corpus/22_cancellation_procedure_2023:c000
**Retrieved:** corpus/32_fraud_red_flags:c000, corpus/22_cancellation_procedure_2023:c000, corpus/23_cancellation_procedure_update_2025:c000, corpus/24_payment_methods:c000, corpus/21_claims_sla:c000
**Context (+expanded):** corpus/32_fraud_red_flags:c000, corpus/22_cancellation_procedure_2023:c000, corpus/23_cancellation_procedure_update_2025:c000, corpus/24_payment_methods:c000, corpus/21_claims_sla:c000
**Validation (chunkId technical only):** structure=true citations=true
**Tokens:** embed=69 gen_total=2233
**Timings (ms):** total=1925 gen=1684

**Manual focus:**
- Answer text fixed: full refund only, no pro-rata on same case.
- Citations array still lists pro-rata claims from same chunk — residual claimSupport issue.

**Manual review:** conclusion=pass claimSupport=partial completeness=pass behavior=pass

<details><summary>Reference (review only)</summary>

החזר מלא של דמי הביטוח, ללא דמי טיפול (תקופת התחרטות של 14 יום לפי עדכון 2025).

Sources: 23_cancellation_procedure_update_2025.md

</details>

## D09 (table)

**Question:** מה תקרת הכיסוי למזומן בביטוח תכולה?

**Status:** answered

**Answer:**

תקרת הכיסוי למזומן בביטוח תכולה היא עד 2,000 ₪.

**Citations:** corpus/12_home_contents_limits:c000
**Retrieved:** corpus/03_car_general_terms:c006, corpus/11_home_water_damage:c000, corpus/12_home_contents_limits:c000, corpus/05_car_third_party:c000, corpus/14_travel_policy_overview:c000
**Context (+expanded):** corpus/03_car_general_terms:c006, corpus/11_home_water_damage:c000, corpus/12_home_contents_limits:c000, corpus/05_car_third_party:c000, corpus/14_travel_policy_overview:c000, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c012 — expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c012
**Validation (chunkId technical only):** structure=true citations=true
**Omitted expansions:** corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c015
**Tokens:** embed=37 gen_total=5781
**Timings (ms):** total=1528 gen=1280

**Manual review:** conclusion=pass claimSupport=pass completeness=pass behavior=pass

<details><summary>Reference (review only)</summary>

2,000 ₪.

Sources: 12_home_contents_limits.docx

</details>

## D10 (conflict)

**Question:** האם רכב חלופי ניתן לכל תקופת התיקון?

**Status:** answered

**Answer:**

רכב חלופי ניתן רק למבוטחים שרכשו כתב שירות רכב חלופי, והוא אינו חלק מהכיסוי הבסיסי בפוליסת מקיף. לגבי תקופת הזכאות לרכב חלופי: במקרה של תאונה שבה הרכב מתוקן במוסך הסדר, הרכב החלופי ניתן לכל תקופת התיקון עד 21 ימים. במקרה של גניבה או אובדן גמור, ניתן רכב חלופי עד 30 ימים. במקרה של תקלה מכנית, לא ניתן רכב חלופי. בנוסף, אם הרכב מתוקן במוסך שאינו מוסך הסדר, לא תהיה זכאות לרכב חלופי. לכן, רכב חלופי אינו ניתן לכל תקופת התיקון בכל מקרה, אלא בהתאם לתנאים אלו ולתקופות המקסימליות שנקבעו בכתב השירות.

**Citations:** corpus/08_replacement_car:c000, corpus/09_marketing_brochure_car:c000
**Retrieved:** corpus/08_replacement_car:c000, corpus/09_marketing_brochure_car:c000, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c014
**Context (+expanded):** corpus/08_replacement_car:c000, corpus/09_marketing_brochure_car:c000, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c015 — expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c015
**Validation (chunkId technical only):** structure=true citations=true
**Tokens:** embed=39 gen_total=5945
**Timings (ms):** total=3138 gen=2884

**Manual focus:**
- All events/limits including theft/total-loss supported.

**Manual review:** conclusion=pass claimSupport=pass completeness=pass behavior=pass

<details><summary>Reference (review only)</summary>

לא. רכב חלופי ניתן רק למי שרכש כתב שירות רכב חלופי, ובתאונה עד 21 ימים ורק בתיקון במוסך הסדר. העלון השיווקי אומר אחרת, אך הוא אינו מחייב.

Sources: 08_replacement_car.md, 09_marketing_brochure_car.md

</details>

## D11 (table)

**Question:** המזוודה של נוסע הגיעה באיחור של 8 שעות. לכמה פיצוי הוא זכאי?

**Status:** answered

**Answer:**

במקרה של איחור בהגעת המזוודה מעל 6 שעות, הנוסע זכאי לפיצוי של עד 150 דולר עבור רכישת פריטים חיוניים. מאחר שהאיחור הוא 8 שעות, הפיצוי יהיה עד 150 דולר. יש להגיש לחברת התעופה דו"ח אי-הגעת כבודה (PIR) בשדה התעופה כדי לקבל את הפיצוי.

**Citations:** corpus/16_travel_luggage:c000
**Retrieved:** corpus/16_travel_luggage:c000, corpus/03_car_general_terms:c008, corpus/14_travel_policy_overview:c000, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c010
**Context (+expanded):** corpus/16_travel_luggage:c000, corpus/03_car_general_terms:c008, corpus/14_travel_policy_overview:c000, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c015 — expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c015
**Validation (chunkId technical only):** structure=true citations=true
**Tokens:** embed=57 gen_total=5801
**Timings (ms):** total=1699 gen=1468

**Manual focus:**
- PIR condition now included.

**Manual review:** conclusion=pass claimSupport=pass completeness=pass behavior=pass

<details><summary>Reference (review only)</summary>

עד 150 $ לרכישת פריטים חיוניים, בכפוף לדו"ח PIR מחברת התעופה.

Sources: 16_travel_luggage.md

</details>

## D12 (factual)

**Question:** כמה גרירות מקבלים בשנת ביטוח?

**Status:** answered

**Answer:**

בפוליסות אופק ביטוח, מגבלת הגרירות בשנת ביטוח היא עד 4 גרירות לאחר תאונה או תקלה.

**Citations:** corpus/07_towing_roadside:c000
**Retrieved:** corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c009, corpus/07_towing_roadside:c000, corpus/05_car_third_party:c000, corpus/09_marketing_brochure_car:c000
**Context (+expanded):** corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c009, corpus/07_towing_roadside:c000, corpus/05_car_third_party:c000, corpus/09_marketing_brochure_car:c000, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013 — expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013
**Validation (chunkId technical only):** structure=true citations=true
**Omitted expansions:** corpus/03_car_general_terms:c015
**Tokens:** embed=28 gen_total=5734
**Timings (ms):** total=1806 gen=1541

**Manual review:** conclusion=pass claimSupport=pass completeness=pass behavior=pass

<details><summary>Reference (review only)</summary>

עד 4 גרירות בשנת ביטוח (למי שרכש כתב שירות גרירה).

Sources: 07_towing_roadside.md

</details>

## D13 (table)

**Question:** נוסעת בשבוע 28 להריון. האם סיבוכי הריון מכוסים בחו"ל?

**Status:** answered

**Answer:**

סיבוכי הריון מכוסים במסגרת ביטוח נסיעות לחו"ל רק עד שבוע 26 להריון. במקרה של שבוע 28 להריון, סיבוכי הריון אינם מכוסים במסגרת הביטוח, אלא אם הוצהרו ואושרו מראש על ידי חתמות רפואית, אך לפי התנאים הרגילים כיסוי לסיבוכי הריון מעל שבוע 26 אינו ניתן.

**Citations:** corpus/15_travel_preexisting_conditions:c000
**Retrieved:** corpus/14_travel_policy_overview:c000, corpus/15_travel_preexisting_conditions:c000, corpus/07_towing_roadside:c000, corpus/09_marketing_brochure_car:c000, corpus/17_travel_claims:c000
**Context (+expanded):** corpus/14_travel_policy_overview:c000, corpus/15_travel_preexisting_conditions:c000, corpus/07_towing_roadside:c000, corpus/09_marketing_brochure_car:c000, corpus/17_travel_claims:c000
**Validation (chunkId technical only):** structure=true citations=true
**Tokens:** embed=48 gen_total=2448
**Timings (ms):** total=1807 gen=1562

**Manual review:** conclusion=pass claimSupport=pass completeness=pass behavior=pass

<details><summary>Reference (review only)</summary>

לא. סיבוכי הריון מכוסים רק עד שבוע 26.

Sources: 15_travel_preexisting_conditions.docx

</details>

## D14 (table)

**Question:** מה ההשתתפות העצמית ברעידת אדמה בפרק המבנה?

**Status:** answered

**Answer:**

ההשתתפות העצמית ברעידת אדמה בפרק המבנה היא 10% מסכום ביטוח המבנה. אם הדירה נמצאת בבניין שעבר חיזוק לפי תמ"א 38, ההשתתפות העצמית היא 5% מסכום ביטוח המבנה.

**Citations:** corpus/13_home_earthquake_annex:c000
**Retrieved:** corpus/13_home_earthquake_annex:c000, corpus/10_home_policy_overview:c000, corpus/31_ofek_plus_vip:c000, corpus/06_windshield_service:c000, corpus/11_home_water_damage:c000
**Context (+expanded):** corpus/13_home_earthquake_annex:c000, corpus/10_home_policy_overview:c000, corpus/31_ofek_plus_vip:c000, corpus/06_windshield_service:c000, corpus/11_home_water_damage:c000
**Validation (chunkId technical only):** structure=true citations=true
**Tokens:** embed=40 gen_total=2639
**Timings (ms):** total=1855 gen=1556

**Manual focus:**
- Calc base = סכום ביטוח המבנה — supported.

**Manual review:** conclusion=pass claimSupport=pass completeness=pass behavior=pass

<details><summary>Reference (review only)</summary>

10% מסכום ביטוח המבנה (5% בבניין שעבר חיזוק לפי תמ"א 38).

Sources: 13_home_earthquake_annex.pdf

</details>

## D15 (factual)

**Question:** תוך כמה זמן יש להגיש תלונה במשטרה על גניבת רכב?

**Status:** answered

**Answer:**

על המבוטח להגיש תלונה במשטרה על גניבת רכב בתוך 24 שעות ממועד הגילוי ולהמציא למבטח את אישור התלונה.

**Citations:** corpus/03_car_general_terms:c007
**Retrieved:** corpus/03_car_general_terms:c007, corpus/16_travel_luggage:c000, corpus/07_towing_roadside:c000, corpus/18_claims_process_car:c000, corpus/01_car_comprehensive_policy_2024:c000
**Context (+expanded):** corpus/03_car_general_terms:c007, corpus/16_travel_luggage:c000, corpus/07_towing_roadside:c000, corpus/18_claims_process_car:c000, corpus/01_car_comprehensive_policy_2024:c000, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c013 — expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c013
**Validation (chunkId technical only):** structure=true citations=true
**Omitted expansions:** corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c015
**Tokens:** embed=49 gen_total=5920
**Timings (ms):** total=1544 gen=1241

**Manual review:** conclusion=pass claimSupport=pass completeness=pass behavior=pass

<details><summary>Reference (review only)</summary>

בתוך 24 שעות ממועד הגילוי.

Sources: 03_car_general_terms.pdf, 18_claims_process_car.md

</details>

# Extra behavior probes (not in reference set)

## X01 (extra_ambiguous) — EXTRA PROBE

**Question:** מה גובה ההשתתפות העצמית שלי?

**Status:** clarification_needed

**Answer:**

כדי לענות במדויק על גובה ההשתתפות העצמית שלך, יש צורך לדעת באיזה סוג פוליסה מדובר ובאיזה אירוע ביטוחי. האם תוכל לפרט את סוג הפוליסה שלך ואת סוג האירוע (למשל, תיקון במוסך הסדר, גניבה, נזק לשמשות וכו')?

**Citations:** (none)
**Retrieved:** corpus/06_windshield_service:c000, corpus/03_car_general_terms:c011, corpus/31_ofek_plus_vip:c000, corpus/03_car_general_terms:c009, corpus/02_car_comprehensive_policy_2026:c000
**Context (+expanded):** corpus/06_windshield_service:c000, corpus/03_car_general_terms:c011, corpus/31_ofek_plus_vip:c000, corpus/03_car_general_terms:c009, corpus/02_car_comprehensive_policy_2026:c000, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013 — expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013
**Validation (chunkId technical only):** structure=true citations=true
**Omitted expansions:** corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c015
**Tokens:** embed=27 gen_total=5894
**Timings (ms):** total=1931 gen=1473

**Manual focus:**
- EXTRA PROBE (not in reference set): clarification_needed — product/line/event unspecified; must not dump one product's amounts.

**Manual review:** conclusion=n_a claimSupport=n_a completeness=n_a behavior=pass

<details><summary>Reference (review only)</summary>

(extra probe) expected: clarification_needed — product/line/event unspecified; must not dump one product's amounts.

Sources: (none)

</details>

## X02 (extra_no_evidence) — EXTRA PROBE

**Question:** האם אופק ביטוח מציעה ביטוח רחפנים מסחריים?

**Status:** insufficient_evidence

**Answer:**

המקורות שסופקו כוללים תנאים כלליים לפוליסות רכב של אופק ביטוח, אך אינם כוללים מידע לגבי הצעת ביטוח רחפנים מסחריים. לא ניתן לקבוע מהמידע שניתן האם אופק ביטוח מציעה ביטוח כזה.

**Citations:** corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001
**Retrieved:** corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c010
**Context (+expanded):** corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c015 — expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c015
**Validation (chunkId technical only):** structure=true citations=true
**Tokens:** embed=42 gen_total=5163
**Timings (ms):** total=2138 gen=1792

**Manual focus:**
- EXTRA PROBE (not in reference set): insufficient_evidence — describe limit of provided sources; do not invent coverage or claim company-wide absence.

**Manual review:** conclusion=pass claimSupport=pass completeness=pass behavior=pass

<details><summary>Reference (review only)</summary>

(extra probe) expected: insufficient_evidence — describe limit of provided sources; do not invent coverage or claim company-wide absence.

Sources: (none)

</details>
