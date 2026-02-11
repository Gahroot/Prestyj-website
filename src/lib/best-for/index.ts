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
