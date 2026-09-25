# Institutional organic growth runbook

Prepared 2026-09-24. This is an editorial operating calendar, not a record of publication. Local expansions require review before deployment. New material stays outside the public collection. No automation may approve or publish it.

## Catch-up calendar

The September 1, 3, 8, 10, 15, 17 and 22 Tuesday/Thursday slots are candidate missed slots only. No verified release log establishes a failure. The ledger retains that uncertainty and original article publication dates.

| Week         | Tuesday review/release target       | Thursday review/release target      |
| ------------ | ----------------------------------- | ----------------------------------- |
| September 28 | Sep 29: IG-01 close                 | Oct 1: IG-02 diligence              |
| October 5    | Oct 6: IG-03 LP boundaries          | Oct 8: IG-04 source conflicts       |
| October 12   | Oct 13: IG-05 waterfalls            | Oct 15: IG-06 workflow selection    |
| October 19   | Oct 20: IG-07 systems               | Oct 22: IG-08 voice handoff         |
| October 26   | Oct 27: IG-09 vendor evaluation     | Oct 29: IG-10 pilot measurement     |
| November 2   | Nov 3: IG-11 committee memo         | Nov 5: IG-12 lease discrepancies    |
| November 9   | Nov 10: IG-13 LP release QA         | Nov 12: IG-14 portfolio metrics     |
| November 16  | Nov 17: IG-15 inbound qualification | Nov 19: IG-16 cost drivers          |
| November 23  | Nov 24: IG-17 scorecard             | Nov 26: IG-18 synthetic walkthrough |
| November 30  | Dec 1: review early cohort          | Dec 3: correct observed gaps        |
| December 7   | Dec 8: refresh source register      | Dec 10: compare eligible windows    |
| December 14  | Dec 15: examine buyer questions     | Dec 17: prepare 90-day review       |
| December 21  | Dec 22: observation review          | Dec 23: 90-day closeout             |

Targets do not override pending subject-matter review, holidays, access or release authorization. Missed targets are reported, not silently rescheduled. Two slots weekly is a maximum, not a bulk-release instruction. Preparing the finite backlog is separate from the bot's maximum two generated drafts weekly.

## Source of truth and history

`data/seo/institutional-content-backlog.json` tracks 18 deliverables with stable IDs, evidence, required reviewer roles and separate revision/release/measurement observations. Null means unknown, not zero or complete. A local revision can be awaiting review even when the original article is already publicly eligible.

The legacy bot queue is preserved at `scripts/seo-bot/state/archive/backlog-pre-institutional-2026-09-24.yml`; the archive was compared byte-for-byte before clearing active legacy tasks. Shipped history, raw exports and daily human queue notes remain historical records, not current assignments. All ledger slugs are reserved against duplicate generation.

## Read-only operating commands

- `npm run seo:check-institutional`: validates files, dates, ledger, links, review requirements and registry discovery wiring. A pass is not approval or evidence of deployment.
- `npm run seo:weekly-status -- 2026-09-24`: reports overdue targets, the next two slots and stale/unknown citation data. Omit the date for today's status; it never changes targets.
- `npm run test`: includes content, arithmetic, metadata and draft-boundary regressions.

The active manual bot accepts only explicit `blogPost` assignments and writes `.md` under `scripts/seo-bot/output/drafts/`. Research and social preparation are human-led; legacy page factories and title rewrites are inactive. A dry run never calls a model. Do not run paid generation as verification. The empty active queue intentionally produces no content because this backlog is already prepared.

The runner never pops the human queue, writes public MDX, appends shipped history, commits, pushes, submits IndexNow or rolls back files. Append-only draft run reports are separate from historical metrics. Remove a completed assignment from the active queue only through reviewed editing; retained draft files prevent regeneration. Keep all draft records to preserve the rolling two-draft cap. Do not run concurrent local generation. The manual workflow serializes CI runs; include open draft PRs when checking the weekly cap and do not dispatch another run from stale main-state records. A stale lock requires inspection, not automatic deletion.

## Explicit reviewed promotion

