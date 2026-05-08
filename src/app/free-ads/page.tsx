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
  title: "Get 300 Free Video Ads for Your Service Business | PRESTYJ",
  description:
    "What if you had 300 video ads running by next week? We'll create them for free — tailored for contractors, real estate, and home service businesses. 24-hour turnaround from a single recording session.",
  keywords: [
    "free video ads",
    "free video ads for service businesses",
    "batch video ads",
    "video ads for contractors",
    "video ads for real estate",
    "free facebook video ads",
    "free meta video ads",
    "service business video ads",
    "vertical video ads",
    "ad creative testing",
  ],
  openGraph: {
    title: "Get 300 Free Video Ads for Your Service Business | PRESTYJ",
    description:
      "300 video ads from one 15-minute recording. Free. 24-hour turnaround. Built for contractors, real estate, and home services.",
    type: "website",
    url: "https://prestyj.com/free-ads",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get 300 Free Video Ads for Your Service Business | PRESTYJ",
    description:
      "300 video ads from one 15-minute recording. Free. 24-hour turnaround. Built for service businesses.",
  },
  alternates: {
    canonical: "https://prestyj.com/free-ads",
  },
};

export default function FreeAdsPage() {
  const freeAdsServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Free Batch Video Ads for Service Businesses",
    description:
      "300 free video ads created from a single 15-minute recording session. Optimized for Meta, TikTok, and YouTube Shorts. 24-hour turnaround.",
    provider: {
      "@type": "Organization",
      name: "PRESTYJ",
      url: "https://prestyj.com",
    },
    serviceType: [
      "Video Ad Production",
      "Batch Video Ads",
      "Ad Creative Testing",
    ],
    areaServed: "United States",
    isAccessibleForFree: true,
  };

  const breadcrumbs = [
    { name: "Home", url: "https://prestyj.com" },
    { name: "Free Video Ads", url: "https://prestyj.com/free-ads" },
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
