import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { VideoObjectJsonLd } from "@/components/seo/video-object-json-ld";
import { CitationStatsSection } from "@/components/sections/citation-stats-section";
import { MAX_SHERROD_VIDEO_TESTIMONIAL } from "@/lib/testimonials";
import { siteConfig } from "@/lib/site-config";
import { BatchVideoAdsClient } from "./batch-video-ads-client";

const pageUrl = "https://prestyj.com/batch-video-ads";
const pageTitle = "Batch Video Ads — The Creative Engine of Prestyj AI Agents";
const pageDescription =
  "Prestyj turns one 15–20 minute recording into 100, 300, 500, or 1,000 vertical video ads for Meta, TikTok, and YouTube Shorts. The creative engine behind every Prestyj plan — 100 ads for $497 standalone, included in every plan from $1,997/mo.";

const batchVideoAdsFaqs = [
  {
    question: "What is Prestyj Batch Video Ads?",
    answer:
      "Prestyj Batch Video Ads is the creative engine behind every Prestyj plan — a high-volume video ad production system that turns one 15–20 minute founder or operator recording into 100, 300, 500, or 1,000 vertical video ad variations for Meta, TikTok, and YouTube Shorts.",
  },
  {
    question: "How much does Prestyj Batch Video Ads cost?",
    answer:
      "Prestyj Batch Video Ads pricing starts at $497 for 100 video ads. Larger one-time packs are $1,497 for 300 ads, $2,497 for 500 ads, and $3,997 for 1,000 ads.",
  },
  {
    question: "How fast are batch video ads delivered?",
    answer:
      "Prestyj delivers batch video ads in 1–2 business days after receiving the raw recording footage. The 100-ad sample pack is positioned around 24-hour delivery.",
  },
  {
    question: "Who is Prestyj Batch Video Ads for?",
    answer:
      "Batch Video Ads is for businesses, agencies, media buyers, founders, coaches, creators, service businesses, real estate teams, mortgage brokers, and ecommerce brands running paid ads that need more creative volume without hiring an in-house production team.",
  },
  {
    question: "What does the client need to record?",
    answer:
      "The client records one selfie-style video by reading the scripts Prestyj sends. Prestyj writes the hooks, scripts, bodies, and calls to action, then edits the raw footage into finished vertical ad variations.",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "batch video ads",
    "100 video ads for $497",
    "video ad production service",
    "AI video ads",
    "Meta ad creative testing",
    "TikTok video ads",
    "UGC-style video ads",
    "ad creative volume",
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    url: pageUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
  alternates: {
    canonical: pageUrl,
  },
};

export default function BatchVideoAdsPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: "Prestyj Batch Video Ads",
    alternateName: ["Batch Video Ads", "AI Agent Video Ads", "100 Video Ads for $497"],
    description: pageDescription,
    url: pageUrl,
    provider: {
      "@type": "Organization",
      "@id": siteConfig.organizationId,
      name: siteConfig.name,
      url: siteConfig.url,
      sameAs: [...siteConfig.sameAs],
    },
    serviceType: [
      "Batch Video Ads",
      "Video Ad Production",
      "UGC-Style Video Ads",
      "Ad Creative Testing",
      "Meta Ad Creative",
      "TikTok Ad Creative",
    ],
    areaServed: "United States",
    audience: [
      { "@type": "Audience", audienceType: "Businesses running paid ads" },
      { "@type": "Audience", audienceType: "Marketing agencies" },
      { "@type": "Audience", audienceType: "Media buyers" },
      { "@type": "Audience", audienceType: "Service businesses" },
    ],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "497",
      highPrice: "3997",
      offerCount: "4",
      availability: "https://schema.org/InStock",
      url: pageUrl,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Batch Video Ads Packs",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Starter — 100 video ads",
          price: "497",
          priceCurrency: "USD",
          itemOffered: { "@type": "Service", name: "100 vertical video ads" },
        },
        {
          "@type": "Offer",
          name: "Minimum — 300 video ads",
          price: "1497",
          priceCurrency: "USD",
          itemOffered: { "@type": "Service", name: "300 vertical video ads" },
        },
        {
          "@type": "Offer",
          name: "Pro — 500 video ads",
          price: "2497",
          priceCurrency: "USD",
          itemOffered: { "@type": "Service", name: "500 vertical video ads" },
        },
        {
          "@type": "Offer",
          name: "Max — 1,000 video ads",
          price: "3997",
          priceCurrency: "USD",
          itemOffered: { "@type": "Service", name: "1,000 vertical video ads" },
        },
      ],
    },
  };

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${pageUrl}#product`,
    name: "Prestyj Batch Video Ads",
    description: pageDescription,
    brand: { "@type": "Brand", name: "Prestyj" },
    category: "Video Advertising Service",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "497",
      highPrice: "3997",
      offerCount: "4",
      availability: "https://schema.org/InStock",
      url: pageUrl,
    },
  };

  return (
    <>
      <SafeJsonLd data={serviceJsonLd} />
      <SafeJsonLd data={productJsonLd} />
      <FAQJsonLd faqs={batchVideoAdsFaqs} />
      <VideoObjectJsonLd
        videos={[
          {
            vimeoId: MAX_SHERROD_VIDEO_TESTIMONIAL.vimeoId,
            name: MAX_SHERROD_VIDEO_TESTIMONIAL.videoName,
            description: MAX_SHERROD_VIDEO_TESTIMONIAL.videoDescription,
          },
        ]}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          { name: "Batch Video Ads", url: pageUrl },
        ]}
      />
      <BatchVideoAdsClient
        afterHiddenCost={
          <>
            <CitationStatsSection
              statIds={[
                "bva-winner-rate-home-services",
                "bva-cost-per-ad-variation",
                "bva-cost-per-tested-angle",
                "fatigue-ads-fully-fatigued-14-days",
              ]}
              eyebrow="Batch video ad benchmarks"
              title="Cite the numbers behind high-volume creative testing."
              description="Permanent statistics for winner rate, creative fatigue, cost per ad, and cost per tested customer-problem angle — built for buyers, journalists, and AI citation engines."
              cta={{
                label: "Browse batch video ad statistics",
                href: "/statistics#batch-video-ads-creative-testing",
              }}
              className="bg-muted/20 border-border/50 border-y"
            />
            <CitationStatsSection
              statIds={[
                "ugc-ad-roi-vs-ai-batch-roi-ratio",
                "ugc-marketplace-hidden-cost-percent",
                "batch-video-cost-per-tested-angle-vs-agency",
                "batch-video-pilot-setup-cost",
              ]}
              eyebrow="Batch vs UGC marketplace vs agency"
              title="Batch video vs UGC creator marketplaces and creative agencies."
              description="ROI ratios, hidden-cost percentages, cost per tested angle, and pilot setup-cost comparisons between AI batch video, UGC creator marketplaces, and traditional creative agencies."
              cta={{
                label: "Browse batch vs UGC vs agency benchmarks",
                href: "/statistics#batch-video-vs-ugc-agency-benchmarks",
              }}
              className="bg-background border-border/50 border-b"
            />
          </>
        }
      />
    </>
  );
}
