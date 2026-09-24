import { audiences } from "@/lib/institutional/audiences";
import { capabilities } from "@/lib/institutional/capabilities";
import { outcomes } from "@/lib/institutional/outcomes";
import { proofRecords } from "@/lib/institutional/proof";
import { positioning } from "@/lib/positioning";

export const layoutFamilies = [
  {
    slug: "editorial",
    label: "Editorial",
    description: "Argument-led pages with memo and dossier pacing.",
  },
  {
    slug: "ledger",
    label: "Evidence ledger",
    description: "Source, action, review, and delivery become the visible structure.",
  },
  {
    slug: "workbench",
    label: "Workbench",
    description: "Active assignments and finished records make the product legible.",
  },
  {
    slug: "proof",
    label: "Proof first",
    description: "Authentic delivery records and buyer outcomes lead the claim.",
  },
  {
    slug: "narrative",
    label: "Narrative",
    description: "One operating sequence carries the reader through the page.",
  },
  {
    slug: "conversion",
    label: "Conversion",
    description: "Qualification and workflow selection sharpen the access request.",
  },
] as const;

export type LayoutFamily = (typeof layoutFamilies)[number]["slug"];
export type LayoutSection =
  | "positioning"
  | "work"
  | "evidence"
  | "outcomes"
  | "controls"
  | "proof"
  | "conversion";
export type LayoutReference =
  | "Apple"
  | "Cherre"
  | "Dealpath"
  | "Harvey"
  | "Hebbia"
  | "Juniper Square"
  | "Linear"
  | "Northspyre"
  | "Palantir"
  | "Rogo"
  | "Sanity"
  | "Vanta";

type CapabilityIndex = 0 | 1 | 2 | 3 | 4 | 5;
type OutcomeIndex = CapabilityIndex | 6 | 7 | 8;

export type LayoutRecipe = {
  readonly number: number;
  readonly slug: string;
  readonly title: string;
  readonly family: LayoutFamily;
  readonly scanPath: readonly [string, string, string];
  readonly bestFit: string;
  readonly references: readonly LayoutReference[];
  readonly sectionOrder: readonly LayoutSection[];
  readonly composition: {
    readonly variant: 1 | 2 | 3 | 4;
    readonly density: "spare" | "balanced" | "dense";
    readonly rail: "single" | "split" | "indexed";
    readonly emphasis: "claim" | "evidence" | "work" | "controls" | "outcome";
  };
  readonly featured: {
    readonly capability: CapabilityIndex;
    readonly outcome: OutcomeIndex;
    readonly proof: CapabilityIndex;
  };
};

const sharedSections = [
  "positioning",
  "work",
  "evidence",
  "outcomes",
  "controls",
  "proof",
  "conversion",
] as const satisfies readonly LayoutSection[];

