import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The QualVol Content Playbook — Quality × Volume at Scale",
  description:
    "Free playbook: the exact operating system to ship hundreds of on-brand posts per week without burning out a team. Quality and volume aren't opposites — they're multipliers.",
  keywords: [
    "content marketing playbook",
    "qualvol content strategy",
    "social media content volume",
    "content quality at scale",
    "brand content consistency",
    "social media posting strategy",
  ],
  openGraph: {
    title: "The QualVol Content Playbook",
    description:
      "Ship hundreds of on-brand posts per week without burning out. Free playbook: quality × volume at scale.",
    type: "website",
    url: "https://prestyj.com/lead-magnet/qualvol-playbook",
  },
  alternates: {
    canonical: "https://prestyj.com/lead-magnet/qualvol-playbook",
  },
};

export default function QualvolPlaybookLayout({ children }: { children: React.ReactNode }) {
  return children;
}
