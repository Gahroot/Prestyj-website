import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The QualVol Content Playbook | Quality + Volume Social Media | PRESTYJ",
  description:
    "Download the free QualVol Content Playbook. The swarm model, scoring rubrics, distribution matrices, and the workflow used to ship hundreds of on-brand posts per week without trading quality for volume.",
  keywords: [
    "qualvol content playbook",
    "quality volume content strategy",
    "1000 posts per month playbook",
    "social media swarm model",
    "high volume content production",
    "ai content department playbook",
  ],
  openGraph: {
    title: "The QualVol Content Playbook | Free Download | PRESTYJ",
    description:
      "Quality and volume aren't opposites. Download the playbook used to ship hundreds of on-brand posts per week across every platform.",
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