1. Choose at most the two scheduled items for the week. Inspect the entire article and source notes. Obtain each role listed in `reviewRequirements`; record actual reviewer, date and evidence. Automation must not invent a review. Move the ledger to approved only after all required reviews exist.
2. For an expansion, review the diff against its original article, including financial/legal limitations. Preserve the original publication date. `updated` records actual substantive content revision, not deployment time. Do not deploy all eight pending expansions merely because they share a branch; prepare a release containing only reviewed items.
3. For a new draft, review plain Markdown and any MDX syntax before copying the approved content into `content/blog/`. Remove draft-only status fields, assign the actual release's publication date when known, and use an existing supported author identity without invented credentials. Never import model-generated code. Preserve the original draft in a dated review archive outside `content/drafts/institutional/` when the promotion record identifies its new artifact path; do not leave an untracked duplicate in the active draft collection.
4. Register the new article in `researchArticles`, including explicit capabilities and topics. Do not add a separate eligibility list. Update the ledger artifact path and state to release-prepared and record the actual preparation date. Do not mark it live yet.
5. For IG-17/18, promote the reviewed CSVs to a deliberate public asset path in the same release and add real download links. Until then, the repository asset paths are editorial references only. Review spreadsheet content as text; do not execute external formulas.
6. Add links between newly released articles only when both destinations are included and verified. Re-run content checks, typecheck, lint, tests, format checking and build. Serve the build locally and run the citation-surface checker; inspect the changed article and capability page on narrow and wide screens.
7. Obtain separate deployment authorization. After deployment, verify HTTP status, canonical, dates, JSON-LD, RSS, sitemap, robots and crawler access on production. Record `liveEvidence` with the canonical `url`, actual `deploymentId` and an `evidence` reference, plus `liveVerifiedOn`, before moving to live-verified. A date alone cannot pass the gate. Only then consider an explicitly authorized IndexNow submission. A merged draft PR is not a public release.
8. Record `measurementEvidence` with `source`, `reportingStart`, `reportingEnd` and an `evidence` reference, plus the actual `measuredOn` date, before setting measured. The reporting window must be valid and cannot end after the observation date. A planned target, prepared social post or generated analysis is not a measured outcome.

### Deferred cross-links

After both sides release, connect IG-09 vendor evaluation to IG-17 scorecard; IG-10 pilot measurement to IG-18 walkthrough; IG-11 committee template to IG-12 lease checklist; IG-13 LP release QA to IG-14 portfolio metrics; and IG-15 intake qualification to IG-16 cost drivers where context warrants. These are release tasks, not current public links.

### Recovery

If validation fails, leave the candidate and user work untouched and record the failure. Correct the specific artifact or prepare a reviewed forward correction. Never use broad git checkout/reset, delete source exports, or rewrite historical metrics. If a deployed page needs correction, preserve its prior release evidence and obtain authorization for the corrected deployment.

## Weekly roles and routine

- Monday, editorial owner: run read-only status, inspect overdue review tasks, reserve the two upcoming slots and confirm that each article answers a distinct buyer task. Never turn a missed target into an invented release date.
- Monday, analytics owner: collect GSC, Bing and existing analytics evidence with source dates, windows, filters and coverage. Keep raw sensitive exports private. The existing GSC service account was successfully rechecked; do not request a new key. Use the separate institutional scorecard, not the legacy history recorder.
- Tuesday/Thursday, subject-matter and release owners: review the scheduled artifact, verify required sources and calculations, then prepare a release only if the gates pass. A pending review means no release. Source owner, reviewer and deployment authority are different responsibilities.
- Wednesday, distribution owner: prepare three relevant editorial pitches using the kit, recheck outlet fit and submission rules, and confirm the exact source version is live before sending. Record actual sends separately; no automated messaging is enabled.
- Friday, operations owner: inspect reviewer burden, exceptions, failed attempts and unresolved evidence. The analytics owner compares only eligible windows/cohorts. The distribution owner checks permitted follow-ups and verified links without treating silence as rejection or acceptance.

### Source collection

For every material claim record the primary source, publication/effective date, retrieval date, exact supporting section, rights/access conditions and limitation. NIST background was checked at its official AI RMF page on September 24; it does not validate the editorial scorecard. Bing's primary announcement was checked the same day and explicitly describes sampled grounding queries. Outlet relevance checks establish topic fit only, not acceptance or domain-authority scores. Synthetic arithmetic must retain its inputs and synthetic label wherever excerpted.

### Measurement and decision rules

Use `docs/seo/institutional-growth-scorecard.md` for definitions. Current GSC page-view observations cover August 25–September 21 with final web data; 4 clicks and 262 impressions are a partial current-URL-cohort baseline, not growth caused by this work. Query/page results are a separate view. Historical content and cohort changes prevent attribution from the previous window. Fresh Bing windows, index coverage, existing analytics and buyer-prompt observations remain missing.

Never combine query and page citations, infer per-day counts from folder names, convert an unknown metric to zero or count a prepared pitch as sent. Investigate crawl exclusions before increasing content volume. Investigate source quality and review effort before expanding workflow scope. Stop a release for missing authorization, unsupported material claims or unresolved required reviews. At days 30, 60 and 90, retain the actual observations and limitations; future traffic and citation growth cannot be completed by this repository change.

## Verified repository completion — September 24, 2026

Implementation steps 1–14 are complete; this record closes step 15. These are repository/editorial results, not approval to publish or evidence of growth.

