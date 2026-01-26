import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Demo | PRESTYJ AI Sales Agents",
  description:
    "Schedule a 30-minute strategy call to see how PRESTYJ AI sales agents can help your real estate team respond to leads instantly and reactivate dead leads.",
  keywords: [
    "book demo",
    "real estate AI demo",
    "AI sales agent demo",
    "lead response demo",
    "PRESTYJ demo",
  ],
  openGraph: {
    title: "Book a Demo | PRESTYJ AI Sales Agents",
    description:
      "Schedule a 30-minute strategy call to see how PRESTYJ AI sales agents can help your real estate team respond to leads instantly.",
    type: "website",
    url: "https://prestyj.com/book-demo",
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
