# AI Citation Playbook

> **Purpose:** Reverse-engineered formula for writing blog posts that get cited by ChatGPT, Perplexity, Claude, and Gemini. Reference this doc for every new content task.
>
> **Cross-engine note (2026-06):** The formula below was validated on Bing/Copilot citation data, then ported to Google AI Overviews, Perplexity, and ChatGPT. The mechanics that win are engine-agnostic — see [Section 6: Porting the formula across engines](#6-porting-the-formula-across-engines-aio-perplexity-chatgpt). The single highest-leverage cross-engine element is the **Direct answer block** in the first 150 words (a 2–4 sentence paragraph with hard numbers and linked `/stat/<id>` permalinks), layered on top of the existing TL;DR.
>
> **Evidence base:** Two posts driving ~62% of all our AI citations:
>
> - [`ai-cold-outreach-vs-human-2026.mdx`](../content/blog/ai-cold-outreach-vs-human-2026.mdx) — **75 citations**
> - [`ai-voice-agent-costs-compared.mdx`](../content/blog/ai-voice-agent-costs-compared.mdx) — **65 citations**
>
> **Reports analyzed:** `prestyj.com_AISearchQueriesReport_5_10_2026.csv`, `prestyj.com_AIPageStatsReport_5_10_2026.csv`

---

## TL;DR — The Formula

LLMs cite posts that **reduce their work**. Give them:

1. A **comparison table in the first 30%** of the page (they grab tables verbatim).
2. **Real numbers per vertical** (avg ticket, no-show rate, cost/min, response %).
3. **Direct Q&A** matching how buyers phrase prompts (`"how much does X cost"`, `"hidden costs of X"`).
4. **Named competitors** with fair-but-honest comparisons.
5. A **number in both the URL slug and the title** (year, count, %, $).
6. **Skeptic / buyer-protection framing** (e.g., "what they don't tell you", "real cost", "hidden fees").

Avoid: generic explainers, consultant/methodology framing, posts with no tables or numbers.

---

## 1. Title Patterns That Win

Patterns ranked by citation lift, with the actual top-cited query and our best-performing example.

| Pattern                                                  | Best query (citations)                                                     | Our top example                                                  | Citations |
| -------------------------------------------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------- | --------- |
| **"Hidden costs of X"**                                  | `hidden costs of AI voice agents` (52)                                     | `AI Voice Agent Costs Compared: 7 Platforms Side-by-Side (2026)` | 65        |
| **"X vs Y" head-to-head with numbers**                   | `AI personalized cold outreach vs manually written emails differences` (8) | `AI Cold Outreach vs Human Email: The 2026 Comparison`           | 75        |
| **"X pricing breakdown beyond [obvious thing]"**         | `AI voice agent enterprise pricing breakdown beyond per minute rate` (6)   | `AI Voice Agent Pricing Guide`                                   | 20        |
| **"Best X for [specific industry] [specific use case]"** | `best AI appointment scheduling tools real estate leads` (12)              | `Best AI Tools Real Estate Teams 2026`                           | 18        |
| **"Real cost / ROI of X in 2026"**                       | `ROI instant AI lead response service companies` (18)                      | `AI Lead Response Systems 2026`                                  | 23        |
| **"X cost per [unit] at scale"**                         | `AI voice agent cost per minute at scale` (4)                              | `AI Voice Agent Pricing for Plumbing`                            | 8         |
| **"X for [niche industry]"**                             | `AI tools for roofing contractors lead response` (8)                       | `AI Voice Agent Pricing for Property Management`                 | 6         |

### Title formula

```
[Skeptic frame OR comparison] + [specific noun] + [number/year] + [(2026)]
```

**Good titles** (steal these):

- `Hidden Costs of [Product]: What Vendors Don't Quote (2026)`
- `[Product] vs [Alternative]: [N]-Point Comparison with Real Numbers`
- `[Product] Pricing Breakdown Beyond [Obvious Metric]`
- `Real Cost of [Product] in 2026: [$X]–[$Y] All-In`
- `Best [Product] for [Niche Industry]: [N] Platforms Compared`

**Bad titles** (avoid):

- `What is an AI Sales Agent?` — explainer, no buyer intent
- `How AI Is Changing Sales` — no number, no comparison
- `A Consultant's Guide to AI Adoption` — methodology framing (0 citations)

---

## 2. Required Structural Elements

Every AI-citation-magnet post **must** include all eight:

### 2.1 TL;DR with hard numbers (first ~150 words)

- Start with a 2–3 sentence `**TL;DR:**` block containing **at least one specific dollar range, percentage, or multiplier**.
- Example from the voice-agent post: "AI voice agent costs range from $0.15-0.31/minute (fully loaded) for DIY platforms to $500-3,000/month for managed solutions."

### 2.2 "Key Takeaways" bulleted list

- 5–7 bullets, each with a **specific number** (rate, dollar amount, time saved).
- LLMs grab these as quick-cite facts.

### 2.3 Comparison table within the first 30% of the page

- **Non-negotiable.** This is the single biggest citation driver.
- Format: 3–6 columns, 5–10 rows, every cell has a number or short concrete phrase.
- Use Markdown pipe tables — LLM crawlers parse them cleanly.
- Example structure that wins:

  | Metric                   | Option A | Option B | Difference |
  | ------------------------ | -------- | -------- | ---------- |
  | Cost per X               | $X       | $Y       | Nx cheaper |
  | Response/conversion rate | X%       | Y%       | Nx better  |

### 2.4 Per-vertical numbers

Every post must surface concrete benchmarks for at least 2–3 of these dimensions:

- Avg ticket / deal size by industry
- Response rate, close rate, no-show rate
- Cost per minute / lead / meeting / response
- Setup hours, maintenance hours/month, $/hour rate
- Volume tiers (1k / 5k / 10k / 50k units)

The cold-outreach post nails this with an "Industry Benchmarks" section and a "By Outreach Type" table. The voice-agent post nails this with a "Monthly cost examples" block under every platform.

### 2.5 Direct Q&A blocks (matching prompt phrasing)

- Bottom of post: `## FAQ` section with **8–10 questions phrased exactly as a buyer would type into ChatGPT**.
- Use buyer language: "how much does X cost", "is X legal", "what's the cheapest X", "can X replace Y".
- Each answer = 2–4 sentences with at least one number.

### 2.6 Named competitor mentions with fair-but-honest comparisons

- Name at least 3–5 real competitors by brand (Vapi, Retell, Bland, Synthflow, Air.ai, etc.).
- Give each its own subsection with: pricing, what's included, hidden costs, "best for".
- Be honest about where competitors win — LLMs detect and discount one-sided shilling.
- End each section with `**Best for:**` to make the trade-off scannable.

### 2.7 A number in the URL slug AND the title

- Slug must contain: `2026`, a count (`7-platforms`), a price (`under-500`), or a `vs` pivot.
- Title must contain the same or a different number.
- Bad: `/blog/ai-voice-agent-costs` → Good: `/blog/ai-voice-agent-costs-compared` (paired with "7 Platforms" in title).

### 2.8 Skeptic / buyer-protection framing

- Frame the post as **protecting the reader from being misled**.
- Required sections: "Hidden costs", "Common mistakes to avoid", "What vendors don't tell you", "Real cost vs advertised cost".
- The voice-agent post's #1 driver is literally the "Hidden costs" section — 52 citations from a single query.

---

## 3. What to AVOID (Zero-Citation Formats)

Every format below has produced **0 citations** in our data:

| Anti-pattern                                                            | Why it fails                                                              |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Generic "What is X?" explainers                                         | LLMs already explain. They cite **buyer-decision data**, not definitions. |
| Methodology / consultant-framed posts (entire `ai-consultant-*` series) | Reads like a process essay; no comparable numbers to extract.             |
| Posts without comparison tables                                         | Nothing structured for the LLM to lift.                                   |
| Posts without dollar amounts or percentages                             | LLMs need quotable specifics.                                             |
| Single-vendor "puff" posts                                              | Detected as marketing; deprioritized.                                     |
| Pure thought leadership / opinion                                       | No verifiable claims = no citation.                                       |
| Listicles without per-item numbers ("5 reasons to use AI")              | The reasons aren't quotable.                                              |
| Posts >4,000 words with no early table                                  | LLM context windows skim — front-load the data.                           |

**Hard rule:** if the post does not contain at least one Markdown table in the first ~800 words, do not publish it.

---

## 4. Citation Data Summary (as of 2026-05-10)

### Top-cited pages (`AIPageStatsReport`)

| Rank | Page                                         | Citations |
| ---- | -------------------------------------------- | --------: |
| 1    | `/blog/ai-cold-outreach-vs-human-2026`       |        75 |
| 2    | `/blog/ai-voice-agent-costs-compared`        |        65 |
| 3    | `/blog/ai-lead-response-systems-2026`        |        23 |
| 4    | `/blog/ai-sales-agent-vs-human-sdr-cost`     |        23 |
| 5    | `/blog/ai-voice-agent-pricing-guide`         |        20 |
| 6    | `/blog/ai-sales-agent-pricing-guide-2026`    |        19 |
| 7    | `/blog/best-ai-tools-real-estate-teams-2026` |        18 |
| 8    | `/blog/ai-lead-response-pricing-guide-2026`  |        14 |
| 9    | `/blog/ai-voice-agent-pricing-for-plumbing`  |         8 |
| 10   | `/blog/ai-sales-automation-pricing-guide`    |         7 |

**Pattern:** 9/10 top pages are either `vs`, `pricing`, `costs`, or `best for [vertical]`. None are explainers.

### Top-cited queries (`AISearchQueriesReport`)

| Rank | Grounding Query                                                             | Citations |
| ---- | --------------------------------------------------------------------------- | --------: |
| 1    | `hidden costs of AI voice agents`                                           |        52 |
| 2    | `ROI instant AI lead response service companies`                            |        18 |
| 3    | `best AI appointment scheduling tools real estate leads`                    |        12 |
| 4    | `AI tools for roofing contractors lead response`                            |         8 |
| 5    | `AI personalized cold outreach vs manually written emails differences`      |         8 |
| 6    | `Revscale AI agents ROI comparison other AI sales agents product companies` |         7 |
| 7    | `AI voice agent enterprise pricing breakdown beyond per minute rate`        |         6 |
| 8    | `AI voice agent cost per minute at scale`                                   |         4 |
| 9    | `dormant lead reactivation software real estate teams`                      |         3 |

**Pattern in queries:**

- "hidden", "ROI", "best for [niche]", "vs", "pricing breakdown beyond X", "cost per minute at scale" all repeat.
- Queries are **long-tail and specific** — average 6–10 words.
- Buyers ask LLMs the exact questions our titles answer.

---

## 5. Pre-Publish Checklist

Tick every box before opening a PR. If any box is unchecked, the post is not ready.

- [ ] **Title** contains a number or year AND uses one of the winning patterns (`Hidden`, `vs`, `Real cost`, `Best for [vertical]`, `Pricing breakdown beyond X`).
- [ ] **URL slug** contains a number, year, or `vs` pivot.
- [ ] **TL;DR** appears in the first 150 words and contains at least one dollar range or percentage.
- [ ] **Key Takeaways** bulleted list with 5–7 number-bearing bullets immediately follows the intro.
- [ ] **First comparison table** appears within the first 30% of the post (typically before scroll position 800 words).
- [ ] **Per-vertical / per-volume numbers** appear in at least 3 sections (e.g., 1k / 5k / 10k / 50k cost tiers).
- [ ] **Named competitors** — at least 3–5 real brands compared with their own subsections, each ending in `**Best for:**`.
- [ ] **Skeptic framing section** present (`Hidden costs`, `Common mistakes`, or `What vendors don't tell you`).
- [ ] **FAQ block** at the bottom with 8–10 questions phrased the way a buyer would type them into ChatGPT.
- [ ] **Internal links** to 3–5 related Prestyj posts in a `## Related Reading` section + a `[Book a demo](/book-demo)` CTA in the closing line.

---

## 6. Porting the formula across engines (AIO, Perplexity, ChatGPT)

The Bing/Copilot-validated formula transfers to Google AI Overviews, Perplexity, and ChatGPT because all four extract the same things: a self-contained answer near the top, a liftable table, and verifiable numbers. The differences are in *how* each engine selects and renders, so the formula gets three small additions rather than a rewrite.

### What's the same on every engine

- **Direct answer in the first 150 words.** All four reward a 2–4 sentence answer paragraph that resolves the query before the reader scrolls. Keep the existing `**TL;DR:**` block AND add a `**Direct answer:**` paragraph immediately after it that restates the headline numbers in prose and links the `/stat/<id>` permalinks behind each number.
- **Comparison table in the first 30%.** Still the biggest single driver. Markdown pipe tables, every cell numeric.
- **Hard numbers with a citable source.** Each number in the Direct answer links to its `/stat/<id>` permalink so the engine has a discrete, quotable URL per claim.
- **Buyer-phrased FAQ** at the bottom feeding `FAQPage` JSON-LD (already auto-extracted by `src/app/blog/[slug]/page.tsx`).

### Engine-specific tuning

| Engine | How it selects | What to add on top of the base formula |
| --- | --- | --- |
| **Google AI Overviews** | Leans on Search ranking + passage extraction; rewards FAQ/HowTo schema and clean passage boundaries. | Keep the `## Key Takeaways` list and `## FAQ` (both already feed schema). Make the Direct answer a single self-contained paragraph — AIO lifts one passage, so it must stand alone without the sentence before it. |
| **Perplexity** | Retrieves a handful of sources and quotes short spans with inline citations; favors pages with discrete, numeric, attributable claims. | Link every number to a `/stat/<id>` permalink — Perplexity prefers citing a page that *is* the claim. The `/stat/*`, `/data`, and `/llms.txt` surfaces exist for exactly this. |
| **ChatGPT (search + browse)** | Uses Bing-style retrieval plus its own ranker; rewards named entities and tables it can reformat. | Name competitors with 2026 pricing (already a rule) and keep tables 3–6 columns so they survive reformatting into ChatGPT's answer. |

### The Direct answer block (copy this shape)

Insert immediately after the `**TL;DR:**` block, inside the first 150 words:

```md
**Direct answer:** [One-sentence resolution with the headline number]. The citable
benchmarks are [$X–$Y per unit](/stat/<id-1>), [N% something](/stat/<id-2>), and
[$Z setup](/stat/<id-3>). For the commercial path, see [Offer Hub](/offer-page) or
[book a demo](/book-demo).
```

Rules:

- 2–4 sentences, self-contained, no pronoun referring to an earlier sentence.
- Every number links to a real `/stat/<id>` permalink whose `value`/`description` matches the number exactly (grep `src/lib/statistics-data.ts` before linking — divergent numbers across pages destroy credibility per `data-sources.md`).
- End with one commercial link + `/book-demo`.

### Rollout: apply to top commercial posts as authority grows

Don't retrofit the whole library at once. Order by current citation volume (from `data/ai-citations/latest-analysis.md`) so the pages already ranking get the cross-engine lift first:

1. Highest-cited commercial posts first (e.g. `video-ad-testing-pricing-2026`, `ai-voice-agent-costs-compared`, the `ai-sales-agent-*`/`sales-ai-agent-*` cost posts, `custom-ai-agent-vs-off-the-shelf-3-year-tco`, `lead-reactivation-for-home-services`).
2. Then surging queries with a clear canonical page (see "Surging queries by priority offer").
3. Then net-new query gaps — ship a dedicated post rather than retrofitting.

Re-pull the AI search reports ~30 days after each batch and confirm the retrofitted pages hold or grow citations across all three engines before expanding the rollout.

---

## Appendix: Anatomy of the Two Top Posts

### `ai-cold-outreach-vs-human-2026` (75 citations)

- **Title pattern:** `vs` + year
- **First table location:** ~line 95 (~15% into the post)
- **Total tables:** 7
- **FAQ questions:** 10
- **Named competitors:** referenced indirectly via category (SaaS, agencies, etc.) plus internal linking — main hook is the head-to-head numbers
- **Skeptic section:** "Common Mistakes to Avoid" (5 mistakes)

### `ai-voice-agent-costs-compared` (65 citations)

- **Title pattern:** `Hidden costs` framing + count + year
- **First table location:** ~line 88 (~15% into the post)
- **Total tables:** 13
- **FAQ questions:** 6 (buyer-phrased: "What's the cheapest...", "Why are managed platforms sometimes cheaper...", "Can I switch...", "How much should I budget...")
- **Named competitors:** Vapi, Retell, Bland, Synthflow, Air.ai, CallHippo, RingCentral (7)
- **Skeptic section:** "The Hidden Costs Everyone Underestimates" (5 hidden costs) + "Common Pricing Mistakes to Avoid" (5 mistakes)

**Common DNA:** both lead with a `**TL;DR:**` containing dollar ranges, ship a comparison table early, name specific numbers per tier/vertical, end with buyer-phrased FAQs, and frame the reader as a skeptic being protected from vendor spin.
