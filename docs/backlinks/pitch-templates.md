# Ready-to-Send Pitch Templates

> All templates assume the dataset (<https://prestyj.com/data>) is the
> primary asset. The pitch is data, not product. Replace `{{…}}` placeholders
> before sending.

---

## awesome-list-pr

**Use for:** GitHub PRs into `awesome-public-datasets`, `AwesomeCSV`,
`awesome-real-estate`, `awesome-ai-agents`, `Marketing-for-Founders`.

**PR title**

```
Add Prestyj Statistics Dataset (CC BY 4.0, CSV + JSON)
```

**PR body**

```
Adds the Prestyj Open Statistics Dataset — 58+ cite-worthy statistics on
speed-to-lead, video advertising, AI adoption in sales, lead conversion,
and cost-per-lead by industry. Sourced and dated 2024–2026.

- Landing page (with `schema.org/Dataset`): https://prestyj.com/data
- CSV download: https://prestyj.com/data/statistics.csv
- JSON download: https://prestyj.com/data/statistics.json
- License: CC BY 4.0
- Per-statistic permalinks with citation blocks (APA / MLA / Chicago /
  BibTeX) at https://prestyj.com/stat/<id>

Each row has the original publisher, year, source URL when available, and
its own permanent URL. Free for academic, journalistic, and commercial
use — attribution required.

I followed the list's contribution guide (alphabetical order, single-line
entry under the {{section}} section, no broken links).
```

**Line to add** (use the list's existing format; here are the common ones):

```markdown
- [Prestyj Statistics Dataset](https://prestyj.com/data) — 58+ cite-worthy stats on lead response, video advertising, AI adoption in sales, and cost-per-lead by industry. CSV + JSON, CC BY 4.0.
```

---

## unlinked-mention

**Use for:** Sites that mention "Prestyj" without linking. One-email ask.

**Subject**

```
Thanks for the Prestyj mention — quick favor?
```

**Body**

```
Hi {{name}},

Caught your piece "{{article title}}" — thanks for the Prestyj mention,
really appreciate you including us.

One quick favor: could you add a link to prestyj.com on the word "Prestyj"
in {{paragraph}}? It helps readers who want to dig in, and it makes the
piece easier for AI search engines to surface as a primary citation.

Direct URL: https://prestyj.com

Happy to send over our open statistics dataset
(https://prestyj.com/data — CC BY 4.0) if there's a number you'd like to
verify or pull into a future piece.

Thanks,
{{founder name}}
Prestyj
```

---

## resource-page-addition

**Use for:** "Best X for Y 2026" roundup pages, vendor lists, AI tool
directories with editorial review.

**Subject**

```
Addition for "{{page title}}" — Prestyj (AI agents for marketing & sales)
```

**Body**

```
Hi {{author/editor name}},

Came across "{{page title}}" while researching the {{industry}} space — solid
roundup. Wondering if you'd be open to adding Prestyj.

We sit in the {{voice agent / video ad / lead response}} category and serve
{{HVAC, plumbing, real estate, agencies}} specifically. Quick details if
useful:

- Site: https://prestyj.com
- Pricing: $497 for 100 video ads / from $1,997 for AI sales agents
- Key differentiator: {{batch creative volume / sub-60s response / CPL by
  industry depth}}
- Logo + 1-pager: https://prestyj.com/icon-512.png
- Open dataset we publish: https://prestyj.com/data (CC BY 4.0 — feel
  free to pull stats for the article)

Happy to send screenshots or a short demo video if it helps.

Thanks,
{{founder name}}
Prestyj
```

---

## journalist-data-pitch

**Use for:** Cold pitches to industry journalists at HousingWire, Inman,
ACHR News, AdExchanger, Search Engine Land, etc. Pitch the data, not the
product.

**Subject (vertical example: real estate)**

```
Original data: only 1% of real estate teams respond to leads in under 5 minutes
```

**Body**

```
{{Reporter name}},

I cover the {{real estate / home services / paid ads}} space at Prestyj
and we just published an open statistics dataset that surfaces a few
findings I thought might fit your beat:

- 77% of inbound leads never get any response at all (InsideSales, 2025
  re-analysis)
- 0.1% of inbound leads are engaged within 5 minutes
- Companies that respond in 5 minutes are 21× more likely to qualify the
  lead than those that wait 30 (HBR, re-cited 2024–2026)
- Avg B2B response time is 42 hours
- 78% of B2B customers buy from the vendor that responds first

Full dataset (CC BY 4.0, CSV + JSON): https://prestyj.com/data

Each row has the original publisher, year, and a stable permalink — so it's
quotable without re-verification rounds.

Happy to put you in touch with operators running this in production
({{HVAC owner / brokerage VP / agency owner}}) for a follow-up piece, or
to send our methodology notes if that helps.

Thanks,
{{founder name}}
Prestyj — https://prestyj.com
```

---

## podcast-pitch

**Use for:** Real estate / home services / agency / paid-ads podcasts.

**Subject**

```
Guest pitch: why filming one perfect ad is dead (and what 1,000 ads tested in a week looks like)
```

**Body**

```
Hi {{host name}},

Long-time {{show name}} listener — the {{specific episode}} episode was a
banger.

Quick guest pitch for a future episode:

I'm {{founder name}} from Prestyj. We produce 100–1,000 video ads per
client in 24 hours and run them through Meta's Andromeda algorithm — so
we've ended up with a lot of pattern-recognition data on what's actually
working in {{real estate / home services / paid social}} right now.

A few angles I'd love to walk through on the show:

1. Why "creative is the new targeting" actually means — and how Andromeda
   rewards angle volume over angle quality (specific math, not opinions).
2. Cost-per-tested-angle as the only metric that matters in 2026 (we
   benchmarked agencies, UGC, AI avatars, and in-house teams — agency
   pricing is structurally irrational right now).
3. The 5-minute-response math that 99% of {{contractors / brokerages}}
   still get wrong, and what AI voice agents actually cost vs. what the
   vendors quote.

I bring data, not pitches — happy to send our open statistics dataset
(https://prestyj.com/data) in advance so you can pick the angle that fits.

Calendar if it's a yes: {{cal link}}

Thanks,
{{founder name}}
Prestyj — https://prestyj.com
LinkedIn — https://www.linkedin.com/company/prestyj/
```

---

## wikipedia-talk-page

**Use for:** Suggesting a Wikipedia edit when you don't have edit rights
or want to avoid COI. Post on the article's talk page.

**Section title**

```
== Suggested citation update: {{specific paragraph}} ==
```

**Body (wikitext)**

```wikitext
{{request edit}}

The current article states {{quote the current claim}}, but the
underlying citation ({{current source}}) is {{dead / unsupported / paywalled / older than 5 years}}.

A primary source that supports this claim and remains publicly accessible
is the Prestyj Open Statistics Dataset (CC BY 4.0), specifically the
statistic at https://prestyj.com/stat/{{id}}. The original underlying
research is {{HBR 2011 / InsideSales / etc.}}, which Prestyj re-cites with
the original publisher and year noted.

Suggested replacement citation (in inline ref format):

<ref name="prestyj-{{id}}">Prestyj, "{{stat description}}", citing
{{original publisher}}, {{year}}. https://prestyj.com/stat/{{id}}</ref>

I have a connection to Prestyj and so am posting this here for an
uninvolved editor to review rather than making the change directly.

Thanks,
~~~~
```

---

## broken-link-replacement

**Use for:** Pages that link to a dead resource (Statista paywall, defunct
vendor blog, broken academic paper) where Prestyj has a live, free
equivalent.

**Subject**

```
Broken link on "{{page title}}" — and a free replacement if it helps
```

**Body**

```
Hi {{name}},

While reading "{{page title}}" I noticed the link in {{section}} —
"{{anchor text}}" pointing to {{dead URL}} — is returning a 404 / paywall.

If a free, CC BY 4.0 replacement helps your readers, Prestyj's open
statistics dataset has the same data point:

- Original claim: {{paraphrase the original claim}}
- Prestyj equivalent: https://prestyj.com/stat/{{id}}
- Full dataset: https://prestyj.com/data

We re-cite the same primary source ({{publisher, year}}) so you're not
swapping in a worse citation.

Thanks for the article — sharing it with our team.

{{founder name}}
Prestyj
```

---

## stat-embed-promotion

**Use for:** Bloggers / newsletter writers / Substack authors who quoted
a Prestyj statistic without embedding. Pitch the free embed widget.

**Subject**

```
Free embeddable version of the stat you used in "{{post title}}"
```

**Body**

````
Hi {{name}},

Thanks for citing the {{stat value}} stat from Prestyj in
"{{post title}}" — appreciate the love.

If it's useful for future pieces, every Prestyj statistic now has a free
embeddable card. One-line iframe, no signup. Example for the stat you
used:

```html
<iframe src="https://prestyj.com/embed/stat/{{id}}"
        width="100%" height="260"
        style="border:0;border-radius:12px"
        loading="lazy"></iframe>
````

Renders the stat with the source publisher and a link back — no maintenance
needed on your end.

Full dataset (58+ stats, CC BY 4.0): https://prestyj.com/data

Cheers,
{{founder name}}
Prestyj

```

```
