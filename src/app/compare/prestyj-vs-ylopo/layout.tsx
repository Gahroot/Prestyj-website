import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prestyj vs Ylopo: AI Sales Agent Comparison for Real Estate",
  description:
    "Compare Prestyj and Ylopo AI sales agents for real estate. See pricing, features, and why agents are switching. Ylopo costs $395/mo + ad spend. Find the best Ylopo alternative.",
  keywords: [
    "Ylopo alternative",
    "Ylopo vs Prestyj",
    "Prestyj vs Ylopo",
    "real estate AI comparison",
    "Ylopo pricing",
    "Ylopo review",
    "AI sales agent comparison",
    "real estate lead management",
    "best AI for real estate",
    "Ylopo competitor",
  ],
  openGraph: {
    title: "Prestyj vs Ylopo: Which AI Sales Agent Is Right for You?",
    description:
      "Compare Prestyj and Ylopo AI sales agents. See features, pricing ($395/mo + ad spend for Ylopo), and why real estate agents are making the switch.",
    type: "article",
    url: "https://prestyj.com/compare/prestyj-vs-ylopo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prestyj vs Ylopo: AI Sales Agent Comparison",
    description:
      "Compare Prestyj and Ylopo AI sales agents for real estate. See pricing, features, and find the best option for your business.",
  },
  alternates: {
    canonical: "https://prestyj.com/compare/prestyj-vs-ylopo",
  },
};

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
