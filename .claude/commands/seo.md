---
name: seo
description: Enterprise SEO operation - competitor research, comparison content, and BOFU pages for $100K+ buyers
---

# Enterprise SEO Operation: Comparison & BOFU Content

This command runs a focused SEO operation designed to create decision-stage content for enterprise buyers evaluating lead response solutions. Target: VPs/Directors at 50+ office operations who write $100K+ checks.

**Primary Output**: blog content, Comparison pages, vs-competitor content, best-for pages, and alternative roundups—NOT educational articles.

---

## Phase 1: Intelligence Gathering (6 Parallel Agents)

Launch ALL 6 agents simultaneously using the Task tool.

### Agent 1: Competitor Intelligence
Research competitors that enterprise buyers are actively evaluating:

**Build-vs-Buy Alternatives:**
- Internal ISA teams (hiring, training, management costs)
- Offshore ISA services (quality, compliance, turnover)

**Adjacent Solutions:**
- Drift Enterprise
- Intercom for real estate
- Generic AI voice platforms (Bland.ai, Retell, Vapi)

**Research Focus:**
- What are their weaknesses at enterprise scale (50+ offices)?
- What do G2/Capterra reviews and complaints say?
- Pricing gaps and hidden costs
- Feature limitations for multi-location operations
- Integration problems with common RE tech stacks
- Contract/switching friction points

### Agent 2: Comparison Keyword Research
Find comparison-intent keywords that signal active buying:

**High-Intent Patterns:**
- "[Competitor] vs [competitor]" searches
- "[Competitor] alternatives for real estate"
- "[Competitor] pricing enterprise"
- "[Competitor] reviews 2026"
- "Best AI lead response for franchise"
- "Best AI lead response for multi-office"
- "Enterprise real estate lead qualification"

**Keywords MUST contain:**
- "vs", "versus", "compare", "comparison"
- "alternative", "alternatives to"
- "pricing", "cost", "ROI"
- "reviews", "complaints", "problems"
- "enterprise", "franchise", "multi-office", "regional"

**Reject keywords that:**
- Target individual agents or small teams
- Are educational ("what is", "how to")
- Have no buying intent

### Agent 3: Enterprise Pain Point Mining
Research what VPs/Directors at 50+ office operations actually struggle with:

**NOT These (Individual Agent Problems):**
- "How to respond to leads faster"
- "Best scripts for follow-up"
- "Time management for ISAs"

**YES These (Enterprise Operations Problems):**
- "How to standardize lead response across 75 offices"
- "How to measure lead response compliance across franchise"
- "How to reduce ISA turnover impact on operations"
- "How to enforce SLA consistency across regions"
- "How to report on lead conversion across locations"
- "How to integrate lead response with enterprise CRM"

**Research Sources:**
- LinkedIn posts from RE operations executives
- Real estate franchise forums
- Industry publications (Inman, RISMedia enterprise coverage)
- Real estate tech conference topics
- G2/Capterra reviews of enterprise RE tools

### Agent 4: Content Audit
Analyze current blog in `content/blog/` for:

**Identify Posts That:**
- Target wrong audience (individual agents) → candidates for noindex
- Could be repositioned as comparison content
- Are missing from competitor comparison coverage
- Have outdated information hurting credibility
- Rank for keywords but attract wrong audience

**For Each Post, Determine:**
- Current target audience (agent vs enterprise)
- Current intent (educational vs decision-stage)
- Reposition potential (can it become comparison content?)
- Recommendation: keep, rewrite, noindex, or delete

### Agent 5: Technical SEO Audit
Analyze codebase for comparison page optimization:

**Check For:**
- Schema markup readiness for comparison/review pages
- ProductComparison or Review schema opportunities
- Internal linking to/from comparison cornerstone pages
- Meta descriptions targeting comparison keywords
- Open Graph optimization for comparison pages
- Page speed issues on key pages
- Mobile experience for comparison tables

**Files to Check:**
- `src/app/compare/` (if exists) or opportunity to create
- `src/app/best-for/` (if exists) or opportunity to create
- `src/app/alternatives/` (if exists) or opportunity to create
- Blog post schema implementation

### Agent 6: Backlink Opportunity Research
Find where comparison/review content earns links:

**Research:**
- What content format earns links on G2, Capterra, TrustRadius?
- Real estate tech publications that cite comparison content
- Industry analyst coverage patterns
- Software review aggregators
- "Best [X] for real estate" roundup articles

**Identify:**
- Link-worthy content formats (original data, calculators, benchmarks)
- Publications that link to RE tech comparisons
- Content gaps competitors haven't filled