export const layouts = [
  {
    number: 1,
    slug: "investment-brief",
    title: "Investment Brief",
    family: "editorial",
    scanPath: ["Position", "Qualification ledger", "Proof record"],
    bestFit: "A direct first read for investment-committee leaders.",
    references: ["Hebbia", "Rogo"],
    sectionOrder: sharedSections,
    composition: { variant: 1, density: "balanced", rail: "split", emphasis: "claim" },
    featured: { capability: 0, outcome: 4, proof: 0 },
  },
  {
    number: 2,
    slug: "split-dossier",
    title: "Split Dossier",
    family: "editorial",
    scanPath: ["Deal summary", "Evidence sections", "Access request"],
    bestFit: "Buyers who compare operating detail while keeping context visible.",
    references: ["Dealpath", "Harvey"],
    sectionOrder: [
      "positioning",
      "evidence",
      "work",
      "controls",
      "outcomes",
      "proof",
      "conversion",
    ],
    composition: { variant: 2, density: "dense", rail: "split", emphasis: "evidence" },
    featured: { capability: 3, outcome: 5, proof: 5 },
  },
  {
    number: 3,
    slug: "sunday-memo",
    title: "Sunday Memo",
    family: "editorial",
    scanPath: ["Dominant outcome", "Operating facts", "Reviewed delivery"],
    bestFit: "Senior operators who recognize the cost of recurring fire drills.",
    references: ["Sanity", "Harvey"],
    sectionOrder: [
      "outcomes",
      "positioning",
      "work",
      "evidence",
      "proof",
      "controls",
      "conversion",
    ],
    composition: { variant: 3, density: "balanced", rail: "indexed", emphasis: "outcome" },
    featured: { capability: 1, outcome: 0, proof: 0 },
  },
  {
    number: 4,
    slug: "executive-manifesto",
    title: "Executive Manifesto",
    family: "editorial",
    scanPath: ["Operating claim", "Controlled facts", "Proof"],
    bestFit: "A restrained top-level story before operational qualification.",
    references: ["Apple", "Palantir"],
    sectionOrder: [
      "positioning",
      "outcomes",
      "controls",
      "work",
      "evidence",
      "proof",
      "conversion",
    ],
    composition: { variant: 4, density: "spare", rail: "single", emphasis: "claim" },
    featured: { capability: 2, outcome: 3, proof: 2 },
  },
  {
    number: 5,
    slug: "source-to-decision",
    title: "Source to Decision",
    family: "ledger",
    scanPath: ["Source", "Reviewed action", "Delivered work"],
    bestFit: "Teams that need the control model understood immediately.",
    references: ["Cherre", "Linear"],
    sectionOrder: [
      "evidence",
      "positioning",
      "work",
      "controls",
      "outcomes",
      "proof",
      "conversion",
    ],
    composition: { variant: 1, density: "balanced", rail: "single", emphasis: "evidence" },
    featured: { capability: 0, outcome: 4, proof: 5 },
  },
  {
    number: 6,
    slug: "committee-memo",
    title: "Committee Memo",
    family: "ledger",
    scanPath: ["Recommendation", "Assumptions", "Citations"],
    bestFit: "Investment teams accustomed to recommendation-first work product.",
    references: ["Hebbia", "Rogo"],
    sectionOrder: [
      "outcomes",
      "evidence",
      "controls",
      "work",
      "positioning",
      "proof",
      "conversion",
    ],
    composition: { variant: 2, density: "dense", rail: "split", emphasis: "evidence" },
    featured: { capability: 0, outcome: 5, proof: 1 },
  },
  {
    number: 7,
    slug: "audit-trail",
    title: "Audit Trail",
    family: "ledger",
    scanPath: ["Work record", "Review gates", "Release"],
    bestFit: "Control owners who judge the process before the promise.",
    references: ["Vanta", "Cherre"],
    sectionOrder: [
      "controls",
      "evidence",
      "work",
      "proof",
      "positioning",
      "outcomes",
      "conversion",
    ],
    composition: { variant: 3, density: "dense", rail: "indexed", emphasis: "controls" },
    featured: { capability: 1, outcome: 3, proof: 2 },
  },
  {
    number: 8,
    slug: "findings-index",
    title: "Findings Index",
    family: "ledger",
    scanPath: ["Numbered findings", "Evidence record", "Next action"],
    bestFit: "Fast scanners who want dense information scent.",
    references: ["Dealpath", "Sanity"],
    sectionOrder: [
      "evidence",
      "outcomes",
      "work",
      "proof",
      "controls",
      "positioning",
      "conversion",
    ],
    composition: { variant: 4, density: "dense", rail: "indexed", emphasis: "evidence" },
    featured: { capability: 3, outcome: 5, proof: 5 },
  },
  {
    number: 9,
    slug: "analyst-desk",
    title: "Analyst Desk",
    family: "workbench",
    scanPath: ["Assignments", "Source state", "Finished output"],
    bestFit: "Buyers who need to see what the agent actually completes.",
    references: ["Linear", "Hebbia"],
    sectionOrder: [
      "work",
      "evidence",
      "controls",
      "positioning",
      "outcomes",
      "proof",
      "conversion",
    ],
    composition: { variant: 1, density: "dense", rail: "split", emphasis: "work" },
    featured: { capability: 0, outcome: 4, proof: 1 },
  },
  {
    number: 10,
    slug: "workflow-board",
    title: "Workflow Board",
    family: "workbench",
    scanPath: ["Work lanes", "Review owner", "Outputs"],
    bestFit: "Cross-functional firms comparing work across operating lanes.",
    references: ["Dealpath", "Linear"],
    sectionOrder: [
      "work",
      "outcomes",
      "controls",
      "evidence",
      "proof",
      "positioning",
      "conversion",
    ],
    composition: { variant: 2, density: "dense", rail: "indexed", emphasis: "work" },
    featured: { capability: 1, outcome: 0, proof: 0 },
  },
  {
    number: 11,
    slug: "inbox-to-decision",
    title: "Inbox to Decision",
    family: "workbench",
    scanPath: ["Incoming request", "Reviewed answer", "Delivered artifact"],
    bestFit: "Teams whose recurring work begins as an internal request.",
    references: ["Vanta", "Linear"],
    sectionOrder: [
      "work",
      "evidence",
      "proof",
      "controls",
      "outcomes",
      "positioning",
      "conversion",
    ],
    composition: { variant: 3, density: "balanced", rail: "single", emphasis: "work" },
    featured: { capability: 2, outcome: 2, proof: 1 },
  },
  {
    number: 12,
    slug: "deal-room",
    title: "Deal Room",
    family: "workbench",
    scanPath: ["Source inventory", "Diligence questions", "Completed work"],
    bestFit: "Deal teams evaluating source coverage and committee readiness.",
    references: ["Hebbia", "Dealpath"],
    sectionOrder: [
      "evidence",
      "work",
      "outcomes",
      "controls",
      "proof",
      "positioning",
      "conversion",
    ],
    composition: { variant: 4, density: "dense", rail: "split", emphasis: "work" },
    featured: { capability: 0, outcome: 4, proof: 1 },
  },
  {
    number: 13,
    slug: "proof-before-promise",
    title: "Proof Before Promise",
    family: "proof",
    scanPath: ["Delivery record", "Controls", "Position"],
    bestFit: "Skeptical buyers who require authentic work evidence first.",
    references: ["Rogo", "Vanta"],
    sectionOrder: [
      "proof",
      "controls",
      "positioning",
      "work",
      "evidence",
      "outcomes",
      "conversion",
    ],
    composition: { variant: 1, density: "balanced", rail: "single", emphasis: "evidence" },
    featured: { capability: 1, outcome: 3, proof: 0 },
  },
  {
    number: 14,
    slug: "outcome-index",
    title: "Outcome Index",
    family: "proof",
    scanPath: ["Buyer outcome", "Delivered evidence", "Access"],
    bestFit: "Operators scanning for their own workload before implementation detail.",
    references: ["Northspyre", "Dealpath"],
    sectionOrder: [
      "outcomes",
      "proof",
      "work",
      "evidence",
      "controls",
      "positioning",
      "conversion",
    ],
    composition: { variant: 2, density: "dense", rail: "indexed", emphasis: "outcome" },
    featured: { capability: 3, outcome: 5, proof: 5 },
  },
  {
    number: 15,
    slug: "before-and-after",
    title: "Before and After",
    family: "proof",
    scanPath: ["Manual pattern", "Controlled work", "Finished output"],
    bestFit: "Teams comparing today’s operating burden with a governed alternative.",
    references: ["Northspyre", "Vanta"],
    sectionOrder: [
      "outcomes",
      "work",
      "controls",
      "proof",
      "evidence",
      "positioning",
      "conversion",
    ],
    composition: { variant: 3, density: "balanced", rail: "split", emphasis: "outcome" },
    featured: { capability: 1, outcome: 0, proof: 0 },
  },
  {
    number: 16,
    slug: "field-notes",
    title: "Field Notes",
    family: "proof",
    scanPath: ["Case record", "Source anatomy", "Reviewer"],
    bestFit: "Readers who trust concise operating records over broad claims.",
    references: ["Harvey", "Cherre"],
    sectionOrder: [
      "proof",
      "evidence",
      "controls",
      "outcomes",
      "work",
      "positioning",
      "conversion",
    ],
    composition: { variant: 4, density: "dense", rail: "indexed", emphasis: "evidence" },
    featured: { capability: 0, outcome: 4, proof: 1 },
  },
  {
    number: 17,
    slug: "one-deal-journey",
    title: "One Deal Journey",
    family: "narrative",
    scanPath: ["Inbound", "Committee work", "Reviewed delivery"],
    bestFit: "Deal leaders who want one concrete end-to-end sequence.",
    references: ["Palantir", "Hebbia"],
    sectionOrder: [
      "work",
      "evidence",
      "controls",
      "outcomes",
      "proof",
      "positioning",
      "conversion",
    ],
    composition: { variant: 1, density: "balanced", rail: "indexed", emphasis: "work" },
    featured: { capability: 0, outcome: 4, proof: 1 },
  },
  {
    number: 18,
    slug: "fund-calendar",
    title: "Fund Calendar",
    family: "narrative",
    scanPath: ["Operating cadence", "Quarter-end work", "Investor release"],
    bestFit: "Fund leaders whose workload is governed by recurring deadlines.",
    references: ["Juniper Square", "Northspyre"],
    sectionOrder: [
      "outcomes",
      "work",
      "evidence",
      "controls",
      "proof",
      "positioning",
      "conversion",
    ],
    composition: { variant: 2, density: "dense", rail: "indexed", emphasis: "outcome" },
    featured: { capability: 1, outcome: 0, proof: 0 },
  },
  {
    number: 19,
    slug: "evidence-chain",
    title: "Evidence Chain",
    family: "narrative",
    scanPath: ["Cited answer", "Next decision", "Release"],
    bestFit: "Control-minded buyers following how evidence survives each handoff.",
    references: ["Cherre", "Palantir"],
    sectionOrder: [
      "evidence",
      "work",
      "outcomes",
      "controls",
      "proof",
      "positioning",
      "conversion",
    ],
    composition: { variant: 3, density: "balanced", rail: "single", emphasis: "evidence" },
    featured: { capability: 3, outcome: 5, proof: 5 },
  },
  {
    number: 20,
    slug: "role-relay",
    title: "Role Relay",
    family: "narrative",
    scanPath: ["Partner question", "Analyst work", "Reviewer release"],
    bestFit: "Multi-role teams evaluating ownership and handoff boundaries.",
    references: ["Juniper Square", "Linear"],
    sectionOrder: [
      "work",
      "controls",
      "evidence",
      "proof",
      "outcomes",
      "positioning",
      "conversion",
    ],
    composition: { variant: 4, density: "dense", rail: "split", emphasis: "controls" },
    featured: { capability: 2, outcome: 2, proof: 1 },
  },
  {
    number: 21,
    slug: "qualify-first",
    title: "Qualify First",
    family: "conversion",
    scanPath: ["Audience fit", "Workflow fit", "Access request"],
    bestFit: "High-intent visitors who need to self-qualify quickly.",
    references: ["Vanta", "Rogo"],
    sectionOrder: [
      "controls",
      "work",
      "evidence",
      "outcomes",
      "proof",
      "positioning",
      "conversion",
    ],
    composition: { variant: 1, density: "balanced", rail: "split", emphasis: "controls" },
    featured: { capability: 0, outcome: 4, proof: 0 },
  },
  {
    number: 22,
    slug: "work-sample-first",
    title: "Work Sample First",
    family: "conversion",
    scanPath: ["Finished artifact", "Control anatomy", "Access request"],
    bestFit: "Buyers who decide from the work product, not feature language.",
    references: ["Hebbia", "Harvey"],
    sectionOrder: [
      "work",
      "proof",
      "evidence",
      "controls",
      "outcomes",
      "positioning",
      "conversion",
    ],
    composition: { variant: 2, density: "balanced", rail: "single", emphasis: "work" },
    featured: { capability: 0, outcome: 4, proof: 1 },
  },
  {
    number: 23,
    slug: "choose-the-workflow",
    title: "Choose the Workflow",
    family: "conversion",
    scanPath: ["Work lanes", "Selected anatomy", "Scoped access"],
    bestFit: "Visitors arriving with a known workflow but unclear implementation path.",
    references: ["Dealpath", "Sanity"],
    sectionOrder: [
      "work",
      "outcomes",
      "evidence",
      "controls",
      "proof",
      "positioning",
      "conversion",
    ],
    composition: { variant: 3, density: "dense", rail: "indexed", emphasis: "work" },
    featured: { capability: 3, outcome: 5, proof: 5 },
  },
  {
    number: 24,
    slug: "control-room",
    title: "Control Room",
    family: "conversion",
    scanPath: ["Review rules", "Capability proof", "Access request"],
    bestFit: "Risk owners who must approve the operating boundary first.",
    references: ["Vanta", "Palantir"],
    sectionOrder: [
      "controls",
      "evidence",
      "proof",
      "work",
      "outcomes",
      "positioning",
      "conversion",
    ],
    composition: { variant: 4, density: "dense", rail: "split", emphasis: "controls" },
    featured: { capability: 2, outcome: 3, proof: 2 },
  },
] as const satisfies readonly LayoutRecipe[];

