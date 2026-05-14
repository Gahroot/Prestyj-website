import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Playbooks & Guides for Marketing & Sales",
  description:
    "Free playbooks for real estate teams, brokerages, roofing contractors, and content operators. Pick the guide that matches your business and download instantly.",
  keywords: [
    "free marketing playbook",
    "ai sales playbook",
    "real estate lead response playbook",
    "brokerage playbook",
    "qualvol content playbook",
    "lead reactivation playbook",
  ],
  openGraph: {
    title: "Free Playbooks & Guides for Marketing & Sales",
    description:
      "Pick your playbook: brokerage, lead reactivation, QualVol content, or roofing lead response. Free instant download.",
    type: "website",
    url: "https://prestyj.com/lead-magnet",
  },
  alternates: {
    canonical: "https://prestyj.com/lead-magnet",
  },
};

export default function LeadMagnetLayout({ children }: { children: React.ReactNode }) {
  return children;
}
