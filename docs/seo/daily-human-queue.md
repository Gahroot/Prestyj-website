# Daily Human-Action Queue (rolling)

> Work only a human can do: relationship emails, real-account Reddit/Quora/G2 posts, draft approvals for merge, and manual AI-overview probing. The bot drafts and tracks — a person ships these. Check off done items; the bot re-adds new items each run. Grouped by due-soonest.
>
> _Last updated: 2026-06-26 (Friday)._

---

## 🔴 Due now (this week — highest leverage)

- [ ] **Approve & merge** the Phase 3 refresh: `content/blog/hidden-costs-of-ai-voice-agents-2026.mdx` (added `updated: 2026-06-26` + exact-question H2). typecheck + lint pass; IndexNow not needed (already indexed). Commit when ready — **do not** push without review.
- [ ] **Send 1 digital-PR pitch — HousingWire-tech** (DR-60+, real-estate beat). Draft ready at `docs/backlinks/pitch-drafts/journalist/housingwire-tech.md`. Data-led angle on AI-voice-agent / answering-service cost benchmarks.
- [ ] **Follow up on 1 outstanding pitch.** Press/outreach waves from late May sent; none have placed. Reply to the warmest contact (check `data/backlinks/placements/` logs).
- [ ] **Re-export Bing Webmaster backlinks** → `data/backlinks/bing-export-2026-06-26.csv`, then `npm run backlinks:snapshot <path>`. Current snapshot is 35 days stale; ref-domain trend is unreliable.

## 🟡 Due this sprint (next 7–14 days)

- [ ] **Consensus surface (Reddit):** write a genuine, value-first answer in **r/HVAC** or **r/realtors** on "hidden costs of AI voice agents" — the exact query surging +1,219% with first-party numbers. Real aged account only, no links/promos.
- [ ] **G2 / Capterra:** request 1–2 customer reviews (most-cited software sources by ChatGPT/Perplexity). Needs a real customer relationship.
- [ ] **Record GSC inputs:** pull **indexed pages** and **branded impressions** (regex `(?i)prestyj`) from GSC UI → `npm run seo:gsc-progress -- --indexed <N> --branded-impressions <N>`.
- [ ] **Clean up repo root:** remove or `.gitignore` the stray `google searchrtf.rtf`.

## 🟢 Backlog (claim before competitors)

- [ ] **Blog draft (Tue):** "Voice agent QA pilot pricing before annual contract" — 53 NEW citations, no dedicated page. Buyer-math / hidden-cost framing.
- [ ] **AI-overview probing (manual):** run the top 20 priority prompts in ChatGPT, Perplexity, Google AI Overviews. Note where a competitor is cited and Prestyj isn't (~11% overlap ChatGPT↔Perplexity — track each engine separately).
- [ ] **YouTube short:** a 60-sec "the 6 hidden costs of AI voice agents" explainer — AI Mode weights video; durable channel citations.
- [ ] **Dataset-directory submissions:** 8 prepared targets (Zenodo/Figshare/Harvard Dataverse/Hugging Face/Kaggle/etc.) for the CC BY 4.0 statistics dataset → earns the DOI that makes journalist/researcher pitches citable.

---

### Done ✅
- [x] 2026-06-26 — Refreshed `hidden-costs-of-ai-voice-agents-2026.mdx` (freshness + exact-question H2) — _awaiting merge above._
- [x] 2026-06-26 — IndexNow: 37 new blog URLs submitted (202 Accepted).
- [x] 2026-06-26 — 17 dataset pitch drafts regenerated under `docs/backlinks/pitch-drafts/`.