function requireThree<T>(items: readonly T[], label: string): readonly [T, T, T, ...T[]] {
  const [first, second, third, ...rest] = items;
  if (!first || !second || !third) throw new Error(`Layout lab requires three canonical ${label}.`);
  return [first, second, third, ...rest];
}

function requireSix<T>(items: readonly T[], label: string): readonly [T, T, T, T, T, T, ...T[]] {
  const [first, second, third, fourth, fifth, sixth, ...rest] = items;
  if (!first || !second || !third || !fourth || !fifth || !sixth) {
    throw new Error(`Layout lab requires six canonical ${label}.`);
  }
  return [first, second, third, fourth, fifth, sixth, ...rest];
}

function requireNine<T>(
  items: readonly T[],
  label: string,
): readonly [T, T, T, T, T, T, T, T, T, ...T[]] {
  const [first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, ...rest] = items;
  if (!first || !second || !third || !fourth || !fifth || !sixth || !seventh || !eighth || !ninth) {
    throw new Error(`Layout lab requires nine canonical ${label}.`);
  }
  return [first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, ...rest];
}

export const layoutLabContent = {
  positioning,
  audiences: requireThree(audiences, "audiences"),
  capabilities: requireSix(capabilities, "capabilities"),
  outcomes: requireNine(outcomes, "outcomes"),
  proofRecords: requireSix(proofRecords, "proof records"),
} as const;

export function getLayoutRecipe(slug: string): LayoutRecipe | undefined {
  return layouts.find((layout) => layout.slug === slug);
}
