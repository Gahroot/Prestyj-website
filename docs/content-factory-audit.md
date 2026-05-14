# Content Factory Audit — Vertical × Offer Coverage

> **Audit date:** 2026-05-09
> **Scope:** `src/lib/content-factory/`, `src/lib/{alternatives,best-for,compare,solutions}/`, `src/app/`, `content/blog/`
> **Inputs:** `docs/ai-citation-playbook.md`, `prestyj.com_AISearchQueriesReport_5_10_2026.csv`
> **Author:** Content factory audit pass

This report documents the existing programmatic content infrastructure, maps every (vertical × offer) cell to existing assets, and prioritizes the missing cells with a buy-vs-build recommendation per cell.

---

## 1. Factories Currently in `src/lib/content-factory/`

`index.ts` exports three factory functions and six constant modules. Each factory takes a typed input object and returns a `Content` object the page renderer consumes.

### 1.1 `createAlternativePage` — `factories/alternative-factory.ts`

Generates `/alternatives/[slug]` pages (`AlternativePageContent` from `src/lib/alternatives/types.ts`).

**Input shape (`AlternativeFactoryInput`):**

| Field | Type | Notes |
|---|---|---|
| `slug` | `string` | URL slug under `/alternatives/` |
| `type` | `AlternativeType` | Category enum (e.g., voice-agent, isa) |
| `competitor` | `{ name, shortName?, pricing?, website?, description? }` | The thing we're an alternative to |
| `meta` | `{ title, description, keywords[] }` | SEO |
| `hero` | `{ badge, subheadline }` | Headline is `{competitor.name}` with accent `"vs Prestyj"` below it (avoids a/an and plural-agreement issues) |
| `industryStats` | `"standard" \| "reactivation" \| StatItem[]` | Picks `STANDARD_INDUSTRY_STATS` / `REACTIVATION_STATS` or custom |
| `comparison.features` | `FeatureRow[]` | Built via `buildAlternativeFeature(STANDARD_FEATURES.X, ...)` |
| `comparison.competitorPricing` | `PricingInfo` | Per-competitor, hand-supplied |
| `comparison.prestyjPricingOverrides` | `Partial<PricingInfo>` | Overrides on top of `PRESTYJ_STANDARD_PRICING` (cons forced empty) |
| `whySwitch` | `Array<{ icon: IconName, title, description }>` | Icons resolved via `ICON_MAP` |
| `whenCompetitorFits` / `whenPrestyjFits` | `string[]` | Honest trade-off lists |
| `relatedResources` | `Array<{ href, title, description }>` | Internal links |
| `cta` | `Partial<CTA>` | Spread over `CTA_TEMPLATES.STANDARD_DEMO` |

**Existing instances:** 46 competitor files in `src/lib/alternatives/` (ada, air-dot-ai, alanna-ai, answer-connect, arcads, betterbot, bland-ai, bland-ai-alt, boomtown, cinc, cloudtalk, conversica, creatify, decagon-ai, dialpad, drift, eliseai, follow-up-boss, goodcall, homebot, human-isa, internal-isa, isa-service, kvcore, leadtruffle, lindy, lofty, my-ai-front-desk, poly-ai, real-geeks, resimpli, retell, retell-ai, ringcentral, ruby-receptionist, sierra-ai, sierra-interactive, smart-alto, smith-ai, social-media-agencies, structurely, synthflow, vapi, voiceflow, ylopo).

### 1.2 `createBestForPage` — `factories/best-for-factory.ts`

Generates `/best-for/[slug]` pages (`BestForPageContent` from `src/lib/best-for/types.ts`).

**Input shape (`BestForFactoryInput`):**

| Field | Type | Notes |
|---|---|---|
| `slug` | `string` | URL slug under `/best-for/` |
| `niche` | `{ name, shortName?, description }` | Vertical or persona |
| `meta` | `{ title, description, keywords[] }` | SEO |
| `hero` | `{ badge, headlineAccent, subheadline, pattern? }` | Pattern: `AI_AGENTS_BUILT_FOR` (default), `BEST_AI_FOR`, `BEST_LEAD_RESPONSE_FOR` |
| `whyBestFor` | `Array<{ icon: IconName, title, description }>` | 3–6 cards |
| `painPoints` | `BestForPageContent["painPoints"]` | Hand-supplied |
| `comparison` | `{ headers?, rows, includeCommonRows? }` | Optional; can prepend `COMMON_COMPARISON_ROWS` (response time + availability) |
| `faq` | `BestForPageContent["faq"]` | Hand-supplied |
| `cta` | `Partial<CTA>` | Spread over `STANDARD_DEMO` |

