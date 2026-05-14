import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founding Customers Wanted | PRESTYJ AI Sales Agents",
  description:
    "PRESTYJ is pre-revenue and looking for founding customers. No case studies yet — be the first. Priority support, founding rates, and featured story.",
  keywords: [
    "AI sales agent results",
    "real estate AI case study",
    "founding customer",
    "PRESTYJ results",
    "AI lead response results",
  ],
  openGraph: {
    title: "Founding Customers Wanted | PRESTYJ AI Sales Agents",
    description:
      "PRESTYJ is pre-revenue and looking for founding customers. No case studies yet — be the first.",
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
