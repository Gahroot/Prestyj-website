import type { BestForPageContent, ComparisonRow } from "@/lib/best-for/types";
import { buildHeroWithPattern } from "../constants/hero-patterns";
import { CTA_TEMPLATES } from "../constants/cta-snippets";
import type { IconName } from "../constants/icons";

const DEFAULT_COMPARISON_HEADERS = ["Feature", "Prestyj", "Doing It Yourself"];

const COMMON_COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: "Response Time",
    prestyj: "Under 60 seconds, 24/7",
    others: "Minutes to hours (when available)",
  },
  {
    feature: "Availability",
    prestyj: "24/7/365, never misses a lead",
    others: "Limited to your working hours",
  },
];

interface BestForFactoryInput {
  slug: string;
  niche: { name: string; shortName?: string; description: string };
  meta: { title: string; description: string; keywords: string[] };
  hero: {
    badge: string;
    headlineAccent: string;
    subheadline: string;
    pattern?: "AI_AGENTS_BUILT_FOR" | "BEST_AI_FOR" | "BEST_LEAD_RESPONSE_FOR";
  };
  whyBestFor: Array<{ icon: IconName; title: string; description: string }>;
  painPoints: BestForPageContent["painPoints"];
  comparison?: {
    headers?: string[];
    rows: ComparisonRow[];
    includeCommonRows?: boolean;
  };
  faq: BestForPageContent["faq"];
  cta?: Partial<BestForPageContent["cta"]>;
}

export function createBestForPage(
  input: BestForFactoryInput
): BestForPageContent {
  const heroPattern = input.hero.pattern || "AI_AGENTS_BUILT_FOR";
  const heroSection = buildHeroWithPattern(
    heroPattern,
    input.hero.headlineAccent,
    input.hero.badge,
    input.hero.subheadline
  );

  const comparisonSection = {
    headers: input.comparison?.headers || DEFAULT_COMPARISON_HEADERS,
    rows: input.comparison?.includeCommonRows
      ? [...COMMON_COMPARISON_ROWS, ...(input.comparison.rows || [])]
      : input.comparison?.rows || [],
  };

  const ctaSection = {
    ...CTA_TEMPLATES.STANDARD_DEMO,
    ...input.cta,
  };

  return {
    slug: input.slug,
    niche: input.niche,
    meta: input.meta,
    hero: heroSection,
    whyBestFor: input.whyBestFor,
    painPoints: input.painPoints,
    comparison: comparisonSection,
    faq: input.faq,
    cta: ctaSection,
  };
}
