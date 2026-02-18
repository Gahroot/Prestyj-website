import type { SolutionPageContent } from "./types";
import { speedToLead } from "./speed-to-lead";
import { leadReactivation } from "./lead-reactivation";
import { roofing } from "./roofing";
import { homeServices } from "./home-services";
import { aiPilotProgram } from "./ai-pilot-program";
import { aiProofOfConcept } from "./ai-proof-of-concept";

export const solutions: Record<string, SolutionPageContent> = {
  "speed-to-lead": speedToLead,
  "lead-reactivation": leadReactivation,
  "roofing": roofing,
  "home-services": homeServices,
  "ai-pilot-program-consulting": aiPilotProgram,
  "ai-proof-of-concept-consulting": aiProofOfConcept,
};

export function getSolution(slug: string): SolutionPageContent | undefined {
  return solutions[slug];
}

export function getAllSolutionSlugs(): string[] {
  return Object.keys(solutions);
}

export type { SolutionPageContent } from "./types";
