# Generation model comparison

Generated: 2026-10-21T14:29:23.846Z
Snapshot: 2026-10-21T14:27:07.424Z
Pricing: https://developers.openai.com/api/docs/pricing (standard short-context)

## Summary table

| Case | Model | Passes / runs | Remaining failure | Avg ms | Avg tokens | Avg cost USD |
| --- | --- | --- | --- | --- | --- | --- |
| MF-B-t0 | gpt-4.1-mini | 3/3 | — | 1560 | 6097 | 0.0008 |
| MF-B-t0 | gpt-5.6-terra | 3/3 | — | 2539 | 6107 | 0.0061 |
| MF-B-t1 | gpt-4.1-mini | 0/3 | issue date rewritten to index base 1.1.2024 | 1639 | 6163 | 0.0014 |
| MF-B-t1 | gpt-5.6-terra | 3/3 | — | 2871 | 6177 | 0.0063 |
| MF-B-t2 | gpt-4.1-mini | 2/3 | user February 2026 issue date not preserved | 1720 | 6172 | 0.0008 |
| MF-B-t2 | gpt-5.6-terra | 0/3 | user February 2026 issue date not preserved | 4575 | 6258 | 0.0073 |
| MF-D-t0 | gpt-4.1-mini | 1/3 | forbidden phrase: 5%; leaked superseded 5% handling fee | 3276 | 5996 | 0.0017 |
| MF-D-t0 | gpt-5.6-terra | 1/3 | forbidden phrase: 5%; leaked superseded 5% handling fee | 7004 | 6074 | 0.0091 |
| MF-F-t0 | gpt-4.1-mini | 3/3 | — | 3186 | 2932 | 0.0007 |
| MF-F-t0 | gpt-5.6-terra | 3/3 | — | 5030 | 2957 | 0.0051 |
| CTRL-hours | gpt-4.1-mini | 3/3 | — | 1209 | 2090 | 0.0004 |
| CTRL-hours | gpt-5.6-terra | 3/3 | — | 1978 | 2099 | 0.0024 |
| CTRL-replacement | gpt-4.1-mini | 3/3 | — | 2841 | 6097 | 0.0010 |
| CTRL-replacement | gpt-5.6-terra | 2/3 | missing any of [כתב שירות] | 3661 | 6014 | 0.0067 |
| CTRL-pets | gpt-4.1-mini | 3/3 | — | 1009 | 4929 | 0.0006 |
| CTRL-pets | gpt-5.6-terra | 3/3 | — | 1365 | 4934 | 0.0042 |

## Out of scope for generation swap

- MF-A: 2024 demotion (`demoted_version_omit_retrieved`) — context/applicability fix.
- MF-C: home contents retrieval miss — retrieval/clarify policy fix.
- MF-E: English agent FAQ miss — retrieval fix.

## Cases in snapshot

- **MF-B-t0** (probe): תיקון עובדה לאורך שיחה — תאריך הנפקה — contextChunks=17
- **MF-B-t1** (probe): תיקון עובדה לאורך שיחה — תאריך הנפקה — contextChunks=17
- **MF-B-t2** (probe): תיקון עובדה לאורך שיחה — תאריך הנפקה — contextChunks=17
- **MF-D-t0** (probe): עדכון חלקי לנוהל ביטול — 10 ימים ללא תביעה — contextChunks=18
- **MF-F-t0** (probe): יישום סכום הוצאה — עיכוב כבודה 30 שעות ו-220$ — contextChunks=6
- **CTRL-hours** (control): שעות מוקד בשישי — contextChunks=5
- **CTRL-replacement** (control): סתירת עלון מול כתב שירות רכב חלופי — contextChunks=16
- **CTRL-pets** (control): הימנעות מביטוח חיות מחמד — contextChunks=16

## Per-run detail

### MF-B-t0 / gpt-4.1-mini / run 0 — PASS
- requested=gpt-4.1-mini returned=gpt-4.1-mini-2025-04-14 reasoning=n/a
- status=answered ms=1512 tokens=6097 (reason=0) cost≈$0.00082
- preview: ההשתתפות העצמית במוסך הסדר עבור רכב מקיף שהונפק באפריל 2026 היא 1,100 ₪. ההשתתפות העצמית צמודה למדד המחירים לצרכן הידוע ביום 1.3.2026.

### MF-B-t0 / gpt-4.1-mini / run 1 — PASS
- requested=gpt-4.1-mini returned=gpt-4.1-mini-2025-04-14 reasoning=n/a
- status=answered ms=1599 tokens=6097 (reason=0) cost≈$0.00082
- preview: ההשתתפות העצמית במוסך הסדר עבור רכב מקיף שהונפק באפריל 2026 היא 1,100 ₪. ההשתתפות העצמית צמודה למדד המחירים לצרכן הידוע ביום 1.3.2026.

