export const HERO_PATTERNS = {
  AI_AGENTS_BUILT_FOR: {
    headline: "AI Agents Built for",
  },
  BEST_AI_FOR: {
    headline: "The Best AI for",
  },
  BEST_LEAD_RESPONSE_FOR: {
    headline: "The Best Lead Response for",
  },
  LOOKING_FOR_ALTERNATIVE: {
    headline: "Looking for a",
  },
} as const;

export function buildHeroWithPattern(
  pattern: keyof typeof HERO_PATTERNS,
  headlineAccent: string,
  badge: string,
  subheadline: string
) {
  return {
    badge,
    ...HERO_PATTERNS[pattern],
    headlineAccent,
    subheadline,
  };
}
