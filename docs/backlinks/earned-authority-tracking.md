# Earned Authority Tracking

> **Purpose:** Track **real earned referring domains** over time — links other
> people gave us — instead of inflating the number with self-made placements
> (directories, GitHub repos, gists, Wikidata, our own properties).
>
> **Why this exists:** `data/backlinks/inventory.json` lists 100+ "live"
> self-made placements, but search engines only attribute a handful of them as
> referring domains, and most carry little authority. This workflow measures the
> metric that actually matters for ranking: **unique referring domains we did
> not create ourselves, trended over time.**

---

## Baseline (2026-06-04)

Only **3 real referring domains** are visible in search-engine link reports:

| Domain             | Notes  |
| ------------------ | ------ |
| `linkedin.com`     | Earned |
| `oppy.pro`         | Earned |
| `thelazyagent.com` | Earned |

Everything else in `inventory.json` is **self-made** and is excluded from the
earned count automatically (see [Classification](#classification)).

The committed source of truth is
[`data/backlinks/referring-domains-history.json`](../../data/backlinks/referring-domains-history.json).
It is JSON (not gitignored) so the trend survives — the raw `*.csv` exports are
gitignored and disposable.

---

## 1. Pick a free data source

Any one of these works. Pick whichever you can export from; you can switch tools
between snapshots (the `source` column is recorded per snapshot).

### Option A — Google Search Console Links report (free, always available)

1. Search Console → property `prestyj.com` → **Links** (left sidebar).
2. Under **Top linking sites**, click **More**.
3. Click **Export** → **CSV** (or Google Sheets → download CSV).
4. Save it to `data/backlinks/gsc-links-export-YYYY-MM-DD.csv`.

GSC's "linking sites" report is already a **per-domain** list, which is exactly
what we want for referring-domain counts.

### Option B — Ahrefs Webmaster Tools (free tier)

1. Create a free [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools)
   account and verify ownership of `prestyj.com` (same Search Console / DNS
   verification you already have).
2. **Site Explorer → Referring domains** → **Export**.
3. Save to `data/backlinks/ahrefs-export-YYYY-MM-DD.csv`. AWT also gives a
   Domain Rating column, which flows through to `dr_estimate`.

### Option C — Semrush (free tier)

1. Free Semrush account → **Backlink Analytics** → enter `prestyj.com`.
2. **Referring Domains** tab → **Export** (free tier allows a limited number of
   exports/day — one per snapshot is enough).
3. Save to `data/backlinks/semrush-export-YYYY-MM-DD.csv`.

> The free tiers cap rows/exports per day. For a site this size, one referring-
> domains export per snapshot is well within the limit.

---

## 2. Normalize the export

```bash
npm run backlinks:snapshot data/backlinks/<tool>-export-YYYY-MM-DD.csv
```

This writes `data/backlinks/snapshot-YYYY-MM-DD.csv` and
`data/backlinks/snapshot-latest.csv` in the canonical
`domain,last_seen,referring_urls,dr_estimate,dofollow_pct,source` shape. The
parser auto-detects Bing / GSC / Ahrefs / Semrush column layouts.

---

## 3. Record the trend point

```bash
npm run backlinks:track          # writes a snapshot into the history file
npm run backlinks:track:dry      # preview the classification, write nothing
```

What it does:

1. Reads `snapshot-latest.csv` (override with `--csv=PATH`).
2. Classifies every referring domain (see below).
3. Appends/updates **today's** snapshot in
   `referring-domains-history.json` and prints the earned-count trend with a
   sparkline.

Commit the updated `referring-domains-history.json` so the history stays under
version control.

---

## Classification

A referring domain counts as **earned** only when it is neither of these:

- **Owned** — listed in `owned_domains` in `referring-domains-history.json`
  (`prestyj.com`, `github.com`, `gist.github.com`, `gahroot.github.io`,
  `wikidata.org`, `npmjs.com`).
- **Self-made** — its hostname appears anywhere in
  `data/backlinks/inventory.json` (every directory, press target, awesome-list,
  resource page, gist, package, and redistribution host we submitted ourselves).

This is intentionally conservative: if we pitched it, submitted it, or host it,
it does **not** count as earned authority. That keeps the number honest.

> **Edge case — editorial wins on a pitched domain.** If a press/resource target
> in `inventory.json` later publishes a genuine editorial link (e.g. Inman runs
> a story), it will be filtered out as self-made. If you want to count it as a
> real earned win, remove or rename that hostname's entry in `inventory.json`,
> or track it manually in the snapshot `note`.

---

## Cadence & targets

- **Cadence:** every 2–4 weeks, or whenever you finish an outreach wave.
- **What "good" looks like:** **5–15 new real, independent referring domains per
  month.** Only `earned_count` growth counts. Self-made placements may inflate
  `all_referring_count`, but they are **not wins** — the tracker reports them as
  ignored and excludes them from the target.

> **Policy (2026-06-04): self-MADE backlink creation is halted.** Adding more
> self-owned gist / GitHub Pages / npm / GitHub-mirror copies of the dataset
> adds crawl footprint and SpamBrain link-scheme risk, not authority. The
> scripts that manufacture those placements are gated behind
> `ALLOW_SELF_MADE_BACKLINKS=1` and refuse to run by default (see
> [`scripts/backlinks/halt.ts`](../../scripts/backlinks/halt.ts)).
>
> **What is encouraged instead: pitch the `/stat/*` dataset to REAL third
> parties** — journalists, researchers, and reputable, independently-operated
> dataset directories (Zenodo, Figshare, Harvard Dataverse, Mendeley Data,
> Hugging Face, Kaggle, data.world, OpenML). Those repositories host and curate
> the copy themselves and (the academic ones) mint a DOI that resolves back to
> the canonical landing page — an earned referring domain, not a self-made
> mirror. Generate the submission bundles with `npm run dataset:bundles` and the
> outreach drafts with `npm run dataset:pitch`.

| Metric                          | 2026-06-04 baseline |   Monthly target |
| ------------------------------- | ------------------: | ---------------: |
| **New** earned ref domains/mo   |                   — | **5–15 / month** |
| Earned referring domains (live) |                   3 |   trending **↑** |

`npm run backlinks:track` computes the net-new earned rate between snapshots,
annualizes it to a per-month figure, and flags it 🟢 on target / 🔴 below target.

---

## Files

| Path                                            | Role                                               |
| ----------------------------------------------- | -------------------------------------------------- |
| `data/backlinks/referring-domains-history.json` | Committed trend history (source of truth).         |
| `data/backlinks/snapshot-latest.csv`            | Latest normalized export (gitignored, disposable). |
| `data/backlinks/inventory.json`                 | Self-made placements → exclusion list.             |
| `scripts/backlinks/snapshot.ts`                 | Normalizes a raw tool export into canonical CSV.   |
| `scripts/backlinks/track-referring-domains.ts`  | Classifies + appends a trend point.                |
| `docs/backlinks/earned-authority-tracking.md`   | This doc.                                          |
