# AI Consultant Content Audit (2026-05-14)

> **Inputs:** `docs/ai-citation-playbook.md`, `prestyj.com_AISearchQueriesReport_5_10_2026.csv`, `prestyj.com_AIPageStatsReport_5_10_2026.csv` (per playbook §4).
>
> **Scope:** 18 posts matching `content/blog/ai-consultant-*.mdx` and `content/blog/ai-consulting-*.mdx`.
>
> **Citation status:** 0 of 18 posts received any AI citations. By comparison, the top 2 posts on the site (`ai-cold-outreach-vs-human-2026`, `ai-voice-agent-costs-compared`) account for 140 of ~272 citations (~52%).

---

## ⚠️ Pre-Audit Finding: Every Post Is `noindex: true`

Before any reframing argument lands, note this: **all 18 posts ship with `noindex: true` in frontmatter.** They are explicitly excluded from search-engine and AI-crawler indexing. This alone explains the zero-citation result regardless of content quality.

**Implication:** before / alongside any REWRITE work, the team must decide per post whether to flip `noindex` off. A REWRITE that stays `noindex: true` will still earn 0 citations. The audit below assumes the consultant series exists to either (a) become indexable and earn citations, or (b) stay as middle-funnel sales-enablement content linked from comparison pages.

---

## Methodology

For each post I captured:

1. **Word count** (raw word count of the MDX file).
2. **Frontmatter title.**
3. **Internal-link count** — files under `src/` and `content/` that reference the slug, excluding self-reference. Anything ≤ 1 is treated as "no meaningful inbound link".
4. **Buyer-intent score** of the title — whether the title matches a winning playbook pattern (`Hidden`, `vs`, `Real cost`, `Pricing breakdown`, `Best [X] for [vertical]`) or matches an anti-pattern (`Methodology`, `Deliverables`, `Project Timeline`, `What is X for [vertical]`).

**Bucketing rules (from the task brief):**

- **REWRITE** — has buyer-intent topic, wrong framing. Convert to a playbook-compliant format.
- **MERGE** — overlaps another post; consolidate.
- **KEEP AS-IS** — provably serves a sales / middle-funnel role (referenced by ≥ 2 landing-page or comparison-data files in `src/`).

Hard rule from brief: **no inbound links + no AI citations + no buyer intent in title → REWRITE candidate.**

---

## Summary Table

