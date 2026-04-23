# Batch Video Ads: Week-Long SEO & Site Infrastructure Build

**Goal**: Drive organic traffic to `/batch-video-ads` by building real pages, systems, and technical infrastructure in the codebase — code I write, test, and ship.

**Philosophy**: Everything below is code. Every page has real content (not placeholder). Every component is reusable. Every change is verified with typecheck + lint + build.

---

## What Already Exists (Don't Rebuild)

- `/batch-video-ads` — main landing page (excellent, with pricing, testimonials, FAQ, checkout)
- `/bulk-video-ad-pricing` — pricing page
- 5 informational pages: `/ad-fatigue-solution`, `/how-many-ad-creatives-to-test`, `/how-often-refresh-ad-creative`, `/why-facebook-ads-stop-working`, `/ai-ads-vs-human-ads`
- 6 batch-video-ads solution pages via `/solutions/[slug]`: real-estate, meta, tiktok, youtube-shorts, lead-generation, personal-brand
- 7 video-ad compare pages: vs Arcads, Creatify, HeyGen, Billo, Fiverr, UGC Creators, Production Agencies, AI Avatar Ads
- ~8 blog posts about creative testing, ad fatigue, hooks
- Free-ads pages for 4 industries
- Get-ads pages (variant of free-ads)
- Full content factory system for compare/best-for/alternatives
- IndexNow API for instant indexing
- Product + FAQ + Breadcrumb JSON-LD infrastructure

---

## What I'm Building (All Code, All Tested)

### A. Topical Pillar Page (`/video-ad-creative-testing`)
The #1 missing piece. Google needs a single comprehensive page targeting "video ad creative testing" as a head term, linking outward to every sub-topic page. This is the hub of the hub-and-spoke structure.

**File**: `src/app/video-ad-creative-testing/page.tsx`

Server component with rich content sections:
- What is video ad creative testing (comprehensive explanation with real data)
- The math: hooks × pain points × CTAs = total variations (with worked examples)
- Meta's Andromeda algorithm and why volume matters in 2026
- How many ads you actually need (links to calculator)
- Batch testing vs traditional production (links to compare pages)
- Ad fatigue explained (links to fatigue page)
- Industry-specific creative testing (links to solution pages)
- FAQ section (8 questions with JSON-LD)
- Related resources grid (links to 8+ sub-pages)
- CTA to `/batch-video-ads#pricing`
- BreadcrumbJsonLd, FAQJsonLd, Service schema

**Impact**: Creates 15+ internal links, establishes topical authority on the head keyword, gives Google a clear content hierarchy.

---

### B. Geo Landing Page System (Michigan-First, 15 Pages)
A reusable component + data system for location-specific landing pages. Each page has genuinely unique local content.

**New data file**: `src/lib/geo-batch-data.ts`
- Type: `GeoBatchPageData` (city, state, slug, population, metro area, localMarketDescription, keyIndustries, nearbyCities, faq)
- Function: `getGeoBatchPage(slug)` / `getAllGeoSlugs()`
- 15 entries with real, unique data per city

**New component**: `src/components/sections/geo/geo-batch-page-content.tsx`
- Client component rendering any geo page from data
- Sections: city hero, local market insight (unique), how it works (shared), pricing (from batch-tiers), FAQ (unique), CTA
- Uses existing UI components (BorderGlow, AnimateOnScroll, CountUp, Button)
- FAQJsonLd, BreadcrumbJsonLd, LocalBusiness + Product schema per page

**Pages created** (15 total, each a thin route file pulling from the data layer):

Michigan state + major cities:
- `src/app/batch-video-ads/michigan/page.tsx`
- `src/app/batch-video-ads/detroit-mi/page.tsx`
- `src/app/batch-video-ads/grand-rapids-mi/page.tsx`
- `src/app/batch-video-ads/ann-arbor-mi/page.tsx`
- `src/app/batch-video-ads/lansing-mi/page.tsx`

Metro Detroit cities:
- `src/app/batch-video-ads/royal-oak-mi/page.tsx`
- `src/app/batch-video-ads/troy-mi/page.tsx`
- `src/app/batch-video-ads/southfield-mi/page.tsx`
- `src/app/batch-video-ads/sterling-heights-mi/page.tsx`
- `src/app/batch-video-ads/novi-mi/page.tsx`
- `src/app/batch-video-ads/farmington-hills-mi/page.tsx`
- `src/app/batch-video-ads/rochester-hills-mi/page.tsx`
- `src/app/batch-video-ads/dearborn-mi/page.tsx`
- `src/app/batch-video-ads/warren-mi/page.tsx`
- `src/app/batch-video-ads/ferndale-mi/page.tsx`

