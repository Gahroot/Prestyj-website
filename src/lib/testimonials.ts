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

/**
 * Featured video testimonial \u2014 used as a hero-style social proof block on
 * /batch-video-ads, /founding-cohort, and /results. Headline + subhead are
 * direct quotes from the speaker. Keep edits minimal: light punctuation and
 * leading-capitalization cleanup is fine, but don't paraphrase.
 */
export type VideoTestimonial = {
  vimeoId: string;
  headlineQuote: string;
  subheadQuote: string;
  author: string;
  role: string;
  company: string;
  /** Used for VideoObject JSON-LD + alt text. */
  videoName: string;
  videoDescription: string;
};

export const MAX_SHERROD_VIDEO_TESTIMONIAL: VideoTestimonial = {
  vimeoId: "1196469200",
  headlineQuote: "We actually closed, within 24 hours, $5,000 worth of business.",
  subheadQuote:
    "Basically what I did was I recorded for 20 minutes, they pumped out 300 ads, and the turnaround was less than 24 hours.",
  author: "Max Sherrod",
  role: "Founder",
  company: "Maxteriors Exterior Lighting",
  videoName:
    "Max Sherrod, Maxteriors Exterior Lighting \u2014 $5,000 closed in 24 hours with Prestyj Batch Video Ads",
  videoDescription:
    "Max Sherrod, founder of Maxteriors Exterior Lighting, describes recording for 20 minutes and receiving 300 finished vertical video ads in less than 24 hours, then closing $5,000 in business within a day of running them.",
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
