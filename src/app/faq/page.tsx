import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { EditorialShell } from "@/components/layout/editorial-shell";
import { EditorialPageHeader } from "@/components/layout/editorial-page-header";
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
      <EditorialShell>
        <main id="main-content" className="editorial-inner">
          <div className="editorial-rail">
            <EditorialPageHeader title="The questions that matter before a workflow moves." />
          </div>

          <section className="border-b pb-12">
            <div className="editorial-rail">
              <Accordion type="single" collapsible className="max-w-4xl border-t">
                {homepageFaqs.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`item-${index}`}>
                    <AccordionTrigger className="py-6 text-left text-lg font-medium hover:underline">
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

          <section className="py-12 sm:py-16">
            <div className="editorial-rail flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="font-heading max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
                Bring the question and the workflow behind it.
              </h2>
              <Button size="lg" asChild>
                <Link href="/book-demo">
                  Book a workflow demo <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </section>
        </main>
      </EditorialShell>
    </>
  );
}
