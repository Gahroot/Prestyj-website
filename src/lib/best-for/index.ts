import type { BestForPageContent } from "./types";
import { realEstateTeams } from "./real-estate-teams";
import { isaReplacement } from "./isa-replacement";
import { realEstateFranchises } from "./real-estate-franchises";
import { regionalBrokerageNetworks } from "./regional-brokerage-networks";
import { peBackedPlatforms } from "./pe-backed-platforms";
import { commercialRealEstate } from "./commercial-real-estate";
import { realEstateInvestors } from "./real-estate-investors";
import { aiRealEstateWholesalers } from "./ai-real-estate-wholesalers";
import { aiRealEstateInvestors } from "./ai-real-estate-investors";
import { aiHomeBuilders } from "./ai-home-builders";
import { aiTitleCompanies } from "./ai-title-companies";
import { aiRealEstateAgents } from "./ai-real-estate-agents";
import { insuranceAgencies } from "./insurance-agencies";
import { mortgageBrokers } from "./mortgage-brokers";
import { propertyManagers } from "./property-managers";
import { doneForYouAi } from "./done-for-you-ai";
import { financialAdvisors } from "./financial-advisors";
import { wealthManagementFirms } from "./wealth-management-firms";
import { insuranceCarriers } from "./insurance-carriers";
import { aiLeadResponse } from "./ai-lead-response";
import { aiVoiceQualification } from "./ai-voice-qualification";
import { aiAppointmentSetting } from "./ai-appointment-setting";
import { customAiDevelopment } from "./custom-ai-development";
import { aiVoiceReceptionist } from "./ai-voice-receptionist";
import { aiVoiceReceptionistHvac } from "./ai-voice-receptionist-hvac";
import { aiVoiceReceptionistPlumbing } from "./ai-voice-receptionist-plumbing";
import { aiVoiceReceptionistRealEstate } from "./ai-voice-receptionist-real-estate";
import { realEstateWholesalers } from "./real-estate-wholesalers";
import { realEstateCoach } from "./real-estate-coach";
import { fintech } from "./fintech";
import { conversionRateOptimization } from "./conversion-rate-optimization";
import { aiCustomerEngagement } from "./ai-customer-engagement";
import { aiSalesAgent } from "./ai-sales-agent";
import { realEstateBrokerages } from "./real-estate-brokerages";
import { facebookAdsRealEstate } from "./facebook-ads-real-estate";
import { youtubeAdsRealEstate } from "./youtube-ads-real-estate";
import { realEstateTeamLeaders } from "./real-estate-team-leaders";
import { newConstructionBuilders } from "./new-construction-builders";
import { propertyManagerVideoAds } from "./property-manager-video-ads";
import { mortgageBrokerVideoAds } from "./mortgage-broker-video-ads";
import { brokerageRecruitingVideoAds } from "./brokerage-recruiting-video-ads";
import { newConstructionBuilderVideoAds } from "./new-construction-builder-video-ads";
import { titleCompanyVideoAds } from "./title-company-video-ads";
import { videoAdsForRealtors } from "./video-ads-for-realtors";
import { videoAdsForRoofers } from "./video-ads-for-roofers";
import { videoAdsForHvacOwners } from "./video-ads-for-hvac-owners";
import { videoAdsForChiropractors } from "./video-ads-for-chiropractors";
import { videoAdsForLawFirmOwners } from "./video-ads-for-law-firm-owners";
import { videoAdsForAgencyOwners } from "./video-ads-for-agency-owners";
import { videoAdsForContractors } from "./video-ads-for-contractors";
import { videoAdsForFinancialAdvisors } from "./video-ads-for-financial-advisors";
import { videoAdsForSolarCompanies } from "./video-ads-for-solar-companies";
import { videoAdsForPestControl } from "./video-ads-for-pest-control";
import { videoAdsForElectricians } from "./video-ads-for-electricians";
import { videoAdsForPlumbingOwners } from "./video-ads-for-plumbing-owners";
import { videoAdsForDentalPractices } from "./video-ads-for-dental-practices";
import { videoAdsForMedSpas } from "./video-ads-for-med-spas";
import { videoAdsForInsuranceAgents } from "./video-ads-for-insurance-agents";
import { videoAdsForAutoDealerships } from "./video-ads-for-auto-dealerships";
import { videoAdsForSeniorCare } from "./video-ads-for-senior-care";
// Geo: 15 state-specific real estate video ad pages.
// Note: 51 metro-level `video-ads-for-realtors-[city]` pages were removed —
// they pitched batch video ads which conflicts with the AI marketing & sales
// core positioning, and were obvious programmatic-SEO geo-spam. 301 redirected
// to /pricing in next.config.ts.
import { realEstateVideoAdsTexas } from "./real-estate-video-ads-texas";
import { realEstateVideoAdsFlorida } from "./real-estate-video-ads-florida";
import { realEstateVideoAdsCalifornia } from "./real-estate-video-ads-california";
import { realEstateVideoAdsArizona } from "./real-estate-video-ads-arizona";
import { realEstateVideoAdsColorado } from "./real-estate-video-ads-colorado";
import { realEstateVideoAdsNorthCarolina } from "./real-estate-video-ads-north-carolina";
import { realEstateVideoAdsGeorgia } from "./real-estate-video-ads-georgia";
import { realEstateVideoAdsTennessee } from "./real-estate-video-ads-tennessee";
import { realEstateVideoAdsNevada } from "./real-estate-video-ads-nevada";
import { realEstateVideoAdsWashington } from "./real-estate-video-ads-washington";
import { realEstateVideoAdsOregon } from "./real-estate-video-ads-oregon";
import { realEstateVideoAdsNewYork } from "./real-estate-video-ads-new-york";
import { realEstateVideoAdsPennsylvania } from "./real-estate-video-ads-pennsylvania";
import { realEstateVideoAdsOhio } from "./real-estate-video-ads-ohio";
import { realEstateVideoAdsIllinois } from "./real-estate-video-ads-illinois";

