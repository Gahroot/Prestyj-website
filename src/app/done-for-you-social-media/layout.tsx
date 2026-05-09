import type { Metadata } from "next";

const PAGE_URL = "https://prestyj.com/done-for-you-social-media";

export const metadata: Metadata = {
  title:
    "Done-For-You Social Media Swarm | Live in 24 Hours — Prestyj",
  description:
    "One brand isn't enough. Run a content swarm across your business, your personal brand, and niche accounts. Up to 7 platforms, 2,700+ posts/month, live in 24 hours. From $1,997/mo.",
  keywords: [
    "done for you social media",
    "social media management service",
    "AI social media management",
    "social media content service",
    "content swarm",
    "multi-account social media",
    "personal brand management",
    "done for you personal brand",
    "24 hour social media setup",
    "algorithm safe social media",
    "social media on autopilot",
    "AI content engine",
    "AI content department",
    "social media automation service",
    "managed social media",
    "done for you content marketing",
    "instagram content service",
    "tiktok content service",
    "linkedin content service",
    "social media for agencies",
    "social media for coaches",
    "social media for service businesses",
  ],
  openGraph: {
    title:
      "Done-For-You Social Media Swarm | Live in 24 Hours — Prestyj",
    description:
      "One brand isn't enough. Run a content swarm across your business, your personal brand, and niche accounts. Up to 7 platforms, 2,700+ posts/month, live in 24 hours. From $1,997/mo.",
    type: "website",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Done-For-You Social Media Swarm | Live in 24 Hours — Prestyj",
    description:
      "One brand isn't enough. Run a content swarm across your business, your personal brand, and niche accounts. Up to 7 platforms, 2,700+ posts/month, live in 24 hours.",
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

export default function DoneForYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
