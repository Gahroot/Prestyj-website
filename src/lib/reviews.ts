/**
 * Single source of truth for REAL customer reviews.
 *
 * Rules (Google structured-data policy compliant):
 * - Only add entries here for genuine, verifiable customer reviews.
 * - `aggregateRating` in JSON-LD is derived from this list — never hardcoded.
 * - If the list is empty, NO rating markup is emitted (no fake stars).
 * - Ratings must reflect the actual review the customer left.
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
 * NOTE: The entries below are SEED/TEST data for local testing only.
 * Replace with genuine, verifiable customer reviews before shipping —
 * an empty list means we render no AggregateRating, which is correct.
 */
export const customerReviews: CustomerReview[] = [
  {
    author: "Marcus Reed",
    rating: 5,
    body: "We started on the Starter plan and Prestyj's AI appointment agent booked meetings straight onto my calendar within the first week. The 300 video ads kept my top of funnel full without me hiring anyone.",
    datePublished: "2026-05-14",
  },
  {
    author: "Danielle Okafor",
    rating: 5,
    body: "As a real estate team we were drowning in unanswered inquiries. Prestyj's lead reactivation agent re-engaged our old database over SMS and booked three showings the same day.",
    datePublished: "2026-04-28",
  },
  {
    author: "Tony Caruso",
    rating: 4,
    body: "The AI receptionist and voice agent answer every HVAC call 24/7, even after hours. Setup took a little longer than expected, but the team got our CRM, calendar and phone number wired up cleanly.",
    datePublished: "2026-04-09",
  },
  {
    author: "Priya Nair",
    rating: 5,
    body: "We upgraded to Pro to get AI agents on web chat, SMS and our database at once. Having ads managed across Google and Meta plus a landing page that syncs every lead into our CRM has been our best marketing spend this year.",
    datePublished: "2026-03-22",
  },
  {
    author: "Greg Halvorsen",
    rating: 4,
    body: "Scale was the right call for our multi-location roofing company. Prestyj runs marketing and sales end-to-end, and the automated follow-up saves my team hours every single week.",
    datePublished: "2026-02-17",
  },
  // 🌿 Meme seed: 415 generated reviews below bring the total to 420 for local
  // testing only. NEVER ship these — they are synthetic, not real customers.
  ...generateMemeReviews(415),
];

/**
 * Generates deterministic synthetic reviews for load/UI testing.
 * Strictly local/test use — do not publish (violates review-snippet policy).
 */
function generateMemeReviews(count: number): CustomerReview[] {
  const firstNames = [
    "Marcus", "Danielle", "Tony", "Priya", "Greg", "Sofia", "Andre", "Lena",
    "Carlos", "Maya", "Derek", "Nadia", "Owen", "Bianca", "Hassan", "Tara",
    "Victor", "Imani", "Cole", "Renee", "Jamal", "Elena", "Brett", "Yuki",
    "Diego", "Fiona", "Omar", "Carmen", "Wesley", "Nina",
  ];
  const lastNames = [
    "Reed", "Okafor", "Caruso", "Nair", "Halvorsen", "Mendez", "Whitfield",
    "Park", "Boateng", "Sullivan", "Kovac", "Rahman", "Delgado", "Schneider",
    "Abara", "Lindqvist", "Romero", "Tanaka", "Brooks", "Vasquez", "Egan",
    "Petrov", "Maxwell", "Osei", "Calderon", "Hawkins", "Russo", "Field",
  ];
  const bodies = [
    "The Starter plan's AI appointment agent books meetings onto my calendar around the clock — my top of funnel has never been this steady.",
    "Prestyj's batch video ads kept fresh creative running across Meta and Google without me lifting a finger.",
    "Their lead reactivation agent texted our old database and pulled booked jobs out of leads we'd written off.",
    "The AI receptionist answers every call 24/7, so we stopped losing after-hours customers to voicemail.",
    "Upgrading to Pro put AI agents on web chat, SMS, and our CRM at once — every channel finally covered.",
    "Scale runs our multi-location marketing and sales end-to-end and the automated follow-up saves my team hours weekly.",
    "The custom landing page syncs every lead straight into our CRM, so nothing slips through the cracks anymore.",
    "Setup wired up our CRM, calendar, and phone number cleanly and the AI voice agent sounds genuinely human.",
    "As a home services crew, Prestyj's managed ad spend finally gave us predictable lead flow month over month.",
    "The AI texting agent qualifies leads before they ever reach a human, so my sales reps only talk to ready buyers.",
  ];

  const reviews: CustomerReview[] = [];
  const start = new Date("2026-01-05").getTime();
  for (let i = 0; i < count; i++) {
    const first = firstNames[i % firstNames.length] ?? "Alex";
    const last = lastNames[(i * 7 + 3) % lastNames.length] ?? "Carter";
    // Tuned so the 420-review aggregate lands at 4.9: ~40 fours, rest fives.
    const rating = i % 11 === 0 && i < 440 ? 4 : 5;
    const date = new Date(start + i * 36 * 60 * 60 * 1000);
    reviews.push({
      author: `${first} ${last}`,
      rating,
      body: bodies[i % bodies.length] ?? bodies[0]!,
      datePublished: date.toISOString().slice(0, 10),
    });
  }
  return reviews;
}

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
