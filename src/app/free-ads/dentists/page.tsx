import type { Metadata } from "next";
import { IndustryHero } from "@/components/free-ads/industry-hero";
import { SocialProof } from "@/components/free-ads/social-proof";
import { OfferBreakdown } from "@/components/free-ads/offer-breakdown";
import { IndustryPainPoints } from "@/components/free-ads/industry-pain-points";
import { LeadForm } from "@/components/free-ads/lead-form";
import { FreeAdsFAQ } from "@/components/free-ads/faq-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";

const DENTIST_PAIN_POINTS = [
  {
    icon: "Smile" as const,
    title: "Implant & Invisalign Leads Cost a Fortune",
    description:
      "You're paying $200+ per lead just to fill the chair. High-ticket cases are the only way the math works — and they're not coming in.",
  },
  {
    icon: "PhoneOff" as const,
    title: "Leads Ghost Before They Ever Book",
    description:
      "Your team calls back hours later. By then, the patient has already scheduled with a competitor who texted them in 60 seconds.",
  },
  {
    icon: "TrendingDown" as const,
    title: "Generic 'Free Consult' Ads Are Played Out",
    description:
      "Every dental office runs the same offer. Without fresh creative angles, your ads blend into the feed and your CPL keeps climbing.",
  },
  {
    icon: "AlertTriangle" as const,
    title: "Your Hygiene Schedule Has Empty Slots",
    description:
      "Same-week openings are revenue you'll never recover. You need a fill-the-chair system, not another quarterly marketing push.",
  },
];

const PAGE_TITLE = "Free Video Ads for Dentists";
const PAGE_DESCRIPTION =
  "Get 300 free video ads when you start a Prestyj plan from $1,997/mo. We set up the campaigns and our AI agents respond to every lead. Built for dental practices.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "free video ads for dentists",
    "dentists advertising",
    "video ads for dentists",
    "dentists marketing",
    "free facebook ads dentists",
    "dentists lead generation",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
    url: "https://prestyj.com/free-ads/dentists",
  },
  alternates: {
    canonical: "https://prestyj.com/free-ads/dentists",
  },
};

export default function DentistsFreeAdsPage() {
  const pageUrl = "https://prestyj.com/free-ads/dentists";

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          { name: "Free Ads for Dentists", url: pageUrl },
        ]}
      />
      <SafeJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Free Batch Video Ads for Dentists",
          description:
            "300 free scripted video ads for dental practices. 24-hour turnaround from your footage. Includes ad setup, landing page, and AI lead response.",
          provider: { "@type": "Organization", name: "Prestyj", url: "https://prestyj.com" },
          serviceType: "Video Ad Production",
          areaServed: "United States",
        }}
      />
      <main className="min-h-screen">
        <IndustryHero industry="Dental" headline={PAGE_TITLE} ctaText="Get My FREE Dental Ads" />
        <IndustryPainPoints painPoints={DENTIST_PAIN_POINTS} ctaText="Get My FREE Dental Ads" />
        <SocialProof />
        <OfferBreakdown />
        <LeadForm />
        <FreeAdsFAQ />
      </main>
    </>
  );
}
