# GSC Progress Tracker — judge the right metrics with realistic lag

> **Purpose:** Each month, record the four Google Search Console metrics that
> actually prove SEO progress and judge them **against the Phase 0 baseline with
> realistic lag**. Backlinks take **~6–10 weeks** to move rankings, so a flat
> ranking or branded-search line inside that window is **expected, not failure**.
> This doc stops us from over-reacting (killing work that just needs time) and
> from under-reacting (calling it "fine" when we're past the lag window and
> nothing moved).
>
> **Phase 0 baseline date:** 2026-06-04
> **Source of truth:** [`data/gsc/progress-history.json`](../data/gsc/progress-history.json)
> **Recorder:** `npm run seo:gsc-progress`

---

## The four metrics

|   # | Metric                         | Where to read it                                           | Auto or manual         | Realistic lag                                  |
| --: | ------------------------------ | ---------------------------------------------------------- | ---------------------- | ---------------------------------------------- |
|   1 | **Indexed-page count**         | GSC → **Indexing → Pages → "Indexed"**                     | manual (`--indexed`)   | days → weeks after publish/submit              |
|   2 | **Referring domains** (earned) | auto from `referring-domains-history.json`                 | **auto**               | links land first, _then_ rankings lag 6–10 wks |
|   3 | **Branded impressions**        | GSC → **Performance**, Query regex `(?i)prestyj`, last 28d | manual (`--branded-*`) | 2–10 days after Meta spend ramps               |
|   4 | **Target-keyword positions**   | auto from latest `data/keyword-rankings/<date>/` CSV       | **auto**               | 6–10 wks after the link/content push           |

Metrics 2 and 4 are derived automatically from the trackers that already exist
in this repo, so the only numbers you type each month are the two GSC-UI reads
(indexed pages + branded impressions).

---

## Phase 0 baseline (2026-06-04)

| Metric                                            |                                          Phase 0 value |
| ------------------------------------------------- | -----------------------------------------------------: |
| Indexed pages                                     |                               _pending first GSC pull_ |
| Sitemap submitted URLs (indexed-page denominator) |                                                **688** |
| Referring domains (earned)                        | **3** (`linkedin.com`, `oppy.pro`, `thelazyagent.com`) |
| Branded impressions (28d)                         |                               _pending first GSC pull_ |
| Target keywords in top 10                         |          **4 of 19** (avg position 6.5 of those found) |

The two `_pending_` fields are GSC-UI reads that require a verified property with
post-verification data (see [`branded-search-accelerant.md`](./branded-search-accelerant.md)
step 1). Fill them on the first monthly run; everything else is already captured.

The **688** denominator = the indexable URLs `src/app/sitemap.ts` declares
(56 static + 289 indexable blog posts + 39 alternatives + 12 solutions +
82 best-for + 44 compare + 17 free-ads + 21 locations + 102 stat + 26 industry).
Re-derive it whenever the sitemap changes and update `sitemap_submitted_urls` in
`progress-history.json` — indexed-page count is only meaningful against the
current submitted universe.

---

## Monthly process

1. **Read the two GSC-UI numbers:**
   - **Indexed pages:** GSC → Indexing → Pages → top "Indexed" number.
   - **Branded impressions:** GSC → Performance → Search results → date range
     **Last 28 days** → Query filter → **Custom (regex)** `(?i)prestyj` → record
     **Impressions**, **Clicks**, and **Average position**.
2. **Refresh the auto-derived inputs** (so metrics 2 and 4 are current):
   - Referring domains: run the backlinks snapshot + tracker
     (`npm run backlinks:snapshot …` then `npm run backlinks:track`) — see
     [`backlinks/earned-authority-tracking.md`](./backlinks/earned-authority-tracking.md).
   - Keyword positions: re-measure into a new `data/keyword-rankings/YYYY-MM-DD/`
     folder — see [`keyword-ranking-baseline.md`](./keyword-ranking-baseline.md).
3. **Record the snapshot:**
   ```bash
   npm run seo:gsc-progress -- \
     --indexed=<N> \
     --branded-impressions=<N> --branded-clicks=<N> --branded-position=<N.N>
   ```
   Preview first with `npm run seo:gsc-progress:dry -- --indexed=<N> …`.
4. **Commit** the updated `data/gsc/progress-history.json` so the trend survives.

The recorder prints the Δ vs Phase 0 for all four metrics, the indexed-page
coverage %, and a **lag-aware judgment** of whether flat rankings are expected
or overdue.

---

## How to judge each metric (with lag)

- **Indexed pages** — judge **every month**, no lag. Should climb toward 688 as
  pages are crawled. A stall or drop = a crawl/quality problem (check GSC's "Why
  pages aren't indexed" reasons), not a lag artifact.
- **Referring domains** — judge **every month**. This is the _leading_ input:
  links must land before rankings can move. Target is **5–15 new earned domains
  per month** (per the backlinks tracker). If this is flat, expect rankings to
  stay flat too — fix outreach, not the pages.
- **Branded impressions** — judge against **Meta spend**, lag **2–10 days**.
  Rising w/w (lagging spend) = the brand name is sticking. Flat while spend
  climbs = creative isn't landing the name.
- **Target-keyword positions** — judge on the **6–10 week lag** from the
  link/content push, **not** the month it shipped. The recorder reports weeks
  since Phase 0 and flags:
  - 🟡 **< 6 weeks:** inside the lag window — flat rankings are expected; judge
    indexing + referring domains instead.
  - 🟢 **6–10 weeks:** payoff window — early ranking/branded movement should start.
  - 🔵 **> 10 weeks:** past the window — movement is now expected; treat keywords
    still stuck at "—" as content-quality tasks (refresh + re-submit via IndexNow).

---

## Files

| Path                                 | Role                                                                        |
| ------------------------------------ | --------------------------------------------------------------------------- |
| `data/gsc/progress-history.json`     | Committed trend history (source of truth).                                  |
| `scripts/seo/record-gsc-progress.ts` | Records a snapshot, auto-derives 2 of 4 metrics, prints lag-aware judgment. |
| `docs/gsc-progress-tracker.md`       | This doc.                                                                   |

## Related docs

- [`keyword-ranking-baseline.md`](./keyword-ranking-baseline.md) — metric 4 detail (19 keywords).
- [`backlinks/earned-authority-tracking.md`](./backlinks/earned-authority-tracking.md) — metric 2 detail.
- [`branded-search-accelerant.md`](./branded-search-accelerant.md) — metric 3 detail + GSC verification.
- [`indexnow-publishing.md`](./indexnow-publishing.md) — feeds metric 1 (faster indexing).