**Existing instances:** ~150 niche files in `src/lib/best-for/` covering verticals, persona pages (ISAs, recruiters), CRM-user pages (`*-users.ts`), per-state real-estate video-ad pages (16 states), and per-city realtor video-ad pages (~50 cities).

### 1.3 `createComparePage` — `factories/compare-factory.ts`

Generates `/compare/[slug]` head-to-head pages (`ComparePageData` from `src/lib/compare/types.ts`).

**Input shape (`CompareFactoryInput`):**

| Field | Type | Notes |
|---|---|---|
| `slug` | `string` | URL slug under `/compare/` |
| `competitorName` | `string` | Display name |
| `hero` | `{ badge, title, titleAccent, subtitle, description?, keyStats? }` | More verbose than alternative hero |
| `stats` | `StatItem[] \| "standard"` | Maps `STANDARD_INDUSTRY_STATS` to `{ value, label }` |
| `pricing.prestyj` / `pricing.competitor` | `Omit<..., "name">` | Name auto-injected |
| `features` | `FeatureComparison[]` | Built via `buildCompareFeature(...)` |
| `whySwitch` | `{ title, description, reasons[] }` | Reasons get icon resolved via `getIcon(IconName)` |
| `relatedResources` / `cta` / `specialSections` | optional |

**Existing instances:** 41 head-to-head files in `src/lib/compare/data/` (adcreative-ai, ai-agency, ai-avatar-ads, alanna-ai, answering-service, arcads, big4-consulting, billo, buffer, canva, capcut, conversica, creatify, diy-ai, drift, fiverr-social-media, fiverr-video-ads, follow-up-boss, freelancer, full-time-employee, heygen, hootsuite, internal-isa-team, invideo, isa, junior-social-hire, later, lofty, offshore-isa, opus-clip, pencil, production-agencies, resimpli, social-media-agency, sprout-social, structurely, synthesia, ugc-creators, ylopo, ai-implementation-partner, ai-lead-generation-vs-traditional).

### 1.4 Constants Module Inventory

| Module | Exports | Purpose |
|---|---|---|
| `industry-stats.ts` | `INDUSTRY_STATS`, `STANDARD_INDUSTRY_STATS`, `REACTIVATION_STATS` | Reusable stat triples (78% buyer-first, 80% leads cold, $4k ISA, 23% reactivation, 47s response) |
| `cta-snippets.ts` | `CTA_SNIPPETS`, `CTA_TEMPLATES` | `STANDARD_DEMO` and `TEAM_DEMO` templates spread by every factory |
| `hero-patterns.ts` | `HERO_PATTERNS`, `buildHeroWithPattern` | 4 patterns: AI Agents Built for / The Best AI for / The Best Lead Response for / Competitor vs Prestyj (alternative factory overrides headline) |
| `feature-rows.ts` | `STANDARD_FEATURES`, `buildAlternativeFeature`, `buildCompareFeature` | 7 baseline feature rows (AI text, AI voice, 24/7, CRM, booking, qualification, calendar) |
| `pricing-features.ts` | `PRESTYJ_PRICING_FEATURES`, `PRESTYJ_STANDARD_PRICING` | `Starting at $1,997/mo`, `cons: []` enforced |
| `icons.ts` | `ICON_MAP`, `getIcon`, `getIconSafe`, `IconName` | Allow-listed lucide icons (33 names) |

**Note:** No factory exists for `/solutions/[slug]` — those pages are hand-rolled in `src/lib/solutions/` (~95 files). They could be a fourth factory candidate.

---

## 2. Coverage Matrix — Vertical × Offer

### Legend

| Symbol | Meaning |
|---|---|
| ✅ | Citation-magnet asset exists (blog MDX or dedicated page that follows `docs/ai-citation-playbook.md` — early table, dollar ranges, FAQ block, named competitors) |
| 🟡 | Partial coverage — a `/best-for`, `/solutions`, or generic blog mentions it but no per-vertical citation-magnet asset exists |
| ❌ | No asset for this cell |

