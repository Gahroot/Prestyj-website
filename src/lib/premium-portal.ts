/**
 * Premium client portal hand-off.
 *
 * Paid batch-video-ads checkouts now hand the buyer to the standalone premium
 * portal (a separate Next.js deploy) instead of the legacy on-site /intake
 * flow. The portal verifies the Stripe session server-side and walks the buyer
 * through the guided one-take workflow.
 *
 * The legacy `/intake?session_id=` route is kept as a temporary fallback (see
 * `LEGACY_INTAKE_ENABLED`) so in-flight orders and any portal outage have a
 * working path. Flip `LEGACY_INTAKE_ENABLED` to `false` after the portal
 * cutover is verified; keep it as an emergency backup until then.
 */
// NOTE: use `||` (not `??`) on inlined NEXT_PUBLIC_* env reads. This module is
// pulled into the client bundle (via lead-form.tsx), where Turbopack inlines
// the env value; when the var is unset it becomes `undefined`, and SWC's
// nullish-coalescing transform panics on `undefined ?? "..."`. `||` routes
// through a stable transform and yields the same fallback for unset/empty.
export const PREMIUM_PORTAL_URL =
  process.env.NEXT_PUBLIC_PREMIUM_PORTAL_URL || "https://portal.prestyj.com";

/**
 * Cutover switch for the legacy on-site intake. While `true`, `/intake` still
 * verifies sessions and renders the old form as an emergency backup. Set the
 * `LEGACY_INTAKE_ENABLED` env var to "false" to disable it after cutover.
 */
export const LEGACY_INTAKE_ENABLED = process.env.LEGACY_INTAKE_ENABLED !== "false";

/**
 * Builds the portal claim URL Stripe redirects to after a paid batch-video-ads
 * checkout. The `{CHECKOUT_SESSION_ID}` template is expanded by Stripe.
 */
export function buildPortalClaimSuccessUrl(): string {
  const base = PREMIUM_PORTAL_URL.replace(/\/$/, "");

  return `${base}/start?session_id={CHECKOUT_SESSION_ID}`;
}
