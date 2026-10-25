export const positioning = {
  oneLiner: "Staff AI across the fund.",
  fullPitch:
    "Prestyj builds and runs AI agents that complete deal, fund, investor, portfolio, and origination work for institutional real estate firms. Built on your systems, controlled by your review rules, with the source attached to every material answer.",
  audience:
    "Real estate investment funds from $500M AUM, commercial brokerages, and CRE owner-operators.",
  coreOffer: "Reviewed work product from the systems your firm already runs.",
  pricingRange: "Engagements are scoped around one workflow and the systems behind it.",
  primaryCta: { label: "Get access", href: "/book-demo" },
  secondaryCta: { label: "See the work", href: "/#outcomes" },
} as const;

/** Second, separately positioned offer. Lives under /connectors and the connector service pages. */
export const connectorsPositioning = {
  oneLiner: "Custom Claude connectors, MCP servers, and ChatGPT plugins, done for you.",
  audience: "Businesses in any industry whose systems have no off-the-shelf AI connector.",
  coreOffer:
    "We scope, build, secure, host, and maintain the MCP server that connects Claude and ChatGPT to your systems.",
  primaryCta: { label: "Book a scoping call", href: "/book-demo" },
} as const;
