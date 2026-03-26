# SEO Audit & Real Estate Niche-Down Plan

## Target ICP
Real estate **teams and brokerages** (NOT solo agents) doing **$20M+/year**, spending **$1K+/month on Facebook/YouTube/social ads**, who need **more leads and appointments set**.

---

## PART 1: SEO Audit — Issues to Fix

### 1.1 Root Layout (`src/app/layout.tsx`) — Generic Messaging
**Problem:** The site-wide `siteConfig` description says "real estate, home services, and high-growth service businesses" — too broad. Keywords include "contractor AI," "home services AI," which dilute real estate focus.

**Fix:**
- `title`: "AI Lead Response & Appointment Setting for Real Estate Teams | Prestyj"
- `description`: "AI that responds to your ad leads in under 60 seconds, qualifies buyers and sellers, and books appointments 24/7. Built for real estate teams and brokerages running Facebook and YouTube ads."
- `keywords`: Remove all home-services/contractor keywords. Replace with:
  - "AI lead response real estate", "real estate team lead conversion", "AI appointment setting real estate", "brokerage lead management", "AI ISA replacement", "real estate Facebook ad leads", "speed to lead real estate", "AI for real estate brokerages", "Follow Up Boss AI integration", "real estate lead follow up automation", "AI sales agent real estate teams", "real estate ad lead response"

### 1.2 Structured Data (`src/components/seo/json-ld.tsx`) — Generic
**Problem:** `siteConfig.description` mentions "home services." `ProductJsonLd` says "service businesses." `audienceType` is "Service Business Owners."

**Fix:**
- `siteConfig.description`: Focus on real estate teams/brokerages
- `ProductJsonLd`: description → "AI-powered lead response and appointment-setting platform for real estate teams and brokerages..."
- `audienceType`: "Real Estate Teams and Brokerages"
- `ServiceJsonLd` (check and update): Should reference real estate lead response, not generic services

### 1.3 Pricing Page — Home Services Focus (`src/lib/pricing-data.ts`)
**Problem:** Pricing tier stories mention "roofer," "window & door company," "multi-location roofing or HVAC operation." The FAQ says "We specialize in service businesses: roofing, HVAC, plumbing..."

**Fix:**
- **Minimum story**: "You're a growing real estate team running Facebook ads. Leads come in but half go cold because nobody responds fast enough. The Minimum plan gives you..."
- **Pro story**: "You're a 10-20 agent brokerage running $3K-5K/month in Facebook and YouTube ads. Leads pour in from multiple sources..."
- **Max story**: "You're a multi-office brokerage or franchise operation doing $50M+. You need AI handling inbound lead response across all offices..."
- **bestFor** lines: Rewrite for real estate personas
- **FAQ "What industries"**: "We specialize in real estate teams and brokerages running paid advertising..."

### 1.4 Pricing ROI Section (`src/components/sections/pricing/pricing-roi.tsx`)
**Problem:** Says "One closed roofing or HVAC job pays for months of service." Mentions roofing job values, HVAC installs, window replacements.

**Fix:**
- Stat value: "$8K–$25K" → Average commission on a real estate transaction
- Label: "Average commission per closing"
- Description: "One closed deal from an ad lead pays for months of service."
- Body copy: "The average real estate commission on a $400K home is $10K–$12K. Your AI pays for itself with the first appointment that converts..."

### 1.5 Footer (`src/components/layout/footer.tsx`) — Home Services Links Prominent
**Problem:** `bestFor` links lead with HVAC, Plumbing, Roofing. `solutions` links lead with Home Services, Roofing Contractors.

**Fix:** Reorder to lead with real estate:
- bestFor: Real Estate Teams, Real Estate Franchises, Regional Brokerages, ISA Replacement, Follow Up Boss Users, then others
- solutions: Speed to Lead, Lead Reactivation, AI Lead Generation, Sales Automation (remove Home Services, Roofing from prominent position)

### 1.6 Navigation (`src/lib/nav-data.ts`) — Mixed ICP
**Problem:** `solutionLinks` include "Home Services," "Roofing Contractors." `bestForLinks` include Roofing, HVAC, Plumbing, ServiceTitan, Jobber.

**Fix:**
- `solutionLinks`: Remove "Home Services" and "Roofing Contractors." Add "Real Estate Teams," "ISA Replacement"
- `bestForLinks`: Reorder — Real Estate Teams, Real Estate Franchises, Regional Brokerages, ISA Replacement, Follow Up Boss Users, Commercial Real Estate, Property Managers
- `alternativeLinks`: Already real-estate focused ✓

