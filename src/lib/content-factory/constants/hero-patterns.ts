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
  // Used by the alternative-page factory. The factory overrides `headline`
  // with the competitor name (placed on the first line) and `headlineAccent`
  // becomes the colored "vs Prestyj" tagline below it. This avoids the
  // article-agreement (a/an) and plural-mismatch problems that any
  // "Looking for a {competitor}" / "alternative to {competitor}" template
  // hits when {competitor} is plural (e.g. "Social Media Agencies") or
  // starts with a vowel (e.g. "Internal ISA").
  COMPETITOR_VS_PRESTYJ: {
    headline: "",
  },
} as const;

export function buildHeroWithPattern(
  pattern: keyof typeof HERO_PATTERNS,
  headlineAccent: string,
  badge: string,
  subheadline: string,
): {
  badge: string;
  headline: string;
  headlineAccent: string;
  subheadline: string;
} {
  return {
    badge,
    ...HERO_PATTERNS[pattern],
    headlineAccent,
    subheadline,
  };
}
