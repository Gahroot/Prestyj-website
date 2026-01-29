import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prestyj vs Conversica: Enterprise Real Estate Lead Response Compared",
  description:
    "Compare Prestyj and Conversica for 50+ office operations. Conversica costs $2,999+/month with complex setup. See pricing, features, and which is best for your brokerage network.",
  keywords: [
    "Conversica alternative",
    "Conversica vs Prestyj",
    "Prestyj vs Conversica",
    "Conversica alternative real estate",
    "enterprise AI lead response",
    "Conversica pricing",
    "Conversica review",
    "AI sales assistant comparison",
    "real estate enterprise automation",
    "Conversica competitor",
  ],
  openGraph: {
    title: "Prestyj vs Conversica: Which AI Is Best for Enterprise Real Estate?",
    description:
      "Compare Prestyj and Conversica for enterprise real estate operations. See features, pricing ($2,999+/mo for Conversica), and why operations leaders are switching.",
    type: "article",
    url: "https://prestyj.com/compare/prestyj-vs-conversica",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prestyj vs Conversica: Enterprise AI Comparison",
    description:
      "Compare Prestyj and Conversica for enterprise real estate. See pricing, features, and find the best option for 50+ office operations.",
  },
  alternates: {
    canonical: "https://prestyj.com/compare/prestyj-vs-conversica",
  },
};

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
