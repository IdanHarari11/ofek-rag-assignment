# Ask evaluation (Stage 5)

- Generated: 2026-10-21T06:02:13.833Z
- Retrieval mode: hybrid
- Generation model: gpt-4.1-mini
- Questions: 15
- System errors: 0
- Status counts: {"answered":14,"insufficient_evidence":1}

## Method notes

After ask() returns, a human compares the answer to reference_answer and sources. Dimensions (each: pass / partial / fail / n_a): factual_correctness, claim_support, completeness. Special focus checks (documented per question id) are also human-only. Citation-id validation is automatic; claim-support is NOT automatic. Do not treat these manual fields as scored metrics in averages.

Manual review fields are human judgments, not automatic metrics. Citation-id validation ≠ proof that a cited chunk supports its claims. API/parse failures are system_error, not insufficient_evidence.

## D01 (factual)

**Question:** מה שעות הפעילות של מוקד שירות הלקוחות ביום שישי?

**Status:** answered

**Answer:**

שעות הפעילות של מוקד שירות הלקוחות ביום שישי הן מ-08:00 עד 12:00.

**Citations:** corpus/28_call_center_hours:c000
**Retrieved:** corpus/28_call_center_hours:c000, corpus/07_towing_roadside:c000, corpus/06_windshield_service:c000, corpus/21_claims_sla:c000, corpus/17_travel_claims:c000
**Context (+expanded):** corpus/28_call_center_hours:c000, corpus/07_towing_roadside:c000, corpus/06_windshield_service:c000, corpus/21_claims_sla:c000, corpus/17_travel_claims:c000
**Validation:** structure=true citations=true
**Tokens:** embed=42 gen_total=1873
**Timings (ms):** total=3137 gen=1968

**Manual review:** factual=pass support=pass completeness=pass

<details><summary>Reference (review only)</summary>

08:00–12:00.

Sources: 28_call_center_hours.md

</details>

## D02 (table)

**Question:** איזה טופס ממלאים כדי לבקש ביטול פוליסה?

**Status:** answered

**Answer:**

כדי לבקש ביטול פוליסה יש למלא את טופס מספר 4401 בשם "בקשה לביטול פוליסה". ניתן להגיש את הבקשה באמצעות אזור אישי או מוקד, וביטול הפוליסה נכנס לתוקף במועד שביקש הלקוח, לאחר קבלת הבקשה.

**Citations:** corpus/20_forms_catalog:c001, corpus/22_cancellation_procedure_2023:c000
**Retrieved:** corpus/20_forms_catalog:c001, corpus/22_cancellation_procedure_2023:c000, corpus/20_forms_catalog:c000, corpus/14_travel_policy_overview:c000, corpus/33_customer_identification:c000
**Context (+expanded):** corpus/20_forms_catalog:c001, corpus/22_cancellation_procedure_2023:c000, corpus/20_forms_catalog:c000, corpus/14_travel_policy_overview:c000, corpus/33_customer_identification:c000
**Validation:** structure=true citations=true
**Tokens:** embed=38 gen_total=2680
**Timings (ms):** total=2994 gen=2777

**Manual review:** factual=pass support=pass completeness=pass

<details><summary>Reference (review only)</summary>

טופס 4401 – בקשה לביטול פוליסה.

Sources: 20_forms_catalog.pdf

</details>

## D03 (version)

**Question:** מה ההשתתפות העצמית בתיקון במוסך הסדר בפוליסת מקיף שהונפקה באפריל 2026?

**Status:** answered

**Answer:**

בהתאם לפוליסת ביטוח רכב מקיף שהונפקה באפריל 2026, ההשתתפות העצמית בתיקון במוסך הסדר היא 1,100 ₪. סכום זה צמוד למדד המחירים לצרכן הידוע ביום 1.3.2026.

**Citations:** corpus/02_car_comprehensive_policy_2026:c000
**Retrieved:** corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000, corpus/31_ofek_plus_vip:c000, corpus/04_young_driver_annex:c000, corpus/22_cancellation_procedure_2023:c000
**Context (+expanded):** corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000, corpus/31_ofek_plus_vip:c000, corpus/04_young_driver_annex:c000, corpus/22_cancellation_procedure_2023:c000
**Validation:** structure=true citations=true
**Tokens:** embed=68 gen_total=3055
**Timings (ms):** total=4073 gen=3181