### 1.7 Blog Content — Heavy Home Services
**Problem:** Many blog posts target home services (HVAC, plumbing, roofing, contractors). These dilute topical authority for real estate.

**Fix (Phase 1 — quick):**
- Add `noindex: true` to blog frontmatter for purely home-services posts (e.g., `ai-receptionist-for-hvac-companies-2026.mdx`, `ai-receptionist-for-plumbers-2026.mdx`, `missed-call-text-back-plumbers-*`, `roofing-*`, `ai-storm-response-roofing-2026.mdx`, etc.)
- Keep posts that apply to both (speed-to-lead, AI sales agents, lead reactivation, etc.)

### 1.8 Best-For Pages — Too Many Non-RE Niches
**Problem:** 60+ best-for pages across restaurants, salons, gyms, veterinary clinics, etc. These dilute topical authority.

**Fix:**
- Add noindex to non-real-estate best-for slugs (hvac, roofing, plumbing, dental, restaurants, salons, gyms, etc.)
- Keep indexed: real-estate-teams, real-estate-franchises, regional-brokerage-networks, pe-backed-platforms, commercial-real-estate, real-estate-investors, real-estate-wholesalers, real-estate-coach, isa-replacement, mortgage-brokers, property-managers, follow-up-boss-users, insurance-agencies (adjacent)
- Keep indexed: ai-lead-response, ai-sales-agent, ai-appointment-setting, ai-voice-receptionist, conversion-rate-optimization, ai-customer-engagement, done-for-you-ai (service pages)
- Update sitemap.ts noindex list accordingly

### 1.9 Compare Pages — Some Generic
**Problem:** Several compare pages are about AI consulting (ai-consultant-vs-*, fractional-ai-consultant-vs-*). These don't serve the RE ICP.

**Fix:** Add noindex to non-RE compare pages. Keep: prestyj-vs-conversica, prestyj-vs-structurely, prestyj-vs-drift, prestyj-vs-internal-isa-team, prestyj-vs-offshore-isa, prestyj-vs-answering-service, prestyj-vs-ylopo, prestyj-vs-isa

---

## PART 2: Content Gaps — New Pages & Blog Posts for RE Brokerage Keywords

### 2.1 New Best-For Pages (high priority)
These target search queries real estate team leaders/brokers actually use:

1. **`/best-for/real-estate-brokerages`** — "best AI for real estate brokerages" (distinct from teams)
2. **`/best-for/facebook-ads-real-estate`** — "AI lead follow up for real estate Facebook ads"
3. **`/best-for/youtube-ads-real-estate`** — "real estate YouTube ad lead conversion"
4. **`/best-for/real-estate-team-leaders`** — "AI tools for real estate team leaders"
5. **`/best-for/kvcore-users`** — "kvCORE AI integration" (CRM-specific like Follow Up Boss page)
6. **`/best-for/sierra-interactive-users`** — "Sierra Interactive AI lead response"
7. **`/best-for/cinc-users`** — "CINC AI lead follow up"
8. **`/best-for/real-geeks-users`** — "Real Geeks AI integration"

### 2.2 New Solution Pages
1. **`/solutions/real-estate`** — Hub page: "AI Lead Response for Real Estate Teams & Brokerages"
2. **`/solutions/facebook-ad-leads`** — "Convert More Facebook Ad Leads with AI"
3. **`/solutions/youtube-ad-leads`** — "YouTube Ad Lead Response Automation"
4. **`/solutions/real-estate-lead-conversion`** — "Real Estate Lead Conversion Platform"

### 2.3 New Alternative/Compare Pages
1. **`/alternatives/fello`** — Prestyj vs Fello
2. **`/alternatives/roof-ai`** — Prestyj vs Roof AI
3. **`/alternatives/realscout`** — Prestyj vs RealScout
4. **`/alternatives/lofty`** — Already exists, ensure indexed
5. **`/alternatives/top-producer`** — Prestyj vs Top Producer AI
6. **`/alternatives/wise-agent`** — Prestyj vs Wise Agent

### 2.4 New Blog Posts — Targeting RE Team/Brokerage Keywords
Ordered by estimated search intent match for ICP:

