# Clock-base generation model comparison

Generated: 2026-10-22T07:35:17.798Z
Snapshot: 2026-10-22T07:35:17.798Z
Env GENERATION_MODEL (unchanged): gpt-4.1-mini
Terra settings: reasoning_family profile: omit temperature; reasoning_effort=medium (same default as prior comparison)
Pricing: https://developers.openai.com/api/docs/pricing (standard short-context)

Frozen generation inputs for clock-base A/B + purchase-10 control. App default GENERATION_MODEL left unchanged. Answer review off. No RAG/prompt edits in this experiment.

## 1. Input validation

```json
{
  "note": "Prior verify JSON stored answers/contextIds/applicability lines but not standaloneQuestion or full prompts. Mini answers from that run are NOT reused as same-input baselines; this experiment freezes inputs via ask() capture then generation-only.",
  "savedPromptChange": "generate.ts buildSystemPrompt rule 10 — source clock vs user-stated event/date",
  "caseA_questionExpected": "אני מבטל פוליסה בשנת 2026, עשרה ימים אחרי תחילת הביטוח, ולא הייתה תביעה. האם ינכו דמי טיפול?",
  "caseA_savedHadStartOnlyQuestion": true,
  "caseB_datesInQuestionScript": {
    "purchase": "1.1.2026",
    "insuranceStart": "10.1.2026",
    "cancel": "20.1.2026"
  },
  "caseB_savedPresent": true
}
```

### CLOCK-A
- question: אני מבטל פוליסה בשנת 2026, עשרה ימים אחרי תחילת הביטוח, ולא הייתה תביעה. האם ינכו דמי טיפול?
- standaloneQuestion: אני מבטל פוליסה בשנת 2026, עשרה ימים אחרי תחילת הביטוח, ולא הייתה תביעה. האם ינכו דמי טיפול?
- systemPromptSha256: `e23f92e505a8432c69dec4d391365edf57008142a7ffe713e09126792992430a`
- userPromptSha256: `5887eabf1acbe9169138b41d8d31ff8c050f28d99a15343617bda2dec59ec70c`
- pre-generation audit: OK

### CLOCK-B
- question: רכישת הפוליסה הייתה ב-1.1.2026, תחילת הביטוח ב-10.1.2026, ואני מבטל ב-20.1.2026 ללא תביעה. האם ינכו דמי טיפול, וכמה?
- standaloneQuestion: רכישת הפוליסה הייתה ב-1.1.2026, תחילת הביטוח ב-10.1.2026, ואני מבטל ב-20.1.2026 ללא תביעה. האם ינכו דמי טיפול, וכמה?
- systemPromptSha256: `e8fc2cb730921cdc6749016acb1501bb76c340264d826e16061c95a53ae183e5`
- userPromptSha256: `b44418d03a793f7bd0c7cdec77605e86fb345b3dce552f507862f934a0269d8b`
- pre-generation audit: OK

### CTRL-purchase-10
- question: אני מבטל פוליסה בשנת 2026, עשרה ימים אחרי מועד הרכישה, ולא הייתה תביעה. האם ינכו דמי טיפול?
- standaloneQuestion: אני מבטל פוליסה בשנת 2026, עשרה ימים אחרי מועד הרכישה, ולא הייתה תביעה. האם ינכו דמי טיפול?
- systemPromptSha256: `a65e36a6e5058be1793ddfd306ae1023b7554f6827c7b009f39407b2ddbebb32`
- userPromptSha256: `97fc2d5ba1ce7a325bf49ca674c195f7b1315a56c4ca4e0e965bea53f3fddf11`
- pre-generation audit: OK

## 2. Summary (passes / 3)

| Case | Model | Passes |
| --- | --- | --- |
| CLOCK-A | gpt-4.1-mini | 0/3 |
| CLOCK-A | gpt-5.6-terra | 0/3 |
| CLOCK-B | gpt-4.1-mini | 1/3 |
| CLOCK-B | gpt-5.6-terra | 0/3 |
| CTRL-purchase-10 | gpt-4.1-mini | 3/3 |
| CTRL-purchase-10 | gpt-5.6-terra | 3/3 |

