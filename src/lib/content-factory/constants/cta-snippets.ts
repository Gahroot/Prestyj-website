export const CTA_SNIPPETS = {
  BOOK_FREE_DEMO: {
    buttonText: "Book Your Free Demo",
    buttonHref: "/book-demo",
  },
  BOOK_TEAM_DEMO: {
    buttonText: "Book a Team Demo",
    buttonHref: "/book-demo",
  },
  NO_CREDIT_CARD: "No credit card required. See results in minutes.",
  NO_COMMITMENT: "No commitment required.",
} as const;

export const CTA_TEMPLATES = {
  STANDARD_DEMO: {
    headline: "Ready to See Prestyj in Action?",
    subheadline:
      "Book a personalized demo to see how Prestyj can transform your lead management and help you close more deals.",
    ...CTA_SNIPPETS.BOOK_FREE_DEMO,
    footnote: CTA_SNIPPETS.NO_CREDIT_CARD,
  },
  TEAM_DEMO: {
    headline: "Give Your Team 24/7 Lead Coverage",
    subheadline:
      "See how top real estate teams use Prestyj to respond to every lead instantly, route opportunities intelligently, and scale without hiring. Book a team demo today.",
    ...CTA_SNIPPETS.BOOK_TEAM_DEMO,
  },
} as const;
