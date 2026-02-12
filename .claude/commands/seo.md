---
name: seo
description: Dynamic SEO command - research SERPs, identify high-leverage opportunities, and execute content creation for broader AI agent market
---

# Dynamic SEO Gap Analysis

This command discovers what content you're missing by first inventorying everything that exists, then finding gaps through web research. It produces a prioritized plan for approval - it does NOT create content.

**Core Principle**: Inventory first. Research second. Recommend only what's missing.

---

## Phase 1: Full Content Inventory (MANDATORY FIRST STEP)

Before any research, build a complete map of everything that exists. Launch 3 parallel agents.

### Agent 1: Page Inventory

Read and catalog every page route in the site. For each, record the URL path and what it targets (keyword, audience, intent).

**Scan these locations:**
- `src/app/**/page.tsx` - All app routes (compare, best-for, alternatives, solutions, blog, calculators, etc.)
- `src/lib/best-for/` - All best-for page data files and the index
- `src/lib/alternatives/` - All alternative page data files and the index
- `src/lib/compare/` - All comparison page data files (if data-driven)
- Any hub pages that aggregate content (check for `getAll*` functions)

**Output a table:**
```
EXISTING PAGES
Route                              | Type        | Target Keyword/Topic
/compare/prestyj-vs-X             | Comparison  | [what it targets]
/best-for/X                        | Best-For    | [what it targets]
/alternatives/X                    | Alternative | [what it targets]
/solutions/X                       | Solution    | [what it targets]
/blog/X                            | Blog        | [what it targets]
...                                | ...         | ...
```

### Agent 2: Blog Content Inventory

Read every file in `content/blog/*.mdx`. For each post, extract:
- Title and description from frontmatter
- Primary topic/keyword it targets
- Target audience (who is this for?)
- Content type (educational, comparison, guide, case study, etc.)
- Approximate word count
- Date (how fresh is it?)

**Output a table:**
```
EXISTING BLOG POSTS
File                               | Title                  | Target Keyword    | Audience        | Type         | Date
content/blog/X.mdx                | [Title]                | [keyword]         | [who]           | [type]       | [date]
...
```

### Agent 3: Site Architecture & Linking

Understand how content is structured and connected:
- What content types exist (blog, best-for, alternatives, compare, solutions)?
- What are the hub/index pages that link to child pages?
- What TypeScript interfaces/types define each content format?
- What industries/verticals are currently covered?
- What competitors are currently covered?

**Output a summary:**
```
CONTENT ARCHITECTURE
- Content types: [list]
- Industries covered: [list]
- Competitors covered: [list]
- Hub pages: [list with paths]
- Content templates/types: [list with file paths]
```

---

## Phase 2: Gap Discovery (3 Parallel Agents)

Using the inventory from Phase 1 as a baseline, research what's missing. Every agent MUST cross-reference findings against the Phase 1 inventory and exclude anything that already exists.

### Agent 1: SERP & Keyword Research

Search the web for keywords relevant to AI voice agents, AI receptionists, AI lead response, AI sales agents, and related terms across ALL industries (not just real estate).

**Research approach:**
- Search for core product keywords + industry combinations
- Look at "People Also Ask" and related searches
- Find comparison/vs queries that exist in search
- Find "best X for Y" queries
- Find "[competitor] alternative" queries
- Identify keywords where SERPs are thin, outdated, or low-quality

**CRITICAL: Cross-reference every finding against the Phase 1 inventory.** If a page or post already targets that keyword/topic, skip it entirely. Only surface genuinely new opportunities.

**Output format for each opportunity:**
```
KEYWORD: [keyword or topic]
ALREADY COVERED? No (checked against inventory)
SERP QUALITY: [Thin/Outdated/Competitive/No results]
CONTENT TYPE NEEDED: [Blog/Best-For/Alternative/Comparison/Solution/Landing Page]
NOTES: [Why this is an opportunity]
```

### Agent 2: Competitor & Market Research

Research what competitors and adjacent companies are ranking for that Prestyj is NOT covering. Do NOT use a hardcoded list - discover competitors dynamically by searching for terms like:
- "AI voice agent companies"
- "AI receptionist software"
- "AI lead response platforms"
- "AI sales calling tools"
- "AI appointment setting software"