## 3. Per-run detail (full answers)

This focused experiment does **not** imply all date-handling issues are solved.

### CLOCK-A / gpt-4.1-mini / run 0 — FAIL
- requested=gpt-4.1-mini returned=gpt-4.1-mini-2025-04-14 reasoningEffortSent=missing
- status=answered latencyMs=1149.5878329999996 usage={"promptTokens":6389,"completionTokens":81,"totalTokens":6470,"cachedInputTokens":6144,"reasoningTokens":0} costUsd=0.0008420000000000001
- hashes: {"systemPromptSha256":"e23f92e505a8432c69dec4d391365edf57008142a7ffe713e09126792992430a","userPromptSha256":"5887eabf1acbe9169138b41d8d31ff8c050f28d99a15343617bda2dec59ec70c","inputBundleSha256":"f1f2b3cb86b48ec589074f16d965854b005b9048a2809bf44718f1e15f84a47a"}
- failures: does not explicitly state purchase date/clock is missing
- cited: ["corpus/23_cancellation_procedure_update_2025:c000"]

אם מבוטח מבטל פוליסה בשנת 2026 בתוך 14 יום ממועד הרכישה ולא הגיש תביעה, הוא יקבל החזר מלא של דמי הביטוח ששילם ללא ניכוי דמי טיפול.

### CLOCK-A / gpt-4.1-mini / run 1 — FAIL
- requested=gpt-4.1-mini returned=gpt-4.1-mini-2025-04-14 reasoningEffortSent=missing
- status=answered latencyMs=1560.6843750000007 usage={"promptTokens":6389,"completionTokens":81,"totalTokens":6470,"cachedInputTokens":6144,"reasoningTokens":0} costUsd=0.0008420000000000001
- hashes: {"systemPromptSha256":"e23f92e505a8432c69dec4d391365edf57008142a7ffe713e09126792992430a","userPromptSha256":"5887eabf1acbe9169138b41d8d31ff8c050f28d99a15343617bda2dec59ec70c","inputBundleSha256":"f1f2b3cb86b48ec589074f16d965854b005b9048a2809bf44718f1e15f84a47a"}
- failures: does not explicitly state purchase date/clock is missing
- cited: ["corpus/23_cancellation_procedure_update_2025:c000"]

אם מבוטח מבטל פוליסה בשנת 2026 בתוך 14 יום ממועד הרכישה ולא הגיש תביעה, הוא יקבל החזר מלא של דמי הביטוח ששילם ללא ניכוי דמי טיפול.

### CLOCK-A / gpt-4.1-mini / run 2 — FAIL
- requested=gpt-4.1-mini returned=gpt-4.1-mini-2025-04-14 reasoningEffortSent=missing
- status=answered latencyMs=1856.4275419999994 usage={"promptTokens":6389,"completionTokens":126,"totalTokens":6515,"cachedInputTokens":6144,"reasoningTokens":0} costUsd=0.0009140000000000001
- hashes: {"systemPromptSha256":"e23f92e505a8432c69dec4d391365edf57008142a7ffe713e09126792992430a","userPromptSha256":"5887eabf1acbe9169138b41d8d31ff8c050f28d99a15343617bda2dec59ec70c","inputBundleSha256":"f1f2b3cb86b48ec589074f16d965854b005b9048a2809bf44718f1e15f84a47a"}
- failures: does not explicitly state purchase date/clock is missing
- cited: ["corpus/23_cancellation_procedure_update_2025:c000"]

אם מבטלים פוליסה בתוך 14 יום ממועד הרכישה ולא הוגשה תביעה, הלקוח יקבל החזר מלא של דמי הביטוח ששילם ללא ניכוי דמי טיפול.

ההחזר מחושב באופן יחסי לתקופה שנותרה עד תום תקופת הביטוח (pro-rata).

