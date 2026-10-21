# Ask eval comparison — ask-eval-stage5.1.json → ask-eval-stage5.2.json

- Before: 2026-10-21T06:10:49.187Z (statusCounts={"answered":14,"insufficient_evidence":1})
- After: 2026-10-21T06:18:06.851Z (statusCounts={"answered":4,"clarification_needed":10,"insufficient_evidence":1})
- Clarification step (all rows incl. probes): tokens≈5000, time≈16014ms

| id | before status | after status | skippedRetrieve | notes |
| --- | --- | --- | --- | --- |
| D01 | answered | answered | no | — |
| D02 | answered | answered | no | answer changed |
| D03 | answered | clarification_needed | yes | status answered→clarification_needed; answer changed |
| D04 | insufficient_evidence | insufficient_evidence | no | answer changed |
| D05 | answered | clarification_needed | yes | status answered→clarification_needed; answer changed |
| D06 | answered | clarification_needed | yes | status answered→clarification_needed; answer changed |
| D07 | answered | answered | no | answer changed |
| D08 | answered | clarification_needed | yes | status answered→clarification_needed; answer changed |
| D09 | answered | clarification_needed | yes | status answered→clarification_needed; answer changed |
| D10 | answered | clarification_needed | yes | status answered→clarification_needed; answer changed |
| D11 | answered | clarification_needed | yes | status answered→clarification_needed; answer changed |
| D12 | answered | clarification_needed | yes | status answered→clarification_needed; answer changed |
| D13 | answered | clarification_needed | yes | status answered→clarification_needed; answer changed |
| D14 | answered | clarification_needed | yes | status answered→clarification_needed; answer changed |
| D15 | answered | answered | no | answer changed |

## Focus cases — after

### D04 (insufficient_evidence)

לא מצאתי במקורות שסופקו מידע מספיק כדי לענות על השאלה.

Parts: []
Sources: (none)
Clarify tokens/ms: 273 / 706

### D05 (clarification_needed)

איזו פוליסה אתה מתכוון אליה?

Parts: [{"text":"איזו פוליסה אתה מתכוון אליה?","sourceChunkIds":[]}]
Sources: (none)
Clarify tokens/ms: 282 / 842

### D06 (clarification_needed)

האם תוכל לספק פרטים נוספים על סוג הפוליסה והכיסויים שלה?

Parts: [{"text":"האם תוכל לספק פרטים נוספים על סוג הפוליסה והכיסויים שלה?","sourceChunkIds":[]}]
Sources: (none)
Clarify tokens/ms: 337 / 973

### D08 (clarification_needed)

איזה סוג פוליסה הלקוח ביטל ומהם תנאי הביטול שלה?

Parts: [{"text":"איזה סוג פוליסה הלקוח ביטל ומהם תנאי הביטול שלה?","sourceChunkIds":[]}]
Sources: (none)
Clarify tokens/ms: 316 / 859

### D10 (clarification_needed)

איזו פוליסה וגרסה יש לך?

Parts: [{"text":"איזו פוליסה וגרסה יש לך?","sourceChunkIds":[]}]
Sources: (none)
Clarify tokens/ms: 293 / 859

### D11 (clarification_needed)

איזה סוג ביטוח יש לנוסע ומה גרסת הפוליסה?

Parts: [{"text":"איזה סוג ביטוח יש לנוסע ומה גרסת הפוליסה?","sourceChunkIds":[]}]
Sources: (none)
Clarify tokens/ms: 308 / 828

### D14 (clarification_needed)

איזו פוליסה וגרסה יש לך?

Parts: [{"text":"איזו פוליסה וגרסה יש לך?","sourceChunkIds":[]}]
Sources: (none)
Clarify tokens/ms: 297 / 863

## Extra probes

### X01 (clarification_needed) skipped=true

Q: מה גובה ההשתתפות העצמית שלי?

איזו פוליסה ומספר פוליסה יש לך?

### X02 (insufficient_evidence) skipped=false

Q: האם אופק ביטוח מציעה ביטוח רחפנים מסחריים?

לא מצאתי במקורות שסופקו מידע מספיק כדי לענות על השאלה.

## Other answer/status changes

- **D02**: answered→answered
  - before: כדי לבקש ביטול פוליסה יש למלא את טופס מספר 4401 בשם "בקשה לביטול פוליסה". ניתן להגיש את הבקשה באמצעות אזור אישי או מוקד השירות. בנוסף, ניתן לבטל גם בשיחה מוקלטת
  - after: כדי לבקש ביטול פוליסה יש למלא את טופס מספר 4401 בשם "בקשה לביטול פוליסה". בנוסף, ניתן להגיש את בקשת הביטול גם בשיחה מוקלטת במוקד לאחר זיהוי מלא של הלקוח.
- **D03**: answered→clarification_needed
  - before: בהתאם לגרסת הפוליסה שהונפקה או חודשה החל מ-1.3.2026, ההשתתפות העצמית בתיקון במוסך הסדר היא 1,100 ₪, צמודה למדד המחירים לצרכן הידוע ביום 1.3.2026.
  - after: איזו פוליסת מקיף ומה תאריך הנפקה מדויק?
- **D07**: answered→answered
  - before: חתמות רפואית עונה לבקשה של סוכן לגבי מצב רפואי קודם בביטוח נסיעות בתוך 3 ימי עסקים. במקרה של בקשה דחופה, למשל נסיעה בתוך 48 שעות, יש לסמן "דחוף" בטופס כדי לקבל 
  - after: חתמות רפואית עונה לבקשות לגבי מצב רפואי קודם בביטוח נסיעות בתוך 3 ימי עסקים. במקרה של בקשה דחופה, למשל כאשר הנסיעה מתוכננת בתוך 48 שעות, יש לסמן "דחוף" בטופס כד
- **D09**: answered→clarification_needed
  - before: תקרת הכיסוי למזומן בביטוח תכולה היא עד 2,000 ₪.
  - after: איזו פוליסת ביטוח תכולה יש לך ומה הגרסה שלה?
- **D12**: answered→clarification_needed
  - before: בפוליסות אופק ביטוח, מגבלת הגרירות בשנת ביטוח היא עד 4 גרירות לאחר תאונה או תקלה.
  - after: איזו פוליסה ושנת ביטוח אתה מתכוון אליהם?
- **D13**: answered→clarification_needed
  - before: סיבוכי הריון מכוסים במסגרת ביטוח נסיעות לחו"ל רק עד שבוע 26 להריון. במקרה של שבוע 28 להריון, סיבוכי הריון אינם מכוסים במסגרת הביטוח, אלא אם הוצהרו ואושרו מראש ע
  - after: איזו פוליסת ביטוח יש לך ומהו אזור הכיסוי שלה?
- **D15**: answered→answered
  - before: על המבוטח להגיש תלונה במשטרה על גניבת רכב בתוך 24 שעות ממועד הגילוי ולהמציא למבטח את אישור התלונה.
  - after: על המבוטח להגיש תלונה במשטרה על גניבת רכב בתוך 24 שעות ממועד הגילוי. בנוסף, יש להמציא למבטח את אישור התלונה במשטרה כדי להמשיך בתהליך התביעה.