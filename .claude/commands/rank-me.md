---
name: rank-me
description: Dynamic SEO command - research SERPs, identify high-leverage opportunities, and execute content creation for broader AI agent market
---

# Dynamic SEO Operation: Rank-Me

This command dynamically researches and executes the highest-leverage SEO wins for the AI agent market. Unlike `/seo` (enterprise real estate focus), `/rank-me` does live SERP research across ALL high-ticket service industries and prioritizes opportunities by leverage score.

**Goal**: Find and execute the fastest path to page 1 rankings for AI agent-related keywords.

---

## Target Keywords (Industry-Agnostic)

Research and target across ALL high-ticket service industries:

**Core Service Keywords:**
- AI voice agents / AI voice calling
- AI sales agents / AI sales assistant
- done-for-you AI texting agents / done-for-you AI voice agents
- AI lead response / AI lead qualification
- AI inbound receptionist / AI phone answering
- AI outbound calling / outbound texting
- batch text campaigns with AI responses
- AI agents for business / custom AI solutions
- AI appointment booking / AI scheduling
- done-for-you AI agents

**Industry Verticals (prioritize by opportunity):**
- Real estate (existing focus)
- Insurance agencies
- Mortgage brokers
- Solar installers
- HVAC companies
- Roofing contractors
- Home services / contractors
- Auto dealerships
- Medical/dental practices
- Law firms
- Any high-ticket service with lead response needs

**Strategy**: Identify which industry + keyword combinations have lowest competition and highest ranking potential, then prioritize regardless of industry.

---

## Phase 1: SERP Intelligence (5 Parallel Agents)

Launch ALL 5 agents simultaneously using the Task tool.

### Agent 1: SERP Snapshot
Research current search landscape for target keywords:

**For Each Core Keyword:**
- Web search for "[keyword]" and "[keyword] for [industry]"
- Identify who's ranking (competitors, directories, blogs)
- Note content types ranking (listicles, landing pages, comparisons)
- Find content gaps and "thin content" opportunities
- Look for "almost there" opportunities (outdated/thin content we can beat)

**Output Format:**
```
KEYWORD: [keyword]
TOP 3 RESULTS:
1. [URL] - [Type] - [Quality: High/Medium/Low]
2. [URL] - [Type] - [Quality: High/Medium/Low]
3. [URL] - [Type] - [Quality: High/Medium/Low]
OPPORTUNITY: [None/Low/Medium/High]
NOTES: [Why this is/isn't an opportunity]
```

### Agent 2: Competitor Content Audit
Research what competitors are ranking for:

**Competitors to Research:**
- Bland.ai
- Retell.ai
- Vapi
- Conversica
- Structurely
- AIRe (Air.ai)
- Drift
- Intercom

**For Each:**
- What keywords are they ranking for?
- What content types are performing?
- What gaps exist in their coverage?
- What positioning angles are they using?

### Agent 3: Keyword Opportunity Finder
Find long-tail and comparison opportunities:

**Search Patterns:**
- "[core keyword] alternatives"
- "[core keyword] vs [competitor]"
- "best [core keyword] for [industry]"
- "[competitor] alternative"
- "[core keyword] pricing"
- "[core keyword] reviews 2026"
- "people also ask" related to core keywords

**Output Format:**
```
KEYWORD: [long-tail keyword]
SEARCH VOLUME ESTIMATE: [Low/Medium/High]
COMPETITION: [Low/Medium/High]
CONTENT TYPE NEEDED: [Blog/Best-For/Alternative/Comparison]
```

### Agent 4: Content Decay Detector
Audit existing content in `content/blog/`:

**Check Each Post For:**
- Age (>6 months = refresh candidate)
- Outdated information (old stats, dead links)
- Thin content (<800 words for comprehensive topics)
- Missing internal links
- Title optimization opportunities (add "AI" keywords)
- Missing structured data

**Output Format:**
```
FILE: content/blog/[slug].mdx
AGE: [X months]
WORD COUNT: [N words]
ISSUES: [List of issues]
RECOMMENDATION: [Refresh/Update Title/Add Links/No Action]
PRIORITY: [High/Medium/Low]
```

