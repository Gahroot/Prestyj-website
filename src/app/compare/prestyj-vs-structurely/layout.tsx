import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prestyj vs Structurely: Enterprise Real Estate AI Comparison",
  description:
    "Compare Prestyj and Structurely for franchise and multi-office operations. Structurely focuses on small teams (50-225 leads/mo). See which scales for 50+ office brokerages.",
  keywords: [
    "Structurely alternative",
    "Structurely vs Prestyj",
    "Prestyj vs Structurely",
    "Structurely alternative enterprise",
    "Structurely franchise",
    "AI lead response comparison",
    "Structurely pricing",
    "Structurely review",
    "real estate AI chatbot",
    "Aisa Holmes alternative",
  ],
  openGraph: {
    title: "Prestyj vs Structurely: Which Scales for Enterprise Real Estate?",
    description:
      "Compare Prestyj and Structurely for multi-office operations. Structurely targets small teams. See which is built for 50+ office franchise scale.",
    type: "article",
    url: "https://prestyj.com/compare/prestyj-vs-structurely",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prestyj vs Structurely: Enterprise AI Comparison",
    description:
      "Compare Prestyj and Structurely for enterprise real estate. See pricing, features, and which scales for franchise operations.",
  },
  alternates: {
    canonical: "https://prestyj.com/compare/prestyj-vs-structurely",
  },
};

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
