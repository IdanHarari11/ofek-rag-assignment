# Ask evaluation — stage4-applicability

- Generated: 2026-10-21T12:44:53.717Z
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

**Answer parts:** 1
**Citations (from parts):** corpus/28_call_center_hours:c000
**Retrieved:** corpus/28_call_center_hours:c000, corpus/07_towing_roadside:c000, corpus/06_windshield_service:c000, corpus/21_claims_sla:c000, corpus/17_travel_claims:c000
**Context (+expanded):** corpus/28_call_center_hours:c000, corpus/07_towing_roadside:c000, corpus/06_windshield_service:c000, corpus/21_claims_sla:c000, corpus/17_travel_claims:c000
**Validation (chunkId technical only):** structure=true citations=true
**Applicability:** (none) | relationships=0
**Tokens:** embed=42 gen_total=2363
**Timings (ms):** retrieve=372 gen=1463 total=1878

**Manual review:** conclusion=pending claimSupport=pending completeness=pending behavior=pending

<details><summary>Reference (review only)</summary>

08:00–12:00.

Sources: 28_call_center_hours.md

</details>

## D02 (table)

**Question:** איזה טופס ממלאים כדי לבקש ביטול פוליסה?

**Status:** answered

**Answer:**

כדי לבקש ביטול פוליסה יש למלא את טופס מספר 4401, שנקרא "בקשה לביטול פוליסה". טופס זה משמש לביטול פוליסה ביוזמת הלקוח וניתן להגישו באזור האישי או במוקד.

**Answer parts:** 1
**Citations (from parts):** corpus/20_forms_catalog:c001, corpus/22_cancellation_procedure_2023:c000
**Retrieved:** corpus/20_forms_catalog:c001, corpus/22_cancellation_procedure_2023:c000, corpus/20_forms_catalog:c000, corpus/14_travel_policy_overview:c000, corpus/33_customer_identification:c000
**Context (+expanded):** corpus/20_forms_catalog:c001, corpus/22_cancellation_procedure_2023:c000, corpus/20_forms_catalog:c000, corpus/14_travel_policy_overview:c000, corpus/33_customer_identification:c000, corpus/23_cancellation_procedure_update_2025:c000
**Validation (chunkId technical only):** structure=true citations=true
**Linked (relations, not Recall@5):** corpus/23_cancellation_procedure_update_2025:c000
**Applicability:** cancellation_procedure:partial_update→corpus/23_cancellation_procedure_update_2025(partial_update_keep_base_and_update) | relationships=2
**Tokens:** embed=38 gen_total=3507
**Timings (ms):** retrieve=341 gen=1604 total=2004

**Manual review:** conclusion=pending claimSupport=pending completeness=pending behavior=pending

<details><summary>Reference (review only)</summary>

טופס 4401 – בקשה לביטול פוליסה.

Sources: 20_forms_catalog.pdf

</details>

## D03 (version)

**Question:** מה ההשתתפות העצמית בתיקון במוסך הסדר בפוליסת מקיף שהונפקה באפריל 2026?

**Status:** answered

**Answer:**

בהתאם לפוליסת ביטוח רכב מקיף שהונפקה באפריל 2026, סכום ההשתתפות העצמית בתיקון במוסך הסדר הוא 1,100 ₪. סכום זה צמוד למדד המחירים לצרכן הידוע ביום 1.3.2026.

