import type { Metadata } from "next";
import { IndustryHero } from "@/components/free-ads/industry-hero";
import { SocialProof } from "@/components/free-ads/social-proof";
import { OfferBreakdown } from "@/components/free-ads/offer-breakdown";
import { IndustryPainPoints } from "@/components/free-ads/industry-pain-points";
import { LeadForm } from "@/components/free-ads/lead-form";
import { FreeAdsFAQ } from "@/components/free-ads/faq-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";

const CONTRACTOR_PAIN_POINTS = [
  {
    icon: "Users" as const,
    title: "Marketing Feels Like a Second Job",
    description: "You're great at construction, not content creation. Spending hours on ads takes you away from running the business.",
  },
  {
    icon: "TrendingDown" as const,
    title: "Your Book of Business is Unpredictable",
    description: "Feast or famine. One month you're turning down work, the next you're scrambling for leads. You need consistency.",
  },
  {
    icon: "PhoneOff" as const,
    title: "High-Ticket Jobs Require Fast Response",
    description: "Kitchen remodels, additions—these aren't impulse buys. But if you don't respond quickly, they find someone who will.",
  },
  {
    icon: "AlertTriangle" as const,
    title: "Can't Scale Past Word-of-Mouth",
    description: "Your past clients love you, but referrals alone won't hit your growth goals. You need a system that brings leads predictably.",
  },
];

export const metadata: Metadata = {
  title: "300 Free Video Ads for Contractors | PRESTYJ",
  description:
    "What if you had 300 video ads running by next week? We'll create them for free. You just send the footage. 24-hour turnaround. For general contractors.",
  openGraph: {
    title: "300 Free Video Ads for Contractors | PRESTYJ",
    description:
      "What if you had 300 video ads running by next week? We'll create them for free.",
    type: "website",
  },
};

export default function ContractorsFreeAdsPage() {
  const pageUrl = "https://prestyj.com/get-ads/contractors";

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          { name: "Batch Video Ads for Contractors", url: pageUrl },
        ]}
      />
      <SafeJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Batch Video Ads for Contractors",
          description:
            "Batch scripted video ads for general contractors. 24-hour turnaround from your footage. Includes ad setup, landing page, and AI lead response.",
          provider: { "@type": "Organization", name: "PRESTYJ", url: "https://prestyj.com" },
          serviceType: "Video Ad Production",
          areaServed: "United States",
        }}
      />
      <main className="min-h-screen">
      <IndustryHero
        industry="Contracting"
        headline="What If You Had 300 Video Ads Running By Next Week?"
        subheadline="We send you the scripts and help you film. Just stand in front of the camera and read."
        description="I'll give you 300 video ads for free. In exchange, I want to run them for you — I'll set up the ads, build the landing page, and have AI respond to every lead in seconds. You pay the ad spend ($1k/mo minimum) and a setup fee. If it doesn't work, you keep the ads and we part ways."
        ctaText="Get My FREE Contractor Ads"
      />
      <IndustryPainPoints painPoints={CONTRACTOR_PAIN_POINTS} ctaText="Get My FREE Contractor Ads" />
      <SocialProof />
      <OfferBreakdown />
      <LeadForm />
      <FreeAdsFAQ />
      </main>
    </>
  );
}
