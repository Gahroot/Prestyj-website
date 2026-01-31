import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become a Founding Case Study | PRESTYJ AI Sales Agents",
  description:
    "Partner with PRESTYJ as a founding customer. Get priority support, founding rates, and be featured as a real estate AI success story.",
  keywords: [
    "AI sales agent results",
    "real estate AI case study",
    "founding customer",
    "PRESTYJ results",
    "AI lead response results",
  ],
  openGraph: {
    title: "Become a Founding Case Study | PRESTYJ AI Sales Agents",
    description:
      "Partner with PRESTYJ as a founding customer. Get priority support, founding rates, and be featured as a success story.",
    type: "website",
    url: "https://prestyj.com/results",
  },
  alternates: {
    canonical: "https://prestyj.com/results",
  },
};

export default function ResultsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
