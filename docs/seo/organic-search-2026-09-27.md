# Organic search improvements — September 27, 2026

## Outcome and release boundary

Implemented and verified locally against the working tree based on `7e9f2b1`. **Not committed or deployed. No ranking gain is claimed.** Existing unrelated edits and pending review records were preserved. The existing editorial/release gates, including author and subject-matter review, have not been marked approved. Do not deploy the entire mixed working tree as though every edit belongs to this pass.

The user's explicit request for “custom AI agents” and “AI operating systems” overrides the older vocabulary restriction for this scoped content. The audience remains institutional real estate: investment funds, commercial brokerages, and CRE owner-operators—not generic small businesses or residential agents.

## Evidence used

- **RUNTIME, production before changes:** `/capabilities/deal-diligence` rendered `Deal diligence | Prestyj | Prestyj`; `/for/investment-funds` duplicated the brand suffix too. Both inherited the homepage Twitter title. `/platform` rendered only `Platform | Prestyj`.
- **RUNTIME, production before changes:** `/blog/this-page-does-not-exist-seo-check` returned 308 to `/blog`, despite never being a real article. This obscured missing URLs; no claim is made that Google had classified it as a soft 404.
- **RUNTIME, Search Console read-only export:** For the 33 then-current canonical pages, August 25–September 21 returned 4 clicks and 262 impressions, versus 9 clicks and 319 impressions for July 28–August 24. The script uses fixed consecutive 28-day windows; these are not rolling windows ending today. The current-window query/page report returned six rows without the brand name, totaling 20 impressions. Query reports omit anonymized queries; this is sparse evidence, not proof of no demand or a keyword-volume estimate. Raw records remain under ignored `.secrets/`.
- **SOURCE:** [Google's AI features guidance](https://developers.google.com/search/docs/appearance/ai-features) was read. It emphasizes indexable, helpful content, internal links, and accurate structured data; special AI markup or new AI text files are not required. No AI-ranking guarantee or mass content-generation scheme was added.
- **SOURCE:** [Anthropic's Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) was read and cited only for the workflow/agent distinction and simpler-first implementation guidance. The new articles label real estate examples as fictional and distinguish editorial recommendations from vendor claims.

## Search intent map

| Search intent                                                                  | Primary destination                      | Work completed                                                                       |
| ------------------------------------------------------------------------------ | ---------------------------------------- | ------------------------------------------------------------------------------------ |
| Custom AI agents for institutional real estate; real estate AI platform        | `/platform`                              | Descriptive title, description, visible positioning, links to both guides            |
| Custom AI agents: use cases, build versus buy, costs, integration              | `/blog/custom-ai-agents-real-estate`     | New practical guide with scoping criteria and a fictional diligence example          |
| AI operating systems for real estate: meaning, evaluation, CRM/ERP differences | `/blog/ai-operating-systems-real-estate` | New buyer's guide, responsibility comparison, failure cases and evaluation questions |
| AI due diligence for commercial real estate                                    | `/capabilities/deal-diligence`           | Niche-specific search and social title                                               |
| AI agents for real estate fund operations                                      | `/capabilities/fund-operations`          | Niche-specific search and social title                                               |
| AI investor reporting for real estate funds                                    | `/capabilities/investor-reporting`       | Niche-specific search and social title                                               |
| AI portfolio intelligence for commercial real estate                           | `/capabilities/portfolio-intelligence`   | Niche-specific search and social title                                               |
| AI voice agents for commercial real estate brokerages                          | `/capabilities/origination`              | Niche-specific search and social title                                               |
| AI listing materials for commercial real estate                                | `/capabilities/listing-media`            | Niche-specific search and social title                                               |
| AI agents for investment funds, commercial brokerages, CRE owner-operators     | `/for/*`                                 | Three distinct audience titles, with explicit real estate context                    |
| Institutional real estate AI guides                                            | `/blog`                                  | Descriptive collection title and social metadata                                     |

The commercial platform page and informational guides serve different intents rather than three near-identical sales pages. No existing URL was renamed.

## Technical changes

- The root title template appends the brand once; capability and audience metadata no longer append it themselves.
- Updated pages have explicit Open Graph and Twitter metadata instead of inheriting unrelated homepage text. All registered articles retain an absolute image URL in previews and Article structured data.
- Both guides use the existing server-rendered MDX template and research registry. The registry automatically includes them in related reading, the blog index, RSS, sitemap, and the existing LLM discovery surface. This increases canonical candidates from 33 to 35 without reinstating retired content.
- Known archived blog redirects are derived from local filenames and the active research registry at build time. Unknown URLs now reach a real 404. Security headers and Global Privacy Control handling on rendered routes remain intact; no new dependency, client widget, tracking script, or external credential was introduced.
- Regression coverage checks distinct niche titles, frontmatter/registry consistency, guide links, sitemap registration, production HTML metadata, article images, and unknown-URL status.

## Verification

**RUNTIME, local production build:**

- `npm run typecheck` — passed.
- `npm run lint` — passed.
- `npm run test` — 198 tests passed across 29 files.
- `npm run typecheck:seo` — passed.
- `npm run seo:check-institutional` — no errors; the existing 18 deliverables remain pending review. This is not editorial approval.
- `npm run build` — passed; both guides are statically generated.
- `CITATION_SURFACE_BASE_URL=http://127.0.0.1:3104 npm run seo:check-citation-surfaces` — 226/226 checks passed, covering metadata, article schema/dates, RSS, sitemap, discovery, draft exclusion, and redirects.
- A bounded-concurrency HTTP check of all 453 archived blog redirects in the built route manifest found zero failures; every one returned 308 to `/blog`.
- Manual HTTP checks confirmed the improved titles and a 404 for the nonexistent article.
- `npm run indexnow:diff -- --dry-run` — exactly two new candidates; no submission or snapshot mutation. Do not notify search engines about new pages before they are live.
- `git diff --check` — passed.

## What this does not prove

No production deployment, editorial approval, backlink acquisition, outreach, or search-engine submission was performed. No field Core Web Vitals or before/after loading benchmark was measured, so there is no performance-gain claim. No independent keyword-volume dataset was available. Existing callback/legal/privacy/security findings remain outside this scoped work; see `COMPLIANCE.md`.

After an approved release, run the same surface checker against `https://prestyj.com`, then submit the two live URLs using the existing IndexNow diff command. Compare Search Console page/query impressions, clicks, and qualified inbound inquiries across matched windows. Search engines control recrawling, indexing, title rewriting, and ranking; technical eligibility is not a ranking result.
