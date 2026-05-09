"use client";

import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { ContentEnginePageLayout } from "@/components/sections/content-engine/content-engine-page-layout";
import { ContentEngineResultsDashboard } from "@/components/sections/content-engine/results-dashboard";
import { defaultContentEngineConfig } from "@/lib/content-engine/defaults";

const PAGE_URL = "https://prestyj.com/done-for-you-social-media";

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Prestyj Content Swarm — Done-For-You Social Media",
  description:
    "AI-powered done-for-you social media swarm running multiple accounts (brand, personal brand, and niche pages) across Instagram, Facebook, TikTok, YouTube, LinkedIn, Threads, and X. Live in 24 hours from account access. Up to 2,700+ posts/month with a volume guarantee.",
  provider: {
    "@type": "Organization",
    name: "PRESTYJ",
    url: "https://prestyj.com",
    logo: "https://prestyj.com/icon-512.png",
  },
  serviceType: [
    "Social Media Management",
    "AI Content Generation",
    "Done-For-You Social Media",
    "Multi-Account Social Media",
    "Personal Brand Management",
    "Multi-Platform Publishing",
    "Content Marketing Automation",
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
    name: "Content Swarm Plans",
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

export default function DoneForYouSocialMediaPage() {
  return (
    <>
      <SafeJsonLd data={serviceJsonLd} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          {
            name: "Done-For-You Social Media",
            url: PAGE_URL,
          },
        ]}
      />
      <FAQJsonLd faqs={defaultContentEngineConfig.faq.faqs} />
      <ContentEnginePageLayout
        config={defaultContentEngineConfig}
        afterProofBar={<ContentEngineResultsDashboard />}
      />
    </>
  );
}
