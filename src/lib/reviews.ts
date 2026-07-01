/**
 * Single source of truth for REAL customer reviews.
 *
 * Rules (Google structured-data policy compliant):
 * - Only add entries here for genuine, verifiable customer reviews.
 * - `aggregateRating` in JSON-LD is derived from this list — never hardcoded.
 * - If the list is empty, NO rating markup is emitted (no fake stars).
 * - Shipping synthetic/fake reviews risks a manual action that suppresses the
 *   ENTIRE site's rich results and rankings. Empty is correct until verified.
 *
 * Reference: https://developers.google.com/search/docs/appearance/structured-data/review-snippet
 */

export interface CustomerReview {
  /** Reviewer's name as they provided it (or business name). */
  author: string;
  /** Rating the customer actually gave, 1–5. */
  rating: number;
  /** The review text the customer wrote. */
  body: string;
  /** ISO date the review was left, e.g. "2026-05-14". */
  datePublished: string;
}

/**
 * Genuine, verifiable customer reviews only.
 *
 * An empty list correctly suppresses all AggregateRating/Review markup — no
 * fake stars. To add a review, confirm it came from a real customer (a
 * verified G2/Google/Capterra review or written testimonial) and append it.
 */
export const customerReviews: CustomerReview[] = [];

export interface AggregateRatingSummary {
  ratingValue: string;
  reviewCount: number;
  bestRating: 5;
  worstRating: 1;
}

/**
 * Derives an aggregate rating from real reviews.
 * Returns null when there are no reviews so callers can skip rating markup.
 */
export function getAggregateRating(
  reviews: CustomerReview[] = customerReviews,
): AggregateRatingSummary | null {
  if (reviews.length === 0) return null;

  const total = reviews.reduce((sum, r) => sum + r.rating, 0);
  const average = total / reviews.length;

  return {
    ratingValue: average.toFixed(1),
    reviewCount: reviews.length,
    bestRating: 5,
    worstRating: 1,
  };
}
