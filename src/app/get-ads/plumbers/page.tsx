import type { Metadata } from "next";
import { IndustryHero } from "@/components/free-ads/industry-hero";
import { SocialProof } from "@/components/free-ads/social-proof";
import { OfferBreakdown } from "@/components/free-ads/offer-breakdown";
import { IndustryPainPoints } from "@/components/free-ads/industry-pain-points";
import { LeadForm } from "@/components/free-ads/lead-form";
import { FreeAdsFAQ } from "@/components/free-ads/faq-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";

const PLUMBER_PAIN_POINTS = [
  {
    icon: "PhoneOff" as const,
    title: "Missed Emergency Calls = Lost Money",
    description: "A burst pipe at 2 AM doesn't wait. Every missed call is hundreds of dollars going to a competitor who answered.",
  },
  {
    icon: "TrendingDown" as const,
    title: "Ad Fatigue Kills Your Leads",
    description: "Running the same 3 ads? Your audience stopped clicking weeks ago. You need fresh creative to stay top-of-mind.",
  },
  {
    icon: "AlertTriangle" as const,
    title: "One Bad Review Can Ruin Months of Work",
    description: "Plumbing relies on trust. One negative review from a slow response can cost you thousands in future jobs.",
  },
  {
    icon: "Users" as const,
    title: "Can't Scale Beyond Word-of-Mouth",
    description: "You're great at what you do, but marketing feels like a second job. You need a system that brings jobs to you.",
  },
];

export const metadata: Metadata = {
  title: "300 Free Video Ads for Plumbers | PRESTYJ",
  description:
    "What if you had 300 video ads running by next week? We'll create them for free. You just send the footage. 24-hour turnaround. Exclusively for plumbing companies.",
  openGraph: {
    title: "300 Free Video Ads for Plumbers | PRESTYJ",
    description:
      "What if you had 300 video ads running by next week? We'll create them for free. You just send the footage.",
    type: "website",
  },
};

export default function PlumbersFreeAdsPage() {
  const pageUrl = "https://prestyj.com/get-ads/plumbers";

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          { name: "Batch Video Ads for Plumbers", url: pageUrl },
        ]}
      />
      <SafeJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Batch Video Ads for Plumbers",
          description:
            "Batch scripted video ads for plumbing companies. 24-hour turnaround from your footage. Includes ad setup, landing page, and AI lead response.",
          provider: { "@type": "Organization", name: "PRESTYJ", url: "https://prestyj.com" },
          serviceType: "Video Ad Production",
          areaServed: "United States",
        }}
      />
      <main className="min-h-screen">
      <IndustryHero
        industry="Plumbing"
        headline="What If You Had 300 Video Ads Running By Next Week?"
        subheadline="We send you the scripts and help you film. Just stand in front of the camera and read."
        description="I'll give you 300 video ads for free. In exchange, I want to run them for you — I'll set up the ads, build the landing page, and have AI respond to every lead in seconds. You pay the ad spend ($1k/mo minimum) and a setup fee. If it doesn't work, you keep the ads and we part ways."
        ctaText="Get My FREE Plumbing Ads"
      />
      <IndustryPainPoints painPoints={PLUMBER_PAIN_POINTS} ctaText="Get My FREE Plumbing Ads" />
      <SocialProof />
      <OfferBreakdown />
      <LeadForm />
      <FreeAdsFAQ />
      </main>
    </>
  );
}
