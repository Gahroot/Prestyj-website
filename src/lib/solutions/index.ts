import type { SolutionPageContent } from "./types";
import { speedToLead } from "./speed-to-lead";
import { leadReactivation } from "./lead-reactivation";
import { roofing } from "./roofing";
import { homeServices } from "./home-services";
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
import { batchVideoAdsForContractors } from "./batch-video-ads-for-contractors";
import { batchVideoAdsForHvacCompanies } from "./batch-video-ads-for-hvac-companies";
import { batchVideoAdsForMortgageBrokers } from "./batch-video-ads-for-mortgage-brokers";
import { batchVideoAdsForRoofers } from "./batch-video-ads-for-roofers";
import { batchVideoAdsForAgencyOwners } from "./batch-video-ads-for-agency-owners";
import { adCreativeTestingService } from "./ad-creative-testing-service";
import { videoAdProductionVolume } from "./video-ad-production-volume";
import { aiCreativeStudioServiceBusinesses } from "./ai-creative-studio-service-businesses";
import { aiSocialMediaContentGenerator } from "./ai-social-media-content-generator";
import { aiAdCreativeGenerator } from "./ai-ad-creative-generator";
import { aiImageGenerationForBusiness } from "./ai-image-generation-for-business";
import { multiPlatformPublishingTool } from "./multi-platform-publishing-tool";
import { adCreativeTestingAgency } from "./ad-creative-testing-agency";
import { facebookAdCreativeTesting } from "./facebook-ad-creative-testing-agency";
import { videoAdTestingFramework } from "./video-ad-testing-framework";
import { adFatigueManagement } from "./ad-fatigue-management";
import { creativeRefreshService } from "./creative-refresh-service";
import { socialMediaContentService } from "./social-media-content-service";
import { aiSocialMediaManager } from "./ai-social-media-manager";
import { automatedSocialMediaPosts } from "./automated-social-media-posts";
import { instagramCarouselContentService } from "./instagram-carousel-content-service";
import { multiPlatformContentCreation } from "./multi-platform-content-creation";
import { aiContentCalendarService } from "./ai-content-calendar-service";
import { socialMediaPostingService } from "./social-media-posting-service";
import { aiInstagramPostsService } from "./ai-instagram-posts-service";
import { ugcStyleAdProduction } from "./ugc-style-ad-production";
import { adHookTestingService } from "./ad-hook-testing-service";
import { winningAdAngleFinder } from "./winning-ad-angle-finder";
import { videoAdScriptWritingService } from "./video-ad-script-writing-service";
import { facebookAdCreativeVolume } from "./facebook-ad-creative-volume";
import { tiktokAdCreativeTesting } from "./tiktok-ad-creative-testing";
import { youtubeShortsAdProduction } from "./youtube-shorts-ad-production";
import { aiForRealEstateWholesalers } from "./ai-for-real-estate-wholesalers";
import { aiForRealEstateInvestors } from "./ai-for-real-estate-investors";
import { aiForHomeBuilders } from "./ai-for-home-builders";
import { aiForTitleCompanies } from "./ai-for-title-companies";
import { agenticAiRealEstate } from "./agentic-ai-real-estate";
import { aiCallingService } from "./ai-calling-service";
import { aiOutboundCalls } from "./ai-outbound-calls";
import { aiAppointmentSetter } from "./ai-appointment-setter";
import { aiFollowUpSystem } from "./ai-follow-up-system";
import { aiLeadQualification } from "./ai-lead-qualification";
import { aiMissedCallTextBack } from "./ai-missed-call-text-back";
import { aiAnsweringService } from "./ai-answering-service";
import { aiConversationPlatform } from "./ai-conversation-platform";
import { aiInboundCallHandling } from "./ai-inbound-call-handling";
import { aiLeadResponse } from "./ai-lead-response";
import { aiColdCalling } from "./ai-cold-calling";
import { aiPhoneAnswering } from "./ai-phone-answering";
import { aiVirtualReceptionist } from "./ai-virtual-receptionist";
import { aiVoiceAssistantBusiness } from "./ai-voice-assistant-business";
import { aiTextBackService } from "./ai-text-back-service";
import { aiWebChatWidget } from "./ai-web-chat-widget";
import { aiEmailFollowUp } from "./ai-email-follow-up";
import { aiLeadNurturing } from "./ai-lead-nurturing";
import { aiShowRateOptimization } from "./ai-show-rate-optimization";
import { aiNoShowReduction } from "./ai-no-show-reduction";
import { aiPipelineAutomation } from "./ai-pipeline-automation";
import { aiClosingAssistant } from "./ai-closing-assistant";
import { aiDialer } from "./ai-dialer";
import { aiObjectionHandling } from "./ai-objection-handling";
import { aiCrmAutomation } from "./ai-crm-automation";

