import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Lead Response vs Offshore ISA Services: Enterprise Comparison",
  description:
    "Compare AI lead response vs offshore ISA services for 50+ office real estate operations. Evaluate quality control, TCPA compliance, and total cost of outsourced ISAs.",
  keywords: [
    "offshore ISA alternative",
    "outsourced ISA alternative",
    "offshore ISA vs AI",
    "real estate virtual ISA",
    "offshore lead response",
    "ISA outsourcing real estate",
    "TCPA compliance ISA",
    "offshore ISA quality",
    "AI vs offshore ISA",
  ],
  openGraph: {
    title: "AI vs Offshore ISA Services: Which Is Best for Enterprise Real Estate?",
    description:
      "Compare AI lead response vs offshore ISA services. Evaluate quality control, compliance risk, and cost for 50+ office operations.",
    type: "article",
    url: "https://prestyj.com/compare/prestyj-vs-offshore-isa",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI vs Offshore ISA: Enterprise Comparison",
    description:
      "Compare AI lead response vs offshore ISA services for enterprise real estate. Quality control, compliance, and cost analysis.",
  },
  alternates: {
    canonical: "https://prestyj.com/compare/prestyj-vs-offshore-isa",
  },
};

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
