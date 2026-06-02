---
id: huggingface-upload
bucket: redistribution
name: "Hugging Face Datasets"
target_url: https://huggingface.co/new-dataset
channel: directory-form
status: drafted
generated_at: 2026-05-22T19:27:54.576Z
ai_personalized: false
---
## Hugging Face Datasets upload checklist

**URL:** https://huggingface.co/new-dataset
**Bundle path:** docs/oss-dataset/distributions/huggingface

Upload docs/oss-dataset/distributions/huggingface/ bundle. Needs HF account + huggingface-cli login.

### Steps
1. Create / sign in to the account at https://huggingface.co.
2. Click upload / new dataset.
3. Paste metadata from the bundle's metadata file.
4. Upload both `statistics.csv` and `statistics.json`.
5. Set license: CC BY 4.0.
6. Confirm + publish.

### After publish
Append a row to data/backlinks/inventory.json with the live URL and bucket="redistribution".
Then re-run `npm run backlinks:verify` to update the gap report.