### CLOCK-A / gpt-5.6-terra / run 0 — FAIL
- requested=gpt-5.6-terra returned=gpt-5.6-terra reasoningEffortSent=medium
- status=clarification_needed latencyMs=3770.4762499999997 usage={"promptTokens":6385,"completionTokens":187,"totalTokens":6572,"cachedInputTokens":0,"reasoningTokens":68} costUsd=0.015014
- hashes: {"systemPromptSha256":"e23f92e505a8432c69dec4d391365edf57008142a7ffe713e09126792992430a","userPromptSha256":"5887eabf1acbe9169138b41d8d31ff8c050f28d99a15343617bda2dec59ec70c","inputBundleSha256":"f1f2b3cb86b48ec589074f16d965854b005b9048a2809bf44718f1e15f84a47a"}
- failures: does not explicitly state purchase date/clock is missing
- cited: ["corpus/23_cancellation_procedure_update_2025:c000"]

מהו מועד רכישת הפוליסה? הפטור מדמי טיפול חל בביטול בתוך 14 ימים ממועד הרכישה (וללא תביעה), בעוד שציינת 10 ימים ממועד תחילת הביטוח; אלו מועדים שונים ולכן לא ניתן לקבוע מכך אם ינוכו דמי טיפול.

### CLOCK-A / gpt-5.6-terra / run 1 — FAIL
- requested=gpt-5.6-terra returned=gpt-5.6-terra reasoningEffortSent=medium
- status=clarification_needed latencyMs=2925.5909580000007 usage={"promptTokens":6385,"completionTokens":136,"totalTokens":6521,"cachedInputTokens":6382,"reasoningTokens":37} costUsd=0.0029144
- hashes: {"systemPromptSha256":"e23f92e505a8432c69dec4d391365edf57008142a7ffe713e09126792992430a","userPromptSha256":"5887eabf1acbe9169138b41d8d31ff8c050f28d99a15343617bda2dec59ec70c","inputBundleSha256":"f1f2b3cb86b48ec589074f16d965854b005b9048a2809bf44718f1e15f84a47a"}
- failures: does not explicitly state purchase date/clock is missing
- cited: []

מהו מועד הרכישה של הפוליסה? הזכאות להחזר מלא ללא דמי טיפול נקבעת כאשר הביטול הוא בתוך 14 ימים ממועד הרכישה ולא הוגשה תביעה; עשרה ימים מתחילת הביטוח אינם בהכרח עשרה ימים ממועד הרכישה.

### CLOCK-A / gpt-5.6-terra / run 2 — FAIL
- requested=gpt-5.6-terra returned=gpt-5.6-terra reasoningEffortSent=medium
- status=clarification_needed latencyMs=3263.6921660000007 usage={"promptTokens":6385,"completionTokens":182,"totalTokens":6567,"cachedInputTokens":6382,"reasoningTokens":77} costUsd=0.0034664
- hashes: {"systemPromptSha256":"e23f92e505a8432c69dec4d391365edf57008142a7ffe713e09126792992430a","userPromptSha256":"5887eabf1acbe9169138b41d8d31ff8c050f28d99a15343617bda2dec59ec70c","inputBundleSha256":"f1f2b3cb86b48ec589074f16d965854b005b9048a2809bf44718f1e15f84a47a"}
- failures: does not explicitly state purchase date/clock is missing
- cited: ["corpus/23_cancellation_procedure_update_2025:c000"]

מהו מועד הרכישה של הפוליסה? הפטור מדמי טיפול חל בביטול בתוך 14 ימים ממועד הרכישה וללא תביעה; עשרה ימים מתחילת הביטוח אינם בהכרח עשרה ימים ממועד הרכישה.

