import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Prestyj about an institutional real estate workflow or existing engagement.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactPage(): React.ReactElement {
  return (
    <>
      <Navbar />
      <main>
        <section className="border-b pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-primary text-sm font-semibold">Contact</p>
            <h1 className="font-heading mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
              Tell us where the work gets stuck.
            </h1>
            <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-8">
              Name the workflow, the systems behind it, and the output your team needs back.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
            <aside>
              <h2 className="font-heading text-2xl font-bold">Talk to a person</h2>
              <p className="text-muted-foreground mt-4 leading-7">
                For a new workflow, use Get access so the request reaches the right intake. For
                anything else, email us or send the form.
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-primary mt-6 inline-flex items-center gap-2 hover:underline"
              >
                <Mail aria-hidden="true" className="h-4 w-4" /> {siteConfig.email}
              </a>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/book-demo">
                    Get access <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </aside>

            <div className="border p-6 sm:p-8">
              <h2 className="font-heading text-2xl font-bold">Send a message</h2>
              <p className="text-muted-foreground mt-2 mb-6 text-sm leading-6">
                We use the information below only to respond and route your request.
              </p>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
