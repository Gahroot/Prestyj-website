import { z } from "zod";
import type { BestForPageContent } from "../../../src/lib/best-for/types";
import type {
  CompareMetadata,
  ComparePageData,
} from "../../../src/lib/compare/types";
import {
  BacklogItemSchema,
  BacklogSchema,
  DailyMetricsSchema,
  ShippedItemSchema,
  ShippedManifestSchema,
} from "../types";

// -----------------------------------------------------------------------------
// Best-for page content (mirrors src/lib/best-for/types.ts)
// -----------------------------------------------------------------------------

export const WhyBestForReasonSchema = z.object({
  icon: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
});

export const PainPointSchema = z.object({
  problem: z.string().min(1),
  solution: z.string().min(1),
});

export const ComparisonRowSchema = z.object({
  feature: z.string().min(1),
  prestyj: z.string().min(1),
  others: z.string().min(1),
  note: z.string().optional(),
});

export const FAQItemSchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
});

export const BestForPageContentSchema = z.object({
  slug: z.string().min(1),
  niche: z.object({
    name: z.string().min(1),
    shortName: z.string().optional(),
    description: z.string().min(1),
  }),
  meta: z.object({
    title: z.string().min(1).max(70),
    description: z.string().min(1).max(160),
    keywords: z.array(z.string().min(1)).min(1),
  }),
  hero: z.object({
    badge: z.string().min(1),
    headline: z.string().min(1),
    headlineAccent: z.string().min(1),
    subheadline: z.string().min(1),
  }),
  whyBestFor: z.array(WhyBestForReasonSchema).min(1),
  painPoints: z.array(PainPointSchema).min(1),
  comparison: z.object({
    headers: z.array(z.string().min(1)).min(2),
    rows: z.array(ComparisonRowSchema).min(1),
  }),
  faq: z.array(FAQItemSchema).min(1),
  cta: z.object({
    headline: z.string().min(1),
    subheadline: z.string().min(1),
    buttonText: z.string().min(1),
    buttonHref: z.string().min(1),
    footnote: z.string().optional(),
  }),
}) satisfies z.ZodType<BestForPageContent>;

export type BestForPageContentShape = z.infer<typeof BestForPageContentSchema>;

// -----------------------------------------------------------------------------
// Compare page data (mirrors src/lib/compare/types.ts)
// NOTE: `SwitchReason.icon` is a LucideIcon in the TS type. For LLM output we
// accept a string icon name and resolve it later in task code.
// -----------------------------------------------------------------------------

export const KeyStatSchema = z.object({
  value: z.string().min(1),
  label: z.string().min(1),
});

export const StatItemSchema = z.object({
  value: z.string().min(1),
  label: z.string().min(1),
  description: z.string().optional(),
});

export const HeroSectionSchema = z.object({
  badge: z.string().min(1),
  title: z.string().min(1),
  titleAccent: z.string().min(1),
  subtitle: z.string().min(1),
  description: z.string().min(1),
  keyStats: z.array(KeyStatSchema).optional(),
});

export const PricingFeatureSchema = z.object({
  text: z.string().min(1),
  included: z.boolean(),
  note: z.string().optional(),
});

export const PricingCardSchema = z.object({
  name: z.string().min(1),
  price: z.string().min(1),
  priceSubtext: z.string().optional(),
  features: z.array(PricingFeatureSchema).min(1),
  highlight: z.boolean().optional(),
});

export const PricingSectionSchema = z.object({
  prestyj: PricingCardSchema,
  competitor: PricingCardSchema,
});

export const FeatureComparisonSchema = z.object({
  feature: z.string().min(1),
  prestyj: z.union([z.boolean(), z.string().min(1)]),
  competitor: z.union([z.boolean(), z.string().min(1)]),
  note: z.string().optional(),
});

export const SwitchReasonLLMSchema = z.object({
  icon: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
});

export const WhySwitchSectionSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  reasons: z.array(SwitchReasonLLMSchema).min(1),
});

export const RelatedResourceSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  href: z.string().min(1),
  linkText: z.string().min(1),
});

export const CTASectionSchema = z.object({
  title: z.string().min(1),
  titleAccent: z.string().optional(),
  description: z.string().min(1),
  buttonText: z.string().min(1),
  buttonHref: z.string().min(1),
  disclaimer: z.string().optional(),
});

