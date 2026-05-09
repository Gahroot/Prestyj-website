import type { Metadata } from "next";

const PAGE_URL = "https://prestyj.com/managed-social-media-service";

export const metadata: Metadata = {
  title:
    "Managed Social Media Service — Fully Managed, 7 Platforms, 2,700+ Posts | Prestyj",
  description:
    "Stop managing freelancers and patching together tools. Prestyj is your fully managed social media service — creating, publishing, and optimizing across 7 platforms. Live in 24 hours. From $1,997/mo.",
  keywords: [
    "managed social media service",
    "fully managed social media",
    "social media management service",
    "done for you social media",
    "managed social media marketing",
    "social media service for businesses",
    "complete social media management",
    "outsourced social media management",
    "social media as a service",
    "hands-off social media",
    "turnkey social media",
    "social media management for contractors",
    "social media management for real estate",
    "white label social media management",
  ],
  openGraph: {
    title:
      "Managed Social Media Service — Fully Managed, 7 Platforms, 2,700+ Posts | Prestyj",
    description:
      "Fully managed social media service. Creating, publishing, and optimizing across 7 platforms. Live in 24 hours. Zero work from you. From $1,997/mo.",
    type: "website",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Managed Social Media Service — Fully Managed, 7 Platforms | Prestyj",
    description:
      "Fully managed social media. Creating, publishing, optimizing across 7 platforms. Zero work from you. From $1,997/mo.",
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

export default function ManagedSocialMediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
