import type { Metadata } from "next";
import { IndustryHero } from "@/components/free-ads/industry-hero";
import { SocialProof } from "@/components/free-ads/social-proof";
import { OfferBreakdown } from "@/components/free-ads/offer-breakdown";
import { IndustryPainPoints } from "@/components/free-ads/industry-pain-points";
import { LeadForm } from "@/components/free-ads/lead-form";
import { FreeAdsFAQ } from "@/components/free-ads/faq-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";

const SOLAR_PAIN_POINTS = [
  {
    icon: "Sun" as const,
    title: "Lead Costs Are Wrecking Your Unit Economics",
    description:
      "$150+ per solar lead, half of them not homeowners, and your closers are burning out on bad lists. The math doesn't work without better creative.",
  },
  {
    icon: "PhoneOff" as const,
    title: "5-Minute Follow-Up Window or You Lose the Deal",
    description:
      "Solar buyers shop 4–6 installers in a single afternoon. If your first text takes 30 minutes, you're not even in the running.",
  },
  {
    icon: "TrendingDown" as const,
    title: "'Save With Solar' Ads All Look Identical",
    description:
      "Every installer in your zip runs the same stock-footage 'cut your bill' ad. Without fresh angles, you fight on price — and lose.",
  },
  {
    icon: "AlertTriangle" as const,
    title: "Compliance Restrictions Kill Half Your Creative",
    description:
      "Special-ad-category rules nuke geo + age targeting. Without a deep library of compliant creative, you can't iterate when an ad gets rejected.",
  },
];

const PAGE_TITLE = "Free Video Ads for Solar Companies";
const PAGE_DESCRIPTION =
  "Get 300 free video ads when you start a Prestyj plan from $1,997/mo. We set up the campaigns and our AI agents respond to every lead. Built for solar installers.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
  },
};

export default function SolarCompaniesFreeAdsPage() {
  const pageUrl = "https://prestyj.com/free-ads/solar-companies";

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          { name: "Free Ads for Solar Companies", url: pageUrl },
        ]}
      />
      <SafeJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Free Batch Video Ads for Solar Companies",
          description:
            "300 free scripted video ads for solar installers. 24-hour turnaround from your footage. Includes ad setup, landing page, and AI lead response.",
          provider: { "@type": "Organization", name: "Prestyj", url: "https://prestyj.com" },
          serviceType: "Video Ad Production",
          areaServed: "United States",
        }}
      />
      <main className="min-h-screen">
        <IndustryHero industry="Solar" headline={PAGE_TITLE} ctaText="Get My FREE Solar Ads" />
        <IndustryPainPoints painPoints={SOLAR_PAIN_POINTS} ctaText="Get My FREE Solar Ads" />
        <SocialProof />
        <OfferBreakdown />
        <LeadForm />
        <FreeAdsFAQ />
      </main>
    </>
  );
}
