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
import { followUpBossUsers } from "./follow-up-boss-users";
import { conversionRateOptimization } from "./conversion-rate-optimization";
import { aiCustomerEngagement } from "./ai-customer-engagement";
import { aiSalesAgent } from "./ai-sales-agent";
import { realEstateBrokerages } from "./real-estate-brokerages";
import { facebookAdsRealEstate } from "./facebook-ads-real-estate";
import { youtubeAdsRealEstate } from "./youtube-ads-real-estate";
import { realEstateTeamLeaders } from "./real-estate-team-leaders";
import { kvcoreUsers } from "./kvcore-users";
import { sierraInteractiveUsers } from "./sierra-interactive-users";
import { cincUsers } from "./cinc-users";
import { realGeeksUsers } from "./real-geeks-users";
import { housecallProUsers } from "./housecall-pro-users";
import { fieldedgeUsers } from "./fieldedge-users";
import { workizUsers } from "./workiz-users";
import { gorilladeskUsers } from "./gorilladesk-users";
import { boomtownUsers } from "./boomtown-users";
import { chimeUsers } from "./chime-users";
import { salesforceUsers } from "./salesforce-users";
import { hubspotUsers } from "./hubspot-users";
import { pipedriveUsers } from "./pipedrive-users";
import { closeUsers } from "./close-users";
import { calendlyUsers } from "./calendly-users";
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
import { socialContentForContractors } from "./social-content-for-contractors";
import { socialContentForRealEstateTeams } from "./social-content-for-real-estate-teams";
import { socialContentForAgencies } from "./social-content-for-agencies";
import { socialContentForCoaches } from "./social-content-for-coaches";
import { socialContentForEcommerceBrands } from "./social-content-for-ecommerce-brands";
import { socialContentForSaasFounders } from "./social-content-for-saas-founders";
import { socialContentForLawFirms } from "./social-content-for-law-firms";
import { socialContentForDentists } from "./social-content-for-dentists";
import { socialContentForMedSpas } from "./social-content-for-med-spas";
import { socialContentForFinancialAdvisors } from "./social-content-for-financial-advisors";
import { socialContentForRestaurants } from "./social-content-for-restaurants";
import { socialContentForGymsFitness } from "./social-content-for-gyms-fitness";
import { socialContentForPersonalBrands } from "./social-content-for-personal-brands";
import { socialContentForCreators } from "./social-content-for-creators";
import { socialContentForConsultants } from "./social-content-for-consultants";
import { socialContentForMortgageBrokers } from "./social-content-for-mortgage-brokers";
import { socialContentForInsuranceAgents } from "./social-content-for-insurance-agents";

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
import { batchVideoAdsForCoaches } from "./batch-video-ads-for-coaches";
import { costPerTestedAdAngleForCoaches } from "./cost-per-tested-ad-angle-for-coaches";
import { batchVideoAdsForMediaBuyers } from "./batch-video-ads-for-media-buyers";
import { costPerTestedAdAngleForMediaBuyers } from "./cost-per-tested-ad-angle-for-media-buyers";
import { batchVideoAdsForCmos } from "./batch-video-ads-for-cmos";
import { costPerTestedAdAngleForCmos } from "./cost-per-tested-ad-angle-for-cmos";
import { batchVideoAdsForAgencyOwners } from "./batch-video-ads-for-agency-owners";
import { costPerTestedAdAngleForAgencyOwners } from "./cost-per-tested-ad-angle-for-agency-owners";
import { batchVideoAdsForServiceBusinessOwners } from "./batch-video-ads-for-service-business-owners";
import { costPerTestedAdAngleForServiceBusinessOwners } from "./cost-per-tested-ad-angle-for-service-business-owners";
import { batchVideoAdsForHvacCompanies } from "./batch-video-ads-for-hvac-companies";
import { costPerTestedAdAngleForHvacCompanies } from "./cost-per-tested-ad-angle-for-hvac-companies";
import { batchVideoAdsForPlumbingContractors } from "./batch-video-ads-for-plumbing-contractors";
import { costPerTestedAdAngleForPlumbingContractors } from "./cost-per-tested-ad-angle-for-plumbing-contractors";
import { batchVideoAdsForRoofingContractors } from "./batch-video-ads-for-roofing-contractors";
import { costPerTestedAdAngleForRoofingContractors } from "./cost-per-tested-ad-angle-for-roofing-contractors";
import { batchVideoAdsForRealEstateTeams } from "./batch-video-ads-for-real-estate-teams";
import { costPerTestedAdAngleForRealEstateTeams } from "./cost-per-tested-ad-angle-for-real-estate-teams";
import { batchVideoAdsForMortgageBrokers } from "./batch-video-ads-for-mortgage-brokers";
import { costPerTestedAdAngleForMortgageBrokers } from "./cost-per-tested-ad-angle-for-mortgage-brokers";
// SOCIAL-VERTICAL-MATRIX-IMPORTS-START
import { doneForYouSocialForCoaches } from "./done-for-you-social-for-coaches";
import { socialVolumeStrategyForCoaches } from "./social-volume-strategy-for-coaches";
import { doneForYouSocialForMediaBuyers } from "./done-for-you-social-for-media-buyers";
import { socialVolumeStrategyForMediaBuyers } from "./social-volume-strategy-for-media-buyers";
import { doneForYouSocialForCmos } from "./done-for-you-social-for-cmos";
import { socialVolumeStrategyForCmos } from "./social-volume-strategy-for-cmos";
import { doneForYouSocialForAgencyOwners } from "./done-for-you-social-for-agency-owners";
import { socialVolumeStrategyForAgencyOwners } from "./social-volume-strategy-for-agency-owners";
import { doneForYouSocialForServiceBusinessOwners } from "./done-for-you-social-for-service-business-owners";
import { socialVolumeStrategyForServiceBusinessOwners } from "./social-volume-strategy-for-service-business-owners";
import { doneForYouSocialForEcommerceBrands } from "./done-for-you-social-for-ecommerce-brands";
import { socialVolumeStrategyForEcommerceBrands } from "./social-volume-strategy-for-ecommerce-brands";
import { doneForYouSocialForSaasFounders } from "./done-for-you-social-for-saas-founders";
import { socialVolumeStrategyForSaasFounders } from "./social-volume-strategy-for-saas-founders";
import { doneForYouSocialForPersonalBrands } from "./done-for-you-social-for-personal-brands";
import { socialVolumeStrategyForPersonalBrands } from "./social-volume-strategy-for-personal-brands";
import { doneForYouSocialForCreators } from "./done-for-you-social-for-creators";
import { socialVolumeStrategyForCreators } from "./social-volume-strategy-for-creators";
import { doneForYouSocialForConsultants } from "./done-for-you-social-for-consultants";
import { socialVolumeStrategyForConsultants } from "./social-volume-strategy-for-consultants";
  // SOCIAL-VERTICAL-MATRIX-IMPORTS-END
  // BATCH-MATRIX-IMPORTS-END

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
  "follow-up-boss-users": followUpBossUsers,
  "conversion-rate-optimization": conversionRateOptimization,
  "ai-customer-engagement": aiCustomerEngagement,
  "ai-sales-agent": aiSalesAgent,
  "real-estate-brokerages": realEstateBrokerages,
  "facebook-ads-real-estate": facebookAdsRealEstate,
  "youtube-ads-real-estate": youtubeAdsRealEstate,
  "real-estate-team-leaders": realEstateTeamLeaders,
  "kvcore-users": kvcoreUsers,
  "sierra-interactive-users": sierraInteractiveUsers,
  "cinc-users": cincUsers,
  "real-geeks-users": realGeeksUsers,
  "housecall-pro-users": housecallProUsers,
  "fieldedge-users": fieldedgeUsers,
  "workiz-users": workizUsers,
  "gorilladesk-users": gorilladeskUsers,
  "boomtown-users": boomtownUsers,
  "chime-users": chimeUsers,
  "salesforce-users": salesforceUsers,
  "hubspot-users": hubspotUsers,
  "pipedrive-users": pipedriveUsers,
  "close-users": closeUsers,
  "calendly-users": calendlyUsers,
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
  "social-content-for-contractors": socialContentForContractors,
  "social-content-for-real-estate-teams": socialContentForRealEstateTeams,
  "social-content-for-agencies": socialContentForAgencies,
  "social-content-for-coaches": socialContentForCoaches,
  "social-content-for-ecommerce-brands": socialContentForEcommerceBrands,
  "social-content-for-saas-founders": socialContentForSaasFounders,
  "social-content-for-law-firms": socialContentForLawFirms,
  "social-content-for-dentists": socialContentForDentists,
  "social-content-for-med-spas": socialContentForMedSpas,
  "social-content-for-financial-advisors": socialContentForFinancialAdvisors,
  "social-content-for-restaurants": socialContentForRestaurants,
  "social-content-for-gyms-fitness": socialContentForGymsFitness,
  "social-content-for-personal-brands": socialContentForPersonalBrands,
  "social-content-for-consultants": socialContentForConsultants,
  "social-content-for-creators": socialContentForCreators,
  "social-content-for-mortgage-brokers": socialContentForMortgageBrokers,
  "social-content-for-insurance-agents": socialContentForInsuranceAgents,

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
  "batch-video-ads-for-coaches": batchVideoAdsForCoaches,
  "cost-per-tested-ad-angle-for-coaches": costPerTestedAdAngleForCoaches,
  "batch-video-ads-for-media-buyers": batchVideoAdsForMediaBuyers,
  "cost-per-tested-ad-angle-for-media-buyers": costPerTestedAdAngleForMediaBuyers,
  "batch-video-ads-for-cmos": batchVideoAdsForCmos,
  "cost-per-tested-ad-angle-for-cmos": costPerTestedAdAngleForCmos,
  "batch-video-ads-for-agency-owners": batchVideoAdsForAgencyOwners,
  "cost-per-tested-ad-angle-for-agency-owners": costPerTestedAdAngleForAgencyOwners,
  "batch-video-ads-for-service-business-owners": batchVideoAdsForServiceBusinessOwners,
  "cost-per-tested-ad-angle-for-service-business-owners": costPerTestedAdAngleForServiceBusinessOwners,
  "batch-video-ads-for-hvac-companies": batchVideoAdsForHvacCompanies,
  "cost-per-tested-ad-angle-for-hvac-companies": costPerTestedAdAngleForHvacCompanies,
  "batch-video-ads-for-plumbing-contractors": batchVideoAdsForPlumbingContractors,
  "cost-per-tested-ad-angle-for-plumbing-contractors": costPerTestedAdAngleForPlumbingContractors,
  "batch-video-ads-for-roofing-contractors": batchVideoAdsForRoofingContractors,
  "cost-per-tested-ad-angle-for-roofing-contractors": costPerTestedAdAngleForRoofingContractors,
  "batch-video-ads-for-real-estate-teams": batchVideoAdsForRealEstateTeams,
  "cost-per-tested-ad-angle-for-real-estate-teams": costPerTestedAdAngleForRealEstateTeams,
  "batch-video-ads-for-mortgage-brokers": batchVideoAdsForMortgageBrokers,
  "cost-per-tested-ad-angle-for-mortgage-brokers": costPerTestedAdAngleForMortgageBrokers,
  // SOCIAL-VERTICAL-MATRIX-REGISTER-START
  "done-for-you-social-for-coaches": doneForYouSocialForCoaches,
  "social-volume-strategy-for-coaches": socialVolumeStrategyForCoaches,
  "done-for-you-social-for-media-buyers": doneForYouSocialForMediaBuyers,
  "social-volume-strategy-for-media-buyers": socialVolumeStrategyForMediaBuyers,
  "done-for-you-social-for-cmos": doneForYouSocialForCmos,
  "social-volume-strategy-for-cmos": socialVolumeStrategyForCmos,
  "done-for-you-social-for-agency-owners": doneForYouSocialForAgencyOwners,
  "social-volume-strategy-for-agency-owners": socialVolumeStrategyForAgencyOwners,
  "done-for-you-social-for-service-business-owners": doneForYouSocialForServiceBusinessOwners,
  "social-volume-strategy-for-service-business-owners": socialVolumeStrategyForServiceBusinessOwners,
  "done-for-you-social-for-ecommerce-brands": doneForYouSocialForEcommerceBrands,
  "social-volume-strategy-for-ecommerce-brands": socialVolumeStrategyForEcommerceBrands,
  "done-for-you-social-for-saas-founders": doneForYouSocialForSaasFounders,
  "social-volume-strategy-for-saas-founders": socialVolumeStrategyForSaasFounders,
  "done-for-you-social-for-personal-brands": doneForYouSocialForPersonalBrands,
  "social-volume-strategy-for-personal-brands": socialVolumeStrategyForPersonalBrands,
  "done-for-you-social-for-creators": doneForYouSocialForCreators,
  "social-volume-strategy-for-creators": socialVolumeStrategyForCreators,
  "done-for-you-social-for-consultants": doneForYouSocialForConsultants,
  "social-volume-strategy-for-consultants": socialVolumeStrategyForConsultants,
  // SOCIAL-VERTICAL-MATRIX-REGISTER-END
  // BATCH-MATRIX-REGISTER-END

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
