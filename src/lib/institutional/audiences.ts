import type { CapabilitySlug } from "@/lib/institutional/capabilities";

export type AudienceSlug = "investment-funds" | "commercial-brokerages" | "owner-operators";

export type Audience = {
  slug: AudienceSlug;
  navLabel: string;
  title: string;
  description: string;
  recognized: readonly string[];
  outcomes: readonly string[];
  capabilities: readonly CapabilitySlug[];
  systems: readonly string[];
  cta: string;
};

export const audiences: readonly Audience[] = [
  {
    slug: "investment-funds",
    navLabel: "Investment funds",
    title: "More assets should not mean a larger quarter-end fire drill.",
    description:
      "For real estate investment funds from $500M AUM that need faster deal work, explainable fund operations, and investor answers that hold up under review.",
    recognized: [
      "The waterfall lives in one model only one person wants to touch.",
      "The same LP question is answered differently by three teams.",
      "Quarter-end starts with a reconciliation of reconciliations.",
      "The IC packet is polished, but nobody can find the source for one assumption.",
    ],
    outcomes: [
      "Close the quarter with every figure traceable.",
      "Walk the waterfall tier by tier.",
      "Clear diligence with the evidence attached.",
      "Answer each LP inside the correct fund and investor boundary.",
    ],
    capabilities: [
      "fund-operations",
      "investor-reporting",
      "deal-diligence",
      "portfolio-intelligence",
    ],
    systems: [
      "General ledger",
      "Fund administrator",
      "VDR",
      "LPA",
      "Investor portal",
      "Bank feeds",
    ],
    cta: "Bring us the workflow that breaks every quarter.",
  },
  {
    slug: "commercial-brokerages",
    navLabel: "Commercial brokerages",
    title: "The next assignment rarely arrives during office hours.",
    description:
      "For commercial brokerage teams that need every inquiry covered, every prospect qualified, and every listing package moving without adding another coordination layer.",
    recognized: [
      "After-hours listing calls depend on whoever notices first.",
      "The broker receives a phone number, not the context behind it.",
      "Property facts change after the campaign is already in production.",
      "Follow-up quality changes with the person working the queue.",
    ],
    outcomes: [
      "Answer and qualify every inbound.",
      "Book the right broker with the context attached.",
      "Keep listing materials current and on brand.",
      "See the complete record of every call, text, and handoff.",
    ],
    capabilities: ["origination", "listing-media", "deal-diligence"],
    systems: [
      "Phone",
      "CRM",
      "Calendar",
      "Listing database",
      "Email",
      "Approved property materials",
    ],
    cta: "Bring us one listing's inbound and handoff process.",
  },
  {
    slug: "owner-operators",
    navLabel: "Owner-operators",
    title: "Your portfolio should answer like one business.",
    description:
      "For CRE owner-operators whose property, lease, debt, operating, and investor data has outgrown the spreadsheet joining it together.",
    recognized: [
      "The model and the property system disagree at the worst possible moment.",
      "Lease and debt questions start with a request to three departments.",
      "A point-in-time answer changes depending on when each export ran.",
      "Portfolio reporting still depends on manual copy and paste.",
    ],
    outcomes: [
      "Trust one point-in-time answer across the portfolio.",
      "Surface conflicts before they reach the owner report.",
      "Watch lease and debt events without rebuilding a workbook.",
      "Preserve the source and effective date behind every answer.",
    ],
    capabilities: [
      "portfolio-intelligence",
      "fund-operations",
      "investor-reporting",
      "deal-diligence",
    ],
    systems: [
      "Property management",
      "Lease abstracts",
      "Debt schedules",
      "Models",
      "Bank feeds",
      "Owner reports",
    ],
    cta: "Bring us the portfolio question nobody can answer quickly.",
  },
] as const;

export function getAudience(slug: string): Audience | undefined {
  return audiences.find((audience) => audience.slug === slug);
}
