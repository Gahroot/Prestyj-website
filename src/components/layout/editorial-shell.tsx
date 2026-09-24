import type { ReactElement, ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import "@/components/layout/editorial.css";

export function EditorialShell({ children }: { children: ReactNode }): ReactElement {
  return (
    <div className="editorial-theme editorial-site">
      <a className="editorial-skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar appearance="editorial" />
      {children}
      <Footer appearance="editorial" />
    </div>
  );
}
