# Daily Human-Action Queue (rolling)

> Work only a human can do: relationship emails, real-account Reddit/Quora/G2 posts, draft approvals for merge, and manual AI-overview probing. The bot drafts and tracks — a person ships these. Check off done items; the bot re-adds new items each run. Grouped by due-soonest.
>
> _Last updated: 2026-06-29 (Sunday). Citations nearly doubled this run (9,584 query / 12,514 page); breakout = branded-calling-for-MSP cluster (+500–1,080%)._

---

## 🔴 Due now (this week — highest leverage)

- [ ] **Approve & merge** the Phase 3 refresh: `content/blog/hidden-cost-answering-services-2026.mdx` (added `updated: 2026-06-27`, bolded TL;DR + direct answer, exact-question H2 "How Much Can a Contractor Save by Switching From an Answering Service to AI?"). typecheck + lint pass. **Before merge, resolve the `$299/mo` Prestyj pricing** in this post — it conflicts with current tiers ($1,997 / $3,497 / $5,997). See the verify item below.
- [ ] **Approve & merge (NEW 06-29):** `content/blog/ai-voice-agent-costs-compared.mdx` — `updated` bumped to **2026-06-29**, one H2 converted to exact-question "How Much Does an AI Voice Agent Cost Per Minute at Scale in 2026?" Stats re-verified (all match). typecheck + lint pass. **Left uncommitted.** Low-risk, safe to merge.
- [ ] **CTR fix (NEW 06-29):** `/blog/ai-voice-agent-costs-compared` has **2,139 GSC impressions (most of any URL) but 1 click (0.05%) at pos 9.14** — top-of-page-2 leak. Sharpen title/description (keep hard numbers + "2026"); small position/CTR push = outsized click gain. Single highest-leverage on-page win.
- [ ] **Send 1 digital-PR pitch — ACHR News (HVAC trade)**, DR-60+, matches the "contractor savings switching answering service → AI" angle. Draft ready at `docs/backlinks/pitch-drafts/journalist/achrnews-hvac.md`.
- [ ] **Send 1 digital-PR pitch — HousingWire-tech** (DR-60+, real-estate beat) still outstanding. Draft at `docs/backlinks/pitch-drafts/journalist/housingwire-tech.md`.
- [ ] **Send 1 digital-PR pitch (NEW 06-29) — CRN** (IT-channel, DR 80+), data-led angle on the **branded-calling-for-MSP surge** (+500–1,080%). Draft at `docs/backlinks/pitch-drafts/journalist/crn-branded-calling-msp.md`. Best fit for today's breakout cluster.
- [ ] **Follow up on 1 outstanding pitch.** Late-May press/outreach waves sent; none placed. Reply to the warmest contact (check `data/backlinks/placements/` logs).
- [ ] **Re-export Bing Webmaster BACKLINKS** → `data/backlinks/bing-export-2026-06-29.csv`, then `npm run backlinks:snapshot <path>`. Snapshot **~38 days stale** (2026-05-22); ref-domain trend unreliable. **+0 earned domains in 25 days → 0.0/mo vs 5–15/mo target. 🔴 Biggest gap.** _(Note: the AI-citations export was refreshed today 06-29; only the backlinks export is stale.)_
- [ ] **Verify / fix the `$299/mo` Prestyj pricing** in `hidden-cost-answering-services-2026.mdx` (tables, HVAC scenario, ROI calculator). It predates the current $1,997 / $3,497 / $5,997 tiers. Either update to a consistent managed-pricing figure or confirm it's an intentional legacy/hypothetical. Bot did not rewrite it — needs human positioning call.

## 🟡 Due this sprint (next 7–14 days)

