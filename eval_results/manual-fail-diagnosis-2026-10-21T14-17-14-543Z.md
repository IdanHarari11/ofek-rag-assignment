# Manual-fail diagnosis — manual-fail-regression-v1

Generated: 2026-10-21T14:17:14.543Z
Config: mode=hybrid topK=5 review=false

| Case | Turn | Status | Suggested layer | Standalone (trunc) | Cited files |
| --- | --- | --- | --- | --- | --- |
| MF-A | 0 | answered | undetermined | מה ההשתתפות העצמית במוסך הסדר בכל אחד מהמקרים: פוליסה שהונפק | 02_car_comprehensive_policy_2026.pdf |
| MF-B | 0 | answered | undetermined | רכב מקיף שהונפק באפריל 2026: מה ההשתתפות העצמית במוסך הסדר? | 02_car_comprehensive_policy_2026.pdf |
| MF-B | 1 | answered | undetermined | מה ההשתתפות העצמית במוסך הסדר בפוליסת רכב מקיף שהונפקה בפברו | 01_car_comprehensive_policy_2024.pdf |
| MF-B | 2 | answered | undetermined | מהי ההשתתפות העצמית בפוליסת רכב מקיף שהונפקה בפברואר 2026 ול | 01_car_comprehensive_policy_2024.pdf |
| MF-C | 0 | answered | undetermined | השתתפות עצמית ברכב מקיף שהונפק באפריל 2026, במוסך הסדר. | 02_car_comprehensive_policy_2026.pdf |
| MF-C | 1 | clarification_needed | mixed | מהי תקרת הכיסוי למזומנים בביטוח תכולת דירה של אופק ביטוח? | — |
| MF-C | 2 | clarification_needed | mixed | מהי ההשתתפות העצמית בביטוח תכולת דירה? | — |
| MF-D | 0 | answered | generation | אני מבטל פוליסה בשנת 2026, עשרה ימים אחרי תחילת הביטוח, ולא  | 23_cancellation_procedure_update_2025.md, 22_cancellation_procedure_2023.md |
| MF-E | 0 | system_error | undetermined |  | — |
| MF-F | 0 | answered | undetermined | כבודה התעכבה 30 שעות. יש PIR וקבלות על פריטים חיוניים בסך 22 | 16_travel_luggage.md |

## MF-A turn 0 — שלוש תחולות באותה שאלה — השתתפות במוסך הסדר

