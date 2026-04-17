import type { BestForPageContent } from "./types";
import { soloAgents } from "./solo-agents";
import { realEstateTeams } from "./real-estate-teams";
import { isaReplacement } from "./isa-replacement";
import { newAgents } from "./new-agents";
import { realEstateFranchises } from "./real-estate-franchises";
import { regionalBrokerageNetworks } from "./regional-brokerage-networks";
import { peBackedPlatforms } from "./pe-backed-platforms";
import { commercialRealEstate } from "./commercial-real-estate";
import { realEstateInvestors } from "./real-estate-investors";
import { insuranceAgencies } from "./insurance-agencies";
import { hvac } from "./hvac";
import { mortgageBrokers } from "./mortgage-brokers";
import { roofing } from "./roofing";
import { propertyManagers } from "./property-managers";
import { solar } from "./solar";
import { dental } from "./dental";
import { doneForYouAi } from "./done-for-you-ai";
import { financialAdvisors } from "./financial-advisors";
import { wealthManagementFirms } from "./wealth-management-firms";
import { insuranceCarriers } from "./insurance-carriers";
import { aiLeadResponse } from "./ai-lead-response";
import { aiVoiceQualification } from "./ai-voice-qualification";
import { aiAppointmentSetting } from "./ai-appointment-setting";
import { customAiDevelopment } from "./custom-ai-development";
import { aiVoiceReceptionist } from "./ai-voice-receptionist";
import { aiVoiceReceptionistDental } from "./ai-voice-receptionist-dental";
import { aiVoiceReceptionistLegal } from "./ai-voice-receptionist-legal";
import { aiVoiceReceptionistMedical } from "./ai-voice-receptionist-medical";
import { aiVoiceReceptionistInsurance } from "./ai-voice-receptionist-insurance";
import { lawFirms } from "./law-firms";
import { plasticSurgery } from "./plastic-surgery";
import { plumbing } from "./plumbing";
import { autoDealerships } from "./auto-dealerships";
import { realEstateWholesalers } from "./real-estate-wholesalers";
import { contractors } from "./contractors";
import { realEstateCoach } from "./real-estate-coach";
import { fintech } from "./fintech";
import { accountingFirms } from "./accounting-firms";
import { veterinaryClinics } from "./veterinary-clinics";
import { restaurants } from "./restaurants";
import { salonsAndSpas } from "./salons-and-spas";
import { gymsAndFitnessCenters } from "./gyms-and-fitness-centers";
import { retailStores } from "./retail-stores";
import { mentalHealthClinics } from "./mental-health-clinics";
import { electricians } from "./electricians";
import { autoRepairShops } from "./auto-repair-shops";
import { pestControl } from "./pest-control";
import { seniorCare } from "./senior-care";
import { windowAndDoorManufacturers } from "./window-and-door-manufacturers";
import { landscapingLawnCare } from "./landscaping-lawn-care";
import { paintingContractors } from "./painting-contractors";
import { movers } from "./movers";
import { sidingContractors } from "./siding-contractors";
import { garageDoor } from "./garage-door";
import { flooringContractors } from "./flooring-contractors";
import { servicetitanUsers } from "./servicetitan-users";
import { jobberUsers } from "./jobber-users";
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

