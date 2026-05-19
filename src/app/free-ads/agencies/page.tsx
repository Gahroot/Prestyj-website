import type { Metadata } from "next";
import { IndustryHero } from "@/components/free-ads/industry-hero";
import { SocialProof } from "@/components/free-ads/social-proof";
import { OfferBreakdown } from "@/components/free-ads/offer-breakdown";
import { IndustryPainPoints } from "@/components/free-ads/industry-pain-points";
import { LeadForm } from "@/components/free-ads/lead-form";
import { FreeAdsFAQ } from "@/components/free-ads/faq-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";

const AGENCY_PAIN_POINTS = [
  {
    icon: "Megaphone" as const,
    title: "Creative is the Bottleneck on Every Client",
    description:
      "Media buying is easy. Getting 30 fresh creative variations a week per client is what kills your margins — and your editors are already maxed.",
  },
  {
    icon: "TrendingDown" as const,
    title: "Ad Fatigue is Hitting Every Account",
    description:
      "CPMs are up, ROAS is down, and clients are calling weekly. Without volume of new creative angles, you can't outrun fatigue on any account.",
  },
  {
    icon: "Users" as const,
    title: "Editors Cost More Than They Produce",
    description:
      "A junior editor at $5k/mo gives you maybe 20 cuts. You need an output engine, not another salary line you have to manage and train.",
  },
  {
    icon: "AlertTriangle" as const,
    title: "Churn Spikes When You Can't Show New Creative",
    description:
      "Clients churn the month after results dip. If you can't show 'here's what we're testing next' you're fighting churn instead of growing MRR.",
  },
];

const PAGE_TITLE = "Free Video Ads for Agencies";
const PAGE_DESCRIPTION =
  "Get 300 free video ads when you start a Prestyj plan from $1,997/mo. We set up the campaigns and our AI agents respond to every lead. Built for marketing agencies and media buyers.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
  },
};

export default function AgenciesFreeAdsPage() {
  const pageUrl = "https://prestyj.com/free-ads/agencies";

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          { name: "Free Ads for Agencies", url: pageUrl },
        ]}
      />
      <SafeJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Free Batch Video Ads for Marketing Agencies",
          description:
            "300 free scripted video ads for marketing agencies and media buyers. 24-hour turnaround from your footage. Includes ad setup, landing page, and AI lead response.",
          provider: { "@type": "Organization", name: "Prestyj", url: "https://prestyj.com" },
          serviceType: "Video Ad Production",
          areaServed: "United States",
        }}
      />
      <main className="min-h-screen">
        <IndustryHero
          industry="Marketing Agency"
          headline={PAGE_TITLE}
          ctaText="Get My FREE Agency Ads"
        />
        <IndustryPainPoints painPoints={AGENCY_PAIN_POINTS} ctaText="Get My FREE Agency Ads" />
        <SocialProof />
        <OfferBreakdown />
        <LeadForm />
        <FreeAdsFAQ />
      </main>
    </>
  );
}