### CLOCK-B / gpt-4.1-mini / run 0 — FAIL
- requested=gpt-4.1-mini returned=gpt-4.1-mini-2025-04-14 reasoningEffortSent=missing
- status=answered latencyMs=2217.0396669999973 usage={"promptTokens":6586,"completionTokens":206,"totalTokens":6792,"cachedInputTokens":6400,"reasoningTokens":0} costUsd=0.001044
- hashes: {"systemPromptSha256":"e8fc2cb730921cdc6749016acb1501bb76c340264d826e16061c95a53ae183e5","userPromptSha256":"b44418d03a793f7bd0c7cdec77605e86fb345b3dce552f507862f934a0269d8b","inputBundleSha256":"0588d16679880a495c716ffc73de60b0cfff501c5033fd06b09d496ed0de11a2"}
- failures: does not identify >14 / 19 days from purchase; promises full refund without handling fee; incorrectly places cancel within 14 days of purchase
- cited: ["corpus/23_cancellation_procedure_update_2025:c000"]

אם ביטלת את הפוליסה ב-20.1.2026, שזה בתוך 14 יום ממועד הרכישה ב-1.1.2026, וללא הגשת תביעה, תקבל החזר מלא של דמי הביטוח ששילמת, ללא דמי טיפול.

ההחזר מחושב באופן יחסי לתקופה שנותרה עד תום תקופת הביטוח (pro-rata).

דמי הטיפול הופחתו ל-3% מסכום ההחזר, ולא יותר מ-150 ₪, אך במקרה של ביטול בתוך 14 יום ללא תביעה, אין דמי טיפול.

### CLOCK-B / gpt-4.1-mini / run 1 — FAIL
- requested=gpt-4.1-mini returned=gpt-4.1-mini-2025-04-14 reasoningEffortSent=missing
- status=answered latencyMs=2085.4067079999986 usage={"promptTokens":6586,"completionTokens":201,"totalTokens":6787,"cachedInputTokens":6400,"reasoningTokens":0} costUsd=0.001036
- hashes: {"systemPromptSha256":"e8fc2cb730921cdc6749016acb1501bb76c340264d826e16061c95a53ae183e5","userPromptSha256":"b44418d03a793f7bd0c7cdec77605e86fb345b3dce552f507862f934a0269d8b","inputBundleSha256":"0588d16679880a495c716ffc73de60b0cfff501c5033fd06b09d496ed0de11a2"}
- failures: does not identify >14 / 19 days from purchase; missing updated fee 3% and/or 150 ₪; promises full refund without handling fee; incorrectly places cancel within 14 days of purchase
- cited: ["corpus/23_cancellation_procedure_update_2025:c000"]

אם ביטלת את הפוליסה ב-20.1.2026, שזה בתוך 14 יום ממועד הרכישה ב-1.1.2026, וללא הגשת תביעה, תקבל החזר מלא של דמי הביטוח ששילמת, ללא דמי טיפול.

ההחזר מחושב באופן יחסי לתקופה שנותרה עד תום תקופת הביטוח (pro-rata).

דמי הטיפול שהיו מנוכים בעבר (5%) בוטלו במקרה של ביטול בתוך 14 יום ללא תביעה, ולכן לא ינוכו דמי טיפול במקרה שלך.

### CLOCK-B / gpt-4.1-mini / run 2 — PASS
- requested=gpt-4.1-mini returned=gpt-4.1-mini-2025-04-14 reasoningEffortSent=missing
- status=answered latencyMs=1556.8212499999972 usage={"promptTokens":6586,"completionTokens":128,"totalTokens":6714,"cachedInputTokens":6400,"reasoningTokens":0} costUsd=0.0009192
- hashes: {"systemPromptSha256":"e8fc2cb730921cdc6749016acb1501bb76c340264d826e16061c95a53ae183e5","userPromptSha256":"b44418d03a793f7bd0c7cdec77605e86fb345b3dce552f507862f934a0269d8b","inputBundleSha256":"0588d16679880a495c716ffc73de60b0cfff501c5033fd06b09d496ed0de11a2"}
- cited: ["corpus/23_cancellation_procedure_update_2025:c000"]

