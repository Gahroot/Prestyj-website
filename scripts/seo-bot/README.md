# SEO Bot

Daily autonomous content generation for the Prestyj marketing site. Research → write → validate → commit → IndexNow. Pluggable across Claude / Gemini / DeepSeek / Qwen / Moonshot / Groq / OpenRouter. Runs on GitHub Actions cron; set at least one provider key and it works.

## What it ships

| Day | Tasks | Default provider |
|-----|-------|------------------|
| Mon | 1 research brief + 3 geo pages + 2 niche pages | Gemini Pro (free tier) |
| Tue | 1 research brief + 1 blog post (1,500+ words) | Claude Sonnet for blog |
| Wed | 1 research brief + 3 geo pages + 1 comparison page | Gemini Pro + Claude Sonnet |
| Thu | 1 research brief + 10 title rewrites | Gemini Flash (free) |
| Fri | 1 research brief + 1 competitor audit + social drafts | Gemini Flash |
| Sat | Social copy for next week | Gemini Flash |
| Sun | Rest (weekly digest runs instead) | — |

Edit `scripts/seo-bot/config.yml` to change rotation, model routing, or circuit breaker limits without touching code.

## Setup

### 1. Provider keys

Copy `.env.example` → `.env.local` and fill in at least one:

```bash
ANTHROPIC_API_KEY=sk-ant-...      # recommended for blog posts (quality)
GEMINI_API_KEY=...                # free tier covers most volume
DEEPSEEK_API_KEY=...              # cheap fallback
DASHSCOPE_API_KEY=...              # Qwen
MOONSHOT_API_KEY=...               # Kimi
GROQ_API_KEY=...                   # Llama on Groq
OPENROUTER_API_KEY=...             # single key for everything
```

Tasks whose provider has no key set will be skipped with a log warning — no crashes.

### 2. GitHub secrets (for scheduled runs)

Add the same keys as repo secrets at `Settings → Secrets and variables → Actions`. Also add `INDEXNOW_API_KEY` (already used by `npm run indexnow`). Keys set to empty string are treated as unset.

### 3. That's it

```bash
npm run seo-bot -- daily           # run today's rotation
npm run seo-bot -- daily --dry-run # simulate
npm run seo-bot -- task geoPage    # run one task
npm run seo-bot -- digest          # weekly rollup
```

## Architecture

```
scripts/seo-bot/
├── cli.ts                    # entry point (daily | task | dry-run | digest)
├── config.yml                # all routing + rotation + limits
├── load-config.ts            # YAML → AppConfig, Zod-validated
├── types.ts                  # shared TS types + Zod schemas
├── llm/                      # provider abstraction
│   ├── index.ts              # router/factory
│   ├── anthropic.ts          # Claude, with ephemeral prompt caching
│   ├── gemini.ts             # Gemini Flash + Pro, JSON mode via responseMimeType
│   ├── openai-compat.ts      # DeepSeek / Qwen / Moonshot / Groq / OpenRouter
│   └── ab-test.ts            # run same prompt on N providers, save outputs
├── research/
│   ├── daily-brief.ts        # LLM-powered daily angles + dedup note
│   ├── dedup-context.ts      # manifest of every shipped slug + recent summaries
│   └── competitor-fetch.ts   # fetch + HTML strip + truncate
├── validation/
│   ├── zod-schemas.ts        # output shape guards (Zod + satisfies alignment)
│   └── slop-detector.ts      # 26-phrase regex for AI slop
├── tasks/
│   ├── ship-geo-page.ts      # writes src/lib/best-for/<slug>.ts + appends index
│   ├── ship-niche-page.ts    # writes src/lib/solutions/<slug>.ts + index
│   ├── ship-comparison.ts    # writes src/lib/compare/data/<bare>.ts + indexnow
│   ├── write-blog-post.ts    # writes content/blog/<slug>.mdx
│   ├── rewrite-titles.ts     # in-place title/meta rewrites on existing pages
│   ├── audit-competitor.ts   # fetch + LLM summary → reports/
│   ├── generate-social.ts    # LinkedIn / X / Reddit drafts → social/
│   ├── submit-indexnow.ts    # today's new URLs → IndexNow
│   └── daily-research.ts     # thin wrapper around research/daily-brief
├── prompts/
│   ├── system/               # brand + real-estate + seo (cached per run)
│   └── task/                 # one per task type, includes example outputs
├── orchestration/
│   ├── daily-run.ts          # main loop: rotation → tasks → typecheck → commit
│   ├── circuit-breaker.ts    # halts on cost/error/page-count limits
│   └── weekly-digest.ts      # Sunday rollup
├── state/
│   ├── backlog.yml           # queue of pending ideas (edit freely)
│   ├── shipped.json          # dedup manifest (bot writes; do not edit by hand)
│   └── metrics.json          # cost/latency history
└── output/
    ├── reports/YYYY-MM-DD.md # daily reports
    ├── reports/research-*.md # daily research briefs
    ├── reports/competitor-* # intel reports
    ├── reports/digest-*.md   # weekly rollups
    └── social/YYYY-MM-DD.md  # social drafts for copy-paste
```