// Geo: 50 metro-specific and 15 state-specific real estate video ad pages
import { videoAdsForRealtorsAustin } from "./video-ads-for-realtors-austin";
import { videoAdsForRealtorsDallasFortWorth } from "./video-ads-for-realtors-dallas-fort-worth";
import { videoAdsForRealtorsHouston } from "./video-ads-for-realtors-houston";
import { videoAdsForRealtorsSanAntonio } from "./video-ads-for-realtors-san-antonio";
import { videoAdsForRealtorsPhoenix } from "./video-ads-for-realtors-phoenix";
import { videoAdsForRealtorsDenver } from "./video-ads-for-realtors-denver";
import { videoAdsForRealtorsAtlanta } from "./video-ads-for-realtors-atlanta";
import { videoAdsForRealtorsTampa } from "./video-ads-for-realtors-tampa";
import { videoAdsForRealtorsNashville } from "./video-ads-for-realtors-nashville";
import { videoAdsForRealtorsCharlotte } from "./video-ads-for-realtors-charlotte";
import { videoAdsForRealtorsRaleigh } from "./video-ads-for-realtors-raleigh";
import { videoAdsForRealtorsOrlando } from "./video-ads-for-realtors-orlando";
import { videoAdsForRealtorsJacksonville } from "./video-ads-for-realtors-jacksonville";
import { videoAdsForRealtorsMiami } from "./video-ads-for-realtors-miami";
import { videoAdsForRealtorsNewYork } from "./video-ads-for-realtors-new-york";
import { videoAdsForRealtorsLosAngeles } from "./video-ads-for-realtors-los-angeles";
import { videoAdsForRealtorsSanDiego } from "./video-ads-for-realtors-san-diego";
import { videoAdsForRealtorsSeattle } from "./video-ads-for-realtors-seattle";
import { videoAdsForRealtorsPortland } from "./video-ads-for-realtors-portland";
import { videoAdsForRealtorsBoston } from "./video-ads-for-realtors-boston";
import { videoAdsForRealtorsChicago } from "./video-ads-for-realtors-chicago";
import { videoAdsForRealtorsMinneapolis } from "./video-ads-for-realtors-minneapolis";
import { videoAdsForRealtorsColumbus } from "./video-ads-for-realtors-columbus";
import { videoAdsForRealtorsIndianapolis } from "./video-ads-for-realtors-indianapolis";
import { videoAdsForRealtorsKansasCity } from "./video-ads-for-realtors-kansas-city";
import { videoAdsForRealtorsStLouis } from "./video-ads-for-realtors-st-louis";
import { videoAdsForRealtorsLasVegas } from "./video-ads-for-realtors-las-vegas";
import { videoAdsForRealtorsSaltLakeCity } from "./video-ads-for-realtors-salt-lake-city";
import { videoAdsForRealtorsSacramento } from "./video-ads-for-realtors-sacramento";
import { videoAdsForRealtorsOklahomaCity } from "./video-ads-for-realtors-oklahoma-city";
import { videoAdsForRealtorsWashingtonDc } from "./video-ads-for-realtors-washington-dc";
import { videoAdsForRealtorsBaltimore } from "./video-ads-for-realtors-baltimore";
import { videoAdsForRealtorsPhiladelphia } from "./video-ads-for-realtors-philadelphia";
import { videoAdsForRealtorsPittsburgh } from "./video-ads-for-realtors-pittsburgh";
import { videoAdsForRealtorsCleveland } from "./video-ads-for-realtors-cleveland";
import { videoAdsForRealtorsDetroit } from "./video-ads-for-realtors-detroit";
import { videoAdsForRealtorsMilwaukee } from "./video-ads-for-realtors-milwaukee";
import { videoAdsForRealtorsNewOrleans } from "./video-ads-for-realtors-new-orleans";
import { videoAdsForRealtorsMemphis } from "./video-ads-for-realtors-memphis";
import { videoAdsForRealtorsBirmingham } from "./video-ads-for-realtors-birmingham";
import { videoAdsForRealtorsLouisville } from "./video-ads-for-realtors-louisville";
import { videoAdsForRealtorsRichmond } from "./video-ads-for-realtors-richmond";
import { videoAdsForRealtorsHartford } from "./video-ads-for-realtors-hartford";
import { videoAdsForRealtorsBuffalo } from "./video-ads-for-realtors-buffalo";
import { videoAdsForRealtorsRochester } from "./video-ads-for-realtors-rochester";
import { videoAdsForRealtorsAlbuquerque } from "./video-ads-for-realtors-albuquerque";
import { videoAdsForRealtorsTucson } from "./video-ads-for-realtors-tucson";
import { videoAdsForRealtorsBoise } from "./video-ads-for-realtors-boise";
import { videoAdsForRealtorsFortWorth } from "./video-ads-for-realtors-fort-worth";
import { videoAdsForRealtorsSanJose } from "./video-ads-for-realtors-san-jose";
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
import { videoAdsForRealtorsFresno } from "./video-ads-for-realtors-fresno";

