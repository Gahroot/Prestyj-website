# Commercial Keyword Ranking Baseline & Monthly Tracker

> **Purpose:** Replace the vague "we rank nowhere" claim with a measurable, repeatable baseline. This doc records the current Google position for 19 priority commercial keywords so we can measure movement month over month.
>
> **Cadence:** Monthly. Re-run the position checks on the same keyword list, append a new dated snapshot under `data/keyword-rankings/`, and update the trend column here.
>
> **Baseline date:** 2026-06-04
> **Raw data:** [`data/keyword-rankings/2026-06-04/baseline.csv`](../data/keyword-rankings/2026-06-04/baseline.csv)

---

## Why this list

These 19 keywords were selected because:

1. **High commercial intent** — buyers searching them are evaluating or ready to buy (pricing, cost, comparison, service queries), not generic AI explainers.
2. **Each maps to an existing Prestyj page** — so a ranking gain converts to traffic on a money page, not a dead end.
3. **They mirror the queries already winning AI citations** — see `docs/traffic-growth-sprint.md` and `data/ai-citations/`. The same buyer-math topics that earn Bing/LLM citations are the ones we want to own in classic Google organic.

Keywords are grouped into six clusters so coverage gaps are visible at a glance: `lead-response`, `voice-agent`, `sales-agent`, `reactivation`, `answering-service`, `custom-agent`, and `batch-video`.

---

## Baseline snapshot — 2026-06-04

Position = where `prestyj.com` (or the listed target URL) appears in Google organic results, **approximate (±1–2 ranks)** because live search is personalized. "—" means not found within the depth checked (top 9–10 organic results) — it does **not** prove the page is unranked, only that it is not on page one. These are the honest starting numbers; most commercial terms are **not yet on page one**, which is exactly the gap this tracker exists to close.

| # | Keyword | Cluster | Target page | Position (2026-06-04) | Status |
|---:|---|---|---|:---:|---|
| 1 | AI lead response service | lead-response | `/blog/ai-lead-response-systems-2026` | — | Not in top 10 |
| 2 | instant lead response | lead-response | `/solutions/ai-lead-response` | — | Not in top 10 |
| 3 | AI voice agent pricing per minute | voice-agent | `/blog/ai-voice-agent-pricing-guide` | — | Not in top 10 |
| 4 | AI voice agent pricing guide | voice-agent | `/blog/ai-voice-agent-pricing-guide` | — | Not in top 10 |
| 5 | AI voice agent pricing for HVAC | voice-agent | `/blog/ai-voice-agent-pricing-for-hvac` | — | Not in top 10 |
| 6 | AI sales agent pricing guide 2026 | sales-agent | `/blog/ai-sales-agent-pricing-guide-2026` | — | Not in top 10 |
| 7 | AI sales agent vs human SDR cost | sales-agent | `/blog/ai-sales-agent-vs-human-sdr-cost` | — | Not in top 10 |
| 8 | AI cold outreach vs human | sales-agent | `/blog/ai-cold-outreach-vs-human-2026` | — | Not in top 10 |
| 9 | lead reactivation for home services | reactivation | `/blog/lead-reactivation-for-home-services` | — | Not in top 10 |
| 10 | database reactivation home services | reactivation | `/solutions/lead-reactivation` | — | Not in top 10 |
| 11 | annual savings contractors switching answering service to AI | answering-service | `/blog/annual-savings-contractors-switching-from-answering-services-to-ai-2026` | — | Not in top 10 |
| 12 | AI answering service for contractors | answering-service | `/blog/annual-savings-...-to-ai-2026` | — | Not in top 10 |
| 13 | custom AI agent vs off the shelf 3 year TCO | custom-agent | `/blog/custom-ai-agent-vs-off-the-shelf-3-year-tco` | — | Not in top 10 |
| 14 | AI sales agent monthly cost | sales-agent | `/blog/ai-sales-agent-pricing-guide-2026` | — | Not in top 10 |
| 15 | video ad testing pricing 2026 | batch-video | `/blog/video-ad-testing-pricing-2026` | — | Not in top 10 |
| 16 | voice AI vs call center cost multifamily property management | voice-agent | `/blog/voice-ai-vs-call-center-cost-multifamily-property-management-2026` | **~9** | In top 10 |
| 17 | batch video ads testing pricing | batch-video | `/best-for` | **~5** | In top 10 |
| 18 | batch video ads guide | batch-video | `/blog/batch-video-ads-for-solar-companies` | **~9** | In top 10 |
| 19 | batch video ads pricing | batch-video | `/blog/batch-video-ads-for-solar-companies` | **~3** | In top 10 |

**Baseline summary:** 4 of 19 keywords (21%) appear in the top 10; all four are in the `batch-video` and multifamily `voice-agent` clusters where Prestyj has the most differentiated, numbers-heavy content. The remaining 15 — covering lead response, voice-agent pricing, sales-agent economics, reactivation, and answering-service savings — are not yet on page one despite having dedicated published pages. Those are the priority targets.

---

## How the baseline was measured

- **Method:** Live commercial search for each keyword; recorded whether a `prestyj.com` URL surfaced within the top ~10 organic results and at what position.
- **Caveat:** Live search results are personalized and geo/time-sensitive, so treat positions as **directional, ±1–2 ranks**. The value is the *trend* across consistent monthly re-checks, not the absolute rank on any single day.
- **Recommended upgrade:** For precise, de-personalized tracking, wire one of these into the monthly run and store the output in the same `data/keyword-rankings/<date>/` folder:
  - **Google Search Console** → Performance → Search results → filter by each query, read **Average position**. This is the most trustworthy free source for queries we already get impressions on.
  - A rank-tracking API (DataForSEO, SerpApi, or similar) for keywords with zero impressions yet, run from a fixed US location with personalization off.

---

## Monthly process

1. Create a new folder `data/keyword-rankings/YYYY-MM-DD/`.
2. Copy `baseline.csv` forward and re-measure `observed_position` for every keyword (same list — do not drop keywords, or the trend breaks).
3. If using Search Console, also capture `impressions` and `average_position` columns for each query.
4. Append the new month's positions as a column in the table above and note movement (▲ improved, ▼ dropped, ＝ flat, ★ newly on page one).
5. Cross-reference with `data/ai-citations/latest-analysis.md` — surging AI-citation queries are leading indicators of organic ranking opportunities; add any breakout query to this list as a new tracked keyword.
6. For any keyword stuck at "—" for 60+ days with a published target page, treat it as a content-quality task: refresh the page using the title/structure patterns in `docs/ai-citation-playbook.md`, then re-submit via `npm run indexnow -- --url <url>`.

---

## Targets

| Horizon | Goal |
|---|---|
| 30 days | 6 of 19 in top 10 (add 2 from lead-response or sales-agent clusters). |
| 60 days | 9 of 19 in top 10; no priority keyword stuck at "—" without a refresh attempt. |
| 90 days | 12 of 19 in top 10; at least one keyword per cluster on page one. |

## Related docs

- [`docs/ai-citation-tracking.md`](./ai-citation-tracking.md) — weekly LLM/AI citation tracking (leading indicator for this list).
- [`docs/traffic-growth-sprint.md`](./traffic-growth-sprint.md) — content roadmap feeding these keywords.
- [`docs/ai-citation-playbook.md`](./ai-citation-playbook.md) — title patterns and page structure for ranking commercial pages.
