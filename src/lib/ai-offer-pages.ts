export interface AiOfferStat {
  value: string;
  label: string;
  detail: string;
}

export interface AiOfferLink {
  href: string;
  label: string;
  description: string;
}

export interface AiOfferTableRow {
  label: string;
  values: string[];
}

export interface AiOfferTable {
  title: string;
  description: string;
  columns: string[];
  rows: AiOfferTableRow[];
}

export interface AiOfferCard {
  title: string;
  description: string;
}

export interface AiOfferFaq {
  question: string;
  answer: string;
}

export interface AiOfferSection {
  eyebrow: string;
  title: string;
  description: string;
  cards: AiOfferCard[];
}

export interface AiOfferPageData {
  slug: string;
  url: string;
  title: string;
  description: string;
  keywords: string[];
  breadcrumbLabel: string;
  serviceName: string;
  serviceType: string[];
  offerCatalogName: string;
  lowPrice: string;
  highPrice: string;
  offerCount: string;
  hero: {
    eyebrow: string;
    headline: string;
    accent: string;
    subheadline: string;
    primaryCta: AiOfferLink;
    secondaryCta: AiOfferLink;
    stats: AiOfferStat[];
  };
  tldr: {
    title: string;
    bullets: string[];
  };
  pricingTable: AiOfferTable;
  alternativesTable: AiOfferTable;
  utilitySection: AiOfferSection;
  processSection: AiOfferSection;
  relatedLinks: AiOfferLink[];
  faqs: AiOfferFaq[];
  finalCta: {
    title: string;
    description: string;
    primaryCta: AiOfferLink;
    secondaryCta?: AiOfferLink;
  };
}

export function createServiceJsonLd(page: AiOfferPageData): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${page.url}#service`,
    name: page.serviceName,
    alternateName: page.keywords.slice(0, 6),
    description: page.description,
    url: page.url,
    provider: {
      "@type": "Organization",
      name: "Prestyj",
      url: "https://prestyj.com",
      logo: "https://prestyj.com/icon-512.png",
    },
    serviceType: page.serviceType,
    areaServed: "United States",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: page.lowPrice,
      highPrice: page.highPrice,
      offerCount: page.offerCount,
      availability: "https://schema.org/InStock",
      url: page.url,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: page.offerCatalogName,
      itemListElement: page.pricingTable.rows.map((row) => ({
        "@type": "Offer",
        name: row.label,
        priceCurrency: "USD",
        itemOffered: {
          "@type": "Service",
          name: `${page.serviceName}: ${row.label}`,
          description: row.values.join(" · "),
        },
      })),
    },
  };
}

export function createSoftwareApplicationJsonLd(page: AiOfferPageData): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${page.url}#software`,
    name: page.serviceName,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: page.description,
    url: page.url,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: page.lowPrice,
      highPrice: page.highPrice,
      offerCount: page.offerCount,
      availability: "https://schema.org/InStock",
      url: page.url,
    },
    featureList: page.serviceType,
    provider: {
      "@type": "Organization",
      name: "Prestyj",
      url: "https://prestyj.com",
    },
  };
}