**Answer parts:** 1
**Citations (from parts):** corpus/02_car_comprehensive_policy_2026:c000
**Retrieved:** corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000, corpus/31_ofek_plus_vip:c000, corpus/04_young_driver_annex:c000, corpus/22_cancellation_procedure_2023:c000
**Context (+expanded):** corpus/02_car_comprehensive_policy_2026:c000, corpus/31_ofek_plus_vip:c000, corpus/04_young_driver_annex:c000, corpus/22_cancellation_procedure_2023:c000, corpus/03_car_general_terms:c000, corpus/23_cancellation_procedure_update_2025:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011
**Validation (chunkId technical only):** structure=true citations=true
**Linked (relations, not Recall@5):** corpus/03_car_general_terms:c000, corpus/23_cancellation_procedure_update_2025:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011
**Applicability:** car_comprehensive_policy:selected→corpus/02_car_comprehensive_policy_2026(issue_or_renewal_on_or_after_2026_03_01); cancellation_procedure:partial_update→corpus/23_cancellation_procedure_update_2025(partial_update_refund_section_from_2025) | relationships=6
**Omitted expansions:** corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c015
**Tokens:** embed=68 gen_total=6694
**Timings (ms):** retrieve=264 gen=1947 total=2254

**Manual focus:**
- FOCUS: Version appropriate to question despite 2024 ranking higher?

**Manual review:** conclusion=pending claimSupport=pending completeness=pending behavior=pending

<details><summary>Reference (review only)</summary>

1,100 ₪ (גרסת 2026, שחלה על פוליסות שהונפקו או חודשו מ-1.3.2026).

Sources: 02_car_comprehensive_policy_2026.pdf

</details>

## D04 (no_answer)

**Question:** האם אופק ביטוח מציעה ביטוח לחיות מחמד?

**Status:** insufficient_evidence

**Answer:**

לא מצאתי במקורות שסופקו מידע מספיק כדי לענות על השאלה.

**Answer parts:** 0
**Citations (from parts):** (none)
**Retrieved:** corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c014
**Context (+expanded):** corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c015 — expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c015
**Validation (chunkId technical only):** structure=true citations=true
**Applicability:** car_general_terms:unresolved(no_machine_rule) | unresolved=car_general_terms:no_machine_rule | relationships=0
**Tokens:** embed=35 gen_total=5291
**Timings (ms):** retrieve=192 gen=1040 total=1274

**Manual focus:**
- FOCUS: Abstention without inventing pet insurance?
- FOCUS: No unsupported claim about all corpus documents?

**Manual review:** conclusion=pending claimSupport=pending completeness=pending behavior=pending

<details><summary>Reference (review only)</summary>

המידע לא מופיע במסמכים. המערכת צריכה לומר שלא מצאה תשובה, ולא להמציא.

Sources: (none)

</details>

## D05 (ambiguous)

**Question:** מה ההשתתפות העצמית?

**Status:** answered

**Answer:**

ההשתתפות העצמית בפוליסת ביטוח רכב מקיף של אופק ביטוח משתנה לפי סוג האירוע והגרסה של הפוליסה. בגרסת 2024 ההשתתפות העצמית היא: נזק חלקי במוסך הסדר – 950 ₪, נזק חלקי במוסך שאינו בהסדר – 1,850 ₪, גניבה או אובדן גמור – 5% מערך הרכב ולא פחות מ-2,500 ₪, ונזק לשמשות לפי כתב שירות שמשות.

בגרסת 2026 ההשתתפות העצמית היא: נזק חלקי במוסך הסדר – 1,100 ₪, נזק חלקי במוסך שאינו בהסדר – 2,100 ₪, גניבה או אובדן גמור – 5% מערך הרכב ולא פחות מ-3,000 ₪, ונזק לשמשות לפי כתב שירות שמשות.

לגבי נזק לשמשות, ההשתתפות העצמית נקבעת לפי כתב שירות שמשות: ברשת שמשות אופק אין השתתפות עצמית, ומחוץ לרשת ההשתתפות העצמית היא 400 ₪ בניכוי החזר עד מחיר הרשת, בכפוף לחשבונית מקורית.

