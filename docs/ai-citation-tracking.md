# AI Citation Tracking Workflow

> **Purpose:** Track how often LLMs (ChatGPT, Perplexity, Claude, Gemini) cite Prestyj content week over week, surface emerging queries, and turn the trend data into a concrete content roadmap.
>
> **Cadence:** Weekly. Drop the latest exports, run one command, read `data/ai-citations/latest-analysis.md`, act on the recommendations.

---

## 1. Export the weekly CSVs

Google Search Console (or the equivalent AI citation source you're using):

1. Open Search Console → property `prestyj.com`.
2. Open the **AI search performance** report (a.k.a. "Search appearance → AI Overviews / grounding").
3. Export two CSVs for the **same date range** (typically a rolling 7- or 28-day window — keep the window consistent across snapshots):
   - **Queries report** — columns: `Grounding Query`, `Citations`
   - **Pages report** — columns: `Page`, `Citations`
4. Default download names look like:
   - `prestyj.com_AISearchQueriesReport_<m>_<d>_<yyyy>.csv`
   - `prestyj.com_AIPageStatsReport_<m>_<d>_<yyyy>.csv`

> If you switch tools (e.g. Perplexity dashboard, Profound, Otterly), normalize the export into the same two-column shape before dropping it in — see [Section 2](#2-drop-the-csvs-into-the-archive).

---

## 2. Drop the CSVs into the archive

All snapshots live under `data/ai-citations/`. Each weekly snapshot is a folder named with the **export date** in `YYYY-MM-DD` format:

```
data/ai-citations/
├── 2026-05-10/
│   ├── queries.csv      ← AI Search Queries report
│   └── pages.csv        ← AI Page Stats report
├── 2026-05-17/
│   ├── queries.csv
│   └── pages.csv
└── latest-analysis.md   ← generated; do not edit by hand
```

**Conventions:**

- Folder name = the date you ran the export, not the date range start. Sorting is alphabetical, so `YYYY-MM-DD` keeps order correct.
- Filenames must be `queries.csv` and `pages.csv`. The script also accepts the raw Search Console filenames (anything matching `AISearchQueriesReport*.csv` / `AIPageStatsReport*.csv`) as a fallback, but normalized names are preferred.
- CSVs **are committed** to the repo (allowlisted in `.gitignore`). The data is aggregate query strings + citation counts — no PII — and we want the history under version control so we can diff trends across months.
- If a future export ever contains anything sensitive (user IDs, raw URLs with tokens, etc.), scrub before committing.

---

## 3. Run the analyzer

```bash
npm run analyze:citations
```

What it does:

1. Reads every `data/ai-citations/YYYY-MM-DD/` folder.
2. Parses `queries.csv` + `pages.csv` from each.
3. Compares the most recent snapshot against the one immediately prior.
4. Writes `data/ai-citations/latest-analysis.md` containing:
   - **Headline numbers** — total query citations, total page citations, WoW Δ.
   - **Top 10 queries** and **Top 10 pages** by citations (with prior-week comparison).
   - **New queries** — anything that appeared this week and was zero last week.
   - **Surging queries** — >50% WoW citation growth.
   - **Decaying queries** — >50% WoW citation drop.
   - **Citations per offer category** — queries + pages bucketed into:
     `voice agent`, `lead response`, `receptionist`, `social`, `video ads`, `creative testing`, `custom agent`, `lead reactivation` (plus `uncategorized` for anything that didn't match).
   - **Recommendations** — automated content tasks triggered by the trends.
5. Prints a one-screen summary to stdout.

Re-run any time — the script is idempotent and overwrites `latest-analysis.md`.

---

## 4. Act on the output

The analyzer fires off four kinds of recommendations. Each maps to a concrete content task:

| Trigger                          | Threshold                                                | Content task                                                                                                                                                                                                                                |
| -------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Breakout query**               | A single query crosses **30+ citations** in one period   | **Write 3–4 satellite posts** around it — long-tail variants (per-vertical, per-price-tier), "hidden costs of…" framing, comparison angles. The mother post is doing the work; satellites internal-link to it and capture adjacent prompts. |
| **Surging query (>50% WoW)**     | Query already had ≥1 citation, now grew >50%, current ≥5 | **Ship a dedicated post** (or expand the closest existing one). Use the [AI Citation Playbook](./ai-citation-playbook.md) title formula. Move quickly — surging queries get claimed by competitors fast.                                    |
| **Net-new query (≥3 citations)** | Zero last week, ≥3 this week                             | **Claim before competitors do.** Add a section to an existing post that matches the category, or stand up a focused new post if no good home exists.                                                                                        |
| **Decay alert**                  | High-volume query (≥10 last week) dropped >50%           | **Refresh the supporting post.** Update the year in the title/slug, refresh prices and comparison tables, re-export to IndexNow (`npm run indexnow -- --url <url>`).                                                                        |
| **Coverage gap**                 | An offer category is <5% of total citations              | **Audit that category's pages.** Are there comparison tables in the first 30%? Real numbers per vertical? Named competitors? Use the playbook checklist.                                                                                    |

### Suggested weekly ritual (15 minutes)

1. `npm run analyze:citations`
2. Open `data/ai-citations/latest-analysis.md`.
3. Skim the **Headline numbers** — is total trending up?
4. Read **Recommendations** top-to-bottom. For each, file a task (or do it now if it's <30 min).
5. For surging or net-new queries: spin a new entry in your content backlog using the title patterns from [`docs/ai-citation-playbook.md`](./ai-citation-playbook.md#1-title-patterns-that-win).
6. For decay alerts: open the supporting post, bump the year, refresh the comparison table, ship.
7. Commit the new snapshot folder + updated `latest-analysis.md` together so the history stays in lockstep.

---

## 5. Extending the workflow

- **Adding a new offer category:** edit `CATEGORY_RULES` in `scripts/analyze-ai-citations.ts`. Each rule is `{ category, patterns: RegExp[] }`. First match wins, so put more specific categories first.
- **Changing thresholds:** adjust the constants in `buildRecommendations` (30 for breakouts, 0.5 for surge/decay, 0.05 for coverage gap).
- **Adding more output sections:** extend `renderReport` — it's a plain string-builder, easy to add headings/tables.

---

## Related docs

- [`docs/ai-citation-playbook.md`](./ai-citation-playbook.md) — title patterns, required structural elements, and the reverse-engineered formula for citation-magnet posts.