export const bestForPages: Record<string, BestForPageContent> = {
  "solo-agents": soloAgents,
  "real-estate-teams": realEstateTeams,
  "isa-replacement": isaReplacement,
  "new-agents": newAgents,
  "real-estate-franchises": realEstateFranchises,
  "regional-brokerage-networks": regionalBrokerageNetworks,
  "pe-backed-platforms": peBackedPlatforms,
  "commercial-real-estate": commercialRealEstate,
  "real-estate-investors": realEstateInvestors,
  "insurance-agencies": insuranceAgencies,
  "insurance-carriers": insuranceCarriers,
  "hvac": hvac,
  "mortgage-brokers": mortgageBrokers,
  "financial-advisors": financialAdvisors,
  "wealth-management-firms": wealthManagementFirms,
  "roofing": roofing,
  "property-managers": propertyManagers,
  "solar": solar,
  "dental": dental,
  "done-for-you-ai": doneForYouAi,
  "ai-lead-response": aiLeadResponse,
  "ai-voice-qualification": aiVoiceQualification,
  "ai-appointment-setting": aiAppointmentSetting,
  "custom-ai-development": customAiDevelopment,
  "ai-voice-receptionist": aiVoiceReceptionist,
  "ai-voice-receptionist-dental": aiVoiceReceptionistDental,
  "ai-voice-receptionist-legal": aiVoiceReceptionistLegal,
  "ai-voice-receptionist-medical": aiVoiceReceptionistMedical,
  "ai-voice-receptionist-insurance": aiVoiceReceptionistInsurance,
  "law-firms": lawFirms,
  "plastic-surgery": plasticSurgery,
  "plumbing": plumbing,
  "auto-dealerships": autoDealerships,
  "real-estate-wholesalers": realEstateWholesalers,
  "contractors": contractors,
  "real-estate-coach": realEstateCoach,
  "fintech": fintech,
  "accounting-firms": accountingFirms,
  "veterinary-clinics": veterinaryClinics,
  "restaurants": restaurants,
  "salons-and-spas": salonsAndSpas,
  "gyms-and-fitness-centers": gymsAndFitnessCenters,
  "retail-stores": retailStores,
  "mental-health-clinics": mentalHealthClinics,
  "electricians": electricians,
  "auto-repair-shops": autoRepairShops,
  "pest-control": pestControl,
  "senior-care": seniorCare,
  "window-and-door-manufacturers": windowAndDoorManufacturers,
  "landscaping-lawn-care": landscapingLawnCare,
  "painting-contractors": paintingContractors,
  "movers": movers,
  "siding-contractors": sidingContractors,
  "garage-door": garageDoor,
  "flooring-contractors": flooringContractors,
  "servicetitan-users": servicetitanUsers,
  "jobber-users": jobberUsers,
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

  // Geo: 50 metro-specific real estate video ad pages
  "video-ads-for-realtors-austin": videoAdsForRealtorsAustin,
  "video-ads-for-realtors-dallas-fort-worth": videoAdsForRealtorsDallasFortWorth,
  "video-ads-for-realtors-houston": videoAdsForRealtorsHouston,
  "video-ads-for-realtors-san-antonio": videoAdsForRealtorsSanAntonio,
  "video-ads-for-realtors-phoenix": videoAdsForRealtorsPhoenix,
  "video-ads-for-realtors-denver": videoAdsForRealtorsDenver,
  "video-ads-for-realtors-atlanta": videoAdsForRealtorsAtlanta,
  "video-ads-for-realtors-tampa": videoAdsForRealtorsTampa,
  "video-ads-for-realtors-nashville": videoAdsForRealtorsNashville,
  "video-ads-for-realtors-charlotte": videoAdsForRealtorsCharlotte,
  "video-ads-for-realtors-raleigh": videoAdsForRealtorsRaleigh,
  "video-ads-for-realtors-orlando": videoAdsForRealtorsOrlando,
  "video-ads-for-realtors-jacksonville": videoAdsForRealtorsJacksonville,
  "video-ads-for-realtors-miami": videoAdsForRealtorsMiami,
  "video-ads-for-realtors-new-york": videoAdsForRealtorsNewYork,
  "video-ads-for-realtors-los-angeles": videoAdsForRealtorsLosAngeles,
  "video-ads-for-realtors-san-diego": videoAdsForRealtorsSanDiego,
  "video-ads-for-realtors-seattle": videoAdsForRealtorsSeattle,
  "video-ads-for-realtors-portland": videoAdsForRealtorsPortland,
  "video-ads-for-realtors-boston": videoAdsForRealtorsBoston,
  "video-ads-for-realtors-chicago": videoAdsForRealtorsChicago,
  "video-ads-for-realtors-minneapolis": videoAdsForRealtorsMinneapolis,
  "video-ads-for-realtors-columbus": videoAdsForRealtorsColumbus,
  "video-ads-for-realtors-indianapolis": videoAdsForRealtorsIndianapolis,
  "video-ads-for-realtors-kansas-city": videoAdsForRealtorsKansasCity,
  "video-ads-for-realtors-st-louis": videoAdsForRealtorsStLouis,
  "video-ads-for-realtors-las-vegas": videoAdsForRealtorsLasVegas,
  "video-ads-for-realtors-salt-lake-city": videoAdsForRealtorsSaltLakeCity,
  "video-ads-for-realtors-sacramento": videoAdsForRealtorsSacramento,
  "video-ads-for-realtors-oklahoma-city": videoAdsForRealtorsOklahomaCity,
  "video-ads-for-realtors-washington-dc": videoAdsForRealtorsWashingtonDc,
  "video-ads-for-realtors-baltimore": videoAdsForRealtorsBaltimore,
  "video-ads-for-realtors-philadelphia": videoAdsForRealtorsPhiladelphia,
  "video-ads-for-realtors-pittsburgh": videoAdsForRealtorsPittsburgh,
  "video-ads-for-realtors-cleveland": videoAdsForRealtorsCleveland,
  "video-ads-for-realtors-detroit": videoAdsForRealtorsDetroit,
  "video-ads-for-realtors-milwaukee": videoAdsForRealtorsMilwaukee,
  "video-ads-for-realtors-new-orleans": videoAdsForRealtorsNewOrleans,
  "video-ads-for-realtors-memphis": videoAdsForRealtorsMemphis,
  "video-ads-for-realtors-birmingham": videoAdsForRealtorsBirmingham,
  "video-ads-for-realtors-louisville": videoAdsForRealtorsLouisville,
  "video-ads-for-realtors-richmond": videoAdsForRealtorsRichmond,
  "video-ads-for-realtors-hartford": videoAdsForRealtorsHartford,
  "video-ads-for-realtors-buffalo": videoAdsForRealtorsBuffalo,
  "video-ads-for-realtors-rochester": videoAdsForRealtorsRochester,
  "video-ads-for-realtors-albuquerque": videoAdsForRealtorsAlbuquerque,
  "video-ads-for-realtors-tucson": videoAdsForRealtorsTucson,
  "video-ads-for-realtors-boise": videoAdsForRealtorsBoise,
  "video-ads-for-realtors-fort-worth": videoAdsForRealtorsFortWorth,
  "video-ads-for-realtors-san-jose": videoAdsForRealtorsSanJose,

  // Geo: 15 state-level real estate video ad pages
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
  "video-ads-for-realtors-fresno": videoAdsForRealtorsFresno,
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
