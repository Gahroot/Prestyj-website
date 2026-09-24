import { Newsreader } from "next/font/google";
import type { ReactElement, ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import "@/components/layout/editorial.css";

const newsreader = Newsreader({
  variable: "--font-editorial",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

export function EditorialShell({ children }: { children: ReactNode }): ReactElement {
  return (
    <div className={`${newsreader.variable} editorial-theme editorial-site`}>
      <a className="editorial-skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar appearance="editorial" />
      {children}
      <Footer appearance="editorial" />
    </div>
  );
}
