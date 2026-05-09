"use client";

import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { ContentEnginePageLayout } from "@/components/sections/content-engine/content-engine-page-layout";
import { aiSocialMediaManagementConfig } from "@/lib/content-engine/ai-social-media-management-config";
import { ExitIntentPopup } from "@/components/effects/exit-intent-popup";

const PAGE_URL = "https://prestyj.com/ai-social-media-management";

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Prestyj AI Social Media Management",
  description:
    "Fully autonomous AI social media management service. Creates, publishes, and optimizes content across Instagram, Facebook, TikTok, YouTube, LinkedIn, Threads, and X. Zero daily effort required. Live in 24 hours. From $1,997/mo.",
  provider: {
    "@type": "Organization",
    name: "PRESTYJ",
    url: "https://prestyj.com",
    logo: "https://prestyj.com/icon-512.png",
  },
  serviceType: [
    "AI Social Media Management",
    "Social Media Management",
    "AI Content Generation",
    "Automated Social Media",
    "Content Marketing Automation",
    "Done-For-You Social Media",
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
    name: "AI Social Media Management Plans",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Minimum Plan",
        price: "1997",
        priceCurrency: "USD",
        itemOffered: {
          "@type": "Service",
          name: "Minimum Plan — 1 account, 3 platforms, ~270 AI-managed posts/month",
        },
      },
      {
        "@type": "Offer",
        name: "Pro Plan",
        price: "2997",
        priceCurrency: "USD",
        itemOffered: {
          "@type": "Service",
          name: "Pro Plan — 2 accounts, 5 platforms, ~900 AI-managed posts/month",
        },
      },
      {
        "@type": "Offer",
        name: "Max Plan",
        price: "4997",
        priceCurrency: "USD",
        itemOffered: {
          "@type": "Service",
          name: "Max Plan — 3 accounts, 7 platforms, ~2,700 AI-managed posts/month",
        },
      },
    ],
  },
};

export default function AISocialMediaManagementPage() {
  return (
    <>
      <SafeJsonLd data={serviceJsonLd} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          {
            name: "AI Social Media Management",
            url: PAGE_URL,
          },
        ]}
      />
      <FAQJsonLd faqs={aiSocialMediaManagementConfig.faq.faqs} />
      <ContentEnginePageLayout config={aiSocialMediaManagementConfig} />
      <ExitIntentPopup />
    </>
  );
}
