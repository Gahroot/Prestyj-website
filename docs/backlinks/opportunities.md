# Prestyj Backlink Opportunity Dossier

> This is a working hit list. Every row is a real target with a URL. Pitches
> are in `pitch-templates.md`. Update the `Status` column as you work through
> them.
>
> The asset that does the heavy lifting is the new open dataset:
> <https://prestyj.com/data> (CSV + JSON, CC BY 4.0). Anything that touches
> that URL must attribute back — that's the link.

---

## Tier 1 — High-leverage, fastest wins

These are the targets where the dataset / embed system gives us a real
unfair advantage. Do these first.

### 1.1 GitHub awesome-list submissions

Each PR below adds one entry pointing to either `https://prestyj.com/data`
or (when published) a separate `github.com/prestyj/statistics-dataset` repo
populated from `docs/oss-dataset/`.

| #   | List                    |  Stars | URL                                                      | Entry to add                                                                                                       | Pitch in                             |
| --- | ----------------------- | -----: | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------ |
| 1   | awesome-public-datasets | DR ~90 | <https://github.com/awesomedata/awesome-public-datasets> | Add under `Advertising` and `Social Sciences` → `Lead Response, Video Advertising & AI Sales Statistics — Prestyj` | `pitch-templates.md#awesome-list-pr` |
| 2   | AwesomeCSV              |   926★ | <https://github.com/secretGeek/AwesomeCSV>               | Add under `Data` → CSV dataset link                                                                                | same                                 |
| 3   | awesome-ai-agents       |   28k★ | <https://github.com/e2b-dev/awesome-ai-agents>           | Add Prestyj under the relevant sales/marketing agent category                                                      | same                                 |
| 4   | awesome-real-estate     |   312★ | <https://github.com/etewiah/awesome-real-estate>         | Add `AI lead response for real estate brokerages — Prestyj` and a `Real Estate ROI Calculator` link                | same                                 |
| 5   | Marketing-for-Founders  |  6.2k★ | <https://github.com/EdoStra/Marketing-for-Founders>      | Add the `/statistics` and `/data` URLs under "Data & Research"                                                     | same                                 |
| 6   | awesome-llm-apps        |  111k★ | <https://github.com/Shubhamsaboo/awesome-llm-apps>       | Long shot — only if we have an OSS demo to add                                                                     | n/a                                  |
| 7   | awesome-n8n-templates   |   22k★ | <https://github.com/enescingoz/awesome-n8n-templates>    | Publish an n8n template that uses Prestyj's stats CSV via HTTP and PR it                                           | n/a                                  |

**Action steps**

1. Create a `prestyj/statistics-dataset` GitHub org/repo. Copy `docs/oss-dataset/`
   contents into it. Add the CSV + JSON as committed files (so the repo is
   self-contained, not just a redirect to prestyj.com).
2. For each list above, fork → add one alphabetical-position-correct line →
   open a PR with the template in `pitch-templates.md`. Keep the PR small —
   one line, one paragraph, one screenshot at most.

### 1.2 Google Dataset Search inclusion

- **URL:** <https://datasetsearch.research.google.com/>
- **Mechanism:** Automatic — once `https://prestyj.com/data` is live with
  `schema.org/Dataset` markup (already shipped in `src/app/data/page.tsx`)
  and Googlebot indexes it, the dataset surfaces in Dataset Search and is
  pulled into AI Overviews / Perplexity citations.
- **Status check:** `site:prestyj.com/data` in Dataset Search after the
  next crawl cycle (~7–14 days post-deploy).

### 1.3 Wikidata entry

- **URL:** <https://www.wikidata.org/wiki/Special:NewItem>
- **Action:** Create an item for Prestyj with statements:
  - `instance of (P31)`: business (Q4830453)
  - `industry (P452)`: artificial intelligence (Q11660), marketing (Q39809)
  - `country (P17)`: United States
  - `official website (P856)`: <https://prestyj.com>
  - `inception (P571)`: founding date
  - `LinkedIn slug (P4264)`: `prestyj`
  - `X/Twitter handle (P2002)`: `prestyj_`
- **Why it matters:** Wikidata is DR ~95 and Wikipedia + many AI engines
  pull entity metadata from it. Adding the `official website (P856)` claim
  is a permanent backlink and an entity-graph signal.
- **Notability:** Wikidata is far more lenient than Wikipedia. A business
  with a real website, social profiles, and customers passes.

### 1.4 Schema.org + LLM citation upgrades

Already shipped in this branch:

- `schema.org/Dataset` with `distribution` (CSV + JSON), `license` (CC BY 4.0),
  `creator`, `temporalCoverage`, `variableMeasured`, and `measurementTechnique`
  on `/data`.
