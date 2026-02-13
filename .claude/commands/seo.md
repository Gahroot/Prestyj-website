---
name: seo
description: Strategic SEO research - find high-leverage ranking opportunities using the hub & spoke strategy for AI service business automation
---

# Strategic SEO Research

This command finds the highest-leverage SEO opportunities aligned with Prestyj's hub & spoke strategy. It does targeted SERP research, scores opportunities, and presents an actionable creation plan. It does NOT create content — use `/rank-me` for execution.

**Core Principle**: Strategy-guided research. Don't wander — hunt specific opportunities.

---

## The Strategy (Hardcoded North Star)

Prestyj is pivoting from "Real Estate AI" to **"The AI Workforce for Service Businesses"** using a hub & spoke model.

### The Hub
Homepage positions Prestyj as AI employees for high-growth service businesses — covering Real Estate, Home Services, and High-Ticket Sales.

### The Spokes (Content Clusters)

**Cluster 1: Home Services (HIGHEST PRIORITY — "Low Hanging Fruit")**
High pain point (emergency calls missed = lost money), high-intent searchers with credit cards.
- AI receptionist for plumbers / HVAC / electricians / roofers / contractors
- After-hours appointment booking for contractors
- Automated dispatch systems
- Missed call text back automation by industry
- Storm damage lead qualification (roofing)

**Cluster 2: Real Estate (Existing Base — Defend & Expand)**
- AI Inside Sales Agent (ISA)
- Automated open house follow-up
- Reactivate cold real estate leads
- Real estate team scaling

**Cluster 3: High-Ticket Service Businesses**
- Insurance agencies, mortgage brokers, solar installers
- Auto dealerships, law firms, dental/medical practices
- Financial advisors, wealth management

**Cluster 4: Functional Automation (Tech Angle for Power Users)**
Target $1M+ profit business owners who want custom solutions.
- Custom sales automation workflows
- Automate inbound lead qualification
- Multi-agent sales outreach systems
- Connect AI agent to [CRM Name] (ServiceTitan, Jobber, Follow Up Boss, HubSpot, Salesforce)
- Headless AI sales rep

**Cluster 5: Authority Building (Long-Term Dream Keywords)**
Blog content to build topical authority over time.
- Business automation agency
- Sales AI implementation
- Fully autonomous sales team
- Book appointments while sleeping
- AI workforce replacement ROI

### Page Types to Create

1. **Solution Pages** (`/solutions/[slug]`) — Industry verticals (home-services, insurance, etc.)
2. **VS Pages** — "Prestyj vs Human Receptionist", "Prestyj vs Answering Service"
3. **Programmatic SEO Pages** — "AI Automation for ServiceTitan Users", "AI for Jobber Users"
4. **Blog Posts** — Thought leadership, keyword-targeted articles
5. **Best-For Pages** — Already have infrastructure, fill remaining gaps
6. **Alternative Pages** — New competitors entering the market

---

## Phase 1: Quick Inventory Check (1 Agent, Fast)

Launch 1 agent to build a quick reference list. This should take under 2 minutes — do NOT deep-read every file.

### Inventory Agent