Each page gets unique: meta title/description, local market paragraph (real info about the city's business landscape), population stat, key industries, nearby cities, FAQ answers referencing the local market.

**Why Michigan first**: Founded in Michigan = strongest credibility signal for local pages. "Michigan-founded company" on every page.

---

### C. Industry Solution Pages (6 New, via Existing Dynamic Route)
The existing `/solutions/[slug]` dynamic route already works — I just need new data files and to register them. No new route files needed.

**New data files in `src/lib/solutions/`:**

1. `batch-video-ads-for-roofing.ts` — Pain points: storm damage urgency, seasonal windows, insurance claims, trust/credibility, price shoppers vs quality
2. `batch-video-ads-for-hvac.ts` — Pain points: emergency breakdowns, seasonal rush, maintenance plans, indoor air quality, equipment age
3. `batch-video-ads-for-plumbing.ts` — Pain points: emergency calls, drain/sewer, water heater, remodeling projects, preventative maintenance
4. `batch-video-ads-for-dental.ts` — Pain points: new patient acquisition, cosmetic procedures, insurance confusion, anxiety/fear, emergency dental
5. `batch-video-ads-for-insurance.ts` — Pain points: rate increases, coverage gaps, life events, bundling, claims experience
6. `batch-video-ads-for-mortgage.ts` — Pain points: first-time buyers, self-employed, rate shopping, down payment myths, pre-approval anxiety

Each data file: unique meta, hero, 4-5 pain points, benefits, objections, 4-5 FAQ, CTA → `/batch-video-ads#pricing`.

**Update**: `src/lib/solutions/index.ts` — register all 6 new entries.

These auto-render via the existing `src/app/solutions/[slug]/page.tsx` — zero new page files.

---

### D. New Compare Pages (3 Competitors)
Targeting specific batch/bulk video ad tools that people are searching for.

**New data files in `src/lib/compare/data/`:**
1. `admaker.ts` — vs AdMaker.ai (AI batch video ad creator)
2. `fliki.ts` — vs Fliki (AI bulk video creator)
3. `clicks-video.ts` — vs Clicks.video (batch ad creator)

**New page files:**
- `src/app/compare/prestyj-vs-admaker/page.tsx`
- `src/app/compare/prestyj-vs-fliki/page.tsx`
- `src/app/compare/prestyj-vs-clicks-video/page.tsx`

Each uses the existing ComparePageWrapper — 3 lines of code per page file.

---

### E. Hub/Directory Pages
Two new index pages that organize the geo and industry pages for both users and crawlers.

1. `src/app/batch-video-ads/industries/page.tsx` — Grid of industry cards linking to all batch-video-ads solution pages
2. `src/app/batch-video-ads/locations/page.tsx` — Grid of location cards linking to all geo pages, organized by state

These create clear site structure and help Google understand the content hierarchy.

---

### F. Ad Creative Fatigue Calculator (New Free Tool)
Free interactive tool at `/ad-creative-fatigue-calculator`. Enter ad spend, audience size, number of creatives → get days until frequency 3.0, how many new ads/week needed, and batch vs traditional cost comparison.

**Files**:
- `src/app/ad-creative-fatigue-calculator/page.tsx` — metadata + layout
- `src/app/ad-creative-fatigue-calculator/client.tsx` — interactive calculator

**Why**: Calculators are the #1 most-linked-to content type on the web. This naturally earns backlinks. It also CTA's to `/batch-video-ads`.

---

### G. Blog Category System
The blog has no categories. I'll add filtering so `/blog?category=video-ads` shows only video ad posts.

**Changes**:
- `source.config.ts` — add `category` to blogSchema
- `src/app/blog/page.tsx` — add category filter tabs (All, Video Ads, AI Sales, Speed to Lead, etc.)
- Existing posts: add `category` frontmatter where relevant

**Why**: Clean filtered URLs that can be linked from the pillar page. Improves topical clustering signals.

---

### H. Internal Link Infrastructure

**H1. "Learn More About Creative Testing" section on `/batch-video-ads`**
Add between FAQ and Final CTA in `batch-video-ads-client.tsx`:
- Grid of 6 cards: pillar page, calculator, fatigue solution, refresh cadence, ai-ads-vs-human-ads, samples

**H2. Footer update** (`src/components/layout/footer.tsx`)
Add "Video Ads" section linking to: pillar page, batch-video-ads, calculators, bulk pricing

**H3. Navbar update** (`src/lib/nav-data.ts`)
Add key creative-testing pages to the Solutions dropdown

**H4. Cross-link existing blog posts**
Scan MDX files mentioning creative testing/video ads — ensure they link to `/batch-video-ads` and the new pillar page where missing.

---

### I. Technical SEO

**I1. Sitemap expansion** (`src/app/sitemap.ts`)
- Add pillar page, geo pages (from data layer), hub pages, calculator
- Geo pages get priority 0.75

**I2. IndexNow expansion** (`src/lib/indexnow.ts`)
- Add all new URLs to `getAllUrls()`

**I3. BreadcrumbJsonLd on `/batch-video-ads`** (currently missing)
- Home > Batch Video Ads

**I4. Canonical URLs audit**
- Check all informational pages for proper canonical and alternates
- Add missing ones

---

### J. Cross-link existing blog posts to pillar + batch-video-ads
Scan all MDX files for mentions of "creative testing", "video ads", "batch" and ensure they contain links to:
- `/video-ad-creative-testing` (pillar)
- `/batch-video-ads` (product page)

Many already link to `/batch-video-ads`, but the pillar page is new and needs to be referenced.

---

## Anti-Spam Safeguards

Every geo page has:
- Genuinely unique local market description (not "[City] is a great place for business")
- Real population data from census
- Real industry information for that city
- Unique FAQ answers
- Proper canonical URL
- Breadcrumb navigation showing Home > Batch Video Ads > City

Every industry page has:
- Genuinely unique pain points specific to that industry (not copy-paste with find-replace)
- Unique FAQ answers
- No keyword stuffing

No page is a doorway — each exists because someone might genuinely search "video ads for roofers in Detroit" or "batch video ads for HVAC companies."

---

## Steps

1. Create the creative testing pillar page at `/video-ad-creative-testing` — comprehensive guide with 8 content sections, FAQ with JSON-LD, 15+ internal links to existing pages, BreadcrumbJsonLd, and CTA to batch-video-ads
2. Add BreadcrumbJsonLd to `/batch-video-ads/page.tsx` (Home > Batch Video Ads)
3. Add "Learn More About Creative Testing" resource section to `/batch-video-ads/batch-video-ads-client.tsx` with 6 cards linking to pillar, calculators, and informational pages
4. Create `src/lib/geo-batch-data.ts` — types and unique data for Michigan state + 15 cities with population, metro area, key industries, unique local market descriptions, and city-specific FAQ
5. Create `src/components/sections/geo/geo-batch-page-content.tsx` — reusable client component that renders any geo landing page from data, with hero, local insight, how-it-works, pricing (from batch-tiers), FAQ, CTA, and structured data
6. Create Michigan state-level page at `src/app/batch-video-ads/michigan/page.tsx`
7. Create Detroit, Grand Rapids, Ann Arbor, and Lansing geo pages at `src/app/batch-video-ads/[city]-mi/page.tsx`
8. Create 10 Metro Detroit city geo pages (Royal Oak, Troy, Southfield, Sterling Heights, Novi, Farmington Hills, Rochester Hills, Dearborn, Warren, Ferndale)
9. Create industry solution data file `src/lib/solutions/batch-video-ads-for-roofing.ts` with unique pain points, benefits, objections, and FAQ
10. Create industry solution data file `src/lib/solutions/batch-video-ads-for-hvac.ts`
11. Create industry solution data file `src/lib/solutions/batch-video-ads-for-plumbing.ts`
12. Create industry solution data file `src/lib/solutions/batch-video-ads-for-dental.ts`
13. Create industry solution data file `src/lib/solutions/batch-video-ads-for-insurance.ts`
14. Create industry solution data file `src/lib/solutions/batch-video-ads-for-mortgage.ts`
15. Register all 6 new solutions in `src/lib/solutions/index.ts`
16. Create industries hub page at `src/app/batch-video-ads/industries/page.tsx` — grid of industry cards with descriptions
17. Create locations hub page at `src/app/batch-video-ads/locations/page.tsx` — grid of location cards organized by state
18. Create compare data file `src/lib/compare/data/admaker.ts` for Prestyj vs AdMaker.ai
19. Create compare data file `src/lib/compare/data/fliki.ts` for Prestyj vs Fliki
20. Create compare data file `src/lib/compare/data/clicks-video.ts` for Prestyj vs Clicks.video
21. Create 3 compare page route files (admaker, fliki, clicks-video) — each 3 lines using ComparePageWrapper
22. Build ad creative fatigue calculator at `src/app/ad-creative-fatigue-calculator/` with page.tsx (metadata) and client.tsx (interactive calculator showing days-until-fatigue, ads/week needed, batch vs traditional cost)
23. Add `category` field to blog schema in `source.config.ts` and implement category filter tabs on the `/blog` page
24. Add `category` frontmatter to existing blog posts that relate to video ads or creative testing
25. Update `src/app/sitemap.ts` to include all new pages — geo pages from data layer, pillar, hub pages, calculator, new compare pages
26. Update `src/lib/indexnow.ts` getAllUrls() to include all new URLs
27. Update `src/components/layout/footer.tsx` to add a "Video Ads" section linking to pillar, batch-video-ads, calculators, and bulk pricing
28. Update `src/lib/nav-data.ts` solutionLinks dropdown to include the pillar page and fatigue calculator
29. Cross-link existing blog posts — scan all MDX files mentioning "creative testing" or "video ads" and add links to `/video-ad-creative-testing` and `/batch-video-ads` where missing
30. Audit all informational pages for missing canonical URLs and OpenGraph tags, add where needed
31. Run `npm run typecheck && npm run lint && npm run build` — fix all errors until clean
32. Final review of every new page and component for quality, consistency, and anti-spam compliance