**Answer parts:** 3
**Citations (from parts):** corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000, corpus/06_windshield_service:c000
**Retrieved:** corpus/06_windshield_service:c000, corpus/01_car_comprehensive_policy_2024:c000, corpus/05_car_third_party:c000, corpus/02_car_comprehensive_policy_2026:c000, corpus/03_car_general_terms:c009
**Context (+expanded):** corpus/06_windshield_service:c000, corpus/01_car_comprehensive_policy_2024:c000, corpus/05_car_third_party:c000, corpus/02_car_comprehensive_policy_2026:c000, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011 — expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011
**Validation (chunkId technical only):** structure=true citations=true
**Applicability:** car_comprehensive_policy:unresolved(missing_issue_or_renewal_date); car_general_terms:unresolved(no_machine_rule) | unresolved=car_comprehensive_policy:missing_issue_or_renewal_date,car_general_terms:no_machine_rule | relationships=4
**Omitted expansions:** corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c015
**Tokens:** embed=19 gen_total=6591
**Timings (ms):** retrieve=191 gen=4166 total=4409

**Manual focus:**
- FOCUS: clarification_needed required — answering without clarification is a behavior fail.

**Manual review:** conclusion=pending claimSupport=pending completeness=pending behavior=pending

<details><summary>Reference (review only)</summary>

השאלה עמומה: תלויה בקו המוצר ובסוג האירוע. תשובה טובה מבקשת הבהרה, או מציגה בקצרה את האפשרויות העיקריות עם מקורות.

Sources: 02_car_comprehensive_policy_2026.pdf, 10_home_policy_overview.md

</details>

## D06 (multi_hop)

**Question:** נהג בן 22 נהג ברכב עם פוליסת 'כל נהג' בלי נספח נהג צעיר ועשה תאונה. האם יש כיסוי?

**Status:** answered

**Answer:**

בפוליסת 'כל נהג' הכיסוי חל על כל נהג מורשה, כלומר כל אדם שבידו רישיון נהיגה בתוקף לסוג הרכב, שגילו 24 ומעלה ושהוותק שלו בנהיגה לפחות שנתיים, וכן נהג צעיר שנכלל בנספח נהג צעיר בתוקף.

נהג בן 22 נחשב לנהג צעיר, ולכן כדי שיהיה לו כיסוי בפוליסת 'כל נהג' יש צורך בנספח נהג צעיר שנרכש בתוספת פרמיה, והוא חייב להיות נקוב בנספח לאחר מילוי טופס 1007 והצגת רישיון נהיגה בתוקף.

אם הנהג הצעיר לא נקוב בנספח נהג צעיר, האירוע שבו הוא נהג אינו מכוסה, בהתאם לחריג בדבר נהג שאינו נהג מורשה בתנאים הכלליים.

**Answer parts:** 3
**Citations (from parts):** corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000, corpus/03_car_general_terms:c002, corpus/04_young_driver_annex:c000
**Retrieved:** corpus/04_young_driver_annex:c000, corpus/25_adding_driver:c000, corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000, corpus/03_car_general_terms:c001
**Context (+expanded):** corpus/04_young_driver_annex:c000, corpus/25_adding_driver:c000, corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011 — expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011
**Validation (chunkId technical only):** structure=true citations=true
**Applicability:** car_comprehensive_policy:unresolved(missing_issue_or_renewal_date); car_general_terms:unresolved(no_machine_rule) | unresolved=car_comprehensive_policy:missing_issue_or_renewal_date,car_general_terms:no_machine_rule | relationships=4
**Omitted expansions:** corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c015
**Tokens:** embed=86 gen_total=6752
**Timings (ms):** retrieve=188 gen=3757 total=4015

**Manual focus:**
- FOCUS: Are definition+annex in context enough for no-coverage? Document omitted §12 separately.

**Manual review:** conclusion=pending claimSupport=pending completeness=pending behavior=pending

<details><summary>Reference (review only)</summary>

לא. לפי הגדרת 'נהג מורשה' (סעיף 2) נהג מתחת לגיל 24 אינו נהג מורשה אלא אם נכלל בנספח נהג צעיר, וסעיף 12(א) מחריג נזק בעת נהיגה בידי מי שאינו נהג מורשה.

