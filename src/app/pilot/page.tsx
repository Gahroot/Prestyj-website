import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Proof-of-work pilot",
  description:
    "Bring one institutional real estate workflow to a scoped Prestyj proof with representative records, reconciliation, and a named review owner.",
  alternates: { canonical: `${siteConfig.url}/pilot` },
};

export default function PilotPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="border-b pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-primary text-sm font-semibold">Proof-of-work pilot</p>
            <h1 className="font-heading mt-5 max-w-5xl text-4xl font-bold tracking-tight sm:text-6xl">
              Prove one workflow before you fund a transformation.
            </h1>
            <p className="text-muted-foreground mt-6 max-w-3xl text-lg leading-8">
              A pilot takes one recurring work product, runs representative records through a
              controlled agent, and reconciles the result beside your current process.
            </p>
          </div>
        </section>

        <section className="border-b py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="font-heading text-3xl font-bold">A good pilot has</h2>
              <ul className="mt-8 space-y-4">
                {[
                  "A recurring, expensive, reviewable workflow",
                  "Representative source records with known answers",
                  "A person who owns the current output",
                  "Clear exception and release rules",
                  "A result the team can compare against today's process",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check aria-hidden="true" className="text-primary mt-1 h-4 w-4 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-l pl-6">
              <h2 className="font-heading text-3xl font-bold">It does not require</h2>
              <p className="text-muted-foreground mt-6 leading-7">
                A software replacement, a company-wide license, synthetic ROI promises, or a
                production deployment before the output has earned trust. Scope and price follow the
                workflow after discovery.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
            <h2 className="font-heading max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
              Bring one work product your team rebuilt this month.
            </h2>
            <Button size="lg" asChild>
              <Link href="/book-demo">
                Scope a pilot <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
