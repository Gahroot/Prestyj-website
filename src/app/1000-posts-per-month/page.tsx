"use client";

import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { ContentEnginePageLayout } from "@/components/sections/content-engine/content-engine-page-layout";
import { volumeContentEngineConfig } from "@/lib/content-engine/volume-config";

const PAGE_URL = "https://prestyj.com/1000-posts-per-month";

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Prestyj Content Swarm — 1,000+ Posts Per Month",
  description:
    "AI-powered content engine shipping 1,000+ posts per month across your brand, personal brand, and niche accounts. Instagram, Facebook, TikTok, YouTube, LinkedIn, Threads, and X. Live in 24 hours. Volume guaranteed.",
  provider: {
    "@type": "Organization",
    name: "PRESTYJ",
    url: "https://prestyj.com",
    logo: "https://prestyj.com/icon-512.png",
  },
  serviceType: [
    "Social Media Management",
    "AI Content Generation",
    "High-Volume Social Media Posting",
    "Multi-Account Social Media",
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
    name: "Volume Content Plans",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Minimum Plan",
        price: "1997",
        priceCurrency: "USD",
        itemOffered: {
          "@type": "Service",
          name: "Minimum Plan — 1 account, 3 platforms, ~270 posts/month",
        },
      },
      {
        "@type": "Offer",
        name: "Pro Plan",
        price: "2997",
        priceCurrency: "USD",
        itemOffered: {
          "@type": "Service",
          name: "Pro Plan — 2 accounts, 5 platforms, ~900 posts/month",
        },
      },
      {
        "@type": "Offer",
        name: "Max Plan",
        price: "4997",
        priceCurrency: "USD",
        itemOffered: {
          "@type": "Service",
          name: "Max Plan — 3 accounts, 7 platforms, ~2,700 posts/month",
        },
      },
    ],
  },
};

export default function ThousandPostsPerMonthPage() {
  return (
    <>
      <SafeJsonLd data={serviceJsonLd} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          {
            name: "1,000+ Posts Per Month",
            url: PAGE_URL,
          },
        ]}
      />
      <FAQJsonLd faqs={volumeContentEngineConfig.faq.faqs} />
      <ContentEnginePageLayout config={volumeContentEngineConfig} />
    </>
  );
}