אם ביטלת את הפוליסה ב-20.1.2026, שזה אחרי 14 יום ממועד הרכישה ב-1.1.2026, ולא הגשת תביעה, דמי הטיפול ינוכו מההחזר. לפי העדכון לנוהל ביטול פוליסה החל מ-1.1.2025, דמי הטיפול הם 3% מסכום ההחזר, ולא יותר מ-150 ₪.

### CLOCK-B / gpt-5.6-terra / run 0 — FAIL
- requested=gpt-5.6-terra returned=gpt-5.6-terra reasoningEffortSent=medium
- status=answered latencyMs=2496.2550840000004 usage={"promptTokens":6582,"completionTokens":104,"totalTokens":6686,"cachedInputTokens":0,"reasoningTokens":0} costUsd=0.014412000000000001
- hashes: {"systemPromptSha256":"e8fc2cb730921cdc6749016acb1501bb76c340264d826e16061c95a53ae183e5","userPromptSha256":"b44418d03a793f7bd0c7cdec77605e86fb345b3dce552f507862f934a0269d8b","inputBundleSha256":"0588d16679880a495c716ffc73de60b0cfff501c5033fd06b09d496ed0de11a2"}
- failures: does not identify >14 / 19 days from purchase; missing updated fee 3% and/or 150 ₪; promises full refund without handling fee
- cited: ["corpus/23_cancellation_procedure_update_2025:c000"]

לא ינוכו דמי טיפול. הביטול ב־20.1.2026 הוא בתוך 14 ימים ממועד הרכישה ב־1.1.2026, ובהיעדר תביעה תקבל/י החזר מלא של דמי הביטוח ששולמו, ללא דמי טיפול.

### CLOCK-B / gpt-5.6-terra / run 1 — FAIL
- requested=gpt-5.6-terra returned=gpt-5.6-terra reasoningEffortSent=medium
- status=answered latencyMs=2383.6746249999997 usage={"promptTokens":6582,"completionTokens":113,"totalTokens":6695,"cachedInputTokens":6579,"reasoningTokens":0} costUsd=0.0026778
- hashes: {"systemPromptSha256":"e8fc2cb730921cdc6749016acb1501bb76c340264d826e16061c95a53ae183e5","userPromptSha256":"b44418d03a793f7bd0c7cdec77605e86fb345b3dce552f507862f934a0269d8b","inputBundleSha256":"0588d16679880a495c716ffc73de60b0cfff501c5033fd06b09d496ed0de11a2"}
- failures: does not identify >14 / 19 days from purchase; missing updated fee 3% and/or 150 ₪; promises full refund without handling fee
- cited: ["corpus/23_cancellation_procedure_update_2025:c000"]

לא. מאחר שהביטול הוא ב־20.1.2026, כלומר בתוך 14 ימים ממועד הרכישה ב־1.1.2026, וללא תביעה, תקבל/י החזר מלא של דמי הביטוח ששולמו ללא דמי טיפול. לכן דמי הטיפול הם 0 ₪.

### CLOCK-B / gpt-5.6-terra / run 2 — FAIL
- requested=gpt-5.6-terra returned=gpt-5.6-terra reasoningEffortSent=medium
- status=answered latencyMs=2200.532665999999 usage={"promptTokens":6582,"completionTokens":108,"totalTokens":6690,"cachedInputTokens":6579,"reasoningTokens":0} costUsd=0.0026178
- hashes: {"systemPromptSha256":"e8fc2cb730921cdc6749016acb1501bb76c340264d826e16061c95a53ae183e5","userPromptSha256":"b44418d03a793f7bd0c7cdec77605e86fb345b3dce552f507862f934a0269d8b","inputBundleSha256":"0588d16679880a495c716ffc73de60b0cfff501c5033fd06b09d496ed0de11a2"}
- failures: does not identify >14 / 19 days from purchase; missing updated fee 3% and/or 150 ₪; promises full refund without handling fee
- cited: ["corpus/23_cancellation_procedure_update_2025:c000"]

לא ינוכו דמי טיפול. הביטול ב־20.1.2026 הוא בתוך 14 ימים ממועד הרכישה (1.1.2026), ובהיעדר תביעה תקבל/י החזר מלא של דמי הביטוח ששולמו. לכן דמי הטיפול הם 0 ₪.

