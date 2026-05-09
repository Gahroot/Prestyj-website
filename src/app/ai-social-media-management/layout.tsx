import type { Metadata } from "next";

const PAGE_URL = "https://prestyj.com/ai-social-media-management";

export const metadata: Metadata = {
  title: "AI Social Media Management — Fully Autonomous, 7 Platforms | Prestyj",
  description:
    "AI social media management that actually runs itself. Creates, publishes, and optimizes content across Instagram, Facebook, TikTok, YouTube, LinkedIn, Threads, and X. Zero daily effort. From $1,997/mo.",
  keywords: [
    "AI social media management",
    "AI social media manager",
    "AI social media tools",
    "automated social media management",
    "AI social media automation",
    "social media management AI",
    "best AI social media management",
    "AI content management",
    "AI powered social media management",
    "social media management software AI",
    "fully automated social media",
    "AI social media marketing",
    "hands-off social media management",
    "done for you social media",
    "AI social media scheduler",
  ],
  openGraph: {
    title: "AI Social Media Management — Fully Autonomous, 7 Platforms | Prestyj",
    description:
      "AI social media management that creates, publishes, and optimizes content across 7 platforms. Zero daily effort. Live in 24 hours. From $1,997/mo.",
    type: "website",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Social Media Management — Fully Autonomous, 7 Platforms",
    description:
      "AI social media management that runs itself. Creates, publishes, and optimizes across 7 platforms. Zero effort. From $1,997/mo.",
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

export default function AISocialMediaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
