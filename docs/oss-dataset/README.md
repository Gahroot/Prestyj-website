# Prestyj Open Statistics Dataset

> A curated, public-domain dataset of cite-worthy statistics on speed-to-lead,
> video advertising, AI adoption in sales, lead conversion, and cost-per-lead
> by industry — sourced and dated for 2024–2026.

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Dataset](https://img.shields.io/badge/dataset-prestyj.com%2Fdata-blue)](https://prestyj.com/data)
[![CSV](https://img.shields.io/badge/format-CSV-green)](https://prestyj.com/data/statistics.csv)
[![JSON](https://img.shields.io/badge/format-JSON-orange)](https://prestyj.com/data/statistics.json)

## What's inside

| Category                       | What it covers                                                                                                                                           |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Speed to Lead**              | Response-time → qualification, conversion, and revenue impact. The 5-minute/30-minute curve, B2B vendor-first behavior, average industry response times. |
| **Video Advertising**          | Adoption rates, ROI vs. static, completion rates, ad-spend shifts (TV → digital), and AI-driven production.                                              |
| **AI Adoption in Sales**       | Daily AI use among reps, win-rate lift, quota attainment, ROI timelines, McKinsey & Gartner forecasts.                                                   |
| **Lead Response & Conversion** | Follow-up frequency, qualification rates, no-show reduction, % of leads never contacted.                                                                 |
| **Industry Benchmarks**        | Google Ads CPC, CPL, CTR, conversion rate by industry (legal, HVAC, real estate, automotive, dental, etc.).                                              |

Every statistic carries:

- The original publisher (Harvard Business Review, InsideSales, Wyzowl, HubSpot, WordStream, McKinsey, Gartner, Salesforce, …)
- The year of publication
- A permanent URL on `prestyj.com/stat/<id>`
- An iframe-embeddable URL on `prestyj.com/embed/stat/<id>`

## Download

Always-fresh canonical URLs (mirror of this repo):

- **CSV:** <https://prestyj.com/data/statistics.csv>
- **JSON:** <https://prestyj.com/data/statistics.json>
- **Web browse:** <https://prestyj.com/statistics>
- **Dataset landing (schema.org/Dataset):** <https://prestyj.com/data>

You can also `git clone` this repository for a pinned, versioned copy.

## Schema

CSV columns:

| Column        | Description                                                 |
| ------------- | ----------------------------------------------------------- |
| `id`          | Stable statistic id (e.g. `stl-21x`). Use as a foreign key. |
| `category`    | Human-readable category title.                              |
| `value`       | The headline number (`21×`, `391%`, `42 hours`, etc.).      |
| `description` | Cite-ready one-sentence statistic.                          |
| `source_name` | Primary publisher of the underlying research.               |
| `source_year` | Year (or year range) of publication.                        |
| `source_url`  | Primary source URL when one is publicly available.          |
| `context`     | Optional clarifying note.                                   |
| `permalink`   | Canonical Prestyj URL for the statistic.                    |
| `embed_url`   | iFrame-embeddable URL for the statistic.                    |
| `license`     | `CC BY 4.0`.                                                |
| `attribution` | Required attribution string.                                |

JSON payload mirrors the same fields, grouped by category, with a top-level
`license`, `citation`, `version`, and `last_modified` field.

## How to cite

**Plain text**

> Prestyj (2026). _Lead Response, Video Advertising & AI Sales Statistics Dataset._ <https://prestyj.com/data>

**BibTeX**

```bibtex
@misc{prestyj-statistics-2026,
  title  = "Lead Response, Video Advertising & AI Sales Statistics Dataset",
  author = "{Prestyj}",
  year   = "2026",
  url    = "https://prestyj.com/data",
  note   = "CC BY 4.0"
}
```

Per-statistic citations are available on each statistic's permalink page —
APA, MLA, Chicago, and BibTeX, one click to copy.

## Embedding a single statistic

```html
<iframe
  src="https://prestyj.com/embed/stat/stl-21x"
  width="100%"
  height="260"
  style="border:0;border-radius:12px;max-width:640px"
  loading="lazy"
></iframe>
<p style="font-size:12px;color:#555">
  Source: <a href="https://prestyj.com/stat/stl-21x">Speed to Lead Statistics — Prestyj</a>
</p>
```

The iframe + visible attribution link satisfies the CC BY 4.0 requirement.

## License

[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).

You may share, adapt, redistribute, and reuse the dataset for any purpose,
including commercial — provided you credit Prestyj with a link to
<https://prestyj.com>.

## Contributing

Spot a statistic that needs updating, or have a better primary source? Open
an issue or PR. Each row in the dataset has a stable `id`, so changes are
easy to track.

When adding new statistics, please include:

1. The original publisher (not an aggregator).
2. The year of publication.
3. A direct URL to the primary source if publicly available.
4. The category it belongs to.

## Versioning

The dataset is versioned by `last_modified` date in the JSON payload. The
GitHub history of this repo also gives you a per-row diff over time.

## Mirror / archive

This dataset is intentionally redundant — it lives at:

- The canonical URL: <https://prestyj.com/data>
- This Git repository
- The JSON / CSV download endpoints

So if any one source goes down, the others remain authoritative.

## About Prestyj

[Prestyj](https://prestyj.com) builds AI agents for marketing and sales —
batch video ad production, AI voice receptionists, AI lead response, and
lead reactivation, built for home services, real estate, and agencies.

We publish this dataset because we use it ourselves every day, and we'd
rather everyone work from the same numbers.
