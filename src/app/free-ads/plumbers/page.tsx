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
    description:
      "A burst pipe at 2 AM doesn't wait. Every missed call is hundreds of dollars going to a competitor who answered.",
  },
  {
    icon: "TrendingDown" as const,
    title: "Ad Fatigue Kills Your Leads",
    description:
      "Running the same 3 ads? Your audience stopped clicking weeks ago. You need fresh creative to stay top-of-mind.",
  },
  {
    icon: "AlertTriangle" as const,
    title: "One Bad Review Can Ruin Months of Work",
    description:
      "Plumbing relies on trust. One negative review from a slow response can cost you thousands in future jobs.",
  },
  {
    icon: "Users" as const,
    title: "Can't Scale Beyond Word-of-Mouth",
    description:
      "You're great at what you do, but marketing feels like a second job. You need a system that brings jobs to you.",
  },
];

const PAGE_TITLE = "Free Video Ads for Plumbers";
const PAGE_DESCRIPTION =
  "Get 300 free video ads when you start a Prestyj plan from $1,997/mo. We set up the campaigns and our AI agents respond to every lead. Built for plumbers.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "free video ads for plumbers",
    "plumbers advertising",
    "video ads for plumbers",
    "plumbers marketing",
    "free facebook ads plumbers",
    "plumbers lead generation",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
    url: "https://prestyj.com/free-ads/plumbers",
  },
  alternates: {
    canonical: "https://prestyj.com/free-ads/plumbers",
  },
};

export default function PlumbersFreeAdsPage() {
  const pageUrl = "https://prestyj.com/free-ads/plumbers";

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          { name: "Free Ads for Plumbers", url: pageUrl },
        ]}
      />
      <SafeJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Free Batch Video Ads for Plumbers",
          description:
            "300 free scripted video ads for plumbing companies. 24-hour turnaround from your footage. Includes ad setup, landing page, and AI lead response.",
          provider: { "@type": "Organization", name: "Prestyj", url: "https://prestyj.com" },
          serviceType: "Video Ad Production",
          areaServed: "United States",
        }}
      />
      <main className="min-h-screen">
        <IndustryHero
          industry="Plumbing"
          headline={PAGE_TITLE}
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
