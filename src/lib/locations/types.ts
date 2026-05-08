export interface FAQItem {
  question: string;
  answer: string;
}

export interface LocationService {
  name: string;
  slug: string;
  icon: string;
  citySpecificHook: string;
  bestForHref: string;
  freeAdsHref: string;
}

export interface LocationPageContent {
  slug: string;
  city: {
    name: string;
    state: string;
    displayName: string;
    metroPopulation: string;
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
  marketStats: {
    households: string;
    avgHomeValue: string;
    keyInsight: string;
  };
  services: LocationService[];
  faq: FAQItem[];
  cta: {
    headline: string;
    subheadline: string;
    buttonText: string;
    buttonHref: string;
  };
}
