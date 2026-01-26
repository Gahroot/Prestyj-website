---
name: seo
description: Daily SEO intelligence operation - research, strategize, and execute content improvements targeting enterprise buyers
---

# Daily SEO Intelligence Operation

This command runs a comprehensive SEO operation designed to improve search rankings and attract high-ticket buyers (brokerages, enterprise clients who write $20K-$50K checks without hesitation). It researches, strategizes, and executes—all filtered through the lens of your ideal customer profile.

**Target ICP**: Brokerage owners, team leaders, enterprise real estate operations (NOT individual realtors or solopreneurs)

---

## Phase 1: Intelligence Gathering (10 Parallel Agents)

Launch ALL 10 agents simultaneously using the Task tool. Each agent should perform web research and analysis, then return actionable findings.

### Agent 1: Enterprise Buyer Psychology
Research what brokerage owners and managers actually search for:
- Pain points at scale (managing 50+ agents, handling 500+ leads/month)
- What language do enterprise RE buyers use?
- What problems keep them up at night?
- Search queries that indicate serious buyer intent
- Focus on buyers who view $20K-$50K as a reasonable investment

### Agent 2: Industry Trend Scout
Research what's trending in real estate tech RIGHT NOW (today's date):
- Breaking news in RE tech space
- New regulations or market shifts affecting brokerages
- Emerging technologies being discussed
- Timely content opportunities (newsjacking potential)
- What are RE tech publications writing about this week?

### Agent 3: Competitor Content Analysis
Research enterprise-focused RE SaaS competitors (like Ylopo, BoomTown, kvCORE, Real Geeks at enterprise tier):
- What content are they publishing?
- What topics do they cover that we don't?
- Content gaps we can own
- What messaging resonates with their enterprise audience?

### Agent 4: Competitor Backlink Analysis
Research where competitors earn authority:
- What type of content earns backlinks in RE tech?
- Which publications/sites link to competitors?
- Link-worthy content formats (studies, calculators, original data)
- PR and thought leadership opportunities

### Agent 5: High-Intent Keyword Research
Research keywords that signal serious enterprise buyer intent:
- "Brokerage lead management" > "AI for realtors"
- "Real estate team scaling" > "solo agent tools"
- Keywords with commercial/transactional intent
- Terms that indicate budget and authority to purchase
- Focus on keywords that attract decision-makers, not tire-kickers

### Agent 6: Long-tail Opportunity Mining
Research specific, low-competition queries:
- Detailed problems enterprise buyers Google
- Question-based queries ("how do brokerages handle...")
- Comparison queries at enterprise scale
- Niche problems with high conversion potential
- "Best [X] for large real estate teams" style queries

### Agent 7: SERP & Format Analysis
Research what's currently winning in search results:
- For target keywords, what content formats rank? (guides, calculators, case studies, comparisons)
- What's the content depth of top-ranking pages?
- Featured snippet opportunities
- People Also Ask questions to answer
- Content structure patterns that win

### Agent 8: Content Decay Detection
Analyze our existing blog posts in `content/blog/`:
- Which posts have outdated statistics or information?
- Posts with dates/years that need updating
- Broken internal or external links
- Content that references old market conditions
- Posts that could be refreshed with new data

### Agent 9: Audience Misalignment Audit
Analyze our existing content for ICP fit:
- Which posts attract solopreneurs instead of brokerages?
- Content that speaks to "agents" instead of "teams" or "brokerages"
- Posts with pricing/value props aimed at individuals
- Candidates for repositioning toward enterprise angle
- Content to potentially deprioritize or noindex

### Agent 10: Technical SEO Audit
Analyze the codebase for technical SEO issues:
- Check Core Web Vitals considerations in components
- Validate JSON-LD schema on all page types
- Find orphan content (pages with no internal links)
- Check internal linking structure and cornerstone coverage
- Verify sitemap includes all content
- Check for missing meta descriptions or titles
- Mobile/responsive issues
- Image optimization opportunities (next/image usage)

---

## Phase 2: The Strategist

After ALL Phase 1 agents complete, synthesize their findings into a strategic plan.

### Synthesis Process

1. **Collect all intelligence** from the 10 agents

2. **Filter through ICP lens** - For every opportunity ask:
   - "Will this attract someone who writes $20K-$50K checks without blinking?"
   - "Does this speak to brokerage owners or individual agents?"
   - "Is this enterprise-grade or solopreneur content?"

3. **Score opportunities** by:
   - **Impact**: How much will this move the needle on rankings/traffic?
   - **ICP Alignment**: How well does this attract enterprise buyers?
   - **Effort**: How much work to implement?
   - **Timing**: Is this timely/urgent?

4. **Create THE PLAN** with categorized actions:

