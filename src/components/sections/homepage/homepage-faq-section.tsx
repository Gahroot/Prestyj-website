"use client";

import type { ReactElement } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { homepageFaqs } from "@/lib/homepage-faq-data";

export function HomepageFaqSection(): ReactElement {
  return (
    <section id="faq" aria-labelledby="homepage-faq-title" className="border-b py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.65fr_1.35fr] lg:px-8">
        <div>
          <h2
            id="homepage-faq-title"
            className="font-heading text-3xl font-bold tracking-tight sm:text-4xl"
          >
            What a firm usually asks first
          </h2>
          <p className="text-muted-foreground mt-5 leading-7">
            Mostly: where the data lives, who can see it, and whether the answer holds up in front
            of a committee.
          </p>
        </div>

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
  );
}
