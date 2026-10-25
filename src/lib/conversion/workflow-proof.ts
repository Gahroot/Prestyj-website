import { capabilities, type CapabilitySlug } from "@/lib/institutional/capabilities";
import { proofRecords, type ProofStage } from "@/lib/institutional/proof";
import type { ResearchArticle } from "@/lib/institutional/research";
import { workSamples } from "@/lib/institutional/work-samples";

/** Fixture = synthetic example, never a customer result. Others are proof.ts stages. */
export type ProofItemStage = ProofStage | "Fixture";

export type ProofItem = {
  key: string;
  stage: ProofItemStage;
  title: string;
  summary: string;
  href?: string;
};

/** Which anonymized proof record best evidences each workflow. */
const PROOF_RECORD_BY_CAPABILITY: Record<CapabilitySlug, string> = {
  "deal-diligence": "Diligence and client platform",
  "fund-operations": "Fund administration platform",
  "investor-reporting": "Fund administration platform",
  "portfolio-intelligence": "Property data federation",
  origination: "Voice and SMS origination",
  "listing-media": "Creative and ads operations",
};

export function primaryCapability(article: Pick<ResearchArticle, "capabilities">): CapabilitySlug {
  return article.capabilities[0] ?? "fund-operations";
}

export function workflowLabel(slug: CapabilitySlug): string {
  return capabilities.find((capability) => capability.slug === slug)?.navLabel ?? "workflow";
}

/** 1 to `limit` proof items for the given workflows, records first, then fixtures. Deduplicated. */
export function getWorkflowProof(caps: readonly CapabilitySlug[], limit = 3): readonly ProofItem[] {
  const items: ProofItem[] = [];
  const seen = new Set<string>();
  const push = (item: ProofItem) => {
    if (seen.has(item.key) || items.length >= limit) return;
    seen.add(item.key);
    items.push(item);
  };
  for (const cap of caps) {
    const record = proofRecords.find((entry) => entry.name === PROOF_RECORD_BY_CAPABILITY[cap]);
    if (record) {
      push({
        key: `record:${record.name}`,
        stage: record.stage,
        title: record.name,
        summary: record.delivered,
        href: "/results",
      });
    }
  }
  for (const cap of caps) {
    const sample = workSamples.find((entry) => entry.href === `/capabilities/${cap}`);
    if (sample) {
      push({
        key: `sample:${sample.id}`,
        stage: "Fixture",
        title: `${sample.label}: ${sample.title}`,
        summary: `Synthetic example, not customer data. ${sample.note}`,
        href: sample.href,
      });
    }
  }
  return items;
}

export function proofStageLabel(stage: ProofItemStage): string {
  return stage === "Fixture" ? "Fixture · synthetic example" : stage;
}
