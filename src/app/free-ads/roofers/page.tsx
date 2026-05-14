import type { Metadata } from "next";
import { IndustryHero } from "@/components/free-ads/industry-hero";
import { pricingTiers } from "@/lib/pricing-data";
import { SocialProof } from "@/components/free-ads/social-proof";
import { OfferBreakdown } from "@/components/free-ads/offer-breakdown";
import { IndustryPainPoints } from "@/components/free-ads/industry-pain-points";
import { LeadForm } from "@/components/free-ads/lead-form";
import { FreeAdsFAQ } from "@/components/free-ads/faq-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";

const ROOFER_PAIN_POINTS = [
  {
    icon: "CloudLightning" as const,
    title: "Storm Season Doesn't Wait for Your Marketing",
    description:
      "When that hail storm hits, you need to be live with ads NOW. Waiting a week to launch means you missed the window.",
  },
  {
    icon: "PhoneOff" as const,
    title: "Every Missed Call is a $15K Job Gone",
    description:
      "A roof replacement is high-ticket. One missed storm damage call could have paid your marketing budget for a month.",
  },
  {
    icon: "TrendingDown" as const,
    title: "Competition is Fierce After Storms",
    description:
      "Every roofer in town is running the same 'we fix storm damage' ads. Without volume, you get buried.",
  },
  {
    icon: "AlertTriangle" as const,
    title: "Insurance Claims Require Speed",
    description:
      "Homeowners call the first roofer who answers. If you're not responding in under 5 minutes, you're not getting the job.",
  },
];

export const metadata: Metadata = {
  title: "300 Free Video Ads for Roofing Companies | PRESTYJ",
  description:
    "What if you had 300 video ads running by next week? We'll create them for free. You just send the footage. 24-hour turnaround. Storm season ready.",
  openGraph: {
    title: "300 Free Video Ads for Roofing Companies | PRESTYJ",
    description:
      "What if you had 300 video ads running by next week? We'll create them for free. Storm season ready.",
    type: "website",
  },
};

export default function RoofersFreeAdsPage() {
  const pageUrl = "https://prestyj.com/free-ads/roofers";

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          { name: "Free Ads for Roofers", url: pageUrl },
        ]}
      />
      <SafeJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Free Batch Video Ads for Roofers",
          description:
            "300 free scripted video ads for roofing companies. 24-hour turnaround from your footage. Storm season ready with ad setup, landing page, and AI lead response.",
          provider: { "@type": "Organization", name: "PRESTYJ", url: "https://prestyj.com" },
          serviceType: "Video Ad Production",
          areaServed: "United States",
        }}
      />
      <main className="min-h-screen">
        <IndustryHero
          industry="Roofing"
          headline={`300 Free Storm-Ready Video Ads When You Start a Prestyj Plan from $${pricingTiers.find((t) => t.id === "starter")?.monthlyPrice.toLocaleString("en-US")}/mo.`}
          ctaText="Get My FREE Roofing Ads"
        />
        <IndustryPainPoints painPoints={ROOFER_PAIN_POINTS} ctaText="Get My FREE Roofing Ads" />
        <SocialProof />
        <OfferBreakdown />
        <LeadForm />
        <FreeAdsFAQ />
      </main>
    </>
  );
}
