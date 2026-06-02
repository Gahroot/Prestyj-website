---
id: kaggle-upload
bucket: redistribution
name: "Kaggle Datasets"
target_url: https://www.kaggle.com/datasets
channel: directory-form
status: drafted
generated_at: 2026-05-22T19:27:54.577Z
ai_personalized: false
---
## Kaggle Datasets upload checklist

**URL:** https://www.kaggle.com/datasets
**Bundle path:** docs/oss-dataset/distributions/kaggle

Upload docs/oss-dataset/distributions/kaggle/ bundle. Needs Kaggle account + API token.

### Steps
1. Create / sign in to the account at https://www.kaggle.com.
2. Click upload / new dataset.
3. Paste metadata from the bundle's metadata file.
4. Upload both `statistics.csv` and `statistics.json`.
5. Set license: CC BY 4.0.
6. Confirm + publish.

### After publish
Append a row to data/backlinks/inventory.json with the live URL and bucket="redistribution".
Then re-run `npm run backlinks:verify` to update the gap report.