### MF-B-t0 / gpt-4.1-mini / run 2 — PASS
- requested=gpt-4.1-mini returned=gpt-4.1-mini-2025-04-14 reasoning=n/a
- status=answered ms=1569 tokens=6097 (reason=0) cost≈$0.00082
- preview: ההשתתפות העצמית במוסך הסדר עבור רכב מקיף שהונפק באפריל 2026 היא 1,100 ₪. ההשתתפות העצמית צמודה למדד המחירים לצרכן הידוע ביום 1.3.2026.

### MF-B-t1 / gpt-4.1-mini / run 0 — FAIL
- requested=gpt-4.1-mini returned=gpt-4.1-mini-2025-04-14 reasoning=n/a
- status=answered ms=1658 tokens=6165 (reason=0) cost≈$0.00083
- failures: issue date rewritten to index base 1.1.2024
- preview: בהתאם לפוליסת רכב מקיף שהונפקה מגרסת 2024 (בתוקף מיום 1.1.2024) והונפקה בפברואר 2026, ההשתתפות העצמית במוסך הסדר היא 950 ש"ח עבור נזק חלקי ותיקון במוסך הסדר.

### MF-B-t1 / gpt-4.1-mini / run 1 — FAIL
- requested=gpt-4.1-mini returned=gpt-4.1-mini-2025-04-14 reasoning=n/a
- status=answered ms=1649 tokens=6159 (reason=0) cost≈$0.00082
- failures: issue date rewritten to index base 1.1.2024
- preview: בהתאם לפוליסת רכב מקיף שהונפקה מיום 1.1.2024 (כולל פברואר 2026) ולא חודשה מאז, ההשתתפות העצמית במוסך הסדר היא 950 ש"ח עבור נזק חלקי ותיקון במוסך הסדר.

### MF-B-t1 / gpt-4.1-mini / run 2 — FAIL
- requested=gpt-4.1-mini returned=gpt-4.1-mini-2025-04-14 reasoning=n/a
- status=answered ms=1611 tokens=6165 (reason=0) cost≈$0.00260
- failures: issue date rewritten to index base 1.1.2024
- preview: בהתאם לפוליסת רכב מקיף שהונפקה בגרסת 2024 (בתוקף מיום 1.1.2024) והונפקה בפברואר 2026, ההשתתפות העצמית במוסך הסדר היא 950 ש"ח עבור נזק חלקי ותיקון במוסך הסדר.

### MF-B-t2 / gpt-4.1-mini / run 0 — PASS
- requested=gpt-4.1-mini returned=gpt-4.1-mini-2025-04-14 reasoning=n/a
- status=answered ms=1867 tokens=6173 (reason=0) cost≈$0.00084
- preview: בפוליסת רכב מקיף שהונפקה בפברואר 2024 (ולא חודשה מאז), במקרה של תיקון במוסך שאינו מוסך הסדר, סכום ההשתתפות העצמית הוא 1,850 ₪. ההשתתפות העצמית צמודה למדד המחירים לצרכן הידוע ביום 1.1.2024.

### MF-B-t2 / gpt-4.1-mini / run 1 — FAIL
- requested=gpt-4.1-mini returned=gpt-4.1-mini-2025-04-14 reasoning=n/a
- status=answered ms=1675 tokens=6165 (reason=0) cost≈$0.00083
- failures: user February 2026 issue date not preserved
- preview: בהתאם לפוליסת רכב מקיף של אופק ביטוח מגרסת 2024, במקרה של תיקון במוסך שאינו מוסך הסדר, סכום ההשתתפות העצמית הוא 1,850 ₪. סכום זה צמוד למדד המחירים לצרכן הידוע ביום 1.1.2024.

### MF-B-t2 / gpt-4.1-mini / run 2 — PASS
- requested=gpt-4.1-mini returned=gpt-4.1-mini-2025-04-14 reasoning=n/a
- status=answered ms=1619 tokens=6178 (reason=0) cost≈$0.00085
- preview: בפוליסת רכב מקיף שהונפקה בפברואר 2024 (גרסת 2024) ולא חודשה מאז, במקרה של תיקון במוסך שאינו מוסך הסדר, סכום ההשתתפות העצמית הוא 1,850 ₪. ההשתתפות העצמית צמודה למדד המחירים לצרכן הידוע ביום 1.1.2024.

