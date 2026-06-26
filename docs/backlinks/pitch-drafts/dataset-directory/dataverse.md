---
id: dataverse
bucket: dataset-directory
name: "Harvard Dataverse"
target_url: https://dataverse.harvard.edu
channel: data-repository
doi: true
status: drafted
generated_at: 2026-06-26T18:08:37.165Z
---
## Harvard Dataverse — dataset submission checklist

**Submit at:** https://dataverse.harvard.edu
**Prepared bundle:** docs/oss-dataset/distributions/dataverse
**Role:** Recognized academic research-data repository; permanent DOI; strong for scholarly citation.
**DOI minted:** yes

This is an independent third-party repository — it hosts and curates the copy
itself. The canonical home stays https://prestyj.com/data; this submission points back to it
and earns an independent referring domain (no self-owned mirror created).

### Representative rows (for the platform's description field)

- 100× — You are 100× more likely to connect with a lead if you respond within 5 minutes vs. 30 minutes. (LeadResponseManagement.org, 2024–2026) https://prestyj.com/stat/stl-100x
- 1% — Only 1% of B2B companies respond to leads in under 5 minutes. (Amplemarket, 2024) https://prestyj.com/stat/stl-1pct-b2b
- 21× — Companies that respond within 5 minutes are 21× more likely to qualify a lead than those that wait 30 minutes. (Harvard Business Review / LeadResponseManagement.org, 2011 (widely re-cited 2024–2026)) https://prestyj.com/stat/stl-21x
- 391% — Calling within the first minute boosts conversion rates by 391% compared to waiting even a few minutes longer. (Velocify, 2024–2025) https://prestyj.com/stat/stl-391
- 400% — The likelihood of qualifying a lead drops 400% when response time moves from 5 to 10 minutes. (Harvard Business Review (via Amplemarket), 2024) https://prestyj.com/stat/stl-400pct-drop

### Steps
1. Sign in / create an account at https://dataverse.harvard.edu.
2. Start a new dataset upload.
3. Paste metadata from the bundle's metadata file (docs/oss-dataset/distributions/dataverse).
4. Upload `statistics.csv` and `statistics.json`.
5. Set license: CC BY 4.0. Set the related/source URL to https://prestyj.com/data.
6. Publish.
> This platform mints a permanent DOI on publish. Record the DOI in data/backlinks/inventory.json (bucket="dataset-directory") and send it to researcher/journalist contacts as the citable identifier.

### After publish
Append a row to data/backlinks/inventory.json:

```json
{
  "id": "dataverse-<id-or-doi>",
  "bucket": "dataset-directory",
  "target_url": "<the live dataset URL>",
  "status": "live",
  "live_url": "<DOI url or dataset URL>",
  "first_seen": "<YYYY-MM-DD>",
  "notes": "Third-party repository copy of /data; points back to canonical. Not a self-owned mirror."
}
```

Then re-run `npm run backlinks:verify`.
