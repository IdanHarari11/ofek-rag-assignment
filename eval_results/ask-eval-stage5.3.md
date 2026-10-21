# Ask evaluation — stage5.3-revert-preclarify

- Generated: 2026-10-21T06:30:31.065Z
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
**Tokens:** embed=42 gen_total=2070
**Timings (ms):** retrieve=1077 gen=1144 total=2235

**Manual review:** conclusion=pass claimSupport=pass completeness=pass behavior=pass

<details><summary>Reference (review only)</summary>

08:00–12:00.

Sources: 28_call_center_hours.md

</details>

## D02 (table)

**Question:** איזה טופס ממלאים כדי לבקש ביטול פוליסה?

**Status:** answered

**Answer:**

כדי לבקש ביטול פוליסה יש למלא את טופס מספר 4401 שנקרא "בקשה לביטול פוליסה". טופס זה משמש לביטול פוליסה ביוזמת הלקוח וניתן להגישו באזור האישי או במוקד.

בנוסף, ניתן להגיש בקשת ביטול גם בשיחה מוקלטת במוקד לאחר זיהוי מלא של הלקוח. הביטול נכנס לתוקף במועד שביקש הלקוח, אך לא לפני מועד קבלת הבקשה.

**Answer parts:** 2
**Citations (from parts):** corpus/20_forms_catalog:c001, corpus/22_cancellation_procedure_2023:c000
**Retrieved:** corpus/20_forms_catalog:c001, corpus/22_cancellation_procedure_2023:c000, corpus/20_forms_catalog:c000, corpus/14_travel_policy_overview:c000, corpus/33_customer_identification:c000
**Context (+expanded):** corpus/20_forms_catalog:c001, corpus/22_cancellation_procedure_2023:c000, corpus/20_forms_catalog:c000, corpus/14_travel_policy_overview:c000, corpus/33_customer_identification:c000
**Validation (chunkId technical only):** structure=true citations=true
**Tokens:** embed=38 gen_total=2832
**Timings (ms):** retrieve=409 gen=1766 total=2197

**Manual review:** conclusion=pass claimSupport=pass completeness=pass behavior=pass

<details><summary>Reference (review only)</summary>

טופס 4401 – בקשה לביטול פוליסה.

Sources: 20_forms_catalog.pdf

</details>

## D03 (version)

**Question:** מה ההשתתפות העצמית בתיקון במוסך הסדר בפוליסת מקיף שהונפקה באפריל 2026?

**Status:** answered

**Answer:**

בפוליסת ביטוח רכב מקיף שהונפקה באפריל 2026, ההשתתפות העצמית בתיקון במוסך הסדר היא 1,100 ₪.

**Answer parts:** 1
**Citations (from parts):** corpus/02_car_comprehensive_policy_2026:c000
**Retrieved:** corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000, corpus/31_ofek_plus_vip:c000, corpus/04_young_driver_annex:c000, corpus/22_cancellation_procedure_2023:c000
**Context (+expanded):** corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000, corpus/31_ofek_plus_vip:c000, corpus/04_young_driver_annex:c000, corpus/22_cancellation_procedure_2023:c000
**Validation (chunkId technical only):** structure=true citations=true
**Tokens:** embed=68 gen_total=3189
**Timings (ms):** retrieve=234 gen=1054 total=1306

**Manual focus:**
- Recovered from 5.2 over-clarify; 2026 amount.

**Manual review:** conclusion=pass claimSupport=pass completeness=pass behavior=pass

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
**Tokens:** embed=35 gen_total=4957
**Timings (ms):** retrieve=211 gen=829 total=1064

**Manual focus:**
- Neutral wording; citations empty.

**Manual review:** conclusion=pass claimSupport=pass completeness=pass behavior=pass

<details><summary>Reference (review only)</summary>

המידע לא מופיע במסמכים. המערכת צריכה לומר שלא מצאה תשובה, ולא להמציא.

Sources: (none)

</details>

## D05 (ambiguous)

**Question:** מה ההשתתפות העצמית?

**Status:** answered

**Answer:**

