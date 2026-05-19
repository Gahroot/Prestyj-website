/**
 * Shared client testimonials \u2014 sourced from the Google My Business profile
 * and one verified direct client testimonial. Re-used across:
 * \u2014 /batch-video-ads (testimonials section)
 * \u2014 /founding-cohort (above-fold social proof)
 *
 * Keep this list short and high-signal. Don't dilute with weak quotes.
 */

export const GMB_REVIEWS_URL = "https://share.google/NDBtHySNKzPF0mTvG";

export type Testimonial = {
  quote: string;
  full: string;
  author: string;
  source: string;
  href: string | null;
};

export const CLIENT_TESTIMONIALS: ReadonlyArray<Testimonial> = [
  {
    quote:
      "300 Facebook video ads in less than 12 hours \u2014 nailed the scripts, edits, and hooks on every single one.",
    full: "I had an incredible experience working with Nolan. In less than 12 hours, he produced 300 Facebook video ads \u2014 and somehow managed to absolutely nail the scripts, edits, and hooks on every single one. If you're looking for someone who can deliver high-volume creative production without sacrificing quality, Nolan is the real deal.",
    author: "Randy Narciso",
    source: "Google Review",
    href: GMB_REVIEWS_URL,
  },
  {
    quote:
      "Saved me a ton of time making 300 versions of content for my Meta ads. Delivery was fast and straightforward.",
    full: "The service Nolan provided helped me save a ton of time making 300 versions of content for my meta ads. His delivery was fast and straight forward!",
    author: "Max Sherrod",
    source: "Google Review \u00b7 Local Guide",
    href: GMB_REVIEWS_URL,
  },
  {
    quote: "If I could give them more than 5 stars I would.",
    full: "100% happy and will definitely be using their services in the future. If I could give them more than 5 stars I would.",
    author: "Verified client",
    source: "Client testimonial",
    href: null,
  },
] as const;