### MF-D-t0 / gpt-4.1-mini / run 0 — FAIL
- requested=gpt-4.1-mini returned=gpt-4.1-mini-2025-04-14 reasoning=n/a
- status=answered ms=3787 tokens=6039 (reason=0) cost≈$0.00282
- failures: forbidden phrase: 5%; leaked superseded 5% handling fee
- preview: אם אתה מבטל את הפוליסה בשנת 2026, עשרה ימים אחרי תחילת הביטוח, ולא הייתה תביעה, לפי העדכון לנוהל ביטול פוליסה החל מ-1.1.2025, תקבל החזר מלא של דמי הביטוח ששילמת ללא דמי טיפול, כי הביטול נעשה בתוך 14 יום ממועד הרכישה ולא הייתה תביעה. לגבי נוהל הביטול הישן מ-2023, דמי הטיפול היו מנוכים בשיעור 5% מסכום ההחזר, וההחזר מחושב באופן יחסי לתקופה שנותרה עד תום תקופת הביטוח. לכן, הכלל שחל עליך הוא הכלל המעודכן מ-2025, שבו אין ניכוי דמי טיפול אם הביטול נעשה בתוך 14 יום ולא הייתה תביעה. שאר הוראות נוהל הביטו

### MF-D-t0 / gpt-4.1-mini / run 1 — PASS
- requested=gpt-4.1-mini returned=gpt-4.1-mini-2025-04-14 reasoning=n/a
- status=answered ms=2781 tokens=5916 (reason=0) cost≈$0.00097
- preview: אם אתה מבטל את הפוליסה בשנת 2026, עשרה ימים אחרי תחילת הביטוח, ולא הייתה תביעה, לא ינוכו דמי טיפול. זאת מכיוון שביטול בתוך 14 יום ממועד הרכישה ללא תביעה מזכה בהחזר מלא של דמי הביטוח ששילמת, ללא דמי טיפול. החלק מנוהל הביטול הישן שעדיין בתוקף הוא כל ההוראות מלבד סעיף "חישוב ההחזר". כלומר, שאר הוראות נוהל הביטול מ-2023 נשארות בתוקף, אך חישוב ההחזר עודכן החל מ-1.1.2025.

### MF-D-t0 / gpt-4.1-mini / run 2 — FAIL
- requested=gpt-4.1-mini returned=gpt-4.1-mini-2025-04-14 reasoning=n/a
- status=answered ms=3261 tokens=6033 (reason=0) cost≈$0.00116
- failures: forbidden phrase: 5%; leaked superseded 5% handling fee; updated 3% / no-fee rule not clearly stated
- preview: אם מבוטח מבטל פוליסה בשנת 2026, עשרה ימים אחרי תחילת הביטוח, ולא הייתה תביעה, הוא יקבל החזר מלא של דמי הביטוח ששילם ללא ניכוי דמי טיפול, כי הביטול נעשה בתוך 14 יום ממועד הרכישה ולא הייתה תביעה. הכלל שחל על ביטול בתוך 14 יום הוא שההחזר מחושב באופן יחסי (pro-rata) ללא ניכוי דמי טיפול. אם הביטול היה לאחר 14 יום ממועד הרכישה, ההחזר מחושב באופן יחסי ומנוכים ממנו דמי טיפול בשיעור 5% מסכום ההחזר, לפי נוהל הביטול מ-2023, שהוראותיו נשארו בתוקף למעט סעיף חישוב ההחזר שעודכן. שאר הוראות נוהל הביטול מ-2023 נ

### MF-F-t0 / gpt-4.1-mini / run 0 — PASS
- requested=gpt-4.1-mini returned=gpt-4.1-mini-2025-04-14 reasoning=n/a
- status=answered ms=2709 tokens=2938 (reason=0) cost≈$0.00067
- preview: כאשר כבודה מתעכבת מעל 24 שעות, ניתן לקבל פיצוי עד 150 דולר נוספים על רכישת פריטים חיוניים, בנוסף לפיצוי של עד 150 דולר עבור עיכוב מעל 6 שעות, כלומר סך הפיצוי המקסימלי הוא עד 300 דולר. יש להגיש דו"ח אי-הגעת כבודה (PIR) לשדה התעופה כדי לקבל את הפיצוי. במקרה שלך, עם PIR וקבלות על פריטים חיוניים בסך 220 דולר, ניתן להניח שהפיצוי יהיה עד 220 דולר, כלומר עד לסכום הקבלות שהוצאת, כל עוד אינו עולה על התקרה של 300 דולר.

### MF-F-t0 / gpt-4.1-mini / run 1 — PASS
- requested=gpt-4.1-mini returned=gpt-4.1-mini-2025-04-14 reasoning=n/a
- status=answered ms=3107 tokens=2930 (reason=0) cost≈$0.00065
- preview: במקרה של עיכוב כבודה מעל 24 שעות, ניתן לקבל פיצוי עד 150 דולר נוספים מעבר לפיצוי הראשוני של 150 דולר לרכישת פריטים חיוניים, כלומר סך הפיצוי המקסימלי הוא עד 300 דולר. יש להגיש דו"ח אי-הגעת כבודה (PIR) לשדה התעופה כדי לקבל את הפיצוי. בהתאם לכך, אם יש קבלות על פריטים חיוניים בסך 220 דולר, ניתן להגיש תביעה לפיצוי עד התקרה של 300 דולר, וההחזר בפועל יהיה בהתאם לסכום ההוצאות המאושרות עד לתקרה זו.

