# Content Engine Retargeting Setup

This document covers the **manual platform-side configuration** required to make the `ContentEngineVisitor` retargeting signal actually populate audiences in **Meta Ads Manager** and **LinkedIn Campaign Manager**.

The code side is already wired up — every visitor of `/done-for-you-social-media` and its variants automatically fires:

- A custom Meta Pixel event named `ContentEngineVisitor` (browser + server-side CAPI)
- A LinkedIn Insight Tag page-load event (and an event-specific conversion if configured)

You only need to (a) create the audiences/conversions in the ad platforms and (b) optionally set the LinkedIn env vars.

---

## Pages that fire the event

The `<ContentEngineVisitorPixel />` component is mounted inside `ContentEnginePageLayout`, so the event fires on **every page that uses that layout**:

| Variant slug   | URL                             |
| -------------- | ------------------------------- |
| Canonical      | `/done-for-you-social-media`    |
| Replace-a-hire | `/ai-content-department`        |
| Volume tier    | `/1000-posts-per-month`         |
| Generic SEO    | `/ai-social-media-management`   |
| Generic SEO    | `/managed-social-media-service` |
| Generic SEO    | `/social-media-on-autopilot`    |

The current `pathname` is sent as a `variant` custom parameter on the Meta event so you can split the audience per landing page.

---

## 1. Environment variables

Add to `.env.local` (and to your Vercel project — Production + Preview):

```bash
# LinkedIn Insight Tag — base partner ID (required to load the tag at all)
NEXT_PUBLIC_LINKEDIN_PARTNER_ID=1234567

# LinkedIn event-specific conversion ID for the Content Engine audience
# Optional. If unset, only the page-load Insight Tag fires (still populates
# the URL-based retargeting audience created in step 3).
NEXT_PUBLIC_LINKEDIN_CONTENT_ENGINE_CONVERSION_ID=12345678
```

The Meta Pixel ID is hardcoded in `src/lib/meta-pixel.ts` (`892763637077397`) — no env var needed.

For server-side CAPI, ensure `META_CAPI_ACCESS_TOKEN` is already set (used by `/api/meta-capi`).

---

## 2. Meta Ads Manager — set up the custom audience

### 2a. Confirm the custom event is being received

1. Open **Meta Events Manager** → select pixel `892763637077397` (PRESTYJ).
2. Click **Test Events** tab.
3. In another browser tab, visit `https://prestyj.com/done-for-you-social-media`.
4. You should see two events appear within ~5 seconds:
   - `PageView` (standard, fired by the base pixel)
   - `ContentEngineVisitor` (custom, fired by `ContentEngineVisitorPixel`)
5. Click the `ContentEngineVisitor` row and confirm `custom_data.variant` matches the URL path.

If you only see the browser event, check the **Overview** tab to confirm CAPI is also receiving (look for the "Server" badge) — it may take a minute longer than the browser event.

### 2b. Create the custom audience

1. Go to **Audiences** → **Create audience** → **Custom audience** → **Website**.
2. **Source**: Pixel `892763637077397`.
3. **Events**: choose **Custom events** → `ContentEngineVisitor`.
4. **Retention**: 180 days (max — these are high-intent service buyers, the long window matters).
5. **Audience name**: `Content Engine — Visitors (180d)`.
6. Click **Create audience**.

### 2c. Create per-variant sub-audiences (optional, recommended)

For each high-traffic variant, repeat 2b but add an **inclusion rule** on the custom parameter:

- Filter: `variant` `equals` `/done-for-you-social-media`
- Audience name: `Content Engine — Canonical (180d)`

Repeat for each path in the table above. This lets you run differentiated creative per landing page (e.g., "replace-a-hire" creative against `/ai-content-department` visitors only).

### 2d. Wire to a campaign

