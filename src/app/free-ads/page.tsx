import type { Metadata } from "next";
import { HeroVideo } from "@/components/free-ads/hero-video";
import { LiveProof } from "@/components/free-ads/live-proof";
import { SocialProof } from "@/components/free-ads/social-proof";
import { OfferBreakdown } from "@/components/free-ads/offer-breakdown";
import { LeadForm } from "@/components/free-ads/lead-form";
import { FreeAdsFAQ } from "@/components/free-ads/faq-section";
import { FreeAdsStatsSection } from "@/components/free-ads/stats-section";
import { FreeAdsComparisonSection } from "@/components/free-ads/comparison-section";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { freeAdsFaqs } from "@/lib/free-ads-data";

export const metadata: Metadata = {
  title: "300 Video Ads Included With Your Plan | Prestyj",
  description:
    "300 video ads are included when you start a Prestyj AI agents plan from $1,997/mo (setup fee applies). Done-for-you batch video ads, managed ad spend, and AI agents that book appointments — 24/7.",
  keywords: [
    "video ads included with plan",
    "batch video ads",
    "video ads for service businesses",
    "video ads for contractors",
    "video ads for real estate",
    "ai agents for marketing",
    "done for you video ads",
    "vertical video ads",
    "ad creative testing",
    "managed ad spend",
  ],
  openGraph: {
    title: "300 Video Ads Included With Your Plan | Prestyj",
    description:
      "300 video ads included when you start a Prestyj AI agents plan from $1,997/mo (setup fee applies). Done-for-you batch video ads, managed ad spend, and AI agents that book appointments.",
    type: "website",
    url: "https://prestyj.com/free-ads",
  },
  twitter: {
    card: "summary_large_image",
    title: "300 Video Ads Included With Your Plan | Prestyj",
    description:
      "300 video ads included when you start a Prestyj AI agents plan from $1,997/mo (setup fee applies). Done-for-you batch video ads, managed ad spend, and AI agents.",
  },
  alternates: {
    canonical: "https://prestyj.com/free-ads",
  },
};

export default function FreeAdsPage() {
  const freeAdsServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "300 Video Ads Included With Your Prestyj Plan",
    description:
      "300 video ads included when you start a Prestyj AI agents plan from $1,997/mo (setup fee applies). Created from a single 15-minute recording session. Optimized for Meta, TikTok, and YouTube Shorts. 24-hour turnaround.",
    provider: {
      "@type": "Organization",
      name: "Prestyj",
      url: "https://prestyj.com",
    },
    serviceType: ["Video Ad Production", "Batch Video Ads", "Ad Creative Testing"],
    areaServed: "United States",
  };

  const breadcrumbs = [
    { name: "Home", url: "https://prestyj.com" },
    { name: "Video Ads Included", url: "https://prestyj.com/free-ads" },
  ];

  return (
    <main className="min-h-screen">
      <BreadcrumbJsonLd items={breadcrumbs} />
      <SafeJsonLd data={freeAdsServiceSchema} />
      <FAQJsonLd faqs={freeAdsFaqs} />
      <HeroVideo />
      <SocialProof />
      <FreeAdsStatsSection />
      <LiveProof />
      <OfferBreakdown />
      <FreeAdsComparisonSection />
      <LeadForm />
      <FreeAdsFAQ />
    </main>
  );
}