ההשתתפות העצמית בפוליסת ביטוח רכב מקיף של אופק ביטוח משתנה לפי סוג האירוע והגרסה של הפוליסה. בגרסת 2024 ההשתתפות העצמית היא: נזק חלקי במוסך הסדר - 950 ₪, נזק חלקי במוסך שאינו בהסדר - 1,850 ₪, גניבה או אובדן גמור - 5% מערך הרכב ולא פחות מ-2,500 ₪, ונזק לשמשות לפי כתב שירות שמשות.

בגרסת 2026 ההשתתפות העצמית היא: נזק חלקי במוסך הסדר - 1,100 ₪, נזק חלקי במוסך שאינו בהסדר - 2,100 ₪, גניבה או אובדן גמור - 5% מערך הרכב ולא פחות מ-3,000 ₪, ונזק לשמשות לפי כתב שירות שמשות.

לגבי נזק לשמשות, ההשתתפות העצמית לפי כתב שירות שמשות היא: ברשת שמשות אופק אין השתתפות עצמית, מחוץ לרשת ההשתתפות העצמית היא 400 ₪ בניכוי ההחזר עד מחיר הרשת, בכפוף לחשבונית מקורית.

**Answer parts:** 3
**Citations (from parts):** corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000, corpus/06_windshield_service:c000
**Retrieved:** corpus/06_windshield_service:c000, corpus/01_car_comprehensive_policy_2024:c000, corpus/05_car_third_party:c000, corpus/02_car_comprehensive_policy_2026:c000, corpus/03_car_general_terms:c009
**Context (+expanded):** corpus/06_windshield_service:c000, corpus/01_car_comprehensive_policy_2024:c000, corpus/05_car_third_party:c000, corpus/02_car_comprehensive_policy_2026:c000, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011 — expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011
**Validation (chunkId technical only):** structure=true citations=true
**Omitted expansions:** corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c015
**Tokens:** embed=19 gen_total=6077
**Timings (ms):** retrieve=231 gen=2774 total=3030

**Manual focus:**
- OPEN LIMITATION: answered car deductibles without clarification_needed.

**Manual review:** conclusion=n_a claimSupport=partial completeness=fail behavior=fail

<details><summary>Reference (review only)</summary>

השאלה עמומה: תלויה בקו המוצר ובסוג האירוע. תשובה טובה מבקשת הבהרה, או מציגה בקצרה את האפשרויות העיקריות עם מקורות.

Sources: 02_car_comprehensive_policy_2026.pdf, 10_home_policy_overview.md

</details>

## D06 (multi_hop)

**Question:** נהג בן 22 נהג ברכב עם פוליסת 'כל נהג' בלי נספח נהג צעיר ועשה תאונה. האם יש כיסוי?

**Status:** answered

**Answer:**

בפוליסת 'כל נהג' הכיסוי חל על כל נהג מורשה כהגדרתו בתנאים הכלליים, כלומר כל אדם שבידו רישיון נהיגה בתוקף לסוג הרכב, שגילו 24 ומעלה ושהוותק שלו בנהיגה שנתיים לפחות, וכן נהג צעיר שנכלל בנספח נהג צעיר בתוקף.

נהג בן 22 נחשב לנהג צעיר (מתחת לגיל 24), ולכן כדי שיהיה לו כיסוי בפוליסה יש צורך בנספח נהג צעיר שנרכש לפוליסה. במקרה שבו נהג צעיר אינו נקוב בנספח, האירוע אינו מכוסה.

**Answer parts:** 2
**Citations (from parts):** corpus/01_car_comprehensive_policy_2024:c000, corpus/03_car_general_terms:c002, corpus/25_adding_driver:c000, corpus/04_young_driver_annex:c000, corpus/02_car_comprehensive_policy_2026:c000
**Retrieved:** corpus/04_young_driver_annex:c000, corpus/25_adding_driver:c000, corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000, corpus/03_car_general_terms:c001
**Context (+expanded):** corpus/04_young_driver_annex:c000, corpus/25_adding_driver:c000, corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011 — expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011
**Validation (chunkId technical only):** structure=true citations=true
**Omitted expansions:** corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c015
**Tokens:** embed=86 gen_total=6165
**Timings (ms):** retrieve=208 gen=2165 total=2398

**Manual focus:**
- THIS RUN: def c002 + annex in context; §12 omitted by budget; conclusion supported without §12.

