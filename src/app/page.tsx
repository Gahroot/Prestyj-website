import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroDemoSection } from "@/components/sections/hero-demo";
import { SpeedToLeadSection } from "@/components/sections/speed-to-lead";
import { PainPointsSection } from "@/components/sections/pain-points";
import { SolutionSection } from "@/components/sections/solution";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { PricingSection } from "@/components/sections/pricing";
import { FAQSection } from "@/components/sections/faq";
import { faqs } from "@/lib/faq-data";
import { CTASection } from "@/components/sections/cta";
import {
  OrganizationJsonLd,
  WebSiteJsonLd,
  ProductJsonLd,
  FAQJsonLd,
  SoftwareApplicationJsonLd,
} from "@/components/seo/json-ld";

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
