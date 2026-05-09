"use client";

import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { ContentEnginePageLayout } from "@/components/sections/content-engine/content-engine-page-layout";
import { managedSocialMediaServiceConfig } from "@/lib/content-engine/managed-service-config";

const PAGE_URL = "https://prestyj.com/managed-social-media-service";

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Prestyj Managed Social Media Service",
  description:
    "Fully managed social media service handling strategy, content creation, design, publishing, and optimization across Instagram, Facebook, TikTok, YouTube, LinkedIn, Threads, and X. Live in 24 hours. From $1,997/mo.",
  provider: {
    "@type": "Organization",
    name: "PRESTYJ",
    url: "https://prestyj.com",
    logo: "https://prestyj.com/icon-512.png",
  },
  serviceType: [
    "Social Media Management",
    "Managed Social Media Service",
    "AI Content Generation",
    "Done-For-You Social Media",
    "Content Marketing Automation",
    "Social Media Marketing",
  ],
  areaServed: "United States",
  url: PAGE_URL,
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "1997",
    highPrice: "4997",
    offerCount: "3",
    availability: "https://schema.org/InStock",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Managed Social Media Plans",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Minimum Plan",
        price: "1997",
        priceCurrency: "USD",
        itemOffered: {
          "@type": "Service",
          name: "Minimum Plan — 1 managed account, 3 platforms, ~270 posts/month",
        },
      },
      {
        "@type": "Offer",
        name: "Pro Plan",
        price: "2997",
        priceCurrency: "USD",
        itemOffered: {
          "@type": "Service",
          name: "Pro Plan — 2 managed accounts, 5 platforms, ~900 posts/month",
        },
      },
      {
        "@type": "Offer",
        name: "Max Plan",
        price: "4997",
        priceCurrency: "USD",
        itemOffered: {
          "@type": "Service",
          name: "Max Plan — 3 managed accounts, 7 platforms, ~2,700 posts/month",
        },
      },
    ],
  },
};

export default function ManagedSocialMediaServicePage() {
  return (
    <>
      <SafeJsonLd data={serviceJsonLd} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          {
            name: "Managed Social Media Service",
            url: PAGE_URL,
          },
        ]}
      />
      <FAQJsonLd faqs={managedSocialMediaServiceConfig.faq.faqs} />
      <ContentEnginePageLayout config={managedSocialMediaServiceConfig} />
    </>
  );
}