**Manual review:** conclusion=pass claimSupport=pass completeness=partial behavior=pass

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
**Tokens:** embed=82 gen_total=2231
**Timings (ms):** retrieve=240 gen=1299 total=1562

**Manual review:** conclusion=pass claimSupport=pass completeness=pass behavior=pass

<details><summary>Reference (review only)</summary>

בתוך 3 ימי עסקים.

Sources: 30_agent_faq_en.md, 15_travel_preexisting_conditions.docx

</details>

## D08 (partial_override)

**Question:** לקוח מבטל פוליסה 10 ימים אחרי הרכישה ולא הגיש תביעות. כמה יקבל בחזרה?

**Status:** answered

**Answer:**

לקוח שמבטל פוליסה בתוך 14 יום ממועד הרכישה, ולא הגיש תביעה, יקבל החזר מלא של דמי הביטוח ששילם, ללא דמי טיפול.

**Answer parts:** 1
**Citations (from parts):** corpus/23_cancellation_procedure_update_2025:c000
**Retrieved:** corpus/32_fraud_red_flags:c000, corpus/22_cancellation_procedure_2023:c000, corpus/23_cancellation_procedure_update_2025:c000, corpus/24_payment_methods:c000, corpus/21_claims_sla:c000
**Context (+expanded):** corpus/32_fraud_red_flags:c000, corpus/22_cancellation_procedure_2023:c000, corpus/23_cancellation_procedure_update_2025:c000, corpus/24_payment_methods:c000, corpus/21_claims_sla:c000
**Validation (chunkId technical only):** structure=true citations=true
**Tokens:** embed=69 gen_total=2074
**Timings (ms):** retrieve=257 gen=1078 total=1355

**Manual focus:**
- Single answerPart; only update-2025 cited; no pro-rata contradiction.

**Manual review:** conclusion=pass claimSupport=pass completeness=pass behavior=pass

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
**Omitted expansions:** corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c015
**Tokens:** embed=37 gen_total=5728
**Timings (ms):** retrieve=222 gen=1185 total=1432

**Manual focus:**
- Recovered from 5.2 over-clarify.

**Manual review:** conclusion=pass claimSupport=pass completeness=pass behavior=pass

<details><summary>Reference (review only)</summary>

2,000 ₪.

Sources: 12_home_contents_limits.docx

</details>

## D10 (conflict)

**Question:** האם רכב חלופי ניתן לכל תקופת התיקון?

**Status:** answered

**Answer:**

רכב חלופי ניתן רק למבוטחים שרכשו כתב שירות רכב חלופי, שאינו חלק מהכיסוי הבסיסי בפוליסת מקיף. עבור אירוע תאונה, רכב חלופי ניתן כל עוד הרכב בתיקון במוסך הסדר, לתקופה מקסימלית של עד 21 ימים. עבור אירוע גניבה או אובדן גמור, התקופה המקסימלית היא עד 30 ימים. עבור תקלה מכנית, רכב חלופי אינו ניתן.

עם זאת, בעלון שיווקי של אופק ביטוח מצוין כי ישנה אפשרות לרכב חלופי לכל תקופת התיקון, ללא הגבלות ("בלי כוכביות"), אך מדובר במידע שיווקי בלבד והתנאים המחייבים הם תנאי הפוליסה וכתבי השירות.

**Answer parts:** 2
**Citations (from parts):** corpus/08_replacement_car:c000, corpus/09_marketing_brochure_car:c000
**Retrieved:** corpus/08_replacement_car:c000, corpus/09_marketing_brochure_car:c000, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c014
**Context (+expanded):** corpus/08_replacement_car:c000, corpus/09_marketing_brochure_car:c000, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c015 — expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c015
**Validation (chunkId technical only):** structure=true citations=true
**Tokens:** embed=39 gen_total=5741
**Timings (ms):** retrieve=254 gen=1927 total=2208

**Manual focus:**
- Recovered; binding vs marketing.

**Manual review:** conclusion=pass claimSupport=pass completeness=pass behavior=pass

<details><summary>Reference (review only)</summary>

לא. רכב חלופי ניתן רק למי שרכש כתב שירות רכב חלופי, ובתאונה עד 21 ימים ורק בתיקון במוסך הסדר. העלון השיווקי אומר אחרת, אך הוא אינו מחייב.

