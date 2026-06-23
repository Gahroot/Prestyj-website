export const CTA_SNIPPETS = {
  BOOK_FREE_DEMO: {
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
  },
  BOOK_TEAM_DEMO: {
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
  },
  NO_CONTRACT: "Month-to-month after onboarding. No long-term contract.",
  NO_COMMITMENT: "No commitment required.",
} as const;

export const CTA_TEMPLATES = {
  STANDARD_DEMO: {
    headline: "Book a Demo",
    subheadline:
      "See Prestyj's AI agents respond to a lead, qualify, and book a meeting — live, in 30 minutes.",
    ...CTA_SNIPPETS.BOOK_FREE_DEMO,
    footnote: CTA_SNIPPETS.NO_CONTRACT,
  },
  TEAM_DEMO: {
    headline: "Give Your Team 24/7 Lead Coverage",
    subheadline:
      "See how top real estate teams use Prestyj to respond to every lead instantly, route opportunities intelligently, and scale without hiring. Book a team demo today.",
    ...CTA_SNIPPETS.BOOK_TEAM_DEMO,
  },
} as const;
