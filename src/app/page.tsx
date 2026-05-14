import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BatchAdsHeroSection } from "@/components/sections/batch-ads-hero";
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
const FAQSection = dynamic(() => import("@/components/sections/faq").then((m) => m.FAQSection), {
  ssr: true,
});
const CTASection = dynamic(() => import("@/components/sections/cta").then((m) => m.CTASection), {
  ssr: true,
});

export const metadata: Metadata = {
  title: "Prestyj | AI Agents for Marketing & Sales",
  description:
    "We build AI agents that run your marketing and sales — capture leads, respond in seconds, qualify, and book meetings 24/7.",
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
      "We build AI agents that run your marketing and sales — capture leads, respond in seconds, qualify, and book meetings 24/7.",
    type: "website",
    url: "https://prestyj.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prestyj | AI Agents for Marketing & Sales",
    description:
      "We build AI agents that run your marketing and sales — capture leads, respond in seconds, qualify, and book meetings 24/7.",
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
        <BatchAdsHeroSection />
        <BatchVideoAdsCTASection />
        <HowItWorksSection />
        <TestimonialsSection />
        <StatisticsSection />
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
