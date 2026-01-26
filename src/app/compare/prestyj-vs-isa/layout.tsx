import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Sales Agent vs Human ISA: The Real Comparison",
  description:
    "Compare AI sales agents to human ISAs. Understand costs ($4,000+/month salary, 15-25% commission splits), availability (40 hrs/week vs 24/7), response times, and when each option makes sense for your real estate business.",
  keywords: [
    "AI ISA vs human ISA",
    "should I hire an ISA",
    "ISA cost comparison",
    "real estate ISA salary",
    "AI sales agent",
    "inside sales agent",
    "real estate lead response",
    "ISA vs AI agent",
    "hire ISA or use AI",
    "real estate automation",
  ],
  openGraph: {
    title: "AI Sales Agent vs Human ISA: The Real Comparison",
    description:
      "Compare AI sales agents to human ISAs. Understand costs, availability, and when each option makes sense for your real estate business.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Sales Agent vs Human ISA: The Real Comparison",
    description:
      "Compare AI sales agents to human ISAs. Understand costs, availability, and when each option makes sense for your real estate business.",
  },
  alternates: {
    canonical: "https://prestyj.com/compare/prestyj-vs-isa",
  },
};

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