### CTRL-purchase-10 / gpt-4.1-mini / run 0 — PASS
- requested=gpt-4.1-mini returned=gpt-4.1-mini-2025-04-14 reasoningEffortSent=missing
- status=answered latencyMs=1467.9903339999946 usage={"promptTokens":6605,"completionTokens":83,"totalTokens":6688,"cachedInputTokens":6400,"reasoningTokens":0} costUsd=0.0008548000000000001
- hashes: {"systemPromptSha256":"a65e36a6e5058be1793ddfd306ae1023b7554f6827c7b009f39407b2ddbebb32","userPromptSha256":"97fc2d5ba1ce7a325bf49ca674c195f7b1315a56c4ca4e0e965bea53f3fddf11","inputBundleSha256":"5c9c362993f592469aa68b6e69ff39a4a74a3d1bba22ec96f7bc93fdf267999c"}
- cited: ["corpus/23_cancellation_procedure_update_2025:c000"]

אם מבטלים פוליסה בשנת 2026 בתוך 14 יום ממועד הרכישה, ולא הוגשה תביעה, הלקוח יקבל החזר מלא של דמי הביטוח ששילם ללא ניכוי דמי טיפול.

### CTRL-purchase-10 / gpt-4.1-mini / run 1 — PASS
- requested=gpt-4.1-mini returned=gpt-4.1-mini-2025-04-14 reasoningEffortSent=missing
- status=answered latencyMs=1256.000417000003 usage={"promptTokens":6605,"completionTokens":83,"totalTokens":6688,"cachedInputTokens":6400,"reasoningTokens":0} costUsd=0.0008548000000000001
- hashes: {"systemPromptSha256":"a65e36a6e5058be1793ddfd306ae1023b7554f6827c7b009f39407b2ddbebb32","userPromptSha256":"97fc2d5ba1ce7a325bf49ca674c195f7b1315a56c4ca4e0e965bea53f3fddf11","inputBundleSha256":"5c9c362993f592469aa68b6e69ff39a4a74a3d1bba22ec96f7bc93fdf267999c"}
- cited: ["corpus/23_cancellation_procedure_update_2025:c000"]

אם מבטלים פוליסה בשנת 2026 בתוך 14 יום ממועד הרכישה, ולא הוגשה תביעה, הלקוח יקבל החזר מלא של דמי הביטוח ששילם ללא ניכוי דמי טיפול.

### CTRL-purchase-10 / gpt-4.1-mini / run 2 — PASS
- requested=gpt-4.1-mini returned=gpt-4.1-mini-2025-04-14 reasoningEffortSent=missing
- status=answered latencyMs=1203.6772500000006 usage={"promptTokens":6605,"completionTokens":83,"totalTokens":6688,"cachedInputTokens":6400,"reasoningTokens":0} costUsd=0.0008548000000000001
- hashes: {"systemPromptSha256":"a65e36a6e5058be1793ddfd306ae1023b7554f6827c7b009f39407b2ddbebb32","userPromptSha256":"97fc2d5ba1ce7a325bf49ca674c195f7b1315a56c4ca4e0e965bea53f3fddf11","inputBundleSha256":"5c9c362993f592469aa68b6e69ff39a4a74a3d1bba22ec96f7bc93fdf267999c"}
- cited: ["corpus/23_cancellation_procedure_update_2025:c000"]

אם מבטלים פוליסה בשנת 2026 בתוך 14 יום ממועד הרכישה, ולא הוגשה תביעה, הלקוח יקבל החזר מלא של דמי הביטוח ששילם ללא ניכוי דמי טיפול.

