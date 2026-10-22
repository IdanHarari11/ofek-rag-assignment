# Manual-fail diagnosis — manual-fail-regression-v1

Generated: 2026-10-21T14:16:35.412Z
Config: mode=hybrid topK=5 review=false

| Case | Turn | Status | Suggested layer | Standalone (trunc) | Cited files |
| --- | --- | --- | --- | --- | --- |
| MF-A | 0 | system_error | undetermined |  | — |
| MF-B | 0 | system_error | undetermined |  | — |
| MF-B | 1 | system_error | undetermined |  | — |
| MF-B | 2 | system_error | undetermined |  | — |
| MF-C | 0 | system_error | undetermined |  | — |
| MF-C | 1 | system_error | undetermined |  | — |
| MF-C | 2 | system_error | undetermined |  | — |
| MF-D | 0 | system_error | undetermined |  | — |
| MF-E | 0 | system_error | undetermined |  | — |
| MF-F | 0 | system_error | undetermined |  | — |

## MF-A turn 0 — שלוש תחולות באותה שאלה — השתתפות במוסך הסדר

- theme: multi_applicability_single_ask
- question: מה ההשתתפות העצמית במוסך הסדר בכל אחד מהמקרים: פוליסה שהונפקה ב-28.2.2026 ולא חודשה; פוליסה שהונפקה ב-1.3.2026; פוליסה שהונפקה ב-2024 וחודשה ב-1.4.2026?
- historyLength: 0
- status: system_error
- standaloneQuestion: —
- unresolvedReferences: —
- retrieved: —
- context: —
- applicability lines: —
- cited: —
- answer: [generation] Generation API error: 400 Unsupported value: 'temperature' does not support 0 with this model. Only the default (1) value is supported.
- suggestedLayer: undetermined
- layerEvidence: system_error: Generation API error: 400 Unsupported value: 'temperature' does not support 0 with this model. Only the default (1) value is supported.
- observedFailure: Manual probe target: distinguish three applicability outcomes in one answer.
- sourceNotes: 2024 policy: מוסך הסדר 950 ₪ (index base 1.1.2024). 2026 policy: מוסך הסדר 1,100 ₪ from issue/renewal on/after 1.3.2026 (index base 1.3.2026). Case1 28.2.2026 no renewal → 2024/950. Case2 1.3.2026 → 2026/1100. Case3 issued 2024 renewed 1.4.2026 → 2026/1100. Do not confuse issue date with index base date.
- sources UI: citationIdsUnique=true versionFilesDistinguishable=true sectionPathPresent=false

## MF-B turn 0 — תיקון עובדה לאורך שיחה — תאריך הנפקה

- theme: user_fact_correction_date
- question: רכב מקיף שהונפק באפריל 2026: מה ההשתתפות העצמית במוסך הסדר?
- historyLength: 0
- status: system_error
- standaloneQuestion: —
- unresolvedReferences: —
- retrieved: —
- context: —
- applicability lines: —
- cited: —
- answer: [generation] Generation API error: 400 Unsupported value: 'temperature' does not support 0 with this model. Only the default (1) value is supported.
- suggestedLayer: undetermined
- layerEvidence: system_error: Generation API error: 400 Unsupported value: 'temperature' does not support 0 with this model. Only the default (1) value is supported.
- observedFailure: Baseline turn (April 2026 → expect 2026 amounts).
- sourceNotes: April 2026 issue → 2026 version → 1,100 ₪ מוסך הסדר.
- sources UI: citationIdsUnique=true versionFilesDistinguishable=true sectionPathPresent=false

## MF-B turn 1 — תיקון עובדה לאורך שיחה — תאריך הנפקה

