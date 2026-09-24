import type { Metadata } from "next";
import type { ReactElement, ReactNode } from "react";

export const metadata: Metadata = {
  title: { default: "Layout Lab", template: "%s | Prestyj Layout Lab" },
  description: "Private prototype surface for comparing Prestyj homepage layouts.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function LayoutLabLayout({ children }: { children: ReactNode }): ReactElement {
  return (
    <div data-layout-lab className="dark bg-background text-foreground min-h-screen">
      <a
        href="#main-content"
        className="bg-primary text-primary-foreground focus-visible:ring-ring sr-only z-50 min-h-11 items-center px-4 focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:flex focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        Skip to layout content
      </a>
      {children}
    </div>
  );
}
