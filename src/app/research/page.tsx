import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { researchArticles } from "@/lib/institutional/research";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Field notes on AI agents for real estate fund operations, diligence, investor reporting, portfolio intelligence, and commercial brokerage.",
  alternates: { canonical: `${siteConfig.url}/research` },
};

const calculators = [
  ["Commercial brokerage inbound", "/commercial-real-estate-commission-calculator"],
] as const;

export default function ResearchPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="border-b pt-32 pb-20 sm:pt-40 sm:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-primary text-sm font-semibold">Research</p>
            <h1 className="font-heading mt-5 max-w-5xl text-4xl font-bold tracking-tight sm:text-6xl">
              Field notes from the work behind the agent.
            </h1>
            <p className="text-muted-foreground mt-6 max-w-3xl text-lg leading-8">
              No generic AI forecasts. These notes cover workflow boundaries, evidence, review, and
              deployment decisions inside institutional real estate.
            </p>
          </div>
        </section>

        <section aria-labelledby="articles-title" className="border-b py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="articles-title" className="font-heading text-3xl font-bold">
              Latest notes
            </h2>
            <ul className="mt-8 border-t">
              {researchArticles.map((article) => (
                <li key={article.slug} className="border-b">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="hover:text-primary focus-visible:ring-ring grid gap-4 py-7 transition-colors focus-visible:ring-2 focus-visible:outline-none sm:grid-cols-[10rem_1fr_auto]"
                  >
                    <span className="text-muted-foreground text-sm">{article.category}</span>
                    <span>
                      <strong className="font-heading block text-xl">{article.title}</strong>
                      <span className="text-muted-foreground mt-2 block text-sm leading-6">
                        {article.description}
                      </span>
                    </span>
                    <ArrowRight aria-hidden="true" className="h-5 w-5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="calculators-title" className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="calculators-title" className="font-heading text-3xl font-bold">
              Calculators
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl leading-7">
              Planning tools only. Outputs are estimates, not investment, legal, tax, or accounting
              advice.
            </p>
            <ul className="mt-8 grid border-t sm:grid-cols-2">
              {calculators.map(([label, href]) => (
                <li key={href} className="border-b sm:odd:border-r">
                  <Link
                    href={href}
                    className="flex items-center justify-between gap-4 py-6 sm:px-6 sm:odd:pl-0"
                  >
                    <span className="font-semibold">{label}</span>
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
