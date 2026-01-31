import type { BestForPageContent } from "./types";
import { soloAgents } from "./solo-agents";
import { realEstateTeams } from "./real-estate-teams";
import { isaReplacement } from "./isa-replacement";
import { newAgents } from "./new-agents";
import { realEstateFranchises } from "./real-estate-franchises";
import { regionalBrokerageNetworks } from "./regional-brokerage-networks";
import { peBackedPlatforms } from "./pe-backed-platforms";
import { commercialRealEstate } from "./commercial-real-estate";
import { insuranceAgencies } from "./insurance-agencies";
import { hvac } from "./hvac";
import { mortgageBrokers } from "./mortgage-brokers";

export const bestForPages: Record<string, BestForPageContent> = {
  "solo-agents": soloAgents,
  "real-estate-teams": realEstateTeams,
  "isa-replacement": isaReplacement,
  "new-agents": newAgents,
  "real-estate-franchises": realEstateFranchises,
  "regional-brokerage-networks": regionalBrokerageNetworks,
  "pe-backed-platforms": peBackedPlatforms,
  "commercial-real-estate": commercialRealEstate,
  "insurance-agencies": insuranceAgencies,
  "hvac": hvac,
  "mortgage-brokers": mortgageBrokers,
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
