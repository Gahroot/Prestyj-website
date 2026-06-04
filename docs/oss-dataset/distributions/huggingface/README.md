---
language:
  - en
license: cc-by-4.0
pretty_name: Prestyj Lead Response & AI Sales Statistics
size_categories:
  - n<1K
task_categories:
  - tabular-classification
  - other
tags:
  - marketing
  - sales
  - lead-generation
  - speed-to-lead
  - video-advertising
  - ai-adoption
  - cost-per-lead
  - benchmarks
  - statistics
configs:
  - config_name: default
    data_files:
      - split: train
        path: statistics.csv
---

# Prestyj Lead Response, Video Advertising & AI Sales Statistics Dataset

> Canonical source: <https://prestyj.com/data>

A curated CC BY 4.0 dataset of cite-worthy statistics covering speed-to-lead, video advertising performance, AI adoption in sales, lead conversion rates, and cost-per-lead benchmarks by industry. Each row carries its primary publisher (Harvard Business Review, InsideSales, Wyzowl, HubSpot, WordStream, McKinsey, Gartner, Salesforce, etc.) and year of publication, plus a stable permalink at https://prestyj.com/stat/<id>. 

Canonical source: https://prestyj.com/data

## Schema

See `statistics.csv` — columns: id, category, value, description, source_name, source_year, source_url, context, permalink, embed_url, license, attribution.

## License

[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).
Attribution to Prestyj (<https://prestyj.com>) is required.

## Citation

```bibtex
@misc{prestyj-statistics-2026,
  title  = "Prestyj Lead Response, Video Advertising & AI Sales Statistics Dataset",
  author = "{Prestyj}",
  year   = "2026",
  url    = "https://prestyj.com/data",
  note   = "CC BY 4.0"
}
```