- `schema.org/Claim` on each `/stat/[id]` page identifying Prestyj as the
  publisher of the citable fact, with a `citation` link to the original
  source.
- Sitemap entries for `/data`, `/data/statistics.csv`, `/data/statistics.json`,
  and every `/stat/[id]`.

This is what causes Perplexity / ChatGPT / Claude / Gemini to cite
`prestyj.com/data` (or a specific `/stat/<id>`) rather than someone else's
blog when the answer is one of our statistics.

---

## Tier 2 — Wikipedia citation seeding

Wikipedia external links to `prestyj.com` are `nofollow`, but they:

- Send measurable referral traffic from the highest-DR site on the web.
- Train AI models that ingest Wikipedia (ChatGPT, Claude, Gemini, Perplexity
  all use Wikipedia heavily) — so they propagate into AI citations.
- Build entity association: if Wikipedia's "Lead generation" article cites
  prestyj.com once, Google and LLMs see Prestyj as a topical authority.

### Article targets

| Article                              | URL                                                              | Citation opportunity                                                                                                            |
| ------------------------------------ | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **Lead generation**                  | <https://en.wikipedia.org/wiki/Lead_generation>                  | Replace any dead / weak citations with our dataset URL or a specific `/stat/<id>`. Target: response time, average industry CPL. |
| **Sales process**                    | <https://en.wikipedia.org/wiki/Sales_process_engineering>        | Add a citation for the 5-minute / 30-minute response curve.                                                                     |
| **Conversational AI**                | <https://en.wikipedia.org/wiki/Chatbot>                          | Add a citation for AI receptionist adoption stats.                                                                              |
| **Marketing automation**             | <https://en.wikipedia.org/wiki/Marketing_automation>             | Add citations for industry CPL by vertical.                                                                                     |
| **Digital marketing**                | <https://en.wikipedia.org/wiki/Digital_marketing>                | Citation for $85B digital video ad spend vs $59B TV.                                                                            |
| **Video advertising**                | <https://en.wikipedia.org/wiki/Online_advertising#Video_ads>     | Citation for video ROI / completion stats.                                                                                      |
| **Customer relationship management** | <https://en.wikipedia.org/wiki/Customer_relationship_management> | Stat about leads never contacted (77%).                                                                                         |
| **Inside sales**                     | <https://en.wikipedia.org/wiki/Inside_sales>                     | Speed-to-lead and SDR call-attempt statistics.                                                                                  |

### Wikipedia rules to follow

1. **Don't add to "External links"** — those get deleted. Add as a numbered
   `<ref>` citation backing a specific claim already in the article.
2. **Cite the original publisher and Prestyj together** when our entry adds
   the year, the verbatim number, and a stable URL the editor can verify.
   E.g. cite HBR 2011 + Prestyj `/stat/stl-21x` as the modern re-cite with
   the dataset.
3. **No conflict of interest from a Prestyj-affiliated account.** Use the
   Wikipedia talk page to suggest the edit if you can't make it independently.
4. **Edit profile age matters** — accounts <50 edits get reverted. If you
   don't have one, the {{request edit}} mechanism on the article talk page
   is the correct path.

Drafts of suggested edits are in `wikipedia-edit-drafts.md`.

---

## Tier 3 — Brand-mention reclamation (free, high-conversion)

Sites that already mention "Prestyj" but don't link to <https://prestyj.com>.
Each one is a single-email ask: "thanks for the mention, would you mind
linking it?"

### How to find them (no paid tools)

1. **Google operator queries** (one-off, no signup):
   - `"Prestyj" -site:prestyj.com -site:linkedin.com -site:instagram.com -site:x.com -site:facebook.com`
   - `"prestyj.com"` (raw URL mentions)
   - `"prestyj batch video ads" -site:prestyj.com`
2. **Bing Webmaster Tools** → Backlinks report (free, more comprehensive
   than Google's stripped-down version).
3. **Ahrefs Webmaster Tools** (free for verified domain owners — limited but
   real data; no paid tier needed).
4. **Search the AI citations log**: `data/ai-citations/2026-05-22/` lists
   queries where Prestyj was cited by AI engines but possibly without a
   linkable surface. Cross-reference with the original article each engine
   cited.

### Outreach

For each unlinked mention, use the `unlinked-mention` template in
`pitch-templates.md`. Conversion rate is typically 30–50% with a one-line
ask.

---

## Tier 4 — Resource / "best tools" page placement

These are pages like "Best AI voice receptionists for HVAC 2026" or
"Best AI calling software for real estate." When written by anyone other
than a direct competitor, the author will usually accept a free,
zero-effort addition if you give them everything they need (logo, 2-sentence
positioning, screenshot).

### Search queries to harvest targets

Each query below returns 50–200 candidate pages. Use them to populate the
hit list.

| Vertical         | Search query                                 |
| ---------------- | -------------------------------------------- |
| Real estate      | `"best AI" "real estate" "ISA" 2025 OR 2026` |
| HVAC             | `"best AI voice" "HVAC" -site:prestyj.com`   |
| Plumbers         | `"AI receptionist" "plumbing" review`        |
| Roofers          | `"AI lead response" "roofing"`               |
| Solar            | `"AI sales" "solar" tools`                   |
| Real estate ISAs | `"AI ISA" alternatives`                      |
| Voice agents     | `"top AI voice agents" 2026`                 |
| Batch video ads  | `"AI video ads" "batch" alternatives`        |
| Speed to lead    | `"speed to lead" tools statistics`           |

For each candidate page:

1. Read the page.
2. Confirm it's open to additions (look for "submit your tool", contact, or
   author byline).