Sources: 03_car_general_terms.pdf, 04_young_driver_annex.docx

</details>

## D07 (cross_lingual)

**Question:** תוך כמה זמן חתמות רפואית עונה לבקשה של סוכן לגבי מצב רפואי קודם בביטוח נסיעות?

**Status:** answered

**Answer:**

חתמות רפואית עונה לבקשה של סוכן לגבי מצב רפואי קודם בביטוח נסיעות בתוך 3 ימי עסקים.

במקרה של בקשה דחופה, למשל כאשר הנסיעה מתוכננת בתוך 48 שעות, יש לסמן "דחוף" בטופס כדי לקבל מענה מהיר יותר.

**Answer parts:** 2
**Citations (from parts):** corpus/15_travel_preexisting_conditions:c000
**Retrieved:** corpus/15_travel_preexisting_conditions:c000, corpus/14_travel_policy_overview:c000, corpus/17_travel_claims:c000, corpus/21_claims_sla:c000, corpus/32_fraud_red_flags:c000
**Context (+expanded):** corpus/15_travel_preexisting_conditions:c000, corpus/14_travel_policy_overview:c000, corpus/17_travel_claims:c000, corpus/21_claims_sla:c000, corpus/32_fraud_red_flags:c000
**Validation (chunkId technical only):** structure=true citations=true
**Applicability:** (none) | relationships=0
**Tokens:** embed=82 gen_total=2524
**Timings (ms):** retrieve=307 gen=1783 total=2146

**Manual review:** conclusion=pending claimSupport=pending completeness=pending behavior=pending

<details><summary>Reference (review only)</summary>

בתוך 3 ימי עסקים.

Sources: 30_agent_faq_en.md, 15_travel_preexisting_conditions.docx

</details>

## D08 (partial_override)

**Question:** לקוח מבטל פוליסה 10 ימים אחרי הרכישה ולא הגיש תביעות. כמה יקבל בחזרה?

**Status:** answered

**Answer:**

לקוח שמבטל פוליסה בתוך 14 יום ממועד הרכישה, ולא הגיש תביעה, יקבל החזר מלא של דמי הביטוח ששילם, ללא ניכוי דמי טיפול.

**Answer parts:** 1
**Citations (from parts):** corpus/23_cancellation_procedure_update_2025:c000
**Retrieved:** corpus/32_fraud_red_flags:c000, corpus/22_cancellation_procedure_2023:c000, corpus/23_cancellation_procedure_update_2025:c000, corpus/24_payment_methods:c000, corpus/21_claims_sla:c000
**Context (+expanded):** corpus/32_fraud_red_flags:c000, corpus/22_cancellation_procedure_2023:c000, corpus/23_cancellation_procedure_update_2025:c000, corpus/24_payment_methods:c000, corpus/21_claims_sla:c000
**Validation (chunkId technical only):** structure=true citations=true
**Applicability:** cancellation_procedure:partial_update→corpus/23_cancellation_procedure_update_2025(partial_update_keep_base_and_update) | relationships=2
**Tokens:** embed=69 gen_total=2553
**Timings (ms):** retrieve=237 gen=1564 total=1852

**Manual focus:**
- FOCUS: Material contradiction (full refund vs pro-rata on same case) = answer fail.

**Manual review:** conclusion=pending claimSupport=pending completeness=pending behavior=pending

<details><summary>Reference (review only)</summary>

החזר מלא של דמי הביטוח, ללא דמי טיפול (תקופת התחרטות של 14 יום לפי עדכון 2025).

Sources: 23_cancellation_procedure_update_2025.md

</details>

## D09 (table)

**Question:** מה תקרת הכיסוי למזומן בביטוח תכולה?

**Status:** answered

**Answer:**

תקרת הכיסוי למזומן בביטוח תכולה היא עד 2,000 ₪.