### MF-F-t0 / gpt-4.1-mini / run 2 — PASS
- requested=gpt-4.1-mini returned=gpt-4.1-mini-2025-04-14 reasoning=n/a
- status=answered ms=3742 tokens=2927 (reason=0) cost≈$0.00065
- preview: כאשר כבודה מתעכבת מעל 24 שעות, ניתן לקבל פיצוי עד 150 דולר נוספים על רכישת פריטים חיוניים, בנוסף לפיצוי של עד 150 דולר עבור עיכוב מעל 6 שעות, כלומר סך הפיצוי המקסימלי הוא עד 300 דולר. יש להגיש דו"ח אי-הגעת כבודה (PIR) לשדה התעופה כדי לקבל את הפיצוי. בהתחשב בכך שיש קבלות על פריטים חיוניים בסך 220 דולר, ניתן להסיק שהפיצוי בפועל יכול להיות עד 220 דולר, כל עוד הקבלות עומדות בתנאי הכיסוי.

### CTRL-hours / gpt-4.1-mini / run 0 — PASS
- requested=gpt-4.1-mini returned=gpt-4.1-mini-2025-04-14 reasoning=n/a
- status=answered ms=1192 tokens=2090 (reason=0) cost≈$0.00036
- preview: שעות הפעילות של מוקד שירות הלקוחות ביום שישי הן מ-08:00 עד 12:00.

### CTRL-hours / gpt-4.1-mini / run 1 — PASS
- requested=gpt-4.1-mini returned=gpt-4.1-mini-2025-04-14 reasoning=n/a
- status=answered ms=1285 tokens=2090 (reason=0) cost≈$0.00036
- preview: שעות הפעילות של מוקד שירות הלקוחות ביום שישי הן מ-08:00 עד 12:00.

### CTRL-hours / gpt-4.1-mini / run 2 — PASS
- requested=gpt-4.1-mini returned=gpt-4.1-mini-2025-04-14 reasoning=n/a
- status=answered ms=1150 tokens=2090 (reason=0) cost≈$0.00036
- preview: שעות הפעילות של מוקד שירות הלקוחות ביום שישי הן מ-08:00 עד 12:00.

### CTRL-replacement / gpt-4.1-mini / run 0 — PASS
- requested=gpt-4.1-mini returned=gpt-4.1-mini-2025-04-14 reasoning=n/a
- status=answered ms=2526 tokens=6082 (reason=0) cost≈$0.00102
- preview: רכב חלופי ניתן רק למבוטחים שרכשו כתב שירות רכב חלופי, והוא אינו חלק מהכיסוי הבסיסי בפוליסת מקיף. במקרה של תאונה, רכב חלופי ניתן כל עוד הרכב בתיקון במוסך הסדר, לתקופה מקסימלית של עד 21 ימים. במקרה של גניבה או אובדן גמור, רכב חלופי ניתן לתקופה מקסימלית של עד 30 ימים. במקרה של תקלה מכנית, רכב חלופי אינו ניתן. מצד שני, בעלון השיווקי של אופק ביטוח מצוין כי רכב חלופי ניתן לכל תקופת התיקון, ללא כוכביות. עם זאת, מידע זה הוא שיווקי בלבד והתנאים המחייבים הם תנאי הפוליסה וכתבי השירות שנרכשו.

### CTRL-replacement / gpt-4.1-mini / run 1 — PASS
- requested=gpt-4.1-mini returned=gpt-4.1-mini-2025-04-14 reasoning=n/a
- status=answered ms=3072 tokens=6082 (reason=0) cost≈$0.00102
- preview: רכב חלופי ניתן רק למבוטחים שרכשו כתב שירות רכב חלופי, והוא אינו חלק מהכיסוי הבסיסי בפוליסת מקיף. במקרה של תאונה, רכב חלופי ניתן כל עוד הרכב בתיקון במוסך הסדר, לתקופה מקסימלית של עד 21 ימים. במקרה של גניבה או אובדן גמור, רכב חלופי ניתן לתקופה מקסימלית של עד 30 ימים. במקרה של תקלה מכנית, רכב חלופי אינו ניתן. מצד שני, בעלון השיווקי של אופק ביטוח מצוין כי רכב חלופי ניתן לכל תקופת התיקון, ללא כוכביות. עם זאת, מידע זה הוא שיווקי בלבד והתנאים המחייבים הם תנאי הפוליסה וכתבי השירות שנרכשו.

