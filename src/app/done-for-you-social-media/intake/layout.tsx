import type { Metadata } from "next";

const PAGE_URL = "https://prestyj.com/done-for-you-social-media/intake";

export const metadata: Metadata = {
  title: "Brand Kit Intake | Done-For-You Social Media — Prestyj",
  description:
    "Send us your brand kit — business info, audience, voice, platforms, colors, and logo — so we can have your content swarm ready before your strategy call.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Brand Kit Intake | Done-For-You Social Media — Prestyj",
    description:
      "Send us your brand kit so we can hit the ground running on your content swarm.",
    type: "website",
    url: PAGE_URL,
  },
};

export default function ContentEngineIntakeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
