# Ask evaluation — stage5.2-final-core

- Generated: 2026-10-21T06:18:06.851Z
- Retrieval mode: hybrid
- Generation model: gpt-4.1-mini
- Questions: 15
- System errors: 0
- Status counts: {"answered":4,"clarification_needed":10,"insufficient_evidence":1}

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
**Clarify gate:** needs=false missing=-
**Tokens:** clarify=272 embed=42 gen_total=1896
**Timings (ms):** clarify=1997 retrieve=587 gen=1023 total=3632

**Manual review:** conclusion=pass claimSupport=pass completeness=pass behavior=pass

<details><summary>Reference (review only)</summary>

08:00–12:00.

Sources: 28_call_center_hours.md

</details>

## D02 (table)

**Question:** איזה טופס ממלאים כדי לבקש ביטול פוליסה?

**Status:** answered

**Answer:**

כדי לבקש ביטול פוליסה יש למלא את טופס מספר 4401 בשם "בקשה לביטול פוליסה".

בנוסף, ניתן להגיש את בקשת הביטול גם בשיחה מוקלטת במוקד לאחר זיהוי מלא של הלקוח.

**Answer parts:** 2
**Citations (from parts):** corpus/20_forms_catalog:c001, corpus/22_cancellation_procedure_2023:c000
**Retrieved:** corpus/20_forms_catalog:c001, corpus/22_cancellation_procedure_2023:c000, corpus/20_forms_catalog:c000, corpus/14_travel_policy_overview:c000, corpus/33_customer_identification:c000
**Context (+expanded):** corpus/20_forms_catalog:c001, corpus/22_cancellation_procedure_2023:c000, corpus/20_forms_catalog:c000, corpus/14_travel_policy_overview:c000, corpus/33_customer_identification:c000
**Validation (chunkId technical only):** structure=true citations=true
**Clarify gate:** needs=false missing=-
**Tokens:** clarify=274 embed=38 gen_total=2599
**Timings (ms):** clarify=807 retrieve=453 gen=1565 total=2849

**Manual review:** conclusion=pass claimSupport=pass completeness=pass behavior=pass

<details><summary>Reference (review only)</summary>

טופס 4401 – בקשה לביטול פוליסה.

Sources: 20_forms_catalog.pdf

</details>

## D03 (version)

**Question:** מה ההשתתפות העצמית בתיקון במוסך הסדר בפוליסת מקיף שהונפקה באפריל 2026?

**Status:** clarification_needed

**Answer:**

איזו פוליסת מקיף ומה תאריך הנפקה מדויק?

**Answer parts:** 1
**Citations (from parts):** (none)
**Retrieved:** (none) (skipped)
**Context (+expanded):** (none)
**Validation (chunkId technical only):** structure=true citations=true
**Clarify gate:** needs=true missing=פוליסת מקיף, תאריך הנפקה
**Tokens:** clarify=318 embed=- gen_total=-
**Timings (ms):** clarify=1310 retrieve=0 gen=0 total=1311

**Manual focus:**
- REGRESSION: question already specifies Apr 2026 network-garage deductible — should not clarify.

**Manual review:** conclusion=n_a claimSupport=n_a completeness=n_a behavior=fail

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
**Clarify gate:** needs=false missing=-
**Tokens:** clarify=273 embed=35 gen_total=4783
**Timings (ms):** clarify=706 retrieve=219 gen=727 total=1678

**Manual focus:**
- Neutral insufficient wording; no corpus-wide claim; no irrelevant citation.

**Manual review:** conclusion=pass claimSupport=pass completeness=pass behavior=pass

<details><summary>Reference (review only)</summary>

המידע לא מופיע במסמכים. המערכת צריכה לומר שלא מצאה תשובה, ולא להמציא.

Sources: (none)

</details>

## D05 (ambiguous)

**Question:** מה ההשתתפות העצמית?

**Status:** clarification_needed

**Answer:**

איזו פוליסה אתה מתכוון אליה?

**Answer parts:** 1
**Citations (from parts):** (none)
**Retrieved:** (none) (skipped)
**Context (+expanded):** (none)
**Validation (chunkId technical only):** structure=true citations=true
**Clarify gate:** needs=true missing=סוג הפוליסה
**Tokens:** clarify=282 embed=- gen_total=-
**Timings (ms):** clarify=842 retrieve=0 gen=0 total=843

**Manual focus:**
- clarification_needed before retrieve; skippedRetrieval=true.

**Manual review:** conclusion=n_a claimSupport=n_a completeness=n_a behavior=pass