// SEO-BOT-APPEND-IMPORTS

// BATCH-MATRIX-IMPORTS-START
import { batchVideoAdsForRealEstateTeams } from "./batch-video-ads-for-real-estate-teams";
import { costPerTestedAdAngleForRealEstateTeams } from "./cost-per-tested-ad-angle-for-real-estate-teams";
// SOCIAL-VERTICAL-MATRIX-IMPORTS-START
import { doneForYouSocialForServiceBusinessOwners } from "./done-for-you-social-for-service-business-owners";
import { socialVolumeStrategyForServiceBusinessOwners } from "./social-volume-strategy-for-service-business-owners";
// SOCIAL-VERTICAL-MATRIX-IMPORTS-END
// BATCH-MATRIX-IMPORTS-END

// BATCH-ORGANIC-MATRIX-IMPORTS-START
import { batchVideoAdsForDentists } from "./batch-video-ads-for-dentists";
import { batchVideoAdsForAutoDealerships } from "./batch-video-ads-for-auto-dealerships";
import { creativeTestingForAutoDealerships } from "./creative-testing-for-auto-dealerships";
// BATCH-ORGANIC-MATRIX-IMPORTS-END

export const bestForPages: Record<string, BestForPageContent> = {
  "real-estate-teams": realEstateTeams,
  "isa-replacement": isaReplacement,
  "real-estate-franchises": realEstateFranchises,
  "regional-brokerage-networks": regionalBrokerageNetworks,
  "pe-backed-platforms": peBackedPlatforms,
  "commercial-real-estate": commercialRealEstate,
  "real-estate-investors": realEstateInvestors,
  "ai-real-estate-wholesalers": aiRealEstateWholesalers,
  "ai-real-estate-investors": aiRealEstateInvestors,
  "ai-home-builders": aiHomeBuilders,
  "ai-title-companies": aiTitleCompanies,
  "ai-real-estate-agents": aiRealEstateAgents,
  "insurance-agencies": insuranceAgencies,
  "insurance-carriers": insuranceCarriers,
  "mortgage-brokers": mortgageBrokers,
  "financial-advisors": financialAdvisors,
  "wealth-management-firms": wealthManagementFirms,
  "property-managers": propertyManagers,
  "done-for-you-ai": doneForYouAi,
  "ai-lead-response": aiLeadResponse,
  "ai-voice-qualification": aiVoiceQualification,
  "ai-appointment-setting": aiAppointmentSetting,
  "custom-ai-development": customAiDevelopment,
  "ai-voice-receptionist": aiVoiceReceptionist,
  "ai-voice-receptionist-hvac": aiVoiceReceptionistHvac,
  "ai-voice-receptionist-plumbing": aiVoiceReceptionistPlumbing,
  "ai-voice-receptionist-real-estate": aiVoiceReceptionistRealEstate,
  "real-estate-wholesalers": realEstateWholesalers,
  "real-estate-coach": realEstateCoach,
  fintech: fintech,
  "conversion-rate-optimization": conversionRateOptimization,
  "ai-customer-engagement": aiCustomerEngagement,
  "ai-sales-agent": aiSalesAgent,
  "real-estate-brokerages": realEstateBrokerages,
  "facebook-ads-real-estate": facebookAdsRealEstate,
  "youtube-ads-real-estate": youtubeAdsRealEstate,
  "real-estate-team-leaders": realEstateTeamLeaders,
  "new-construction-builders": newConstructionBuilders,
  "property-manager-video-ads": propertyManagerVideoAds,
  "mortgage-broker-video-ads": mortgageBrokerVideoAds,
  "brokerage-recruiting-video-ads": brokerageRecruitingVideoAds,
  "new-construction-builder-video-ads": newConstructionBuilderVideoAds,
  "title-company-video-ads": titleCompanyVideoAds,
  "video-ads-for-realtors": videoAdsForRealtors,
  "video-ads-for-roofers": videoAdsForRoofers,
  "video-ads-for-hvac-owners": videoAdsForHvacOwners,
  "video-ads-for-chiropractors": videoAdsForChiropractors,
  "video-ads-for-law-firm-owners": videoAdsForLawFirmOwners,
  "video-ads-for-agency-owners": videoAdsForAgencyOwners,
  "video-ads-for-contractors": videoAdsForContractors,
  "video-ads-for-financial-advisors": videoAdsForFinancialAdvisors,
  "video-ads-for-solar-companies": videoAdsForSolarCompanies,
  "video-ads-for-pest-control": videoAdsForPestControl,
  "video-ads-for-electricians": videoAdsForElectricians,
  "video-ads-for-plumbing-owners": videoAdsForPlumbingOwners,
  "video-ads-for-dental-practices": videoAdsForDentalPractices,
  "video-ads-for-med-spas": videoAdsForMedSpas,
  "video-ads-for-insurance-agents": videoAdsForInsuranceAgents,
  "video-ads-for-auto-dealerships": videoAdsForAutoDealerships,
  "video-ads-for-senior-care": videoAdsForSeniorCare,

  // Geo: 15 state-level real estate video ad pages.
  // (51 metro `video-ads-for-realtors-[city]` entries removed — redirected to /pricing.)
  "real-estate-video-ads-texas": realEstateVideoAdsTexas,
  "real-estate-video-ads-florida": realEstateVideoAdsFlorida,
  "real-estate-video-ads-california": realEstateVideoAdsCalifornia,
  "real-estate-video-ads-arizona": realEstateVideoAdsArizona,
  "real-estate-video-ads-colorado": realEstateVideoAdsColorado,
  "real-estate-video-ads-north-carolina": realEstateVideoAdsNorthCarolina,
  "real-estate-video-ads-georgia": realEstateVideoAdsGeorgia,
  "real-estate-video-ads-tennessee": realEstateVideoAdsTennessee,
  "real-estate-video-ads-nevada": realEstateVideoAdsNevada,
  "real-estate-video-ads-washington": realEstateVideoAdsWashington,
  "real-estate-video-ads-oregon": realEstateVideoAdsOregon,
  "real-estate-video-ads-new-york": realEstateVideoAdsNewYork,
  "real-estate-video-ads-pennsylvania": realEstateVideoAdsPennsylvania,
  "real-estate-video-ads-ohio": realEstateVideoAdsOhio,
  "real-estate-video-ads-illinois": realEstateVideoAdsIllinois,
  // SEO-BOT-APPEND-REGISTER
  // BATCH-MATRIX-REGISTER-START
  "batch-video-ads-for-real-estate-teams": batchVideoAdsForRealEstateTeams,
  "cost-per-tested-ad-angle-for-real-estate-teams": costPerTestedAdAngleForRealEstateTeams,
  // SOCIAL-VERTICAL-MATRIX-REGISTER-START
  "done-for-you-social-for-service-business-owners": doneForYouSocialForServiceBusinessOwners,
  "social-volume-strategy-for-service-business-owners":
    socialVolumeStrategyForServiceBusinessOwners,
  // SOCIAL-VERTICAL-MATRIX-REGISTER-END
  // BATCH-MATRIX-REGISTER-END

  // BATCH-ORGANIC-MATRIX-REGISTER-START
  "batch-video-ads-for-dentists": batchVideoAdsForDentists,
  "batch-video-ads-for-auto-dealerships": batchVideoAdsForAutoDealerships,
  "creative-testing-for-auto-dealerships": creativeTestingForAutoDealerships,
// BATCH-ORGANIC-MATRIX-REGISTER-END
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

export type {
  BestForPageContent,
  WhyBestForReason,
  PainPoint,
  ComparisonRow,
  FAQItem,
} from "./types";
