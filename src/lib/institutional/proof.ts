export type ProofStage = "In production" | "Live" | "Reference architecture";

export type ProofRecord = {
  name: string;
  audience: string;
  stage: ProofStage;
  delivered: string;
  controls: readonly string[];
  evidence: string;
};

/**
 * Anonymized proof grounded in the inspected project repositories.
 * `evidence` is internal review context and is not rendered publicly.
 */
export const proofRecords: readonly ProofRecord[] = [
  {
    name: "Fund administration platform",
    audience: "Real estate investment fund",
    stage: "In production",
    delivered:
      "Multi-currency NAV, performance, and an investor portal, replacing a decade-old system through a staged route-by-route cutover.",
    controls: ["Field-level reconciliation", "Reversible cutover", "Investor-scoped access"],
    evidence: "/Users/groot/easefolio",
  },
  {
    name: "Diligence and client platform",
    audience: "Firm serving family offices and UHNW principals",
    stage: "In production",
    delivered:
      "Versioned assessment workflows, identity verification, and signed PDF work product with approval separated from submission.",
    controls: ["Versioned assessments", "Separated approval", "Signed output"],
    evidence: "/Users/groot/amg-portal",
  },
  {
    name: "Governed intelligence suite",
    audience: "High-assurance operating teams",
    stage: "In production",
    delivered:
      "Screening and investigative intelligence on one evidence spine with tenant isolation and nothing released without a named reviewer.",
    controls: ["Row-level isolation", "Hash-chained audit", "Human release gate"],
    evidence: "/Users/groot/project-ls",
  },
  {
    name: "Voice and SMS origination",
    audience: "Brokerage and sales teams",
    stage: "Live",
    delivered:
      "AI voice agents on live telephony that answer, qualify, book, and hand off with a transcript and classified outcome.",
    controls: ["Consent-aware recording", "Routing rules", "Complete transcript"],
    evidence: "/Users/groot/the-tribunal",
  },
  {
    name: "Creative and ads operations",
    audience: "Marketing teams",
    stage: "Live",
    delivered:
      "Creative generation, multi-platform publishing, and ads management from one workspace with approval before release.",
    controls: ["Approval gates", "Version history", "Channel-specific output"],
    evidence: "/Users/groot/media-master",
  },
  {
    name: "Property data federation",
    audience: "CRE operator",
    stage: "Reference architecture",
    delivered:
      "Multiple sources reconciled into point-in-time answers with conflict detection and citation-exact evidence.",
    controls: ["Conflict queue", "Effective dates", "Citation-exact evidence"],
    evidence: "/Users/groot/triten-os",
  },
] as const;
