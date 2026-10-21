# Demo script (~5 minutes)

Goal: show a live system, sources, applicability, abstention, and one known failure honestly.

**Not a production demo** — answers are RAG outputs, not validated policy advice.

## Prep (before the call)

```bash
pnpm dev   # existing index + .env with key
```

Open localhost in the browser; start a **new thread** before each scenario if you want a clean history window.

## Minute 0–1 — working question + open source

1. Click the **«שעות מוקד בשישי»** suggestion (or type the question).
2. Wait for the full answer (no streaming) — expect ~08:00–12:00.
3. Open **source** / `[1]` and show chunk text from `28_call_center_hours` (from the index, not a model summary).
4. Briefly note: `retrieved ≠ context ≠ sources` (only cited chunks appear as sources).

## Minute 1–2.5 — version pick by applicability

Question:

> מה ההשתתפות העצמית בתיקון במוסך הסדר בפוליסת מקיף שהונפקה באפריל 2026?

Expected: **1,100 ₪** from the 2026 version (even if 2024 ranks high in retrieval).  
Explain: the model received context with both versions; prompt applicability policy requires matching the **issue date**.

## Minute 2.5–3.5 — abstention when there is no evidence

Question: **ביטוח חיות מחמד**.  
Expected: `insufficient_evidence`, neutral wording, **no** empty sources panel.

## Minute 3.5–5 — known failure + how you would improve

Question about **איחור כבודה 8 שעות**.  
The system will show an amount (up to $150) — state honestly:

- In saved eval (`ask-eval-stage5.3`) and live checks in Stage 6: **PIR condition was omitted** despite being in context.
- This is a **completeness / wording** failure, not retrieval failure and not “chunkId validation.”
- Proposed fix (from “one more week” doc): mandatory eligibility conditions from cited chunks + regression on D11.

Do not patch logic mid-demo unless asked.

## Optional — follow-up in the same thread (30 seconds)

- Composer hint (Hebrew UI): follow-ups are allowed in the **same conversation**.
- Ask a short follow-up that needs prior turn context; mention rewrite → retrieve on `standaloneQuestion`.
- Note limits: **6 turns / 6000 chars** history; dropped turns are not sent; persistence is **browser localStorage only**.

## Close (30 seconds)

- Point to `docs/CODE-MAP.md` if they ask where to change code live.
- Mention active config: Hybrid + applicability ON, answer review OFF (`docs/stage6-config-freeze.md`).
