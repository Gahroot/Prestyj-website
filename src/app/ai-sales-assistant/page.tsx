import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroDemoSection } from "@/components/sections/hero-demo";
import { faqs } from "@/lib/faq-data";
import {
  OrganizationJsonLd,
  WebSiteJsonLd,
  ProductJsonLd,
  FAQJsonLd,
  SoftwareApplicationJsonLd,
  ServiceJsonLd,
} from "@/components/seo/json-ld";

const SpeedToLeadSection = dynamic(
  () => import("@/components/sections/speed-to-lead").then((m) => m.SpeedToLeadSection),
  { ssr: true },
);
const BatchVideoAdsCTASection = dynamic(
  () => import("@/components/sections/batch-video-ads-cta").then((m) => m.BatchVideoAdsCTASection),
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
const FAQSection = dynamic(
  () => import("@/components/sections/faq").then((m) => m.FAQSection),
  { ssr: true },
);
const CTASection = dynamic(
  () => import("@/components/sections/cta").then((m) => m.CTASection),
  { ssr: true },
);

export const metadata: Metadata = {
  title: "Prestyj | AI Sales Assistant for Real Estate Teams & Brokerages",
  description:
    "Prestyj gives real estate teams and brokerages a dedicated AI team member that responds to leads in under 60 seconds, qualifies buyers and sellers, and books appointments 24/7. Built for team leaders who run ads and think like business owners.",
  keywords: [
    "real estate AI assistant",
    "AI lead follow-up real estate",
    "speed to lead real estate",
    "real estate team automation",
    "brokerage lead conversion",
    "AI ISA replacement",
    "real estate lead response",
    "AI team member real estate",
    "real estate appointment booking",
    "lead conversion real estate",
    "real estate CRM automation",
    "Follow Up Boss AI",
    "real estate team leader tools",
    "brokerage automation",
    "AI sales assistant real estate",
  ],
  openGraph: {
    title: "Prestyj | AI Sales Assistant for Real Estate Teams & Brokerages",
    description:
      "Prestyj gives real estate teams and brokerages a dedicated AI team member that responds to leads in under 60 seconds, qualifies buyers and sellers, and books appointments 24/7. Built for team leaders who run ads and think like business owners.",
    type: "website",
    url: "https://prestyj.com/ai-sales-assistant",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prestyj | AI Sales Assistant for Real Estate Teams & Brokerages",
    description:
      "Prestyj gives real estate teams and brokerages a dedicated AI team member that responds to leads in under 60 seconds, qualifies buyers and sellers, and books appointments 24/7. Built for team leaders who run ads and think like business owners.",
  },
  alternates: {
    canonical: "https://prestyj.com/ai-sales-assistant",
  },
};

export default function AiSalesAssistantPage() {
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
        <HeroDemoSection />
        <BatchVideoAdsCTASection />
        <SpeedToLeadSection />
        <PainPointsSection />
        <SolutionSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
