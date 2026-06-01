import Link from "next/link";
import { ArrowRight, Check, ExternalLink, Sparkles } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import BorderGlow from "@/components/ui/border-glow";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { AiOfferPageData, AiOfferTable } from "@/lib/ai-offer-pages";

interface AiOfferPageProps {
  page: AiOfferPageData;
}

interface OfferTableProps {
  table: AiOfferTable;
  emphasizedColumnIndex?: number;
}

function OfferTable({ table, emphasizedColumnIndex }: OfferTableProps) {
  return (
    <BorderGlow borderRadius={18} innerClassName="p-3 md:p-5">
      <div className="mb-6 px-2 pt-2">
        <h2 className="font-heading text-foreground text-3xl font-bold md:text-4xl">{table.title}</h2>
        <p className="text-muted-foreground mt-3 max-w-3xl text-lg">{table.description}</p>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            {table.columns.map((column, index) => (
              <TableHead
                key={column}
                className={index === emphasizedColumnIndex ? "text-primary font-bold" : undefined}
              >
                {column}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {table.rows.map((row) => (
            <TableRow key={row.label}>
              <TableCell className="text-foreground font-semibold">{row.label}</TableCell>
              {row.values.map((value, index) => (
                <TableCell
                  key={`${row.label}-${table.columns[index + 1] ?? index}`}
                  className={index + 1 === emphasizedColumnIndex ? "text-foreground font-semibold" : "text-muted-foreground"}
                >
                  {value}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </BorderGlow>
  );
}

export function AiOfferPage({ page }: AiOfferPageProps) {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden px-4 pt-24 pb-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.16),_transparent_42%)]" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="border-primary/50 text-primary mb-6">
              {page.hero.eyebrow}
            </Badge>
            <h1 className="font-heading text-foreground mb-6 text-4xl font-bold sm:text-5xl md:text-6xl">
              {page.hero.headline}
              <span className="text-primary mt-2 block">{page.hero.accent}</span>
            </h1>
            <p className="text-muted-foreground mx-auto mb-8 max-w-3xl text-lg md:text-xl">
              {page.hero.subheadline}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="font-bold" asChild>
                <Link href={page.hero.primaryCta.href}>
                  {page.hero.primaryCta.label}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={page.hero.secondaryCta.href}>{page.hero.secondaryCta.label}</Link>
              </Button>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
            {page.hero.stats.map((stat) => (
              <BorderGlow key={stat.label} borderRadius={18} innerClassName="p-6 text-center h-full">
                <div className="text-primary text-4xl font-bold md:text-5xl">{stat.value}</div>
                <div className="text-foreground mt-3 font-semibold">{stat.label}</div>
                <p className="text-muted-foreground mt-2 text-sm">{stat.detail}</p>
              </BorderGlow>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/20 border-border/50 border-y px-4 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <BorderGlow borderRadius={18} innerClassName="p-7">
            <div className="mb-5 flex items-center gap-3">
              <div className="bg-primary/15 text-primary flex h-10 w-10 items-center justify-center rounded-full">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">TL;DR</p>
                <h2 className="font-heading text-foreground text-2xl font-bold">{page.tldr.title}</h2>
              </div>
            </div>
            <ul className="space-y-4">
              {page.tldr.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <Check className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </BorderGlow>

          <div>
            <Badge variant="outline" className="border-primary/40 text-primary mb-4">
              {page.utilitySection.eyebrow}
            </Badge>
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-4xl">
              {page.utilitySection.title}
            </h2>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              {page.utilitySection.description}
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {page.utilitySection.cards.map((card) => (
                <div key={card.title} className="border-border bg-background/70 rounded-2xl border p-5">
                  <h3 className="font-heading text-foreground mb-2 font-bold">{card.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <OfferTable table={page.pricingTable} emphasizedColumnIndex={1} />
        </div>
      </section>

      <section className="bg-muted/20 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <OfferTable table={page.alternativesTable} emphasizedColumnIndex={1} />
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="border-primary/40 text-primary mb-4">
              {page.processSection.eyebrow}
            </Badge>
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-4xl">
              {page.processSection.title}
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
              {page.processSection.description}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {page.processSection.cards.map((card, index) => (
              <div key={card.title} className="border-border bg-background/60 h-full rounded-2xl border p-7">
                <div className="bg-primary/15 text-primary mb-5 flex h-11 w-11 items-center justify-center rounded-full font-mono text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="font-heading text-foreground mb-3 text-xl font-bold">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/20 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="border-primary/40 text-primary mb-4">
              CITABLE RESOURCES
            </Badge>
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-4xl">
              Related commercial and research pages
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
              Use these pages to verify costs, compare alternatives, and route buyers to the most specific Prestyj page.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {page.relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-border bg-background/70 hover:border-primary/50 block h-full rounded-2xl border p-6 transition-colors"
              >
                <div className="mb-4 flex items-center justify-between gap-4">
                  <h3 className="font-heading text-foreground font-bold">{link.label}</h3>
                  <ExternalLink className="text-primary h-4 w-4 flex-shrink-0" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-foreground text-3xl font-bold md:text-4xl">
              Frequently asked questions
            </h2>
          </div>
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
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="bg-primary text-primary-foreground mx-auto max-w-5xl rounded-3xl p-8 text-center md:p-12">
          <h2 className="font-heading mb-4 text-3xl font-bold md:text-4xl">{page.finalCta.title}</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">{page.finalCta.description}</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" className="font-bold" asChild>
              <Link href={page.finalCta.primaryCta.href}>
                {page.finalCta.primaryCta.label}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            {page.finalCta.secondaryCta ? (
              <Button size="lg" variant="outline" className="border-primary-foreground/40 bg-transparent font-bold" asChild>
                <Link href={page.finalCta.secondaryCta.href}>{page.finalCta.secondaryCta.label}</Link>
              </Button>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
