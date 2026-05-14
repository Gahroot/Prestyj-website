import type { Organization, WebSite, Product, FAQPage, WithContext } from "schema-dts";
import { SafeJsonLd } from "./safe-json-ld";

const siteConfig = {
  name: "Prestyj",
  url: "https://prestyj.com",
  description:
    "We build AI agents for marketing & sales. AI agents and automations that capture leads, respond instantly, qualify them, and book meetings — built for businesses.",
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
  const potentialAction = {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteConfig.url}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  } as NonNullable<WebSite["potentialAction"]>;

  const jsonLd: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction,
  };

  return <SafeJsonLd data={jsonLd} />;
}

export function ProductJsonLd() {
  const jsonLd: WithContext<Product> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Prestyj AI Agents for Marketing & Sales",
    description:
      "AI agents and automations that capture leads, respond instantly, qualify them, and book meetings — built for businesses.",
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "1997",
      highPrice: "5997",
      offerCount: "3",
      availability: "https://schema.org/InStock",
    },
    category: "Software",
    audience: {
      "@type": "Audience",
      audienceType: "Businesses",
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
    name: "Prestyj AI Agents for Marketing & Sales",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: siteConfig.description,
    offers: {
      "@type": "Offer",
      price: "1997",
      priceCurrency: "USD",
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

export function ServiceJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Agents for Marketing & Sales",
    description:
      "AI agents and automations that capture leads, respond instantly, qualify them, and book meetings — built for businesses.",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    serviceType: [
      "AI Lead Generation",
      "AI Lead Response",
      "AI Sales Agent",
      "AI Receptionist",
      "Lead Reactivation",
      "Sales Automation",
      "Marketing Automation",
      "Business Automation",
      "AI Customer Engagement",
    ],
    areaServed: "United States",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Agent Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Lead Generation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Lead Response" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Sales Agent" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Receptionist" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lead Reactivation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sales Automation" } },
      ],
    },
  };

  return <SafeJsonLd data={jsonLd} />;
}
