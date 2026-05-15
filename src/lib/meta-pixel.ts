import type { BatchTierId } from "@/lib/batch-tiers";

declare global {
  interface Window {
    fbq: ((...args: unknown[]) => void) & { queue?: unknown[] };
    lintrk?: ((action: string, data?: Record<string, unknown>) => void) & {
      q?: unknown[];
    };
  }
}

const PIXEL_ID = "892763637077397";

/**
 * LinkedIn Insight Tag partner ID. Set via NEXT_PUBLIC_LINKEDIN_PARTNER_ID at
 * build time. The base tag in app/layout.tsx is gated on this being present
 * so local/dev builds do not fire LinkedIn requests.
 */
const LINKEDIN_PARTNER_ID = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID ?? "";

/**
 * Optional event-specific LinkedIn conversion ID for the Content Engine
 * visitor audience. Created in LinkedIn Campaign Manager (see
 * docs/retargeting-setup.md). When unset the LinkedIn track call is skipped
 * and the page-load Insight Tag still feeds the retargeting audience.
 */
const LINKEDIN_CONTENT_ENGINE_CONVERSION_ID =
  process.env.NEXT_PUBLIC_LINKEDIN_CONTENT_ENGINE_CONVERSION_ID ?? "";

/** Custom Meta Pixel event name for the Content Engine retargeting audience. */
export const CONTENT_ENGINE_VISITOR_EVENT = "ContentEngineVisitor";

/**
 * Single custom Meta Pixel event for any soft-conversion CTA click across the
 * site ("I want to learn more / I might buy"). One event, one audience large
 * enough to optimize against. Per-page distinction is carried in the
 * `content_name` parameter; per-CTA location is carried in `event_label`.
 *
 * Hard conversions stay on standard Pixel events: `Lead` (form submission),
 * `Schedule` (Cal.com booking), `Purchase` (Stripe checkout).
 */
export const LEAD_INTENT_EVENT = "LeadIntent";

type UserData = {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
};

export function trackEvent(
  eventName: string,
  userData?: UserData,
  customData?: Record<string, string>,
) {
  const eventId = crypto.randomUUID();

  // Client-side pixel fire
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, customData ?? {}, { eventID: eventId });
  }

  // Server-side CAPI fire (fire-and-forget, keepalive survives page navigation)
  fetch("/api/meta-capi", {
    method: "POST",
    keepalive: true,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      eventName,
      eventId,
      sourceUrl: typeof window !== "undefined" ? window.location.href : undefined,
      email: userData?.email,
      phone: userData?.phone,
      firstName: userData?.firstName,
      lastName: userData?.lastName,
      customData,
    }),
  }).catch(() => {
    // Never break UX for tracking
  });
}

/**
 * Fire the Content Engine retargeting signal on both Meta Pixel and LinkedIn
 * Insight Tag. Meta is sent as a custom event (`ContentEngineVisitor`) plus
 * server-side CAPI mirror; LinkedIn is sent as a `track` call against the
 * configured event-specific conversion ID (page-load Insight Tag fires
 * separately from the base tag in the root layout).
 *
 * See docs/retargeting-setup.md for the audience + campaign setup steps.
 */
export function trackContentEngineVisitor(variant: string) {
  // Meta — custom event with variant slug for audience segmentation
  if (typeof window !== "undefined" && window.fbq) {
    const eventId = crypto.randomUUID();
    window.fbq(
      "trackCustom",
      CONTENT_ENGINE_VISITOR_EVENT,
      { variant, content_category: "content-engine" },
      { eventID: eventId },
    );

    // Server-side CAPI mirror for iOS / ad-blocker resilience
    fetch("/api/meta-capi", {
      method: "POST",
      keepalive: true,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventName: CONTENT_ENGINE_VISITOR_EVENT,
        eventId,
        sourceUrl: window.location.href,
        customData: { variant, content_category: "content-engine" },
      }),
    }).catch(() => {
      // Never break UX for tracking
    });
  }

  // LinkedIn — event-specific conversion (audience + reporting)
  if (typeof window !== "undefined" && window.lintrk && LINKEDIN_CONTENT_ENGINE_CONVERSION_ID) {
    window.lintrk("track", {
      conversion_id: Number(LINKEDIN_CONTENT_ENGINE_CONVERSION_ID),
    });
  }
}

/**
 * Fire a standard `Purchase` event tagged with the batch-video-ads tier id.
 * Lets Ads Manager treat each tier (starter / minimum / pro / max) as a
 * distinct, optimizable conversion via the `content_name` parameter, while
 * still rolling up under the single `Purchase` standard event for reporting.
 *
 * Mirrored to CAPI for iOS / ad-blocker resilience using the same shared
 * eventId so Meta can dedupe browser + server hits.
 */
export function trackBatchTierPurchase(
  tierId: BatchTierId,
  value: number,
  currency: string,
  userData?: UserData,
): void {
  const eventId = crypto.randomUUID();
  const customData = {
    content_name: tierId,
    content_category: "batch-video-ads",
    value,
    currency,
  };

  // Client-side pixel fire
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Purchase", customData, { eventID: eventId });
  }

  // Server-side CAPI fire (fire-and-forget, keepalive survives page navigation)
  fetch("/api/meta-capi", {
    method: "POST",
    keepalive: true,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      eventName: "Purchase",
      eventId,
      sourceUrl: typeof window !== "undefined" ? window.location.href : undefined,
      email: userData?.email,
      phone: userData?.phone,
      firstName: userData?.firstName,
      lastName: userData?.lastName,
      customData,
    }),
  }).catch(() => {
    // Never break UX for tracking
  });
}

export { PIXEL_ID, LINKEDIN_PARTNER_ID };