**Manual focus:**
- FOCUS PASS: Chose 2026 amounts (1,100 ₪) despite 2024 ranking #1 in retrieval.

**Manual review:** factual=pass support=pass completeness=pass

<details><summary>Reference (review only)</summary>

1,100 ₪ (גרסת 2026, שחלה על פוליסות שהונפקו או חודשו מ-1.3.2026).

Sources: 02_car_comprehensive_policy_2026.pdf

</details>

## D04 (no_answer)

**Question:** האם אופק ביטוח מציעה ביטוח לחיות מחמד?

**Status:** insufficient_evidence

**Answer:**

מהמקורות שסופקו, אין מידע המצביע על כך שאופק ביטוח מציעה ביטוח לחיות מחמד. כל המסמכים מתמקדים בתנאים כלליים לפוליסות רכב בלבד.

**Citations:** corpus/03_car_general_terms:c000
**Retrieved:** corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c014
**Context (+expanded):** corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c015 — expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c015
**Validation:** structure=true citations=true
**Tokens:** embed=35 gen_total=4827
**Timings (ms):** total=2181 gen=1942

**Manual focus:**
- FOCUS PASS: insufficient_evidence; no invented pet-insurance product.

**Manual review:** factual=pass support=pass completeness=pass

<details><summary>Reference (review only)</summary>

המידע לא מופיע במסמכים. המערכת צריכה לומר שלא מצאה תשובה, ולא להמציא.

Sources: (none)

</details>

## D05 (ambiguous)

**Question:** מה ההשתתפות העצמית?

**Status:** answered

**Answer:**

ההשתתפות העצמית בפוליסת ביטוח רכב מקיף של אופק ביטוח משתנה לפי סוג האירוע ובגרסת הפוליסה: בגרסת 2024 ההשתתפות העצמית היא 950 ₪ לתיקון במוסך הסדר, 1,850 ₪ לתיקון במוסך שאינו בהסדר, 5% מערך הרכב ולא פחות מ-2,500 ₪ בגניבה או אובדן גמור, וההשתתפות העצמית לנזק לשמשות היא לפי כתב שירות שמשות. בגרסת 2026 ההשתתפות העצמית עלתה ל-1,100 ₪ לתיקון במוסך הסדר, 2,100 ₪ לתיקון במוסך שאינו בהסדר, 5% מערך הרכב ולא פחות מ-3,000 ₪ בגניבה או אובדן גמור, וההשתתפות העצמית לנזק לשמשות נשארה לפי כתב שירות שמשות. ההשתתפות העצמית צמודה למדד המחירים לצרכן ביום תחילת תוקף הפוליסה. לגבי נזק לשמשות, ההשתתפות העצמית תלויה בשימוש ברשת "שמשות אופק" או מחוץ לה, כאשר ברשת אין השתתפות עצמית, ומחוץ לרשת ההשתתפות העצמית היא 400 ₪.

**Citations:** corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000, corpus/06_windshield_service:c000
**Retrieved:** corpus/06_windshield_service:c000, corpus/01_car_comprehensive_policy_2024:c000, corpus/05_car_third_party:c000, corpus/02_car_comprehensive_policy_2026:c000, corpus/03_car_general_terms:c009
**Context (+expanded):** corpus/06_windshield_service:c000, corpus/01_car_comprehensive_policy_2024:c000, corpus/05_car_third_party:c000, corpus/02_car_comprehensive_policy_2026:c000, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011 — expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011
**Validation:** structure=true citations=true
**Tokens:** embed=19 gen_total=6262
**Timings (ms):** total=5200 gen=4912

**Manual focus:**
- FOCUS PARTIAL: Did not set clarification_needed; instead listed car deductible options. Reference allows brief options OR clarification; home deductibles omitted.

