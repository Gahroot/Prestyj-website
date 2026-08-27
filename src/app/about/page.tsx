import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Prestyj builds and operates AI agents for institutional real estate workflows, led by Nolan Grout.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

const work = [
  ["Fund operations", "Multi-currency NAV, performance reporting, and investor-scoped portals."],
  [
    "Governed intelligence",
    "Tenant isolation, evidence lineage, approval gates, and audit records.",
  ],
  [
    "Diligence",
    "Versioned assessment, identity checks, source-backed conclusions, and signed output.",
  ],
  ["Origination", "Live voice and SMS agents that qualify, book, transcribe, and hand off."],
  ["Media operations", "Creative production and multi-platform publishing held behind approval."],
] as const;

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="border-b pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-primary text-sm font-semibold">About Prestyj</p>
            <h1 className="font-heading mt-5 max-w-5xl text-4xl font-bold tracking-tight text-balance sm:text-6xl">
              Build the agent around the work, not the demo.
            </h1>
            <p className="text-muted-foreground mt-6 max-w-3xl text-lg leading-8">
              Prestyj is led by Nolan Grout. The company exists to turn difficult operating
              workflows into controlled systems that deliver finished work, not more software for
              the team to administer.
            </p>
          </div>
        </section>

        <section aria-labelledby="work-title" className="border-b py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.6fr_1.4fr] lg:px-8">
            <div>
              <h2 id="work-title" className="font-heading text-3xl font-bold tracking-tight">
                The work behind the position
              </h2>
              <p className="text-muted-foreground mt-5 leading-7">
                The institutional position comes from systems already built across these operating
                problems.
              </p>
            </div>
            <dl className="border-t">
              {work.map(([term, detail]) => (
                <div key={term} className="grid gap-4 border-b py-6 sm:grid-cols-[11rem_1fr]">
                  <dt className="font-semibold">{term}</dt>
                  <dd className="text-muted-foreground leading-7">{detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="border-b py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="font-heading text-3xl font-bold tracking-tight">What we believe</h2>
              <p className="text-muted-foreground mt-5 leading-7">
                The best agent starts with a narrow responsibility, a known source, a visible
                exception path, and one person who owns the release.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold tracking-tight">What we refuse</h2>
              <p className="text-muted-foreground mt-5 leading-7">
                We do not hide source conflicts, invent proof, sell a generic chatbot as a fund
                operating model, or ask a team to replace a working system before the new workflow
                has proven itself.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
            <h2 className="font-heading max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
              Show us the workflow your firm keeps carrying by hand.
            </h2>
            <Button size="lg" asChild>
              <Link href="/book-demo">
                Get access <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
