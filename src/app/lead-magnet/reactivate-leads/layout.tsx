import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience an AI Reactivation Call Live — Free Demo",
  description:
    "Your old leads are worth thousands. Submit your number and our AI agent will call you in under 60 seconds — exactly how it re-engages dormant leads. Live interactive demo.",
  keywords: [
    "lead reactivation demo",
    "AI lead reactivation",
    "cold lead follow-up AI",
    "dormant leads reactivation",
    "AI sales call demo",
    "lead re-engagement",
  ],
  openGraph: {
    title: "Experience an AI Reactivation Call Live",
    description:
      "Submit your number and our AI agent calls you in under 60 seconds. Live demo of how dormant leads get re-engaged.",
    type: "website",
    url: "https://prestyj.com/lead-magnet/reactivate-leads",
  },
  alternates: {
    canonical: "https://prestyj.com/lead-magnet/reactivate-leads",
  },
};

export default function ReactivateLeadsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
