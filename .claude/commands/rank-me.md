---
name: rank-me
description: Execute high-leverage SEO content creation - research, create, and deploy differentiated content using the hub & spoke strategy
---

# Rank-Me: SEO Content Execution Engine

This command creates content that ranks. It does targeted SERP research, identifies the single highest-leverage opportunity, gets approval, then creates differentiated content and deploys it.

**Goal**: Create content so good and specific that it dominates SERPs that are currently thin, outdated, or generic.

**Core Principle**: One excellent piece of content beats five mediocre ones. Quality and differentiation over volume.

---

## The Strategy (Hardcoded)

Prestyj = **"The AI Workforce for Service Businesses"**

### Content Clusters (Priority Order)

1. **Home Services** — Highest intent, lowest competition. Plumbers, HVAC, electricians, roofers, contractors losing money on missed calls.
2. **Functional Automation** — CRM integrations, custom workflows. Target power users on ServiceTitan, Jobber, Follow Up Boss.
3. **VS & Comparison** — Category-defining pages. "AI vs Human Receptionist", "AI vs Answering Service".
4. **Real Estate** — Defend existing base. ISA replacement, team scaling, follow-up automation.
5. **Authority Building** — Dream keywords. "Business automation agency", "fully autonomous sales team".

### Content Types Available

| Type | Location | When to Use |
|------|----------|-------------|
| Blog Post | `content/blog/[slug].mdx` | Keyword-targeted articles, thought leadership, how-to guides |
| Solution Page | `src/lib/solutions/[slug].ts` | Industry vertical landing pages (home-services, insurance) |
| Best-For Page | `src/lib/best-for/[slug].ts` | Niche-specific targeting (AI for plumbers, AI for dentists) |
| Alternative Page | `src/lib/alternatives/[slug].ts` | Competitor alternative pages |
| Compare Page | `src/app/compare/[slug]/page.tsx` | VS pages (Prestyj vs X, AI vs Human) |

---

## Phase 1: Targeted Opportunity Research (3 Parallel Agents)

Each agent focuses on finding the BEST opportunity to create right now.

### Agent 1: SERP Hunter

Do live web searches for high-intent keywords across the strategy clusters. Focus on finding SERPs that are **thin, outdated, or beatable**.

**Search Pattern — Rotate through these:**

Home Services (search 5-8 of these):
- "AI receptionist for [plumbers/HVAC/electricians/roofers/contractors]"
- "after hours answering service for [industry]"
- "missed call text back [industry]"
- "AI appointment booking [industry]"
- "[industry] virtual receptionist"
- "[industry] phone answering solution"
- "automated dispatch [HVAC/plumbing]"

Functional Automation (search 3-5 of these):
- "AI automation for ServiceTitan"
- "AI for Jobber users"
- "AI lead response for Follow Up Boss"
- "connect AI agent to [CRM]"
- "automate inbound lead qualification"
- "custom AI sales workflows"

VS/Comparison (search 3-5 of these):
- "AI receptionist vs human receptionist"
- "AI receptionist vs answering service"
- "AI answering service cost comparison"
- "[new competitor 2026] review"
- "best AI phone answering 2026"

Authority/Dream (search 2-3 of these):
- "business automation agency"
- "replace receptionist with AI"
- "AI employee cost vs human"
- "book appointments while sleeping"

**For each search, report:**
```
KEYWORD: [exact term]
SERP STRENGTH: [1-10, where 1 = empty/thin, 10 = dominated by authorities]
TOP 3 RESULTS: [URL - Type - Quality]
BEATABLE: [Yes/No/Maybe] — [Why]
OUR ANGLE: [What we'd do differently]
RECOMMENDED CONTENT TYPE: [Blog/Solution/Best-For/VS/Programmatic]
```

### Agent 2: Existing Content Quick-Check

Do a FAST scan of existing content to avoid creating duplicates. This should take < 2 minutes.

**Read these files only:**
- `src/lib/best-for/index.ts` — get the list of existing slugs
- `src/lib/alternatives/index.ts` — get the list of existing slugs
- `src/lib/solutions/` — list solution slugs
- List filenames in `content/blog/`
- List routes in `src/app/compare/`

**Output a compact dedup reference:**
```
EXISTING SLUGS:
Best-For: [list]
Alternatives: [list]
Solutions: [list]
Blog: [list of filenames]
Compare: [list]
```

### Agent 3: Competitor Intelligence

Research 2-3 competitors to find content gaps and positioning angles:

