# Daily Organic Growth Routine — What the Best Agencies Do (June 2026)

This is the rationale behind the `/seo-daily` command. It distills what top-tier
SEO/GEO agencies execute day-to-day in 2026 and maps each move onto Prestyj's
**existing** tooling so the work is real, not generic advice.

> Bottom line: in 2026 the best agencies run **SEO as operations** — a daily
> rhythm of monitor → ship differentiated content → build off-site authority →
> optimize for AI citation → measure. They protect winners, diversify, and
> **human-gate** every publish. Mass publishing on a low-authority domain is the
> exact footprint Google's 2026 scaled-content update penalizes.

---

## The 6 things elite agencies do daily

### 1. Triage & technical health (≈15 min)
Catch regressions the same day they happen. Review crawl errors, indexation
drops, Core Web Vitals, broken internal links, robots/sitemap state, and any
ranking/citation movement on priority pages. **Leading indicators weekly,
lagging monthly** — but a daily sweep catches a botched deploy before it costs
weeks of traffic.

### 2. Content velocity — quality over volume (the engine)
Ship **one** deeply-differentiated, human-reviewed asset per day at most (the
seo-bot caps 2 blog drafts / rolling 7 days). The formula that is *already
proven* in Prestyj's own Bing AI citation data (see
`docs/traffic-growth-sprint.md`):

1. Direct answer in the first **150 words**.
2. **Hard numbers** in title, slug, TL;DR, bullets, first table.
3. Comparison tables early.
4. **Skeptic framing** — hidden costs, what vendors omit, real vs headline cost.
5. Internal links to permanent `/stat/*` pages + commercial pages (2–4 + 3–5).
6. Vertical-specific economics (HVAC, roofing, real estate, etc.).

Buyer-math topics beat AI novelty: cost, ROI, response rate, savings, "which is
cheaper for *my* industry."

### 3. On-page GEO / AI-citation optimization
- Front-load a **40–60 word bolded TL;DR** + direct answer. ~44% of AI
  citations come from the first 30% of a page.
- Keep the **year visible** ("2026") — lifts citation ~30%.
- Structure headers as **exact questions** AI gets asked.
- **Quarterly refresh of the top ~40 cited posts**: bump `updated`, refresh
  stats, re-verify claims. This is where the citations already live.
- **Original data ≈ 3× citation rate** — route every claim through `/stat/<id>`.
- **Never gate the canonical answer.** Lead magnets are fine; the best answer
  must be open or AI can't read or cite it.

### 4. Off-site authority (the biggest gap)
Research is blunt: AI weighs brand-owned pages **down** and scans for
**agreement across independent sources** before citing. Branded web mentions
correlate **3× more** with AI-Overview visibility than backlink counts. This is
where Prestyj is thinnest, so it gets daily effort even though results mature
over 60–120 days.

- **Digital PR** (the #1 2026 link tactic, 89.6% of pros call it most effective):
  data-led campaigns (42% of activity), expert commentary, reactive newsjacking,
  interactive tools. One strong asset earns 20–50 DR-60+ links and compounds.
- **Review sites** — G2, Capterra (most-cited software sources by ChatGPT /
  Perplexity / AI Overviews).
- **Reddit** — ~46% of Perplexity citations come from Reddit. Contribute
  genuinely in r/HVAC, r/Plumbing, r/realtors, r/smallbusiness, r/msp. Aged,
  real accounts only.
- **Quora** — answer the exact grounding queries in your own voice with
  first-party data.
- **YouTube** — AI Mode weights video; durable channel citations.
- **Consistent entity data** — same name, claims, numbers everywhere.

### 5. AI-citation monitoring
- Re-pull **Bing Webmaster AI Page Stats + AI Search Queries** regularly; track
  total citations, distinct cited pages (diversification), new grounding queries.
- **Manually probe the 20 most important prompts** in ChatGPT, Perplexity, and
  Google AI Overviews; note where a competitor is cited and you are not.
  Platforms differ (~11% overlap ChatGPT↔Perplexity) — track each separately.
- Maintain a GA4 "AI Traffic" channel (regex:
  `chatgpt\.com|perplexity\.ai|claude\.ai|gemini\.google\.com|copilot\.microsoft\.com|openai\.com`).

### 6. Indexation push + daily report
- **Re-ping IndexNow** after any refresh or new post so Bing/Copilot re-crawl fast.
- Write a daily report (what shipped, what's blocked, tomorrow's top 3) and a
  rolling **human-action queue** for the work that genuinely needs a person
  (Reddit posts, G2 reviews, PR relationship emails).

---

## Why these and not others
- **No mass programmatic publishing.** Low-authority domain + rapid publishing =
  the exact penalized footprint. Quality + differentiation + internal-link depth.
- **No bought links / PBNs.** Digital PR earns editorial links that are durable
  and also feed AI training data.
- **No keyword stuffing.** It *reduces* AI visibility; clarity + cited
  statistics raise it.
- **Protect winners, then diversify.** ~40 of 329 posts pull citations and the
  top 6 drive over half — concentration is the real risk.

## Existing tooling this routine drives
| Move | Script / file |
|---|---|
| Citation-surface audit | `npm run seo:check-citation-surfaces` |
| Near-duplicate detection | `npm run seo:find-duplicates` |
| AI-citation analysis | `npm run analyze:citations` |
| GSC rank progress | `npm run seo:gsc-progress` |
| Referring-domain tracking | `npm run backlinks:track` |
| Backlink verification | `npm run backlinks:verify` |
| IndexNow changed-URL push | `npm run indexnow:diff` |
| Content drafting (human-gated) | `npm run seo-bot -- daily` |
| Pitch drafting | `tsx scripts/backlinks/pitch-dataset.ts` |
| Playbooks | `docs/geo-ai-citation-playbook.md`, `docs/traffic-growth-sprint.md`, `docs/backlinks/pitch-templates.md` |

## Source basis
Synthesis of 2025–2026 research: SEO-operations framework (go/organic), GEO
guides (Enrich Labs / Princeton-KDD GEO study, Profound, SEMrush, Ahrefs,
BrightEdge, Brandlink), digital-PR link-building research (Blue Tree Digital,
Siege Media), and Prestyj's own citation + GSC data. Figures are directional;
re-validate quarterly as engines shift.
