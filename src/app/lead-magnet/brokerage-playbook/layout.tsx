import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The $20M+ Brokerage Playbook — Convert 3× More Ad Leads with AI",
  description:
    "Free playbook: the exact system top real estate teams use to respond to every Facebook and YouTube lead in under 60 seconds, book 3× more appointments, and run AI at $20M+ production — without adding ISAs.",
  keywords: [
    "real estate brokerage playbook",
    "AI lead response for brokerages",
    "Facebook leads real estate",
    "ISA vs AI real estate",
    "brokerage lead conversion",
    "real estate team lead response",
  ],
  openGraph: {
    title: "The $20M+ Brokerage Playbook",
    description:
      "Free playbook: respond to every Facebook & YouTube lead in under 60 seconds and book 3× more appointments — without adding ISAs.",
    type: "website",
    url: "https://prestyj.com/lead-magnet/brokerage-playbook",
  },
  alternates: {
    canonical: "https://prestyj.com/lead-magnet/brokerage-playbook",
  },
};

export default function BrokeragePlaybookLayout({ children }: { children: React.ReactNode }) {
  return children;
}
