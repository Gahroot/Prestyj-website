/**
 * The outcomes Prestyj delivers, in the buyer's language.
 *
 * Copy rule for this file: the `title` is what they'd say they need, the
 * `body` is the outcome, and `felt` is the thing they complain about at
 * 9pm on a Sunday. Never describe the technology here.
 */

export type OutcomeLane = "Fund operations" | "Deal work" | "Origination";

export type Outcome = {
  /** 2-3 words, verb-first. Rendered on two lines. */
  title: string;
  /** Second line of the title, for the two-line stacked treatment. */
  titleAccent: string;
  /** One sentence: the finished work product. */
  body: string;
  /** One sentence: the pain it retires. */
  felt: string;
  lane: OutcomeLane;
};

export const outcomes: readonly Outcome[] = [
  {
    title: "Close the",
    titleAccent: "quarter",
    body: "NAV, fees, and allocations run the day the numbers land — every figure traceable to the transaction underneath it.",
    felt: "No more third-week-of-the-month fire drill.",
    lane: "Fund operations",
  },
  {
    title: "Walk the",
    titleAccent: "waterfall",
    body: "Distributions modeled tier by tier in your fund's own terms, with the math open for anyone who asks.",
    felt: "The model stops living in one analyst's head.",
    lane: "Fund operations",
  },
  {
    title: "Answer",
    titleAccent: "the LP",
    body: "Investors see their own position, performance, and documents the moment they're published — nobody else's.",
    felt: "The question stops arriving in your inbox at 9pm.",
    lane: "Fund operations",
  },
  {
    title: "Prove every",
    titleAccent: "figure",
    body: "An append-only record of who changed what, who approved it, and exactly what it was based on.",
    felt: "Audit season stops being a season.",
    lane: "Fund operations",
  },
  {
    title: "Clear",
    titleAccent: "diligence",
    body: "Ask about a sponsor, a counterparty, or a building and get the answer with the source, the date, and who verified it.",
    felt: "Nobody re-reads the data room to defend one number.",
    lane: "Deal work",
  },
  {
    title: "Trust one",
    titleAccent: "number",
    body: "Yardi, the models, the VDR, and the email chain reconciled into a single answer — with conflicts flagged, never averaged.",
    felt: "Two decks stop disagreeing in front of the committee.",
    lane: "Deal work",
  },
  {
    title: "Codify",
    titleAccent: "the firm",
    body: "Your best associate's checklist becomes an agent that runs it the same way on every deal.",
    felt: "The process survives the person who leaves.",
    lane: "Deal work",
  },
  {
    title: "Catch the",
    titleAccent: "inbound",
    body: "Every call, form, and text answered, qualified, and booked — nights, weekends, and mid-tour.",
    felt: "The Saturday caller stops being a coin flip.",
    lane: "Origination",
  },
  {
    title: "Ship the",
    titleAccent: "materials",
    body: "Offering memoranda, listing campaigns, and ad creative produced at volume, on brand, out the door.",
    felt: "Marketing stops being the bottleneck on a live listing.",
    lane: "Origination",
  },
];

/**
 * Systems already built and running. These replace testimonials — every
 * entry must stay literally true, including the honest `stage` label.
 */
export type ProofSystem = {
  name: string;
  who: string;
  what: string;
  stage: "In production" | "Live" | "Reference architecture";
};

export const proofSystems: readonly ProofSystem[] = [
  {
    name: "Fund administration platform",
    who: "Real estate investment fund",
    what: "Multi-currency NAV, performance, and an investor portal — replacing a decade-old system through a staged, reversible route-by-route cutover with field-level reconciliation.",
    stage: "In production",
  },
  {
    name: "Diligence and client platform",
    who: "Firm serving family offices and UHNW principals",
    what: "Versioned assessment engine, wallet-based identity verification, and signed PDF work product, with approval separated from submission on every record.",
    stage: "In production",
  },
  {
    name: "Governed intelligence suite",
    who: "Defense-tech firms",
    what: "Screening and investigative intelligence on one evidence spine — row-level tenant isolation, hash-chained audit log, and nothing released without a named human reviewer.",
    stage: "In production",
  },
  {
    name: "Voice and SMS origination",
    who: "Brokerage and sales teams",
    what: "AI voice agents on live telephony that answer, qualify, book, and hand off — with a transcript and a classified outcome on every call.",
    stage: "Live",
  },
  {
    name: "Creative and ads operations",
    who: "Marketing teams",
    what: "Creative generation, nine-platform publishing, and Meta and Google ads management from one workspace, with approval gates before anything goes out.",
    stage: "Live",
  },
  {
    name: "Property data federation",
    who: "CRE operator",
    what: "Four sources reconciled into point-in-time answers with conflict detection and citation-exact evidence. Proven against synthetic data before any live system is touched.",
    stage: "Reference architecture",
  },
];