---

## Hard Relevance Gates (MANDATORY)

Before proposing ANY content topic, it MUST pass ALL THREE gates.

### Gate 1: Product Relevance
Every topic must pass ALL:
- [ ] Directly relates to lead response, qualification, or appointment booking
- [ ] Reader could naturally consider Prestyj as a solution
- [ ] CTA is organic, not forced

**If ANY fail → REJECT immediately**

### Gate 2: Buyer Stage
- [ ] Reader is actively evaluating solutions (not just learning about problems)
- [ ] Reader has budget authority or influences budget holder
- [ ] Content helps them make a decision, not understand the space

**If ANY fail → REJECT immediately**

### Gate 3: Scale Fit
- [ ] Content speaks to 50+ office operations
- [ ] Addresses multi-location coordination challenges
- [ ] Would be shared in an enterprise buying committee

**If ANY fail → REJECT immediately**

---

## Kill List (NEVER Create)

Immediately reject any topic that is:
- Regulatory/compliance content (FinCEN, fair housing, licensing)
- Individual agent productivity tips
- "What is [concept]" educational content
- Industry news without direct competitive angle
- Content for teams < 20 agents
- General AI trends/futures content
- Content where the CTA feels forced
- News that doesn't involve a competitor or buying decision

---

## Phase 2: The Strategist

After ALL Phase 1 agents complete, synthesize findings.

### Synthesis Process

1. **Collect all intelligence** from the 6 agents

2. **Apply the 3 Hard Gates** to every opportunity:
   - Gate 1: Product Relevance ✓ or ✗
   - Gate 2: Buyer Stage ✓ or ✗
   - Gate 3: Scale Fit ✓ or ✗
   - If ANY gate fails → drop the topic

3. **Categorize approved topics** by content format:

### Content Formats (Choose One Per Topic)

**Format A: Vs Competitor Pages** (`/compare/prestyj-vs-[competitor]`)
```
/compare/prestyj-vs-conversica
/compare/prestyj-vs-structurely
/compare/prestyj-vs-internal-isa-team
/compare/prestyj-vs-offshore-isa
```

**Format B: Best-For Pages** (`/best-for/[segment]`)
```
/best-for/real-estate-franchises
/best-for/regional-brokerage-networks
/best-for/pe-backed-platforms
/best-for/commercial-real-estate
```

**Format C: Alternative Pages** (`/alternatives/[competitor]-alternatives`)
```
/alternatives/conversica-alternatives
/alternatives/structurely-alternatives
/alternatives/internal-isa-alternatives
```

4. **Create THE PLAN** with categorized actions:

```
THE PLAN

COMPARISON PAGES (New)
Priority | Type | URL | Target Keyword | Competitor Weakness
---------|------|-----|----------------|---------------------
1        | Vs   | /compare/prestyj-vs-conversica | conversica vs alternatives | [specific weakness]

BEST-FOR PAGES (New)
Priority | URL | Target Segment | Key Pain Point
---------|-----|----------------|----------------
1        | /best-for/franchises | 50+ office franchises | Standardization across locations

ALTERNATIVE PAGES (New)
Priority | URL | Target Keyword | Primary Competitor
---------|-----|----------------|--------------------
1        | /alternatives/conversica | conversica alternatives real estate | Conversica

EXISTING CONTENT
Post | Current State | Action | Reason
-----|---------------|--------|--------
...  | Wrong audience | noindex | Attracts agents not VPs
...  | Outdated | Refresh | 2024 data

TECHNICAL FIXES
Issue | File(s) | Fix
------|---------|----
No comparison schema | src/app/compare/ | Add ProductComparison schema
```

5. **Present plan to user for approval** using AskUserQuestion:
   - Show top 3-5 highest priority comparison/vs pages
   - Confirm all pass the 3 gates
   - Ask which to proceed with

---

## Phase 3: Execution

### Comparison Page Structure (Max 150 Lines)

For `/compare/prestyj-vs-[competitor]`:

