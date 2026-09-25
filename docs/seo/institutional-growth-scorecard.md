# Institutional organic growth scorecard

Series: `institutional-organic-2026-09-24`. Prepared 2026-09-24; a partial authenticated GSC URL-cohort baseline is available. Null means unknown, not zero. This series is separate from `data/gsc/progress-history.json`, whose legacy values and URL denominators remain unchanged.

## Denominator and observations

The repository currently defines 33 indexable URLs, including nine registered articles, plus one public `/demo` route intentionally excluded from the sitemap. The GSC query included all 34 public paths and returned no demo row, so the aggregate is unchanged. This is a code-derived inventory, not a verified production sitemap, indexed-page count or traffic baseline. Ten new reference/article drafts are excluded. Freeze the actual deployed URL cohort for each reporting window and keep newly released cohorts separate when comparing trends.

| Measure                            | Source and required scope                                  | Current value              | Interpretation                                                 |
| ---------------------------------- | ---------------------------------------------------------- | -------------------------- | -------------------------------------------------------------- |
| Institutional clicks / impressions | GSC page-view export, Aug 25–Sep 21, final web data        | 4 clicks / 262 impressions | Organic search activity, not all traffic                       |
| CTR / average position             | Same GSC page-view cohort                                  | 1.53% / 7.06               | Do not average row percentages without weights                 |
| Indexed institutional URLs         | GSC evidence matched to deployed cohort                    | Unknown                    | Divide only by that same cohort                                |
| Institutional page citations       | Bing page view plus verified window/coverage               | Unknown                    | Never add grounding-query counts                               |
| Organic landing sessions           | Existing analytics, channel/landing-page scope             | Unknown                    | State consent, timezone and collection gaps                    |
| Qualified inquiries                | Defined existing inquiry event plus qualification evidence | Unknown                    | Not every form attempt is qualified                            |
| Earned referring domains           | Verified editorial links to eligible pages                 | Unknown                    | Exclude owned/social/directory links unless separately labeled |
| Buyer-prompt citation rate         | Fixed prompts, same engine/mode/locale                     | Unknown                    | A small sampled observation, not global share                  |

`data/seo/institutional-baseline.json` stores each metric with source, export date, reporting start/end, filters and evidence reference. The observation schema rejects populated values without that context. Keep source exports private if they contain sensitive queries or URLs. No tracking library or new collection is required by this implementation.

## Access checked and missing

The connected-tool catalog was searched for GSC, Bing and analytics access; no matching connector was returned. A local check of relevant environment variable names found no supported analytics credential configuration; secret values were not printed. The preserved daily queue then identified an ignored local GSC service account and installed Python client. Read-only property lookup and four final-data page/query-page requests succeeded on September 24. Raw responses are retained privately; the sanitized evidence is `data/seo/gsc-institutional-2026-09-24.json`. No paid integration was created.

The current 28-day page-view result returned 25 rows: 4 clicks, 262 impressions, 1.53% click-through rate and 7.06 impression-weighted position. The separate query/page view returned 16 rows and 41 impressions; it is not added to page totals. The preceding window predates most institutional article publication and cannot establish like-for-like content growth. Mutable landing-page content may also have changed within the current window. This is a current-URL-cohort baseline, not attribution of results to this implementation.

Required external handoff:

1. GSC performance export is now available; no new credential or access grant is needed. Supply separate indexing evidence for the eligible URL cohort. To repeat the read-only export, pipe `institutionalPublicPaths` as JSON to `.secrets/gscvenv/bin/python scripts/seo/export-gsc-institutional.py`; the script states its fixed comparison windows. Update windows deliberately for a future observation and preserve the prior private export.
2. Bing AI Performance query and page exports with `snapshot.json` metadata described in `docs/ai-citation-tracking.md`. Preserve the reporting window, filters and coverage shown by the source.
3. Existing analytics export with date, landing page, source/medium, sessions and agreed inquiry events, plus timezone and collection limitations. If analytics is not collected, record that limitation instead of installing tracking without a decision.
4. Backlink evidence identifying referring URL/domain, target URL and observation date. Verify that the link is real and editorial before counting it as earned.

The latest available citation folder is June 29, 2026, 87 days before preparation. Its reporting window is unknown, so freshness of the underlying activity remains unknown. Its page rows are legacy/unregistered against today's registry. That does not establish zero current institutional citations.

## Fixed buyer-prompt sample

Use the eight exact questions in `data/seo/institutional-buyer-prompts.json`. Planned engines are Copilot, ChatGPT, Perplexity and Gemini; planned locale is en-US. Use fresh conversations with web search enabled where available, recording the actual mode and visible engine/version. Do not silently replace an unavailable mode or engine.

For every attempt record UTC date/time, prompt ID, engine/version, locale, search mode, outcome, cited URLs and an evidence reference. An answered response with no citations has an empty cited-URL list and false citation flag. An error has null citation results. Do not store sensitive session tokens or account details in evidence.

Report each engine separately: completed answers, failures, answers citing an eligible Prestyj URL, and cited URLs. The citation rate denominator is completed answers, with failures separately visible. Record whether citations point to institutional or legacy routes. Eight prompts are a fixed convenience sample, not a statistically representative share of AI search. No prompts have been run for this baseline.

## Weekly decisions and 90-day review

The analytics owner checks data freshness and comparable scope before interpreting movement. The editorial owner looks for repeated buyer questions and missing evidence, not keyword permutations. The release owner verifies crawl and discovery after each authorized deployment. The distribution owner records prepared, sent, replied and linked outcomes separately.

At days 30, 60 and 90, compare eligible windows and the same deployed cohorts. If data is missing, report missing data. If indexing is weak, inspect actual exclusions and crawl evidence before rewriting content. If impressions rise without clicks, inspect query intent and page relevance. If citations rise without qualified inquiries, do not claim revenue impact. If there is no movement, inspect evidence quality and distribution execution; do not fabricate a lag guarantee or bulk-publish more articles.

Targets are operating goals, not promises: up to two reviewed release slots and three relevant editorial pitches weekly. The program can be implemented now, but its outcomes require future observation through December 23, 2026 and later where reporting lags.
