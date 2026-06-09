import type { Metadata } from "next";
import { IndustryHero } from "@/components/free-ads/industry-hero";
import { SocialProof } from "@/components/free-ads/social-proof";
import { OfferBreakdown } from "@/components/free-ads/offer-breakdown";
import { IndustryPainPoints } from "@/components/free-ads/industry-pain-points";
import { LeadForm } from "@/components/free-ads/lead-form";
import { FreeAdsFAQ } from "@/components/free-ads/faq-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";

const ELECTRICIAN_PAIN_POINTS = [
  {
    icon: "Zap" as const,
    title: "Service Calls Don't Pay the Bills — Panel Upgrades Do",
    description:
      "You need EV charger installs and panel upgrades, not $89 outlet repairs. Without targeted creative, you only attract low-ticket calls.",
  },
  {
    icon: "PhoneOff" as const,
    title: "Emergency Calls Go to Whoever Answers First",
    description:
      "Power's out, customer is panicking — they call 3 electricians. The one who texts back in 60 seconds wins. That has to be you, every time.",
  },
  {
    icon: "TrendingDown" as const,
    title: "Same Old 'Licensed & Insured' Ads Are Invisible",
    description:
      "Every electrician in town has the same ad. Without scroll-stopping creative volume, you're paying CPMs to be ignored.",
  },
  {
    icon: "AlertTriangle" as const,
    title: "Your Slow Weeks Have No Backstop",
    description:
      "After a busy stretch, leads dry up for 2 weeks and your crews go idle. You need a creative engine that keeps the calendar full year-round.",
  },
];

const PAGE_TITLE = "Free Video Ads for Electricians";
const PAGE_DESCRIPTION =
  "Get 300 free video ads when you start a Prestyj plan from $1,997/mo. We set up the campaigns and our AI agents respond to every lead. Built for electrical contractors.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "free video ads for electricians",
    "electricians advertising",
    "video ads for electricians",
    "electricians marketing",
    "free facebook ads electricians",
    "electricians lead generation",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
    url: "https://prestyj.com/free-ads/electricians",
  },
  alternates: {
    canonical: "https://prestyj.com/free-ads/electricians",
  },
};

export default function ElectriciansFreeAdsPage() {
  const pageUrl = "https://prestyj.com/free-ads/electricians";

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          { name: "Free Ads for Electricians", url: pageUrl },
        ]}
      />
      <SafeJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Free Batch Video Ads for Electricians",
          description:
            "300 free scripted video ads for electrical contractors. 24-hour turnaround from your footage. Includes ad setup, landing page, and AI lead response.",
          provider: { "@type": "Organization", name: "Prestyj", url: "https://prestyj.com" },
          serviceType: "Video Ad Production",
          areaServed: "United States",
        }}
      />
      <main className="min-h-screen">
        <IndustryHero
          industry="Electrical"
          headline={PAGE_TITLE}
          ctaText="Get My FREE Electrical Ads"
        />
        <IndustryPainPoints
          painPoints={ELECTRICIAN_PAIN_POINTS}
          ctaText="Get My FREE Electrical Ads"
        />
        <SocialProof />
        <OfferBreakdown />
        <LeadForm />
        <FreeAdsFAQ />
      </main>
    </>
  );
}