Sources: 08_replacement_car.md, 09_marketing_brochure_car.md

</details>

## D11 (table)

**Question:** המזוודה של נוסע הגיעה באיחור של 8 שעות. לכמה פיצוי הוא זכאי?

**Status:** answered

**Answer:**

כאשר המזוודה של נוסע מגיעה באיחור של מעל 6 שעות, הנוסע זכאי לפיצוי של עד 150 דולר לרכישת פריטים חיוניים. במקרה של איחור של מעל 24 שעות, ניתן לקבל פיצוי נוסף של עד 150 דולר נוספים.

**Answer parts:** 1
**Citations (from parts):** corpus/16_travel_luggage:c000
**Retrieved:** corpus/16_travel_luggage:c000, corpus/03_car_general_terms:c008, corpus/14_travel_policy_overview:c000, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c010
**Context (+expanded):** corpus/16_travel_luggage:c000, corpus/03_car_general_terms:c008, corpus/14_travel_policy_overview:c000, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c015 — expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c015
**Validation (chunkId technical only):** structure=true citations=true
**Tokens:** embed=57 gen_total=5711
**Timings (ms):** retrieve=208 gen=1146 total=1378

**Manual focus:**
- Amounts OK; PIR condition omitted this run (in context).

**Manual review:** conclusion=pass claimSupport=pass completeness=partial behavior=pass

<details><summary>Reference (review only)</summary>

עד 150 $ לרכישת פריטים חיוניים, בכפוף לדו"ח PIR מחברת התעופה.

Sources: 16_travel_luggage.md

</details>

## D12 (factual)

**Question:** כמה גרירות מקבלים בשנת ביטוח?

**Status:** answered

**Answer:**

בפוליסות ביטוח רכב של אופק ביטוח, במסגרת כתב שירות גרירה ושירותי דרך, מקבלים במסגרת שנת ביטוח עד 4 גרירות לאחר תאונה או תקלה.

**Answer parts:** 1
**Citations (from parts):** corpus/07_towing_roadside:c000
**Retrieved:** corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c009, corpus/07_towing_roadside:c000, corpus/05_car_third_party:c000, corpus/09_marketing_brochure_car:c000
**Context (+expanded):** corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c009, corpus/07_towing_roadside:c000, corpus/05_car_third_party:c000, corpus/09_marketing_brochure_car:c000, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013 — expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013
**Validation (chunkId technical only):** structure=true citations=true
**Omitted expansions:** corpus/03_car_general_terms:c015
**Tokens:** embed=28 gen_total=5689
**Timings (ms):** retrieve=220 gen=1050 total=1288

**Manual focus:**
- Recovered.

**Manual review:** conclusion=pass claimSupport=pass completeness=pass behavior=pass

<details><summary>Reference (review only)</summary>

עד 4 גרירות בשנת ביטוח (למי שרכש כתב שירות גרירה).

Sources: 07_towing_roadside.md

</details>

## D13 (table)

**Question:** נוסעת בשבוע 28 להריון. האם סיבוכי הריון מכוסים בחו"ל?

**Status:** answered

**Answer:**

סיבוכי הריון מכוסים במסגרת ביטוח נסיעות לחו"ל רק עד שבוע 26 להריון. החל משבוע 27 ואילך, סיבוכי הריון אינם מכוסים.

**Answer parts:** 1
**Citations (from parts):** corpus/15_travel_preexisting_conditions:c000
**Retrieved:** corpus/14_travel_policy_overview:c000, corpus/15_travel_preexisting_conditions:c000, corpus/07_towing_roadside:c000, corpus/09_marketing_brochure_car:c000, corpus/17_travel_claims:c000
**Context (+expanded):** corpus/14_travel_policy_overview:c000, corpus/15_travel_preexisting_conditions:c000, corpus/07_towing_roadside:c000, corpus/09_marketing_brochure_car:c000, corpus/17_travel_claims:c000
**Validation (chunkId technical only):** structure=true citations=true
**Tokens:** embed=48 gen_total=2312
**Timings (ms):** retrieve=277 gen=1522 total=1819

**Manual focus:**
- Recovered.

**Manual review:** conclusion=pass claimSupport=pass completeness=pass behavior=pass

<details><summary>Reference (review only)</summary>