**Answer parts:** 1
**Citations (from parts):** corpus/12_home_contents_limits:c000
**Retrieved:** corpus/03_car_general_terms:c006, corpus/11_home_water_damage:c000, corpus/12_home_contents_limits:c000, corpus/05_car_third_party:c000, corpus/14_travel_policy_overview:c000
**Context (+expanded):** corpus/03_car_general_terms:c006, corpus/11_home_water_damage:c000, corpus/12_home_contents_limits:c000, corpus/05_car_third_party:c000, corpus/14_travel_policy_overview:c000, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c012 — expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c012
**Validation (chunkId technical only):** structure=true citations=true
**Applicability:** car_general_terms:unresolved(no_machine_rule) | unresolved=car_general_terms:no_machine_rule | relationships=0
**Omitted expansions:** corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c015
**Tokens:** embed=37 gen_total=6062
**Timings (ms):** retrieve=170 gen=1515 total=1735

**Manual review:** conclusion=pending claimSupport=pending completeness=pending behavior=pending

<details><summary>Reference (review only)</summary>

2,000 ₪.

Sources: 12_home_contents_limits.docx

</details>

## D10 (conflict)

**Question:** האם רכב חלופי ניתן לכל תקופת התיקון?

**Status:** answered

**Answer:**

רכב חלופי ניתן רק למבוטחים שרכשו כתב שירות רכב חלופי, והוא אינו חלק מהכיסוי הבסיסי בפוליסת מקיף. במקרה של תאונה, רכב חלופי ניתן כל עוד הרכב בתיקון במוסך הסדר, ולתקופה מקסימלית של עד 21 ימים. במקרה של גניבה או אובדן גמור, רכב חלופי ניתן עד 30 ימים. במקרה של תקלה מכנית, רכב חלופי אינו ניתן כלל. בנוסף, תאונה שבה הרכב מתוקן במוסך שאינו בהסדר אינה מזכה ברכב חלופי.

**Answer parts:** 1
**Citations (from parts):** corpus/08_replacement_car:c000
**Retrieved:** corpus/08_replacement_car:c000, corpus/09_marketing_brochure_car:c000, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c014
**Context (+expanded):** corpus/08_replacement_car:c000, corpus/09_marketing_brochure_car:c000, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c014, corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c010 — expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c010
**Validation (chunkId technical only):** structure=true citations=true
**Linked (relations, not Recall@5):** corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000
**Applicability:** car_general_terms:unresolved(no_machine_rule); car_marketing:selected→corpus/09_marketing_brochure_car(marketing_non_binding) | unresolved=car_general_terms:no_machine_rule | relationships=6
**Omitted expansions:** corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c015
**Tokens:** embed=39 gen_total=6378
**Timings (ms):** retrieve=218 gen=2953 total=3220

**Manual focus:**
- FOCUS: Binding limits vs marketing; every stated event/limit supported including theft/total-loss row?

**Manual review:** conclusion=pending claimSupport=pending completeness=pending behavior=pending

<details><summary>Reference (review only)</summary>

לא. רכב חלופי ניתן רק למי שרכש כתב שירות רכב חלופי, ובתאונה עד 21 ימים ורק בתיקון במוסך הסדר. העלון השיווקי אומר אחרת, אך הוא אינו מחייב.

Sources: 08_replacement_car.md, 09_marketing_brochure_car.md

</details>

## D11 (table)

**Question:** המזוודה של נוסע הגיעה באיחור של 8 שעות. לכמה פיצוי הוא זכאי?

**Status:** answered

**Answer:**

במקרה של עיכוב בהגעת המזוודה מעל 6 שעות, הנוסע זכאי לפיצוי של עד 150 דולר לרכישת פריטים חיוניים.