- theme: multi_applicability_single_ask
- question: מה ההשתתפות העצמית במוסך הסדר בכל אחד מהמקרים: פוליסה שהונפקה ב-28.2.2026 ולא חודשה; פוליסה שהונפקה ב-1.3.2026; פוליסה שהונפקה ב-2024 וחודשה ב-1.4.2026?
- historyLength: 0
- status: answered
- standaloneQuestion: מה ההשתתפות העצמית במוסך הסדר בכל אחד מהמקרים: פוליסה שהונפקה ב-28.2.2026 ולא חודשה; פוליסה שהונפקה ב-1.3.2026; פוליסה שהונפקה ב-2024 וחודשה ב-1.4.2026?
- unresolvedReferences: —
- retrieved: corpus/02_car_comprehensive_policy_2026:c000, corpus/01_car_comprehensive_policy_2024:c000, corpus/24_payment_methods:c000, corpus/22_cancellation_procedure_2023:c000, corpus/31_ofek_plus_vip:c000
- context: corpus/02_car_comprehensive_policy_2026:c000, corpus/24_payment_methods:c000, corpus/22_cancellation_procedure_2023:c000, corpus/31_ofek_plus_vip:c000, corpus/03_car_general_terms:c000, corpus/23_cancellation_procedure_update_2025:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011
- applicability lines: Applicability and document-relationship summary (source-based metadata — not a substitute for source text): / - Family car_comprehensive_policy: selected corpus/02_car_comprehensive_policy_2026 (issue_or_renewal_on_or_after_2026_03_01, dateKind=renewal). Evidence: corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000 / - Family cancellation_procedure: partial update — use corpus/23_cancellation_procedure_update_2025 for updated sections, keep corpus/22_cancellation_procedure_2023 for sections not replaced (partial_update_refund_section_from_2025). Evidence: corpus/22_cancellation_procedure_2023:c000, corpus/23_cancellation_procedure_update_2025:c000, corpus/23_cancellation_procedure_update_2025:c000 / - Relationship supersedes: corpus/02_car_comprehensive_policy_2026 → corpus/01_car_comprehensive_policy_2024 / - Relationship supplemented_by: corpus/02_car_comprehensive_policy_2026 → corpus/03_car_general_terms / - Relationship superseded_by: corpus/01_car_comprehensive_policy_2024 → corpus/02_car_comprehensive_policy_2026 / - Relationship supplemented_by: corpus/01_car_comprehensive_policy_2024 → corpus/03_car_general_terms / - Relationship partially_updated_by: corpus/22_cancellation_procedure_2023 → corpus/23_cancellation_procedure_update_2025 sections: חישוב ההחזר / - Relationship partially_updates: corpus/23_cancellation_procedure_update_2025 → corpus/22_cancellation_procedure_2023 sections: חישוב ההחזר / - Marketing document corpus/09_marketing_brochure_car: marketing only; binding terms are the policy conditions and service riders (see evidence in the manifest).
- cited: corpus/02_car_comprehensive_policy_2026:c000
- answer: לגבי פוליסה שהונפקה ב-28.2.2026 ולא חודשה, הפוליסה ממשיכה לפעול לפי גרסת 2024 עד מועד החידוש הבא, ולכן ההשתתפות העצמית תיקבע לפי תנאי גרסת 2024 (פרטים מדויקים של ההשתתפות העצמית בגרסת 2024 לא סופקו בהקשר הנוכחי).

לגבי פוליסה שהונפקה ב-1.3.2026, חלה גרסת 2026, ובה ההשתתפות העצמית בנזק חלקי לתיקון במוסך הסדר היא 1,100 ₪, בנזק חלקי לתיקון במוסך שאינו בהסדר 2,100 ₪, ובגניבה או אובדן גמור 5% מערך הרכב ולא פחות מ-3,000 ₪. ההשתתפות העצמית צמודה למדד המחירים לצרכן הידוע ביום 1.3.2026.

לגבי פוליסה שהונפקה ב-2024 וחודשה ב-1.4.2026, חלה גרסת 2026 החל ממועד החידוש, ולכן ההשתתפות העצמית תהיה בהתאם לגרסת 2026 כפי שפורטה לעיל.
- suggestedLayer: undetermined
- layerEvidence: no automatic failure markers
- observedFailure: Manual probe target: distinguish three applicability outcomes in one answer.
- sourceNotes: 2024 policy: מוסך הסדר 950 ₪ (index base 1.1.2024). 2026 policy: מוסך הסדר 1,100 ₪ from issue/renewal on/after 1.3.2026 (index base 1.3.2026). Case1 28.2.2026 no renewal → 2024/950. Case2 1.3.2026 → 2026/1100. Case3 issued 2024 renewed 1.4.2026 → 2026/1100. Do not confuse issue date with index base date.
- sources UI: citationIdsUnique=false versionFilesDistinguishable=true sectionPathPresent=true

## MF-B turn 0 — תיקון עובדה לאורך שיחה — תאריך הנפקה