**High Priority (Bottom-of-funnel / decision stage):**
1. `best-ai-lead-response-real-estate-teams-2026.mdx` — "best AI lead response for real estate teams"
2. `ai-isa-vs-human-isa-real-estate-2026.mdx` — "AI ISA vs human ISA cost comparison"
3. `real-estate-facebook-ad-lead-follow-up-2026.mdx` — "how to follow up Facebook ad leads real estate"
4. `ai-appointment-setting-real-estate-brokerages-2026.mdx` — "AI appointment setting for real estate brokerages"
5. `prestyj-vs-ylopo-ai-2026.mdx` — "Ylopo vs Prestyj AI comparison" (supports alternative page)
6. `follow-up-boss-ai-integration-2026.mdx` — "Follow Up Boss AI integration guide"
7. `best-ai-tools-real-estate-teams-2026.mdx` — Update existing `best-ai-tools-real-estate.mdx` with team/brokerage focus

**Mid Priority (Middle-of-funnel / consideration):**
8. `real-estate-speed-to-lead-statistics-2026.mdx` — "speed to lead statistics real estate"
9. `real-estate-lead-conversion-rates-2026.mdx` — "real estate lead conversion rates by source"
10. `facebook-ads-real-estate-lead-generation-2026.mdx` — "Facebook ads for real estate lead generation"
11. `youtube-ads-real-estate-brokerages-2026.mdx` — "YouTube ads for real estate brokerages"
12. `real-estate-team-scaling-with-ai-2026.mdx` — "how to scale real estate team with AI"
13. `ai-lead-qualification-real-estate-2026.mdx` — "AI lead qualification for real estate"
14. `real-estate-crm-ai-integration-guide-2026.mdx` — "best CRM AI integration real estate"
15. `cost-per-lead-real-estate-facebook-ads-2026.mdx` — "cost per lead real estate Facebook ads"

**Top-of-funnel (awareness):**
16. `how-top-brokerages-convert-ad-leads-2026.mdx` — "how top real estate brokerages convert leads"
17. `real-estate-lead-response-time-matters-2026.mdx` — "why lead response time matters real estate"
18. `real-estate-brokerage-technology-stack-2026.mdx` — "real estate brokerage technology stack"
19. `real-estate-team-operations-guide-2026.mdx` — "real estate team operations guide"
20. `fair-housing-ai-compliance-2026.mdx` — Update existing if needed (already have one)

### 2.5 New Lead Magnet
- **"The $20M+ Brokerage Playbook: How Top Teams Convert 3x More Ad Leads with AI"**
  - Target: Team leaders/broker-owners spending on ads
  - Content: Speed-to-lead data, ISA cost comparison, AI response benchmarks, CRM integration checklist
  - Gate: Name, email, brokerage name, monthly ad spend, team size

### 2.6 New Calculator
- **`/real-estate-roi-calculator`** — "Real Estate AI ROI Calculator"
  - Inputs: Monthly ad spend, cost per lead, current conversion rate, average commission, team size
  - Output: Projected additional closings/revenue with AI response vs current

---

## PART 3: Implementation Order

### Phase 1 — SEO Fixes (do first, highest impact)
1. Update `src/app/layout.tsx` — siteConfig title, description, keywords
2. Update `src/app/page.tsx` — already good, minor keyword refinements
3. Update `src/components/seo/json-ld.tsx` — all structured data
4. Update `src/lib/pricing-data.ts` — stories, bestFor, FAQ
5. Update `src/components/sections/pricing/pricing-roi.tsx` — RE numbers
6. Update `src/lib/nav-data.ts` — reorder links for RE focus
7. Update `src/components/layout/footer.tsx` — reorder links
8. Add noindex to non-RE blog posts (frontmatter)
9. Add noindex to non-RE best-for slugs (update arrays in sitemap.ts, indexnow.ts, best-for/[slug]/page.tsx)
10. Add noindex to non-RE compare pages

### Phase 2 — New Solution & Best-For Pages
11. Create `/solutions/real-estate` hub page
12. Create `/solutions/facebook-ad-leads` page
13. Create new best-for pages (brokerages, Facebook ads, CRM-specific)
14. Create new alternative pages (Fello, Roof AI, etc.)

### Phase 3 — Blog Content
15. Write high-priority blog posts (items 1-7 from 2.4)
16. Write mid-priority blog posts (items 8-15)
17. Write top-of-funnel posts (items 16-20)

### Phase 4 — Lead Magnets & Tools
18. Create RE-specific lead magnet page + content
19. Create Real Estate ROI Calculator
20. Update existing team-commission-calculator if needed

---

## Verification Criteria
- `npm run typecheck` passes
- `npm run lint` passes
- `npm run build` passes
- All noindexed pages have correct robots meta
- Sitemap excludes noindexed pages
- All new pages have proper metadata, canonical URLs, OG tags
- Structured data validates (test with Google Rich Results)
- Internal links from existing pages point to new RE pages
