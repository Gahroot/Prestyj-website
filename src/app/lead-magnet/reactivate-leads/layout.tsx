import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Guide: Reactivate Dead Leads with AI | PRESTYJ",
  description:
    "Download the free guide on how to reactivate dead leads using AI-powered outreach. Turn old contacts into booked appointments — automatically.",
  keywords: [
    "reactivate dead leads",
    "lead reactivation strategy",
    "AI lead follow up",
    "revive old leads",
    "automated lead reactivation",
    "dead lead recovery",
  ],
  openGraph: {
    title: "Free Guide: Reactivate Dead Leads with AI | PRESTYJ",
    description:
      "Your old leads are worth thousands. Download the free guide to reactivate them with AI-powered outreach.",
    type: "website",
    url: "https://prestyj.com/lead-magnet/reactivate-leads",
  },
  alternates: {
    canonical: "https://prestyj.com/lead-magnet/reactivate-leads",
  },
};

export default function ReactivateLeadsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
