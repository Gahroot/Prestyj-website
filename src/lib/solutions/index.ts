import type { SolutionPageContent } from "./types";
import { speedToLead } from "./speed-to-lead";
import { leadReactivation } from "./lead-reactivation";

export const solutions: Record<string, SolutionPageContent> = {
  "speed-to-lead": speedToLead,
  "lead-reactivation": leadReactivation,
};

export function getSolution(slug: string): SolutionPageContent | undefined {
  return solutions[slug];
}

export function getAllSolutionSlugs(): string[] {
  return Object.keys(solutions);
}

export type { SolutionPageContent } from "./types";
