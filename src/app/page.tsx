import type { Metadata } from "next";

import type { ReactElement } from "react";

import { EditorialShell } from "@/components/layout/editorial-shell";
import { FAQJsonLd, ServiceJsonLd } from "@/components/seo/json-ld";
import { EditorialHero } from "@/components/sections/institutional/editorial-hero";
import { EditorialWorkflows } from "@/components/sections/institutional/editorial-workflows";
import { EditorialControls } from "@/components/sections/institutional/editorial-controls";
import { EditorialProof } from "@/components/sections/institutional/editorial-proof";
import { EditorialClose } from "@/components/sections/institutional/editorial-close";
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

export default function Home(): ReactElement {
  return (
    <>
      <ServiceJsonLd />
      <FAQJsonLd faqs={homepageFaqs} />
      <EditorialShell>
        <main id="main-content">
          <EditorialHero />
          <EditorialWorkflows />
          <EditorialControls />
          <EditorialProof />
          <EditorialClose />
        </main>
      </EditorialShell>
    </>
  );
}