### Agent 5: Quick Win Identifier
Find fast, high-impact improvements:

**Check For:**
- Blog titles missing "AI" that could benefit from it
- Pages ranking positions 5-15 (almost page 1)
- Missing meta descriptions
- Missing/incomplete schema markup
- Internal linking gaps (orphan pages)
- Image alt text opportunities
- Broken internal/external links

**Files to Audit:**
- `content/blog/*.mdx` (all blog posts)
- `src/app/**/page.tsx` (all pages)
- `src/lib/best-for/*.ts`
- `src/lib/alternatives/*.ts`

---

## Phase 2: Opportunity Scoring

After all Phase 1 agents complete, synthesize and score opportunities.

### Leverage Scoring Algorithm

Score each opportunity 0-100:

```
LEVERAGE SCORE =
  Traffic Potential (0-30) +
  Competition Level (0-25) +
  Conversion Intent (0-20) +
  Effort Required (0-15) +
  Time to Rank (0-10)
```

**Traffic Potential (0-30):**
- 30: High-volume head term with proven search demand
- 20: Medium-volume term or long-tail with consistent searches
- 10: Low-volume long-tail or niche term
- 0: No demonstrated search demand

**Competition Level (0-25):**
- 25: No quality content exists / thin SERP
- 20: Only low-quality or outdated content exists
- 15: Medium competition, we can differentiate
- 10: Strong competition but gap exists
- 0: Dominated by high-authority sites

**Conversion Intent (0-20):**
- 20: Direct buying intent ("AI voice agent pricing", "best AI for X")
- 15: Comparison intent ("[X] vs [Y]", "alternatives to")
- 10: Solution-seeking intent ("how to automate lead response")
- 5: Research intent (may convert later)
- 0: Purely educational / no buying intent

**Effort Required (0-15):**
- 15: Quick fix (<30 min) - title tweak, meta update
- 12: Minor update (30-60 min) - refresh existing content
- 8: New content using existing template (1-2 hours)
- 4: New content requiring research (2-4 hours)
- 0: Major project (new page type, significant research)

**Time to Rank (0-10):**
- 10: Can rank immediately (thin SERP, low competition)
- 7: Should rank within 2-4 weeks
- 4: May take 1-3 months
- 0: Long-term play (6+ months)

### Categorize Opportunities

Group scored opportunities into:

**QUICK WINS** (< 30 min, score 70+)
- Title optimizations
- Meta description updates
- Internal linking additions
- Schema markup fixes

**NEW CONTENT** (score 65+)
- Blog posts (`content/blog/*.mdx`)
- Best-for pages (`src/lib/best-for/[slug].ts`)
- Alternative pages (`src/lib/alternatives/[slug].ts`)

**CONTENT REFRESH** (existing content, score 60+)
- Update outdated stats/info
- Expand thin content
- Improve targeting

**TECHNICAL FIXES** (score varies)
- Broken links
- Missing schema
- Crawlability issues

---

## Hard Relevance Gates (MANDATORY)

Before proposing ANY content, it MUST pass ALL THREE gates.

### Gate 1: Keyword Relevance
- [ ] Relates to AI agents, lead response, sales automation, voice/text AI
- [ ] Searcher could naturally consider Prestyj as a solution
- [ ] CTA to /book-demo is organic, not forced

**If ANY fail -> REJECT**

### Gate 2: Competition Assessment
At least ONE must be true:
- [ ] No quality content exists for this keyword
- [ ] Existing content is outdated (>12 months old)
- [ ] Existing content is thin (<500 words)
- [ ] We can provide unique angle/data/perspective

**If NONE true -> REJECT**

### Gate 3: Content Fit
All must be true:
- [ ] Can use existing templates/TypeScript types
- [ ] Information is available for accurate content
- [ ] Fits existing site architecture

**If ANY fail -> REJECT**

---

## Kill List (NEVER Create)

Immediately reject any topic that is:

- Content for developers building AI agents (wrong audience)
- Generic "what is AI" educational content (no buying intent)
- Topics without buying intent
- Topics where CTA feels forced
- Duplicates of existing content intent
- Industry news without competitive angle
- Content requiring claims we can't substantiate
- Regulatory/compliance content (complex, risky)
- Content targeting individual consumers (B2B focus)