3. Send the `resource-page-addition` pitch from `pitch-templates.md`.

### Already-known industry publication targets

Direct outreach without going through a generic contact form.

- **HousingWire** — <https://www.housingwire.com> — real estate news; their
  "Tech" section regularly rounds up vendors. Editorial: editor@housingwire.com
- **Inman** — <https://www.inman.com> — real estate; covers tech vendors,
  runs vendor reviews. Pitch: tips@inman.com
- **HVAC Insider / ACHR News** — <https://www.achrnews.com>
- **Roofing Contractor magazine** — <https://www.roofingcontractor.com>
- **Plumbing & Mechanical** — <https://www.pmmag.com>
- **Modern Contractor Solutions** — <https://mcsmag.com>
- **Search Engine Land / SEJ** — for the ad-creative / Andromeda content
- **AdExchanger** — for video ad / creative volume coverage
- **Search Engine Journal** — for AI search citation methodology

For each, the pitch is the data, not the product. See `pitch-templates.md`.

---

## Tier 5 — Journalist / podcast outreach

### Featured.com / Qwoted / Help A B2B Writer (HARO replacements)

- **Featured.com:** <https://featured.com> — daily journalist queries. Free
  expert tier; answer 3–5 queries/day that match Prestyj's domain expertise
  (AI in sales, home services marketing, real estate lead response, ad
  creative testing).
- **Qwoted:** <https://www.qwoted.com> — confirmed active; serves Forbes,
  Inc., Entrepreneur sourcing. Free expert tier with daily digest.
- **Help A B2B Writer:** <https://helpab2bwriter.com> — free; queries
  delivered by email twice weekly.
- **SourceBottle:** <https://sourcebottle.com> — Australia-focused but
  includes global queries.
- **Terkel (now Featured):** acquired and folded into Featured.com.

**Founder profile setup:** Create one for the Prestyj founder with the
following bio template (drives backlinks from each answered query that gets
published):

