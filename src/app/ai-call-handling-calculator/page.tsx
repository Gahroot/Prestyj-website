import type { Metadata } from "next";
import { RoiCalculator } from "@/components/sections/calculator/roi-calculator";

export const metadata: Metadata = {
  title: "AI Call Handling ROI Calculator",
  description:
    "Calculate exactly how much revenue you're losing from missed calls and what AI voice agents could save you in the next 12 months. Get your personalized ROI report instantly.",
  keywords: [
    "AI call handling ROI calculator",
    "home service call handling calculator",
    "missed call cost calculator",
    "AI answering service ROI",
    "HVAC call handling calculator",
    "plumbing business ROI calculator",
  ],
  openGraph: {
    title: "AI Call Handling ROI Calculator for Home Service Businesses",
    description:
      "Calculate your personalized ROI for AI voice agents. See exactly how much revenue you're losing from missed calls.",
    type: "website",
  },
};

export default function RoiCalculatorPage() {
  return (
    <main className="from-background to-muted/20 min-h-screen bg-gradient-to-b">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Calculate Your AI Call Handling ROI
          </h1>
          <p className="text-muted-foreground mt-6 text-lg md:text-xl">
            Discover exactly how much revenue you&apos;re losing from missed calls and what AI voice
            agents could save you in the next 12 months.
          </p>
          <p className="text-muted-foreground mt-4 text-sm">
            Get your personalized ROI report in 60 seconds — no credit card required.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="container mx-auto px-4 pb-24">
        <RoiCalculator />
      </section>
    </main>
  );
}
