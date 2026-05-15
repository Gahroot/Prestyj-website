# Prestyj

AI-powered lead conversion platform for home services and real estate. Next.js marketing site with blog, competitor comparison pages, ROI calculators, lead magnets, and programmatic landing pages.

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript (strict)
- Tailwind CSS v4 + shadcn/ui (Radix)
- Fumadocs MDX for the blog
- Prisma (Postgres) for persisted intake data
- Resend, Stripe, Meta Pixel / CAPI, Cal.com embed
- Vitest for tests, ESLint + Prettier for code quality

## Requirements

- Node `>=22` (see `.nvmrc`)
- npm 10+
- A database URL for Prisma (any Postgres; see `prisma/schema.prisma`)

## Setup

```bash
nvm use                 # picks up .nvmrc
npm install             # also runs `prisma generate` via postinstall
cp .env.example .env.local
# fill in values in .env.local
```

## Run

```bash
npm run dev             # next dev — http://localhost:3000
npm run build           # prisma generate + next build
npm run start           # production server (after build)
```

## Verify

Run before committing:

```bash
npm run lint            # ESLint (eslint-config-next, flat config)
npm run typecheck       # tsc --noEmit (strict)
npm run format:check    # Prettier
npm run test            # Vitest
```

Fix formatting in place with `npm run format`.

## Scripts

| Script                    | What it does                                           |
| ------------------------- | ------------------------------------------------------ |
| `dev`                     | Start the Next.js dev server                           |
| `build`                   | `prisma generate` + `next build`                       |
| `start`                   | Start the production server                            |
| `lint` / `typecheck`      | ESLint / `tsc --noEmit`                                |
| `format` / `format:check` | Prettier write / check                                 |
| `test` / `test:watch`     | Vitest one-shot / watch mode                           |
| `indexnow`                | Submit URLs to IndexNow (`scripts/submit-indexnow.ts`) |
| `indexnow:dry`            | Dry-run of the IndexNow submission                     |
| `gen-scripts`             | Generate Prestyj promo scripts                         |
| `seo-bot`                 | SEO content automation CLI (`scripts/seo-bot/cli.ts`)  |

## Environment

See `.env.example` for the full list. Highlights:

- `INDEXNOW_API_KEY` — search-engine indexing pings
- `ZIMAGE_API_KEY` — Z-Image media generation (kie.ai)
- `ANTHROPIC_API_KEY`, `GEMINI_API_KEY`, `DEEPSEEK_API_KEY`, `DASHSCOPE_API_KEY`, `MOONSHOT_API_KEY`, `GROQ_API_KEY`, `OPENROUTER_API_KEY` — SEO-bot providers; any subset; unset providers are skipped

Database, Stripe, Resend, and Meta CAPI keys are also required for the corresponding features — add them to `.env.local`.

## Project layout

See [`CLAUDE.md`](./CLAUDE.md) for the full directory map and conventions. Quick orientation:

- `src/app/` — App Router pages, API routes, sitemap
- `src/components/` — `ui/` primitives, `sections/` page sections, `layout/`, `seo/`
- `src/lib/` — data, validations, integrations (compare, calculator, content-factory, media)
- `content/blog/` — MDX blog posts (Fumadocs)
- `scripts/` — IndexNow, SEO bot, media generation
- `docs/` — internal playbooks (SEO, retargeting, content factory)
- `prisma/` — schema and migrations

## Deployment

Deployed on Vercel. The production build runs `prisma generate && next build`; ensure `DATABASE_URL` and all required keys are configured in the Vercel project.

## Security

Vulnerability reporting policy in [`SECURITY.md`](./SECURITY.md).