| #   | File (slug)                                      | Words | Inbound refs† | Buyer intent? | Bucket                                                                                                               |
| --- | ------------------------------------------------ | ----: | ------------: | ------------- | -------------------------------------------------------------------------------------------------------------------- |
| 1   | `ai-consultant-pricing-guide-2026`               |  3999 |        **10** | ✅ strong     | **KEEP AS-IS**                                                                                                       |
| 2   | `ai-consulting-engagement-models-explained-2026` |  2471 |         **6** | ⚠ weak        | **KEEP AS-IS**                                                                                                       |
| 3   | `ai-consultant-deliverables-2026`                |  2389 |         **5** | ❌ none       | **KEEP AS-IS**                                                                                                       |
| 4   | `ai-consultant-methodology-2026`                 |  2052 |         **5** | ❌ none       | **MERGE** → into `ai-consultant-project-timeline-2026`                                                               |
| 5   | `ai-consultant-project-timeline-2026`            |  2485 |             3 | ⚠ weak        | **REWRITE** (absorbs #4)                                                                                             |
| 6   | `ai-consulting-servicetitan-2026`                |  2758 |             0 | ✅ strong     | **REWRITE**                                                                                                          |
| 7   | `ai-consulting-dental-practices-2026`            |  2846 |             2 | ✅ strong     | **REWRITE**                                                                                                          |
| 8   | `ai-consulting-plumbing-companies-2026`          |  3592 |             0 | ✅ moderate   | **REWRITE**                                                                                                          |
| 9   | `ai-consultant-construction-2026`                |  1553 |             0 | ❌ none       | **REWRITE**                                                                                                          |
| 10  | `ai-consultant-home-inspectors-2026`             |  1368 |             0 | ❌ none       | **REWRITE**                                                                                                          |
| 11  | `ai-consultant-manufacturing-2026`               |  1483 |             0 | ❌ none       | **REWRITE**                                                                                                          |
| 12  | `ai-consultant-physical-therapy-2026`            |  1620 |             0 | ❌ none       | **REWRITE**                                                                                                          |
| 13  | `ai-consultant-property-restoration-2026`        |  1725 |             0 | ❌ none       | **REWRITE**                                                                                                          |
| 14  | `ai-consultant-wedding-venues-2026`              |  1637 |             0 | ❌ none       | **REWRITE**                                                                                                          |
| 15  | `ai-consultant-tree-service-2026`                |   893 |             0 | ❌ none       | **MERGE** → into a single "AI for storm-surge home-services" REWRITE (with #13 Property Restoration is the absorber) |
| 16  | `ai-consultant-locksmiths-2026`                  |   337 |             0 | ❌ none       | **MERGE** → into emergency/dispatch REWRITE (see #17, #18)                                                           |
| 17  | `ai-consultant-pool-service-2026`                |   335 |             0 | ❌ none       | **MERGE** → consolidate stub into vertical pricing REWRITE                                                           |
| 18  | `ai-consultant-towing-2026`                      |   330 |             0 | ❌ none       | **MERGE** → into emergency-dispatch REWRITE alongside #16                                                            |

† Excludes self-reference. Includes references from `src/lib/compare/data/*` (comparison pages) and other MDX files. Does **not** distinguish "navbar link" vs "one-line related-reading link" — that distinction is worth a follow-up pass before executing REWRITEs.

---

## Per-Post Rationale

### KEEP AS-IS (3 posts)

#### 1. `ai-consultant-pricing-guide-2026.mdx` — **KEEP AS-IS**

- **Inbound:** 10 references (3 `compare/data/*` files: `freelancer`, `ai-agency`, `full-time-employee`; 7 other blog posts).
- **Buyer intent:** Title already matches the playbook's "Pricing Guide" pattern with a year. This is a citation-magnet title that has not earned citations only because of `noindex`.
- **Decision:** Keep title and structure. Action item: flip `noindex` and verify it meets all 10 boxes in playbook §5 (TL;DR with $ range ✅, table early — needs verification, FAQ — needs verification).
- **Note:** This is the single most-linked post in the series. Do not touch its slug.

#### 2. `ai-consulting-engagement-models-explained-2026.mdx` — **KEEP AS-IS**

- **Inbound:** 6 references including 4 `compare/data/*` files (`ai-agency`, `big4-consulting`, `ai-implementation-partner`, `full-time-employee`).
- **Buyer intent:** Weak title ("Engagement Models Explained") but the post itself contains the retainer / project / hourly / outcome-based breakdown that comparison pages cite. Removing or renaming the slug would break 4 comparison-data files.
- **Decision:** Keep slug and content. Optionally tweak the H1 in-page to a more buyer-phrased headline (e.g., _"AI Consulting Pricing Models: Retainer vs Project vs Hourly vs Outcome-Based (2026)"_) without changing the slug. Not a REWRITE — title tweak only.

#### 3. `ai-consultant-deliverables-2026.mdx` — **KEEP AS-IS** (with a caveat)

- **Inbound:** 5 references including 3 `compare/data/*` files (`freelancer`, `ai-agency`, `ai-implementation-partner`).
- **Buyer intent:** ❌ "What to Expect and What to Demand" — methodology framing, the exact anti-pattern called out in playbook §3.
- **Decision:** Keep because the comparison pages depend on this slug for the "what you actually get" column. But the title and intro should be retuned to a buyer-protection frame: _"AI Consultant Deliverables: What's Included vs What Costs Extra (2026)"_ — same slug, skeptic framing, room for a "hidden line items" table that could earn citations once indexed.
- **Caveat:** If after re-checking, all 3 `compare/data` files link to it only via a single bullet, consider downgrading to MERGE into `ai-consultant-pricing-guide-2026` and updating the 3 comparison files. That's a Stage-2 call after seeing how the rewrites perform.

---

### MERGE (5 posts → consolidated into 2–3 stronger pieces)

#### 4. `ai-consultant-methodology-2026.mdx` — **MERGE into `ai-consultant-project-timeline-2026`**

- **Inbound:** 5 references, all from sibling MDX posts (none from `src/`, none from comparison data).
- **Why merge:** "Methodology" (Discovery → Design → Build → Test → Launch → Optimize) is the same content as "Project Timeline" (2–4 wk pilot, 4–8 wk standard, 8–16 wk enterprise) viewed from a different angle. Playbook §3 explicitly names "Methodology / consultant-framed posts (entire ai-consultant-\* series)" as a 0-citation format.
- **Action:** Fold the 6-phase methodology into the timeline post's phase-by-phase structure. Update the 5 referrer files to point to the timeline slug.

#### 15. `ai-consultant-tree-service-2026.mdx` — **MERGE into `ai-consultant-property-restoration-2026`**

- **Inbound:** 0.
- **Why merge:** Both are storm-surge / emergency-capacity narratives ("capture 50% more jobs during storm season" vs "scale infinitely during disasters"). Combining gives one strong "Storm-Surge AI" REWRITE with two vertical case-study sections.

#### 16, 17, 18. `ai-consultant-locksmiths-2026`, `ai-consultant-pool-service-2026`, `ai-consultant-towing-2026` — **MERGE**

- **Inbound:** 0 each.
- **Word count:** 337, 335, 330 — these are stubs.
- **Why merge:** Three thin posts, identical structural template (dispatch + scheduling + emergency triage + ROI bullet), zero inbound links, zero citations, `noindex: true`. No standalone reason to exist.
- **Action:** Consolidate into a single REWRITE — _"AI Dispatch & Scheduling Costs for Emergency Trades (2026): Locksmiths, Towing, Pool Service, Tree Service"_ — anchored on a cost/min and missed-call $-impact table per vertical. This becomes the citation target for the long-tail vertical queries.

---

### REWRITE (10 posts)

For each, the proposed title is built from a winning playbook pattern. Slug stays the same unless flagged.

#### 5. `ai-consultant-project-timeline-2026.mdx` — **REWRITE** (absorbs #4)

- **Inbound:** 3.
- **Why rewrite:** Topic has real buyer intent ("how long does an AI project take") but framed as a consultant essay. Convert to a comparison post.
- **Proposed title:** _"AI Implementation Timeline: 2-Week Pilot vs 8-Week Standard vs 16-Week Enterprise (2026 Benchmarks)"_
- **Pattern:** "X vs Y vs Z with numbers" + skeptic framing on "why most projects slip 30-50%".

#### 6. `ai-consulting-servicetitan-2026.mdx` — **REWRITE**

- **Inbound:** 0 (but title is already strong — "Why DIY Platforms Cost More in 2026").
- **Why rewrite:** Buyer intent is high (ServiceTitan integration is a hot query) but the post needs a comparison table in the first 30%, named competitors, and FAQ. Existing title is keepable.
- **Proposed title:** _"ServiceTitan AI Add-On vs Done-For-You Implementation: True Cost Comparison (2026)"_
- **Pattern:** `vs` + true-cost framing.

#### 7. `ai-consulting-dental-practices-2026.mdx` — **REWRITE**

- **Inbound:** 2.
- **Why rewrite:** Frontmatter description already has the right hook ("$150-300 per no-show, 60% no-show reduction") — the title buries it.
- **Proposed title:** _"AI Receptionist for Dental Practices: Real Cost vs No-Show Savings (2026, 7 Platforms Compared)"_
- **Pattern:** "Real cost / ROI of X in 2026" + "Best for [niche industry]".

#### 8. `ai-consulting-plumbing-companies-2026.mdx` — **REWRITE**

- **Inbound:** 0.
- **Why rewrite:** 3,592 words, plumbing emergency-dispatch is one of our top verticals (`ai-voice-agent-pricing-for-plumbing` earned 8 citations). This post is the un-cited shadow of that one.
- **Proposed title:** _"AI Emergency Dispatch for Plumbers: Hidden Costs of After-Hours Call Handling (2026)"_
- **Pattern:** "Hidden costs of X" + niche industry.
- **Watch:** Possible content overlap with `ai-voice-agent-pricing-for-plumbing`. Confirm differentiation before executing; otherwise convert to MERGE.

#### 9. `ai-consultant-construction-2026.mdx` — **REWRITE**

- **Inbound:** 0.
- **Proposed title:** _"AI Project Coordinator for Construction: Cost per Change Order Avoided (2026)"_
- **Pattern:** "Cost per [unit]" + niche industry.

#### 10. `ai-consultant-home-inspectors-2026.mdx` — **REWRITE**

- **Inbound:** 0.
- **Proposed title:** _"AI Scheduling for Home Inspectors: Cost vs 40% More Booked Inspections (2026)"_
- **Pattern:** Cost vs outcome + niche industry.

#### 11. `ai-consultant-manufacturing-2026.mdx` — **REWRITE**

- **Inbound:** 0.
- **Proposed title:** _"AI for Small-Run Manufacturing: Real Cost to Cut Downtime 30-50% (2026)"_
- **Pattern:** "Real cost of X" + concrete outcome %.

#### 12. `ai-consultant-physical-therapy-2026.mdx` — **REWRITE**

- **Inbound:** 0.
- **Proposed title:** _"AI Front Desk for Physical Therapy Clinics: Cost vs No-Show Reduction (2026)"_
- **Pattern:** "Real cost / ROI of X" + niche industry.

#### 13. `ai-consultant-property-restoration-2026.mdx` — **REWRITE** (absorbs #15 tree-service)

- **Inbound:** 0.
- **Proposed title:** _"AI for Storm-Surge Response: Cost to Capture 5x Lead Volume in 48 Hours (Restoration & Tree Service, 2026)"_
- **Pattern:** Cost per outcome + multi-vertical comparison.

#### 14. `ai-consultant-wedding-venues-2026.mdx` — **REWRITE**

- **Inbound:** 0.
- **Proposed title:** _"AI Venue Coordinator: Cost vs 50% More Booked Tours for Wedding Venues (2026)"_
- **Pattern:** Cost vs conversion outcome + niche industry.

---

## Aggregate Stats

| Bucket     | Count | % of series |
| ---------- | ----: | ----------: |
| KEEP AS-IS |     3 |       16.7% |
| MERGE      |     5 |       27.8% |
| REWRITE    |    10 |       55.6% |
| **Total**  |    18 |        100% |

Net post count after consolidation: **18 → 13** (3 kept + 8 standalone rewrites + 2 merged-rewrites). Five thin/redundant posts disappear.

---

## Recommended Sequencing (for follow-up tasks)

1. **Decide `noindex` policy.** Until this flips, no amount of rewriting earns citations. This is the gating decision.
2. **Tier-1 rewrites (highest expected citation lift):**
   - `ai-consulting-servicetitan-2026` (already-strong angle)
   - `ai-consulting-dental-practices-2026` (real $-numbers in description)
   - `ai-consulting-plumbing-companies-2026` (sibling of a proven citation winner)
   - `ai-consultant-project-timeline-2026` (absorb methodology)
3. **Tier-2 vertical rewrites:** the 6 remaining vertical posts. These compete for long-tail "AI for [vertical]" queries — lower per-post lift but cumulative volume.
4. **Stub merge:** locksmiths + towing + pool + tree → single emergency-trades pricing post.
5. **Title tweaks on KEEP AS-IS:** retune `ai-consulting-engagement-models-explained` and `ai-consultant-deliverables` titles for skeptic framing without touching slugs.
6. **Comparison-data sweep:** after merges, update the `src/lib/compare/data/*` files that reference the affected slugs (`freelancer`, `ai-agency`, `ai-implementation-partner`, `big4-consulting`, `full-time-employee`).

---

## Open Questions for the User

1. **`noindex: true` — was this intentional?** If yes, what's the criterion for flipping it? If no, the simplest immediate experiment is to flip it on the 3 KEEP AS-IS posts and re-pull citation data in 30 days before committing to the full REWRITE plan.
2. **Slug preservation:** are any of these posts referenced from external campaigns (paid ads, email, partners) where the slug must not change? The audit assumes only the internal references found via `grep` matter.
3. **Risk of cannibalization:** `ai-consulting-plumbing-companies-2026` rewrite may overlap with `ai-voice-agent-pricing-for-plumbing` (8 citations). Confirm angle differentiation before executing, or convert that REWRITE to a MERGE into the voice-agent post.