### CTRL-replacement / gpt-4.1-mini / run 2 — PASS
- requested=gpt-4.1-mini returned=gpt-4.1-mini-2025-04-14 reasoning=n/a
- status=answered ms=2924 tokens=6128 (reason=0) cost≈$0.00109
- preview: רכב חלופי ניתן רק למבוטחים שרכשו כתב שירות רכב חלופי, והוא אינו חלק מהכיסוי הבסיסי בפוליסת מקיף. לגבי תקופת הזכאות לרכב חלופי: במקרה של תאונה שבה הרכב בתיקון במוסך הסדר, הרכב החלופי ניתן עד 21 ימים. במקרה של גניבה או אובדן גמור, הרכב החלופי ניתן עד 30 ימים. במקרה של תקלה מכנית, רכב חלופי אינו ניתן כלל. בנוסף, רכב חלופי ניתן רק אם התיקון נעשה במוסך הסדר; תיקון במוסך שאינו בהסדר אינו מזכה ברכב חלופי. מצד שני, בעלון השיווק של אופק ביטוח מצוין כי במסגרת ביטוח הרכב ניתן רכב חלופי לכל תקופת התיקון, לל

### CTRL-pets / gpt-4.1-mini / run 0 — PASS
- requested=gpt-4.1-mini returned=gpt-4.1-mini-2025-04-14 reasoning=n/a
- status=insufficient_evidence ms=965 tokens=4929 (reason=0) cost≈$0.00057
- preview: —

### CTRL-pets / gpt-4.1-mini / run 1 — PASS
- requested=gpt-4.1-mini returned=gpt-4.1-mini-2025-04-14 reasoning=n/a
- status=insufficient_evidence ms=973 tokens=4929 (reason=0) cost≈$0.00057
- preview: —

### CTRL-pets / gpt-4.1-mini / run 2 — PASS
- requested=gpt-4.1-mini returned=gpt-4.1-mini-2025-04-14 reasoning=n/a
- status=insufficient_evidence ms=1088 tokens=4929 (reason=0) cost≈$0.00057
- preview: —

### MF-B-t0 / gpt-5.6-terra / run 0 — PASS
- requested=gpt-5.6-terra returned=gpt-5.6-terra reasoning=medium
- status=answered ms=2463 tokens=6107 (reason=0) cost≈$0.01326
- preview: בפוליסת מקיף שהונפקה באפריל 2026, ההשתתפות העצמית עבור נזק חלקי ותיקון במוסך הסדר היא 1,100 ₪, צמודים למדד המחירים לצרכן הידוע ביום 1.3.2026.

### MF-B-t0 / gpt-5.6-terra / run 1 — PASS
- requested=gpt-5.6-terra returned=gpt-5.6-terra reasoning=medium
- status=answered ms=2537 tokens=6106 (reason=0) cost≈$0.00245
- preview: בפוליסת מקיף שהונפקה באפריל 2026, ההשתתפות העצמית בנזק חלקי המתוקן במוסך הסדר היא 1,100 ₪, צמודים למדד המחירים לצרכן הידוע ביום 1.3.2026.

### MF-B-t0 / gpt-5.6-terra / run 2 — PASS
- requested=gpt-5.6-terra returned=gpt-5.6-terra reasoning=medium
- status=answered ms=2618 tokens=6108 (reason=0) cost≈$0.00248
- preview: בפוליסת מקיף שהונפקה באפריל 2026, ההשתתפות העצמית בגין נזק חלקי המתוקן במוסך הסדר היא 1,100 ₪, צמודה למדד המחירים לצרכן הידוע ביום 1.3.2026.

### MF-B-t1 / gpt-5.6-terra / run 0 — PASS
- requested=gpt-5.6-terra returned=gpt-5.6-terra reasoning=medium
- status=answered ms=2671 tokens=6162 (reason=0) cost≈$0.01341
- preview: בפוליסת רכב מקיף שהונפקה בפברואר 2026 ולא חודשה, ההשתתפות העצמית עבור נזק חלקי המתוקן במוסך הסדר היא 950 ₪, צמודים למדד המחירים לצרכן הידוע ביום 1.1.2024.

### MF-B-t1 / gpt-5.6-terra / run 1 — PASS
- requested=gpt-5.6-terra returned=gpt-5.6-terra reasoning=medium
- status=answered ms=2617 tokens=6162 (reason=0) cost≈$0.00252
- preview: בפוליסת רכב מקיף שהונפקה בפברואר 2026 ולא חודשה, ההשתתפות העצמית עבור נזק חלקי המתוקן במוסך הסדר היא 950 ₪, צמודים למדד המחירים לצרכן הידוע ביום 1.1.2024.