- theme: user_fact_correction_date
- question: רכב מקיף שהונפק באפריל 2026: מה ההשתתפות העצמית במוסך הסדר?
- historyLength: 0
- status: answered
- standaloneQuestion: רכב מקיף שהונפק באפריל 2026: מה ההשתתפות העצמית במוסך הסדר?
- unresolvedReferences: —
- retrieved: corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000, corpus/08_replacement_car:c000, corpus/18_claims_process_car:c000, corpus/04_young_driver_annex:c000
- context: corpus/02_car_comprehensive_policy_2026:c000, corpus/08_replacement_car:c000, corpus/18_claims_process_car:c000, corpus/04_young_driver_annex:c000, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c014
- applicability lines: Applicability and document-relationship summary (source-based metadata — not a substitute for source text): / - Family car_comprehensive_policy: selected corpus/02_car_comprehensive_policy_2026 (issue_or_renewal_on_or_after_2026_03_01, dateKind=issue). Evidence: corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000 / - Relationship superseded_by: corpus/01_car_comprehensive_policy_2024 → corpus/02_car_comprehensive_policy_2026 / - Relationship supplemented_by: corpus/01_car_comprehensive_policy_2024 → corpus/03_car_general_terms / - Relationship supersedes: corpus/02_car_comprehensive_policy_2026 → corpus/01_car_comprehensive_policy_2024 / - Relationship supplemented_by: corpus/02_car_comprehensive_policy_2026 → corpus/03_car_general_terms / - Marketing document corpus/09_marketing_brochure_car: marketing only; binding terms are the policy conditions and service riders (see evidence in the manifest).
- cited: corpus/02_car_comprehensive_policy_2026:c000
- answer: ההשתתפות העצמית במוסך הסדר עבור רכב מקיף שהונפק באפריל 2026 היא 1,100 ₪. ההשתתפות העצמית צמודה למדד המחירים לצרכן הידוע ביום 1.3.2026.
- suggestedLayer: undetermined
- layerEvidence: no automatic failure markers
- observedFailure: Baseline turn (April 2026 → expect 2026 amounts).
- sourceNotes: April 2026 issue → 2026 version → 1,100 ₪ מוסך הסדר.
- sources UI: citationIdsUnique=true versionFilesDistinguishable=true sectionPathPresent=true

## MF-B turn 1 — תיקון עובדה לאורך שיחה — תאריך הנפקה

- theme: user_fact_correction_date
- question: טעיתי: הפוליסה הונפקה בפברואר 2026 ולא חודשה מאז.
- historyLength: 2
- status: answered
- standaloneQuestion: מה ההשתתפות העצמית במוסך הסדר בפוליסת רכב מקיף שהונפקה בפברואר 2026 ולא חודשה מאז?
- unresolvedReferences: —
- retrieved: corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000, corpus/08_replacement_car:c000, corpus/04_young_driver_annex:c000, corpus/18_claims_process_car:c000
- context: corpus/01_car_comprehensive_policy_2024:c000, corpus/08_replacement_car:c000, corpus/04_young_driver_annex:c000, corpus/18_claims_process_car:c000, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c013
- applicability lines: Applicability and document-relationship summary (source-based metadata — not a substitute for source text): / - Family car_comprehensive_policy: selected corpus/01_car_comprehensive_policy_2024 (issue_or_renewal_before_2026_03_01, dateKind=issue). Evidence: corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000 / - Relationship superseded_by: corpus/01_car_comprehensive_policy_2024 → corpus/02_car_comprehensive_policy_2026 / - Relationship supplemented_by: corpus/01_car_comprehensive_policy_2024 → corpus/03_car_general_terms / - Relationship supersedes: corpus/02_car_comprehensive_policy_2026 → corpus/01_car_comprehensive_policy_2024 / - Relationship supplemented_by: corpus/02_car_comprehensive_policy_2026 → corpus/03_car_general_terms / - Marketing document corpus/09_marketing_brochure_car: marketing only; binding terms are the policy conditions and service riders (see evidence in the manifest).
- cited: corpus/01_car_comprehensive_policy_2024:c000
- answer: בהתאם לפוליסת רכב מקיף שהונפקה בפברואר 2026 (כלומר לפני מרץ 2026), ההשתתפות העצמית במקרה של נזק חלקי ותיקון במוסך הסדר היא 950 ש"ח. סכום זה צמוד למדד המחירים לצרכן הידוע ביום 1.1.2024.
- suggestedLayer: undetermined
- layerEvidence: no automatic failure markers
- observedFailure: System chose 2024 amounts but rewrote the user's issue date to 2024 or 1.1.2024.
- sourceNotes: February 2026 issue, not renewed → still under 2024 wording until next renewal → 950 ₪ מוסך הסדר. User date remains February 2026; 1.1.2024 is index base, not issue date.
- sources UI: citationIdsUnique=true versionFilesDistinguishable=true sectionPathPresent=true