לא. סיבוכי הריון מכוסים רק עד שבוע 26.

Sources: 15_travel_preexisting_conditions.docx

</details>

## D14 (table)

**Question:** מה ההשתתפות העצמית ברעידת אדמה בפרק המבנה?

**Status:** answered

**Answer:**

ההשתתפות העצמית ברעידת אדמה בפרק המבנה היא 10% מסכום ביטוח המבנה.

אם הדירה בבניין שעבר חיזוק לפי תמ"א 38, ההשתתפות העצמית בפרק המבנה ברעידת אדמה היא 5% מסכום ביטוח המבנה.

**Answer parts:** 2
**Citations (from parts):** corpus/13_home_earthquake_annex:c000
**Retrieved:** corpus/13_home_earthquake_annex:c000, corpus/10_home_policy_overview:c000, corpus/31_ofek_plus_vip:c000, corpus/06_windshield_service:c000, corpus/11_home_water_damage:c000
**Context (+expanded):** corpus/13_home_earthquake_annex:c000, corpus/10_home_policy_overview:c000, corpus/31_ofek_plus_vip:c000, corpus/06_windshield_service:c000, corpus/11_home_water_damage:c000
**Validation (chunkId technical only):** structure=true citations=true
**Tokens:** embed=40 gen_total=2569
**Timings (ms):** retrieve=258 gen=1597 total=1882

**Manual focus:**
- Calc base OK this run.

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

בנוהל טיפול בתביעת רכב של אופק ביטוח, לאירוע גניבה נדרש טופס 1003 ואישור תלונה במשטרה שהוגשה בתוך 24 שעות.

**Answer parts:** 2
**Citations (from parts):** corpus/03_car_general_terms:c007, corpus/18_claims_process_car:c000
**Retrieved:** corpus/03_car_general_terms:c007, corpus/16_travel_luggage:c000, corpus/07_towing_roadside:c000, corpus/18_claims_process_car:c000, corpus/01_car_comprehensive_policy_2024:c000
**Context (+expanded):** corpus/03_car_general_terms:c007, corpus/16_travel_luggage:c000, corpus/07_towing_roadside:c000, corpus/18_claims_process_car:c000, corpus/01_car_comprehensive_policy_2024:c000, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c013 — expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c013
**Validation (chunkId technical only):** structure=true citations=true
**Omitted expansions:** corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c015
**Tokens:** embed=49 gen_total=5899
**Timings (ms):** retrieve=239 gen=1950 total=2212

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

אנא פרט באיזו פוליסה או סוג כיסוי מדובר כדי שנוכל לספק את גובה ההשתתפות העצמית המדויקת עבורך.

**Answer parts:** 1
**Citations (from parts):** (none)
**Retrieved:** corpus/06_windshield_service:c000, corpus/03_car_general_terms:c011, corpus/31_ofek_plus_vip:c000, corpus/03_car_general_terms:c009, corpus/02_car_comprehensive_policy_2026:c000
**Context (+expanded):** corpus/06_windshield_service:c000, corpus/03_car_general_terms:c011, corpus/31_ofek_plus_vip:c000, corpus/03_car_general_terms:c009, corpus/02_car_comprehensive_policy_2026:c000, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013 — expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013
**Validation (chunkId technical only):** structure=true citations=true
**Omitted expansions:** corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c015
**Tokens:** embed=27 gen_total=5822
**Timings (ms):** retrieve=316 gen=2296 total=2631

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

לא מצאתי במקורות שסופקו מידע מספיק כדי לענות על השאלה.

**Answer parts:** 0
**Citations (from parts):** (none)
**Retrieved:** corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c010
**Context (+expanded):** corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c015 — expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c015
**Validation (chunkId technical only):** structure=true citations=true
**Tokens:** embed=42 gen_total=4959
**Timings (ms):** retrieve=272 gen=1004 total=1301

**Manual focus:**
- EXTRA PROBE (not in reference set): insufficient_evidence — neutral server wording; no invent; no absence-proof citations.

**Manual review:** conclusion=pass claimSupport=pass completeness=pass behavior=pass

<details><summary>Reference (review only)</summary>

(extra probe) expected: insufficient_evidence — neutral server wording; no invent; no absence-proof citations.

Sources: (none)

</details>
