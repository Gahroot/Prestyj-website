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
    description:
      "You're great at construction, not content creation. Spending hours on ads takes you away from running the business.",
  },
  {
    icon: "TrendingDown" as const,
    title: "Your Book of Business is Unpredictable",
    description:
      "Feast or famine. One month you're turning down work, the next you're scrambling for leads. You need consistency.",
  },
  {
    icon: "PhoneOff" as const,
    title: "High-Ticket Jobs Require Fast Response",
    description:
      "Kitchen remodels, additions—these aren't impulse buys. But if you don't respond quickly, they find someone who will.",
  },
  {
    icon: "AlertTriangle" as const,
    title: "Can't Scale Past Word-of-Mouth",
    description:
      "Your past clients love you, but referrals alone won't hit your growth goals. You need a system that brings leads predictably.",
  },
];

const PAGE_TITLE = "Free Video Ads for Contractors";
const PAGE_DESCRIPTION =
  "Get 300 free video ads when you start a Prestyj plan from $1,997/mo. We set up the campaigns and our AI agents respond to every lead. Built for contractors.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "free video ads for contractors",
    "contractors advertising",
    "video ads for contractors",
    "contractors marketing",
    "free facebook ads contractors",
    "contractors lead generation",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
    url: "https://prestyj.com/free-ads/contractors",
  },
  alternates: {
    canonical: "https://prestyj.com/free-ads/contractors",
  },
};

export default function ContractorsFreeAdsPage() {
  const pageUrl = "https://prestyj.com/free-ads/contractors";

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          { name: "Free Ads for Contractors", url: pageUrl },
        ]}
      />
      <SafeJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Free Batch Video Ads for Contractors",
          description:
            "300 free scripted video ads for general contractors. 24-hour turnaround from your footage. Includes ad setup, landing page, and AI lead response.",
          provider: { "@type": "Organization", name: "Prestyj", url: "https://prestyj.com" },
          serviceType: "Video Ad Production",
          areaServed: "United States",
        }}
      />
      <main className="min-h-screen">
        <IndustryHero
          industry="Contracting"
          headline={PAGE_TITLE}
          ctaText="Get My FREE Contractor Ads"
        />
        <IndustryPainPoints
          painPoints={CONTRACTOR_PAIN_POINTS}
          ctaText="Get My FREE Contractor Ads"
        />
        <SocialProof />
        <OfferBreakdown />
        <LeadForm />
        <FreeAdsFAQ />
      </main>
    </>
  );
}