### CTRL-purchase-10 / gpt-5.6-terra / run 0 — PASS
- requested=gpt-5.6-terra returned=gpt-5.6-terra reasoningEffortSent=medium
- status=answered latencyMs=2595.745415999998 usage={"promptTokens":6601,"completionTokens":114,"totalTokens":6715,"cachedInputTokens":0,"reasoningTokens":0} costUsd=0.01457
- hashes: {"systemPromptSha256":"a65e36a6e5058be1793ddfd306ae1023b7554f6827c7b009f39407b2ddbebb32","userPromptSha256":"97fc2d5ba1ce7a325bf49ca674c195f7b1315a56c4ca4e0e965bea53f3fddf11","inputBundleSha256":"5c9c362993f592469aa68b6e69ff39a4a74a3d1bba22ec96f7bc93fdf267999c"}
- cited: ["corpus/23_cancellation_procedure_update_2025:c000"]

לא. אם הביטול נעשה בתוך 14 ימים ממועד הרכישה ולא הוגשה תביעה, תקבל החזר מלא של דמי הביטוח ששילמת, ללא דמי טיפול. מאחר שציינת ביטול כעבור 10 ימים ממועד הרכישה וללא תביעה, תנאים אלה מתקיימים.

### CTRL-purchase-10 / gpt-5.6-terra / run 1 — PASS
- requested=gpt-5.6-terra returned=gpt-5.6-terra reasoningEffortSent=medium
- status=answered latencyMs=2423.897708000004 usage={"promptTokens":6601,"completionTokens":100,"totalTokens":6701,"cachedInputTokens":6598,"reasoningTokens":0} costUsd=0.0025256000000000002
- hashes: {"systemPromptSha256":"a65e36a6e5058be1793ddfd306ae1023b7554f6827c7b009f39407b2ddbebb32","userPromptSha256":"97fc2d5ba1ce7a325bf49ca674c195f7b1315a56c4ca4e0e965bea53f3fddf11","inputBundleSha256":"5c9c362993f592469aa68b6e69ff39a4a74a3d1bba22ec96f7bc93fdf267999c"}
- cited: ["corpus/23_cancellation_procedure_update_2025:c000"]

לא. אם הביטול נעשה בתוך 14 ימים ממועד הרכישה ולא הוגשה תביעה, תקבל/י החזר מלא של דמי הביטוח ששולמו, ללא דמי טיפול. עשרה ימים ממועד הרכישה עומדים בתנאי זה.

### CTRL-purchase-10 / gpt-5.6-terra / run 2 — PASS
- requested=gpt-5.6-terra returned=gpt-5.6-terra reasoningEffortSent=medium
- status=answered latencyMs=2289.255333999994 usage={"promptTokens":6601,"completionTokens":98,"totalTokens":6699,"cachedInputTokens":6598,"reasoningTokens":0} costUsd=0.0025015999999999997
- hashes: {"systemPromptSha256":"a65e36a6e5058be1793ddfd306ae1023b7554f6827c7b009f39407b2ddbebb32","userPromptSha256":"97fc2d5ba1ce7a325bf49ca674c195f7b1315a56c4ca4e0e965bea53f3fddf11","inputBundleSha256":"5c9c362993f592469aa68b6e69ff39a4a74a3d1bba22ec96f7bc93fdf267999c"}
- cited: ["corpus/23_cancellation_procedure_update_2025:c000"]

לא. אם הביטול נעשה 10 ימים ממועד הרכישה ולא הוגשה תביעה, תקבל/י החזר מלא של דמי הביטוח ששולמו, ללא דמי טיפול. הכלל בתוקף מ־1.1.2025.


## Offline rescore (CLOCK-A only — no new model calls)

Terra clarification answers that ask for מועד הרכישה and state clocks differ are scored as naming the missing purchase clock.

| Case | Model | Passes (rescored) |
| --- | --- | --- |
| CLOCK-A | gpt-4.1-mini | 0/3 |
| CLOCK-A | gpt-5.6-terra | 3/3 |
| CLOCK-B | gpt-4.1-mini | 1/3 |
| CLOCK-B | gpt-5.6-terra | 0/3 |
| CTRL-purchase-10 | gpt-4.1-mini | 3/3 |
| CTRL-purchase-10 | gpt-5.6-terra | 3/3 |
