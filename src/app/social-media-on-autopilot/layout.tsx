import type { Metadata } from "next";

const PAGE_URL = "https://prestyj.com/social-media-on-autopilot";

export const metadata: Metadata = {
  title:
    "Social Media On Autopilot — You Never Open The App Again | Prestyj",
  description:
    "Fully hands-off social media management. No creating, scheduling, approving, or posting. The AI engine writes, designs, publishes, and optimizes across 7 platforms. From $1,997/mo.",
  keywords: [
    "social media on autopilot",
    "hands-off social media",
    "automated social media management",
    "zero-touch social media",
    "social media automation",
    "AI social media management",
    "done for you social media",
    "hands-free social media",
    "automatic social media posting",
    "social media without lifting a finger",
    "set it and forget it social media",
    "passive social media management",
    "AI content engine",
    "fully automated social media",
    "social media management service",
  ],
  openGraph: {
    title:
      "Social Media On Autopilot — You Never Open The App Again | Prestyj",
    description:
      "Fully hands-off social media management. No creating, scheduling, approving, or posting. AI writes, designs, publishes across 7 platforms. From $1,997/mo.",
    type: "website",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Social Media On Autopilot — You Never Open The App Again",
    description:
      "Fully hands-off social media. No creating, scheduling, or approving. AI handles everything across 7 platforms. From $1,997/mo.",
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

export default function SocialMediaAutopilotLayout({ children }: { children: React.ReactNode }) {
  return children;
}
