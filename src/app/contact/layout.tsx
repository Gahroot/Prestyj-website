import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Prestyj — AI Agents for Marketing & Sales",
  description:
    "Get in touch with Prestyj. Talk to us about AI agents for your marketing and sales — lead capture, instant response, qualification, and booking. Email hello@prestyj.com or book a demo.",
  keywords: [
    "contact prestyj",
    "prestyj support",
    "AI agents contact",
    "AI sales agent contact",
    "hello@prestyj.com",
  ],
  openGraph: {
    title: "Contact Prestyj — AI Agents for Marketing & Sales",
    description:
      "Talk to us about AI agents for your marketing and sales. Email hello@prestyj.com or book a demo.",
    type: "website",
    url: "https://prestyj.com/contact",
    siteName: "Prestyj",
    images: [
      {
        url: "https://prestyj.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Prestyj",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Prestyj — AI Agents for Marketing & Sales",
    description:
      "Talk to us about AI agents for your marketing and sales. Email hello@prestyj.com or book a demo.",
    images: ["https://prestyj.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://prestyj.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return <>{children}</>;
}
