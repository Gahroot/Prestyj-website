# AI citation evidence workflow

Reconciled 2026-09-24. This supersedes the previous GSC attribution, combined query/page totals, daily targets and unsupported weekly trend recommendations. Historical derived reports are retained under `data/ai-citations/archive/`; raw CSVs are unchanged.

## What this source can establish

The repository's headers match **Bing Webmaster Tools AI Performance**, not Google Search Console. Microsoft's [primary announcement](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview), checked 2026-09-24, describes citations across supported Microsoft Copilot, Bing AI summaries and selected partner experiences. Grounding queries represent a sample. Page citations describe references to individual URLs, not rank, traffic or conversions.

The historical files have no authenticated provenance or reporting-window metadata. Call them Bing-format exports with unknown windows. Do not relabel them as observations of ChatGPT, Claude, Gemini, Perplexity or global AI visibility. Do not add query and page views: they can describe overlapping activity.

## Collect a new snapshot

1. Use authenticated access to the correct property in Bing Webmaster Tools. Select and record the reporting start/end, filters and coverage. Export both views for the same conditions.
2. Store exact two-column CSVs as `data/ai-citations/YYYY-MM-DD/queries.csv` (`Grounding Query,Citations`) and `pages.csv` (`Page,Citations`). The folder is an export filing date, never an implied reporting window.
3. Add `snapshot.json` with the schema below. Unknown values remain null; do not reconstruct them from folder names. Keep historical folders unchanged unless actual export evidence establishes their metadata.
4. Review query text and URLs for sensitive information before any commit. Aggregate exports are not automatically free of personal data or secrets. This workflow does not authorize committing or sending them.

Metadata shape (all nulls intentionally mean unknown):

```json
{
  "source": null,
  "exportDate": null,
  "reportingStart": null,
  "reportingEnd": null,
  "filters": null,
  "coverage": null
}
```

For verified Bing exports, source is `bing-ai-performance`; dates are real `YYYY-MM-DD` dates. `filters` is a string-to-string map including property, country, device and other selected filters. Coverage is an object with `queries` (`sampled`, `complete`, `unknown`), `pages` (`complete`, `partial`, `unknown`) and a descriptive `scope` string. Do not assert complete coverage merely because a file downloaded successfully. Source `other` prevents accidental attribution, but sources with different semantics need separate analysis rather than normalization into Bing claims.

## Run and interpret

`npm run analyze:citations -- 2026-09-24` uses an explicit analysis date for reproducibility. Omitting it uses today's date only to label the analysis and assess freshness, never to date an article or invent a reporting window.

The analyzer bounds each CSV at 2 MB and 50,000 rows, validates headers, quoting and nonnegative safe integer counts, and rejects malformed or duplicate raw rows. It fails before replacing the report if an input is invalid. A prior report is copied to a content-addressed archive and verified before atomic replacement. Re-running with identical input and analysis date writes nothing.

The report keeps query-view and page-view sums separate. It normalizes canonical host variants for URL classification using the current public registry. A route classified institutional today is not evidence that its historical content was institutional. Legacy URLs remain visible in a separate class, not in the new growth denominator.

Comparison requires known export dates, equal-length non-overlapping windows, matching source, filters and coverage. Otherwise no trend is calculated. Even a permitted difference concerns exported views only; sampled query composition may change. Reporting end older than 35 days is labeled stale. Missing windows produce unknown freshness, while the weekly status command separately flags old folder dates.

## Weekly decision discipline

The analytics owner verifies scope and freshness first. The editorial owner then considers whether a buyer question fits the institutional program and has enough evidence for a useful answer. A count increase does not automatically create satellite posts, imply causality or justify a release. Keep the two-slot human-reviewed calendar.

Collect GSC clicks, impressions, CTR and position separately with their query/page, country, device and search-type filters. Use the fixed buyer-prompt protocol in `data/seo/institutional-buyer-prompts.json` for manual engine sampling; unrun prompts have no observed answer or citation. Use `docs/seo/institutional-growth-scorecard.md` for the separately labeled institutional baseline.

Historical `docs/ai-citation-playbook.md` recommendations are superseded where they conflict with this evidence policy. No automatic IndexNow submission, public posting, paid API call or deployment is part of analysis.
