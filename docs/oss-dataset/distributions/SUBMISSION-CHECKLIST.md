# Third-Party Dataset Directory: Submission Checklist

> **Policy:** these are REAL, independently-operated dataset repositories — not
> self-owned GitHub mirrors. Each one independently hosts and curates the
> dataset, and the academic ones mint a permanent DOI that resolves back to the
> canonical home (<https://prestyj.com/data>). Submitting here earns an independent
> referring domain + a citable DOI, which is exactly what the link policy wants.
> Self-owned GitHub/Pages/npm mirrors stay halted (see scripts/backlinks/halt.ts).

The agent generated platform-specific bundles below from the current
102-row dataset. Each row is **one** submission. Prioritize the
DOI-minting academic repositories first — a DOI is the strongest citation
primitive and is picked up by Google Dataset Search + DataCite.

| # | Destination | DOI? | Files to upload | Where to submit | Notes |
| - | --- | --- | --- | --- | --- |
| 1 | **Zenodo** (CERN) | ✅ | `docs/oss-dataset/distributions/zenodo/` — paste from `zenodo.json` | https://zenodo.org/uploads/new | Free, ORCID/email account. Best academic-citation primitive. |
| 2 | **Figshare** (Digital Science) | ✅ | `docs/oss-dataset/distributions/figshare/` — paste from `metadata.json` | https://figshare.com/account/projects | Free account; permanent DOI like Zenodo. |
| 3 | **Harvard Dataverse** | ✅ | `docs/oss-dataset/distributions/dataverse/` — paste from `dataset.json` or use native API | https://dataverse.harvard.edu | Recognized research-data repository; great for academic citation. |
| 4 | **Mendeley Data** (Elsevier) | ✅ | `docs/oss-dataset/distributions/mendeley/` — paste from `metadata.json` | https://data.mendeley.com | DataCite-indexed; appears in Google Dataset Search. |
| 5 | **Hugging Face Datasets** | — | `docs/oss-dataset/distributions/huggingface/` — push as a new dataset repo | https://huggingface.co/new-dataset | ML community discovery. `huggingface-cli login` then `huggingface-cli upload <repo> .`. |
| 6 | **Kaggle Datasets** | — | `docs/oss-dataset/distributions/kaggle/` — `kaggle datasets create -p docs/oss-dataset/distributions/kaggle` | https://www.kaggle.com/datasets | Data-science discovery. Needs Kaggle account + API token. `dataset-metadata.json` is pre-configured. |
| 7 | **data.world** | — | `docs/oss-dataset/distributions/dataworld/` — upload via UI | https://data.world/new | Open-data community. Make dataset PUBLIC, paste from `dataset.yml`. |
| 8 | **OpenML** | — | `docs/oss-dataset/distributions/openml/` — upload via UI or `openml-python` | https://www.openml.org/new-data | ML benchmark catalog; CSV gets cleanly absorbed. |

## Once published

For each successful submission, append a row to `data/backlinks/inventory.json`
(bucket **`dataset-directory`**, not the old `redistribution`):

```json
{
  "id": "zenodo-<doi>",
  "bucket": "dataset-directory",
  "target_url": "https://zenodo.org/records/<id>",
  "status": "live",
  "live_url": "https://doi.org/<doi>",
  "first_seen": "<YYYY-MM-DD>",
  "notes": "Third-party repository copy of /data. DOI resolves to canonical landing. Not a self-owned mirror."
}
```

Then re-run `npm run backlinks:verify` to update the gap report and
`npm run dataset:pitch` to refresh the researcher/journalist outreach drafts.

## Bundle integrity

Regenerate any time with:

```bash
npm run dataset:bundles
# or: npx tsx scripts/backlinks/generate-dataset-directory-bundles.ts
```

Reads from `src/lib/statistics-data.ts` so the bundles always reflect the
current state of the source-of-truth dataset.
