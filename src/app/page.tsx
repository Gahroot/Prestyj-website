import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BatchAdsHeroSection } from "@/components/sections/batch-ads-hero";
import { faqs } from "@/lib/faq-data";
import {
  OrganizationJsonLd,
  WebSiteJsonLd,
  ProductJsonLd,
  FAQJsonLd,
  SoftwareApplicationJsonLd,
  ServiceJsonLd,
} from "@/components/seo/json-ld";

const BatchVideoAdsCTASection = dynamic(
  () => import("@/components/sections/batch-video-ads-cta").then((m) => m.BatchVideoAdsCTASection),
  { ssr: true },
);
const HowItWorksSection = dynamic(
  () => import("@/components/sections/how-it-works").then((m) => m.HowItWorksSection),
  { ssr: true },
);
const TestimonialsSection = dynamic(
  () => import("@/components/sections/testimonials").then((m) => m.TestimonialsSection),
  { ssr: true },
);
const PricingSection = dynamic(
  () => import("@/components/sections/pricing").then((m) => m.PricingSection),
  { ssr: true },
);
const PainPointsSection = dynamic(
  () => import("@/components/sections/pain-points").then((m) => m.PainPointsSection),
  { ssr: true },
);
const SolutionSection = dynamic(
  () => import("@/components/sections/solution").then((m) => m.SolutionSection),
  { ssr: true },
);
const FAQSection = dynamic(
  () => import("@/components/sections/faq").then((m) => m.FAQSection),
  { ssr: true },
);
const CTASection = dynamic(
  () => import("@/components/sections/cta").then((m) => m.CTASection),
  { ssr: true },
);

export const metadata: Metadata = {
  title: "Prestyj | Batch Video Ads for Service Businesses — 300+ Ads in 24 Hours",
  description:
    "Find your winning ad in a week, not six months. 300+ scripted vertical video ads from one 15-minute recording, delivered in 24 hours — built for service businesses that need more clients and want real data on what converts.",
  keywords: [
    "batch video ads",
    "service business video ads",
    "video ad creative testing",
    "scripted video ads",
    "vertical video ads for service businesses",
    "meta ad creative at scale",
    "facebook video ads batch",
    "tiktok ad variations",
    "ad creative research",
    "ugc video ads productized",
    "video ads for realtors",
    "video ads for contractors",
    "video ads for agencies",
    "ad hook testing",
    "positioning research video ads",
  ],
  openGraph: {
    title: "Prestyj | Batch Video Ads for Service Businesses — 300+ Ads in 24 Hours",
    description:
      "300+ scripted video ads from one 15-minute recording, shipped in 24 hours. Find your winning hook this week.",
    type: "website",
    url: "https://prestyj.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prestyj | Batch Video Ads for Service Businesses — 300+ Ads in 24 Hours",
    description:
      "300+ scripted video ads from one 15-minute recording, shipped in 24 hours. Find your winning hook this week.",
  },
  alternates: {
    canonical: "https://prestyj.com",
  },
};

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <ProductJsonLd />
      <SoftwareApplicationJsonLd />
      <ServiceJsonLd />
      <FAQJsonLd faqs={faqs} />
      <Navbar />
      <main>
        <BatchAdsHeroSection />
        <BatchVideoAdsCTASection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
        <PainPointsSection />
        <SolutionSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
