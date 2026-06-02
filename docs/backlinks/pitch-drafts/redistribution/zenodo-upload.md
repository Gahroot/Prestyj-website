---
id: zenodo-upload
bucket: redistribution
name: "Zenodo (gives a DOI)"
target_url: https://zenodo.org/uploads/new
channel: directory-form
status: drafted
generated_at: 2026-05-22T19:27:54.578Z
ai_personalized: false
---
## Zenodo (gives a DOI) upload checklist

**URL:** https://zenodo.org/uploads/new
**Bundle path:** docs/oss-dataset/distributions/zenodo

Upload docs/oss-dataset/distributions/zenodo/ bundle via UI. Zenodo awards permanent DOI.

### Steps
1. Create / sign in to the account at https://zenodo.org.
2. Click upload / new dataset.
3. Paste metadata from the bundle's metadata file.
4. Upload both `statistics.csv` and `statistics.json`.
5. Set license: CC BY 4.0.
6. Confirm + publish.

### After publish
Append a row to data/backlinks/inventory.json with the live URL and bucket="redistribution".
Then re-run `npm run backlinks:verify` to update the gap report.
