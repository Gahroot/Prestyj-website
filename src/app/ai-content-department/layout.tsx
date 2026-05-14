import type { Metadata } from "next";

const PAGE_URL = "https://prestyj.com/ai-content-department";

export const metadata: Metadata = {
  title: "AI Content Department — Your AI Agent for Social Media | Prestyj",
  description:
    "AI Content Department — the AI agent for social media inside Prestyj's marketing & sales AI agent suite. 1,000+ posts/month across 7 platforms, live in 24 hours. From $1,997/mo.",
  keywords: [
    "AI content department",
    "AI agent for social media",
    "AI social media agent",
    "AI agents for marketing",
    "AI agents for sales",
    "AI social media management",
    "AI social media manager",
    "done for you social media",
    "managed social media service",
    "social media on autopilot",
    "1000 posts per month",
    "high volume social media",
    "multi-account social media",
    "content swarm",
    "AI content engine",
    "AI content generation",
    "social media automation",
    "replace social media hire",
    "social media hiring cost",
    "cost per post social media",
  ],
  openGraph: {
    title: "AI Content Department — Your AI Agent for Social Media | Prestyj",
    description:
      "An AI agent that runs your social media. 1,000+ posts/month across 7 platforms, live in 24 hours. Part of Prestyj's marketing & sales AI agent suite. From $1,997/mo.",
    type: "website",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Content Department — Your AI Agent for Social Media",
    description:
      "An AI agent that runs your social media. 1,000+ posts/month across 7 platforms. From $1,997/mo.",
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

export default function AIContentDepartmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
