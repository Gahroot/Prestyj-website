import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Your AI Sales Agent Demo | Prestyj",
  description:
    "Schedule a personalized demo to see how Prestyj AI agents respond to leads in under 30 seconds. Close 30-50% more deals from your existing ad spend. No credit card required.",
  keywords: [
    "book demo",
    "AI sales agent demo",
    "lead response demo",
    "Prestyj demo",
    "AI receptionist demo",
    "automated lead response",
  ],
  openGraph: {
    title: "Book Your AI Sales Agent Demo | Prestyj",
    description:
      "Schedule a personalized demo to see how Prestyj AI agents respond to leads in under 30 seconds. Close 30-50% more deals from your existing ad spend. No credit card required.",
    type: "website",
    url: "https://prestyj.com/book-demo",
    siteName: "Prestyj",
    images: [
      {
        url: "https://prestyj.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prestyj AI Sales Agent Demo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Your AI Sales Agent Demo | Prestyj",
    description:
      "Schedule a personalized demo to see how Prestyj AI agents respond to leads in under 30 seconds. Close 30-50% more deals from your existing ad spend. No credit card required.",
    images: ["https://prestyj.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://prestyj.com/book-demo",
  },
};

export default function BookDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