**Manual review:** factual=partial support=partial completeness=partial

<details><summary>Reference (review only)</summary>

השאלה עמומה: תלויה בקו המוצר ובסוג האירוע. תשובה טובה מבקשת הבהרה, או מציגה בקצרה את האפשרויות העיקריות עם מקורות.

Sources: 02_car_comprehensive_policy_2026.pdf, 10_home_policy_overview.md

</details>

## D06 (multi_hop)

**Question:** נהג בן 22 נהג ברכב עם פוליסת 'כל נהג' בלי נספח נהג צעיר ועשה תאונה. האם יש כיסוי?

**Status:** answered

**Answer:**

בפוליסת 'כל נהג' הכיסוי חל על כל נהג מורשה כהגדרתו בתנאים הכלליים, כלומר כל אדם שבידו רישיון נהיגה בתוקף לסוג הרכב, שגילו 24 ומעלה ושהוותק שלו בנהיגה לפחות שנתיים, וכן נהג צעיר שנכלל בנספח נהג צעיר בתוקף. במקרה של נהג צעיר (גיל מתחת ל-24 או ותק פחות משנתיים) שאינו נקוב בנספח נהג צעיר, אין כיסוי ביטוחי לאירוע שנגרם בעת נהיגתו. לפיכך, נהג בן 22 שברכב עם פוליסת 'כל נהג' ללא נספח נהג צעיר, במקרה של תאונה, לא יהיה מכוסה על ידי הפוליסה.

**Citations:** corpus/04_young_driver_annex:c000, corpus/25_adding_driver:c000, corpus/01_car_comprehensive_policy_2024:c000, corpus/03_car_general_terms:c002
**Retrieved:** corpus/04_young_driver_annex:c000, corpus/25_adding_driver:c000, corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000, corpus/03_car_general_terms:c001
**Context (+expanded):** corpus/04_young_driver_annex:c000, corpus/25_adding_driver:c000, corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011 — expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011
**Validation:** structure=true citations=true
**Tokens:** embed=86 gen_total=6140
**Timings (ms):** total=3495 gen=3182

**Manual focus:**
- FOCUS PARTIAL: Expansion included §2 definitions (c002) but budget omitted §12 exceptions (c012). Answer still correct via young-driver annex + definition; exception chunk not cited because not in context.

**Manual review:** factual=pass support=partial completeness=partial

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
**Validation:** structure=true citations=true
**Tokens:** embed=82 gen_total=2028
**Timings (ms):** total=1788 gen=1318

**Manual review:** factual=pass support=pass completeness=pass

<details><summary>Reference (review only)</summary>

בתוך 3 ימי עסקים.

Sources: 30_agent_faq_en.md, 15_travel_preexisting_conditions.docx

</details>

## D08 (partial_override)

**Question:** לקוח מבטל פוליסה 10 ימים אחרי הרכישה ולא הגיש תביעות. כמה יקבל בחזרה?

**Status:** answered

**Answer:**

לקוח שמבטל פוליסה בתוך 14 יום ממועד הרכישה, ולא הגיש תביעה, יקבל החזר מלא של דמי הביטוח ששילם, ללא ניכוי דמי טיפול. החישוב הוא באופן יחסי לתקופה שנותרה (pro-rata). במקרה שלך, הביטול בוצע 10 ימים אחרי הרכישה, ולכן הלקוח זכאי להחזר מלא בהתאם לתנאים אלה.

**Citations:** corpus/23_cancellation_procedure_update_2025:c000
**Retrieved:** corpus/32_fraud_red_flags:c000, corpus/22_cancellation_procedure_2023:c000, corpus/23_cancellation_procedure_update_2025:c000, corpus/24_payment_methods:c000, corpus/21_claims_sla:c000
**Context (+expanded):** corpus/32_fraud_red_flags:c000, corpus/22_cancellation_procedure_2023:c000, corpus/23_cancellation_procedure_update_2025:c000, corpus/24_payment_methods:c000, corpus/21_claims_sla:c000
**Validation:** structure=true citations=true
**Tokens:** embed=69 gen_total=1962
**Timings (ms):** total=1852 gen=1627