## Safety rails

- **Typecheck gate**: every run executes `npm run typecheck` after shipping. If it fails, all generated files are `fs.unlink`ed and index files are restored via `git checkout --` before anything else happens. Nothing is committed.
- **Circuit breaker**: hard daily limits (default: 8 pages, 2 blogs, $5 cost, 3 errors). Halts the run mid-loop if breached.
- **Slop detector**: every generation is scanned for 26 marketing-slop phrases. Informational today; upgrade hook for revision-retry is in `validation/slop-detector.ts`.
- **Graceful degradation**: missing API keys skip the affected tasks with a warning, rest of the rotation proceeds.
- **Dedup**: every task receives `DedupContext` including all shipped slugs + 20 most recent item summaries, so generators know what already exists.

## Cost expectations

Default config (Gemini free for volume + Claude Sonnet for blogs + comparisons):
- Monday-Friday: ~$0.50-1.00/day
- Saturday: negligible
- Monthly: **~$10-20**

All-Claude: ~$30-60/month.
All-Gemini-free: **$0**, but blog quality drops.

Actual per-run cost is logged to `state/metrics.json` and reported daily.

## Changing models

Edit `config.yml`. To move blog generation off Claude:

```yaml
tasks:
  blogPost:
    provider: deepseek     # instead of anthropic
    model: deepseek-chat
```

Providers are resolved by the `providers:` block at the top. Add a new provider by adding a new entry.

## Adding backlog items

Edit `scripts/seo-bot/state/backlog.yml`. Items are sorted by `priority` desc and popped top-down. Each run pops N items according to rotation. The bot will not run out of work — add items faster than it ships.

## A/B testing models

```ts
import { runABTest } from "./scripts/seo-bot/llm/ab-test";
// Run same prompt through Sonnet + Gemini Pro + DeepSeek in parallel,
// save all outputs to output/ab-test/ for manual comparison.
```

Wire this into a task by populating `tasks.<name>.abTest` in config — the router does the rest.

## GitHub Action

`.github/workflows/seo-bot.yml` runs daily at 7am UTC. Also supports manual trigger via `workflow_dispatch` with `tasks` and `dryRun` inputs.

Reports are uploaded as artifacts on every run (30-day retention).

## When it fails

1. Check the latest `output/reports/YYYY-MM-DD.md` — it captures typecheck output, errors, and per-task status.
2. If typecheck failed: the rollback removed all shipped files this run. Check `state/shipped.json` for earlier runs; re-run after fixing the prompt or validation.
3. If a specific provider is flapping: swap its task in `config.yml` to the fallback provider.
4. If the backlog is empty for a category: the task skips cleanly. Add items to `state/backlog.yml`.
