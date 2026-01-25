import type { AlternativePageContent } from "./types";
import { ylopo } from "./ylopo";
import { humanIsa } from "./human-isa";
import { structurely } from "./structurely";
import { cinc } from "./cinc";
import { followUpBoss } from "./follow-up-boss";
import { realGeeks } from "./real-geeks";

export const alternatives: Record<string, AlternativePageContent> = {
  ylopo,
  "human-isa": humanIsa,
  structurely,
  cinc,
  "follow-up-boss": followUpBoss,
  "real-geeks": realGeeks,
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