### Cross-reference key

- **Blog**: `content/blog/<file>.mdx`
- **BF**: `src/lib/best-for/<file>.ts` → `/best-for/<slug>`
- **Sol**: `src/lib/solutions/<file>.ts` → `/solutions/<slug>`
- **Alt**: `src/lib/alternatives/<file>.ts` → `/alternatives/<slug>`
- **App**: explicit `src/app/.../page.tsx` route

### 2.1 The Matrix (18 verticals × 8 offers = 144 cells)

| Vertical | Voice Agent | Lead Response | AI Receptionist | DFY Social Media | Batch Video Ads | Ad Creative Testing | Custom AI Agent | Database/Lead Reactivation |
|---|---|---|---|---|---|---|---|---|
| **Roofing** | 🟡 BF `roofing` | ✅ Blog `ai-lead-response-for-roofing` | 🟡 Blog `ai-storm-response-roofing-2026` | 🟡 Sol `roofing` | ✅ Blog `batch-video-ads-for-roofers` + BF `video-ads-for-roofers` | 🟡 Generic `video-ad-creative-testing-guide-2026` | 🟡 Sol `custom-ai-agent-implementation` (generic) | 🟡 Blog `lead-reactivation-for-home-services` |
| **HVAC** | ✅ Blog `ai-voice-agent-pricing-for-hvac` | ✅ Blog `ai-lead-response-for-hvac` | ✅ Blog `ai-receptionist-for-hvac-companies-2026` + BF `ai-voice-receptionist-hvac` | 🟡 BF `hvac` (generic) | ✅ Blog `batch-video-ads-for-hvac-companies` + BF `video-ads-for-hvac-owners` | 🟡 Generic only | 🟡 Sol generic | 🟡 Blog `lead-reactivation-for-home-services` |
| **Plumbing** | ✅ Blog `ai-voice-agent-pricing-for-plumbing` | 🟡 Blog `ai-phone-answering-service-for-contractors` | ✅ Blog `ai-receptionist-for-plumbers-2026` + BF `ai-voice-receptionist-plumbing` + Sol `ai-answering-service-plumbing` | 🟡 BF `plumbing` (generic) | 🟡 BF `video-ads-for-plumbing-owners` (no blog) | ❌ | 🟡 Sol generic | 🟡 Blog `lead-reactivation-for-home-services` + Blog `missed-call-text-back-plumbers-2026` |
| **Real Estate** | ✅ Blog `ai-voice-agent-pricing-for-real-estate` | ✅ Blog `ai-lead-response-for-real-estate-complete-guide` + Blog `best-ai-lead-response-real-estate-teams-2026` | 🟡 Sol `ai-receptionist-real-estate` | 🟡 BF `social-content-for-real-estate-teams` | ✅ Blog `batch-video-ads-for-real-estate-teams-2026` + BF `video-ads-for-realtors` (+50 city pages) | ✅ Blog `creative-testing-framework-real-estate-2026` + Blog `real-estate-facebook-ad-hook-audit-2026` | 🟡 Sol generic | ✅ Blog `lead-reactivation-for-real-estate` + Blog `real-estate-database-reactivation-ai` |
| **Mortgage** | ✅ Blog `ai-voice-agent-pricing-for-mortgage` | ✅ Blog `ai-lead-response-for-mortgage` | ❌ | 🟡 BF `social-content-for-mortgage-brokers` | ✅ Blog `batch-video-ads-for-mortgage-brokers` + BF `mortgage-broker-video-ads` | ✅ Blog `mortgage-broker-video-ad-creative-testing-2026` | 🟡 Sol generic | ❌ |
| **Solar** | ❌ | ✅ Blog `ai-lead-response-for-solar` | ❌ | ❌ | 🟡 BF `video-ads-for-solar-companies` (no blog) | ❌ | ❌ | ❌ |
| **Insurance** | ✅ Blog `ai-voice-agent-pricing-for-insurance` | ✅ Blog `ai-lead-response-for-insurance` | 🟡 BF `ai-voice-receptionist-insurance` | 🟡 BF `social-content-for-insurance-agents` | 🟡 BF `video-ads-for-insurance-agents` (no blog) | ❌ | 🟡 Sol generic | ❌ |
| **Dental** | ✅ Blog `ai-voice-agent-pricing-for-dental` | ✅ Blog `ai-lead-response-for-dental` | 🟡 BF `ai-voice-receptionist-dental` + Blog `hipaa-compliant-ai-receptionist` (cross-vertical) | 🟡 BF `social-content-for-dentists` | 🟡 BF `video-ads-for-dental-practices` (no blog) | ❌ | ❌ | ❌ |
| **Med Spa** | ❌ | ❌ | 🟡 BF `ai-voice-receptionist-plastic-surgery` (adjacent) | 🟡 BF `social-content-for-med-spas` | 🟡 BF `video-ads-for-med-spas` (no blog) | ❌ | ❌ | ❌ |
| **Law** | ✅ Blog `ai-voice-agent-pricing-for-law-firms` | ❌ | 🟡 BF `ai-voice-receptionist-legal` | 🟡 BF `social-content-for-law-firms` | 🟡 BF `video-ads-for-law-firm-owners` (no blog) | ❌ | ❌ | ❌ |
| **Property Management** | ✅ Blog `ai-voice-agent-pricing-for-property-management` | ❌ | ❌ | ❌ | 🟡 Blog `property-management-owner-acquisition-video-ads-2026` + BF `property-manager-video-ads` | ❌ | ❌ | ❌ |
| **Auto Dealers** | ❌ | ❌ | ❌ | ❌ | 🟡 BF `video-ads-for-auto-dealerships` (no blog) | ❌ | ❌ | ❌ |
| **Home Inspection** | ❌ | ❌ | 🟡 Blog `ai-consultant-home-inspectors-2026` (consultant-framed, low-cite) | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Pest Control** | ❌ | ❌ | 🟡 BF `pest-control` (generic best-for, no pricing data) | ❌ | 🟡 BF `video-ads-for-pest-control` (no blog) | ❌ | ❌ | ❌ |
| **Garage Door** | ❌ | ❌ | 🟡 BF `garage-door` (generic) | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Pool Service** | ❌ | ❌ | 🟡 Blog `ai-consultant-pool-service-2026` (consultant-framed, low-cite) | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Property Restoration** | ❌ | ❌ | 🟡 Blog `ai-consultant-property-restoration-2026` (consultant-framed, low-cite) | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Electricians** | ❌ | ❌ | 🟡 BF `electricians` (generic) | ❌ | 🟡 BF `video-ads-for-electricians` (no blog) | ❌ | ❌ | ❌ |

