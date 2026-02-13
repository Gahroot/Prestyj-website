import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Roofing Lead Response Playbook | PRESTYJ",
  description:
    "Download the free 24/7 Lead Response Playbook for roofing contractors. Learn the 60-second response standard, emergency triage protocols, storm surge strategies, and AI-powered lead capture.",
  keywords: [
    "roofing lead response playbook",
    "roofing contractor lead generation",
    "storm damage lead capture",
    "roofing AI lead response",
    "speed to lead roofing",
    "24/7 roofing answering service",
  ],
  openGraph: {
    title: "Free Roofing Lead Response Playbook | PRESTYJ",
    description:
      "Stop missing storm calls. Download the free playbook for roofing contractors to capture every lead 24/7 with AI-powered instant response.",
    type: "website",
    url: "https://prestyj.com/lead-magnet",
  },
  alternates: {
    canonical: "https://prestyj.com/lead-magnet",
  },
};

export default function LeadMagnetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