---

## Phase 3: User Approval Gate

Present findings using this format:

```
===============================================
     THE PLAN - [DATE]
===============================================

QUICK WINS (< 30 min total)
+---------+----------------------------------+
| SCORE   | ACTION                           |
+---------+----------------------------------+
| 95      | Add "AI" to 3 blog titles        |
| 88      | Add schema to comparison pages   |
| 82      | Fix 5 internal linking gaps      |
+---------+----------------------------------+

NEW CONTENT
+---------+-------------+----------------------+--------------------+
| SCORE   | TYPE        | URL                  | TARGET KEYWORD     |
+---------+-------------+----------------------+--------------------+
| 92      | Best-For    | /best-for/insurance  | AI for insurance   |
| 85      | Alternative | /alternatives/bland  | bland.ai alt       |
| 78      | Blog        | /blog/ai-voice-vs... | AI voice agents    |
+---------+-------------+----------------------+--------------------+

CONTENT REFRESH
+---------+----------------------------------+--------------------+
| SCORE   | FILE                             | ACTION             |
+---------+----------------------------------+--------------------+
| 75      | content/blog/old-post.mdx        | Update stats, +AI  |
+---------+----------------------------------+--------------------+

Reply: "approve all" or "approve 1,3,5" or "show more" or "reject"
```

**Wait for user response before proceeding.**

---

## Phase 4: Content Execution

For each approved item, execute in parallel where possible.

### For Blog Posts (`content/blog/*.mdx`)

Create MDX file following existing blog patterns:
- Frontmatter with title, description, date
- H2 sections with clear hierarchy
- Internal links to relevant pages
- CTA to /book-demo where natural

### For Best-For Pages (`src/lib/best-for/[slug].ts`)

Follow the `BestForPageContent` interface exactly:

```typescript
import type { BestForPageContent } from "./types";

export const [camelCaseName]: BestForPageContent = {
  slug: "[slug]",
  niche: {
    name: "[Full Name]",
    shortName: "[Short Name]",
    description: "[One sentence description]",
  },
  meta: {
    title: "[Title] | Prestyj",
    description: "[Meta description 155 chars]",
    keywords: ["keyword1", "keyword2", ...],
  },
  hero: {
    badge: "[Badge text]",
    headline: "[Headline Part 1]",
    headlineAccent: "[Accented Part]",
    subheadline: "[Subheadline]",
  },
  whyBestFor: [
    { icon: "IconName", title: "Title", description: "Description" },
    // 4 items
  ],
  painPoints: [
    { problem: "Problem statement", solution: "How Prestyj solves it" },
    // 4-5 items
  ],
  comparison: {
    headers: ["Feature", "Prestyj AI", "Alternative"],
    rows: [
      { feature: "Feature", prestyj: "Prestyj value", others: "Others value" },
      // 5-7 rows
    ],
  },
  faq: [
    { question: "Question?", answer: "Answer" },
    // 4-5 items
  ],
  cta: {
    headline: "CTA Headline",
    subheadline: "CTA subheadline",
    buttonText: "Button Text",
    buttonHref: "/book-demo",
    footnote: "Optional footnote",
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
    pricing: "[Pricing if known]",
    website: "[URL]",
    description: "[One sentence]",
  },
  meta: {
    title: "Best [Competitor] Alternative | Prestyj",
    description: "[Meta description 155 chars]",
    keywords: ["[competitor] alternative", ...],
  },
  hero: {
    badge: "[Competitor] Alternative",
    headline: "Looking for a",
    headlineAccent: "[Competitor] Alternative?",
    subheadline: "[Why they might be looking]",
  },
  industryStats: [
    { stat: "XX%", description: "Description" },
    // 3-4 items
  ],
  comparison: {
    features: [
      { feature: "Feature", prestyj: true, competitor: false, note: "Note" },
      // 6-8 rows
    ],
    competitorPricing: {
      price: "$X",
      period: "/month",
      note: "Note",
      pros: ["Pro 1", "Pro 2"],
      cons: ["Con 1", "Con 2"],
    },
    prestyjPricing: {
      price: "Custom pricing",
      note: "Note",
      pros: ["Pro 1", "Pro 2"],
      cons: [],
    },
  },
  whySwitch: [
    { icon: "IconName", title: "Title", description: "Description" },
    // 4 items
  ],
  whenCompetitorFits: ["Scenario 1", "Scenario 2"],
  whenPrestyjFits: ["Scenario 1", "Scenario 2"],
  relatedResources: [
    { href: "/path", title: "Title", description: "Description" },
  ],
  cta: {
    headline: "CTA Headline",
    subheadline: "Subheadline",
    buttonText: "Book Demo",
    buttonHref: "/book-demo",
    footnote: "Optional",
  },
};
```

