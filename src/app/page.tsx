import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HomeHeroSection } from "@/components/sections/home-hero";
import { faqs } from "@/lib/faq-data";
import {
  ProductJsonLd,
  FAQJsonLd,
  SoftwareApplicationJsonLd,
  ServiceJsonLd,
} from "@/components/seo/json-ld";

const StatisticsSection = dynamic(
  () => import("@/components/sections/statistics").then((m) => m.StatisticsSection),
  { ssr: true },
);
const HowItWorksSection = dynamic(
  () => import("@/components/sections/how-it-works").then((m) => m.HowItWorksSection),
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
const FAQSection = dynamic(() => import("@/components/sections/faq").then((m) => m.FAQSection), {
  ssr: true,
});
const CTASection = dynamic(() => import("@/components/sections/cta").then((m) => m.CTASection), {
  ssr: true,
});
const BatchVideoAdsFeatureSection = dynamic(
  () =>
    import("@/components/sections/landing/batch-video-ads-feature").then(
      (m) => m.BatchVideoAdsFeatureSection,
    ),
  { ssr: true },
);

export const metadata: Metadata = {
  title: "Prestyj | AI Agents for Marketing & Sales",
  description:
    "100 video ads for $497, delivered in 24 hours. Scale to 300, 500, or 1,000 anytime. Built for anyone running paid ads.",
  keywords: [
    "AI sales agent",
    "AI marketing agent",
    "AI agents for business",
    "AI lead response",
    "AI appointment setter",
    "AI marketing automation",
    "AI sales automation",
    "AI lead generation",
    "AI inbound sales",
    "AI outbound sales",
    "AI sales assistant",
    "AI marketing assistant",
    "AI sales platform",
    "AI marketing platform",
    "AI agents",
  ],
  openGraph: {
    title: "Prestyj | AI Agents for Marketing & Sales",
    description:
      "100 video ads for $497, delivered in 24 hours. Scale to 300, 500, or 1,000 anytime. Built for anyone running paid ads.",
    type: "website",
    url: "https://prestyj.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prestyj | AI Agents for Marketing & Sales",
    description:
      "100 video ads for $497, delivered in 24 hours. Scale to 300, 500, or 1,000 anytime. Built for anyone running paid ads.",
  },
  alternates: {
    canonical: "https://prestyj.com",
  },
};

export default function Home() {
  return (
    <>
      <ProductJsonLd />
      <SoftwareApplicationJsonLd />
      <ServiceJsonLd />
      <FAQJsonLd faqs={faqs} />
      <Navbar />
      <main>
        <HomeHeroSection />
        <PainPointsSection />
        <SolutionSection />
        <HowItWorksSection />
        <StatisticsSection />
        <BatchVideoAdsFeatureSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
