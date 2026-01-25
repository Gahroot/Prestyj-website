export interface WhyBestForReason {
  icon: string;
  title: string;
  description: string;
}

export interface PainPoint {
  problem: string;
  solution: string;
}

export interface ComparisonRow {
  feature: string;
  prestyj: string;
  others: string;
  note?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BestForPageContent {
  slug: string;
  niche: {
    name: string;
    shortName?: string;
    description: string;
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
  whyBestFor: WhyBestForReason[];
  painPoints: PainPoint[];
  comparison: {
    headers: string[];
    rows: ComparisonRow[];
  };
  faq: FAQItem[];
  cta: {
    headline: string;
    subheadline: string;
    buttonText: string;
    buttonHref: string;
    footnote?: string;
  };
}