**Answer parts:** 1
**Citations (from parts):** corpus/16_travel_luggage:c000
**Retrieved:** corpus/16_travel_luggage:c000, corpus/03_car_general_terms:c008, corpus/14_travel_policy_overview:c000, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c010
**Context (+expanded):** corpus/16_travel_luggage:c000, corpus/03_car_general_terms:c008, corpus/14_travel_policy_overview:c000, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c015 — expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c015
**Validation (chunkId technical only):** structure=true citations=true
**Applicability:** car_general_terms:unresolved(no_machine_rule) | unresolved=car_general_terms:no_machine_rule | relationships=0
**Tokens:** embed=57 gen_total=6020
**Timings (ms):** retrieve=582 gen=1475 total=2109

**Manual focus:**
- FOCUS: PIR eligibility condition present?

**Manual review:** conclusion=pending claimSupport=pending completeness=pending behavior=pending

<details><summary>Reference (review only)</summary>

עד 150 $ לרכישת פריטים חיוניים, בכפוף לדו"ח PIR מחברת התעופה.

Sources: 16_travel_luggage.md

</details>

## D12 (factual)

**Question:** כמה גרירות מקבלים בשנת ביטוח?

**Status:** answered

**Answer:**

בפוליסת ביטוח רכב של אופק ביטוח, במסגרת כתב שירות גרירה ושירותי דרך, מקבלים בשנת ביטוח עד 4 גרירות לאחר תאונה או תקלה.

**Answer parts:** 1
**Citations (from parts):** corpus/07_towing_roadside:c000
**Retrieved:** corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c009, corpus/07_towing_roadside:c000, corpus/05_car_third_party:c000, corpus/09_marketing_brochure_car:c000
**Context (+expanded):** corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c009, corpus/07_towing_roadside:c000, corpus/05_car_third_party:c000, corpus/09_marketing_brochure_car:c000, corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008 — expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008
**Validation (chunkId technical only):** structure=true citations=true
**Linked (relations, not Recall@5):** corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000
**Applicability:** car_general_terms:unresolved(no_machine_rule); car_marketing:selected→corpus/09_marketing_brochure_car(marketing_non_binding) | unresolved=car_general_terms:no_machine_rule | relationships=6
**Omitted expansions:** corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c015
**Tokens:** embed=28 gen_total=6377
**Timings (ms):** retrieve=219 gen=1443 total=1716

**Manual review:** conclusion=pending claimSupport=pending completeness=pending behavior=pending

<details><summary>Reference (review only)</summary>

עד 4 גרירות בשנת ביטוח (למי שרכש כתב שירות גרירה).

Sources: 07_towing_roadside.md

</details>

## D13 (table)

**Question:** נוסעת בשבוע 28 להריון. האם סיבוכי הריון מכוסים בחו"ל?

**Status:** answered

**Answer:**

סיבוכי הריון מכוסים במסגרת ביטוח נסיעות לחו"ל רק עד שבוע 26 להריון. החל משבוע 27 ואילך, סיבוכי הריון אינם מכוסים בביטוח נסיעות, אלא אם הוצהרו מראש ואושרו על ידי חתמות רפואית, אך לפי התנאים המפורטים, מעל שבוע 26 סיבוכי הריון אינם מכוסים כלל.

**Answer parts:** 1
**Citations (from parts):** corpus/15_travel_preexisting_conditions:c000
**Retrieved:** corpus/14_travel_policy_overview:c000, corpus/15_travel_preexisting_conditions:c000, corpus/07_towing_roadside:c000, corpus/09_marketing_brochure_car:c000, corpus/17_travel_claims:c000
**Context (+expanded):** corpus/14_travel_policy_overview:c000, corpus/15_travel_preexisting_conditions:c000, corpus/07_towing_roadside:c000, corpus/09_marketing_brochure_car:c000, corpus/17_travel_claims:c000, corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000
**Validation (chunkId technical only):** structure=true citations=true
**Linked (relations, not Recall@5):** corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000
**Applicability:** car_marketing:selected→corpus/09_marketing_brochure_car(marketing_non_binding) | relationships=6
**Tokens:** embed=48 gen_total=4114
**Timings (ms):** retrieve=192 gen=1919 total=2157

