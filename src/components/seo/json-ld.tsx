import type { Organization, WebSite, Product, FAQPage, WithContext } from "schema-dts";
import { SafeJsonLd } from "./safe-json-ld";

const siteConfig = {
  name: "PRESTYJ",
  url: "https://prestyj.com",
  description:
    "Deploy AI agents that qualify leads and book appointments 24/7. Instant response for real estate, home services, and high-growth service businesses.",
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
      "https://www.instagram.com/prestyj_/",
      "https://www.linkedin.com/company/prestyj/",
      "https://www.facebook.com/profile.php?id=61582824703610",
      "https://x.com/prestyj_",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      availableLanguage: "English",
    },
  };

  return <SafeJsonLd data={jsonLd} />;
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

  return <SafeJsonLd data={jsonLd} />;
}

export function ProductJsonLd() {
  const jsonLd: WithContext<Product> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "PRESTYJ AI Sales Agent",
    description:
      "AI-powered sales and appointment-setting agent for service businesses. Responds to leads in under 60 seconds, qualifies prospects, and books appointments automatically.",
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
      audienceType: "Service Business Owners",
    },
  };

  return <SafeJsonLd data={jsonLd} />;
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

  return <SafeJsonLd data={jsonLd} />;
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
      "Multi-industry support",
      "Missed call text back",
    ],
  };

  return <SafeJsonLd data={jsonLd} />;
}
