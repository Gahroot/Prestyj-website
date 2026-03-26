import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The $20M+ Brokerage Playbook: Convert 3x More Ad Leads with AI | Prestyj",
  description:
    "Free playbook for real estate team leaders and broker-owners running Facebook and YouTube ads. Get the speed to lead data, AI vs. ISA cost comparison, and step-by-step follow-up system used by top brokerages.",
  keywords: [
    "real estate brokerage playbook",
    "AI lead response real estate playbook",
    "real estate team leader free guide",
    "brokerage AI lead conversion",
    "real estate Facebook ads playbook",
    "speed to lead real estate guide",
  ],
  openGraph: {
    title: "The $20M+ Brokerage Playbook | Free Download | Prestyj",
    description:
      "How top real estate teams convert 3x more Facebook and YouTube ad leads with AI. Free guide for team leaders and broker-owners.",
    type: "website",
    url: "https://prestyj.com/lead-magnet/brokerage-playbook",
  },
  alternates: {
    canonical: "https://prestyj.com/lead-magnet/brokerage-playbook",
  },
};

export default function BrokeragePlaybookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
