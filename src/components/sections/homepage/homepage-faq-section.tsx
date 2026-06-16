"use client";

import type { ReactElement } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BorderGlow from "@/components/ui/border-glow";
import { homepageFaqs } from "@/lib/homepage-faq-data";

export function HomepageFaqSection(): ReactElement {
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            Questions people ask before they trust a live AI demo.
          </h2>
          <p className="text-muted-foreground text-lg">
            The short version: we build practical AI systems, keep the demo
            consent-gated, and route you to the right offer instead of forcing one.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {homepageFaqs.map((faq, index) => (
            <BorderGlow key={faq.question} borderRadius={10} innerClassName="px-6">
              <AccordionItem value={`item-${index}`} className="border-none">
                <AccordionTrigger className="font-heading text-foreground text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-7">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </BorderGlow>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