### MF-B-t1 / gpt-5.6-terra / run 2 — PASS
- requested=gpt-5.6-terra returned=gpt-5.6-terra reasoning=medium
- status=answered ms=3324 tokens=6207 (reason=0) cost≈$0.00306
- preview: בפוליסת רכב מקיף שהונפקה בפברואר 2026 ולא חודשה, ההשתתפות העצמית לנזק חלקי המתוקן במוסך הסדר היא 950 ₪, צמודים למדד המחירים לצרכן הידוע ביום 1.1.2024. אם בעת האירוע נהג ברכב נהג צעיר שנכלל בנספח נהג צעיר, ההשתתפות העצמית מוכפלת.

### MF-B-t2 / gpt-5.6-terra / run 0 — FAIL
- requested=gpt-5.6-terra returned=gpt-5.6-terra reasoning=medium
- status=answered ms=5358 tokens=6303 (reason=0) cost≈$0.01509
- failures: user February 2026 issue date not preserved
- preview: במקרה של נזק חלקי ותיקון במוסך שאינו בהסדר, ההשתתפות העצמית היא 1,850 ₪, צמודה למדד המחירים לצרכן הידוע ביום 1.1.2024. אם בעת האירוע נהג ברכב נהג צעיר הכלול בנספח נהג צעיר, ההשתתפות העצמית מוכפלת. אין לתקן את הרכב לפני שניתנה לשמאי הזדמנות סבירה לבדוק את הנזק, למעט תיקון דחוף למניעת נזק נוסף. אם נרכש כתב שירות לרכב חלופי, תאונה שבה הרכב מתוקן במוסך שאינו בהסדר אינה מזכה ברכב חלופי.

### MF-B-t2 / gpt-5.6-terra / run 1 — FAIL
- requested=gpt-5.6-terra returned=gpt-5.6-terra reasoning=medium
- status=answered ms=4101 tokens=6241 (reason=0) cost≈$0.00345
- failures: user February 2026 issue date not preserved
- preview: בתיקון של נזק חלקי במוסך שאינו בהסדר, ההשתתפות העצמית היא 1,850 ₪, צמודה למדד המחירים לצרכן הידוע ביום 1.1.2024. אם הנהג היה נהג צעיר שנכלל בנספח, ההשתתפות העצמית מוכפלת. לפני תיקון הרכב יש לאפשר לשמאי הזדמנות סבירה לבדוק את הנזק, למעט תיקון דחוף שנדרש כדי למנוע נזק נוסף.

### MF-B-t2 / gpt-5.6-terra / run 2 — FAIL
- requested=gpt-5.6-terra returned=gpt-5.6-terra reasoning=medium
- status=answered ms=4266 tokens=6229 (reason=0) cost≈$0.00330
- failures: user February 2026 issue date not preserved
- preview: במקרה של נזק חלקי ותיקון במוסך שאינו בהסדר, ההשתתפות העצמית היא 1,850 ₪, צמודה למדד המחירים לצרכן הידוע ביום 1.1.2024. הסכום מנוכה מתגמולי הביטוח. אם בעת האירוע נהג ברכב נהג צעיר שנכלל בנספח נהג צעיר, ההשתתפות העצמית מוכפלת עבור אותו סוג אירוע.

### MF-D-t0 / gpt-5.6-terra / run 0 — PASS
- requested=gpt-5.6-terra returned=gpt-5.6-terra reasoning=medium
- status=answered ms=6633 tokens=6033 (reason=0) cost≈$0.01544
- preview: הכלל שחל עליך: אם הביטול נעשה בתוך 14 יום ממועד הרכישה ולא הוגשה תביעה, תקבל החזר מלא של דמי הביטוח ששילמת, ללא דמי טיפול. לכן, בנסיבות שתיארת—10 ימים מתחילת הביטוח וללא תביעה—לא ינוכו דמי טיפול, ככל שמועד הרכישה הוא בתוך אותם 14 ימים. מהנוהל הישן עדיין בתוקף: אפשר לבטל בכל עת; הבקשה מוגשת בטופס 4401 או בשיחה מוקלטת למוקד לאחר זיהוי מלא; הביטול נכנס לתוקף במועד שביקשת, אך לא לפני קבלת הבקשה. ההחזר מועבר לאמצעי התשלום המקורי או לחשבון בנק לפי טופס 4410, בתוך 14 ימי עסקים. אחרי 14 יום: ההחזר מחושב

