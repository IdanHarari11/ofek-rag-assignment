# Stage 5.1 — Claim audit vs supplied context (baseline run)

Source: `eval_results/ask-eval-stage5-baseline.json` (preserved original Stage 5 run).  
Method: each claim checked against `contextChunks` available to the model for that question — not against the full corpus or reference answer alone.

## D04 — "כל המסמכים … רכב בלבד"

| | |
| --- | --- |
| **Claim** | "כל המסמכים מתמקדים בתנאים כלליים לפוליסות רכב בלבד." |
| **Support in context?** | **No.** Context contained only chunks from `03_car_general_terms` (retrieved + expanded). That sample does not establish what "all documents" in the company corpus contain. |
| **Supported part** | No evidence *in the provided sources* about pet insurance → appropriate for `insufficient_evidence`. |
| **Failure type** | **Interpretation / overgeneralization** (sample of retrieved chunks → claim about entire corpus). Not missing context for the core abstention. |

## D05 — Assumption that the question is about car

| | |
| --- | --- |
| **Claim** | Implicit + explicit: deductible amounts for comprehensive car policies 2024/2026 and windshield service. |
| **Support in context?** | The *numbers* are supported by car policy / windshield chunks that were retrieved. The *assumption that the user meant car* is **not** stated in the question and is not a grounded fact. |
| **Failure type** | **Interpretation / behavior**: inferred product from retrieval ranking. Should have been `clarification_needed`, not a car deductible catalog. |

## D06 — Are definition + annex enough for "no coverage"?

| | |
| --- | --- |
| **Claim** | Driver age 22, "כל נהג", no young-driver annex → no coverage for the accident. |
| **Context** | Retrieved: annex, adding-driver, policies 2024/2026, general-terms c001. Expanded: c000, **c002 (definitions)**, c003–c011. **Omitted by budget:** c012 (§12 exceptions), c013–c015. All five retrieved hits were kept. |
| **Support** | **c002**: under "כל נהג", authorized driver is age≥24 with ≥2 years experience, **or** young driver named in annex → age 22 without annex is not authorized. **Annex**: "אירוע שבו נהג ברכב נהג צעיר שאינו נקוב בנספח אינו מכוסה…" |
| **§12** | Explicit exclusion text was **not** in context; annex already states non-coverage and refers to that exception. |
| **Verdict** | Conclusion is **supported by definition + annex in context**. Not "correct only because it matches reference." Remaining gap: §12 itself absent → completeness of legal chain is partial, claim support for the conclusion is adequate. |
| **Failure type** | Context incomplete for §12; **not** an unsupported conclusion. |

### D06 expansion order (baseline)

1. Retrieved (kept): `04…c000`, `25…c000`, `01…c000`, `02…c000`, `03…c001`
2. Expanded in corpus order: `03…c000`, `c002`, `c003` … `c011`
3. Omitted (budget): `03…c012`, `c013`, `c014`, `c015`

## D08 — Full refund vs pro-rata contradiction

| | |
| --- | --- |
| **Claim A** | Cancel within 14 days, no claim → **full refund**, no handling fee. |
| **Claim B** | "החישוב הוא באופן יחסי לתקופה שנותרה (pro-rata)." applied to the same 10-day case. |
| **Support** | Claim A supported by update 2025 §cooling-off. Claim B is the rule for **cancellation after 14 days** in the same update chunk — **not** for the cooling-off case. |
| **Failure type** | **Wording / applicability**: treated alternative rule as concurrent with the applicable rule. Context was sufficient; model mixed sections. |

## D10 — Events and time limits, including "גניבה/אובדן"

| Claim | Supported? |
| --- | --- |
| Only with purchased service letter; not base comprehensive | Yes — `08_replacement_car` |
| Accident at network garage: while in repair, max 21 days | Yes |
| Theft **or** total loss: up to 30 days | Yes — source row is literally "גניבה או אובדן גמור" |
| Mechanical fault: not available | Yes |
| Non-network garage accident: not eligible | Yes |
| Marketing brochure not binding | Yes — brochure + service letter |

| | |
| --- | --- |
| **Failure type** | None material for these claims. Paraphrase "לכל תקופת התיקון, אך לא מעבר ל-21" is consistent with the table. |

## D11 — PIR and eligibility

| | |
| --- | --- |
| **Claim** | 8h delay → up to $150 for essentials; not the extra $150 (needs >24h). |
| **Support for amounts** | Yes — delay table in `16_travel_luggage`. |
| **Missing** | Context includes: must file airline **PIR** at the airport. Answer **omitted** this eligibility condition. |
| **Failure type** | **Wording / completeness** (dropped material condition present in context). Not missing context. |

## D14 — Deductible calculation base

| | |
| --- | --- |
| **Claim** | Structure: 10% of **סכום ביטוח המבנה**; TAMA 38 structure: 5% of **סכום ביטוח המבנה**. |
| **Support** | Yes — earthquake annex rows match those bases. |
| **Note** | Contents row uses **10% of damage to contents** — not claimed here. If the question were about contents, that base would be required. |
| **Failure type** | None for the stated structure claims. |

## Summary of failure classes (baseline)

| Case | Missing context | Interpretation | Wording |
| --- | --- | --- | --- |
| D04 overgeneralization | | ✓ | |
| D05 product assumption | | ✓ (behavior) | |
| D06 §12 absent | ✓ (partial chain) | | |
| D06 conclusion | | | supported via annex+def |
| D08 contradiction | | | ✓ |
| D10 | | | OK |
| D11 PIR omitted | | | ✓ |
| D14 base | | | OK |
