"use client";

import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { ContentEnginePageLayout } from "@/components/sections/content-engine/content-engine-page-layout";
import { autopilotContentEngineConfig } from "@/lib/content-engine/autopilot-config";
import { ExitIntentPopup } from "@/components/effects/exit-intent-popup";

const PAGE_URL = "https://prestyj.com/social-media-on-autopilot";

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Prestyj Autopilot — Social Media On Autopilot",
  description:
    "Fully hands-off social media management powered by AI. Zero-touch content creation, scheduling, publishing, and optimization across Instagram, Facebook, TikTok, YouTube, LinkedIn, Threads, and X. Live in 24 hours. From $1,997/mo.",
  provider: {
    "@type": "Organization",
    name: "PRESTYJ",
    url: "https://prestyj.com",
    logo: "https://prestyj.com/icon-512.png",
  },
  serviceType: [
    "Social Media Management",
    "AI Content Generation",
    "Automated Social Media",
    "Hands-Off Social Media",
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
    name: "Autopilot Content Plans",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Minimum Plan",
        price: "1997",
        priceCurrency: "USD",
        itemOffered: {
          "@type": "Service",
          name: "Minimum Plan — 1 account, 3 platforms, ~270 posts/month on autopilot",
        },
      },
      {
        "@type": "Offer",
        name: "Pro Plan",
        price: "2997",
        priceCurrency: "USD",
        itemOffered: {
          "@type": "Service",
          name: "Pro Plan — 2 accounts, 5 platforms, ~900 posts/month on autopilot",
        },
      },
      {
        "@type": "Offer",
        name: "Max Plan",
        price: "4997",
        priceCurrency: "USD",
        itemOffered: {
          "@type": "Service",
          name: "Max Plan — 3 accounts, 7 platforms, ~2,700 posts/month on autopilot",
        },
      },
    ],
  },
};

export default function SocialMediaOnAutopilotPage() {
  return (
    <>
      <SafeJsonLd data={serviceJsonLd} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          {
            name: "Social Media On Autopilot",
            url: PAGE_URL,
          },
        ]}
      />
      <FAQJsonLd faqs={autopilotContentEngineConfig.faq.faqs} />
      <ContentEnginePageLayout config={autopilotContentEngineConfig} />
      <ExitIntentPopup />
    </>
  );
}
