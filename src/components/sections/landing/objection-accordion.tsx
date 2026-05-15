"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { SolutionObjections } from "@/lib/solutions/types";
import BorderGlow from "@/components/ui/border-glow";

interface ObjectionAccordionProps {
  content: SolutionObjections;
}

export function ObjectionAccordion({ content }: ObjectionAccordionProps) {
  return (
    <section id="objections" className="py-24" aria-labelledby="objections-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2
            id="objections-heading"
            className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl"
          >
            {content.headline}
          </h2>
          <p className="text-muted-foreground text-lg">{content.subheadline}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <BorderGlow borderRadius={14} className="shadow-sm">
            <Accordion type="single" collapsible>
              {content.objections.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border px-6">
                  <AccordionTrigger className="text-foreground hover:text-primary py-5 text-left text-base font-medium hover:no-underline">
                    <span className="pr-4">&ldquo;{item.objection}&rdquo;</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {item.response}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </BorderGlow>
        </motion.div>
      </div>
    </section>
  );
}
