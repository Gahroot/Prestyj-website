import type { Organization, WebSite, Product, FAQPage, WithContext } from "schema-dts";

const siteConfig = {
  name: "PRESTYJ",
  url: "https://prestyj.com",
  description:
    "Stop losing leads. Your AI agent responds to every lead in under 60 seconds, qualifies them, and books appointments on your calendar. 24/7. No salary. No commission splits.",
  logo: "https://prestyj.com/icon-512.png",
};

export function OrganizationJsonLd() {
  const jsonLd: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: siteConfig.logo,
    description: siteConfig.description,
    sameAs: [
      // Add social media links here when available
      // "https://twitter.com/prestyj",
      // "https://linkedin.com/company/prestyj",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      availableLanguage: "English",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebSiteJsonLd() {
  const jsonLd: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    } as WebSite["potentialAction"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function ProductJsonLd() {
  const jsonLd: WithContext<Product> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "PRESTYJ AI Sales Agent",
    description:
      "AI-powered sales agent for real estate professionals. Responds to leads in under 60 seconds, qualifies prospects, and books appointments automatically.",
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "497",
      highPrice: "997",
      offerCount: "3",
      availability: "https://schema.org/InStock",
    },
    category: "Software",
    audience: {
      "@type": "Audience",
      audienceType: "Real Estate Professionals",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQJsonLd({ faqs }: { faqs: FAQItem[] }) {
  const jsonLd: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function SoftwareApplicationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PRESTYJ AI Sales Agent",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: siteConfig.description,
    offers: {
      "@type": "Offer",
      price: "497",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "150",
      bestRating: "5",
      worstRating: "1",
    },
    featureList: [
      "60-second lead response",
      "AI-powered lead qualification",
      "Automated appointment booking",
      "24/7 availability",
      "CRM integration",
      "Multi-channel support",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