- theme: user_fact_correction_date
- question: טעיתי: הפוליסה הונפקה בפברואר 2026 ולא חודשה מאז.
- historyLength: 2
- status: system_error
- standaloneQuestion: —
- unresolvedReferences: —
- retrieved: —
- context: —
- applicability lines: —
- cited: —
- answer: [generation] Rewrite API error: 400 Unsupported parameter: 'max_tokens' is not supported with this model. Use 'max_completion_tokens' instead.
- suggestedLayer: undetermined
- layerEvidence: system_error: Rewrite API error: 400 Unsupported parameter: 'max_tokens' is not supported with this model. Use 'max_completion_tokens' instead.
- observedFailure: System chose 2024 amounts but rewrote the user's issue date to 2024 or 1.1.2024.
- sourceNotes: February 2026 issue, not renewed → still under 2024 wording until next renewal → 950 ₪ מוסך הסדר. User date remains February 2026; 1.1.2024 is index base, not issue date.
- sources UI: citationIdsUnique=true versionFilesDistinguishable=true sectionPathPresent=false

## MF-B turn 2 — תיקון עובדה לאורך שיחה — תאריך הנפקה

- theme: user_fact_correction_date
- question: ומה במוסך שאינו בהסדר?
- historyLength: 4
- status: system_error
- standaloneQuestion: —
- unresolvedReferences: —
- retrieved: —
- context: —
- applicability lines: —
- cited: —
- answer: [generation] Rewrite API error: 400 Unsupported parameter: 'max_tokens' is not supported with this model. Use 'max_completion_tokens' instead.
- suggestedLayer: undetermined
- layerEvidence: system_error: Rewrite API error: 400 Unsupported parameter: 'max_tokens' is not supported with this model. Use 'max_completion_tokens' instead.
- observedFailure: Same date-mutation risk on follow-up; expect 2024 non-network amount 1,850 ₪.
- sourceNotes: 2024 non-network workshop deductible: 1,850 ₪. Keep user issue date February 2026.
- sources UI: citationIdsUnique=true versionFilesDistinguishable=true sectionPathPresent=false

## MF-C turn 0 — החלפת נושא — רכב → מזומנים בתכולה → השתתפות

- theme: topic_switch_false_clarification
- question: השתתפות עצמית ברכב מקיף שהונפק באפריל 2026, במוסך הסדר.
- historyLength: 0
- status: system_error
- standaloneQuestion: —
- unresolvedReferences: —
- retrieved: —
- context: —
- applicability lines: —
- cited: —
- answer: [generation] Generation API error: 400 Unsupported value: 'temperature' does not support 0 with this model. Only the default (1) value is supported.
- suggestedLayer: undetermined
- layerEvidence: system_error: Generation API error: 400 Unsupported value: 'temperature' does not support 0 with this model. Only the default (1) value is supported.
- observedFailure: Baseline auto turn.
- sourceNotes: April 2026 → 1,100 ₪ מוסך הסדר.
- sources UI: citationIdsUnique=true versionFilesDistinguishable=true sectionPathPresent=false

## MF-C turn 1 — החלפת נושא — רכב → מזומנים בתכולה → השתתפות

- theme: topic_switch_false_clarification
- question: עכשיו שאלה אחרת: מה תקרת הכיסוי למזומנים בביטוח תכולת דירה?
- historyLength: 2
- status: system_error
- standaloneQuestion: —
- unresolvedReferences: —
- retrieved: —
- context: —
- applicability lines: —
- cited: —
- answer: [generation] Rewrite API error: 400 Unsupported parameter: 'max_tokens' is not supported with this model. Use 'max_completion_tokens' instead.
- suggestedLayer: undetermined
- layerEvidence: system_error: Rewrite API error: 400 Unsupported parameter: 'max_tokens' is not supported with this model. Use 'max_completion_tokens' instead.
- observedFailure: Clear cash-limit question received a clarification request.
- sourceNotes: Home contents limits: מזומנים גבול אחריות 2,000 ₪.
- sources UI: citationIdsUnique=true versionFilesDistinguishable=true sectionPathPresent=false

## MF-C turn 2 — החלפת נושא — רכב → מזומנים בתכולה → השתתפות

