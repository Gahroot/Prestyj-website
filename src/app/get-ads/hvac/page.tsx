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
    description: "Summer AC breakdowns or winter heating failures — you're buried in calls and can't keep up. Opportunities slipping away.",
  },
  {
    icon: "PhoneOff" as const,
    title: "After-Hours Calls Go to Voicemail",
    description: "HVAC emergencies don't follow business hours. Every missed call is a $5,000+ replacement job going to someone else.",
  },
  {
    icon: "TrendingDown" as const,
    title: "Same Old Ads = Same Declining Results",
    description: "Your ad performance has been dropping for months. You need fresh creative to cut through the noise in peak season.",
  },
  {
    icon: "AlertTriangle" as const,
    title: "Can't Respond Fast Enough to Win",
    description: "Studies show the first responder wins 78% of HVAC jobs. If you're not texting back in under 5 minutes, you're losing.",
  },
];

export const metadata: Metadata = {
  title: "300 Free Video Ads for HVAC Companies | PRESTYJ",
  description:
    "What if you had 300 video ads running by next week? We'll create them for free. You just send the footage. 24-hour turnaround. Exclusively for HVAC contractors.",
  openGraph: {
    title: "300 Free Video Ads for HVAC Companies | PRESTYJ",
    description:
      "What if you had 300 video ads running by next week? We'll create them for free. You just send the footage.",
    type: "website",
  },
};

export default function HVACFreeAdsPage() {
  const pageUrl = "https://prestyj.com/get-ads/hvac";

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          { name: "Batch Video Ads for HVAC Companies", url: pageUrl },
        ]}
      />
      <SafeJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Batch Video Ads for HVAC Companies",
          description:
            "Batch scripted video ads for HVAC companies. 24-hour turnaround from your footage. Includes ad setup, landing page, and AI lead response.",
          provider: { "@type": "Organization", name: "PRESTYJ", url: "https://prestyj.com" },
          serviceType: "Video Ad Production",
          areaServed: "United States",
        }}
      />
      <main className="min-h-screen">
      <IndustryHero
        industry="HVAC"
        headline="What If You Had 300 Video Ads Running By Next Week?"
        subheadline="We send you the scripts and help you film. Just stand in front of the camera and read."
        description="I'll give you 300 video ads for free. In exchange, I want to run them for you — I'll set up the ads, build the landing page, and have AI respond to every lead in seconds. You pay the ad spend ($1k/mo minimum) and a setup fee. If it doesn't work, you keep the ads and we part ways."
        ctaText="Get My FREE HVAC Ads"
      />
      <IndustryPainPoints painPoints={HVAC_PAIN_POINTS} ctaText="Get My FREE HVAC Ads" />
      <SocialProof />
      <OfferBreakdown />
      <LeadForm />
      <FreeAdsFAQ />
      </main>
    </>
  );
}