Scan these locations and output a simple list of what exists:
- `src/lib/best-for/index.ts` — read the export list (don't read individual files)
- `src/lib/alternatives/index.ts` — read the export list
- `src/lib/solutions/` — list solution slugs
- `content/blog/` — list filenames only
- `src/app/compare/` — list comparison routes

**Output a compact reference:**
```
EXISTING CONTENT (for dedup only)
Solutions: [slug1, slug2, ...]
Best-For: [slug1, slug2, ...]
Alternatives: [slug1, slug2, ...]
Blog Posts: [slug1, slug2, ...]
Compare Pages: [slug1, slug2, ...]
Total indexed pages: ~[N]
```

This is ONLY for deduplication. Do not analyze, audit, or score existing content.

---

## Phase 2: Strategic SERP Research (5 Parallel Agents)

Each agent targets a specific cluster from the strategy. They do LIVE web searches to find ranking opportunities. Every agent gets the Phase 1 inventory to avoid recommending what already exists.

### Agent 1: Home Services Opportunities (HIGHEST PRIORITY)

Research these specific keyword patterns and find what's rankable:

**Search these terms (and variations):**
- "AI receptionist for [plumbers/HVAC/electricians/roofers/contractors/landscapers/painters]"
- "after hours answering service [industry]"
- "missed call text back [industry]"
- "automated dispatch [HVAC/plumbing/roofing]"
- "AI appointment booking [industry]"
- "[industry] call answering service alternative"
- "virtual receptionist for [industry]"

**For each search:**
- Who's ranking? (competitors, directories, nobody?)
- Is the SERP thin/weak? (opportunity indicator)
- What content type is winning? (blog, landing page, SaaS page)
- What's the apparent search intent? (buying, comparing, researching)
- Is there a gap Prestyj can fill?

**Cross-reference against Phase 1 inventory.** Skip anything already covered.

**Output format for each opportunity:**
```
KEYWORD: [exact search term]
SERP QUALITY: [Empty/Thin/Weak/Moderate/Strong]
WHO'S RANKING: [Top 2-3 results]
CONTENT TYPE WINNING: [Blog/Landing/Directory/SaaS]
INTENT: [Buy/Compare/Research]
OUR ANGLE: [How Prestyj is different from what's ranking]
PAGE TYPE TO CREATE: [Solution/Blog/Best-For/VS/Programmatic]
ALREADY COVERED: [No — checked against inventory]
```

### Agent 2: Functional Automation & CRM Integration Opportunities

Research the "power user" and "tech angle" keywords:

**Search these terms:**
- "AI automation for ServiceTitan"
- "AI automation for Jobber"
- "AI automation for Follow Up Boss"
- "AI appointment setting for [CRM] users"
- "automate inbound lead qualification"
- "custom sales automation workflows"
- "multi-agent sales outreach"
- "headless AI sales rep"
- "connect AI agent to [Salesforce/HubSpot/ServiceTitan/Jobber]"
- "AI lead response integration [CRM]"

**Also search for programmatic SEO opportunities:**
- What CRM/software platforms do home service businesses use?
- What integrations are people searching for?
- Are there "[Software] + AI" combination searches with no good results?

**Output same format as Agent 1.**

### Agent 3: VS & Comparison Opportunities

Research comparison and alternative searches that Prestyj can win:

**Search these terms:**
- "AI receptionist vs human receptionist"
- "AI receptionist vs answering service"
- "AI vs human ISA real estate"
- "best AI alternatives to answering services"
- "[new competitor] alternative" (find competitors NOT already in our /alternatives/ pages)
- "[new competitor] vs [other competitor]" where Prestyj could insert itself
- "AI calling service vs call center"
- "virtual receptionist vs AI receptionist"

**Discover NEW competitors** by searching:
- "AI receptionist software 2026"
- "AI voice agent companies"
- "AI sales calling platforms"
- "best AI phone answering service"

**Cross-reference against existing /alternatives/ and /compare/ pages.** Only surface NEW competitors or angles.

**Output same format as Agent 1, plus:**
```
COMPETITOR: [Name]
ALREADY HAVE ALTERNATIVE PAGE: [Yes/No]
ALREADY HAVE VS PAGE: [Yes/No]
```

### Agent 4: Authority & Dream Keyword Opportunities

Research long-term blog content opportunities:

**Search these terms:**
- "business automation agency"
- "sales AI implementation"
- "fully autonomous sales team"
- "book appointments while sleeping"
- "AI employee vs human employee cost"
- "AI workforce for small business"
- "how to automate sales team"
- "replace receptionist with AI"
- "AI for missed calls"
- "speed to lead automation"
- "after hours lead capture"

**Find "People Also Ask" and related searches** for each to discover adjacent opportunities.

**Focus on keywords where:**
- Current SERP is thin, outdated, or low-quality
- Content is generic and Prestyj can bring specific, practical experience
- Blog post could naturally lead to product consideration

**Output same format as Agent 1.**

### Agent 5: Industry Expansion Gaps

Research which high-ticket service industries have demand but weak AI coverage:

**Search these patterns across industries NOT yet well-covered:**
- "[industry] AI receptionist"
- "[industry] AI lead response"
- "[industry] missed call solution"
- "[industry] after hours phone service"
- "[industry] AI appointment booking"

**Industries to investigate (check if we already have best-for pages):**
- Chiropractors
- Physical therapy clinics
- Home inspectors
- Pool service companies
- Tree service companies
- Cleaning services (commercial & residential)
- Towing companies
- Locksmiths
- Property restoration / water damage
- Funeral homes
- Wedding venues / event planning

**For each industry with demand:**
- Is anyone ranking with AI solutions for this industry?
- What's the pain point? (missed calls, after-hours, qualification)
- Does this industry have high enough ticket value to justify AI?

**Output same format as Agent 1.**

---

## Phase 3: Scoring & Prioritization

After all Phase 2 agents complete, score every opportunity.

### Hard Relevance Gates (MUST PASS ALL)

- [ ] Directly relates to AI agents, voice AI, lead response, receptionist, sales automation, appointment booking, or missed call recovery
- [ ] A business owner reading this would naturally consider Prestyj as a solution
- [ ] Content would NOT duplicate the intent of any existing page
- [ ] Our angle is DIFFERENT from what's currently ranking (not just another version of the same thing)
- [ ] We can write this accurately and honestly

**If ANY fail -> DROP IT**

### Kill List (NEVER Recommend)

- Developer-focused content (building AI agents)
- Generic "what is AI" fluff
- Regulatory/compliance deep dives
- News commentary
- Content targeting individual consumers (B2B only)
- Topics where our content would just be a worse version of what already ranks

### Differentiation Gate (NEW — Critical)

Every piece of content MUST have a clear answer to: **"Why would someone read THIS instead of what's already ranking?"**

Valid differentiators:
- **Specificity**: We target a specific industry/use-case, they're generic
- **Practicality**: We show real implementation, they show theory
- **Freshness**: Their content is outdated, ours has 2026 data
- **Authority**: We do this daily, they're writing from the outside
- **Format**: We offer a tool/calculator, they offer a blog post
- **Completeness**: We cover the full picture, they cover one angle

**If no clear differentiator -> DROP IT**

### Leverage Score (0-100)

```
Traffic Potential   (0-30): How much search demand exists?
Competition Gap     (0-25): How weak is the current SERP? Can we win?
Conversion Intent   (0-20): How close to buying is the searcher?
Effort Required     (0-15): How fast can we create this? (quick = higher)
Time to Rank        (0-10): How fast could this realistically rank?
```

---

## Phase 4: Present The Plan

Present findings grouped by strategic cluster, ordered by leverage score within each cluster.

### Format:

```
===============================================
     SEO OPPORTUNITY MAP - [DATE]
===============================================

STRATEGY: Hub & Spoke — "AI Workforce for Service Businesses"
EXISTING PAGES: ~[N] indexed
NEW OPPORTUNITIES FOUND: [N]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CLUSTER 1: HOME SERVICES (Highest Priority)
#  │ Score │ Type        │ Keyword/Topic               │ Differentiator
1  │ 94    │ Solution    │ /solutions/home-services     │ No one owns this SERP
2  │ 91    │ Blog        │ AI receptionist for plumbers │ Thin SERP, high intent
3  │ 87    │ Best-For    │ /best-for/[new-industry]     │ Zero competition
...

CLUSTER 2: FUNCTIONAL AUTOMATION (CRM/Integration Plays)
#  │ Score │ Type        │ Keyword/Topic               │ Differentiator
4  │ 89    │ Programmatic│ AI for ServiceTitan users    │ No content exists
5  │ 84    │ Blog        │ Connect AI to [CRM]          │ Practical, not theory
...

CLUSTER 3: VS & COMPARISON PAGES
#  │ Score │ Type        │ Keyword/Topic               │ Differentiator
6  │ 86    │ VS Page     │ AI receptionist vs answering │ Category-defining
7  │ 82    │ Alternative │ [new competitor] alternative │ Competitor not covered
...

CLUSTER 4: AUTHORITY BUILDING (Long-term)
#  │ Score │ Type        │ Keyword/Topic               │ Differentiator
8  │ 78    │ Blog        │ Book appointments sleeping   │ Viral potential
...

CLUSTER 5: INDUSTRY EXPANSION
#  │ Score │ Type        │ Keyword/Topic               │ Differentiator
9  │ 76    │ Best-For    │ /best-for/[new-industry]     │ Untapped vertical
...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

RECOMMENDED EXECUTION ORDER:
1. [Highest leverage item] — [Why first]
2. [Second item] — [Why second]
3. [Third item] — [Why third]

Run /rank-me to execute. Or: "approve 1,3,5" to queue specific items.
===============================================
```

### Ask the user which opportunities to pursue.

**STOP HERE. Do not create content. Use /rank-me for execution.**

---

## Important Reminders

1. **Strategy-guided, not random.** Every search is anchored to the hub & spoke strategy.
2. **Minimal inventory.** Spend < 2 minutes on existing content — just enough to avoid duplicates.
3. **Differentiation is mandatory.** If we can't beat what's ranking, skip it.
4. **Fresh research only.** Always do live web searches.
5. **Home services first.** This is the highest-leverage cluster — weight it accordingly.
6. **Output a plan, not content.** This command researches. `/rank-me` creates.
7. **Be specific.** "AI receptionist for plumbers" > "AI for business"
8. **Score honestly.** Don't inflate scores to pad the list.