**Manual focus:**
- FOCUS PARTIAL: Applied 2025 update (full refund within 14 days) correctly, but also appended contradictory pro-rata wording from older procedure.

**Manual review:** factual=partial support=partial completeness=pass

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
**Validation:** structure=true citations=true
**Tokens:** embed=37 gen_total=5529
**Timings (ms):** total=1418 gen=1152

**Manual review:** factual=pass support=pass completeness=pass

<details><summary>Reference (review only)</summary>

2,000 ₪.

Sources: 12_home_contents_limits.docx

</details>

## D10 (conflict)

**Question:** האם רכב חלופי ניתן לכל תקופת התיקון?

**Status:** answered

**Answer:**

רכב חלופי ניתן רק למבוטחים שרכשו כתב שירות רכב חלופי, והוא אינו חלק מהכיסוי הבסיסי בפוליסת מקיף. לגבי תקופת הזכאות לרכב חלופי: במקרה של תאונה שבה הרכב מתוקן במוסך הסדר, הרכב החלופי ניתן לכל תקופת התיקון, אך לא מעבר ל-21 ימים. במקרה של גניבה או אובדן גמור, הזכאות היא עד 30 ימים. במקרה של תקלה מכנית, לא ניתן רכב חלופי. בנוסף, יש לשים לב כי תאונה שבה הרכב מתוקן במוסך שאינו בהסדר אינה מזכה ברכב חלופי.

**Citations:** corpus/08_replacement_car:c000, corpus/09_marketing_brochure_car:c000
**Retrieved:** corpus/08_replacement_car:c000, corpus/09_marketing_brochure_car:c000, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c014
**Context (+expanded):** corpus/08_replacement_car:c000, corpus/09_marketing_brochure_car:c000, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c015 — expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c015
**Validation:** structure=true citations=true
**Tokens:** embed=39 gen_total=5680
**Timings (ms):** total=3058 gen=2801

**Manual focus:**
- FOCUS PASS: Binding service letter limits (21 days, network garage) preserved; marketing brochure cited but not treated as overriding.

**Manual review:** factual=pass support=pass completeness=pass

<details><summary>Reference (review only)</summary>

לא. רכב חלופי ניתן רק למי שרכש כתב שירות רכב חלופי, ובתאונה עד 21 ימים ורק בתיקון במוסך הסדר. העלון השיווקי אומר אחרת, אך הוא אינו מחייב.

Sources: 08_replacement_car.md, 09_marketing_brochure_car.md

</details>

## D11 (table)

**Question:** המזוודה של נוסע הגיעה באיחור של 8 שעות. לכמה פיצוי הוא זכאי?

**Status:** answered

**Answer:**

במקרה של עיכוב בהגעת המזוודה מעל 6 שעות, הנוסע זכאי לפיצוי של עד 150 דולר לרכישת פריטים חיוניים. מאחר שהעיכוב הוא 8 שעות, הוא זכאי לפיצוי זה. אם העיכוב היה מעל 24 שעות, היה זכאי לפיצוי נוסף של עד 150 דולר, אך במקרה זה העיכוב הוא פחות מ-24 שעות.

**Citations:** corpus/16_travel_luggage:c000
**Retrieved:** corpus/16_travel_luggage:c000, corpus/03_car_general_terms:c008, corpus/14_travel_policy_overview:c000, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c010
**Context (+expanded):** corpus/16_travel_luggage:c000, corpus/03_car_general_terms:c008, corpus/14_travel_policy_overview:c000, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c015 — expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c015
**Validation:** structure=true citations=true
**Tokens:** embed=57 gen_total=5568
**Timings (ms):** total=2446 gen=2208

**Manual review:** factual=pass support=pass completeness=pass

<details><summary>Reference (review only)</summary>

עד 150 $ לרכישת פריטים חיוניים, בכפוף לדו"ח PIR מחברת התעופה.

Sources: 16_travel_luggage.md

</details>

## D12 (factual)

**Question:** כמה גרירות מקבלים בשנת ביטוח?

**Status:** answered