### 2.2 Roll-up

| Status | Count | Share |
|---|---:|---:|
| ✅ Citation-magnet asset exists | 22 | 15% |
| 🟡 Partial — best-for / solutions / consultant blog only | 56 | 39% |
| ❌ Missing entirely | 66 | 46% |
| **Total cells** | **144** | 100% |

**Pattern:** Citation-magnet coverage is concentrated on (Real Estate, HVAC, Mortgage, Plumbing, Insurance, Dental) × (Voice Agent, Lead Response, Batch Video Ads). Everything outside that triangle is either a generic best-for stub or missing.

---

## 3. Top 30 Missing Cells — Priority Ranking

**Scoring formula:** `priority = citation_potential × revenue_potential`

- **Citation potential** (1–5) is derived from `prestyj.com_AISearchQueriesReport_5_10_2026.csv` query patterns and the `docs/ai-citation-playbook.md` top-10 cited pages. Higher when the (vertical × offer) maps to an active AI search query (e.g., `hidden costs of AI voice agents` → 52 citations, `AI tools for roofing contractors lead response` → 8, `dormant lead reactivation software real estate teams` → 3, `best AI appointment scheduling tools real estate leads` → 12).
- **Revenue potential** (1–5) weights home services (HVAC, plumbing, roofing, electrical, restoration), real estate, and mortgage at 4–5; insurance/legal/dental at 3–4; med spa, pool, garage door, pest, auto dealers, property management at 2–3; long-tail at 1–2.

