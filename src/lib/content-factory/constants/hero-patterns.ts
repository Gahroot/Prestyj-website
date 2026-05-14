// Each headline is a full-sentence value prop. The `headlineAccent` (rendered
// below on a new line, in the primary color) names the niche or competitor and
// completes the thought. Example render:
//   AI agents for marketing & sales — built for
//   Real Estate Teams
export const HERO_PATTERNS = {
  AI_AGENTS_BUILT_FOR: {
    headline: "AI agents for marketing & sales — built for",
  },
  BEST_AI_FOR: {
    headline: "The AI agent that responds, qualifies, and books —",
  },
  BEST_LEAD_RESPONSE_FOR: {
    headline: "We respond to every lead in under 60 seconds —",
  },
  LOOKING_FOR_ALTERNATIVE: {
    headline: "The AI-agent alternative to",
  },
} as const;

export function buildHeroWithPattern(
  pattern: keyof typeof HERO_PATTERNS,
  headlineAccent: string,
  badge: string,
  subheadline: string,
) {
  return {
    badge,
    ...HERO_PATTERNS[pattern],
    headlineAccent,
    subheadline,
  };
}