**Manual review:** conclusion=pending claimSupport=pending completeness=pending behavior=pending

<details><summary>Reference (review only)</summary>

לא. סיבוכי הריון מכוסים רק עד שבוע 26.

Sources: 15_travel_preexisting_conditions.docx

</details>

## D14 (table)

**Question:** מה ההשתתפות העצמית ברעידת אדמה בפרק המבנה?

**Status:** answered

**Answer:**

ההשתתפות העצמית ברעידת אדמה בפרק המבנה היא 10% מסכום ביטוח המבנה.

במקרה של דירה בבניין שעבר חיזוק לפי תמ"א 38, ההשתתפות העצמית בפרק המבנה ברעידת אדמה היא 5% מסכום ביטוח המבנה.

**Answer parts:** 2
**Citations (from parts):** corpus/13_home_earthquake_annex:c000
**Retrieved:** corpus/13_home_earthquake_annex:c000, corpus/10_home_policy_overview:c000, corpus/31_ofek_plus_vip:c000, corpus/06_windshield_service:c000, corpus/11_home_water_damage:c000
**Context (+expanded):** corpus/13_home_earthquake_annex:c000, corpus/10_home_policy_overview:c000, corpus/31_ofek_plus_vip:c000, corpus/06_windshield_service:c000, corpus/11_home_water_damage:c000
**Validation (chunkId technical only):** structure=true citations=true
**Applicability:** (none) | relationships=0
**Tokens:** embed=40 gen_total=2865
**Timings (ms):** retrieve=196 gen=1783 total=2032

**Manual focus:**
- FOCUS: Deductible calculation base correct (of what)?

**Manual review:** conclusion=pending claimSupport=pending completeness=pending behavior=pending

<details><summary>Reference (review only)</summary>

10% מסכום ביטוח המבנה (5% בבניין שעבר חיזוק לפי תמ"א 38).

Sources: 13_home_earthquake_annex.pdf

</details>

## D15 (factual)

**Question:** תוך כמה זמן יש להגיש תלונה במשטרה על גניבת רכב?

**Status:** answered

**Answer:**

על המבוטח להגיש תלונה במשטרה על גניבת רכב בתוך 24 שעות ממועד הגילוי ולהמציא למבטח את אישור התלונה.

**Answer parts:** 1
**Citations (from parts):** corpus/03_car_general_terms:c007
**Retrieved:** corpus/03_car_general_terms:c007, corpus/16_travel_luggage:c000, corpus/07_towing_roadside:c000, corpus/18_claims_process_car:c000, corpus/01_car_comprehensive_policy_2024:c000
**Context (+expanded):** corpus/03_car_general_terms:c007, corpus/16_travel_luggage:c000, corpus/07_towing_roadside:c000, corpus/18_claims_process_car:c000, corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c014 — expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c014
**Validation (chunkId technical only):** structure=true citations=true
**Linked (relations, not Recall@5):** corpus/02_car_comprehensive_policy_2026:c000
**Applicability:** car_comprehensive_policy:unresolved(missing_issue_or_renewal_date); car_general_terms:unresolved(no_machine_rule) | unresolved=car_comprehensive_policy:missing_issue_or_renewal_date,car_general_terms:no_machine_rule | relationships=4
**Omitted expansions:** corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c015
**Tokens:** embed=49 gen_total=6469
**Timings (ms):** retrieve=226 gen=2005 total=2282

**Manual review:** conclusion=pending claimSupport=pending completeness=pending behavior=pending

<details><summary>Reference (review only)</summary>

בתוך 24 שעות ממועד הגילוי.

Sources: 03_car_general_terms.pdf, 18_claims_process_car.md

</details>