**After creating, update `src/lib/alternatives/index.ts`** to import and export the new page.

### Icon Reference

Use Lucide React icons. Common icons for these pages:
- Building2, Building, Home
- Phone, MessageSquare, Mail
- Clock, Timer, Zap
- Target, BarChart3, TrendingUp
- Shield, Lock, CheckCircle
- DollarSign, CreditCard
- Users, UserCheck, Headphones
- Bot, Cpu, Sparkles

---

## Phase 5: Verification & Deploy

### Step 1: Run Quality Checks

```bash
npm run typecheck
npm run lint
npm run build
```

**Fix ALL errors before continuing.** Do not proceed with errors.

### Step 2: Verify Content

- Confirm new pages appear in build output
- Check that TypeScript types are satisfied
- Verify no broken imports

### Step 3: Commit Changes

```bash
git add [specific files]
git commit -m "SEO: [Description of changes]

- [List of pages created]
- [List of quick fixes applied]
- [Content refreshes if any]

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

### Step 4: Trigger IndexNow

For new/updated pages, submit to search engines:

```typescript
import { submitUrls } from "@/lib/indexnow";

// Submit the URLs that were created/updated
const urls = [
  "https://prestyj.com/best-for/[new-slug]",
  "https://prestyj.com/alternatives/[new-slug]",
  // ... other URLs
];

await submitUrls(urls);
```

Or run via the existing IndexNow integration.

### Step 5: Output Summary

```
===============================================
     RANK-ME COMPLETE
===============================================

CREATED:
+ /best-for/[slug] (AI for [industry])
+ /alternatives/[slug] ([competitor] alternative)
+ content/blog/[slug].mdx

QUICK FIXES APPLIED:
+ Added "AI" to 3 blog titles
+ Fixed 5 internal linking gaps
+ Added schema to 2 pages

VERIFICATION:
[check] Typecheck passed
[check] Lint passed
[check] Build passed
[check] IndexNow notified (X URLs)

NEXT STEPS:
- Monitor rankings in 2-4 weeks
- Run /rank-me again to find new opportunities
- Consider: /rank-me --focus "[specific keyword]"

===============================================
```

---

## Usage Examples

**Default run (full research):**
```
User: /rank-me
```

**Focus on specific keyword area:**
```
User: /rank-me --focus "AI voice agents"
```

**Focus on specific industry:**
```
User: /rank-me --focus "insurance"
```

**Quick wins only:**
```
User: /rank-me --quick
```

---

## Important Reminders

1. **Live Research**: Always do fresh web searches - don't rely on cached knowledge
2. **Leverage First**: Prioritize by score, not by what seems interesting
3. **Gates Are Hard**: If a topic fails ANY gate, reject it immediately
4. **Use Templates**: Follow existing TypeScript interfaces exactly
5. **Verify Everything**: Never skip the build/typecheck step
6. **IndexNow**: Always notify search engines of new content
7. **Be Honest**: Don't make claims we can't substantiate
8. **Keep It Scannable**: Content should be digestible in 2-3 minutes

---

## Files Modified By This Command

| File | When Modified |
|------|---------------|
| `content/blog/*.mdx` | New blog posts |
| `src/lib/best-for/[slug].ts` | New best-for pages |
| `src/lib/best-for/index.ts` | When adding best-for pages |
| `src/lib/alternatives/[slug].ts` | New alternative pages |
| `src/lib/alternatives/index.ts` | When adding alternative pages |
| `src/app/sitemap.ts` | If new route types added |
| `src/lib/indexnow.ts` | If new route types added |