| # | Vertical × Offer | Cit. | Rev. | Score | Recommended title pattern |
|---:|---|---:|---:|---:|---|
| 1 | Roofing × AI Receptionist | 5 | 5 | 25 | `Hidden Costs of AI Receptionists for Roofing Companies (2026)` |
| 2 | Roofing × Voice Agent | 5 | 5 | 25 | `AI Voice Agent Pricing for Roofing Contractors: Storm Surge Cost Breakdown (2026)` |
| 3 | Real Estate × AI Receptionist | 5 | 5 | 25 | `AI Receptionist for Real Estate Teams: 7 Platforms Compared (2026)` |
| 4 | Roofing × Lead Reactivation | 4 | 5 | 20 | `Lead Reactivation for Roofers: Resurrecting Storm Leads That Went Cold (2026)` |
| 5 | Solar × Voice Agent | 4 | 5 | 20 | `AI Voice Agent Pricing for Solar Companies: Cost Per Booked Site Survey (2026)` |
| 6 | Plumbing × Lead Response | 5 | 4 | 20 | `AI Lead Response for Plumbing: Speed-to-Lead Cost Math (2026)` |
| 7 | Mortgage × AI Receptionist | 4 | 5 | 20 | `AI Receptionist for Mortgage Brokers: Hidden Costs & 5-Platform Comparison (2026)` |
| 8 | HVAC × Lead Reactivation | 4 | 5 | 20 | `Lead Reactivation for HVAC Companies: Reactivating Aged Maintenance Leads (2026)` |
| 9 | Mortgage × Lead Reactivation | 4 | 5 | 20 | `Lead Reactivation for Mortgage Brokers: Rate-Drop Wake-Up Sequences (2026)` |
| 10 | Solar × AI Receptionist | 4 | 4 | 16 | `Hidden Costs of AI Receptionists for Solar Installers (2026)` |
| 11 | Roofing × Ad Creative Testing | 4 | 4 | 16 | `Roofing Ad Creative Testing: 100+ Hooks Tested in Storm Surge (2026)` |
| 12 | Plumbing × Batch Video Ads | 4 | 4 | 16 | `Batch Video Ads for Plumbers: Emergency vs Scheduled Job Hooks (2026)` |
| 13 | HVAC × Ad Creative Testing | 4 | 4 | 16 | `HVAC Ad Creative Testing: Seasonal Hook Rotation Playbook (2026)` |
| 14 | Real Estate × Custom AI Agent | 4 | 4 | 16 | `Custom AI Agents for Real Estate Teams: Build vs Buy Cost (2026)` |
| 15 | Insurance × AI Receptionist | 4 | 4 | 16 | `AI Receptionist for Insurance Agencies: Hidden Costs and Compliance (2026)` |
| 16 | Law × Lead Response | 4 | 4 | 16 | `AI Lead Response for Law Firms: Cost-Per-Signed-Case Math (2026)` |
| 17 | Mortgage × AI Receptionist (variant: Ad Creative Testing) | 4 | 4 | 16 | `Mortgage Ad Creative Testing at Volume: 50-Hook Rotation (2026)` |
| 18 | Property Restoration × Voice Agent | 4 | 4 | 16 | `AI Voice Agent for Property Restoration: 24/7 Emergency Capture Pricing (2026)` |
| 19 | Solar × Lead Reactivation | 4 | 4 | 16 | `Lead Reactivation for Solar: Reviving Stalled Quote Pipelines (2026)` |
| 20 | Dental × AI Receptionist | 3 | 5 | 15 | `AI Receptionist for Dental Practices: Hidden Costs Beyond Per-Minute (2026)` |
| 21 | Med Spa × Voice Agent | 3 | 5 | 15 | `AI Voice Agent Pricing for Med Spas: Booking Conversion Math (2026)` |
| 22 | Insurance × Lead Reactivation | 3 | 5 | 15 | `Lead Reactivation for Insurance Agencies: Renewal-Cycle Wake-Ups (2026)` |
| 23 | Real Estate × DFY Social Media | 3 | 5 | 15 | `Done-for-You Social Media for Real Estate Teams: Real Cost & Output (2026)` |
| 24 | Electricians × Voice Agent | 3 | 4 | 12 | `AI Voice Agent Pricing for Electricians: Service Call Capture Math (2026)` |
| 25 | Pest Control × Voice Agent | 3 | 4 | 12 | `AI Voice Agent Pricing for Pest Control: Recurring Service Capture (2026)` |
| 26 | Garage Door × Voice Agent | 3 | 4 | 12 | `AI Voice Agent Pricing for Garage Door Companies: Emergency Capture (2026)` |
| 27 | Auto Dealers × Lead Response | 3 | 4 | 12 | `AI Lead Response for Auto Dealers: BDC Cost Replacement Math (2026)` |
| 28 | Pool Service × Voice Agent | 3 | 3 | 9 | `AI Voice Agent Pricing for Pool Service Companies (2026)` |
| 29 | Home Inspection × Voice Agent | 3 | 3 | 9 | `AI Voice Agent Pricing for Home Inspectors: Booking Conversion (2026)` |
| 30 | Property Management × AI Receptionist | 3 | 3 | 9 | `AI Receptionist for Property Management: Tenant Call Triage (2026)` |