For competitors found, research:
- What content are they ranking for?
- What keywords do they target that Prestyj doesn't?
- What industries do they serve that Prestyj hasn't created content for?
- Where are they weak or thin that Prestyj could beat?

**CRITICAL: Exclude competitors already covered in existing /compare/, /alternatives/ pages.** Only surface new competitors or new angles on covered competitors.

### Agent 3: Industry & Vertical Gaps

Research which industries have demand for AI voice/receptionist/lead response solutions but are NOT yet covered by existing content.

**Approach:**
- Search for "[industry] AI receptionist", "[industry] AI voice agent", etc.
- Identify industries with active search demand
- Check which industries already have dedicated pages (from Phase 1 inventory)
- Surface only uncovered industries with real demand

**CRITICAL: Skip any industry already covered in best-for pages, solutions pages, or blog content.**

---

## Phase 3: Scoring & Prioritization

After Phase 2 completes, score every opportunity that passed the duplicate filter.

### Relevance Gate (Every opportunity MUST pass)

- [ ] Relates to AI agents, voice AI, lead response, receptionist, sales automation, or adjacent topics
- [ ] A reader could naturally consider Prestyj as a solution
- [ ] Content would NOT duplicate the intent of any existing page or post
- [ ] Information is available to create accurate, honest content

**If ANY fail -> DROP the opportunity**

### Kill List (NEVER Recommend)

Drop any topic that is:
- Already covered by existing content (same keyword intent, even if different angle)
- Content for developers building AI agents (wrong audience - Prestyj serves businesses)
- Generic "what is AI" educational fluff with no buying connection
- Regulatory/compliance content
- Content requiring claims that can't be substantiated
- News commentary without lasting SEO value

### Leverage Score (0-100)

Score each surviving opportunity:

```
Traffic Potential (0-30): How much search demand exists?
Competition Gap  (0-25): How weak is the current SERP? Can we win?
Conversion Intent(0-20): How close to a buying decision is the searcher?
Effort Required  (0-15): How much work to create? (quick fixes score highest)
Time to Rank     (0-10): How fast could this realistically rank?
```

---

## Phase 4: Present The Plan

Present findings to the user using AskUserQuestion. Do NOT create any content.

### Format the plan as:

```
CONTENT INVENTORY SUMMARY
- Total pages: [X]
- Blog posts: [X]
- Compare pages: [X]
- Best-for pages: [X]
- Alternative pages: [X]
- Solution pages: [X]
- Industries covered: [list]
- Competitors covered: [list]

GAP ANALYSIS - TOP OPPORTUNITIES
(Ordered by leverage score, duplicates excluded)

#  | Score | Type        | Topic/Keyword              | Why It's a Gap
1  | 92    | Best-For    | [industry] AI receptionist | No coverage, high demand
2  | 87    | Alternative | [competitor] alternative   | Competitor not covered yet
3  | 85    | Blog        | [keyword]                  | Thin SERP, high intent
4  | 80    | Comparison  | Prestyj vs [competitor]    | Competitor gaining traction
5  | 75    | Solution    | [use case]                 | No landing page exists
...

QUICK WINS (Improvements to existing content)
#  | Score | File/Page                | Action Needed
1  | 88    | [file]                   | [what to fix]
2  | 82    | [file]                   | [what to fix]
...

CONTENT REFRESH CANDIDATES
#  | Score | File/Page                | Issue            | Recommendation
1  | 70    | [file]                   | Outdated stats   | Update with 2026 data
...
```

### Ask the user:
- Which opportunities to pursue
- Whether to proceed with quick wins
- Any priorities to adjust

**STOP HERE. Do not create content until the user approves specific items.**

---

## Important Reminders

1. **Inventory first, always.** Never recommend content without checking what exists.
2. **No hardcoded lists.** Discover competitors, industries, and keywords dynamically through research.
3. **Cross-reference everything.** Every recommendation must be checked against existing content.
4. **Multi-industry.** Prestyj serves multiple industries, not just real estate.
5. **Plan only.** This command produces recommendations. Content creation is a separate step.
6. **Be honest about gaps.** If the site already has good coverage in an area, say so.
7. **Fresh research.** Always do live web searches - don't rely on cached knowledge.
8. **Leverage scoring.** Prioritize by impact, not by what seems interesting.
