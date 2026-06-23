/**
 * Central positioning constants for Prestyj.
 *
 * ONE LANE: Done-for-you AI agents + ad production for service businesses
 * and real estate teams. Every page, nav item, FAQ, and CTA should use
 * this vocabulary. If you're writing copy that doesn't fit these constants,
 * you're probably drifting off-positioning.
 *
 * See .ezcoder/plans/one-lane-alignment.md for the full strategy.
 */

export const positioning = {
  /** Ultra-short tagline for badges, nav, and metadata titles. */
  oneLiner: "Done-for-you AI agents for marketing and sales.",

  /** 2-3 sentence pitch for heroes, meta descriptions, and about pages. */
  fullPitch:
    "Prestyj runs your ads, produces hundreds of video ad variations from a single recording, and deploys AI agents that answer calls, respond to leads in 60 seconds, and book appointments on your calendar — 24/7. Done for you, not a tool you learn.",

  /** Who this is for — used in "Is this for me?" sections and FAQs. */
  audience:
    "Service businesses and real estate teams doing 50–500 leads/month.",

  /** The core offer in one phrase. */
  coreOffer: "AI agents + batch video ads + managed ad spend, done for you.",

  /** Pricing summary for inline mentions. */
  pricingRange: "Plans from $1,997/mo (setup fee applies).",

  /** Primary conversion action. */
  primaryCta: { label: "Book a call", href: "/book-demo" },

  /** Secondary action — the live AI demo. */
  secondaryCta: { label: "Talk to the AI", href: "/#ai-concierge" },

  /** The three pillars shown on the homepage and capabilities sections. */
  pillars: [
    {
      label: "AI Agents",
      description:
        "Answer calls, follow up with leads, book appointments — 24/7.",
      href: "/done-for-you-ai-agents",
    },
    {
      label: "Batch Video Ads",
      description:
        "One recording turned into hundreds of ad variants for testing.",
      href: "/batch-video-ads",
    },
    {
      label: "Managed Ad Spend",
      description: "Google and Meta campaigns built and optimized for you.",
      href: "/pricing",
    },
  ],
} as const;

/**
 * Terms that should NOT appear in customer-facing copy.
 * If you find these in a page, remove or replace them.
 */
export const bannedTerms = [
  "EZ Coder",
  "Media Master",
  "coding agent",
  "desktop AI",
  "internal tools",
  "custom AI software",
] as const;