- theme: topic_switch_false_clarification
- question: ומה ההשתתפות העצמית?
- historyLength: 4
- status: system_error
- standaloneQuestion: —
- unresolvedReferences: —
- retrieved: —
- context: —
- applicability lines: —
- cited: —
- answer: [generation] Rewrite API error: 400 Unsupported parameter: 'max_tokens' is not supported with this model. Use 'max_completion_tokens' instead.
- suggestedLayer: undetermined
- layerEvidence: system_error: Rewrite API error: 400 Unsupported parameter: 'max_tokens' is not supported with this model. Use 'max_completion_tokens' instead.
- observedFailure: Last turn must only clarify truly missing home-context details; must not auto-return to auto.
- sourceNotes: Home structure deductibles exist (e.g. general 600 ₪). Ambiguity is home event-type if needed — not car product/date.
- sources UI: citationIdsUnique=true versionFilesDistinguishable=true sectionPathPresent=false

## MF-D turn 0 — עדכון חלקי לנוהל ביטול — 10 ימים ללא תביעה

- theme: partial_update_old_rule_leak
- question: אני מבטל פוליסה בשנת 2026, עשרה ימים אחרי תחילת הביטוח, ולא הייתה תביעה. האם ינכו דמי טיפול? איזה חלק מנוהל הביטול הישן עדיין בתוקף? הפרד בין הכלל שחל עליי לבין מה שחל אחרי 14 יום.
- historyLength: 0
- status: system_error
- standaloneQuestion: —
- unresolvedReferences: —
- retrieved: —
- context: —
- applicability lines: —
- cited: —
- answer: [generation] Generation API error: 400 Unsupported value: 'temperature' does not support 0 with this model. Only the default (1) value is supported.
- suggestedLayer: undetermined
- layerEvidence: system_error: Generation API error: 400 Unsupported value: 'temperature' does not support 0 with this model. Only the default (1) value is supported.
- observedFailure: Answer mentioned the 2025 update but still used 5% from the old procedure.
- sourceNotes: Update 2025 (from 1.1.2025) replaces refund-calculation only: within 14 days from purchase date with no claim → full refund, no handling fee; after 14 days → pro-rata with 3% fee capped at 150 ₪. Old 5% must not be stated to customers. Clock source text: מועד הרכישה — user said תחילת הביטוח; treat carefully if those dates differ.
- sources UI: citationIdsUnique=true versionFilesDistinguishable=true sectionPathPresent=false

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
- answer: [generation] Generation API error: 400 Unsupported value: 'temperature' does not support 0 with this model. Only the default (1) value is supported.
- suggestedLayer: undetermined
- layerEvidence: system_error: Generation API error: 400 Unsupported value: 'temperature' does not support 0 with this model. Only the default (1) value is supported.
- observedFailure: Asked for policy type instead of answering from the English agent FAQ.
- sourceNotes: Agent FAQ EN: cancel within 120 days of issue → full commission clawback; between 121 days and 12 months → pro-rata. Day 130 → pro-rata; day 100 → full clawback. Independent of customer handling-fee rules.
- sources UI: citationIdsUnique=true versionFilesDistinguishable=true sectionPathPresent=false

## MF-F turn 0 — יישום סכום הוצאה — עיכוב כבודה 30 שעות ו-220$

- theme: amount_application_incomplete
- question: כבודה התעכבה 30 שעות. יש PIR וקבלות על פריטים חיוניים בסך 220 דולר. מה התקרה ומה ניתן להסיק לגבי ההחזר בפועל?
- historyLength: 0
- status: system_error
- standaloneQuestion: —
- unresolvedReferences: —
- retrieved: —
- context: —
- applicability lines: —
- cited: —
- answer: [generation] Generation API error: 400 Unsupported value: 'temperature' does not support 0 with this model. Only the default (1) value is supported.
- suggestedLayer: undetermined
- layerEvidence: system_error: Generation API error: 400 Unsupported value: 'temperature' does not support 0 with this model. Only the default (1) value is supported.
- observedFailure: Answer explained the 300$ ceiling but did not address the 220$ amount.
- sourceNotes: Luggage delay: >6h up to 150$; >24h additional up to 150$ → combined ceiling 300$ for essentials with PIR. 220$ is below 300$; do not promise automatic eligibility/payment — infer only that claimed receipts are within the documented ceiling subject to claim process.
- sources UI: citationIdsUnique=true versionFilesDistinguishable=true sectionPathPresent=false
