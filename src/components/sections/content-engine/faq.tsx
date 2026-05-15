"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import BorderGlow from "@/components/ui/border-glow";
import { defaultContentEngineConfig, type FaqConfig } from "@/lib/content-engine";

interface ContentEngineFAQProps {
  config?: FaqConfig;
}

export function ContentEngineFAQ({
  config = defaultContentEngineConfig.faq,
}: ContentEngineFAQProps) {
  const { headline, subhead, faqs } = config;

  return (
    <section id="faq" className="bg-muted/20 py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-12 text-center">
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            {headline}
          </h2>
          <p className="text-muted-foreground text-lg">{subhead}</p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <BorderGlow key={index} borderRadius={10} innerClassName="px-6">
                <AccordionItem value={`item-${index}`} className="border-none">
                  <AccordionTrigger className="font-heading text-foreground text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </BorderGlow>
            ))}
          </Accordion>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