<details><summary>Reference (review only)</summary>

השאלה עמומה: תלויה בקו המוצר ובסוג האירוע. תשובה טובה מבקשת הבהרה, או מציגה בקצרה את האפשרויות העיקריות עם מקורות.

Sources: 02_car_comprehensive_policy_2026.pdf, 10_home_policy_overview.md

</details>

## D06 (multi_hop)

**Question:** נהג בן 22 נהג ברכב עם פוליסת 'כל נהג' בלי נספח נהג צעיר ועשה תאונה. האם יש כיסוי?

**Status:** clarification_needed

**Answer:**

האם תוכל לספק פרטים נוספים על סוג הפוליסה והכיסויים שלה?

**Answer parts:** 1
**Citations (from parts):** (none)
**Retrieved:** (none) (skipped)
**Context (+expanded):** (none)
**Validation (chunkId technical only):** structure=true citations=true
**Clarify gate:** needs=true missing=פוליסת ביטוח ספציפית, פרטי הפוליסה לגבי כיסוי נהגים צעירים
**Tokens:** clarify=337 embed=- gen_total=-
**Timings (ms):** clarify=973 retrieve=0 gen=0 total=975

**Manual focus:**
- REGRESSION: scenario already specific (age 22, כל נהג, no annex). §12 expansion issue not re-tested this run.

**Manual review:** conclusion=n_a claimSupport=n_a completeness=n_a behavior=fail

<details><summary>Reference (review only)</summary>

לא. לפי הגדרת 'נהג מורשה' (סעיף 2) נהג מתחת לגיל 24 אינו נהג מורשה אלא אם נכלל בנספח נהג צעיר, וסעיף 12(א) מחריג נזק בעת נהיגה בידי מי שאינו נהג מורשה.

Sources: 03_car_general_terms.pdf, 04_young_driver_annex.docx

</details>

## D07 (cross_lingual)

**Question:** תוך כמה זמן חתמות רפואית עונה לבקשה של סוכן לגבי מצב רפואי קודם בביטוח נסיעות?

**Status:** answered

**Answer:**

חתמות רפואית עונה לבקשות לגבי מצב רפואי קודם בביטוח נסיעות בתוך 3 ימי עסקים.

במקרה של בקשה דחופה, למשל כאשר הנסיעה מתוכננת בתוך 48 שעות, יש לסמן "דחוף" בטופס כדי לקבל מענה מהיר יותר.

**Answer parts:** 2
**Citations (from parts):** corpus/15_travel_preexisting_conditions:c000
**Retrieved:** corpus/15_travel_preexisting_conditions:c000, corpus/14_travel_policy_overview:c000, corpus/17_travel_claims:c000, corpus/21_claims_sla:c000, corpus/32_fraud_red_flags:c000
**Context (+expanded):** corpus/15_travel_preexisting_conditions:c000, corpus/14_travel_policy_overview:c000, corpus/17_travel_claims:c000, corpus/21_claims_sla:c000, corpus/32_fraud_red_flags:c000
**Validation (chunkId technical only):** structure=true citations=true
**Clarify gate:** needs=false missing=-
**Tokens:** clarify=285 embed=82 gen_total=2054
**Timings (ms):** clarify=697 retrieve=1034 gen=1200 total=2957

**Manual review:** conclusion=pass claimSupport=pass completeness=pass behavior=pass

<details><summary>Reference (review only)</summary>

בתוך 3 ימי עסקים.

Sources: 30_agent_faq_en.md, 15_travel_preexisting_conditions.docx

</details>

## D08 (partial_override)

**Question:** לקוח מבטל פוליסה 10 ימים אחרי הרכישה ולא הגיש תביעות. כמה יקבל בחזרה?

**Status:** clarification_needed

**Answer:**

איזה סוג פוליסה הלקוח ביטל ומהם תנאי הביטול שלה?

**Answer parts:** 1
**Citations (from parts):** (none)
**Retrieved:** (none) (skipped)
**Context (+expanded):** (none)
**Validation (chunkId technical only):** structure=true citations=true
**Clarify gate:** needs=true missing=סוג הפוליסה, תנאי הביטול בפוליסה
**Tokens:** clarify=316 embed=- gen_total=-
**Timings (ms):** clarify=859 retrieve=0 gen=0 total=859

**Manual focus:**
- REGRESSION: 10-day cancel / no claims is specific enough for cooling-off rule.

**Manual review:** conclusion=n_a claimSupport=n_a completeness=n_a behavior=fail

