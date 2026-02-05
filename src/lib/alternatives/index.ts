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
