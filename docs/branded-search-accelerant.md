# Branded-search accelerant — Meta ads → "Prestyj" Google searches → GSC

Branded searches are the fastest trust signal for a 5-month-old domain (founded
2026). When a paid Meta visitor later types **"Prestyj"** into Google, that
query teaches Google the domain is an entity people seek by name — which lifts
rankings, knowledge-panel eligibility, and ad Quality Score across the board.

This playbook runs the **$497 batch-video offer on Meta** as the demand source,
then measures the resulting branded-query lift in **Google Search Console (GSC)**.

> The $497 strategy and CAC math live in [`tof-strategy.md`](./tof-strategy.md).
> This doc is specifically about converting that paid traffic into **branded
> search volume** and proving it in GSC.

---

## The loop

```
Meta ad ($497 / 100 ads)  →  paid visitor sees "Prestyj" brand
        ↓ (does not buy / wants to research first)
visitor searches "Prestyj" on Google  →  finds #1 branded result
        ↓
branded impression + click recorded in GSC  →  brand-entity signal to Google
        ↓
higher org rankings + knowledge panel + cheaper ads  →  compounding trust
```

The leak to plug: paid clicks that bounce are lost forever **unless** the brand
name sticks well enough that they re-search "Prestyj" later. Every creative,
landing page, and offer must over-index on saying the name **Prestyj**.

---

## Code side (already wired)

- **Meta Pixel + CAPI** — `src/lib/meta-pixel.ts`. `trackBatchTierPurchase("starter", …)`
  fires `Purchase` (browser + server-side CAPI, deduped by `eventID`) tagged
  `content_name: "starter"` so the $497 SKU is its own optimizable conversion.
- **$497 landing pages** — `/100-video-ads` (organic intent) and
  `/batch-video-ads#pricing` (starter tier). Offer data: `src/lib/batch-tiers.ts`
  (`priceLabel: "$497"`, `priceCents: 49700`).
- **Brand entity structured data** — `src/components/seo/json-ld.tsx`
  (`OrganizationJsonLd` + `WebSiteJsonLd`) with `alternateName: ["PRESTYJ", …]`
  and `sameAs` profiles incl. Wikidata `Q139892537`. This is what makes a
  "Prestyj" search return a rich, unambiguous #1 result.
- **GSC verification** — `src/app/layout.tsx` reads
  `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`; the `<meta name="google-site-verification">`
  tag is only emitted when the env var is set (no placeholder ships otherwise).

---

## Manual steps (platform side — not codeable)

These cannot be done from the repo. Do them in order.

### 1. Verify the GSC property

1. Search Console → **Add property** → URL prefix `https://prestyj.com`.
2. Choose the **HTML tag** method. Copy ONLY the `content="…"` value.
3. Set it in Vercel → Project → Settings → Environment Variables (Production):
   `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=<token>` — then redeploy.
4. Back in GSC click **Verify**. (Domain-property / DNS verification also works
   and covers all subdomains — either is fine; the env var path requires no DNS.)

### 2. Run the $497 offer on Meta

- See [`tof-strategy.md`](./tof-strategy.md) for budget, CPA, and kill-switch.
- **Creative rule for brand lift:** say "Prestyj" in the first 3 seconds of
  every video and in the primary text. The goal is name recall, not just clicks.
- Conversion event: `Purchase` filtered to `content_name = starter` ($497 SKU).

### 3. Track branded-query impressions in GSC

After ~3–7 days of post-verification data:

- GSC → **Performance → Search results**.
- Add a **Query** filter → **Custom (regex)**: `(?i)prestyj` (catches "prestyj",
  "prestyj ai", "prestyj reviews", "prestyj video ads", common misspellings).
- Compare **Impressions** + **Clicks** for that filter week-over-week. Overlay
  Meta spend dates — branded impressions should rise 2–10 days after spend ramps.

---

## What "working" looks like

| Signal                            | Source        | Target trend                          |
| --------------------------------- | ------------- | ------------------------------------- |
| `(?i)prestyj` query impressions   | GSC           | Rising w/w, lagging Meta spend by days|
| Branded-query avg position        | GSC           | Holds at 1.0–1.5 (we own the SERP)    |
| Branded CTR                       | GSC           | > 30% (high intent, name search)      |
| $497 `Purchase` (starter)         | Meta / CAPI   | At/below target CPA from tof-strategy |

If branded impressions stay flat while Meta spend climbs, the creative isn't
landing the **name** — fix the first 3 seconds and the primary-text mention
before increasing budget.

---

## Risks

- **No GSC verification** = zero branded-query visibility. Step 1 is the gate;
  do it before the first ad dollar so baseline branded volume is captured.
- **Weak name recall** — generic "100 video ads" creative drives clicks but no
  branded searches. Always pair the offer with the Prestyj name.
- **Attribution lag** — branded search shows up days after the click, not the
  same session. Compare weekly windows, not daily.