<details><summary>Reference (review only)</summary>

החזר מלא של דמי הביטוח, ללא דמי טיפול (תקופת התחרטות של 14 יום לפי עדכון 2025).

Sources: 23_cancellation_procedure_update_2025.md

</details>

## D09 (table)

**Question:** מה תקרת הכיסוי למזומן בביטוח תכולה?

**Status:** clarification_needed

**Answer:**

איזו פוליסת ביטוח תכולה יש לך ומה הגרסה שלה?

**Answer parts:** 1
**Citations (from parts):** (none)
**Retrieved:** (none) (skipped)
**Context (+expanded):** (none)
**Validation (chunkId technical only):** structure=true citations=true
**Clarify gate:** needs=true missing=סוג פוליסה, גרסת פוליסה
**Tokens:** clarify=301 embed=- gen_total=-
**Timings (ms):** clarify=907 retrieve=0 gen=0 total=908

**Manual focus:**
- REGRESSION: cash contents limit is a clear table ask.

**Manual review:** conclusion=n_a claimSupport=n_a completeness=n_a behavior=fail

<details><summary>Reference (review only)</summary>

2,000 ₪.

Sources: 12_home_contents_limits.docx

</details>

## D10 (conflict)

**Question:** האם רכב חלופי ניתן לכל תקופת התיקון?

**Status:** clarification_needed

**Answer:**

איזו פוליסה וגרסה יש לך?

**Answer parts:** 1
**Citations (from parts):** (none)
**Retrieved:** (none) (skipped)
**Context (+expanded):** (none)
**Validation (chunkId technical only):** structure=true citations=true
**Clarify gate:** needs=true missing=סוג הפוליסה, גרסת הפוליסה
**Tokens:** clarify=293 embed=- gen_total=-
**Timings (ms):** clarify=859 retrieve=0 gen=0 total=859

**Manual focus:**
- REGRESSION.

**Manual review:** conclusion=n_a claimSupport=n_a completeness=n_a behavior=fail

<details><summary>Reference (review only)</summary>

לא. רכב חלופי ניתן רק למי שרכש כתב שירות רכב חלופי, ובתאונה עד 21 ימים ורק בתיקון במוסך הסדר. העלון השיווקי אומר אחרת, אך הוא אינו מחייב.

Sources: 08_replacement_car.md, 09_marketing_brochure_car.md

</details>

## D11 (table)

**Question:** המזוודה של נוסע הגיעה באיחור של 8 שעות. לכמה פיצוי הוא זכאי?

**Status:** clarification_needed

**Answer:**

איזה סוג ביטוח יש לנוסע ומה גרסת הפוליסה?

**Answer parts:** 1
**Citations (from parts):** (none)
**Retrieved:** (none) (skipped)
**Context (+expanded):** (none)
**Validation (chunkId technical only):** structure=true citations=true
**Clarify gate:** needs=true missing=סוג ביטוח, גרסת פוליסה
**Tokens:** clarify=308 embed=- gen_total=-
**Timings (ms):** clarify=828 retrieve=0 gen=0 total=829

**Manual focus:**
- REGRESSION: 8h luggage delay is specific.

**Manual review:** conclusion=n_a claimSupport=n_a completeness=n_a behavior=fail

<details><summary>Reference (review only)</summary>

עד 150 $ לרכישת פריטים חיוניים, בכפוף לדו"ח PIR מחברת התעופה.

Sources: 16_travel_luggage.md

</details>

## D12 (factual)

**Question:** כמה גרירות מקבלים בשנת ביטוח?

**Status:** clarification_needed

**Answer:**

איזו פוליסה ושנת ביטוח אתה מתכוון אליהם?

**Answer parts:** 1
**Citations (from parts):** (none)
**Retrieved:** (none) (skipped)
**Context (+expanded):** (none)
**Validation (chunkId technical only):** structure=true citations=true
**Clarify gate:** needs=true missing=סוג פוליסה, שנת ביטוח ספציפית
**Tokens:** clarify=295 embed=- gen_total=-
**Timings (ms):** clarify=1019 retrieve=0 gen=0 total=1019

**Manual focus:**
- REGRESSION.

**Manual review:** conclusion=n_a claimSupport=n_a completeness=n_a behavior=fail

<details><summary>Reference (review only)</summary>

עד 4 גרירות בשנת ביטוח (למי שרכש כתב שירות גרירה).

Sources: 07_towing_roadside.md

</details>

## D13 (table)

