# Prestyj GEO / AI-Citation Playbook (June 2026)

This is the operating plan for holding and growing AI citations (ChatGPT, Perplexity,
Google AI Overviews/AI Mode, Claude). It pairs what the 2025–2026 research says with
what Prestyj's own citation data shows.

---

## 0. Reality check — read this first

Your Bing AI Page Stats exports show citations **rising, not falling**:

| Date (2026) | Total citations | Pages cited |
|-------------|-----------------|-------------|
| May 25 | 748 | 26 |
| May 28 | 1,336 | 27 |
| May 29 | 2,767 | 42 |

The "we're losing" feeling is almost certainly **traditional rankings softening while AI
citations climb** — which is the documented industry pattern, not a regression. The
overlap between top Google links and AI-cited sources has fallen from ~70% to under 20%;
AI-Overview citations from top-10 organic dropped from ~76% (mid-2025) to 17–38% (early
2026). Ranking loss no longer equals citation loss.

**The real risk is concentration:** ~40 of 329 posts pull citations, and the top 6 drive
over half. Protect the winners, then diversify.

---

## What ships in this repo (done)

1. **Visible "Published / Updated" dates** on every blog post
   (`src/app/blog/[slug]/page.tsx`). Research: a visible "Updated {Month}" lifts citation
   rates ~30%; pages updated in the last 3 months average ~6 citations vs 3.6 for stale.
2. **`updated` frontmatter** added to the top 12 cited posts (quarterly-refresh signal).
3. **Site-wide FAQPage schema bug fixed.** The FAQ extractor's regex stopped at the first
   `###`, so **zero** posts emitted FAQ schema. Now all posts with a
   "## Frequently Asked Questions" section emit valid `FAQPage` JSON-LD.
4. **New data hub:** `content/blog/ai-voice-agent-statistics-2026.mdx` — original-data
   framing on the highest-citation cluster (voice), linked to permanent `/stat/` pages.
5. **llms.txt** updated to register the new post + a new grounding query.

---

## 1. On-page (you own this — highest leverage, fastest)

- **Front-load an extractable answer.** ~44% of AI citations come from the first 30% of a
  page. Every cited/important post needs a 40–60 word bolded **TL;DR** + **Direct answer**
  near the top. (Most top posts already have this — keep the pattern for all new content.)
- **Keep the year visible.** "2026" in titles/H2s improves citation ~30%. Maintain it.
- **Quarterly refresh of the winners.** Each quarter, update the top ~40 cited posts: bump
  `updated`, refresh stats, re-verify claims. This is where the citations already live.
- **Original data = ~3× citation rate.** Keep routing claims through `/stat/<id>` pages.
  Each statistic is already citable/embeddable — publish more first-party benchmarks
  (you have the `/stat` infrastructure; use it).
- **Never gate cornerstone content.** If the best answer sits behind an email form, AI
  can't read it, so it can't cite it. Keep lead magnets, but keep an open canonical answer.
- **Don't keyword-stuff.** Research shows stuffing *reduces* AI visibility; clarity +
  cited statistics raise it.

## 2. Technical (mostly already strong here)

- robots.txt allows AI crawlers ✓ · sitemap ✓ · IndexNow ✓ · llms.txt with query→citation
  map ✓ · Article/FAQPage/HowTo/Breadcrumb JSON-LD ✓ · author E-E-A-T w/ `knowsAbout` ✓.
- **Open item — fix the Turbopack build panic.** `next build` currently fails parsing
  committed `src/lib/premium-portal.ts` (intake/portal path, unrelated to content). This
  blocks production deploys of *all* the above. Prioritize.
- **Re-ping IndexNow** after the refresh + new post so Bing/Copilot re-crawl fast.

## 3. Off-site consensus (the biggest gap — start now, slow to mature)

Research is blunt: brand-owned pages are weighted **down**; AI scans for **agreement
across independent sources** before citing. When AI recommends a brand it usually cites a
third party (G2, Reddit, a publication), not the company site. You have 329 owned pages
and ~zero off-site footprint. Cold-start to first citation is typically **60–120 days**.

Priority order for home-services / real-estate AI buyers:

1. **Review sites** — get listed and reviewed on **G2, Capterra** (most-cited software
   review sources across ChatGPT/Perplexity/AI Overviews). Highest-trust consensus signal.
2. **Reddit** — Perplexity pulls ~46% of citations from Reddit. Identify subreddits where
   your buyers ask (r/HVAC, r/Plumbing, r/realtors, r/smallbusiness, r/msp). Contribute
   **genuinely** (answers, not ads). Aged, real accounts only.
3. **Quora** — Q&A format is one AI models extract from; answer the exact grounding
   queries below in your own voice with first-party data.
4. **YouTube** — even basic tutorial/explainer content; AI Mode weights video heavily and
   citations point to a durable channel.
5. **Consistent entity data** — same name, claims, and numbers everywhere (NAP + product
   facts). Inconsistency makes AI distrust the brand.

## 4. Content pipeline from your own grounding queries

Your `*_AISearchQueriesReport_*.csv` files are the literal prompts AI uses to cite you —
mine them monthly. Uncovered / under-served queries to build or strengthen next:

- "SuperDial vs Retell.ai payer calls comparison" — no dedicated page (healthcare payer niche)
- "RevCoverage dormant lead reactivation comparison" — no dedicated page
- "contact rate vs response time home service leads" — thin; build a data page
- "emergency electrician response time comparison" — only partial coverage
- "AI voice agent vendors per-minute pricing 24/7 PCI-compliant payment" — compliance angle

Rule: each new post links to 2–4 existing authoritative posts (dense internal linking is a
trust signal AI uses to judge whether the domain is a knowledge hub).

## 5. Measurement (do monthly)

- Pull AI Page Stats + AI Search Queries from Bing Webmaster monthly; track total
  citations, # of distinct cited pages (diversification), and new grounding queries.
- Add a GA4 "AI Traffic" channel (regex source:
  `chatgpt\.com|perplexity\.ai|claude\.ai|gemini\.google\.com|copilot\.microsoft\.com|openai\.com`).
- Manually probe your 20 most important prompts in ChatGPT, Perplexity, and Google AI
  Overviews monthly; note where a competitor is cited and you are not. Platforms differ —
  only ~11% domain overlap between ChatGPT and Perplexity — so track each separately.

---

### Source basis
Synthesis of 2025–2026 GEO research: Princeton/KDD GEO study, Profound, SEMrush, Ahrefs,
BrightEdge, Superlines (first-30% citation distribution), Brandlight (link/citation
overlap collapse), and platform docs (Perplexity recency, Google AI Overviews). Figures
are directional, not guarantees — re-validate quarterly as engines shift.
