import type { Organization, WebSite, Product, FAQPage, WithContext } from "schema-dts";
import { siteConfig } from "@/lib/site-config";
import { SafeJsonLd } from "./safe-json-ld";

export function OrganizationJsonLd() {
  const jsonLd: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": siteConfig.organizationId,
    name: siteConfig.name,
    alternateName: [...siteConfig.alternateNames],
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: siteConfig.logo,
    },
    image: siteConfig.logo,
    description: siteConfig.description,
    foundingDate: siteConfig.foundingDate,
    email: siteConfig.email,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.email,
        url: siteConfig.contactUrl,
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: siteConfig.email,
        url: siteConfig.contactUrl,
        availableLanguage: "English",
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    knowsAbout: [...siteConfig.offerClusters],
    sameAs: siteConfig.sameAs,
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
    "@id": siteConfig.websiteId,
    name: siteConfig.name,
    alternateName: "PRESTYJ",
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@id": siteConfig.organizationId,
    },
    potentialAction,
  };

  return <SafeJsonLd data={jsonLd} />;
}

export function ProductJsonLd() {
  const jsonLd: WithContext<Product> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Prestyj Custom AI Agents & Automation",
    description: siteConfig.description,
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
    name: "Prestyj Custom AI Agent Systems",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: siteConfig.description,
    offers: {
      "@type": "Offer",
      price: "1997",
      priceCurrency: "USD",
    },
    featureList: [
      "Custom AI agents",
      "AI voice agents",
      "AI receptionist workflows",
      "AI sales follow-up",
      "Marketing and content automation",
      "Internal workflow automation",
      "Desktop AI applications",
      "Batch video ad production",
      "Paid social creative testing",
      "CRM and calendar integration",
    ],
  };

  return <SafeJsonLd data={jsonLd} />;
}

export function BatchVideoAdsJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/#batch-video-ads-service`,
    name: "Prestyj Batch Video Ads",
    alternateName: "300 Video Ads for Paid Social Testing",
    description:
      "Prestyj turns one 15–20 minute recording into 300 vertical video ads for paid social creative testing across Meta, TikTok, YouTube Shorts, and Reels.",
    url: siteConfig.url,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    serviceType: [
      "Batch Video Ads",
      "Video Ad Production",
      "Paid Social Creative Testing",
      "UGC-Style Video Ads",
    ],
    areaServed: "United States",
    offers: {
      "@type": "Offer",
      name: "300 vertical video ads",
      price: "1497",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/batch-video-ads#pricing`,
    },
    audience: {
      "@type": "Audience",
      audienceType: "Businesses running paid social ads",
    },
  };

  return <SafeJsonLd data={jsonLd} />;
}

export function ServiceJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Prestyj Custom AI Agents & Automation",
    description: siteConfig.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    serviceType: [...siteConfig.offerClusters],
    areaServed: "United States",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Agent Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom AI Agents" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Voice Agents" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Receptionist" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Sales Agents" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Marketing Agents" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Batch Video Ads" } },
      ],
    },
  };

  return <SafeJsonLd data={jsonLd} />;
}
