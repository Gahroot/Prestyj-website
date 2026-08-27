/**
 * The asks a real fund, brokerage, or operator makes — paired with the
 * systems the answer has to come out of.
 *
 * These are illustrative of the work we build agents to do. Sources named
 * here are systems we integrate against, not endorsements or partnerships.
 */

export type FirmPrompt = {
  ask: string;
  sources: readonly string[];
};

export const firmPrompts: readonly FirmPrompt[] = [
  {
    ask: "Run Q3 NAV and flag anything that moved more than five percent.",
    sources: ["Yardi", "Bank Feeds", "Valuations"],
  },
  {
    ask: "Walk the Fund III waterfall at a 1.8x exit.",
    sources: ["LPA", "Cap Table", "Distribution History"],
  },
  {
    ask: "Draft the LP letter for the Dallas industrial portfolio.",
    sources: ["Rent Roll", "Financials", "Prior Letters"],
  },
  {
    ask: "Pull every lease expiring in the next eighteen months.",
    sources: ["Yardi", "MRI", "Lease Abstracts"],
  },
  {
    ask: "Answer the fee-offset question with the LPA section attached.",
    sources: ["LPA", "Side Letters"],
  },
  {
    ask: "Screen this sponsor before we commit.",
    sources: ["KYC", "Litigation Records", "Web"],
  },
  {
    ask: "Abstract the CIM and flag anything outside our acquisition box.",
    sources: ["VDR", "CIM", "IC Memo"],
  },
  {
    ask: "Reconcile October operating statements against the bank feed.",
    sources: ["Bank Feeds", "Yardi"],
  },
  {
    ask: "Show me every asset where the debt matures before the hedge does.",
    sources: ["Debt Schedule", "Argus"],
  },
  {
    ask: "Who called about the Midtown listing this week, and what did they want?",
    sources: ["Phone", "SMS", "CRM"],
  },
  {
    ask: "Build the IC memo for the Phoenix deal.",
    sources: ["VDR", "Comps", "Model"],
  },
  {
    ask: "Recap the last four investor calls and flag what we promised.",
    sources: ["Transcripts", "Prior Letters"],
  },
];
