import type { Metadata } from "next";
import { IndustryHero } from "@/components/free-ads/industry-hero";
import { SocialProof } from "@/components/free-ads/social-proof";
import { OfferBreakdown } from "@/components/free-ads/offer-breakdown";
import { IndustryPainPoints } from "@/components/free-ads/industry-pain-points";
import { LeadForm } from "@/components/free-ads/lead-form";
import { FreeAdsFAQ } from "@/components/free-ads/faq-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";

const HVAC_PAIN_POINTS = [
  {
    icon: "Thermometer" as const,
    title: "Seasonal Rushes Leave You Overwhelmed",
    description:
      "Summer AC breakdowns or winter heating failures — you're buried in calls and can't keep up. Opportunities slipping away.",
  },
  {
    icon: "PhoneOff" as const,
    title: "After-Hours Calls Go to Voicemail",
    description:
      "HVAC emergencies don't follow business hours. Every missed call is a $5,000+ replacement job going to someone else.",
  },
  {
    icon: "TrendingDown" as const,
    title: "Same Old Ads = Same Declining Results",
    description:
      "Your ad performance has been dropping for months. You need fresh creative to cut through the noise in peak season.",
  },
  {
    icon: "AlertTriangle" as const,
    title: "Can't Respond Fast Enough to Win",
    description:
      "Studies show the first responder wins 78% of HVAC jobs. If you're not texting back in under 5 minutes, you're losing.",
  },
];

export const metadata: Metadata = {
  title: "300 Free Video Ads for HVAC Companies",
  description:
    "300 free video ads for HVAC companies when you start a Prestyj plan. Part of our AI agents for marketing & sales — 24-hour turnaround from one recording session.",
  openGraph: {
    title: "300 Free Video Ads for HVAC Companies",
    description:
      "300 free video ads for HVAC companies when you start a Prestyj plan. Part of our AI agents for marketing & sales.",
    type: "website",
  },
};

export default function HVACFreeAdsPage() {
  const pageUrl = "https://prestyj.com/free-ads/hvac";

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          { name: "Free Ads for HVAC Companies", url: pageUrl },
        ]}
      />
      <SafeJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Free Batch Video Ads for HVAC Companies",
          description:
            "300 free scripted video ads for HVAC companies. 24-hour turnaround from your footage. Includes ad setup, landing page, and AI lead response.",
          provider: { "@type": "Organization", name: "Prestyj", url: "https://prestyj.com" },
          serviceType: "Video Ad Production",
          areaServed: "United States",
        }}
      />
      <main className="min-h-screen">
        <IndustryHero industry="HVAC" ctaText="Get My FREE HVAC Ads" />
        <IndustryPainPoints painPoints={HVAC_PAIN_POINTS} ctaText="Get My FREE HVAC Ads" />
        <SocialProof />
        <OfferBreakdown />
        <LeadForm />
        <FreeAdsFAQ />
      </main>
    </>
  );
}
