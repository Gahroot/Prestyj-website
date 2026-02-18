"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AiConsultantRoiCalculator } from "@/components/sections/compare/special/AiConsultantRoiCalculator";
import { CompareHero } from "@/components/sections/compare/CompareHero";
import { CompareCTA } from "@/components/sections/compare/CompareCTA";

export default function AiConsultantRoiCalculatorPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <CompareHero
          data={{
            badge: "Interactive ROI Tool",
            title: "AI Consultant ROI Calculator:",
            titleAccent: "See Your Potential Return",
            subtitle:
              "Plug in your business metrics—call volume, missed opportunities, average job value—and see exactly what an AI consultant could deliver. Compare done-for-you consultants vs. DIY platforms.",
            description: "",
            keyStats: [
              {
                value: "Real Numbers",
                label: "Based on your actual metrics",
              },
              {
                value: "Side-by-Side",
                label: "Compare consultant vs. DIY ROI",
              },
              {
                value: "Payback Period",
                label: "See how fast you break even",
              },
            ],
          }}
        />
        <AiConsultantRoiCalculator />
        <CompareCTA
          data={{
            title: "Ready to See Your Custom ROI?",
            description:
              "Get a detailed ROI analysis for your specific business. We'll show you exact costs, timeline, and expected returns based on your actual metrics.",
            buttonText: "Get Your Custom ROI Analysis",
            buttonHref: "/book-demo",
            disclaimer:
              "No commitment required. We'll provide a detailed ROI projection based on your business metrics.",
          }}
        />
      </main>
      <Footer />
    </>
  );
}
