import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export interface ComparePageData {
  slug: string;
  competitorName: string;
  hero: HeroSection;
  stats?: StatItem[];
  pricing: PricingSection;
  features: FeatureComparison[];
  whySwitch: WhySwitchSection;
  relatedResources?: RelatedResource[];
  cta: CTASection;
  specialSections?: SpecialSection[];
}

export interface HeroSection {
  badge: string;
  title: string;
  titleAccent: string; // The word to highlight in the title
  subtitle: string;
  description: string;
  keyStats?: KeyStat[];
}

export interface KeyStat {
  value: string;
  label: string;
}

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

export interface PricingSection {
  prestyj: PricingCard;
  competitor: PricingCard;
}

export interface PricingCard {
  name: string;
  price: string;
  priceSubtext?: string;
  features: PricingFeature[];
  highlight?: boolean;
}

export interface PricingFeature {
  text: string;
  included: boolean;
  note?: string;
}

export interface FeatureComparison {
  feature: string;
  prestyj: boolean | string;
  competitor: boolean | string;
  note?: string;
}

export interface WhySwitchSection {
  title: string;
  description: string;
  reasons: SwitchReason[];
}

export interface SwitchReason {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface RelatedResource {
  title: string;
  description: string;
  href: string;
  linkText: string;
}

export interface CTASection {
  title: string;
  titleAccent?: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  disclaimer?: string;
}

export interface SpecialSection {
  type: "cost-calculator" | "security-warning" | "tcpa-warning";
  position: "after-stats" | "after-pricing" | "after-features" | "after-why-switch";
  data?: Record<string, unknown>;
}

export interface CompareMetadata {
  slug: string;
  competitorName: string;
  title: string;
  description: string;
  keywords: string[];
}
