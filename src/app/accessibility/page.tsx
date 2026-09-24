import type { Metadata } from "next";

import { EditorialShell } from "@/components/layout/editorial-shell";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Prestyj's accessibility approach and contact channel for prestyj.com.",
  alternates: { canonical: `${siteConfig.url}/accessibility` },
};

export default function AccessibilityPage() {
  return (
    <EditorialShell>
      <main id="main-content" className="editorial-rail editorial-inner">
        <article className="editorial-reading">
          <header className="editorial-page-header">
            <p className="text-primary text-sm font-semibold">Accessibility</p>
            <h1 className="font-heading mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Help us remove a barrier.
            </h1>
            <p className="text-muted-foreground mt-6 leading-7">
              Prestyj aims to make prestyj.com usable with a keyboard, screen reader, zoom, reduced
              motion, and common assistive technologies. This statement describes an ongoing
              engineering commitment, not a certification or legal-conformance claim.
            </p>
          </header>

          <section className="mt-10 border-t pt-8">
            <h2 className="font-heading text-2xl font-bold">What we prioritize</h2>
            <ul className="text-muted-foreground mt-5 list-disc space-y-3 pl-5 leading-7">
              <li>Semantic headings, landmarks, links, buttons, labels, and status messages.</li>
              <li>Visible keyboard focus and complete keyboard operation.</li>
              <li>Readable contrast, zoom, reflow, and touch target size.</li>
              <li>Reduced-motion behavior and text alternatives for meaningful media.</li>
              <li>Clear errors and recovery on forms that collect information.</li>
            </ul>
          </section>

          <section className="mt-10 border-t pt-8">
            <h2 className="font-heading text-2xl font-bold">Report a problem</h2>
            <p className="text-muted-foreground mt-5 leading-7">
              Email{" "}
              <a className="text-primary hover:underline" href="mailto:accessibility@prestyj.com">
                accessibility@prestyj.com
              </a>{" "}
              with the page, the task you were trying to complete, and the assistive technology or
              browser involved if you are comfortable sharing it. We will acknowledge the report and
              work toward an accessible alternative.
            </p>
          </section>
        </article>
      </main>
    </EditorialShell>
  );
}