**Search for:**
- "AI receptionist software 2026"
- "best AI voice agent for business"
- "AI answering service for small business"
- "[top competitor name] features"
- "[top competitor name] pricing"

**Find:**
- What content types are competitors creating?
- What keywords are they targeting that we're NOT?
- Where is their content weak/thin/outdated?
- What NEW competitors have emerged that we don't have alternative pages for?
- What positioning angles are they using?

**Output:**
```
COMPETITOR: [Name]
HAVE ALT PAGE: [Yes/No]
THEIR CONTENT STRENGTH: [Weak/Medium/Strong]
GAPS WE CAN EXPLOIT: [List specific opportunities]
```

---

## Phase 2: Opportunity Scoring & Selection

After Phase 1 completes, combine findings and select the top opportunities.

### Scoring (0-100)

```
Traffic Potential   (0-30): Search demand signal strength
Competition Gap     (0-25): How beatable is the SERP?
Conversion Intent   (0-20): How close to buying is the searcher?
Effort Required     (0-15): How fast can we ship this?
Time to Rank        (0-10): How quickly will this index and rank?
```

### Mandatory Differentiation Check

For each top opportunity, answer: **"Why will OUR content beat what's currently ranking?"**

Must have at least ONE:
- [ ] **More specific** — We target exact industry/use-case, they're generic
- [ ] **More practical** — We show real implementation, costs, ROI numbers
- [ ] **More current** — Their content is outdated, ours has 2026 data/trends
- [ ] **Better format** — We offer a tool/calculator/interactive, they have a wall of text
- [ ] **Unique authority** — We actually do this work daily, they're writing from outside
- [ ] **Uncovered niche** — Nobody is creating content for this search at all

**No differentiator = skip it. Do NOT create "me too" content.**

### Relevance Gate

- [ ] Relates to AI agents, voice AI, lead response, sales automation, receptionist, appointment booking
- [ ] Business owner reading this would consider Prestyj
- [ ] Does NOT duplicate intent of existing page
- [ ] We can write this accurately

**Any fail = drop it.**

---

## Phase 3: User Approval Gate

Present the top 3-5 opportunities:

```
===============================================
     RANK-ME TARGETS - [DATE]
===============================================

#1 (SCORE: XX/100)
TYPE: [Blog Post / Solution Page / Best-For / VS Page / Alt Page]
TARGET KEYWORD: "[keyword]"
PROPOSED URL: /[path]
SERP STATUS: [Thin/Outdated/Beatable]
OUR DIFFERENTIATOR: [One sentence — why we'll win]
EFFORT: [Quick/Medium/Involved]

#2 (SCORE: XX/100)
[Same format]

#3 (SCORE: XX/100)
[Same format]

===============================================
Reply: "approve all" or "approve 1,3" or "reject" or "more options"
===============================================
```

**Wait for user approval before creating anything.**

---

## Phase 4: Content Creation

For each approved item, create the content. Launch parallel agents for independent items.

**CRITICAL RULE**: Every piece of content must be DIFFERENT from what's currently ranking. Before writing, re-read the top 2-3 SERP results and ensure our content:
- Takes a different angle
- Provides unique value (specific numbers, real scenarios, practical steps)
- Speaks to a more specific audience
- Includes information competitors don't have

### For Blog Posts (`content/blog/[slug].mdx`)

**Create MDX file with frontmatter:**
```mdx
---
title: "[Title — include primary keyword naturally]"
description: "[Compelling meta description, 150-155 chars, include keyword]"
date: [YYYY-MM-DD]
---

[Content following these rules:]
- Open with a specific, relatable scenario (not generic "in today's world")
- Include real numbers: costs, ROI, time savings, response times
- Reference specific industries/tools/CRMs by name
- Internal link to relevant /best-for, /solutions, /alternatives pages (2-4 links)
- Natural CTA to /book-demo (NOT forced)
- H2 sections that could each be a featured snippet
- 1200-2000 words for guides, 800-1200 for comparisons
- Include a comparison table if applicable
- End with clear next steps, not a fluffy conclusion
```

**Differentiation checklist before saving:**
- [ ] Would a reader learn something they can't get from the top 3 SERP results?
- [ ] Does this include specific numbers, scenarios, or examples?
- [ ] Is the angle unique to Prestyj's positioning?
- [ ] Does it naturally lead to product consideration without being salesy?

### For Solution Pages (`src/lib/solutions/[slug].ts`)

Read the existing solution page types and data structure first:
- Read `src/lib/solutions/types.ts` for the interface
- Read one existing solution (e.g., `src/lib/solutions/roofing.ts`) as a template