- [ ] **Consensus surface (Reddit):** write a genuine, value-first answer in **r/HVAC** or **r/Contractors** on "hidden costs of answering services" / "how much I actually saved switching to AI answering" — pairs with the refreshed contractor-savings post. Real aged account only, no links/promos.
- [ ] **Consensus surface (Reddit) (NEW 06-29):** value-first answer in **r/msp** or **r/msp** / **r/ITManagers** on "is branded calling worth it for an MSP" / "branded caller ID cost per line" — pairs with the branded-calling-for-MSP surge (+500–1,080%, multiple net-new queries). Real aged account, no promos.
- [ ] **Positioning validation (NEW 06-29):** the **branded-calling-for-MSP / IT-services** cluster is the fastest-growing AI-citation category (3,685 cites, #3 overall). MSPs are arguably within "service businesses," and a dedicated page already earns 743 cites — but leaning in harder (satellite posts, refreshed internal links) is a positioning call. Decide whether to double down or hold the line on the core lane.
- [ ] **G2 / Capterra:** request 1–2 customer reviews (most-cited software sources by ChatGPT/Perplexity). Needs a real customer relationship.
- [ ] **Record GSC inputs:** pull **indexed pages** and **branded impressions** (regex `(?i)prestyj`) from GSC UI → `npm run seo:gsc-progress -- --indexed <N> --branded-impressions <N>`.
- [ ] **Clean up repo root:** remove or `.gitignore` the stray `google searchrtf.rtf`.

## 🟢 Backlog (claim before competitors)

- [ ] **Blog draft (next Tue):** "Voice agent QA pilot pricing before annual contract" — 118 citations now (was 53), +123% WoW. Buyer-math / hidden-cost framing.
- [ ] **Satellite / refresh (NEW 06-29):** branded-calling-for-MSP cluster — refresh the internal-link mesh on the two winners (`branded-calling-pricing-comparison-2026` 1,190 cites; `best-branded-calling-for-it-services-msps-2026` 743 cites) toward the surging queries, OR draft one satellite for the top net-new query "top managed services providers branded calling" (58). Gated on the positioning call above.
- [ ] **Satellite post:** "Live answering services vs AI voice agents for HVAC emergencies" — 60 NEW citations (highest-volume net-new query), distinct after-hours/emergency angle not covered by today's refresh.
- [ ] **AI-overview probing (manual):** run the top 20 priority prompts in ChatGPT, Perplexity, Google AI Overviews. Note where a competitor is cited and Prestyj isn't (~11% overlap ChatGPT↔Perplexity — track each engine separately). **Priority probe (06-29):** the branded-calling-for-MSP queries ("best branded calling for MSPs", "branded caller ID cost per line") — Bing shows the surge; confirm whether competitors (Hiya/First Ion/First Orion resellers) are cited in ChatGPT/Perplexity/AI Overviews and we're not.
- [ ] **YouTube short:** a 60-sec "the 6 hidden costs of AI voice agents" explainer — AI Mode weights video; durable channel citations.
- [ ] **Dataset-directory submissions:** 8 prepared targets (Zenodo/Figshare/Harvard Dataverse/Hugging Face/Kaggle/etc.) for the CC BY 4.0 statistics dataset → earns the DOI that makes journalist/researcher pitches citable.

---

### Done ✅
- [x] 2026-06-29 — Ingested fresh Bing AI-citation export → `data/ai-citations/2026-06-29/`; ran `analyze:citations` (9,584 query / 12,514 page cites, +100% / +86% WoW). Breakout = branded-calling-for-MSP (+500–1,080%).
- [x] 2026-06-29 — Refreshed `ai-voice-agent-costs-compared.mdx` (freshness `updated: 2026-06-29` + exact-question H2 + 3 verified `/stat/*` links) — _uncommitted, awaiting merge._
- [x] 2026-06-29 — IndexNow re-pinged the refreshed URL (202 Accepted).
- [x] 2026-06-29 — Drafted CRN pitch (branded-calling-for-MSP data angle) at `docs/backlinks/pitch-drafts/journalist/crn-branded-calling-msp.md`.
- [x] 2026-06-27 — Refreshed `hidden-cost-answering-services-2026.mdx` (freshness + bolded TL;DR + direct answer + exact-question H2 + 3 `/stat/*` links) — _awaiting merge + pricing fix above._
- [x] 2026-06-26 — Merged `hidden-costs-of-ai-voice-agents-2026.mdx` freshness refresh (commit 749e8b0).
- [x] 2026-06-26 — IndexNow: 37 new blog URLs submitted (202 Accepted).
- [x] 2026-06-26 — 17 dataset pitch drafts regenerated under `docs/backlinks/pitch-drafts/`.
