import type { Metadata } from "next";
import { IndustryHero } from "@/components/free-ads/industry-hero";
import { SocialProof } from "@/components/free-ads/social-proof";
import { OfferBreakdown } from "@/components/free-ads/offer-breakdown";
import { IndustryPainPoints } from "@/components/free-ads/industry-pain-points";
import { LeadForm } from "@/components/free-ads/lead-form";
import { FreeAdsFAQ } from "@/components/free-ads/faq-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";

const MORTGAGE_PAIN_POINTS = [
  {
    icon: "Home" as const,
    title: "Rates Move and Your Ads Are Already Stale",
    description:
      "By the time you brief a new ad about today's rate, the rate has moved again. You need a creative engine that ships in 24 hours, not 2 weeks.",
  },
  {
    icon: "PhoneOff" as const,
    title: "Pre-Approval Leads Go Cold in Minutes",
    description:
      "Rate-shoppers contact 5 brokers in 10 minutes. If you're not the first to text back with a quote window, you're not closing the loan.",
  },
  {
    icon: "TrendingDown" as const,
    title: "Realtor Referrals Aren't Enough Anymore",
    description:
      "Your referral pipeline is slower than it was 2 years ago. You need a direct-to-consumer ad channel that doesn't depend on agents sending deals.",
  },
  {
    icon: "AlertTriangle" as const,
    title: "Meta Compliance Kills Half Your Creative",
    description:
      "Special-ad-category rules nuke most mortgage ads. Without a deep library of compliant variations you have nothing to fall back on.",
  },
];

const PAGE_TITLE = "Free Video Ads for Mortgage Brokers";
const PAGE_DESCRIPTION =
  "Get 300 free video ads when you start a Prestyj plan from $1,997/mo. We set up the campaigns and our AI agents respond to every lead. Built for mortgage brokers and loan officers.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
  },
};

export default function MortgageBrokersFreeAdsPage() {
  const pageUrl = "https://prestyj.com/free-ads/mortgage-brokers";

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          { name: "Free Ads for Mortgage Brokers", url: pageUrl },
        ]}
      />
      <SafeJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Free Batch Video Ads for Mortgage Brokers",
          description:
            "300 free scripted video ads for mortgage brokers and loan officers. 24-hour turnaround from your footage. Includes ad setup, landing page, and AI lead response.",
          provider: { "@type": "Organization", name: "Prestyj", url: "https://prestyj.com" },
          serviceType: "Video Ad Production",
          areaServed: "United States",
        }}
      />
      <main className="min-h-screen">
        <IndustryHero
          industry="Mortgage"
          headline={PAGE_TITLE}
          ctaText="Get My FREE Mortgage Ads"
        />
        <IndustryPainPoints painPoints={MORTGAGE_PAIN_POINTS} ctaText="Get My FREE Mortgage Ads" />
        <SocialProof />
        <OfferBreakdown />
        <LeadForm />
        <FreeAdsFAQ />
      </main>
    </>
  );
}
