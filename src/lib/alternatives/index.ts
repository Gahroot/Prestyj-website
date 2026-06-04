import type { AlternativePageContent } from "./types";
import { ylopo } from "./ylopo";
import { humanIsa } from "./human-isa";
import { structurely } from "./structurely";
import { cinc } from "./cinc";
import { followUpBoss } from "./follow-up-boss";
import { realGeeks } from "./real-geeks";
import { conversica } from "./conversica";
import { internalIsa } from "./internal-isa";
import { drift } from "./drift";
import { retell } from "./retell";
import { vapi } from "./vapi";
import { boomtown } from "./boomtown";
import { blandAi } from "./bland-ai";
import { lofty } from "./lofty";
import { kvcore } from "./kvcore";
import { sierraInteractive } from "./sierra-interactive";
import { airDotAi } from "./air-dot-ai";
import { synthflow } from "./synthflow";
import { homebot } from "./homebot";
import { betterbot } from "./betterbot";
import { eliseai } from "./eliseai";
import { smartAlto } from "./smart-alto";
import { isaService } from "./isa-service";
import { smithAi } from "./smith-ai";
import { rubyReceptionist } from "./ruby-receptionist";
import { goodcall } from "./goodcall";
import { polyAi } from "./poly-ai";
import { answerConnect } from "./answer-connect";
import { myAiFrontDesk } from "./my-ai-front-desk";
import { blandAiAlt } from "./bland-ai-alt";
import { leadtruffle } from "./leadtruffle";
import { retellAi } from "./retell-ai";
import { creatify } from "./creatify";
import { arcads } from "./arcads";
import { resimpli } from "./resimpli";
import { alannaAi } from "./alanna-ai";
import { socialMediaAgencies } from "./social-media-agencies";

// BATCH-MATRIX-IMPORTS-START
import { realEstateTeamsVideoProductionAlternative } from "./real-estate-teams-video-production-alternative";
// SOCIAL-VERTICAL-MATRIX-IMPORTS-START
import { serviceBusinessOwnersSocialMediaAgencyAlternative } from "./service-business-owners-social-media-agency-alternative";
// SOCIAL-VERTICAL-MATRIX-IMPORTS-END
// BATCH-MATRIX-IMPORTS-END

export const alternatives: Record<string, AlternativePageContent> = {
  ylopo,
  "human-isa": humanIsa,
  structurely,
  cinc,
  "follow-up-boss": followUpBoss,
  "real-geeks": realGeeks,
  conversica,
  "internal-isa": internalIsa,
  drift,
  retell,
  vapi,
  boomtown,
  "bland-ai": blandAi,
  lofty,
  kvcore,
  "sierra-interactive": sierraInteractive,
  "air-dot-ai": airDotAi,
  synthflow,
  homebot,
  betterbot,
  eliseai,
  "smart-alto": smartAlto,
  "isa-service": isaService,
  "smith-ai": smithAi,
  "ruby-receptionist": rubyReceptionist,
  goodcall,
  "poly-ai": polyAi,
  "answer-connect": answerConnect,
  "my-ai-front-desk": myAiFrontDesk,
  "bland-ai-alt": blandAiAlt,
  leadtruffle,
  "retell-ai": retellAi,
  creatify,
  arcads,
  resimpli,
  "alanna-ai": alannaAi,
  "social-media-agencies": socialMediaAgencies,
  // BATCH-MATRIX-REGISTER-START
  "real-estate-teams-video-production-alternative": realEstateTeamsVideoProductionAlternative,
  // SOCIAL-VERTICAL-MATRIX-REGISTER-START
  "service-business-owners-social-media-agency-alternative":
    serviceBusinessOwnersSocialMediaAgencyAlternative,
  // SOCIAL-VERTICAL-MATRIX-REGISTER-END
  // BATCH-MATRIX-REGISTER-END
};

export function getAlternative(slug: string): AlternativePageContent | undefined {
  return alternatives[slug];
}

export function getAllAlternativeSlugs(): string[] {
  return Object.keys(alternatives);
}

export function getAlternativesByType(
  type: "direct-competitor" | "integration-partner",
): AlternativePageContent[] {
  return Object.values(alternatives).filter((alt) => alt.type === type);
}

export type { AlternativePageContent, FeatureRow, WhySwitchReason } from "./types";
