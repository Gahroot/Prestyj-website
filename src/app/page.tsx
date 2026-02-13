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
  title: "Prestyj | AI Sales Agents & Automated Appointment Setting for Service Businesses",
  description:
    "Deploy AI agents that qualify leads and book appointments 24/7. Prestyj responds to every lead in under 60 seconds for real estate, home services, and high-growth service businesses. No salary. No commission splits.",
  keywords: [
    "AI sales agent",
    "service business automation",
    "AI receptionist",
    "home services AI",
    "contractor lead response",
    "AI appointment booking",
    "missed call text back",
    "AI workforce",
    "lead response automation",
    "speed to lead",
    "lead qualification",
    "real estate AI",
  ],
  openGraph: {
    title: "Prestyj | AI Sales Agents & Automated Appointment Setting for Service Businesses",
    description:
      "Deploy AI agents that qualify leads and book appointments 24/7. Responds to every lead in under 60 seconds for real estate, home services, and high-growth service businesses.",
    type: "website",
    url: "https://prestyj.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prestyj | AI Sales Agents & Automated Appointment Setting for Service Businesses",
    description:
      "Deploy AI agents that qualify leads and book appointments 24/7. Responds to every lead in under 60 seconds for real estate, home services, and high-growth service businesses.",
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
