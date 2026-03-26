import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate AI ROI Calculator | How Much Revenue Are You Losing? | Prestyj",
  description:
    "Calculate exactly how much additional commission revenue AI lead response would generate for your real estate team. Enter your ad spend, cost per lead, and conversion rate to see your ROI.",
  keywords: [
    "real estate ROI calculator",
    "AI lead response ROI calculator",
    "real estate AI calculator",
    "real estate commission calculator",
    "brokerage AI ROI",
    "real estate lead conversion calculator",
  ],
  openGraph: {
    title: "Real Estate AI ROI Calculator | Prestyj",
    description:
      "See exactly how much additional revenue AI lead response would generate for your real estate team. Free calculator.",
    type: "website",
    url: "https://prestyj.com/real-estate-roi-calculator",
  },
  alternates: {
    canonical: "https://prestyj.com/real-estate-roi-calculator",
  },
};

export default function RealEstateROICalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