**Why this ranking matches the citation data:**
- The single highest-cited query in our data is `hidden costs of AI voice agents` (52 citations). Every cell at the top of this list maps to a `Hidden Costs of [Offer] for [Vertical]` title.
- `AI tools for roofing contractors lead response` (8 citations) directly justifies #1 (Roofing × Receptionist) and #4 (Roofing × Lead Reactivation) being above generic mortgage/insurance.
- `dormant lead reactivation software real estate teams` (3 citations) confirms reactivation queries are real but lower-volume — they cluster around 4–9 in the priority list rather than the top.
- `best AI appointment scheduling tools real estate leads` (12 citations) supports #3 (Real Estate × Receptionist) and #14 (Real Estate × Custom Agent).

---

## 4. Hand-Craft vs Programmatic Recommendation

### Decision rule

- **Hand-craft** if the cell maps to (a) one of the top-10 cited queries in the report, (b) a `Hidden costs / vs / Pricing` title pattern from `docs/ai-citation-playbook.md`, or (c) a vertical with sufficient unique numerical data (avg ticket, seasonal volatility, regulatory constraints) to fill a 4–6k word post with real benchmarks.
- **Programmatic via factory** if the cell is long-tail filler — the offer-side data is identical across verticals, the vertical-side data is shallow, and the goal is funnel/SEO surface area rather than citations.

