import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { FAQJsonLd, ServiceJsonLd } from "@/components/seo/json-ld";
import { HomepageFaqSection } from "@/components/sections/homepage/homepage-faq-section";
import { AudiencePathways } from "@/components/sections/institutional/audience-pathways";
import { ControlledWork } from "@/components/sections/institutional/controlled-work";
import { DealHero } from "@/components/sections/institutional/deal-hero";
import { EvidenceLedger } from "@/components/sections/institutional/evidence-ledger";
import { InstitutionalCta } from "@/components/sections/institutional/institutional-cta";
import { ProofRecords } from "@/components/sections/institutional/proof-records";
import { TrustBoundaries } from "@/components/sections/institutional/trust-boundaries";
import { homepageFaqs } from "@/lib/homepage-faq-data";
import { positioning } from "@/lib/positioning";

const title = "Prestyj | AI Agents for Institutional Real Estate";

export const metadata: Metadata = {
  title,
  description: positioning.fullPitch,
  keywords: [
    "AI agents for real estate investment funds",
    "AI for commercial real estate",
    "fund operations AI",
    "LP reporting automation",
    "real estate due diligence AI",
    "commercial brokerage AI agents",
    "portfolio data reconciliation",
  ],
  alternates: { canonical: "https://prestyj.com" },
  openGraph: {
    title,
    description: positioning.fullPitch,
    type: "website",
    url: "https://prestyj.com",
  },
  twitter: { card: "summary_large_image", title, description: positioning.fullPitch },
};

export default function Home() {
  return (
    <>
      <ServiceJsonLd />
      <FAQJsonLd faqs={homepageFaqs} />
      <Navbar />
      <main>
        <DealHero />
        <EvidenceLedger />
        <ControlledWork />
        <ProofRecords compact />
        <AudiencePathways />
        <TrustBoundaries />
        <HomepageFaqSection />
        <InstitutionalCta />
      </main>
      <Footer />
    </>
  );
}
