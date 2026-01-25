export type AlternativeType = "direct-competitor" | "integration-partner";

export interface FeatureRow {
  feature: string;
  prestyj: boolean | string;
  competitor: boolean | string;
  note?: string;
}

export interface PricingInfo {
  price: string;
  period?: string;
  note?: string;
  pros: string[];
  cons: string[];
}

export interface WhySwitchReason {
  icon: string;
  title: string;
  description: string;
}

export interface AlternativePageContent {
  slug: string;
  type: AlternativeType;
  competitor: {
    name: string;
    shortName?: string;
    pricing?: string;
    website?: string;
    description?: string;
  };
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    badge: string;
    headline: string;
    headlineAccent: string;
    subheadline: string;
  };
  industryStats?: Array<{
    stat: string;
    description: string;
  }>;
  comparison: {
    features: FeatureRow[];
    competitorPricing: PricingInfo;
    prestyjPricing: PricingInfo;
  };
  whySwitch: WhySwitchReason[];
  whenCompetitorFits: string[];
  whenPrestyjFits: string[];
  relatedResources: Array<{
    href: string;
    title: string;
    description: string;
  }>;
  cta: {
    headline: string;
    subheadline: string;
    buttonText: string;
    buttonHref: string;
    footnote?: string;
  };
}
