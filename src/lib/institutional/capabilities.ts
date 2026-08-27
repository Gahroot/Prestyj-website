import type { LucideIcon } from "lucide-react";
import { Building2, FolderSearch2, Megaphone, MessagesSquare, Scale } from "lucide-react";

export type CapabilitySlug =
  | "deal-diligence"
  | "fund-operations"
  | "investor-reporting"
  | "portfolio-intelligence"
  | "origination"
  | "listing-media";

export type Capability = {
  slug: CapabilitySlug;
  navLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  felt: string;
  icon: LucideIcon;
  asks: readonly string[];
  sources: readonly string[];
  actions: readonly string[];
  review: string;
  outputs: readonly string[];
  boundary: string;
};

export const capabilities: readonly Capability[] = [
  {
    slug: "deal-diligence",
    navLabel: "Deal diligence",
    eyebrow: "Deal work",
    title: "Clear diligence without losing the source.",
    description:
      "Prestyj reads the VDR, screens the parties, reconciles the model, and returns committee-ready work with the evidence attached.",
    felt: "Nobody re-reads the data room to defend one number.",
    icon: FolderSearch2,
    asks: [
      "Abstract the CIM and flag anything outside our acquisition box.",
      "Screen the sponsor and attach the source for every finding.",
      "Build the IC memo from the VDR, model, and comps.",
    ],
    sources: ["VDR", "CIM", "Model", "Comps", "Public records", "IC templates"],
    actions: ["Extract", "Compare", "Screen", "Reconcile", "Draft"],
    review: "A named deal-team owner releases every conclusion.",
    outputs: ["Diligence log", "Exception report", "IC memo", "Source packet"],
    boundary:
      "Conflicting sources are surfaced, never averaged. Prestyj does not replace legal, tax, or investment judgment.",
  },
  {
    slug: "fund-operations",
    navLabel: "Fund operations",
    eyebrow: "Fund operations",
    title: "Close the quarter while the numbers are still fresh.",
    description:
      "Prestyj reconciles the underlying activity, runs your fund logic, and prepares the close package in the format your team already uses.",
    felt: "The third week of the month stops being a fire drill.",
    icon: Scale,
    asks: [
      "Run Q3 NAV and flag anything that moved more than five percent.",
      "Walk the Fund III waterfall at a 1.8x exit.",
      "Reconcile October statements against the bank feed.",
    ],
    sources: ["General ledger", "Bank feeds", "Valuations", "LPA", "Cap table"],
    actions: ["Reconcile", "Calculate", "Allocate", "Explain", "Package"],
    review: "Fund accounting approves the close before anything is published.",
    outputs: ["NAV package", "Fee schedule", "Waterfall", "Variance report"],
    boundary:
      "The general ledger remains the system of record. Every figure traces to the transaction beneath it.",
  },
  {
    slug: "investor-reporting",
    navLabel: "Investor reporting",
    eyebrow: "Investor relations",
    title: "Answer the LP before the follow-up arrives.",
    description:
      "Prestyj assembles investor-specific answers, statements, documents, and letters without crossing a fund or investor boundary.",
    felt: "The same question stops landing in three inboxes at 9pm.",
    icon: MessagesSquare,
    asks: [
      "Draft the LP letter for the Dallas industrial portfolio.",
      "Answer the fee-offset question with the LPA section attached.",
      "Recap the last four investor calls and flag what we promised.",
    ],
    sources: ["LPA", "Side letters", "Statements", "Prior letters", "Call transcripts"],
    actions: ["Retrieve", "Scope", "Draft", "Cite", "Route"],
    review: "Investor relations approves every external release.",
    outputs: ["LP response", "Quarterly letter", "Statement package", "Commitment log"],
    boundary:
      "Access is investor-specific and denied by default. One LP never sees another LP's records.",
  },
  {
    slug: "portfolio-intelligence",
    navLabel: "Portfolio intelligence",
    eyebrow: "Portfolio operations",
    title: "Trust one answer across every property system.",
    description:
      "Prestyj reconciles fragmented property, lease, debt, and operating data into point-in-time answers with conflicts made visible.",
    felt: "Two decks stop disagreeing in front of the committee.",
    icon: Building2,
    asks: [
      "Pull every lease expiring in the next eighteen months.",
      "Show every asset where the debt matures before the hedge does.",
      "Explain why Dallas NOI differs between the model and Yardi.",
    ],
    sources: ["Property system", "Lease abstracts", "Debt schedules", "Models", "Email"],
    actions: ["Unify", "Match", "Date", "Detect conflicts", "Answer"],
    review: "The responsible asset manager resolves material conflicts.",
    outputs: ["Portfolio answer", "Conflict queue", "Maturity watchlist", "Source trail"],
    boundary:
      "Prestyj preserves source lineage and effective dates. It never silently overwrites a system of record.",
  },
  {
    slug: "origination",
    navLabel: "Origination",
    eyebrow: "Commercial brokerage",
    title: "Catch the inbound while the prospect is still moving.",
    description:
      "Prestyj answers calls, forms, and texts, qualifies against your criteria, books the next step, and hands the broker a complete record.",
    felt: "The Saturday caller stops being a coin flip.",
    icon: MessagesSquare,
    asks: [
      "Answer every call on the Midtown listing after hours.",
      "Qualify tenant requirements before routing the inquiry.",
      "Show who called this week and what each prospect wanted.",
    ],
    sources: ["Phone", "SMS", "Forms", "CRM", "Calendar", "Listing data"],
    actions: ["Answer", "Qualify", "Book", "Transcribe", "Hand off"],
    review: "Your routing rules decide when a broker takes over.",
    outputs: ["Booked meeting", "Qualified inquiry", "Transcript", "CRM update"],
    boundary:
      "Call recording and follow-up depend on explicit consent and applicable communications rules.",
  },
  {
    slug: "listing-media",
    navLabel: "Listing media",
    eyebrow: "Origination",
    title: "Ship the materials before the listing loses momentum.",
    description:
      "Prestyj turns approved property facts and firm standards into offering, campaign, and ad materials produced at volume and held for review.",
    felt: "Marketing stops being the bottleneck on a live assignment.",
    icon: Megaphone,
    asks: [
      "Turn the approved property story into channel-ready campaign variants.",
      "Keep every listing asset on brand while the facts change.",
      "Publish only the materials the deal lead approved.",
    ],
    sources: ["Offering facts", "Brand standards", "Approved photography", "Prior materials"],
    actions: ["Draft", "Version", "Format", "Review", "Publish"],
    review: "Nothing publishes until the listing owner approves it.",
    outputs: ["Offering materials", "Campaign kit", "Ad variants", "Approval record"],
    boundary:
      "Property claims come only from approved source material. Generated media is labeled where required.",
  },
] as const;

export function getCapability(slug: string): Capability | undefined {
  return capabilities.find((capability) => capability.slug === slug);
}