**Question:** נוסעת בשבוע 28 להריון. האם סיבוכי הריון מכוסים בחו"ל?

**Status:** clarification_needed

**Answer:**

איזו פוליסת ביטוח יש לך ומהו אזור הכיסוי שלה?

**Answer parts:** 1
**Citations (from parts):** (none)
**Retrieved:** (none) (skipped)
**Context (+expanded):** (none)
**Validation (chunkId technical only):** structure=true citations=true
**Clarify gate:** needs=true missing=סוג פוליסה, כיסוי גאוגרפי
**Tokens:** clarify=309 embed=- gen_total=-
**Timings (ms):** clarify=880 retrieve=0 gen=0 total=880

**Manual focus:**
- REGRESSION: week 28 pregnancy travel is specific.

**Manual review:** conclusion=n_a claimSupport=n_a completeness=n_a behavior=fail

<details><summary>Reference (review only)</summary>

לא. סיבוכי הריון מכוסים רק עד שבוע 26.

Sources: 15_travel_preexisting_conditions.docx

</details>

## D14 (table)

**Question:** מה ההשתתפות העצמית ברעידת אדמה בפרק המבנה?

**Status:** clarification_needed

**Answer:**

איזו פוליסה וגרסה יש לך?

**Answer parts:** 1
**Citations (from parts):** (none)
**Retrieved:** (none) (skipped)
**Context (+expanded):** (none)
**Validation (chunkId technical only):** structure=true citations=true
**Clarify gate:** needs=true missing=סוג הפוליסה, גרסת הפוליסה
**Tokens:** clarify=297 embed=- gen_total=-
**Timings (ms):** clarify=863 retrieve=0 gen=0 total=863

**Manual focus:**
- REGRESSION: TAMA38 earthquake deductible ask is specific.

**Manual review:** conclusion=n_a claimSupport=n_a completeness=n_a behavior=fail

<details><summary>Reference (review only)</summary>

10% מסכום ביטוח המבנה (5% בבניין שעבר חיזוק לפי תמ"א 38).

Sources: 13_home_earthquake_annex.pdf

</details>

## D15 (factual)

**Question:** תוך כמה זמן יש להגיש תלונה במשטרה על גניבת רכב?

**Status:** answered

**Answer:**

על המבוטח להגיש תלונה במשטרה על גניבת רכב בתוך 24 שעות ממועד הגילוי.

בנוסף, יש להמציא למבטח את אישור התלונה במשטרה כדי להמשיך בתהליך התביעה.

**Answer parts:** 2
**Citations (from parts):** corpus/03_car_general_terms:c007, corpus/18_claims_process_car:c000
**Retrieved:** corpus/03_car_general_terms:c007, corpus/16_travel_luggage:c000, corpus/07_towing_roadside:c000, corpus/18_claims_process_car:c000, corpus/01_car_comprehensive_policy_2024:c000
**Context (+expanded):** corpus/03_car_general_terms:c007, corpus/16_travel_luggage:c000, corpus/07_towing_roadside:c000, corpus/18_claims_process_car:c000, corpus/01_car_comprehensive_policy_2024:c000, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c013 — expanded: corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c013
**Validation (chunkId technical only):** structure=true citations=true
**Clarify gate:** needs=false missing=-
**Omitted expansions:** corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c015
**Tokens:** clarify=276 embed=49 gen_total=5706
**Timings (ms):** clarify=889 retrieve=212 gen=1617 total=2742

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

איזו פוליסה ומספר פוליסה יש לך?

**Answer parts:** 1
**Citations (from parts):** (none)
**Retrieved:** (none) (skipped)
**Context (+expanded):** (none)
**Validation (chunkId technical only):** structure=true citations=true
**Clarify gate:** needs=true missing=סוג פוליסה, מספר פוליסה
**Tokens:** clarify=289 embed=- gen_total=-
**Timings (ms):** clarify=862 retrieve=0 gen=0 total=862

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
**Clarify gate:** needs=false missing=-
**Tokens:** clarify=275 embed=42 gen_total=4785
**Timings (ms):** clarify=717 retrieve=222 gen=732 total=1698

**Manual focus:**
- EXTRA PROBE (not in reference set): insufficient_evidence — describe limit of provided sources; do not invent coverage or claim company-wide absence.

**Manual review:** conclusion=pass claimSupport=pass completeness=pass behavior=pass

<details><summary>Reference (review only)</summary>

(extra probe) expected: insufficient_evidence — describe limit of provided sources; do not invent coverage or claim company-wide absence.

Sources: (none)

</details>