**Create the data file following the EXACT TypeScript interface.**

Then update `src/lib/solutions/index.ts` to import and export the new solution.

### For Best-For Pages (`src/lib/best-for/[slug].ts`)

Follow the `BestForPageContent` interface exactly:

```typescript
import type { BestForPageContent } from "./types";

export const [camelCaseName]: BestForPageContent = {
  slug: "[slug]",
  niche: {
    name: "[Full Industry Name]",
    shortName: "[Short Name]",
    description: "[One sentence — specific to this industry's AI needs]",
  },
  meta: {
    title: "AI [Receptionist/Sales Agent/etc.] for [Industry] | Prestyj",
    description: "[155 chars — specific pain point + solution for this industry]",
    keywords: ["[industry] AI receptionist", "[industry] AI", ...],
  },
  hero: {
    badge: "[Industry] AI Solution",
    headline: "[Industry-specific headline part 1]",
    headlineAccent: "[Accented/highlighted part]",
    subheadline: "[Specific value prop for this industry]",
  },
  whyBestFor: [
    { icon: "IconName", title: "[Industry-specific benefit]", description: "[Detail]" },
    // 4 items — each must be specific to this industry, NOT generic
  ],
  painPoints: [
    { problem: "[Industry-specific problem]", solution: "[How Prestyj solves it]" },
    // 4-5 items — use real scenarios from this industry
  ],
  comparison: {
    headers: ["Feature", "Prestyj AI", "[Industry standard alternative]"],
    rows: [
      { feature: "[Feature]", prestyj: "[Our value]", others: "[Their value]" },
      // 5-7 rows
    ],
  },
  faq: [
    { question: "[Industry-specific question]?", answer: "[Specific answer]" },
    // 4-5 items
  ],
  cta: {
    headline: "[Industry-specific CTA]",
    subheadline: "[Specific outcome promise]",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    footnote: "[Optional — setup time, guarantee, etc.]",
  },
};
```

**After creating, update `src/lib/best-for/index.ts`** to import and export the new page.

### For Alternative Pages (`src/lib/alternatives/[slug].ts`)

Follow the `AlternativePageContent` interface exactly:

```typescript
import type { AlternativePageContent } from "./types";

export const [camelCaseName]: AlternativePageContent = {
  slug: "[slug]",
  type: "direct-competitor",
  competitor: {
    name: "[Competitor Name]",
    pricing: "[Pricing if known, or 'Contact for pricing']",
    website: "[URL]",
    description: "[Honest one sentence about what they do]",
  },
  meta: {
    title: "Best [Competitor] Alternative for Service Businesses | Prestyj",
    description: "[155 chars — why someone might switch]",
    keywords: ["[competitor] alternative", "[competitor] vs prestyj", ...],
  },
  hero: {
    badge: "[Competitor] Alternative",
    headline: "Looking for a",
    headlineAccent: "[Competitor] Alternative?",
    subheadline: "[Specific reason they might be looking — based on real competitor weakness]",
  },
  industryStats: [
    { stat: "[XX%]", description: "[Relevant stat]" },
    // 3-4 items
  ],
  comparison: {
    features: [
      { feature: "[Feature]", prestyj: true, competitor: false, note: "[Context]" },
      // 6-8 rows — be fair and honest
    ],
    competitorPricing: {
      price: "$[X]",
      period: "/month",
      note: "[Context]",
      pros: ["[Genuine pro 1]", "[Genuine pro 2]"],
      cons: ["[Real con 1]", "[Real con 2]"],
    },
    prestyjPricing: {
      price: "Custom pricing",
      note: "[Value prop]",
      pros: ["[Pro 1]", "[Pro 2]"],
      cons: [],
    },
  },
  whySwitch: [
    { icon: "IconName", title: "[Reason]", description: "[Detail]" },
    // 4 items
  ],
  whenCompetitorFits: ["[Honest scenario 1]", "[Honest scenario 2]"],
  whenPrestyjFits: ["[Scenario 1]", "[Scenario 2]"],
  relatedResources: [
    { href: "/blog/[related]", title: "[Related Post]", description: "[Why relevant]" },
  ],
  cta: {
    headline: "[CTA Headline]",
    subheadline: "[Subheadline]",
    buttonText: "Book Demo",
    buttonHref: "/book-demo",
  },
};
```

**After creating, update `src/lib/alternatives/index.ts`** to import and export the new page.

### For VS / Compare Pages

