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
import { lindy } from "./lindy";
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
import { cloudtalk } from "./cloudtalk";
import { answerConnect } from "./answer-connect";
import { voiceflow } from "./voiceflow";
import { myAiFrontDesk } from "./my-ai-front-desk";
import { blandAiAlt } from "./bland-ai-alt";
import { dialpad } from "./dialpad";
import { ringCentral } from "./ringcentral";
import { leadtruffle } from "./leadtruffle";
import { retellAi } from "./retell-ai";

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
  lindy,
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
  cloudtalk,
  "answer-connect": answerConnect,
  voiceflow,
  "my-ai-front-desk": myAiFrontDesk,
  "bland-ai-alt": blandAiAlt,
  dialpad,
  "ring-central": ringCentral,
  leadtruffle,
  "retell-ai": retellAi,
};

export function getAlternative(slug: string): AlternativePageContent | undefined {
  return alternatives[slug];
}

export function getAllAlternativeSlugs(): string[] {
  return Object.keys(alternatives);
}

export function getAlternativesByType(type: "direct-competitor" | "integration-partner"): AlternativePageContent[] {
  return Object.values(alternatives).filter((alt) => alt.type === type);
}

export type { AlternativePageContent, FeatureRow, WhySwitchReason } from "./types";
