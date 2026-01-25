import type { BestForPageContent } from "./types";
import { soloAgents } from "./solo-agents";
import { realEstateTeams } from "./real-estate-teams";
import { isaReplacement } from "./isa-replacement";
import { newAgents } from "./new-agents";

export const bestForPages: Record<string, BestForPageContent> = {
  "solo-agents": soloAgents,
  "real-estate-teams": realEstateTeams,
  "isa-replacement": isaReplacement,
  "new-agents": newAgents,
};

export function getBestFor(slug: string): BestForPageContent | undefined {
  return bestForPages[slug];
}

export function getAllBestForSlugs(): string[] {
  return Object.keys(bestForPages);
}

export function getAllBestForPages(): BestForPageContent[] {
  return Object.values(bestForPages);
}

export type { BestForPageContent, WhyBestForReason, PainPoint, ComparisonRow, FAQItem } from "./types";
