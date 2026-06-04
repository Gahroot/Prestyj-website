# Cross-Engine Citation Port — June 2026

Goal: port the winning Bing/Copilot citation formula to **Google AI Overviews, Perplexity, and ChatGPT** by preserving the pattern that drives our top blog performers — direct answer in the first 150 words, hard numbers, and comparison tables early — and applying it to the top commercial posts as domain authority grows.

## Why this works across engines

AI Overviews, Perplexity, and ChatGPT all extract the same three things our Bing/Copilot winners already supply: a self-contained answer near the top, a liftable comparison table, and verifiable numbers. The formula did not need a rewrite — it needed one new on-page element (a `**Direct answer:**` block layered on top of the existing `**TL;DR:**`) plus per-engine tuning notes. Both are now documented in `docs/ai-citation-playbook.md` → **Section 6: Porting the formula across engines**.

Crawlers for all three engines are allowed in `public/robots.txt` (`User-agent: *` / `Allow: /`), and the citation surfaces they prefer already ship: `/stat/<id>` permalinks, `/data` (CSV + JSON), `/api/statistics`, and `/llms.txt`.

## Playbook changes

`docs/ai-citation-playbook.md`:

- Added a cross-engine note to the header.
- Added **Section 6** covering: what's identical on every engine, an engine-by-engine selection/tuning table (AIO ⇒ self-contained passage + FAQ/HowTo schema; Perplexity ⇒ one `/stat/<id>` per claim; ChatGPT ⇒ named entities + reformattable tables), the copy-this `**Direct answer:**` block shape and rules, and the authority-gated rollout order.

## Top commercial posts retrofitted (5)

Each got a `**Direct answer:**` block inserted inside the first 150 words, immediately after the existing `**TL;DR:**`. Every number links to a `/stat/<id>` permalink whose `value`/`description` matches the figure (verified against `src/lib/statistics-data.ts`), and each block ends with one commercial link + `/book-demo`. These five were chosen because they are the highest-cited commercial posts in `data/ai-citations/latest-analysis.md` (2026-05-28 snapshot).

| Post | Direct-answer stat links |
| --- | --- |
| `content/blog/video-ad-testing-pricing-2026.mdx` (225 citations) | `bva-cost-per-tested-angle`, `batch-video-cost-per-tested-angle-vs-agency`, `batch-video-pilot-setup-cost` |
| `content/blog/ai-voice-agent-costs-compared.mdx` (152) | `voice-agent-cost-per-minute-at-scale`, `voice-agent-hidden-cost-percent`, `voice-agent-pilot-setup-cost-range` |
| `content/blog/sales-ai-agent-vs-human-cost-comparison-2026.mdx` (73) | `lead-response-ai-time-to-contact`, `lead-response-ai-cost-per-lead-engaged`, `lead-response-ai-roi-six-months`, `ai-cold-call-volume-per-agent-per-month` |
| `content/blog/ai-sales-agent-vs-human-sdr-cost.mdx` (80) | `ai-cold-call-volume-per-agent-per-month`, `lead-response-ai-cost-per-lead-engaged`, `lead-response-ai-roi-six-months`, `lead-response-ai-time-to-contact` |
| `content/blog/custom-ai-agent-vs-off-the-shelf-3-year-tco.mdx` (54) | `lead-response-ai-cost-per-lead-engaged`, `lead-response-ai-time-to-contact` |

All five already had the rest of the formula (early comparison table, Key Takeaways, buyer-phrased FAQ feeding `FAQPage` JSON-LD), so no structural rebuild was required.

## Verification

- `npm run typecheck` — pass
- `npm run lint` — pass
- `npm run build` — pass (all `/stat/*` permalinks prerendered; all 10 linked stat IDs confirmed present via `getAllStatIds()`)

## Next batch (when authority grows)

Per the playbook rollout order, follow with surging-query canonical pages and then net-new query gaps. Re-pull the AI search reports ~30 days after this batch and confirm the five retrofitted pages hold or grow citations across AIO, Perplexity, and ChatGPT before widening the rollout. Drop the new exports into `data/ai-citations/<YYYY-MM-DD>/` and run `npm run analyze:citations`.
