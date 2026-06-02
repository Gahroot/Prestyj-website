# Open-Data Redistribution: Submission Checklist

The agent generated platform-specific bundles. Each row below is **one** upload
that produces one permanent backlink (each backlinks `https://prestyj.com` from a
high-DR platform). Total potential: 7+ DR-90+ links across academic, ML, and
data-discovery destinations.

| # | Destination | Files to upload | URL to submit | Notes |
| - | --- | --- | --- | --- |
| 1 | **Hugging Face Datasets** | `docs/oss-dataset/distributions/huggingface/` — push as a new dataset repo at `huggingface.co/datasets/<user>/prestyj-statistics` | https://huggingface.co/new-dataset | Requires HF account + `huggingface_hub` CLI: `huggingface-cli login` then `huggingface-cli upload <repo> .`. DR≈90. |
| 2 | **Kaggle Datasets** | `docs/oss-dataset/distributions/kaggle/` — `kaggle datasets create -p docs/oss-dataset/distributions/kaggle` | https://www.kaggle.com/datasets | Needs Kaggle account + API token (download from kaggle.com/<user>/account → "Create New Token"). `dataset-metadata.json` is already configured. DR≈92. |
| 3 | **data.world** | `docs/oss-dataset/distributions/dataworld/` — upload via UI (no public CLI for free tier) | https://data.world/new | Needs free account. Make dataset PUBLIC, paste from `dataset.yml`, upload both CSV + JSON. DR≈84. |
| 4 | **Zenodo** | `docs/oss-dataset/distributions/zenodo/` — upload via UI; paste from `zenodo.json` | https://zenodo.org/uploads/new | Awards a permanent DOI — best academic-citation primitive. Free, requires ORCID or email account. DR≈92. |
| 5 | **Figshare** | `docs/oss-dataset/distributions/figshare/` — upload via UI; paste from `metadata.json` | https://figshare.com/account/projects | Free account; produces a permanent DOI like Zenodo. DR≈92. |
| 6 | **OpenML** | `docs/oss-dataset/distributions/openml/` — upload via UI or `openml-python` package | https://www.openml.org/new-data | Less polished UI; CSV gets cleanly absorbed. DR≈80. |
| 7 | **GitHub generic mirror** | `docs/oss-dataset/distributions/github-generic/` — `git init && gh repo create` for any other GitHub org | https://github.com/new | Already done at `Gahroot/prestyj-statistics-dataset` — but a duplicate at a more authoritative-sounding name (`prestyj/statistics` if you create the org) would help. DR≈95. |

## Once uploaded

For each successful upload, append a row to `data/backlinks/inventory.json`:

```json
{
  "id": "zenodo-<doi>",
  "bucket": "redistribution",
  "target_url": "https://zenodo.org/record/<id>",
  "status": "live",
  "live_url": "https://zenodo.org/record/<id>",
  "first_seen": "<YYYY-MM-DD>"
}
```

Then re-run `npm run backlinks:verify` to update the gap report.

## Bundle integrity

Regenerate any time with:

```bash
npx tsx scripts/backlinks/generate-redistribution-bundles.ts
```

Reads from `src/lib/statistics-data.ts` so the bundles always reflect the
current state of the source-of-truth dataset.