export const SpecialSectionSchema = z.object({
  type: z.enum(["cost-calculator", "security-warning", "tcpa-warning"]),
  position: z.enum([
    "after-stats",
    "after-pricing",
    "after-features",
    "after-why-switch",
  ]),
  data: z.record(z.string(), z.unknown()).optional(),
});

export const ComparePageDataSchema = z.object({
  slug: z.string().min(1),
  competitorName: z.string().min(1),
  hero: HeroSectionSchema,
  stats: z.array(StatItemSchema).optional(),
  pricing: PricingSectionSchema,
  features: z.array(FeatureComparisonSchema).min(1),
  whySwitch: WhySwitchSectionSchema,
  relatedResources: z.array(RelatedResourceSchema).optional(),
  cta: CTASectionSchema,
  specialSections: z.array(SpecialSectionSchema).optional(),
});

export type ComparePageDataShape = z.infer<typeof ComparePageDataSchema>;
// Runtime-asserted alignment: ComparePageDataShape is what LLMs produce; the
// task layer swaps SwitchReason.icon (string) into a LucideIcon before export.
const _comparePageDataAlignment: ComparePageData extends {
  slug: string;
  competitorName: string;
}
  ? true
  : false = true;
void _comparePageDataAlignment;

export const CompareMetadataSchema = z.object({
  slug: z.string().min(1),
  competitorName: z.string().min(1),
  title: z.string().min(1).max(70),
  description: z.string().min(1).max(160),
  keywords: z.array(z.string().min(1)).min(1),
}) satisfies z.ZodType<CompareMetadata>;

export type CompareMetadataShape = z.infer<typeof CompareMetadataSchema>;

// -----------------------------------------------------------------------------
// Blog frontmatter (based on content/blog/*.mdx)
// -----------------------------------------------------------------------------

export const BlogFrontmatterSchema = z.object({
  title: z.string().min(1).max(120),
  description: z.string().min(1).max(200),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "date must be YYYY-MM-DD"),
  author: z.string().min(1).default("Prestyj Team"),
  keywords: z.array(z.string().min(1)).min(1),
  image: z.string().min(1).optional(),
});

export type BlogFrontmatterShape = z.infer<typeof BlogFrontmatterSchema>;

// -----------------------------------------------------------------------------
// Title rewrite / social / competitor audit / research brief
// -----------------------------------------------------------------------------

export const TitleRewriteOutputSchema = z.object({
  newTitle: z.string().min(1).max(70),
  newDescription: z.string().min(1).max(160),
  reasoning: z.string().min(1),
});

export type TitleRewriteOutput = z.infer<typeof TitleRewriteOutputSchema>;

export const SocialOutputSchema = z.object({
  linkedin: z.string().min(1).max(500),
  x: z.tuple([z.string().min(1).max(280), z.string().min(1).max(280)]),
  reddit: z.string().min(1).max(500),
});

export type SocialOutput = z.infer<typeof SocialOutputSchema>;

export const CompetitorAuditOutputSchema = z.object({
  pricing: z.string().min(1),
  positioning: z.string().min(1),
  recentFeatures: z.array(z.string().min(1)),
  gapsForPrestyj: z.array(z.string().min(1)),
});

export type CompetitorAuditOutput = z.infer<typeof CompetitorAuditOutputSchema>;

export const ResearchBriefSchema = z.object({
  date: z.string().min(1),
  trendingAngles: z.array(z.string().min(1)),
  competitorMoves: z.array(
    z.object({
      competitor: z.string().min(1),
      observation: z.string().min(1),
    })
  ),
  gscOpportunities: z.array(
    z.object({
      query: z.string().min(1),
      reason: z.string().min(1),
    })
  ),
  rawNotes: z.string(),
});

export type ResearchBriefShape = z.infer<typeof ResearchBriefSchema>;

// -----------------------------------------------------------------------------
// Re-exports (central place to import schemas)
// -----------------------------------------------------------------------------

export {
  BacklogItemSchema,
  BacklogSchema,
  DailyMetricsSchema,
  ShippedItemSchema,
  ShippedManifestSchema,
};