### MF-D-t0 / gpt-5.6-terra / run 1 — FAIL
- requested=gpt-5.6-terra returned=gpt-5.6-terra reasoning=medium
- status=answered ms=6974 tokens=6074 (reason=0) cost≈$0.00568
- failures: forbidden phrase: 5%; leaked superseded 5% handling fee
- preview: במקרה שתיארת — ביטול בשנת 2026 בתוך 14 ימים ממועד הרכישה וללא הגשת תביעה — תקבל/י החזר מלא של דמי הביטוח ששולמו, ללא דמי טיפול. לכן לא ינוכו דמי טיפול. אחרי 14 ימים: ההחזר מחושב באופן יחסי לתקופה שנותרה עד תום הביטוח, ודמי הטיפול הם 3% מסכום ההחזר, עד לתקרה של 150 ₪. מהנוהל הישן של 2023 עדיין בתוקף, משום שהעדכון שינה רק את חישוב ההחזר: אפשר לבטל בכל עת; הבקשה מוגשת בטופס 4401 או בשיחה מוקלטת במוקד לאחר זיהוי מלא; הביטול נכנס לתוקף במועד שביקשת, אך לא לפני קבלת הבקשה; וההחזר מועבר לאמצעי התשלום ה

### MF-D-t0 / gpt-5.6-terra / run 2 — FAIL
- requested=gpt-5.6-terra returned=gpt-5.6-terra reasoning=medium
- status=answered ms=7406 tokens=6114 (reason=0) cost≈$0.00616
- failures: forbidden phrase: 5%; leaked superseded 5% handling fee
- preview: במקרה שלך — ביטול בתוך 14 יום ממועד הרכישה וללא הגשת תביעה — תקבל החזר מלא של דמי הביטוח ששילמת, ללא דמי טיפול. לכן, בביטול 10 ימים לאחר תחילת הביטוח אין לנכות דמי טיפול, ככל שתחילת הביטוח היא גם בתוך 14 יום ממועד הרכישה. הכלל לאחר 14 יום: ההחזר מחושב באופן יחסי לתקופה שנותרה עד תום הביטוח, ומנוכים ממנו דמי טיפול בשיעור 3% מסכום ההחזר, עד תקרה של 150 ₪. מהנוהל הישן נותרו בתוקף כל ההוראות שאינן עוסקות בחישוב ההחזר: אפשר לבטל בכל עת; יש להגיש בקשה בטופס 4401 או בשיחה מוקלטת במוקד לאחר זיהוי מלא; ה

### MF-F-t0 / gpt-5.6-terra / run 0 — PASS
- requested=gpt-5.6-terra returned=gpt-5.6-terra reasoning=medium
- status=answered ms=5515 tokens=2976 (reason=0) cost≈$0.00854
- preview: בעיכוב כבודה של 30 שעות, התקרה לרכישת פריטים חיוניים היא עד 300 דולר: עד 150 דולר כאשר העיכוב מעל 6 שעות, ועוד עד 150 דולר כאשר הוא מעל 24 שעות. מאחר שיש דו״ח PIR וקבלות בסך 220 דולר, סכום ההוצאות נמוך מהתקרה. לכן ניתן להסיק שהבקשה יכולה להיות עד 220 דולר, בכפוף לבדיקת התביעה ואישור ההוצאות; אין במידע שנמסר התחייבות להחזר מלא בפועל. לתביעה יש לצרף גם כרטיס טיסה וכרטיס עלייה למטוס, ולהגיש אותה עד 90 יום מהחזרה לישראל. התשלום, אם יאושר, יועבר בשקלים לפי השער היציג ביום התשלום.

### MF-F-t0 / gpt-5.6-terra / run 1 — PASS
- requested=gpt-5.6-terra returned=gpt-5.6-terra reasoning=medium
- status=answered ms=4962 tokens=2979 (reason=0) cost≈$0.00369
- preview: בעיכוב כבודה של 30 שעות, התקרה לרכישת פריטים חיוניים היא עד 300$: עד 150$ כאשר העיכוב מעל 6 שעות, ועוד עד 150$ כאשר הוא מעל 24 שעות. מאחר שיש PIR וקבלות בסך 220$, סכום ההוצאות נמוך מהתקרה. לכן ניתן להסיק שההחזר עשוי להגיע עד 220$ עבור ההוצאות המתועדות, בכפוף לבדיקת התביעה ואישורה; לא ניתן להסיק מהמסמכים שהחזר מלא מובטח. לתביעה נדרשים גם כרטיס טיסה וכרטיס עלייה למטוס, וההגשה היא עד 90 יום מיום החזרה לישראל. התשלום, אם יאושר, יועבר בשקלים לפי השער היציג ביום התשלום.