1. Create a new **Sales** or **Leads** campaign.
2. At the **Ad set** level, under **Audience controls** → **Custom audiences**, add `Content Engine — Visitors (180d)`.
3. Exclude any existing customer / converted audiences (`Schedule`, `Lead` events).
4. Recommended placements: Reels, Stories, Feed (Instagram + Facebook). Skip Audience Network.
5. Send traffic to `/book-demo` or `/done-for-you-social-media/intake`.

---

## 3. LinkedIn Campaign Manager — set up the matched audience

### 3a. Verify the Insight Tag is firing

1. Install the **LinkedIn Insight Tag Helper** Chrome extension.
2. Visit `https://prestyj.com/done-for-you-social-media`.
3. The extension icon should turn green and show a single tag with your partner ID.
4. In **Campaign Manager** → **Analyze** → **Insight Tag**, status should flip to `Active` within ~24 hours of the first real production hit.

### 3b. Create the event-specific conversion (drives `lintrk('track')`)

1. **Campaign Manager** → **Analyze** → **Conversion tracking** → **Create conversion** → **Insight Tag conversion**.
2. **Name**: `Content Engine Visitor`.
3. **Conversion behavior**: `View Key Page`.
4. **Conversion value**: leave blank (retargeting signal, not a revenue event).
5. **Attribution**: Last touch, 30-day click + 7-day view.
6. **Conversion method**: choose **Event-specific** → copy the **Conversion ID** number.
7. Paste that number into `NEXT_PUBLIC_LINKEDIN_CONTENT_ENGINE_CONVERSION_ID` in Vercel and redeploy.

### 3c. Create the matched audience (URL-based, works without the conversion ID)

1. **Campaign Manager** → **Plan** → **Audiences** → **Create audience** → **Website**.
2. **Audience name**: `Content Engine — Visitors (365d)`.
3. **Rules**: `URL` → `Starts with` → `https://prestyj.com/done-for-you-social-media` → **Add rule (OR)** for each remaining variant URL in the table above.
4. Save. LinkedIn requires ~300 members before the audience becomes targetable — give it 1–2 weeks of traffic.

### 3d. Wire to a campaign

1. Create a new **Lead generation** or **Website conversions** campaign objective.
2. **Audience** → **Saved audiences** → select `Content Engine — Visitors (365d)`.
3. Add the `Content Engine Visitor` conversion under **Conversion tracking** so the campaign can optimize against it.
4. Recommended formats: Single image ad, Document ad (case study), Video ad.

---

## 4. Verification checklist

After deploying, walk through this list:

- [ ] `npm run build` completes with no errors
- [ ] On `/done-for-you-social-media` in production, **Meta Pixel Helper** Chrome extension shows `PageView` + `ContentEngineVisitor`
- [ ] **Meta Events Manager → Test Events** shows the `ContentEngineVisitor` custom event with `custom_data.variant` set
- [ ] Server-side `[META CAPI] Success` log entry appears in Vercel logs for the same event ID (deduplication)
- [ ] **LinkedIn Insight Tag Helper** shows the partner ID firing on every variant page
- [ ] **Campaign Manager → Conversion tracking** shows the `Content Engine Visitor` conversion logging events within 24h of real traffic
- [ ] Custom audiences appear in the campaign creation flow on both platforms
- [ ] Audiences reach minimum size (Meta: 1,000+ / LinkedIn: 300+) before launching campaigns

---

## 5. Where the code lives

| File                                                                    | Purpose                                                  |
| ----------------------------------------------------------------------- | -------------------------------------------------------- |
| `src/lib/meta-pixel.ts`                                                 | `trackContentEngineVisitor()` + Meta/LinkedIn ID exports |
| `src/components/seo/content-engine-visitor-pixel.tsx`                   | Reusable client component that fires on mount            |
| `src/components/sections/content-engine/content-engine-page-layout.tsx` | Mounts the pixel on every variant page                   |
| `src/app/layout.tsx`                                                    | Loads Meta Pixel + LinkedIn Insight Tag base scripts     |
| `src/app/api/meta-capi/route.ts`                                        | Server-side CAPI mirror (now supports `customData`)      |