| # | Cell | Format | Why |
|---:|---|---|---|
| 1 | Roofing × Receptionist | **Hand-craft blog** | Maps to `AI tools for roofing contractors lead response` (8 cit) + storm-surge call volume math is unique to roofing |
| 2 | Roofing × Voice Agent | **Hand-craft blog** | Same as #1; HVAC version drives citations and roofing has equivalent vertical data |
| 3 | Real Estate × Receptionist | **Hand-craft blog** | Maps to `best AI appointment scheduling tools real estate leads` (12 cit) — top-3 query |
| 4 | Roofing × Lead Reactivation | **Hand-craft blog** | Storm-aged-lead resurrection is a defensible angle with unique reactivation math |
| 5 | Solar × Voice Agent | **Hand-craft blog** | Hidden-cost framing applies; site-survey conversion math is solar-specific |
| 6 | Plumbing × Lead Response | **Hand-craft blog** | Plumbing pricing/voice posts are top-cited; this rounds out the vertical trifecta |
| 7 | Mortgage × Receptionist | **Hand-craft blog** | Rate-volatility creates buyer-protection framing; high vertical revenue |
| 8 | HVAC × Lead Reactivation | **Hand-craft blog** | Maintenance-contract reactivation is a unique HVAC angle |
| 9 | Mortgage × Lead Reactivation | **Hand-craft blog** | Rate-drop wake-up sequences are mortgage-unique |
| 10 | Solar × Receptionist | **Hand-craft blog** | Hidden-costs framing on a high-revenue vertical |
| 11 | Roofing × Ad Creative Testing | **Hand-craft blog** | Storm-surge hook rotation is a unique angle; pairs with existing batch-video roofing post |
| 12 | Plumbing × Batch Video Ads | **Hand-craft blog** | Fills the only missing vertical in the batch-video citation cluster |
| 13 | HVAC × Ad Creative Testing | **Hand-craft blog** | Seasonal hook rotation has unique vertical numbers |
| 14 | Real Estate × Custom AI Agent | **Hand-craft blog** | Build-vs-buy framing; audience already converts on real-estate posts |
| 15 | Insurance × Receptionist | **Hand-craft blog** | Compliance angle (E&O, agent licensing) is non-generic |
| 16 | Law × Lead Response | **Hand-craft blog** | Cost-per-signed-case framing; existing law voice post creates a series |
| 17 | Mortgage × Ad Creative Testing | **Hand-craft blog** (extend existing) | Already have one mortgage creative-testing post; expand to a `50-hook rotation` companion |
| 18 | Property Restoration × Voice Agent | **Hand-craft blog** | 24/7 emergency capture math is restoration-specific; replaces low-cite consultant post |
| 19 | Solar × Lead Reactivation | **Programmatic best-for** + later blog | Stalled-quote angle is real but reactivation post should be Solar variant of the existing reactivation series — start with `/best-for/solar-lead-reactivation` |
| 20 | Dental × Receptionist | **Hand-craft blog** | Dental Voice + Lead Response posts already cite well; receptionist completes the trio |
| 21 | Med Spa × Voice Agent | **Hand-craft blog** | Booking conversion math is med-spa specific (avg ticket, no-show rate) |
| 22 | Insurance × Lead Reactivation | **Programmatic best-for** | Renewal cycle is real but content overlaps heavily with generic reactivation guide; ship as `/best-for/insurance-lead-reactivation` first |
| 23 | Real Estate × DFY Social Media | **Hand-craft blog** | Cost/output transparency is a strong skeptic angle and ties to existing social posts |
| 24 | Electricians × Voice Agent | **Programmatic best-for** | Use existing `electricians.ts` shape; promote later if traffic justifies a blog |
| 25 | Pest Control × Voice Agent | **Programmatic best-for** | Generic recurring-service angle; long-tail filler |
| 26 | Garage Door × Voice Agent | **Programmatic best-for** | Long-tail filler; reuse `garage-door.ts` |
| 27 | Auto Dealers × Lead Response | **Hand-craft blog** | BDC-replacement angle has dealership-specific numbers worth surfacing |
| 28 | Pool Service × Voice Agent | **Programmatic best-for** | Long-tail; reuse `ai-consultant-pool-service-2026` data, ship as `/best-for/pool-service` voice page |
| 29 | Home Inspection × Voice Agent | **Programmatic best-for** | Long-tail; consultant blog already exists for SEO base |
| 30 | Property Management × Receptionist | **Hand-craft blog** | Tenant-triage flow is non-generic and complements existing PM voice post |

### Summary by recommendation

| Recommendation | Count | Notes |
|---|---:|---|
| **Hand-craft blog (citation-magnet format)** | 22 | All Tier-1 & Tier-2 home-services / real-estate / mortgage / insurance / law / dental cells |
| **Programmatic best-for / solutions page first** | 8 | Long-tail verticals where best-for SEO surface is sufficient until traffic data justifies a blog upgrade |

---

## 5. Recommendations for the Content Factory Itself

These are out of scope for the matrix above but came up while auditing.

1. **Add a `solutions-factory.ts`** alongside the three existing factories. ~95 hand-rolled solutions files duplicate the structural shape and would benefit from the same `STANDARD_FEATURES` / `CTA_TEMPLATES` reuse pattern.
2. **Add `INDUSTRY_PRICING_BENCHMARKS` to constants.** Every hand-crafted blog from Section 4 needs the same per-vertical benchmarks (avg ticket, no-show rate, seasonal multipliers, missed-call %). A typed constants module would keep numbers consistent across posts and be reusable in best-for / compare pages.
3. **Add a `HIDDEN_COSTS` snippet bank** keyed by offer (voice-agent, receptionist, lead-response). The top-cited query pattern (`hidden costs of X`) recurs across every offer; centralizing the 5–7 canonical hidden costs per offer would make hand-crafted posts faster to ship and keep claims consistent.
4. **Promote the `BEST_LEAD_RESPONSE_FOR` hero pattern.** It is defined but unused; it directly matches the `ROI instant AI lead response service companies` query (18 citations) and should anchor every new lead-response best-for page.