> Founder of Prestyj (<https://prestyj.com>) — AI agents for marketing &
> sales, used by home services, real estate, and agency teams. Authored the
> open Prestyj Statistics Dataset (CC BY 4.0): <https://prestyj.com/data>.

When a journalist publishes, the bio link is your backlink. Keep the bio
identical across platforms so journalists copy-paste it.

### Podcast targets (founder-guesting)

Real podcasts in Prestyj's verticals. Pitch using `podcast-pitch` in
`pitch-templates.md`.

| Show                             | Vertical                       | Host                   | Where         |
| -------------------------------- | ------------------------------ | ---------------------- | ------------- |
| The Tom Ferry Podcast Experience | Real estate                    | Tom Ferry              | Apple/Spotify |
| Real Estate Rockstars            | Real estate                    | Aaron Amuchastegui     | Apple/Spotify |
| Massive Agent Podcast            | Real estate                    | Dustin Brohm           | Apple/Spotify |
| Service Business Mastery         | Home services                  | Tersh Blissett         | Apple/Spotify |
| The Home Service Expert          | Home services (HVAC, plumbing) | Tommy Mello            | Apple/Spotify |
| The Successful Contractor        | Contractors                    | various                | Apple/Spotify |
| Roofing Success                  | Roofing                        | Jim Ahlin              | Apple/Spotify |
| Permission to Hustle             | Agency owners                  | various                | Apple/Spotify |
| Perpetual Traffic                | Paid ads / DR                  | Tier 11                | Apple/Spotify |
| The DigitalMarketer Podcast      | Marketing                      | Mark de Grasse         | Apple/Spotify |
| Ad Age Marketer's Brief          | Marketing                      | various                | Apple/Spotify |
| Marketing Over Coffee            | Marketing                      | John Wall & Chris Penn | Apple/Spotify |

Each show description includes a bio link in the episode notes — that's the
backlink. Length doesn't matter; the link does.

---

## Tier 6 — Free directories with editorial review

Free, no-paywall directories that real humans use (and pass real link
equity). Skip anything that asks for payment to list, or that has spammy
neighbors.

| Directory         | DR  | Notes                                                                                 |
| ----------------- | --- | ------------------------------------------------------------------------------------- |
| Crunchbase        | 91  | Free profile, requires verification. `Company URL` field is the backlink.             |
| G2.com            | 92  | Free vendor profile; backlink in "Visit website" field.                               |
| Capterra          | 91  | Free profile. Linked from each category page.                                         |
| Software Advice   | 89  | Sibling of Capterra. Free profile.                                                    |
| Product Hunt      | 81  | One-time launch + permanent product page.                                             |
| BetaList          | 77  | One-time submission (if not yet listed).                                              |
| AlternativeTo     | 78  | Add Prestyj as alternative to listed competitors (Conversica, Drift, Smith.ai, etc.). |
| TheresAnAIForThat | 72  | AI tool directory; free submission.                                                   |
| Futurepedia       | 69  | AI directory; free submission.                                                        |
| F6S               | 66  | Startup directory; free.                                                              |

For each, fill the profile completely (description, screenshots, integrations,
pricing) — half-finished profiles get deprioritized in their internal search.

---

## Tier 7 — Original-research distribution

The dataset itself is now linkable. To compound, package one or two
"State of X" reports off the dataset and pitch them as headlines:

1. **The 2026 State of Lead Response** (60 stats, primary research methodology
   page). Linkable as a single PDF + landing page.
2. **The 2026 State of AI in Sales** (28+ stats, McKinsey/Gartner/Salesforce
   re-citations + Prestyj methodology).
3. **The 2026 State of Video Ad Creative Volume** (proprietary angle:
   cost-per-tested-angle + Andromeda thesis — Prestyj is the de facto
   primary source here).

Each report:

- Lives at `prestyj.com/research/<slug>` with its own `schema.org/Report`
  schema.
- Has a downloadable PDF (still pulls organic links from people uploading
  to Scribd, ResearchGate, etc.).
- Gets pitched to industry journalists via Tier 5 with the data, not a
  product pitch.

(Building the research landing pages is the next deliverable after this
backlink machine is live.)

---

## Tier 8 — One-line wins that compound

- **GitHub profile README** at `github.com/prestyj` linking to prestyj.com
  and the dataset repo.
- **LinkedIn company "Website" field** — already done; confirm it's the
  canonical URL.
- **YouTube channel "About" links** if you have a channel — link
  prestyj.com, /data, and your founder's LinkedIn.
- **Apple Podcasts founder bio** if guesting frequently.
- **Speakerhub / SpeakerMatch** founder profiles — pitch as a speaker on
  "AI in home services marketing." Free profile = free backlink.
- **DEV.to / Hashnode** — cross-post 1–2 of your top blog posts (the
  cold-outreach AI vs human one is already gathering AI citations; mirror
  it). Canonical link back to prestyj.com.
- **Indie Hackers** — founder profile + 1–2 milestone posts referencing
  prestyj.com.
- **Substack mirror of the statistics newsletter** with each issue linking
  back to `/data`.

---

## Maintenance

- **Quarterly:** refresh the dataset (`statistics-data.ts`), bump version,
  ping `awesome-public-datasets` maintainers if the entry needs the year
  updated.
- **Monthly:** run the brand-mention search operators in Tier 3 to catch
  new unlinked mentions early.
- **Weekly:** answer 3–5 Featured.com / Qwoted queries.
- **Per podcast appearance:** confirm bio link is present in show notes
  before the episode airs.

---

## Status

| Workstream                                     | Owner   | Status     |
| ---------------------------------------------- | ------- | ---------- |
| Dataset live (`/data`)                         | Eng     | ✅ Shipped |
| Per-stat permalinks (`/stat/[id]`)             | Eng     | ✅ Shipped |
| Embed widgets (`/embed/stat/[id]`)             | Eng     | ✅ Shipped |
| Calculator embeds (`/embed/calculator/[slug]`) | Eng     | ✅ Shipped |
| OSS repo content (`docs/oss-dataset/`)         | Eng     | ✅ Drafted |
| Push OSS repo to GitHub                        | Founder | ⏳         |
| Wikidata entry                                 | Founder | ⏳         |
| awesome-public-datasets PR                     | Founder | ⏳         |
| awesome-real-estate PR                         | Founder | ⏳         |
| AwesomeCSV PR                                  | Founder | ⏳         |
| awesome-ai-agents PR                           | Founder | ⏳         |
| Crunchbase / G2 / Capterra profiles            | Founder | ⏳         |
| Featured.com / Qwoted profiles                 | Founder | ⏳         |
| Wikipedia talk-page suggestions                | Founder | ⏳         |
| Brand-mention reclamation sweep                | Founder | ⏳         |
