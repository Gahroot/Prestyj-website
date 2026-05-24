import type { Metadata } from "next";

/**
 * Embed layout — minimal chrome (no nav, no footer) so the embed renders
 * cleanly inside an iframe on any third-party page. Robots are disallowed
 * because we want the canonical content indexed at /stat/[id] and the
 * calculator pages, not the embed shells.
 */
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function EmbedLayout({ children }: { children: React.ReactNode }) {
  return <div className="bg-background text-foreground min-h-[100svh] antialiased">{children}</div>;
}
