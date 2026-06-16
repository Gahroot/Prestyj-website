import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { FAQJsonLd, ServiceJsonLd, SoftwareApplicationJsonLd } from "@/components/seo/json-ld";
import { AiCapabilitiesSection } from "@/components/sections/homepage/ai-capabilities-section";
import { AiConciergeHero } from "@/components/sections/homepage/ai-concierge-hero";
import { HomepageFaqSection } from "@/components/sections/homepage/homepage-faq-section";
import { HomepageFinalCta } from "@/components/sections/homepage/homepage-final-cta";
import { ShippedProductsSection } from "@/components/sections/homepage/shipped-products-section";
import { VideoMachineSection } from "@/components/sections/homepage/video-machine-section";
import { homepageFaqs } from "@/lib/homepage-faq-data";

export const metadata: Metadata = {
  title: "Prestyj | Custom AI Agents, Voice Agents & Automation",
  description:
    "Prestyj builds custom AI agents, voice agents, sales and receptionist workflows, marketing and content systems, internal automation, and AI software for businesses.",
  keywords: [
    "custom AI agents",
    "AI voice agents",
    "AI automation",
    "AI sales agents",
    "AI receptionist",
    "AI marketing agents",
    "AI content department",
    "coding agents",
    "marketing automation",
    "desktop AI applications",
    "batch video ads",
  ],
  openGraph: {
    title: "Prestyj | Custom AI Agents, Voice Agents & Automation",
    description:
      "Talk to Prestyj's live AI concierge and explore custom AI agents, voice workflows, sales/receptionist systems, content engines, internal tools, and batch video ads.",
    type: "website",
    url: "https://prestyj.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prestyj | Custom AI Agents, Voice Agents & Automation",
    description:
      "Prestyj builds practical AI agents and automation for calls, leads, content, operations, internal tools, and AI software.",
  },
  alternates: {
    canonical: "https://prestyj.com",
  },
};

export default function Home() {
  return (
    <>
      <ServiceJsonLd />
      <SoftwareApplicationJsonLd />
      <FAQJsonLd faqs={homepageFaqs} />
      <Navbar />
      <main>
        <AiConciergeHero />
        <AiCapabilitiesSection />
        <ShippedProductsSection />
        <VideoMachineSection />
        <HomepageFaqSection />
        <HomepageFinalCta />
      </main>
      <Footer />
    </>
  );
}
