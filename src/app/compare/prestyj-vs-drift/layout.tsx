import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prestyj vs Drift: Enterprise Real Estate Lead Response Compared",
  description:
    "Compare Prestyj and Drift for real estate operations. Drift costs $60K+/year with 12-week implementation. See why real estate enterprises choose purpose-built solutions.",
  keywords: [
    "Drift alternative",
    "Drift alternative real estate",
    "Drift vs Prestyj",
    "Prestyj vs Drift",
    "Drift enterprise alternative",
    "Drift pricing",
    "Drift review",
    "conversational AI real estate",
    "Drift competitor",
    "Drift security breach",
  ],
  openGraph: {
    title: "Prestyj vs Drift: Which AI Is Best for Enterprise Real Estate?",
    description:
      "Compare Prestyj and Drift for enterprise real estate operations. See features, pricing ($60K+/year for Drift), and why operations leaders choose purpose-built solutions.",
    type: "article",
    url: "https://prestyj.com/compare/prestyj-vs-drift",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prestyj vs Drift: Enterprise AI Comparison",
    description:
      "Compare Prestyj and Drift for enterprise real estate. See pricing, implementation timeline, and find the best option for 50+ office operations.",
  },
  alternates: {
    canonical: "https://prestyj.com/compare/prestyj-vs-drift",
  },
};

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
