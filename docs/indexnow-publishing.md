# IndexNow auto-publishing

**TL;DR — it's automatic. Merge a new blog post or page to `main` and it gets pinged to Bing/Yandex/Naver/Seznam/Yep within a few minutes. You don't need to do anything.**

## How it works

1. You merge a PR to `main` that adds a new MDX blog post (`content/blog/*.mdx`) or a new entry in one of the slug registries (`src/lib/alternatives`, `src/lib/solutions`, `src/lib/best-for`, `src/lib/locations`).
2. The [`IndexNow auto-ping`](../.github/workflows/indexnow.yml) GitHub Action triggers on that push.
3. `scripts/indexnow-diff.ts` runs:
   - Discovers the **current** set of indexable URLs (same logic as `src/app/sitemap.ts`).
   - Diffs against the last-submitted snapshot at `data/indexnow/submitted-urls.json`.
   - Submits **only the new URLs** to `https://yandex.com/indexnow` (which fans out to every IndexNow participant).
   - Updates the snapshot.
4. The Action commits the updated snapshot back to `main` so the next push sees those URLs as already-known.

Google does **not** participate in IndexNow — it relies on the sitemap + Search Console. Make sure new URLs land in `src/app/sitemap.ts` (most categories pick them up automatically via slug registries / fumadocs).

## Triggers

The workflow runs on push to `main` when any of these change:

- `content/blog/**`
- `src/lib/alternatives/**`
- `src/lib/solutions/**`
- `src/lib/best-for/**`
- `src/lib/locations/**`
- `scripts/indexnow-diff.ts`
- `data/indexnow/submitted-urls.json`

You can also trigger it manually via **Actions → IndexNow auto-ping → Run workflow**.

## Local commands

```bash
# Show the diff vs. the snapshot without submitting or writing anything
npm run indexnow:diff:dry

# Submit new URLs (requires INDEXNOW_API_KEY in env or .env.local)
npm run indexnow:diff

# Full re-submit of every URL (rarely needed — only on a key rotation
# or when re-onboarding the site to IndexNow)
npm run indexnow

# Same, but dry-run
npm run indexnow:dry
```

## Adding a new URL category

If you add a new section to the site that doesn't fit any existing slug registry:

1. Add it to `src/app/sitemap.ts` so Google can discover it.
2. Add it to `scripts/indexnow-diff.ts` (either as a static path in `STATIC_ROUTES` / `COMPARE_ROUTES`, or by importing a new slug registry).
3. Update `.github/workflows/indexnow.yml` `paths:` if the new data lives outside the directories already listed.
4. Run `npm run indexnow:diff:dry` locally to confirm the new URLs are detected.

## Key rotation / re-seeding the snapshot

If the snapshot is lost or you need to start fresh without spamming IndexNow with 500+ already-known URLs:

```bash
npx tsx scripts/indexnow-diff.ts --seed
```

This writes the snapshot from the current discovered URL set **without** submitting anything. Future runs will only ping URLs added after the seed.

## Where the IndexNow API key lives

- **GitHub Actions**: `INDEXNOW_API_KEY` repo secret.
- **Local dev / scripts**: `INDEXNOW_API_KEY` in `.env.local` (loaded automatically by `tsx`).
- **Production runtime** (the `POST /api/indexnow` route used by the seo-bot and ad-hoc submissions): same `INDEXNOW_API_KEY` env var on Vercel.
- **Verification file**: `public/<key>.txt` containing the key itself (IndexNow's ownership check).
