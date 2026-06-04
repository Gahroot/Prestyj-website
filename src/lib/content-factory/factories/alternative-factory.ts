import type {
  AlternativePageContent,
  AlternativeType,
  FeatureRow,
  PricingInfo,
} from "@/lib/alternatives/types";
import type { ProprietaryDataBlock } from "@/lib/proprietary-data/types";
import { STANDARD_INDUSTRY_STATS, REACTIVATION_STATS } from "../constants/industry-stats";
import { CTA_TEMPLATES } from "../constants/cta-snippets";
import { PRESTYJ_STANDARD_PRICING } from "../constants/pricing-features";
import type { IconName } from "../constants/icons";

interface AlternativeFactoryInput {
  slug: string;
  type: AlternativeType;
  competitor: {
    name: string;
    shortName?: string;
    pricing?: string;
    website?: string;
    description?: string;
  };
  meta: { title: string; description: string; keywords: string[] };
  hero: { badge: string; subheadline: string };
  industryStats?: "standard" | "reactivation" | Array<{ stat: string; description: string }>;
  comparison: {
    features: FeatureRow[];
    competitorPricing: PricingInfo;
    prestyjPricingOverrides?: Partial<PricingInfo>;
  };
  whySwitch: Array<{ icon: IconName; title: string; description: string }>;
  proprietaryData?: ProprietaryDataBlock;
  whenCompetitorFits: string[];
  whenPrestyjFits: string[];
  relatedResources: Array<{
    href: string;
    title: string;
    description: string;
  }>;
  cta?: Partial<{
    headline: string;
    subheadline: string;
    buttonText: string;
    buttonHref: string;
    footnote: string;
  }>;
}

export function createAlternativePage(input: AlternativeFactoryInput): AlternativePageContent {
  // Competitor name on line 1, "vs Prestyj" tagline (colored) on line 2.
  // Sidesteps a/an article agreement and singular/plural mismatch problems
  // entirely, and keeps the competitor name prominent in the H1 for SEO.
  const heroSection = {
    badge: input.hero.badge,
    headline: input.competitor.name,
    headlineAccent: "vs Prestyj",
    subheadline: input.hero.subheadline,
  };

  let statsSection: AlternativePageContent["industryStats"] = [];
  if (input.industryStats === "standard") {
    statsSection = [...STANDARD_INDUSTRY_STATS];
  } else if (input.industryStats === "reactivation") {
    statsSection = [...REACTIVATION_STATS];
  } else if (Array.isArray(input.industryStats)) {
    statsSection = input.industryStats;
  }

  const prestyjPricing: PricingInfo = {
    ...PRESTYJ_STANDARD_PRICING,
    ...input.comparison.prestyjPricingOverrides,
  };

  const ctaSection = {
    ...CTA_TEMPLATES.STANDARD_DEMO,
    ...input.cta,
  };

  const proprietaryDataSection = input.proprietaryData
    ? { proprietaryData: input.proprietaryData }
    : {};

  return {
    slug: input.slug,
    type: input.type,
    competitor: input.competitor,
    meta: input.meta,
    hero: heroSection,
    industryStats: statsSection,
    comparison: {
      features: input.comparison.features,
      competitorPricing: input.comparison.competitorPricing,
      prestyjPricing,
    },
    whySwitch: input.whySwitch,
    ...proprietaryDataSection,
    whenCompetitorFits: input.whenCompetitorFits,
    whenPrestyjFits: input.whenPrestyjFits,
    relatedResources: input.relatedResources,
    cta: ctaSection,
  };
}
