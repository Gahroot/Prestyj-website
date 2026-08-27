import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { FAQJsonLd } from "@/components/seo/json-ld";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { homepageFaqs } from "@/lib/homepage-faq-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Frequently asked questions",
  description:
    "Answers about Prestyj's institutional real estate AI agents, data boundaries, source evidence, review gates, integrations, deployment, and engagement scope.",
  alternates: { canonical: `${siteConfig.url}/faq` },
};

export default function FAQPage() {
  return (
    <>
      <FAQJsonLd faqs={homepageFaqs} />
      <Navbar />
      <main>
        <section className="border-b pt-32 pb-20 sm:pt-40 sm:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-primary text-sm font-semibold">FAQ</p>
            <h1 className="font-heading mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
              The questions that matter before a workflow moves.
            </h1>
          </div>
        </section>

        <section className="border-b py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Accordion type="single" collapsible className="border-t">
              {homepageFaqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index}`}>
                  <AccordionTrigger className="font-heading py-6 text-left text-lg font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground max-w-3xl pb-6 leading-7">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
            <h2 className="font-heading max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
              Bring the question and the workflow behind it.
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