- **Content:** the read-only validator reports 18 complete deliverables, nine registered articles and 18 pending reviews, with zero structural errors. Eight existing articles have local expansions; eight new articles and two reference assets remain outside the public collection. Three spreadsheet-compatible CSV templates are present and explicitly unignored; private analytics exports remain ignored.
- **Code:** `npm run typecheck`, `npm run typecheck:seo`, `npm run lint`, `npm run test` and `npm run build` passed. Vitest ran 175 tests across 27 files, including existing unrelated tests. No paid generation or deployment was used to verify them.
- **Built HTTP surfaces:** the final local build returned 154/154 passing citation-surface checks. This covers public membership, canonical/robots, sitemap dates, visible/OG/JSON-LD/RSS article dates, crawler controls and draft/legacy exclusion. A fresh unknown blog URL and a legacy URL each returned one valid 308 destination. The proxy now handles excluded blog URLs before the uncached page-render path that had duplicated Location headers; existing security headers and GPC behavior remain covered by regression tests.
- **Browser:** all nine registered articles and six capability pages returned 200, passed the scoped axe scan and had no page-width overflow at 320, 390, 768 and 1280 pixels. Related-reading keyboard focus/navigation passed. The mobile waterfall table supports keyboard horizontal scrolling and keeps currency figures on one line. Screenshots were inspected. This is not a complete accessibility certification or physical-device/browser-matrix test.
- **Draft runner:** an actual local `daily --dry-run --tasks blogPost` invocation completed with zero pages, drafts, cost and errors against the empty active assignment queue. Offline regression tests additionally exercise inert draft creation, collisions, traversal, capacity and absence of publishing/destructive side effects. The manual CI workflow was not dispatched.
- **Measurement:** authenticated GSC evidence is a partial current-URL-cohort baseline only: 4 clicks and 262 impressions for Aug 25–Sep 21 final web data. Query/page observations remain separate. The citation report was regenerated from preserved source CSVs; no unknown historical reporting windows were invented.
- **Formatting:** the full `npm run format:check` exits 1 on six preserved files: two byte-preserved derived-report archives, the pre-existing `scripts/output/near-duplicate-pages.json`, and three pre-existing September 24 bot reports. Checking the rest of the repository passes. Archive filenames still match their SHA-256 content digests, and `git diff --check` passes. Do not reformat historical evidence merely to hide this exception.
- **Preservation:** the final diff was reviewed against the initial dirty-tree scope. Existing design, demo, callback, privacy and historical queue work remains in place. Raw citation CSVs, historical GSC values and shipped history have no diff. The already-tracked generated Fumadocs config reflects the deliberate date-schema change; local browser artifacts and credentials remain ignored.
- **Production, read-only:** the current public site passes 94/154 of the new checks and fails 60: 24 static sitemap modification-date checks and 36 article date-surface checks. This is a pre-deployment comparison with local source, not a failed deployment. No deployment, IndexNow submission, commit, push, public post, message send or package installation was performed.

Detailed evidence and reproduction commands: [implementation evidence](./institutional-implementation-evidence.md). Local browser captures are in `.ezcoder/growth/`; they are ignored development artifacts, not public assets.

## Remaining gates and accountable roles

| Gate                   | Owner role                                           | Required next evidence                                                                                                           |
| ---------------------- | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Human content approval | Editorial owner plus each ledger-required specialist | Named reviews of the exact revision; source rights/confidentiality and correct author attribution                                |
| Release authorization  | Repository/release owner                             | Explicit authorization, reviewed diff, deliberate two-slot promotion and actual deployment evidence                              |
| Live verification      | Release owner                                        | Production checker pass and inspection of the exact revised prose; no automatic IndexNow                                         |
| Complete baseline      | Analytics owner                                      | GSC indexing evidence, fresh Bing exports with windows/filters/coverage, existing analytics and verified editorial-link evidence |
| Distribution           | Distribution owner                                   | Review-approved copy, live URLs, current outlet/channel verification and separate send/post authorization; then actual outcomes  |
| Buyer-prompt sampling  | Analytics/editorial owner                            | Real engine/date/mode/locale observations and cited URLs for the fixed prompt set                                                |
| 30/60/90-day outcomes  | Program owner                                        | Comparable deployed cohorts and dated observations through December 23, 2026; longer if release or reporting lags                |

The existing exception-queue refresh remains a separate human-review item. Existing callback/privacy/legal/accessibility blockers in `COMPLIANCE.md` are not cleared by this content program.

## Completion boundaries

Repository preparation is complete, subject to the disclosed formatting exceptions. It is not 90 days of observed performance. No content is marked approved or live from a build alone. No customer outcomes, citation lift, replies, sends or earned links are assumed.
