"use client";

import { ComparePageWrapper } from "@/components/sections/compare/ComparePageWrapper";
import {
  aiLeadGenVsTraditionalData,
  traditionalMethodPainPoints,
  aiLeadGenBenefits,
  aiVsTraditionalFAQ,
} from "@/lib/compare/data/ai-lead-generation-vs-traditional";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { AlertCircle, CheckCircle, Zap } from "lucide-react";
import BorderGlow from "@/components/ui/border-glow";

export default function AILeadGenerationVsTraditionalPage() {
  return (
    <>
      <ComparePageWrapper data={aiLeadGenVsTraditionalData} />

      {/* Traditional Pain Points Section */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="mb-12 text-center">
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
              The Problem with Traditional Lead Generation
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Manual lead handling creates bottlenecks that cost you deals. Here&apos;s why
              traditional methods are holding you back.
            </p>
          </AnimateOnScroll>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {traditionalMethodPainPoints.map((point, index) => (
              <AnimateOnScroll key={index} delay={index * 0.1}>
                <BorderGlow borderRadius={10} innerClassName="p-6" className="h-full">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="text-destructive mt-1 h-5 w-5 flex-shrink-0" />
                    <div>
                      <h3 className="font-heading text-foreground mb-2 font-semibold">
                        {point.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{point.description}</p>
                    </div>
                  </div>
                </BorderGlow>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* AI Benefits Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="mb-12 text-center">
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
              Why AI Lead Generation Wins
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              AI-powered lead generation eliminates the bottlenecks of traditional methods, helping
              you convert more leads into customers.
            </p>
          </AnimateOnScroll>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {aiLeadGenBenefits.map((benefit, index) => (
              <AnimateOnScroll key={index} delay={index * 0.1}>
                <BorderGlow borderRadius={10} innerClassName="p-6" className="h-full">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <div>
                      <h3 className="font-heading text-foreground mb-2 font-semibold">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </div>
                  </div>
                </BorderGlow>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="mb-12 text-center">
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
              AI vs Traditional: Your Questions Answered
            </h2>
            <p className="text-muted-foreground text-lg">
              Common questions about making the switch from manual to AI-powered lead generation.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <Accordion type="single" collapsible className="space-y-4">
              {aiVsTraditionalFAQ.map((faq, index) => (
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

      {/* Final CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="from-primary/10 to-primary/5 border-primary/20 rounded-2xl border bg-gradient-to-br p-8 sm:p-12">
              <Zap className="text-primary mx-auto mb-6 h-12 w-12" />
              <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
                Ready to Leave Traditional Behind?
              </h2>
              <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
                Join businesses that have already switched to AI-powered lead generation. See the
                difference in your first week.
              </p>
              <a
                href="/book-demo"
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-lg px-8 py-3 text-sm font-semibold transition-colors"
              >
                Book a Demo
              </a>
              <p className="text-muted-foreground mt-4 text-sm">
                No credit card required. See it work with your leads.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
