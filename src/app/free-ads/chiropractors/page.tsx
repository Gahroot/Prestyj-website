import type { Metadata } from "next";
import { IndustryHero } from "@/components/free-ads/industry-hero";
import { SocialProof } from "@/components/free-ads/social-proof";
import { OfferBreakdown } from "@/components/free-ads/offer-breakdown";
import { IndustryPainPoints } from "@/components/free-ads/industry-pain-points";
import { LeadForm } from "@/components/free-ads/lead-form";
import { FreeAdsFAQ } from "@/components/free-ads/faq-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";

const CHIROPRACTOR_PAIN_POINTS = [
  {
    icon: "Activity" as const,
    title: "New-Patient Pipeline Goes Dry Every Quarter",
    description:
      "Your existing patients love you, but reactivation only goes so far. You need a steady stream of new-patient leads — not another seasonal slump.",
  },
  {
    icon: "PhoneOff" as const,
    title: "Front Desk Can't Keep Up With Inquiries",
    description:
      "Ads run, leads come in, and half of them never get a callback. By the time you respond, they've booked with the chiropractor down the street.",
  },
  {
    icon: "TrendingDown" as const,
    title: "Same Boring 'Back Pain' Ads Stopped Working",
    description:
      "Every chiro in town runs the same stock-photo back-pain ad. You're invisible — and your cost per booked exam keeps climbing.",
  },
  {
    icon: "AlertTriangle" as const,
    title: "Free Adjustment Offers Attract Tire-Kickers",
    description:
      "Lowering the offer brings unqualified leads who never convert into a care plan. You need creative that pre-qualifies, not just clicks.",
  },
];

const PAGE_TITLE = "Free Video Ads for Chiropractors";
const PAGE_DESCRIPTION =
  "Get 300 free video ads when you start a Prestyj plan from $1,997/mo. We set up the campaigns and our AI agents respond to every lead. Built for chiropractors.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "free video ads for chiropractors",
    "chiropractors advertising",
    "video ads for chiropractors",
    "chiropractors marketing",
    "free facebook ads chiropractors",
    "chiropractors lead generation",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
    url: "https://prestyj.com/free-ads/chiropractors",
  },
  alternates: {
    canonical: "https://prestyj.com/free-ads/chiropractors",
  },
};

export default function ChiropractorsFreeAdsPage() {
  const pageUrl = "https://prestyj.com/free-ads/chiropractors";

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          { name: "Free Ads for Chiropractors", url: pageUrl },
        ]}
      />
      <SafeJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Free Batch Video Ads for Chiropractors",
          description:
            "300 free scripted video ads for chiropractic clinics. 24-hour turnaround from your footage. Includes ad setup, landing page, and AI lead response.",
          provider: { "@type": "Organization", name: "Prestyj", url: "https://prestyj.com" },
          serviceType: "Video Ad Production",
          areaServed: "United States",
        }}
      />
      <main className="min-h-screen">
        <IndustryHero
          industry="Chiropractic"
          headline={PAGE_TITLE}
          ctaText="Get My FREE Chiropractic Ads"
        />
        <IndustryPainPoints
          painPoints={CHIROPRACTOR_PAIN_POINTS}
          ctaText="Get My FREE Chiropractic Ads"
        />
        <SocialProof />
        <OfferBreakdown />
        <LeadForm />
        <FreeAdsFAQ />
      </main>
    </>
  );
}