## MF-B turn 2 — תיקון עובדה לאורך שיחה — תאריך הנפקה

- theme: user_fact_correction_date
- question: ומה במוסך שאינו בהסדר?
- historyLength: 4
- status: answered
- standaloneQuestion: מהי ההשתתפות העצמית בפוליסת רכב מקיף שהונפקה בפברואר 2026 ולא חודשה מאז, במקרה של תיקון במוסך שאינו מוסך הסדר?
- unresolvedReferences: —
- retrieved: corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000, corpus/08_replacement_car:c000, corpus/04_young_driver_annex:c000, corpus/03_car_general_terms:c007
- context: corpus/01_car_comprehensive_policy_2024:c000, corpus/08_replacement_car:c000, corpus/04_young_driver_annex:c000, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013
- applicability lines: Applicability and document-relationship summary (source-based metadata — not a substitute for source text): / - Family car_comprehensive_policy: selected corpus/01_car_comprehensive_policy_2024 (issue_or_renewal_before_2026_03_01, dateKind=issue). Evidence: corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000 / - Family car_general_terms: cannot decide version (no_machine_rule). Alternatives: corpus/03_car_general_terms. Evidence: corpus/03_car_general_terms:c000 / - Relationship superseded_by: corpus/01_car_comprehensive_policy_2024 → corpus/02_car_comprehensive_policy_2026 / - Relationship supplemented_by: corpus/01_car_comprehensive_policy_2024 → corpus/03_car_general_terms / - Relationship supersedes: corpus/02_car_comprehensive_policy_2026 → corpus/01_car_comprehensive_policy_2024 / - Relationship supplemented_by: corpus/02_car_comprehensive_policy_2026 → corpus/03_car_general_terms / - Marketing document corpus/09_marketing_brochure_car: marketing only; binding terms are the policy conditions and service riders (see evidence in the manifest).
- cited: corpus/01_car_comprehensive_policy_2024:c000
- answer: בהתאם לפוליסת רכב מקיף שהונפקה בגרסת 2024 (בתוקף מיום 1.1.2024), במקרה של תיקון במוסך שאינו מוסך הסדר, סכום ההשתתפות העצמית הוא 1,850 ₪. סכום זה צמוד למדד המחירים לצרכן הידוע ביום 1.1.2024.
- suggestedLayer: undetermined
- layerEvidence: no automatic failure markers
- observedFailure: Same date-mutation risk on follow-up; expect 2024 non-network amount 1,850 ₪.
- sourceNotes: 2024 non-network workshop deductible: 1,850 ₪. Keep user issue date February 2026.
- sources UI: citationIdsUnique=true versionFilesDistinguishable=true sectionPathPresent=true

## MF-C turn 0 — החלפת נושא — רכב → מזומנים בתכולה → השתתפות

