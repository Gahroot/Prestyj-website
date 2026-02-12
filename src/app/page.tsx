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
} from "@/components/seo/json-ld";

const SpeedToLeadSection = dynamic(
  () => import("@/components/sections/speed-to-lead").then((m) => m.SpeedToLeadSection),
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
  title: "PRESTYJ - AI Sales Agents for Real Estate | 24/7 Lead Response",
  description:
    "PRESTYJ AI Sales Agents respond to leads in under 60 seconds, qualify prospects, and book appointments 24/7. Increase conversion rates by 391% with instant lead engagement for real estate teams.",
  keywords: [
    "AI sales agent",
    "real estate AI",
    "lead response automation",
    "ISA replacement",
    "speed to lead",
    "lead qualification",
    "appointment booking",
    "real estate lead conversion",
  ],
  openGraph: {
    title: "PRESTYJ - AI Sales Agents for Real Estate",
    description:
      "Respond to leads in under 60 seconds. Qualify prospects and book appointments 24/7 with AI-powered sales agents.",
    type: "website",
    url: "https://prestyj.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "PRESTYJ - AI Sales Agents for Real Estate",
    description:
      "Respond to leads in under 60 seconds. Qualify prospects and book appointments 24/7.",
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
      <FAQJsonLd faqs={faqs} />
      <Navbar />
      <main>
        <HeroDemoSection />
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
