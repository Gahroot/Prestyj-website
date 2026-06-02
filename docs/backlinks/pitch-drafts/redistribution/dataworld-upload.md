---
id: dataworld-upload
bucket: redistribution
name: "data.world"
target_url: https://data.world/new
channel: directory-form
status: drafted
generated_at: 2026-05-22T19:27:54.578Z
ai_personalized: false
---
## data.world upload checklist

**URL:** https://data.world/new
**Bundle path:** docs/oss-dataset/distributions/dataworld

Upload docs/oss-dataset/distributions/dataworld/ files via UI.

### Steps
1. Create / sign in to the account at https://data.world.
2. Click upload / new dataset.
3. Paste metadata from the bundle's metadata file.
4. Upload both `statistics.csv` and `statistics.json`.
5. Set license: CC BY 4.0.
6. Confirm + publish.

### After publish
Append a row to data/backlinks/inventory.json with the live URL and bucket="redistribution".
Then re-run `npm run backlinks:verify` to update the gap report.
