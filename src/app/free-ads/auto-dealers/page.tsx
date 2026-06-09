import type { Metadata } from "next";
import { IndustryHero } from "@/components/free-ads/industry-hero";
import { SocialProof } from "@/components/free-ads/social-proof";
import { OfferBreakdown } from "@/components/free-ads/offer-breakdown";
import { IndustryPainPoints } from "@/components/free-ads/industry-pain-points";
import { LeadForm } from "@/components/free-ads/lead-form";
import { FreeAdsFAQ } from "@/components/free-ads/faq-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";

const DEALER_PAIN_POINTS = [
  {
    icon: "Car" as const,
    title: "Inventory Turns Faster Than Your Ads Can",
    description:
      "A new VIN hits the lot Monday — your ads still feature last month's stock. Without a 24-hr creative engine, every fresh unit sits longer than it should.",
  },
  {
    icon: "PhoneOff" as const,
    title: "BDC Misses the 5-Minute Lead Window",
    description:
      "Auto buyers shop 4 dealers in a single sitting. If your BDC doesn't text back inside 5 minutes, the customer is signing across town.",
  },
  {
    icon: "TrendingDown" as const,
    title: "Generic Inventory Carousels Get Ignored",
    description:
      "Slapping VINs into a carousel ad isn't creative. Without scroll-stopping vertical video, your CPL stays brutal and your gross-per-unit shrinks.",
  },
  {
    icon: "AlertTriangle" as const,
    title: "Manufacturer Co-Op Money Goes to Waste",
    description:
      "Co-op dollars expire if you can't produce qualifying creative fast enough. You need a backlog of compliant ads, ready to deploy by model.",
  },
];

const PAGE_TITLE = "Free Video Ads for Auto Dealers";
const PAGE_DESCRIPTION =
  "Get 300 free video ads when you start a Prestyj plan from $1,997/mo. We set up the campaigns and our AI agents respond to every lead. Built for auto dealerships and used-car lots.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "free video ads for auto dealers",
    "auto dealers advertising",
    "video ads for auto dealers",
    "auto dealers marketing",
    "free facebook ads auto dealers",
    "auto dealers lead generation",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
    url: "https://prestyj.com/free-ads/auto-dealers",
  },
  alternates: {
    canonical: "https://prestyj.com/free-ads/auto-dealers",
  },
};

export default function AutoDealersFreeAdsPage() {
  const pageUrl = "https://prestyj.com/free-ads/auto-dealers";

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          { name: "Free Ads for Auto Dealers", url: pageUrl },
        ]}
      />
      <SafeJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Free Batch Video Ads for Auto Dealers",
          description:
            "300 free scripted video ads for auto dealerships and used-car lots. 24-hour turnaround from your footage. Includes ad setup, landing page, and AI lead response.",
          provider: { "@type": "Organization", name: "Prestyj", url: "https://prestyj.com" },
          serviceType: "Video Ad Production",
          areaServed: "United States",
        }}
      />
      <main className="min-h-screen">
        <IndustryHero
          industry="Automotive"
          headline={PAGE_TITLE}
          ctaText="Get My FREE Dealership Ads"
        />
        <IndustryPainPoints painPoints={DEALER_PAIN_POINTS} ctaText="Get My FREE Dealership Ads" />
        <SocialProof />
        <OfferBreakdown />
        <LeadForm />
        <FreeAdsFAQ />
      </main>
    </>
  );
}
