import type { Metadata } from "next";
import { IndustryHero } from "@/components/free-ads/industry-hero";
import { SocialProof } from "@/components/free-ads/social-proof";
import { OfferBreakdown } from "@/components/free-ads/offer-breakdown";
import { IndustryPainPoints } from "@/components/free-ads/industry-pain-points";
import { LeadForm } from "@/components/free-ads/lead-form";
import { FreeAdsFAQ } from "@/components/free-ads/faq-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";

const AGENT_PAIN_POINTS = [
  {
    icon: "Building2" as const,
    title: "Zillow Leads Cost a Fortune and Convert at 2%",
    description:
      "You're spending thousands on portal leads competing with 5 other agents on the same buyer. You need your OWN pipeline you actually control.",
  },
  {
    icon: "PhoneOff" as const,
    title: "Speed-to-Lead is Killing Your Conversion",
    description:
      "Studies show 78% of buyers go with the first agent who responds. If your follow-up is 30+ minutes, the deal is already gone.",
  },
  {
    icon: "TrendingDown" as const,
    title: "Boring Listing Ads Don't Get Saved",
    description:
      "Posting carousel listings is what every agent does. Without scroll-stopping creative you blend in and your CPL stays brutal.",
  },
  {
    icon: "AlertTriangle" as const,
    title: "Your Sphere is Forgetting You Exist",
    description:
      "Out of sight, out of mind. Without a steady stream of personal-brand video, your past clients send referrals to the agent posting daily.",
  },
];

const PAGE_TITLE = "Free Video Ads for Real Estate Agents";
const PAGE_DESCRIPTION =
  "Get 300 free video ads when you start a Prestyj plan from $1,997/mo. We set up the campaigns and our AI agents respond to every lead. Built for real estate agents and teams.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
    url: "https://prestyj.com/free-ads/real-estate-agents",
  },
  alternates: {
    canonical: "https://prestyj.com/free-ads/real-estate-agents",
  },
};

export default function RealEstateAgentsFreeAdsPage() {
  const pageUrl = "https://prestyj.com/free-ads/real-estate-agents";

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          { name: "Free Ads for Real Estate Agents", url: pageUrl },
        ]}
      />
      <SafeJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Free Batch Video Ads for Real Estate Agents",
          description:
            "300 free scripted video ads for real estate agents and teams. 24-hour turnaround from your footage. Includes ad setup, landing page, and AI lead response.",
          provider: { "@type": "Organization", name: "Prestyj", url: "https://prestyj.com" },
          serviceType: "Video Ad Production",
          areaServed: "United States",
        }}
      />
      <main className="min-h-screen">
        <IndustryHero
          industry="Real Estate"
          headline={PAGE_TITLE}
          ctaText="Get My FREE Real Estate Ads"
        />
        <IndustryPainPoints painPoints={AGENT_PAIN_POINTS} ctaText="Get My FREE Real Estate Ads" />
        <SocialProof />
        <OfferBreakdown />
        <LeadForm />
        <FreeAdsFAQ />
      </main>
    </>
  );
}
