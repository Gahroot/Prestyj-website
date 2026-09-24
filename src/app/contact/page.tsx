import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";

import { EditorialShell } from "@/components/layout/editorial-shell";
import { EditorialPageHeader } from "@/components/layout/editorial-page-header";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Prestyj about an institutional real estate workflow or existing engagement.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactPage(): React.ReactElement {
  return (
    <EditorialShell>
      <main id="main-content" className="editorial-rail editorial-inner">
        <section className="editorial-split py-10 sm:py-16">
          <div>
            <EditorialPageHeader title="Tell us where the work gets stuck.">
              <p>Name the workflow, the systems behind it, and the output your team needs back.</p>
            </EditorialPageHeader>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-primary mt-6 inline-flex items-center gap-2 hover:underline"
            >
              <Mail aria-hidden="true" className="h-4 w-4" /> {siteConfig.email}
            </a>
            <div className="mt-8">
              <Link href="/book-demo" className="editorial-text-link underline">
                Book a workflow demo
              </Link>
            </div>
          </div>

          <div className="border-t pt-6">
            <h2 className="font-heading text-2xl font-bold">Send a message</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </EditorialShell>
  );
}
