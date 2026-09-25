# IndexNow publishing

**Only canonical institutional URLs are eligible. A submission is a crawl notification, not a guarantee of indexing, rankings or traffic.** Google does not participate in IndexNow; use the sitemap and Search Console for Google.

## URL discovery and release gate

`src/lib/indexnow.ts` derives its URL list from `institutionalIndexablePaths`, the same institutional registry used by the sitemap. Both CLI scripts use this shared list. Archived SMB content, redirects, draft articles, embed routes and `/demo` are excluded. Do not add retired pages back to gain URL volume.

Before sending, the CLI checks every candidate on production:

- HTTP 200 HTML, with redirects rejected.
- Exactly one matching canonical URL.
- No `noindex` or `none` directive in robots metadata or `X-Robots-Tag`.
- A valid hosted IndexNow ownership file.

Only after these checks does it POST to `https://api.indexnow.org/indexnow`. Network errors, invalid ownership and failed checks stop submission. Keys are not logged. Dry runs make no network requests and change no snapshot.

These live checks apply to the CLI commands below, not the older `/api/indexnow` HTTP endpoint. Use the CLI for operations. The HTTP endpoint's authorization and ad-hoc submission behavior have not been hardened by this change.

## Local commands

```bash
# Preview the canonical list or the new-URL diff (no external side effects)
npm run indexnow:dry
npm run indexnow:diff:dry

# Submit only new URLs after production verification
npm run indexnow:diff

# Notify engines about one updated, already-live article
npm run indexnow -- --url https://prestyj.com/blog/keep-the-system-of-record

# Rare: resubmit the full canonical site after a substantial migration
npm run indexnow
```

`INDEXNOW_API_KEY` is read from the environment or ignored `.env.local`. Missing credentials make live runs fail. A malformed or missing `--url` value cannot fall back to submitting the whole site.

The diff command reads `data/indexnow/submitted-urls.json` and writes a current snapshot only after successful submission. A malformed existing snapshot fails closed; it does not trigger a full-site resubmission. Full/single-URL submissions do not update that snapshot.

## GitHub Actions

The existing `IndexNow auto-ping` workflow triggers on relevant pushes to `main` and supports manual dispatch. Its path filters include institutional source data, the sitemap, shared submission code and blog content. The existing workflow commits a changed snapshot back to the repository.

A push can occur before production deployment finishes. If live verification fails, wait for the deployment and rerun the workflow; no success or snapshot update is claimed beforehand. This is not a deployment-ready trigger or a recurring scheduler. These workflow changes only take effect after they are deliberately committed and pushed.

## Adding an institutional page

1. Complete the existing editorial/release gates.
2. Register the approved page through `src/lib/institutional/site-map.ts` and its source registries so both discovery paths agree.
3. Deploy, verify the live page, then run the diff command.
4. For an update to an existing page, use a single-URL submission after deployment; diff mode only detects new URLs.

## Seeding without notification

```bash
npx tsx scripts/indexnow-diff.ts --seed
```

This verifies current pages on production and writes a baseline **without submitting anything**. Use only when intentionally establishing a baseline. It is not evidence that an engine accepted the URLs.
