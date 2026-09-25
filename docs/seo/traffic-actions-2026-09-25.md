# Traffic operations — 2026-09-25

Scope: practical search discovery for the existing institutional site. Working tree based on `72743f8`. No claim of increased traffic, rankings, leads or revenue from this session.

## External actions completed

| Action                                                                 | Observed result                                                                   | Meaning                                                                        |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Inspect every current sitemap URL through Google Search Console        | 33 successful inspection responses; 29 `PASS`, 4 `NEUTRAL`                        | Google's stored index status, not a fresh crawl or a ranking guarantee         |
| Resubmit `https://prestyj.com/sitemap.xml` for `sc-domain:prestyj.com` | HTTP 204; `lastSubmitted: 2026-09-25T14:16:41.084Z`; `isPending: true`            | Google accepted the sitemap submission, processing remains pending             |
| Verify every current URL on production                                 | All 33 return HTTP 200 HTML, matching canonical and no blocking noindex directive | Current pages are technically eligible for submission                          |
| Submit all 33 verified URLs to the official IndexNow endpoint          | HTTP 202 from `https://api.indexnow.org/indexnow`                                 | Accepted for processing/verification, not proof of indexing by any participant |
| Record the successfully submitted URL cohort                           | Snapshot now contains 33 URLs; subsequent diff: 0 new, 0 removed                  | Prevents redundant new-URL submissions from this working tree                  |
| Check Resend availability                                              | Verified sending domain; 0 contacts; 0 broadcasts                                 | No subscriber audience available. No email was sent                            |

Google's sitemap record had 26 warnings before resubmission. The new pending record reports zero warnings/errors, but that is **not evidence that processing resolved the old warnings**. Historical alternate sitemap registrations were not removed.

### Google pages not indexed at inspection time

| URL path                             | Google status                      |
| ------------------------------------ | ---------------------------------- |
| `/pricing`                           | URL is unknown to Google           |
| `/book-demo`                         | Crawled — currently not indexed    |
| `/accessibility`                     | Discovered — currently not indexed |
| `/blog/lp-reporting-data-boundaries` | Discovered — currently not indexed |

All four passed today's independent production HTTP/canonical/noindex checks. Their current status therefore does not demonstrate a live noindex or redirect defect. The URL Inspection API reads Google's stored state; it cannot request indexing.

## Comparable baseline, not a growth result

Google Search Console final web-search rows, grouped by page and filtered to the same **current 33 sitemap URLs** in both periods. These are page-dimension totals, not whole-property totals. The current cohort includes navigational/legal pages and the commercial calculator; it is not a qualified-lead or nonbrand-only measure.

| Period                | Clicks | Impressions |   CTR | Impression-weighted position | Pages with impressions |
| --------------------- | -----: | ----------: | ----: | ---------------------------: | ---------------------: |
| 2026-07-28–2026-08-24 |      9 |         319 | 2.82% |                         5.02 |                      6 |
| 2026-08-25–2026-09-21 |      4 |         262 | 1.53% |                         7.06 |                     25 |

Clicks declined in this comparison. Page coverage broadened, but neither that nor today's submissions proves growth. Recheck after engines process the notifications; no recurring monitoring job was installed.

## Code implemented and verified locally

- Reproduced the old full-submission CLI discovering **919 URLs**, including retired free-ad, statistics and embed routes. The old diff CLI discovered **646 URLs** and omitted institutional routes.
- Replaced duplicated legacy URL lists with the canonical institutional sitemap registry. The shared library, full CLI and diff CLI now discover the same **33 URLs**.
- Added live verification before CLI notification: reject redirects, non-HTML/error responses, mismatched/missing/duplicate canonicals and robots noindex directives; verify the hosted ownership file; bound request duration; keep keys out of logs.
- Missing credentials or invalid snapshots now fail rather than claiming success. Malformed `--url` values do not trigger a full-site submission.
- Updated workflow path filters to institutional sources and documented deployment timing. This does **not** activate anything remotely until deliberately committed and pushed.
- Added 15 regression tests. Full suite: **190 tests in 28 files passed**, including a fresh final rerun. The initial typecheck, lint, production build and diff whitespace check passed.
- **Transient verification failure, resolved on recheck:** a later standalone `npm run typecheck` failed in generated `.next/dev/types/validator.ts` at lines 2294–2298 with a truncated duplicate fragment (`icing/layout.js")`). Other concurrent UI edits appeared during the session; no causal attribution is established. The generated file and unrelated development work were not edited or suppressed. On the user's subsequent commit/push request, fresh standalone `npm run typecheck` and `npm run lint` both passed.

### Ownership-key mismatch discovered

The key configured in local `.env.local` points to a production URL returning 404 and has no matching local public ownership file. The first live attempt stopped without notifying IndexNow.

Three existing public ownership files were independently verified on production. A deterministic, sorted existing file was used as a process-only `INDEXNOW_API_KEY` override for the successful submission. No key values were logged; `.env.local`, Vercel environment variables and GitHub secrets were not changed. A future default live CLI run still needs a key whose ownership file is deployed; it will correctly fail if given the stale local key. Do not copy a public ownership key into a private administrative-auth role.

## Deliberately not performed

- No fabricated clicks, bought links, mass directory submissions, scraped contact lists, unsolicited bulk email or paid campaigns.
- No new article published: existing editorial/release gates remain in force.
- The initial traffic operation did not commit, push or deploy. The user subsequently authorized committing and pushing the relevant traffic changes. Unrelated article, report, design and UI edits remain excluded from that commit.
- No full-site legal/security audit. The older `/api/indexnow` HTTP authorization and ad-hoc URL behavior remain outside this fix; operations used the verified CLI instead. See the scoped note in `COMPLIANCE.md`.

## Completion recheck — 2026-09-25

- Fresh local verification passed: typecheck, lint, SEO typecheck, production build, and **193 tests across 28 files**, including 18 IndexNow regression tests.
- IndexNow dry runs found 33 canonical URLs and no new or removed URLs. No notifications were sent and the submission snapshot was not changed.
- Institutional content validation reported no errors; all 18 editorial reviews remain pending. Validation does not grant approval or release permission.
- The citation-surface check passed **154/154 checks** against the local production build at `http://localhost:3102`. Earlier attempts used the wrong local service at port 4173 or timed out against the development server; neither was treated as passing evidence.
- Browser checks passed across six capability pages and pricing at 320, 768 and 1440 pixels, including section links, narrow text reflow, automated accessibility checks at mobile/desktop widths, keyboard booking navigation and Back. Screen-reader and cross-browser verification remain open as recorded in `DESIGN.md`.
- Existing edits were preserved; remaining formatting warnings in the changed documents and generated report were corrected. No commit, push, deployment or new external submission was performed in this completion pass. The ownership-key configuration issue above remains an operational prerequisite for future live notifications.

## Evidence references

- Search inspection session: local tool process `4a949810`.
- Comparable Search Console baseline: `236330ef`.
- Typecheck/lint/tests/build: `59255a4e`.
- Initial ownership-check rejection: `6fa067a5`.
- Successful live IndexNow request and per-URL verification: `5681d0c3`.
- Regression tests: `scripts/seo/indexnow-urls.test.ts`.
- Operational commands and limitations: `docs/indexnow-publishing.md`.
- Google API contract: <https://developers.google.com/webmaster-tools/v1/sitemaps/submit> and <https://developers.google.com/webmaster-tools/v1/urlInspection.index/inspect>.
