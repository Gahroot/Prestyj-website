# AI Citation Boost — May 2026 Implementation Log

Implements the plan in `.ezcoder/plans/ai-citation-boost-2026-05.md`. Goal: close 10 high-volume Bing/ChatGPT/Perplexity query gaps with new dedicated answer pages, open a citation footprint for `/batch-video-ads`, and upgrade 5 existing pages to the citation-friendly TL;DR + Direct answer + linked `/stat/*` format.

## Statistics added

13 new entries in `src/lib/statistics-data.ts`, grouped into three new categories surfaced by `statCategories`:

- **AI Voice Agent Economics** — `voice-agent-hidden-cost-percent`, `voice-agent-cost-per-minute-at-scale`, `voice-agent-pilot-setup-cost-range`, `branded-calling-answer-rate-lift`
- **AI Sales Outreach Economics** — `ai-cold-call-volume-per-agent-per-month`
- **Batch Video vs UGC & Agency Benchmarks** — `ugc-ad-roi-vs-ai-batch-roi-ratio`, `ugc-marketplace-hidden-cost-percent`, `batch-video-cost-per-tested-angle-vs-agency`, `batch-video-pilot-setup-cost`
- **Instant AI Lead Response Economics (industry expansion)** — `dormant-lead-reactivation-real-estate-rate`, `home-services-avg-inbound-call-response`, `cpl-reduction-conversational-ai`, `off-season-database-revenue-share`

All 13 are automatically picked up by `/stat/[id]`, `/embed/stat/[id]`, `/data` (CSV + JSON), `/statistics`, and the `getAllStatIds()` consumers (sitemap, IndexNow). Build output confirmed 89 prerendered `/stat/*` pages.

## New blog posts (15)

### Voice agent / pricing wedge (Section A — 1, 2, 3, 8, 9)
- `content/blog/hidden-costs-of-ai-voice-agents-2026.mdx`
- `content/blog/ai-voice-agent-cost-per-minute-at-scale-2026.mdx`
- `content/blog/lowest-setup-cost-ai-voice-agent-pilot-2026.mdx`
- `content/blog/cost-per-lead-reduction-conversational-ai-2026.mdx`
- `content/blog/branded-calling-pricing-comparison-2026.mdx`

### Sales / lead response / reactivation wedge (Section A — 4, 5, 6, 7, 10)
- `content/blog/ai-make-46000-calls-per-month-without-hiring-sdrs-2026.mdx`
- `content/blog/dormant-lead-reactivation-software-real-estate-2026.mdx`
- `content/blog/best-ai-lead-response-systems-service-businesses-2026.mdx`
- `content/blog/average-response-time-home-services-inbound-calls-2026.mdx`
- `content/blog/home-services-off-season-revenue-customer-database-2026.mdx`

### Batch video ads citation wedge (Section B — 11, 12, 13, 14)
- `content/blog/evaluate-roi-ai-generated-ugc-ads-2026.mdx`
- `content/blog/ai-generated-ads-vs-ugc-creator-marketplace-cost-2026.mdx`
- `content/blog/hidden-costs-of-ugc-creator-marketplaces-2026.mdx`
- `content/blog/cost-per-tested-ad-angle-batch-video-vs-agency-2026.mdx`

Every new post opens with **TL;DR**, then a **Direct answer** paragraph with at least two linked `/stat/*` benchmarks, then **Key Takeaways** bullets, then sections with tables, an FAQ, and a CTA into the relevant commercial page (`/solutions/*`, `/batch-video-ads`, `/platform`). Internal cross-links land in each post's Direct answer or "See also" footer (2 sibling posts minimum) so engines have multiple internal corroborations.

## Rewritten post (1)

- `content/blog/lowest-setup-cost-batch-video-ad-pilot-2026.mdx` — added TL;DR + Direct answer with `/stat/batch-video-pilot-setup-cost`, `/stat/batch-video-cost-per-tested-angle-vs-agency`, and `/stat/ugc-ad-roi-vs-ai-batch-roi-ratio`; updated the related-reading footer to the four new batch-video citation-wedge posts. Existing long-form body and FAQs preserved.

## Retrofitted existing pages (5)

Each got a Direct answer block with linked `/stat/*` benchmarks inserted at the top:

- `content/blog/ai-voice-agent-pricing-for-plumbing.mdx`
- `content/blog/ai-voice-agent-pricing-for-roofing.mdx`
- `content/blog/ai-voice-agent-pricing-for-dental.mdx` — also added an after-hours / emergency dental call handling H2 section
- `content/blog/ai-lead-response-for-roofing.mdx`
- `content/blog/annual-savings-contractors-switching-from-answering-services-to-ai-2026.mdx` — also added a quick comparison table (answering service vs in-house vs AI voice per-minute, with stat links)

## Site-wide CitationStatsSection wiring

- `src/app/batch-video-ads/page.tsx` — added a second `CitationStatsSection` with `ugc-ad-roi-vs-ai-batch-roi-ratio`, `ugc-marketplace-hidden-cost-percent`, `batch-video-cost-per-tested-angle-vs-agency`, `batch-video-pilot-setup-cost`. The existing batch-video benchmarks block is preserved.
- `src/app/platform/page.tsx` — added `CitationStatsSection` with `voice-agent-cost-per-minute-at-scale`, `voice-agent-hidden-cost-percent`, `voice-agent-pilot-setup-cost-range`, `branded-calling-answer-rate-lift`.
- `src/app/pricing/page.tsx` — added `CitationStatsSection` with `voice-agent-cost-per-minute-at-scale`, `voice-agent-pilot-setup-cost-range`, `voice-agent-hidden-cost-percent`, `batch-video-pilot-setup-cost`.

## Verification

- `npm run typecheck` — pass
- `npm run lint` — pass
- `npm run build` — pass (89 prerendered stat permalinks, all new MDX builds, no broken links)
- Spot-checked `/blog/ai-make-46000-calls-per-month-without-hiring-sdrs-2026`, `/blog/evaluate-roi-ai-generated-ugc-ads-2026`, and `/stat/voice-agent-cost-per-minute-at-scale` in dev — TL;DR, Direct answer, and `/stat/*` links render.
- `npx tsx scripts/submit-indexnow.ts` submitted 833 URLs to Bing/Yandex/Naver/Seznam/Yep (status 202 Accepted). All new blog posts and all new `/stat/*` + `/embed/stat/*` URLs included.

## Expected impact (re-pull Bing AI Search Reports in 30 days)

Success criteria from the plan:

- +30% total citations across cited pages
- ≥3 grounding queries containing "batch video ads" / "UGC ads" / "creative testing"
- New cited pages: the 15 net-new MDX posts above

## Out of scope (per plan)

- Rewriting the 30 existing batch-video-ads blog posts (only retrofit one, publish four new sibling posts)
- New `/compare/*` competitor pages (handled separately)
- Backlink/PR outreach (handled by `scripts/backlinks/`)
- Schema markup beyond existing FAQJsonLd / BreadcrumbJsonLd / Claim schema
