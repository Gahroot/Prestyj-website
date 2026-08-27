import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { AiConciergeHero } from "@/components/sections/homepage/ai-concierge-hero";

export const metadata: Metadata = {
  title: "Live brokerage origination agent",
  description:
    "Talk to a live Prestyj voice agent and see how a commercial brokerage inquiry can be answered, qualified, recorded, and handed off.",
  robots: { index: false, follow: true },
};

export default function DemoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <AiConciergeHero />
      </main>
      <Footer />
    </>
  );
}