export const solutions: Record<string, SolutionPageContent> = {
  "speed-to-lead": speedToLead,
  "lead-reactivation": leadReactivation,
  roofing: roofing,
  "home-services": homeServices,
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
  "batch-video-ads-for-contractors": batchVideoAdsForContractors,
  "batch-video-ads-for-hvac-companies": batchVideoAdsForHvacCompanies,
  "batch-video-ads-for-mortgage-brokers": batchVideoAdsForMortgageBrokers,
  "batch-video-ads-for-roofers": batchVideoAdsForRoofers,
  "batch-video-ads-for-agency-owners": batchVideoAdsForAgencyOwners,
  "ad-creative-testing-service": adCreativeTestingService,
  "video-ad-production-volume": videoAdProductionVolume,
  "ai-creative-studio-service-businesses": aiCreativeStudioServiceBusinesses,
  "ai-social-media-content-generator": aiSocialMediaContentGenerator,
  "ai-ad-creative-generator": aiAdCreativeGenerator,
  "ai-image-generation-for-business": aiImageGenerationForBusiness,
  "multi-platform-publishing-tool": multiPlatformPublishingTool,
  "ad-creative-testing-agency": adCreativeTestingAgency,
  "facebook-ad-creative-testing-agency": facebookAdCreativeTesting,
  "video-ad-testing-framework": videoAdTestingFramework,
  "ad-fatigue-management": adFatigueManagement,
  "creative-refresh-service": creativeRefreshService,
  "social-media-content-service": socialMediaContentService,
  "ai-social-media-manager": aiSocialMediaManager,
  "automated-social-media-posts": automatedSocialMediaPosts,
  "instagram-carousel-content-service": instagramCarouselContentService,
  "multi-platform-content-creation": multiPlatformContentCreation,
  "ai-content-calendar-service": aiContentCalendarService,
  "social-media-posting-service": socialMediaPostingService,
  "ai-instagram-posts-service": aiInstagramPostsService,
  "ugc-style-ad-production": ugcStyleAdProduction,
  "ad-hook-testing-service": adHookTestingService,
  "winning-ad-angle-finder": winningAdAngleFinder,
  "video-ad-script-writing-service": videoAdScriptWritingService,
  "facebook-ad-creative-volume": facebookAdCreativeVolume,
  "tiktok-ad-creative-testing": tiktokAdCreativeTesting,
  "youtube-shorts-ad-production": youtubeShortsAdProduction,
  "ai-for-real-estate-wholesalers": aiForRealEstateWholesalers,
  "ai-for-real-estate-investors": aiForRealEstateInvestors,
  "ai-for-home-builders": aiForHomeBuilders,
  "ai-for-title-companies": aiForTitleCompanies,
  "agentic-ai-real-estate": agenticAiRealEstate,
  "ai-calling-service": aiCallingService,
  "ai-outbound-calls": aiOutboundCalls,
  "ai-appointment-setter": aiAppointmentSetter,
  "ai-follow-up-system": aiFollowUpSystem,
  "ai-lead-qualification": aiLeadQualification,
  "ai-missed-call-text-back": aiMissedCallTextBack,
  "ai-answering-service": aiAnsweringService,
  "ai-conversation-platform": aiConversationPlatform,
  "ai-inbound-call-handling": aiInboundCallHandling,
  "ai-lead-response": aiLeadResponse,
  "ai-cold-calling": aiColdCalling,
  "ai-phone-answering": aiPhoneAnswering,
  "ai-virtual-receptionist": aiVirtualReceptionist,
  "ai-voice-assistant-business": aiVoiceAssistantBusiness,
  "ai-text-back-service": aiTextBackService,
  "ai-web-chat-widget": aiWebChatWidget,
  "ai-email-follow-up": aiEmailFollowUp,
  "ai-lead-nurturing": aiLeadNurturing,
  "ai-show-rate-optimization": aiShowRateOptimization,
  "ai-no-show-reduction": aiNoShowReduction,
  "ai-pipeline-automation": aiPipelineAutomation,
  "ai-closing-assistant": aiClosingAssistant,
  "ai-dialer": aiDialer,
  "ai-objection-handling": aiObjectionHandling,
  "ai-crm-automation": aiCrmAutomation,
};

export function getSolution(slug: string): SolutionPageContent | undefined {
  return solutions[slug];
}

export function getAllSolutionSlugs(): string[] {
  return Object.keys(solutions);
}

export type { SolutionPageContent } from "./types";