```mdx
---
title: "Prestyj vs [Competitor]: Enterprise Real Estate Lead Response Compared"
description: "Compare Prestyj and [Competitor] for 50+ office operations. See pricing, features, and which is best for your brokerage network."
date: "YYYY-MM-DD"
keywords:
  - prestyj vs [competitor]
  - [competitor] alternative
  - enterprise real estate lead response
---

## Quick Comparison

| Feature | Prestyj | [Competitor] |
|---------|---------|--------------|
| Built for RE | Yes | [No/Partial] |
| Multi-office | [Detail] | [Detail] |
| Response time | [Metric] | [Metric] |
| Pricing model | [Model] | [Model] |
| Integration | [Stack] | [Stack] |

## Who Should Choose Prestyj

- Franchise operations with 50+ offices
- [Specific use case]
- [Specific use case]

## Who Should Choose [Competitor]

- [Honest assessment]
- [Specific use case]

## [Competitor]'s Limitations at Scale

Based on reviews and enterprise feedback:
- [Specific limitation with source]
- [Specific limitation with source]
- [Specific limitation with source]

## Pricing Comparison

[Honest pricing comparison if available, or note that enterprise pricing requires consultation]

## Switching From [Competitor]

- Migration support available
- [Integration detail]
- [Timeline expectation]

---

**Ready to compare in detail?** [Talk to someone who switched from [Competitor]](/book-demo)
```

### Best-For Page Structure (Max 150 Lines)

For `/best-for/[segment]`:

```mdx
---
title: "AI Lead Response for [Segment]: Built for Your Scale"
description: "[Segment] need lead response that works across [X] offices. See how Prestyj handles [specific challenge]."
date: "YYYY-MM-DD"
keywords:
  - AI lead response [segment]
  - [segment] lead qualification
  - best lead response for [segment]
---

## The [Segment] Challenge

[2-3 sentences on specific pain point at this scale]

| Challenge | Why Generic Solutions Fail |
|-----------|---------------------------|
| [Challenge 1] | [Specific failure mode] |
| [Challenge 2] | [Specific failure mode] |
| [Challenge 3] | [Specific failure mode] |

## How Prestyj Addresses [Segment] Needs

### [Specific Feature 1]
[How it solves their specific problem]

### [Specific Feature 2]
[How it solves their specific problem]

## Proof Points

- "[Quote or stat from similar organization]"
- [Metric from similar deployment]

---

**See how [similar organization type] uses Prestyj** → [Book Demo](/book-demo)
```

### Alternative Page Structure (Max 100 Lines)

For `/alternatives/[competitor]-alternatives`:

```mdx
---
title: "[Competitor] Alternatives for Real Estate: 2026 Comparison"
description: "Looking for [Competitor] alternatives? Compare options for enterprise real estate lead response."
date: "YYYY-MM-DD"
keywords:
  - [competitor] alternatives
  - [competitor] alternatives real estate
  - best [competitor] alternative
---

## Why Teams Switch From [Competitor]

Based on G2/Capterra reviews and enterprise feedback:
- [Reason 1 with specifics]
- [Reason 2 with specifics]
- [Reason 3 with specifics]

## [Competitor] Alternatives Compared

| Solution | Best For | Limitation |
|----------|----------|------------|
| Prestyj | 50+ office RE operations | [Honest limitation] |
| [Alt 2] | [Use case] | [Limitation] |
| [Alt 3] | [Use case] | [Limitation] |

## Why Prestyj for Real Estate Enterprise

- Built specifically for real estate lead response
- [Specific differentiator]
- [Specific differentiator]

---

**Considering a switch?** [Talk to our migration team](/book-demo)
```

---

## Phase 4: Verification & Commit

### Step 1: Run Quality Checks

```bash
npm run typecheck
npm run lint
npm run build
```

Fix ALL errors before continuing.

### Step 2: Verify Content

- Confirm new pages appear in build output
- Verify comparison/best-for/alternatives routes work
- Check schema markup renders correctly

### Step 3: Commit

```bash
git add -A
git commit -m "SEO: Add [comparison/best-for/alternative] pages

- [List of pages created]
- [Technical fixes if any]

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
git push
```

---

## Output Summary

```
SEO OPERATION COMPLETE

Competitor Intelligence
- [Key competitor weakness identified]
- [Comparison keyword opportunity]

Pages Created
- /compare/prestyj-vs-X
- /best-for/X
- /alternatives/X-alternatives

Gate Verification
- All topics passed 3 hard gates
- [X] topics rejected by Gate 1 (product relevance)
- [X] topics rejected by Gate 2 (buyer stage)
- [X] topics rejected by Gate 3 (scale fit)

Technical Improvements
- [Schema/linking fixes]
```

---

## Important Reminders

- **BOFU Only**: Every page must help someone make a buying decision
- **Comparison First**: Default to vs/alternative content over educational
- **150 Line Max**: Scannable in 2-3 minutes, not comprehensive guides
- **Hard Gates**: If a topic fails ANY gate, reject it immediately
- **Enterprise Scale**: 50+ offices, VPs/Directors, $100K+ decisions
- **Kill List**: Check every topic against the kill list before proceeding
