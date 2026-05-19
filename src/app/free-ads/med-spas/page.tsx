import type { Metadata } from "next";
import { IndustryHero } from "@/components/free-ads/industry-hero";
import { SocialProof } from "@/components/free-ads/social-proof";
import { OfferBreakdown } from "@/components/free-ads/offer-breakdown";
import { IndustryPainPoints } from "@/components/free-ads/industry-pain-points";
import { LeadForm } from "@/components/free-ads/lead-form";
import { FreeAdsFAQ } from "@/components/free-ads/faq-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";

const MEDSPA_PAIN_POINTS = [
  {
    icon: "Sparkles" as const,
    title: "Ad Accounts Get Flagged Every Other Week",
    description:
      "Meta hates before-and-afters and 'body part' targeting. Half your ads get rejected — and you have no backlog of compliant creative ready to go.",
  },
  {
    icon: "TrendingDown" as const,
    title: "Botox & Filler Ads All Look the Same",
    description:
      "Same generic injector b-roll, same '$9/unit' offer. Without fresh creative angles you blend in and your booking cost keeps climbing.",
  },
  {
    icon: "PhoneOff" as const,
    title: "Leads Don't Book Without Instant Follow-Up",
    description:
      "Med spa buyers are emotional. If you don't text back inside 5 minutes with social proof, the moment passes and they don't reschedule.",
  },
  {
    icon: "AlertTriangle" as const,
    title: "Your Slow Days Have Empty Treatment Rooms",
    description:
      "An idle injector is pure margin lost. You need a creative engine that fills last-minute slots, not a quarterly campaign push.",
  },
];

const PAGE_TITLE = "Free Video Ads for Med Spas";
const PAGE_DESCRIPTION =
  "Get 300 free video ads when you start a Prestyj plan from $1,997/mo. We set up the campaigns and our AI agents respond to every lead. Built for med spas and aesthetics clinics.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
    url: "https://prestyj.com/free-ads/med-spas",
  },
  alternates: {
    canonical: "https://prestyj.com/free-ads/med-spas",
  },
};

export default function MedSpasFreeAdsPage() {
  const pageUrl = "https://prestyj.com/free-ads/med-spas";

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          { name: "Free Ads for Med Spas", url: pageUrl },
        ]}
      />
      <SafeJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Free Batch Video Ads for Med Spas",
          description:
            "300 free scripted video ads for med spas and aesthetics clinics. 24-hour turnaround from your footage. Includes ad setup, landing page, and AI lead response.",
          provider: { "@type": "Organization", name: "Prestyj", url: "https://prestyj.com" },
          serviceType: "Video Ad Production",
          areaServed: "United States",
        }}
      />
      <main className="min-h-screen">
        <IndustryHero industry="Med Spa" headline={PAGE_TITLE} ctaText="Get My FREE Med Spa Ads" />
        <IndustryPainPoints painPoints={MEDSPA_PAIN_POINTS} ctaText="Get My FREE Med Spa Ads" />
        <SocialProof />
        <OfferBreakdown />
        <LeadForm />
        <FreeAdsFAQ />
      </main>
    </>
  );
}