- theme: topic_switch_false_clarification
- question: השתתפות עצמית ברכב מקיף שהונפק באפריל 2026, במוסך הסדר.
- historyLength: 0
- status: answered
- standaloneQuestion: השתתפות עצמית ברכב מקיף שהונפק באפריל 2026, במוסך הסדר.
- unresolvedReferences: —
- retrieved: corpus/02_car_comprehensive_policy_2026:c000, corpus/01_car_comprehensive_policy_2024:c000, corpus/08_replacement_car:c000, corpus/09_marketing_brochure_car:c000, corpus/03_car_general_terms:c006
- context: corpus/02_car_comprehensive_policy_2026:c000, corpus/08_replacement_car:c000, corpus/09_marketing_brochure_car:c000, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c013
- applicability lines: Applicability and document-relationship summary (source-based metadata — not a substitute for source text): / - Family car_comprehensive_policy: selected corpus/02_car_comprehensive_policy_2026 (issue_or_renewal_on_or_after_2026_03_01, dateKind=issue). Evidence: corpus/01_car_comprehensive_policy_2024:c000, corpus/02_car_comprehensive_policy_2026:c000 / - Family car_general_terms: cannot decide version (no_machine_rule). Alternatives: corpus/03_car_general_terms. Evidence: corpus/03_car_general_terms:c000 / - Family car_marketing: selected corpus/09_marketing_brochure_car (marketing_non_binding). Evidence: corpus/09_marketing_brochure_car:c000 / - Relationship supersedes: corpus/02_car_comprehensive_policy_2026 → corpus/01_car_comprehensive_policy_2024 / - Relationship supplemented_by: corpus/02_car_comprehensive_policy_2026 → corpus/03_car_general_terms / - Relationship superseded_by: corpus/01_car_comprehensive_policy_2024 → corpus/02_car_comprehensive_policy_2026 / - Relationship supplemented_by: corpus/01_car_comprehensive_policy_2024 → corpus/03_car_general_terms / - Relationship defers_to: corpus/09_marketing_brochure_car → corpus/01_car_comprehensive_policy_2024 / - Relationship defers_to: corpus/09_marketing_brochure_car → corpus/02_car_comprehensive_policy_2026 / - Marketing document corpus/09_marketing_brochure_car: marketing only; binding terms are the policy conditions and service riders (see evidence in the manifest).
- cited: corpus/02_car_comprehensive_policy_2026:c000
- answer: ההשתתפות העצמית ברכב מקיף שהונפק באפריל 2026, במוסך הסדר, היא 1,100 ₪. ההשתתפות העצמית צמודה למדד המחירים לצרכן הידוע ביום 1.3.2026.
- suggestedLayer: undetermined
- layerEvidence: no automatic failure markers
- observedFailure: Baseline auto turn.
- sourceNotes: April 2026 → 1,100 ₪ מוסך הסדר.
- sources UI: citationIdsUnique=true versionFilesDistinguishable=true sectionPathPresent=true

## MF-C turn 1 — החלפת נושא — רכב → מזומנים בתכולה → השתתפות

- theme: topic_switch_false_clarification
- question: עכשיו שאלה אחרת: מה תקרת הכיסוי למזומנים בביטוח תכולת דירה?
- historyLength: 2
- status: clarification_needed
- standaloneQuestion: מהי תקרת הכיסוי למזומנים בביטוח תכולת דירה של אופק ביטוח?
- unresolvedReferences: —
- retrieved: corpus/11_home_water_damage:c000, corpus/13_home_earthquake_annex:c000, corpus/10_home_policy_overview:c000, corpus/03_car_general_terms:c006, corpus/05_car_third_party:c000
- context: corpus/11_home_water_damage:c000, corpus/13_home_earthquake_annex:c000, corpus/10_home_policy_overview:c000, corpus/03_car_general_terms:c006, corpus/05_car_third_party:c000, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c012
- applicability lines: Applicability and document-relationship summary (source-based metadata — not a substitute for source text): / - Family car_general_terms: cannot decide version (no_machine_rule). Alternatives: corpus/03_car_general_terms. Evidence: corpus/03_car_general_terms:c000 / - Marketing document corpus/09_marketing_brochure_car: marketing only; binding terms are the policy conditions and service riders (see evidence in the manifest).
- cited: —
- answer: מהי הפוליסה או סוג הביטוח המדויק שאליו אתה מתייחס לגבי תקרת הכיסוי למזומנים בביטוח תכולת דירה?
- suggestedLayer: mixed
- layerEvidence: rewrite standalone checks failed: missing=תכולה leaked=—; status=clarification_needed on a concrete topic-switch ask
- observedFailure: Clear cash-limit question received a clarification request.
- sourceNotes: Home contents limits: מזומנים גבול אחריות 2,000 ₪.
- sources UI: citationIdsUnique=true versionFilesDistinguishable=true sectionPathPresent=false

