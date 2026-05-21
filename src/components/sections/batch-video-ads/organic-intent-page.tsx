"use client";

import Link from "next/link";
import { ArrowRight, Check, ExternalLink, Sparkles } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Badge } from "@/components/ui/badge";
import BorderGlow from "@/components/ui/border-glow";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { OrganicIntentPage as OrganicIntentPageContent } from "@/lib/batch-video-ads/organic-pages";

interface OrganicIntentPageProps {
  page: OrganicIntentPageContent;
}

export function OrganicIntentPage({ page }: OrganicIntentPageProps) {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden px-4 pt-24 pb-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.16),_transparent_42%)]" />
        <div className="mx-auto max-w-6xl">
          <AnimateOnScroll className="mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="border-primary/50 text-primary mb-6">
              {page.eyebrow}
            </Badge>
            <h1 className="font-heading text-foreground mb-6 text-4xl font-bold sm:text-5xl md:text-6xl">
              {page.headline}
              <span className="text-primary mt-2 block">{page.highlightedHeadline}</span>
            </h1>
            <p className="text-muted-foreground mx-auto mb-8 max-w-3xl text-lg md:text-xl">
              {page.subheadline}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="font-bold" asChild>
                <Link href="/batch-video-ads#pricing">
                  {page.primaryCta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={page.secondaryCta.href}>{page.secondaryCta.label}</Link>
              </Button>
            </div>
          </AnimateOnScroll>

          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
            {page.stats.map((stat, index) => (
              <AnimateOnScroll key={stat.label} delay={index * 0.08}>
                <BorderGlow borderRadius={18} innerClassName="p-6 text-center h-full">
                  <div className="text-primary text-4xl font-bold md:text-5xl">{stat.value}</div>
                  <div className="text-foreground mt-3 font-semibold">{stat.label}</div>
                  <p className="text-muted-foreground mt-2 text-sm">{stat.detail}</p>
                </BorderGlow>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/20 border-border/50 border-y px-4 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <AnimateOnScroll>
            {page.problem.eyebrow ? (
              <Badge variant="outline" className="border-primary/40 text-primary mb-4">
                {page.problem.eyebrow}
              </Badge>
            ) : null}
            <h2 className="font-heading text-foreground mb-6 text-3xl font-bold md:text-4xl">
              {page.problem.title}
            </h2>
            <div className="space-y-4">
              {page.problem.body.map((paragraph) => (
                <p key={paragraph} className="text-muted-foreground text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.12}>
            <BorderGlow borderRadius={18} innerClassName="p-7">
              <div className="mb-5 flex items-center gap-3">
                <div className="bg-primary/15 text-primary flex h-10 w-10 items-center justify-center rounded-full">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                    Search intent
                  </p>
                  <h3 className="font-heading text-foreground text-xl font-bold">
                    {page.intentLabel}
                  </h3>
                </div>
              </div>
              <ul className="space-y-4">
                {page.problem.bullets?.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <Check className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                    <span className="text-muted-foreground">{bullet}</span>
                  </li>
                ))}
              </ul>
            </BorderGlow>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <AnimateOnScroll className="mb-12 text-center">
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-4xl">
              Why this approach works
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
              Batch creative works because it turns paid-social learning into a production system.
            </p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {page.proofCards.map((card, index) => (
              <AnimateOnScroll key={card.title} delay={index * 0.08}>
                <BorderGlow borderRadius={18} innerClassName="p-7 h-full">
                  <span className="text-primary font-mono text-xs">0{index + 1}</span>
                  <h3 className="font-heading text-foreground mt-3 mb-3 text-xl font-bold">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{card.body}</p>
                </BorderGlow>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/20 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <AnimateOnScroll className="mb-12 text-center">
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-4xl">
              {page.processTitle}
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-lg">{page.processIntro}</p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {page.steps.map((step, index) => (
              <AnimateOnScroll key={step.title} delay={index * 0.08}>
                <div className="border-border bg-background/60 h-full rounded-2xl border p-7">
                  <div className="bg-primary/15 text-primary mb-5 flex h-11 w-11 items-center justify-center rounded-full font-mono text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-heading text-foreground mb-3 text-xl font-bold">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{step.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <AnimateOnScroll className="mb-10 text-center">
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-4xl">
              {page.comparisonTitle}
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
              The economics are different when each variation costs dollars instead of hundreds.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <BorderGlow borderRadius={18} innerClassName="p-2 md:p-4">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="border-border border-b">
                    <tr>
                      <th className="font-heading text-foreground p-4 font-bold">Factor</th>
                      <th className="font-heading text-foreground p-4 font-bold">Old way</th>
                      <th className="font-heading text-primary p-4 font-bold">Batch way</th>
                    </tr>
                  </thead>
                  <tbody>
                    {page.comparisonRows.map((row) => (
                      <tr key={row.label} className="border-border/60 border-b last:border-0">
                        <td className="text-foreground p-4 font-medium">{row.label}</td>
                        <td className="text-muted-foreground p-4">{row.oldWay}</td>
                        <td className="text-foreground p-4 font-semibold">{row.batchWay}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </BorderGlow>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="bg-muted/20 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <AnimateOnScroll className="mb-12 text-center">
            <Badge variant="outline" className="border-primary/40 text-primary mb-4">
              NEXT STEPS
            </Badge>
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-4xl">
              Useful resources before you launch
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
              Use these pages to size the batch, estimate economics, and connect the test to your media plan.
            </p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {page.relatedLinks.map((link, index) => (
              <AnimateOnScroll key={link.href} delay={index * 0.05}>
                <Link
                  href={link.href}
                  className="border-border bg-background/70 hover:border-primary/50 block h-full rounded-2xl border p-6 transition-colors"
                >
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <h3 className="font-heading text-foreground font-bold">{link.label}</h3>
                    <ExternalLink className="text-primary h-4 w-4 flex-shrink-0" />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{link.description}</p>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <AnimateOnScroll className="mb-10 text-center">
            <h2 className="font-heading text-foreground text-3xl font-bold md:text-4xl">
              Frequently asked questions
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <Accordion type="single" collapsible className="border-border rounded-2xl border px-6">
              {page.faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`}>
                  <AccordionTrigger className="text-foreground text-left text-base font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="px-4 pb-24">
        <AnimateOnScroll>
          <div className="bg-primary text-primary-foreground mx-auto max-w-5xl rounded-3xl p-8 text-center md:p-12">
            <h2 className="font-heading mb-4 text-3xl font-bold md:text-4xl">
              Turn one recording into your next creative test.
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
              Choose 100, 300, 500, or 1,000 video ads and give your media buyer enough creative to learn what actually moves the market.
            </p>
            <Button size="lg" variant="secondary" className="font-bold" asChild>
              <Link href="/batch-video-ads#pricing">
                See batch pricing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </AnimateOnScroll>
      </section>
    </main>
  );
}
