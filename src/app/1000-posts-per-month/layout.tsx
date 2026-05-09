import type { Metadata } from "next";

const PAGE_URL = "https://prestyj.com/1000-posts-per-month";

export const metadata: Metadata = {
  title: "1,000+ Posts Per Month on Autopilot | AI Content Engine — Prestyj",
  description:
    "Most businesses manage 30 posts/month. Prestyj ships 1,000+ across your brand, personal, and niche accounts — 7 platforms, live in 24 hours. Volume guaranteed. From $1,997/mo.",
  keywords: [
    "1000 posts per month",
    "social media posting frequency",
    "how many posts per month",
    "high volume social media",
    "AI content engine",
    "done for you social media",
    "social media automation",
    "multi account social media",
    "content swarm",
    "social media volume",
    "how often to post on social media",
    "social media posting schedule",
    "bulk social media content",
    "automated social media posting",
    "AI social media management",
  ],
  openGraph: {
    title: "1,000+ Posts Per Month on Autopilot | AI Content Engine — Prestyj",
    description:
      "Most businesses manage 30 posts/month. Prestyj ships 1,000+ across your brand, personal, and niche accounts — 7 platforms, live in 24 hours. Volume guaranteed.",
    type: "website",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "1,000+ Posts Per Month on Autopilot | AI Content Engine — Prestyj",
    description:
      "Most businesses manage 30 posts/month. Prestyj ships 1,000+ across your brand, personal, and niche accounts. Volume guaranteed. From $1,997/mo.",
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

export default function ThousandPostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