### MF-F-t0 / gpt-5.6-terra / run 2 — PASS
- requested=gpt-5.6-terra returned=gpt-5.6-terra reasoning=medium
- status=answered ms=4613 tokens=2916 (reason=0) cost≈$0.00294
- preview: בעיכוב כבודה של 30 שעות, התקרה היא עד 300 דולר לרכישת פריטים חיוניים: עד 150 דולר בעיכוב של מעל 6 שעות ועוד עד 150 דולר בעיכוב של מעל 24 שעות. מאחר שיש דו״ח PIR וקבלות בסך 220 דולר, סכום ההוצאות נמוך מהתקרה. לכן ניתן להסיק שההחזר עשוי להגיע עד 220 דולר, בכפוף לאישור התביעה ולכך שהרכישות יוכרו כפריטים חיוניים. התשלום מועבר בשקלים לפי השער היציג ביום התשלום.

### CTRL-hours / gpt-5.6-terra / run 0 — PASS
- requested=gpt-5.6-terra returned=gpt-5.6-terra reasoning=medium
- status=answered ms=1903 tokens=2099 (reason=0) cost≈$0.00485
- preview: מוקד שירות הלקוחות פעיל ביום שישי בין 08:00 ל־12:00. טלפון: *6789.

### CTRL-hours / gpt-5.6-terra / run 1 — PASS
- requested=gpt-5.6-terra returned=gpt-5.6-terra reasoning=medium
- status=answered ms=1934 tokens=2099 (reason=0) cost≈$0.00119
- preview: מוקד שירות הלקוחות פועל ביום שישי בין 08:00 ל־12:00. טלפון: *6789.

### CTRL-hours / gpt-5.6-terra / run 2 — PASS
- requested=gpt-5.6-terra returned=gpt-5.6-terra reasoning=medium
- status=answered ms=2097 tokens=2100 (reason=0) cost≈$0.00120
- preview: ביום שישי מוקד שירות הלקוחות פועל בין 08:00 ל־12:00. טלפון: *6789.

### CTRL-replacement / gpt-5.6-terra / run 0 — PASS
- requested=gpt-5.6-terra returned=gpt-5.6-terra reasoning=medium
- status=answered ms=3562 tokens=6004 (reason=0) cost≈$0.01357
- preview: לא בהכרח. רכב חלופי ניתן רק אם נרכש כתב שירות רכב חלופי; הוא אינו חלק מהכיסוי הבסיסי בפוליסת המקיף. במקרה של תאונה, הזכאות היא כל עוד הרכב מתוקן במוסך הסדר, ועד 21 ימים לכל היותר. תיקון במוסך שאינו בהסדר אינו מזכה ברכב חלופי.

### CTRL-replacement / gpt-5.6-terra / run 1 — FAIL
- requested=gpt-5.6-terra returned=gpt-5.6-terra reasoning=medium
- status=answered ms=3166 tokens=5989 (reason=0) cost≈$0.00287
- failures: missing any of [כתב שירות]
- preview: לא בהכרח. רכב חלופי אינו חלק מהכיסוי הבסיסי, והוא ניתן רק אם נרכש כתב השירות. במקרה של תאונה, הזכאות היא כל עוד הרכב בתיקון במוסך הסדר, ועד 21 ימים לכל היותר; תיקון במוסך שאינו בהסדר אינו מזכה ברכב חלופי.

### CTRL-replacement / gpt-5.6-terra / run 2 — PASS
- requested=gpt-5.6-terra returned=gpt-5.6-terra reasoning=medium
- status=answered ms=4254 tokens=6048 (reason=0) cost≈$0.00358
- preview: לא בהכרח. רכב חלופי אינו חלק מהכיסוי הבסיסי, והוא ניתן רק אם נרכש כתב שירות רכב חלופי. במקרה של תאונה, הזכאות היא כל עוד הרכב בתיקון במוסך הסדר, ועד 21 ימים לכל היותר. בתיקון במוסך שאינו בהסדר אין זכאות לרכב חלופי. העלון המציין „לכל תקופת התיקון” הוא מידע שיווקי בלבד; התנאים המחייבים הם הפוליסה וכתב השירות.

### CTRL-pets / gpt-5.6-terra / run 0 — PASS
- requested=gpt-5.6-terra returned=gpt-5.6-terra reasoning=medium
- status=insufficient_evidence ms=1706 tokens=4934 (reason=0) cost≈$0.01008
- preview: —

### CTRL-pets / gpt-5.6-terra / run 1 — PASS
- requested=gpt-5.6-terra returned=gpt-5.6-terra reasoning=medium
- status=insufficient_evidence ms=1175 tokens=4934 (reason=0) cost≈$0.00124
- preview: —

### CTRL-pets / gpt-5.6-terra / run 2 — PASS
- requested=gpt-5.6-terra returned=gpt-5.6-terra reasoning=medium
- status=insufficient_evidence ms=1213 tokens=4934 (reason=0) cost≈$0.00124
- preview: —
