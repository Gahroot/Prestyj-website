export type SampleSource = Readonly<{
  id: string;
  label: string;
  location: string;
  excerpt: string;
}>;

export type WorkSample = Readonly<{
  id: string;
  label: string;
  audience: string;
  question: string;
  title: string;
  subtitle: string;
  findings: readonly Readonly<{ label: string; value: string; sourceId: string }>[];
  note: string;
  review: string;
  sources: readonly SampleSource[];
  href: string;
}>;

/** Synthetic, deterministic examples. Not customer data or live agent output. */
export const workSamples = [
  {
    id: "diligence",
    label: "Deal diligence",
    audience: "Investment team",
    question: "What needs our attention before this goes to IC?",
    title: "Westbridge Office",
    subtitle: "Acquisition brief · Illustrative property",
    findings: [
      { label: "In-place occupancy", value: "91.4%", sourceId: "rent-roll" },
      { label: "Lease rollover · next 24 months", value: "28.0%", sourceId: "lease-schedule" },
      { label: "Largest tenant · share of rent", value: "19.2%", sourceId: "rent-roll" },
    ],
    note: "Near-term rollover is concentrated in two tenants. Confirm renewal assumptions before circulating the investment brief.",
    review:
      "The offering memo lists 94% occupancy. The rent roll supports 91.4%. Reconcile the difference before release.",
    sources: [
      {
        id: "rent-roll",
        label: "Rent roll.xlsx",
        location: "Summary · effective 30 June 2026",
        excerpt:
          "Total rentable area: 125,000 sq ft. Occupied area: 114,250 sq ft. Occupancy: 91.4%. Largest tenant: Northline Advisory, 19.2% of annual base rent.",
      },
      {
        id: "lease-schedule",
        label: "Lease schedule.pdf",
        location: "Page 4 · expiration summary",
        excerpt:
          "Leases expiring by 30 June 2028 represent 28.0% of annual base rent. Northline Advisory and Fieldstone Partners account for the majority of this near-term rollover.",
      },
    ],
    href: "/capabilities/deal-diligence",
  },
  {
    id: "reporting",
    label: "Fund reporting",
    audience: "Fund operations",
    question: "What is holding up the quarterly investor package?",
    title: "Westbridge Fund II",
    subtitle: "Quarter-end review · Illustrative fund",
    findings: [
      { label: "Investor statements prepared", value: "42 / 42", sourceId: "close-checklist" },
      { label: "Cash reconciliations complete", value: "11 / 12", sourceId: "close-checklist" },
      { label: "Unresolved cash difference", value: "$12,450", sourceId: "cash-ledger" },
    ],
    note: "The statement package is prepared. One cash reconciliation remains open and requires the fund controller’s review.",
    review:
      "A $12,450 distribution appears in the ledger but is absent from the bank extract. Confirm timing before releasing statements.",
    sources: [
      {
        id: "close-checklist",
        label: "Close checklist.xlsx",
        location: "Q2 2026 · reporting readiness",
        excerpt:
          "Investor statements: 42 prepared of 42 required. Bank accounts reconciled: 11 of 12. Open item: Westbridge Operating account. Package status: pending controller approval.",
      },
      {
        id: "cash-ledger",
        label: "Cash reconciliation.pdf",
        location: "Page 2 · outstanding items",
        excerpt:
          "Ledger entry DIST-0628: $12,450 distribution dated 28 June 2026. No matching transaction in the 30 June bank extract. Timing difference not yet confirmed.",
      },
    ],
    href: "/capabilities/fund-operations",
  },
  {
    id: "origination",
    label: "Brokerage origination",
    audience: "Brokerage team",
    question: "What does the broker need to know before following up?",
    title: "Westbridge Logistics",
    subtitle: "Inquiry handoff · Illustrative conversation",
    findings: [
      { label: "Space requirement", value: "25,000 sq ft", sourceId: "inquiry-transcript" },
      { label: "Target move-in", value: "Q4 2026", sourceId: "inquiry-transcript" },
      { label: "Use", value: "Distribution", sourceId: "inquiry-transcript" },
    ],
    note: "The prospect needs dock access and prefers a Tuesday tour. Route the inquiry and its transcript to the listing broker.",
    review:
      "Availability and tour time have not been confirmed. The broker must approve both before a commitment is made.",
    sources: [
      {
        id: "inquiry-transcript",
        label: "Inquiry transcript.txt",
        location: "Excerpt · synthetic conversation",
        excerpt:
          "Prospect: We need about 25,000 square feet for regional distribution, with dock access. We are targeting Q4 2026. A Tuesday tour would be ideal. Agent: I will pass that to the listing broker to confirm availability and a time.",
      },
    ],
    href: "/capabilities/origination",
  },
] as const satisfies readonly WorkSample[];
