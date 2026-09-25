# Institutional implementation evidence

Started 2026-09-24 at 14:39 UTC. Repository changes only; no release authorization.

## Initial dirty-tree inventory

41 tracked files were already changed (1,544 insertions, 1,415 deletions). Existing untracked files: embed callback and route test, agent callback form, editorial page header, tribunal embed test. Preserve them.

Overlapping existing changes: COMPLIANCE.md; exception-queue article; data/ai-citations/latest-analysis.md; docs/seo/daily-human-queue.md; blog article template and listing; research page; institutional capability component. Other pre-existing changes, not implementation scope: DESIGN.md; scripts/output/near-duplicate-pages.json; about, accessibility, embed API, commission calculator, contact, demo, FAQ, globals, layout, not-found, pilot, platform, pricing, privacy, results, terms pages; booking, calculator, editorial shell/CSS, footer, navbar, privacy consent, contact form, institutional audience/controlled-work/proof-record components, accordion, tribunal embed. Deleted homepage ai-concierge-hero remains deleted.

## Step 1 — reproduction

RUNTIME: read-only source probe returned true for all five defects: article ignores updated date; sitemap uses current clock; bot writes executable MDX; bot appends shipped state before release; citation analyzer mislabels source as Google Search Console. CODE: institutional eligibility duplicates research slugs; daily-run rollback restores broad content paths with git checkout. No generation or rollback executed.

RUNTIME: `npm run test -- src/lib/institutional/site-map.test.ts` passed, 6 tests. Existing tests do not catch those date/draft/report defects.

## Scope boundaries

No commits, pushes, installs, paid model calls, sends, publication or deployment. Local revision dates are not evidence of deployment. Historical candidate missed slots are hypotheses, not proven publication failures.

## Final verification — September 24, 2026

| Check                                                                               | Observed result                                                                                                                  |
| ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `npm run seo:check-institutional`                                                   | Exit 0; 18 artifacts, nine registered articles, 18 pending reviews, no structural errors                                         |
| `npm run typecheck`                                                                 | Exit 0                                                                                                                           |
| `npm run typecheck:seo`                                                             | Exit 0; scripts and bot included                                                                                                 |
| `npm run lint`                                                                      | Exit 0                                                                                                                           |
| `npm run test`                                                                      | Exit 0; 175 tests in 27 files                                                                                                    |
| `npm run build`                                                                     | Exit 0; production build generated                                                                                               |
| `npm run seo:check-citation-surfaces` against `http://127.0.0.1:4173`               | Exit 0; 154/154 checks passed on the final build                                                                                 |
| `node .ezcoder/growth/verify-browser.mjs` (local ignored harness)                   | Exit 0; 15 routes, four viewport widths, scoped axe scans, keyboard links/table tests                                            |
| `npm run seo-bot -- daily --dry-run --tasks blogPost`                               | Exit 0; zero pages/drafts/cost/errors; no generation                                                                             |
| `npm run seo:weekly-status -- 2026-09-24`                                           | Exit 0; 18 pending reviews, no overdue targets, Sep 29/Oct 1 upcoming, citation folder age 87 days with unknown reporting window |
| `npm run analyze:citations -- 2026-09-24`                                           | Exit 0; latest analysis regenerated, source views kept separate                                                                  |
| `git diff --check`                                                                  | Exit 0                                                                                                                           |
| Full `npm run format:check`                                                         | Exit 1; six preserved-file exceptions listed below                                                                               |
| Prettier check excluding only those six files                                       | Exit 0; all remaining matched files pass                                                                                         |
| `CITATION_SURFACE_BASE_URL=https://prestyj.com npm run seo:check-citation-surfaces` | Exit 1; 94/154 pass, 60 date checks differ from local source; pre-deployment observation only                                    |

### Runtime defects found and corrected

1. The mobile waterfall screenshot exposed wrapped currency figures. `ArticleTable` now keeps a minimum table width inside a keyboard-focusable horizontal scroll region. The rebuilt browser test verifies ArrowRight scrolling and a single rendered line for `$1,300,000`; no page-width overflow at 320/390/768/1280px.
2. On a fresh unknown blog URL, the uncached Next.js page redirect emitted `Location: /blog, /blog`; the next cached request emitted one destination. Route inspection excluded an overlapping redirect rule. The proxy now resolves excluded single-slug articles before page rendering, preserving the page-level guard and security/GPC handling. Regression tests failed before the change and passed afterward. Fresh unknown and legacy HTTP requests now produce one 308 destination. The surface checker was not relaxed to accept duplicate headers.
3. `/demo` is intentionally public but excluded from search discovery. Public routes and indexable routes now have separate derived sets (34 and 33). The checker compares sitemap membership against indexable routes and ignores commented-out robots rules rather than mistaking them for active exclusions.
4. Final review found the global CSV ignore rule hid the three synthetic templates. Exact-path exceptions now include only those templates; private exports remain ignored. The manual draft workflow uses Node 22 to match the existing package engine requirement.

### Browser evidence

Local ignored artifacts: `.ezcoder/growth/browser-results.json`, `close-header-mobile.png`, `waterfall-table-mobile.png`, and `capability-reading-desktop.png`. The final run covers all nine registered articles and all six capability routes. Screenshots show visible publication/revision dates, the existing editorial design, contextual reading links and readable mobile tables. No complete screen-reader, physical-device or cross-browser certification is implied.

### Preserved formatting exceptions

The two content-addressed archives are intentionally byte-preserved, including historical formatting:

- `data/ai-citations/archive/derived-report-94fb72e7e5d624ece50cf1bf1cc8e8fb64f1e62a0c0c5df6d3d62d8129ad9ba8.md`
- `data/ai-citations/archive/derived-report-f9bebbaa386a7bfc44f7cc479fe57fc3c3252ac146bb7c702a3b9bdfe3ab951e.md`

The other four warnings are preserved pre-existing files, not implementation formatting defects:

- `scripts/output/near-duplicate-pages.json`
- `scripts/seo-bot/output/reports/2026-09-24.md`
- `scripts/seo-bot/output/reports/research-2026-09-24.md`
- `scripts/seo-bot/output/reports/seo-daily-2026-09-24.md`

SHA-256 recomputation matches both archive filenames. Read-only git comparison shows no changes to original citation CSVs, `data/gsc/progress-history.json` or shipped history. The original backlog was archived byte-for-byte before the active queue was replaced. The initial unrelated dirty-tree work remains outside the implementation edits.

### Release and observation boundary

The 60 production differences comprise 24 unsupported static last-modified dates and 36 article date-surface checks (visible/OG/JSON-LD/RSS). They establish that current production does not yet match the local reviewed-checker expectations; they do not mean a deployment failed. No deployment was attempted.

All 18 items remain awaiting review, with no invented approval/live/measurement dates. The read-only GSC export establishes only a partial baseline, not attribution to these changes. Fresh Bing windows, indexing/analytics/link evidence, real buyer-prompt observations, authorized distribution, and the 90-day observation period remain open. See the runbook's owner/gate table. Existing compliance findings are not cleared by these checks.