Read an existing compare page first to match the pattern:
- Check `src/app/compare/` for existing page structure
- Match the component usage and layout

Create the page at `src/app/compare/[slug]/page.tsx`.

### Icon Reference

Use Lucide React icons. Common icons:
- Building2, Building, Home, Wrench, Hammer
- Phone, PhoneIncoming, PhoneMissed, MessageSquare
- Clock, Timer, Zap, AlertTriangle
- Target, BarChart3, TrendingUp, ArrowUpRight
- Shield, Lock, CheckCircle, XCircle
- DollarSign, CreditCard, Wallet
- Users, UserCheck, Headphones, Bot
- Cpu, Sparkles, Workflow, Settings

---

## Phase 5: Verification & Deploy

### Step 1: Quality Checks

```bash
npm run typecheck
npm run lint
npm run build
```

**Fix ALL errors. Do not proceed with errors or warnings (except pre-existing ones).**

Pre-existing warnings to ignore:
- `src/app/ai-calculator-results/page.tsx`: unused `setResults`, `setInputs`
- `src/lib/compare/types.ts`: unused `ReactNode` import

### Step 2: Verify Content Quality

Before committing, re-read the created content and check:
- [ ] Title includes primary keyword naturally
- [ ] Meta description is compelling and 150-155 chars
- [ ] Content is specific (mentions real industries, tools, numbers)
- [ ] Internal links point to existing pages (verify they exist)
- [ ] No broken imports
- [ ] CTA to /book-demo is present and natural
- [ ] Content is genuinely different from top SERP results

### Step 3: Commit

```bash
git add [specific files only]
git commit -m "SEO: [Content type] — [what was created]

- [Specific page/post 1]
- [Specific page/post 2]
- Target keywords: [list]

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

### Step 4: IndexNow Notification

Submit new/updated URLs to search engines via the existing IndexNow integration:

```bash
# Use the existing IndexNow API route or script
```

Check `src/lib/indexnow.ts` and `src/app/api/indexnow/` for the existing implementation.

### Step 5: Output Summary

```
===============================================
     RANK-ME COMPLETE - [DATE]
===============================================

CREATED:
+ [URL 1] — [Type] — Target: "[keyword]"
+ [URL 2] — [Type] — Target: "[keyword]"

WHY THIS CONTENT WILL RANK:
• [Differentiator 1]
• [Differentiator 2]

VERIFICATION:
[check] Typecheck passed
[check] Lint passed
[check] Build passed
[check] IndexNow notified

NEXT OPPORTUNITY:
→ [What to create next based on research]
→ Run /rank-me again or /seo for full research

===============================================
```

---

## Usage Examples

**Default run (full research + create top opportunity):**
```
/rank-me
```

**Focus on a specific cluster:**
```
/rank-me home services
/rank-me CRM integrations
/rank-me comparison pages
```

**Focus on specific keyword:**
```
/rank-me "AI receptionist for plumbers"
```

**Create a specific page type:**
```
/rank-me new solution page for home services
/rank-me vs page: AI vs answering service
```

---

## Important Reminders

1. **Differentiation is mandatory.** Never create "me too" content. Every piece must have a clear reason to exist.
2. **Specificity wins.** "AI receptionist for HVAC companies" beats "AI for business" every time.
3. **Strategy-guided.** Every content piece maps to a cluster in the hub & spoke strategy.
4. **Quality over quantity.** One piece that ranks page 1 > five pieces on page 5.
5. **Home services first.** Highest intent, lowest competition — always weight this cluster.
6. **Live research.** Always do fresh web searches. Don't use cached knowledge.
7. **Honest content.** Don't make claims we can't back up. Be fair to competitors.
8. **Verify everything.** Typecheck, lint, build — no exceptions.
9. **Include real numbers.** Costs, ROI, response times, conversion rates make content credible.
10. **IndexNow always.** Notify search engines of every new page.

---

## Files Modified By This Command

| File | When Modified |
|------|---------------|
| `content/blog/[slug].mdx` | New blog posts |
| `src/lib/best-for/[slug].ts` | New best-for pages |
| `src/lib/best-for/index.ts` | When adding best-for pages |
| `src/lib/alternatives/[slug].ts` | New alternative pages |
| `src/lib/alternatives/index.ts` | When adding alternative pages |
| `src/lib/solutions/[slug].ts` | New solution pages |
| `src/lib/solutions/index.ts` | When adding solution pages |
| `src/app/compare/[slug]/page.tsx` | New VS/compare pages |
| `src/app/sitemap.ts` | If new route types added |