## MF-C turn 2 — החלפת נושא — רכב → מזומנים בתכולה → השתתפות

- theme: topic_switch_false_clarification
- question: ומה ההשתתפות העצמית?
- historyLength: 4
- status: clarification_needed
- standaloneQuestion: מהי ההשתתפות העצמית בביטוח תכולת דירה?
- unresolvedReferences: —
- retrieved: corpus/03_car_general_terms:c009, corpus/13_home_earthquake_annex:c000, corpus/05_car_third_party:c000, corpus/31_ofek_plus_vip:c000, corpus/11_home_water_damage:c000
- context: corpus/03_car_general_terms:c009, corpus/13_home_earthquake_annex:c000, corpus/05_car_third_party:c000, corpus/31_ofek_plus_vip:c000, corpus/11_home_water_damage:c000, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c014
- applicability lines: Applicability and document-relationship summary (source-based metadata — not a substitute for source text): / - Family car_general_terms: cannot decide version (no_machine_rule). Alternatives: corpus/03_car_general_terms. Evidence: corpus/03_car_general_terms:c000 / - Marketing document corpus/09_marketing_brochure_car: marketing only; binding terms are the policy conditions and service riders (see evidence in the manifest).
- cited: —
- answer: על מנת לספק מידע מדויק לגבי ההשתתפות העצמית, נא לציין באיזה סוג ביטוח מדובר (למשל ביטוח תכולת דירה, ביטוח רכב מקיף, ביטוח צד שלישי וכו').
- suggestedLayer: mixed
- layerEvidence: rewrite standalone checks failed: missing=תכולה leaked=—; status=clarification_needed on a concrete topic-switch ask
- observedFailure: Last turn must only clarify truly missing home-context details; must not auto-return to auto.
- sourceNotes: Home structure deductibles exist (e.g. general 600 ₪). Ambiguity is home event-type if needed — not car product/date.
- sources UI: citationIdsUnique=true versionFilesDistinguishable=true sectionPathPresent=false

## MF-D turn 0 — עדכון חלקי לנוהל ביטול — 10 ימים ללא תביעה

- theme: partial_update_old_rule_leak
- question: אני מבטל פוליסה בשנת 2026, עשרה ימים אחרי תחילת הביטוח, ולא הייתה תביעה. האם ינכו דמי טיפול? איזה חלק מנוהל הביטול הישן עדיין בתוקף? הפרד בין הכלל שחל עליי לבין מה שחל אחרי 14 יום.
- historyLength: 0
- status: answered
- standaloneQuestion: אני מבטל פוליסה בשנת 2026, עשרה ימים אחרי תחילת הביטוח, ולא הייתה תביעה. האם ינכו דמי טיפול? איזה חלק מנוהל הביטול הישן עדיין בתוקף? הפרד בין הכלל שחל עליי לבין מה שחל אחרי 14 יום.
- unresolvedReferences: —
- retrieved: corpus/23_cancellation_procedure_update_2025:c000, corpus/22_cancellation_procedure_2023:c000, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c004
- context: corpus/23_cancellation_procedure_update_2025:c000, corpus/22_cancellation_procedure_2023:c000, corpus/03_car_general_terms:c013, corpus/03_car_general_terms:c014, corpus/03_car_general_terms:c004, corpus/03_car_general_terms:c000, corpus/03_car_general_terms:c001, corpus/03_car_general_terms:c002, corpus/03_car_general_terms:c003, corpus/03_car_general_terms:c005, corpus/03_car_general_terms:c006, corpus/03_car_general_terms:c007, corpus/03_car_general_terms:c008, corpus/03_car_general_terms:c009, corpus/03_car_general_terms:c010, corpus/03_car_general_terms:c011, corpus/03_car_general_terms:c012, corpus/03_car_general_terms:c015
- applicability lines: Applicability and document-relationship summary (source-based metadata — not a substitute for source text): / - Family car_general_terms: cannot decide version (no_machine_rule). Alternatives: corpus/03_car_general_terms. Evidence: corpus/03_car_general_terms:c000 / - Family cancellation_procedure: partial update — use corpus/23_cancellation_procedure_update_2025 for updated sections, keep corpus/22_cancellation_procedure_2023 for sections not replaced (partial_update_keep_base_and_update). Evidence: corpus/22_cancellation_procedure_2023:c000, corpus/23_cancellation_procedure_update_2025:c000, corpus/23_cancellation_procedure_update_2025:c000 / - Relationship partially_updates: corpus/23_cancellation_procedure_update_2025 → corpus/22_cancellation_procedure_2023 sections: חישוב ההחזר / - Relationship partially_updated_by: corpus/22_cancellation_procedure_2023 → corpus/23_cancellation_procedure_update_2025 sections: חישוב ההחזר / - Marketing document corpus/09_marketing_brochure_car: marketing only; binding terms are the policy conditions and service riders (see evidence in the manifest).
- cited: corpus/23_cancellation_procedure_update_2025:c000, corpus/22_cancellation_procedure_2023:c000
- answer: אם אתה מבטל פוליסה בשנת 2026, עשרה ימים אחרי תחילת הביטוח, ולא הייתה תביעה, לא ינוכו דמי טיפול. זאת מכיוון שלקוח שמבטל בתוך 14 יום ממועד הרכישה, ולא הגיש תביעה, יקבל החזר מלא של דמי הביטוח ששילם, ללא דמי טיפול.

החלק מנוהל הביטול הישן שעדיין בתוקף הוא כל ההוראות מלבד סעיף "חישוב ההחזר". כלומר, שאר הוראות נוהל 2023 נותרו בתוקף מלבד חישוב ההחזר שנכון ל-1.1.2025 שונה.

לגבי מה שחל אחרי 14 יום ממועד הרכישה, לפי נוהל הביטול מ-2023, ההחזר מחושב באופן יחסי לתקופה שנותרה עד תום תקופת הביטוח (pro-rata), ומסכום ההחזר מנוכים דמי טיפול בשיעור 5%.
- suggestedLayer: generation
- layerEvidence: answer still mentions 5% handling fee
- observedFailure: Answer mentioned the 2025 update but still used 5% from the old procedure.
- sourceNotes: Update 2025 (from 1.1.2025) replaces refund-calculation only: within 14 days from purchase date with no claim → full refund, no handling fee; after 14 days → pro-rata with 3% fee capped at 150 ₪. Old 5% must not be stated to customers. Clock source text: מועד הרכישה — user said תחילת הביטוח; treat carefully if those dates differ.
- sources UI: citationIdsUnique=false versionFilesDistinguishable=true sectionPathPresent=true

## MF-E turn 0 — עמלת סוכן — clawback יום 130 מול 100

- theme: english_faq_miss_false_clarify
- question: אני סוכן ביטוח. לקוח ביטל פוליסה ביום ה-130. מה קורה לעמלה שכבר שולמה לי — agent commission clawback? איני שואל על דמי הטיפול של הלקוח. מה הכלל ומה היה משתנה בביטול ביום ה-100?
- historyLength: 0
- status: system_error
- standaloneQuestion: —
- unresolvedReferences: —
- retrieved: —
- context: —
- applicability lines: —
- cited: —
- answer: Cannot read properties of undefined (reading 'includes')
- suggestedLayer: undetermined
- layerEvidence: system_error: Cannot read properties of undefined (reading 'includes')
- observedFailure: Asked for policy type instead of answering from the English agent FAQ.
- sourceNotes: Agent FAQ EN: cancel within 120 days of issue → full commission clawback; between 121 days and 12 months → pro-rata. Day 130 → pro-rata; day 100 → full clawback. Independent of customer handling-fee rules.
- sources UI: citationIdsUnique=true versionFilesDistinguishable=true sectionPathPresent=false

## MF-F turn 0 — יישום סכום הוצאה — עיכוב כבודה 30 שעות ו-220$

- theme: amount_application_incomplete
- question: כבודה התעכבה 30 שעות. יש PIR וקבלות על פריטים חיוניים בסך 220 דולר. מה התקרה ומה ניתן להסיק לגבי ההחזר בפועל?
- historyLength: 0
- status: answered
- standaloneQuestion: כבודה התעכבה 30 שעות. יש PIR וקבלות על פריטים חיוניים בסך 220 דולר. מה התקרה ומה ניתן להסיק לגבי ההחזר בפועל?
- unresolvedReferences: —
- retrieved: corpus/16_travel_luggage:c000, corpus/17_travel_claims:c000, corpus/14_travel_policy_overview:c000, corpus/07_towing_roadside:c000, corpus/22_cancellation_procedure_2023:c000
- context: corpus/16_travel_luggage:c000, corpus/17_travel_claims:c000, corpus/14_travel_policy_overview:c000, corpus/07_towing_roadside:c000, corpus/22_cancellation_procedure_2023:c000, corpus/23_cancellation_procedure_update_2025:c000
- applicability lines: Applicability and document-relationship summary (source-based metadata — not a substitute for source text): / - Family cancellation_procedure: partial update — use corpus/23_cancellation_procedure_update_2025 for updated sections, keep corpus/22_cancellation_procedure_2023 for sections not replaced (partial_update_keep_base_and_update). Evidence: corpus/22_cancellation_procedure_2023:c000, corpus/23_cancellation_procedure_update_2025:c000, corpus/23_cancellation_procedure_update_2025:c000 / - Relationship partially_updated_by: corpus/22_cancellation_procedure_2023 → corpus/23_cancellation_procedure_update_2025 sections: חישוב ההחזר / - Relationship partially_updates: corpus/23_cancellation_procedure_update_2025 → corpus/22_cancellation_procedure_2023 sections: חישוב ההחזר / - Marketing document corpus/09_marketing_brochure_car: marketing only; binding terms are the policy conditions and service riders (see evidence in the manifest).
- cited: corpus/16_travel_luggage:c000
- answer: כאשר כבודה מתעכבת מעל 24 שעות, ניתן לקבל פיצוי עד 150 דולר נוספים על רכישת פריטים חיוניים, בנוסף לפיצוי של עד 150 דולר עבור עיכוב מעל 6 שעות, כלומר סך הפיצוי המקסימלי הוא עד 300 דולר.

יש להגיש דו"ח אי-הגעת כבודה (PIR) לשדה התעופה כדי לקבל את הפיצוי.

הפיצוי הוא עד 150 דולר עבור רכישת פריטים חיוניים, ולכן עם קבלות על פריטים בסך 220 דולר, ההחזר בפועל יהיה עד 150 דולר בלבד, בהתאם לתקרה.
- suggestedLayer: undetermined
- layerEvidence: no automatic failure markers
- observedFailure: Answer explained the 300$ ceiling but did not address the 220$ amount.
- sourceNotes: Luggage delay: >6h up to 150$; >24h additional up to 150$ → combined ceiling 300$ for essentials with PIR. 220$ is below 300$; do not promise automatic eligibility/payment — infer only that claimed receipts are within the documented ceiling subject to claim process.
- sources UI: citationIdsUnique=false versionFilesDistinguishable=true sectionPathPresent=true
