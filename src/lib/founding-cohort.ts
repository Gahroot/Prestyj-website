/**
 * Founding Cohort program config.
 *
 * 5 service businesses get a free Minimum batch (300 ads, $1,497 value)
 * in exchange for a video testimonial, Google review, results-sharing rights,
 * and a 14-day commitment to actually run the ads at $100/day minimum.
 *
 * Promo code FREE300 is configured in Stripe as 100% off the Minimum price.
 * For approved applicants the API now mints a Stripe Checkout Session with
 * the promo code pre-applied (`discounts: [{ promotion_code: <id> }]`) so
 * the user never has to paste anything. `/founding-cohort/approved` is kept
 * as a fallback when the Stripe mint fails (so a successful application is
 * never wasted).
 */

export const FOUNDING_COHORT = {
  totalSpots: 5,
  /**
   * Spots already filled (existing clients + in-person commitments).
   * Bump this number as spots fill. Counter on the landing page reads
   * `totalSpots - spotsFilled` as remaining.
   */
  spotsFilled: 2,
  promoCode: "FREE300",
  /**
   * Checkout tier the code is configured against in Stripe.
   * Approval page directs applicants here, where they enter FREE300.
   */
  checkoutTier: "minimum" as const,
  /**
   * Sample tier we steer soft-qualify-outs toward (sub-$3K spenders or
   * not-running-yet). 100 ads for $497 — same engine, lower commitment.
   */
  sampleTier: "starter" as const,
  checkoutHref: "/batch-video-ads#pricing",
  applicationHref: "/founding-cohort",
  approvedHref: "/founding-cohort/approved",
  /**
   * Hard floor for auto-qualification. Applicants spending below this
   * monthly aren't running enough volume to produce real signal — they
   * get qualified out client-side before reaching the API.
   */
  minMonthlyAdSpendUsd: 3000,
  /**
   * Minimum daily spend they commit to running the batch at, used as the
   * floor for any performance signal. Surfaced in the terms.
   */
  minDailyTestSpendUsd: 100,
  /**
   * Test window in days. Buyer must run the batch for this long before
   * the testimonial / debrief is scheduled.
   */
  testWindowDays: 14,
} as const;

export function spotsRemaining(): number {
  return Math.max(0, FOUNDING_COHORT.totalSpots - FOUNDING_COHORT.spotsFilled);
}

export function isCohortOpen(): boolean {
  return spotsRemaining() > 0;
}