**Answer:**

בשנת ביטוח מקבלים עד 4 גרירות לאחר תאונה או תקלה, כפי שמוגדר בכתב שירות גרירה ושירותי דרך של אופק ביטוח.

**Citations:** corpus/07_towing_roadside:c000
**Retrieved:** corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c009, corpus/07_towing_roadside:c000, corpus/05_car_third_party:c000, corpus/09_marketing_brochure_car:c000
**Context (+expanded):** corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c009, corpus/07_towing_roadside:c000, corpus/05_car_third_party:c000, corpus/09_marketing_brochure_car:c000, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013 — expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013
**Validation:** structure=true citations=true
**Tokens:** embed=28 gen_total=5485
**Timings (ms):** total=1414 gen=1151

**Manual review:** factual=pass support=pass completeness=pass

<details><summary>Reference (review only)</summary>

עד 4 גרירות בשנת ביטוח (למי שרכש כתב שירות גרירה).

Sources: 07_towing_roadside.md

</details>

## D13 (table)

**Question:** נוסעת בשבוע 28 להריון. האם סיבוכי הריון מכוסים בחו"ל?

**Status:** answered

**Answer:**

סיבוכי הריון מכוסים במסגרת ביטוח נסיעות לחו"ל רק עד שבוע 26 להריון. במקרה של שבוע 28 להריון, סיבוכי הריון אינם מכוסים בביטוח נסיעות, אלא אם הוצהרו מראש ואושרו על ידי חתמות רפואית, אך לפי המסמך, מעל שבוע 26 אין כיסוי לסיבוכי הריון.

**Citations:** corpus/15_travel_preexisting_conditions:c000
**Retrieved:** corpus/14_travel_policy_overview:c000, corpus/15_travel_preexisting_conditions:c000, corpus/07_towing_roadside:c000, corpus/09_marketing_brochure_car:c000, corpus/17_travel_claims:c000
**Context (+expanded):** corpus/14_travel_policy_overview:c000, corpus/15_travel_preexisting_conditions:c000, corpus/07_towing_roadside:c000, corpus/09_marketing_brochure_car:c000, corpus/17_travel_claims:c000
**Validation:** structure=true citations=true
**Tokens:** embed=48 gen_total=2192
**Timings (ms):** total=2045 gen=1796

**Manual review:** factual=pass support=pass completeness=pass

<details><summary>Reference (review only)</summary>

לא. סיבוכי הריון מכוסים רק עד שבוע 26.

Sources: 15_travel_preexisting_conditions.docx

</details>

## D14 (table)

**Question:** מה ההשתתפות העצמית ברעידת אדמה בפרק המבנה?

**Status:** answered

**Answer:**

ההשתתפות העצמית ברעידת אדמה בפרק המבנה היא 10% מסכום ביטוח המבנה. במקרה של דירה בבניין שעבר חיזוק לפי תמ"א 38, ההשתתפות העצמית היא 5% מסכום ביטוח המבנה.

**Citations:** corpus/13_home_earthquake_annex:c000
**Retrieved:** corpus/13_home_earthquake_annex:c000, corpus/10_home_policy_overview:c000, corpus/31_ofek_plus_vip:c000, corpus/06_windshield_service:c000, corpus/11_home_water_damage:c000
**Context (+expanded):** corpus/13_home_earthquake_annex:c000, corpus/10_home_policy_overview:c000, corpus/31_ofek_plus_vip:c000, corpus/06_windshield_service:c000, corpus/11_home_water_damage:c000
**Validation:** structure=true citations=true
**Tokens:** embed=40 gen_total=2383
**Timings (ms):** total=1893 gen=1568

**Manual review:** factual=pass support=pass completeness=pass

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
**Validation:** structure=true citations=true
**Tokens:** embed=49 gen_total=5665
**Timings (ms):** total=1585 gen=1323

**Manual review:** factual=pass support=pass completeness=pass

<details><summary>Reference (review only)</summary>

בתוך 24 שעות ממועד הגילוי.

Sources: 03_car_general_terms.pdf, 18_claims_process_car.md

</details>
