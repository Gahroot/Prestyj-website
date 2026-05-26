import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HomeHeroSection } from "@/components/sections/home-hero";
import { homeFaqs } from "@/lib/home-faq-data";
import { BatchVideoAdsJsonLd, FAQJsonLd } from "@/components/seo/json-ld";

const StatisticsSection = dynamic(
  () => import("@/components/sections/statistics").then((m) => m.StatisticsSection),
  { ssr: true },
);
const HowItWorksSection = dynamic(
  () => import("@/components/sections/how-it-works").then((m) => m.HowItWorksSection),
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
const FAQSection = dynamic(() => import("@/components/sections/faq").then((m) => m.FAQSection), {
  ssr: true,
});
const CTASection = dynamic(() => import("@/components/sections/cta").then((m) => m.CTASection), {
  ssr: true,
});
const BatchVideoAdsFeatureSection = dynamic(
  () =>
    import("@/components/sections/landing/batch-video-ads-feature").then(
      (m) => m.BatchVideoAdsFeatureSection,
    ),
  { ssr: true },
);

export const metadata: Metadata = {
  title: "Prestyj | 300 Video Ads for Paid Social Testing",
  description:
    "Get 300 vertical video ads in 1–2 business days from one recording session. Built for businesses testing hooks, pain points, and offers on Meta, TikTok, YouTube Shorts, and Reels.",
  keywords: [
    "300 video ads",
    "batch video ads",
    "video ad variations",
    "paid social creative testing",
    "Meta ad creative testing",
    "TikTok video ads",
    "YouTube Shorts ads",
    "UGC style video ads",
    "ad creative volume",
    "short form video ads",
  ],
  openGraph: {
    title: "Prestyj | 300 Video Ads for Paid Social Testing",
    description:
      "Get 300 vertical video ads in 1–2 business days from one recording session. Test hooks, pain points, and offers without hiring editors, creators, or an agency.",
    type: "website",
    url: "https://prestyj.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prestyj | 300 Video Ads for Paid Social Testing",
    description:
      "Get 300 vertical video ads in 1–2 business days from one recording session. Test hooks, pain points, and offers without hiring editors, creators, or an agency.",
  },
  alternates: {
    canonical: "https://prestyj.com",
  },
};

export default function Home() {
  return (
    <>
      <BatchVideoAdsJsonLd />
      <FAQJsonLd faqs={homeFaqs} />
      <Navbar />
      <main>
        <HomeHeroSection />
        <PainPointsSection />
        <SolutionSection />
        <HowItWorksSection />
        <StatisticsSection />
        <BatchVideoAdsFeatureSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
