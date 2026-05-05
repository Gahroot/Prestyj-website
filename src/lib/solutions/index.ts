import type { SolutionPageContent } from "./types";
import { speedToLead } from "./speed-to-lead";
import { leadReactivation } from "./lead-reactivation";
import { roofing } from "./roofing";
import { homeServices } from "./home-services";
import { aiPilotProgram } from "./ai-pilot-program";
import { aiProofOfConcept } from "./ai-proof-of-concept";
import { aiLeadGeneration } from "./ai-lead-generation";
import { salesAutomation } from "./sales-automation";
import { marketingAutomation } from "./marketing-automation";
import { businessAutomation } from "./business-automation";
import { realEstate } from "./real-estate";
import { facebookAdLeads } from "./facebook-ad-leads";
import { youtubeAdLeads } from "./youtube-ad-leads";
import { realEstateLeadConversion } from "./real-estate-lead-conversion";
import { batchVideoAdsRealEstate } from "./batch-video-ads-real-estate";
import { batchVideoAdsForMeta } from "./batch-video-ads-for-meta";
import { batchVideoAdsForTiktok } from "./batch-video-ads-for-tiktok";
import { batchVideoAdsForYoutubeShorts } from "./batch-video-ads-for-youtube-shorts";
import { batchVideoAdsForLeadGeneration } from "./batch-video-ads-for-lead-generation";
import { batchVideoAdsForPersonalBrand } from "./batch-video-ads-for-personal-brand";
import { aiVoiceAgentPricing } from "./ai-voice-agent-pricing";
import { aiReceptionistCost } from "./ai-receptionist-cost";
import { aiAnsweringServiceHvac } from "./ai-answering-service-hvac";
import { aiAnsweringServicePlumbing } from "./ai-answering-service-plumbing";
import { aiReceptionistRealEstate } from "./ai-receptionist-real-estate";
import { aiAppointmentScheduling } from "./ai-appointment-scheduling";
import { leadReactivationRealEstate } from "./lead-reactivation-real-estate";
import { aiSalesAgentCost } from "./ai-sales-agent-cost";

export const solutions: Record<string, SolutionPageContent> = {
  "speed-to-lead": speedToLead,
  "lead-reactivation": leadReactivation,
  "roofing": roofing,
  "home-services": homeServices,
  "ai-pilot-program-consulting": aiPilotProgram,
  "ai-proof-of-concept-consulting": aiProofOfConcept,
  "ai-lead-generation": aiLeadGeneration,
  "sales-automation": salesAutomation,
  "marketing-automation": marketingAutomation,
  "business-automation": businessAutomation,
  "real-estate": realEstate,
  "facebook-ad-leads": facebookAdLeads,
  "youtube-ad-leads": youtubeAdLeads,
  "real-estate-lead-conversion": realEstateLeadConversion,
  "batch-video-ads-real-estate": batchVideoAdsRealEstate,
  "batch-video-ads-for-meta": batchVideoAdsForMeta,
  "batch-video-ads-for-tiktok": batchVideoAdsForTiktok,
  "batch-video-ads-for-youtube-shorts": batchVideoAdsForYoutubeShorts,
  "batch-video-ads-for-lead-generation": batchVideoAdsForLeadGeneration,
  "batch-video-ads-for-personal-brand": batchVideoAdsForPersonalBrand,
  "ai-voice-agent-pricing": aiVoiceAgentPricing,
  "ai-receptionist-cost": aiReceptionistCost,
  "ai-answering-service-hvac": aiAnsweringServiceHvac,
  "ai-answering-service-plumbing": aiAnsweringServicePlumbing,
  "ai-receptionist-real-estate": aiReceptionistRealEstate,
  "ai-appointment-scheduling": aiAppointmentScheduling,
  "lead-reactivation-real-estate": leadReactivationRealEstate,
  "ai-sales-agent-cost": aiSalesAgentCost,
};

export function getSolution(slug: string): SolutionPageContent | undefined {
  return solutions[slug];
}

export function getAllSolutionSlugs(): string[] {
  return Object.keys(solutions);
}

export type { SolutionPageContent } from "./types";
