import type { Metadata } from "next";
import { IndustryHero } from "@/components/free-ads/industry-hero";
import { SocialProof } from "@/components/free-ads/social-proof";
import { OfferBreakdown } from "@/components/free-ads/offer-breakdown";
import { IndustryPainPoints } from "@/components/free-ads/industry-pain-points";
import { LeadForm } from "@/components/free-ads/lead-form";
import { FreeAdsFAQ } from "@/components/free-ads/faq-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";

const LAW_PAIN_POINTS = [
  {
    icon: "Scale" as const,
    title: "PI & Mass Tort Lead Costs Are Out of Control",
    description:
      "You're paying $500+ per signed case through Google LSAs and lead vendors. You need your own creative-driven pipeline before margins disappear.",
  },
  {
    icon: "PhoneOff" as const,
    title: "Intake Drops Cases That Should Have Signed",
    description:
      "A lead waits 20 minutes for a callback — and signs with the firm that texted back instantly. Speed-to-lead decides every retainer.",
  },
  {
    icon: "TrendingDown" as const,
    title: "Billboard-Style Ads Don't Work on Reels",
    description:
      "The same 'injured? call now' ad in vertical video bombs. You need short-form creative angles built for the feed, not for highway 95.",
  },
  {
    icon: "AlertTriangle" as const,
    title: "Bar Compliance Limits What You Can Say",
    description:
      "State bar restrictions kill aggressive creative. Without a wide library of compliant variations, you've got nothing to test when one gets pulled.",
  },
];

const PAGE_TITLE = "Free Video Ads for Law Firms";
const PAGE_DESCRIPTION =
  "Get 300 free video ads when you start a Prestyj plan from $1,997/mo. We set up the campaigns and our AI agents respond to every lead. Built for law firms.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
  },
};

export default function LawFirmsFreeAdsPage() {
  const pageUrl = "https://prestyj.com/free-ads/law-firms";

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          { name: "Free Ads for Law Firms", url: pageUrl },
        ]}
      />
      <SafeJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Free Batch Video Ads for Law Firms",
          description:
            "300 free scripted video ads for law firms. 24-hour turnaround from your footage. Includes ad setup, landing page, and AI lead response.",
          provider: { "@type": "Organization", name: "Prestyj", url: "https://prestyj.com" },
          serviceType: "Video Ad Production",
          areaServed: "United States",
        }}
      />
      <main className="min-h-screen">
        <IndustryHero industry="Legal" headline={PAGE_TITLE} ctaText="Get My FREE Legal Ads" />
        <IndustryPainPoints painPoints={LAW_PAIN_POINTS} ctaText="Get My FREE Legal Ads" />
        <SocialProof />
        <OfferBreakdown />
        <LeadForm />
        <FreeAdsFAQ />
      </main>
    </>
  );
}
