import type { Metadata } from "next";
import { IndustryHero } from "@/components/free-ads/industry-hero";
import { SocialProof } from "@/components/free-ads/social-proof";
import { OfferBreakdown } from "@/components/free-ads/offer-breakdown";
import { IndustryPainPoints } from "@/components/free-ads/industry-pain-points";
import { LeadForm } from "@/components/free-ads/lead-form";
import { FreeAdsFAQ } from "@/components/free-ads/faq-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";

const COACH_PAIN_POINTS = [
  {
    icon: "Mic" as const,
    title: "You're the Brand — But You Can't Film Every Day",
    description:
      "Your audience wants you on camera. You don't have 4 hours a day to film, edit, and post. Without volume, the algorithm forgets you.",
  },
  {
    icon: "TrendingDown" as const,
    title: "VSL Funnels Stopped Converting",
    description:
      "The 45-minute webinar is dead. You need short, sharp video hooks that warm cold traffic — and you need 50 of them, not 5.",
  },
  {
    icon: "PhoneOff" as const,
    title: "Booked Calls Show Up at 30%",
    description:
      "Half your leads ghost the discovery call. Without instant text follow-up and a pre-qualifying creative angle, you're paying to talk to tire-kickers.",
  },
  {
    icon: "AlertTriangle" as const,
    title: "Course Launches Live and Die on Creative",
    description:
      "One launch flops because your top ad fatigued in week 2. You need a ready-to-fire library of angles, not another all-nighter with your editor.",
  },
];

const PAGE_TITLE = "Free Video Ads for Coaches";
const PAGE_DESCRIPTION =
  "Get 300 free video ads when you start a Prestyj plan from $1,997/mo. We set up the campaigns and our AI agents respond to every lead. Built for coaches, consultants, and course creators.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
  },
};

export default function CoachesFreeAdsPage() {
  const pageUrl = "https://prestyj.com/free-ads/coaches";

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          { name: "Free Ads for Coaches", url: pageUrl },
        ]}
      />
      <SafeJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Free Batch Video Ads for Coaches",
          description:
            "300 free scripted video ads for coaches, consultants, and course creators. 24-hour turnaround from your footage. Includes ad setup, landing page, and AI lead response.",
          provider: { "@type": "Organization", name: "Prestyj", url: "https://prestyj.com" },
          serviceType: "Video Ad Production",
          areaServed: "United States",
        }}
      />
      <main className="min-h-screen">
        <IndustryHero
          industry="Coaching"
          headline={PAGE_TITLE}
          ctaText="Get My FREE Coaching Ads"
        />
        <IndustryPainPoints painPoints={COACH_PAIN_POINTS} ctaText="Get My FREE Coaching Ads" />
        <SocialProof />
        <OfferBreakdown />
        <LeadForm />
        <FreeAdsFAQ />
      </main>
    </>
  );
}
