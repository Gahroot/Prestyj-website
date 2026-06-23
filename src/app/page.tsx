import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { FAQJsonLd, ServiceJsonLd, SoftwareApplicationJsonLd } from "@/components/seo/json-ld";
import { AiCapabilitiesSection } from "@/components/sections/homepage/ai-capabilities-section";
import { AiConciergeHero } from "@/components/sections/homepage/ai-concierge-hero";
import { HomepageFaqSection } from "@/components/sections/homepage/homepage-faq-section";
import { HomepageFinalCta } from "@/components/sections/homepage/homepage-final-cta";
import { VideoMachineSection } from "@/components/sections/homepage/video-machine-section";
import { homepageFaqs } from "@/lib/homepage-faq-data";
import { positioning } from "@/lib/positioning";

export const metadata: Metadata = {
  title: "Prestyj | AI Agents & Ad Production for Service Businesses",
  description: positioning.fullPitch,
  keywords: [
    "custom AI agents",
    "AI voice agents",
    "AI agents for service businesses",
    "done-for-you AI marketing",
    "AI sales agents",
    "AI receptionist",
    "AI marketing agents",
    "AI content department",
    "marketing automation",
    "batch video ads",
  ],
  openGraph: {
    title: "Prestyj | AI Agents & Ad Production for Service Businesses",
    description: positioning.fullPitch,
    type: "website",
    url: "https://prestyj.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prestyj | AI Agents & Ad Production for Service Businesses",
    description: positioning.fullPitch,
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
        <VideoMachineSection />
        <HomepageFaqSection />
        <HomepageFinalCta />
      </main>
      <Footer />
    </>
  );
}
