import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Roofer's 24/7 Lead Response Playbook — Free Guide",
  description:
    "Free playbook for roofing contractors: respond to every lead in under 60 seconds, book more jobs from Facebook ads, and stop losing $5K+ emergency calls to voicemail. Built for roofers.",
  keywords: [
    "roofing lead response playbook",
    "roofing contractor leads",
    "AI lead response for roofers",
    "Facebook ads for roofers",
    "roofing lead conversion",
    "24/7 lead response roofing",
  ],
  openGraph: {
    title: "The Roofer's 24/7 Lead Response Playbook",
    description:
      "Free playbook: respond to every lead in under 60 seconds and stop losing $5K+ emergency calls. Built for roofing contractors.",
    type: "website",
    url: "https://prestyj.com/lead-magnet/roofing-playbook",
  },
  alternates: {
    canonical: "https://prestyj.com/lead-magnet/roofing-playbook",
  },
};

export default function RoofingPlaybookLayout({ children }: { children: React.ReactNode }) {
  return children;
}
