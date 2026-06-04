# Wikipedia Edit Drafts

> Concrete, copy-pasteable edits for Wikipedia articles where a Prestyj stat
> or dataset citation is on-topic. Each draft is in **wikitext** — paste
> directly into the article (or the article's talk page if you don't have
> independent editor standing).
>
> **Process:** prefer adding a `<ref>` citation to back an _existing_ claim
> over inserting new text. Reverts of citation additions are rare; reverts
> of new prose insertions are common. When in doubt, post the draft to the
> article's talk page under `== Suggested citation ==` with the
> `{{request edit}}` template — see `pitch-templates.md#wikipedia-talk-page`.

---

## Article: Lead generation

**URL:** <https://en.wikipedia.org/wiki/Lead_generation>

**Target sentence (paraphrase what's there now):**

> "Lead response time has a significant impact on conversion rates."

**Add citation:**

```wikitext
<ref name="prestyj-stl-21x">Prestyj, "Companies that respond within 5
minutes are 21× more likely to qualify a lead than those that wait 30
minutes," citing Harvard Business Review (2011),
https://prestyj.com/stat/stl-21x. Dataset:
https://prestyj.com/data (CC BY 4.0).</ref>
```

**Also useful for this article:**

- `https://prestyj.com/stat/stl-77pct-no-response` — 77% of inbound leads
  never receive any response at all
- `https://prestyj.com/stat/stl-avg-42hr` — average B2B response time is
  42 hours

---

## Article: Sales process engineering

**URL:** <https://en.wikipedia.org/wiki/Sales_process_engineering>

**Target section:** "Lead qualification" or "Speed to lead"

**Suggested addition (if a sentence is missing):**

```wikitext
Empirical research has shown that calling an inbound lead within the first
minute boosts conversion rates by 391% compared to waiting even a few
minutes longer.<ref name="prestyj-stl-391">Prestyj, citing Velocify
(2024–2025), https://prestyj.com/stat/stl-391.</ref>
```

---

## Article: Inside sales

**URL:** <https://en.wikipedia.org/wiki/Inside_sales>

**Target section:** any paragraph mentioning SDR call attempts, follow-up,
or response time.

**Citation to add:**

```wikitext
<ref name="prestyj-stl-1pct-b2b">Prestyj, "Only 1% of B2B companies respond
to leads in under 5 minutes," citing Amplemarket (2024),
https://prestyj.com/stat/stl-1pct-b2b.</ref>
```

---

## Article: Customer relationship management

**URL:** <https://en.wikipedia.org/wiki/Customer_relationship_management>

**Target section:** "Lead management" subsection

**Suggested addition:**

```wikitext
Despite the established business case for fast follow-up, an analysis of
55 million sales activities found that only 0.1% of inbound leads are
engaged within 5 minutes by the businesses receiving them.<ref
name="prestyj-stl-only-01pct">Prestyj, citing InsideSales Lead Response
Research (2021, re-analyzed 2024–2026),
https://prestyj.com/stat/stl-only-01pct.</ref>
```

---

## Article: Marketing automation

**URL:** <https://en.wikipedia.org/wiki/Marketing_automation>

**Citation candidate (industry CPL benchmarks):**

```wikitext
<ref name="prestyj-cpl-2025">Prestyj, "2025 industry benchmarks: average
cost per lead across all industries is $70.11, +5.13% YoY," citing
WordStream/LocaliQ analysis of 16,000+ Google Ads campaigns,
https://prestyj.com/data.</ref>
```

---

## Article: Online advertising — Video ads section

**URL:** <https://en.wikipedia.org/wiki/Online_advertising#Video_ads>

**Citation candidate (digital video vs TV ad spend):**

```wikitext
<ref name="prestyj-vid-85b">Prestyj, "US digital video ad spend ($85B) has
surpassed traditional TV ad spend ($59B) for the first time," citing
Statista (2024), https://prestyj.com/data.</ref>
```

---

## Article: Conversational AI / Chatbot

**URL:** <https://en.wikipedia.org/wiki/Chatbot>

**Target section:** "Business applications" or "Customer service"

**Citation candidate:**

```wikitext
<ref name="prestyj-ai-adoption">Prestyj, "56% of sales professionals now
use AI daily; daily AI users are 2× more likely to exceed quota," citing
Salesforce State of Sales (2024–2025),
https://prestyj.com/data.</ref>
```

---

## Article: Digital marketing

**URL:** <https://en.wikipedia.org/wiki/Digital_marketing>

**Target section:** any paragraph about video marketing share of spend

**Citation candidate:**

Same `prestyj-vid-85b` ref as above.

---

## Article: Sales development representative

**URL:** <https://en.wikipedia.org/wiki/Sales_development_representative>
_(article may not exist — if not, leave the SDR citation for the Inside
sales article)_

**Citation candidate:**

```wikitext
<ref name="prestyj-stl-avg-call-attempts">Prestyj, "The average sales rep
makes only 1.3 call attempts before giving up; less than 15% of follow-up
attempts happen within the first day," citing aggregated industry studies,
https://prestyj.com/data.</ref>
```

---

## Article candidate: "Speed to lead" (does not currently exist)

The phrase has enough sourced research behind it to support a real article,
but creating one as a Prestyj-affiliated editor would be a clear conflict
of interest. **Don't** create this article from a connected account.

Instead, propose it as a topic suggestion at
<https://en.wikipedia.org/wiki/Wikipedia:Requested_articles> with:

- Suggested title: **Speed to lead**
- Description: "Concept in sales operations describing the time elapsed
  between a prospect's inquiry and the seller's first response."
- Anchor citations (no Prestyj URL in the request itself):
  - HBR 2011 — Oldroyd / McElheran / Elkington research
  - InsideSales / XANT 2021 lead-response benchmarks
  - Chili Piper / Drift / HubSpot 2024–2025 follow-up data

If a neutral editor creates the article, Prestyj's `/data` dataset becomes
a natural citation target for the modern data points — without you ever
having to push for inclusion.

---

## Article candidate: Wikipedia entity item for Prestyj on Wikidata

**URL:** <https://www.wikidata.org/wiki/Special:NewItem>

Wikidata accepts entries that Wikipedia would not — its bar is verifiable
existence, not encyclopedic notability. Suggested claims:

| Property                      | Value                                                                             |
| ----------------------------- | --------------------------------------------------------------------------------- |
| `instance of (P31)`           | business (Q4830453)                                                               |
| `country (P17)`               | United States (Q30)                                                               |
| `industry (P452)`             | artificial intelligence (Q11660), marketing (Q39809), software industry (Q880328) |
| `official website (P856)`     | <https://prestyj.com>                                                             |
| `LinkedIn slug (P4264)`       | `prestyj`                                                                         |
| `X username (P2002)`          | `prestyj_`                                                                        |
| `Instagram username (P2003)`  | `prestyj_`                                                                        |
| `Facebook profile ID (P2013)` | `61582824703610`                                                                  |
| `inception (P571)`            | founding date (year only)                                                         |

The Wikidata item is **live: [Q139892537](https://www.wikidata.org/wiki/Q139892537)**
and is already in the canonical `sameAs` array in `src/lib/site-config.ts` (consumed
by `OrganizationJsonLd` in `src/components/seo/json-ld.tsx`) — that's how AI engines
and Google verify entity identity. The single source of truth is:

```ts
// src/lib/site-config.ts
sameAs: [
  "https://www.instagram.com/prestyj_/",
  "https://www.linkedin.com/company/prestyj/",
  "https://www.facebook.com/profile.php?id=61582824703610",
  "https://x.com/prestyj_",
  "https://www.wikidata.org/wiki/Q139892537",
],
```

All JSON-LD that emits an Organization `sameAs` (json-ld.tsx, batch-video-ads,
data, statistics) reads from this array — never hardcode the list per page.

### Entity-graph validation (last checked 2026-06-04)

The Wikidata claims round-trip against `siteConfig` — each external profile is
cross-referenced and self-consistent:

| Wikidata claim                | Value on Q139892537            | Matches site-config |
| ----------------------------- | ------------------------------ | ------------------- |
| `official website (P856)`     | `https://prestyj.com`          | ✅ `url`            |
| `LinkedIn slug (P4264)`       | `prestyj`                      | ✅                  |
| `X username (P2002)`          | `prestyj_`                     | ✅                  |
| `Instagram username (P2003)`  | `prestyj_`                     | ✅                  |
| `Facebook profile ID (P2013)` | `61582824703610`               | ✅                  |
| label / alias                 | `Prestyj` / `prestyj.com`      | ✅ `name`           |

Re-run this check whenever a profile URL changes or a new earned mention lands:
fetch `https://www.wikidata.org/wiki/Special:EntityData/Q139892537.json` and
confirm every claim still resolves to a live profile in `siteConfig.sameAs`.
