import type { SolutionPageContent } from "./types";
import { speedToLead } from "./speed-to-lead";
import { leadReactivation } from "./lead-reactivation";
import { aiLeadGeneration } from "./ai-lead-generation";
import { salesAutomation } from "./sales-automation";
import { marketingAutomation } from "./marketing-automation";
import { aiAppointmentSetter } from "./ai-appointment-setter";
import { aiLeadQualification } from "./ai-lead-qualification";
import { aiLeadResponse } from "./ai-lead-response";
import { aiVirtualReceptionist } from "./ai-virtual-receptionist";
import { aiSalesAgentCost } from "./ai-sales-agent-cost";
import { aiVoiceAgentPricing } from "./ai-voice-agent-pricing";
import { batchVideoAdsForLeadGeneration } from "./batch-video-ads-for-lead-generation";

export const solutions: Record<string, SolutionPageContent> = {
  "speed-to-lead": speedToLead,
  "lead-reactivation": leadReactivation,
  "ai-lead-generation": aiLeadGeneration,
  "sales-automation": salesAutomation,
  "marketing-automation": marketingAutomation,
  "ai-appointment-setter": aiAppointmentSetter,
  "ai-lead-qualification": aiLeadQualification,
  "ai-lead-response": aiLeadResponse,
  "ai-virtual-receptionist": aiVirtualReceptionist,
  "ai-sales-agent-cost": aiSalesAgentCost,
  "ai-voice-agent-pricing": aiVoiceAgentPricing,
  "batch-video-ads-for-lead-generation": batchVideoAdsForLeadGeneration,
};

export function getSolution(slug: string): SolutionPageContent | undefined {
  return solutions[slug];
}

export function getAllSolutionSlugs(): string[] {
  return Object.keys(solutions);
}

export type { SolutionPageContent } from "./types";
