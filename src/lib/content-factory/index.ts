// Factories
export { createAlternativePage } from "./factories/alternative-factory";
export { createComparePage } from "./factories/compare-factory";
export { createBestForPage } from "./factories/best-for-factory";

// Constants
export {
  INDUSTRY_STATS,
  STANDARD_INDUSTRY_STATS,
  REACTIVATION_STATS,
} from "./constants/industry-stats";
export { CTA_SNIPPETS, CTA_TEMPLATES } from "./constants/cta-snippets";
export {
  HERO_PATTERNS,
  buildHeroWithPattern,
} from "./constants/hero-patterns";
export {
  STANDARD_FEATURES,
  buildAlternativeFeature,
  buildCompareFeature,
} from "./constants/feature-rows";
export {
  PRESTYJ_PRICING_FEATURES,
  PRESTYJ_STANDARD_PRICING,
} from "./constants/pricing-features";
export {
  ICON_MAP,
  getIcon,
  getIconSafe,
  type IconName,
} from "./constants/icons";
