import type { Metadata } from "next";
import { HeroVideo } from "@/components/free-ads/hero-video";
import { LiveProof } from "@/components/free-ads/live-proof";
import { SocialProof } from "@/components/free-ads/social-proof";
import { OfferBreakdown } from "@/components/free-ads/offer-breakdown";
import { GetAdsLeadForm } from "@/components/get-ads/lead-form";
import { FreeAdsFAQ } from "@/components/free-ads/faq-section";

export const metadata: Metadata = {
  title: "Get 300 Free Video Ads | PRESTYJ",
  description:
    "What if you had 300 video ads running by next week? We'll create them for free. You just send the footage. 24-hour turnaround.",
  openGraph: {
    title: "Get 300 Free Video Ads | PRESTYJ",
    description:
      "What if you had 300 video ads running by next week? We'll create them for free. You just send the footage.",
    type: "website",
  },
};

export default function GetAdsPage() {
  return (
    <main className="min-h-screen">
      <HeroVideo />
      <SocialProof />
      <LiveProof />
      <OfferBreakdown />
      <GetAdsLeadForm />
      <FreeAdsFAQ />
    </main>
  );
}