```
📋 THE PLAN

🆕 CREATE (New Content)
Priority | Topic | Target Keyword | Format | ICP Rationale
---------|-------|----------------|--------|---------------
1        | ...   | ...            | ...    | ...

🔄 REPOSITION (Existing → Enterprise Angle)
Post | Current Angle | New Angle | Changes Needed
-----|---------------|-----------|---------------
...  | ...           | ...       | ...

🔃 REFRESH (Update for Freshness)
Post | Issues Found | Updates Needed
-----|--------------|----------------
...  | ...          | ...

🔗 INTERLINK (Cornerstone Linking)
From | To | Anchor Text Suggestion
-----|-----|------------------------
...  | ... | ...

🔧 TECHNICAL (Quick Wins)
Issue | File(s) | Fix
------|---------|----
...   | ...     | ...

⬇️ DEPRIORITIZE (Wrong Audience)
Post | Problem | Recommendation
-----|---------|---------------
...  | ...     | (noindex / remove internal links / leave as-is)
```

5. **Present plan to user for approval** using AskUserQuestion:
   - Show the top 3-5 highest priority actions
   - Ask which actions to proceed with
   - Allow user to adjust priorities or skip items

---

## Phase 3: Execution

After user approves the plan, execute the approved actions.

### For NEW Content Creation

Create blog posts in `content/blog/` with this exact format:

```mdx
---
title: "Your SEO-Optimized Title Here"
description: "Compelling meta description under 160 characters targeting enterprise buyers."
date: "YYYY-MM-DD"
author: "Prestyj Team"
keywords:
  - primary keyword
  - secondary keyword
  - long-tail variation
  - enterprise-focused term
image: /images/blog/slug-name.jpg
---

## TL;DR

[Executive summary - respect their time, they're busy running brokerages]

## Key Takeaways

- **Takeaway 1** - with specific data or stat
- **Takeaway 2** - actionable insight
- **Takeaway 3** - addresses enterprise scale

---

[Main content - written for decision-makers, not practitioners]
[Use "brokerage," "team," "operation" language, not "agent" or "realtor"]
[Include specific numbers, ROI framing, scale considerations]

---

## Frequently Asked Questions

### [Question targeting a long-tail keyword]?

[Answer with expertise, link to relevant content]

---

## Related Reading

- **[Related Post Title](/blog/slug)** — Brief description
- **[Another Related Post](/blog/other-slug)** — Brief description

---

*[CTA appropriate for enterprise buyers - demo, consultation, not "free trial"]*
```

### For Content REFRESH

Update existing MDX files:
1. Add or update the `updated` field in frontmatter: `updated: "YYYY-MM-DD"`
2. Update any outdated statistics with current data
3. Refresh year references (2024 → 2026, etc.)
4. Add enterprise-focused sections if repositioning
5. Strengthen internal links to cornerstone content
6. Ensure FAQ section targets current search queries

### For INTERLINKING

Add internal links following these rules:
- Link to cornerstone content from all related posts
- Use descriptive, keyword-rich anchor text (not "click here")
- Ensure new posts link to 2-3 existing relevant posts
- Update old posts to link to newer relevant content
- Create two-way linking where appropriate

### For TECHNICAL Fixes

Implement fixes directly in the codebase:
- Schema markup improvements in page components
- Meta tag additions/corrections
- Internal linking in navigation or content
- Any quick-win technical improvements identified

---

## Phase 4: Verification & Commit

### Step 1: Run Quality Checks

```bash
npm run typecheck
npm run lint
npm run build
```

Fix ALL errors before continuing. If build fails, fix issues and re-run.

### Step 2: Verify Content

- Confirm new blog posts appear in build output
- Verify sitemap will include new content (check `src/app/sitemap.ts` logic)
- Ensure no broken internal links were introduced

### Step 3: Review Changes

```bash
git status
git diff
```

Review all changes to ensure:
- Blog posts have correct frontmatter format
- No accidental deletions or overwrites
- Changes align with approved plan

### Step 4: Commit and Push

```bash
git add -A
git commit -m "SEO: [brief description of main changes]

- [New content created, if any]
- [Content refreshed, if any]
- [Technical improvements, if any]

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
git push
```

---

## Output Summary

After completion, provide a summary:

```
✅ SEO OPERATION COMPLETE

📊 Intelligence Gathered
- [Key insight 1]
- [Key insight 2]
- [Key insight 3]

📝 Actions Taken
- Created: [X] new posts
- Refreshed: [X] existing posts
- Interlinks added: [X]
- Technical fixes: [X]

🎯 Expected Impact
- [Primary keyword/topic now covered]
- [Enterprise positioning strengthened by...]
- [Technical improvement benefit]

📅 Recommended Next Run
- [Any time-sensitive follow-ups]
- [Content to monitor for performance]
```

---

## Important Notes

- **ICP Filter**: Every decision must pass the test: "Does this attract $50K check writers?"
- **Quality > Quantity**: One excellent enterprise-focused post beats five generic ones
- **Freshness Signals**: Always use current date, reference current year (2026)
- **Enterprise Language**: Use "brokerage," "team," "operation" — avoid "agent," "realtor" when possible
- **ROI Framing**: Enterprise buyers think in ROI and scale, not features
- **Internal Linking**: Every new post should link to and from existing cornerstone content
