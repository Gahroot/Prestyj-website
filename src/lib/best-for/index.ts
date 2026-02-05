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
import { autoDealerships } from "./auto-dealerships";
import { realEstateWholesalers } from "./real-estate-wholesalers";
import { contractors } from "./contractors";
import { realEstateCoach } from "./real-estate-coach";
import { fintech } from "./fintech";

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
  "auto-dealerships": autoDealerships,
  "real-estate-wholesalers": realEstateWholesalers,
  "contractors": contractors,
  "real-estate-coach": realEstateCoach,
  "fintech": fintech,
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
