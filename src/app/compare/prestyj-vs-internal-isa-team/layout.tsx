import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Lead Response vs Internal ISA Team: Enterprise Cost Comparison",
  description:
    "Compare AI lead response vs internal ISA teams for 50+ office operations. ISAs cost $57K-$69K/year with 30% turnover. See total cost of ownership and why operations leaders are switching.",
  keywords: [
    "AI ISA cost vs human ISA cost",
    "ISA team alternative",
    "internal ISA alternative",
    "AI vs ISA real estate",
    "real estate ISA cost",
    "ISA turnover",
    "enterprise ISA alternative",
    "AI lead response vs ISA",
    "ISA replacement",
    "real estate inside sales agent cost",
  ],
  openGraph: {
    title: "AI vs Internal ISA Team: Which Is Best for Enterprise Real Estate?",
    description:
      "Compare AI lead response vs internal ISA teams. ISAs cost $57K-$69K/year per person with 30% annual turnover. See total cost analysis for 50+ office operations.",
    type: "article",
    url: "https://prestyj.com/compare/prestyj-vs-internal-isa-team",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI vs Internal ISA Team: Enterprise Cost Comparison",
    description:
      "Compare AI lead response vs internal ISA teams for enterprise real estate. 30% turnover, 4-5 month ramp time—see the full cost picture.",
  },
  alternates: {
    canonical: "https://prestyj.com/compare/prestyj-vs-internal-isa-team",
  },
};

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
