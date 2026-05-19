import type { Metadata } from "next";
import { IndustryHero } from "@/components/free-ads/industry-hero";
import { SocialProof } from "@/components/free-ads/social-proof";
import { OfferBreakdown } from "@/components/free-ads/offer-breakdown";
import { IndustryPainPoints } from "@/components/free-ads/industry-pain-points";
import { LeadForm } from "@/components/free-ads/lead-form";
import { FreeAdsFAQ } from "@/components/free-ads/faq-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";

const GYM_PAIN_POINTS = [
  {
    icon: "Dumbbell" as const,
    title: "January Sign-Ups Don't Carry the Year",
    description:
      "Q1 fills the gym, then March hits and acquisition dries up. You need a creative engine that keeps tours booked in May, August, October.",
  },
  {
    icon: "PhoneOff" as const,
    title: "Lead Forms Don't Show Up for the Tour",
    description:
      "Half your trial sign-ups never walk through the door. Without instant text follow-up and a hooky creative angle, you're paying for ghosts.",
  },
  {
    icon: "TrendingDown" as const,
    title: "'30 Days Free' Offers Attract Quitters",
    description:
      "Lowest-common-denominator offers bring the worst-fit members. You need creative that pre-qualifies for your community, not just clicks.",
  },
  {
    icon: "AlertTriangle" as const,
    title: "Member Retention Lives or Dies on Content",
    description:
      "Members who see you in their feed weekly stay 3x longer. Without a steady stream of vertical video, your community goes quiet.",
  },
];

const PAGE_TITLE = "Free Video Ads for Gyms";
const PAGE_DESCRIPTION =
  "Get 300 free video ads when you start a Prestyj plan from $1,997/mo. We set up the campaigns and our AI agents respond to every lead. Built for gyms, studios, and fitness brands.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
    url: "https://prestyj.com/free-ads/gyms",
  },
  alternates: {
    canonical: "https://prestyj.com/free-ads/gyms",
  },
};

export default function GymsFreeAdsPage() {
  const pageUrl = "https://prestyj.com/free-ads/gyms";

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          { name: "Free Ads for Gyms", url: pageUrl },
        ]}
      />
      <SafeJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Free Batch Video Ads for Gyms",
          description:
            "300 free scripted video ads for gyms, studios, and fitness brands. 24-hour turnaround from your footage. Includes ad setup, landing page, and AI lead response.",
          provider: { "@type": "Organization", name: "Prestyj", url: "https://prestyj.com" },
          serviceType: "Video Ad Production",
          areaServed: "United States",
        }}
      />
      <main className="min-h-screen">
        <IndustryHero industry="Fitness" headline={PAGE_TITLE} ctaText="Get My FREE Gym Ads" />
        <IndustryPainPoints painPoints={GYM_PAIN_POINTS} ctaText="Get My FREE Gym Ads" />
        <SocialProof />
        <OfferBreakdown />
        <LeadForm />
        <FreeAdsFAQ />
      </main>
    </>
  );
}
