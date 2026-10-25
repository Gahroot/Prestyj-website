import Link from "next/link";
import type { ReactElement, ReactNode } from "react";
import { ArrowUpRight, ChevronRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import type { ConnectorFaq } from "@/lib/connectors/services";
import { referenceBuildStage, referenceBuilds } from "@/lib/connectors/reference-builds";

export function ConnectorBreadcrumb({
  items,
}: {
  items: readonly { label: string; href?: string }[];
}): ReactElement {
  return (
    <nav aria-label="Breadcrumb" className="text-muted-foreground mb-8 text-sm">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {index > 0 && <ChevronRight size={13} aria-hidden="true" />}
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-foreground underline-offset-4 hover:underline"
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-foreground">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function ConnectorSection({
  id,
  title,
  intro,
  muted = false,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  muted?: boolean;
  children: ReactNode;
}): ReactElement {
  return (
    <section
      aria-labelledby={id}
      className={`border-t py-16 sm:py-20 ${muted ? "bg-muted/40" : ""}`}
    >
      <div className="editorial-rail grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <div>
          <h2 id={id} className="font-heading text-3xl font-bold tracking-tight text-balance">
            {title}
          </h2>
          {intro && <p className="text-muted-foreground mt-4 max-w-md leading-7">{intro}</p>}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

export function ConnectorFaqList({ faqs }: { faqs: readonly ConnectorFaq[] }): ReactElement {
  return (
    <Accordion type="single" collapsible className="border-t">
      {faqs.map((faq, index) => (
        <AccordionItem key={faq.question} value={`faq-${index}`}>
          <AccordionTrigger className="py-5 text-left text-base font-medium hover:underline">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pb-5 leading-7">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function ReferenceBuilds({ headingId }: { headingId: string }): ReactElement {
  return (
    <ConnectorSection
      id={headingId}
      title="MCP servers we have built"
      intro={referenceBuildStage}
      muted
    >
      <ul className="grid gap-6 md:grid-cols-2">
        {referenceBuilds.map((build) => (
          <li key={build.name} className="bg-background border p-6">
            <h3 className="text-base font-semibold">{build.name}</h3>
            <p className="text-muted-foreground mt-1 text-xs">{build.systems.join(" · ")}</p>
            <p className="mt-4 text-sm leading-6">{build.summary}</p>
            <ul className="text-muted-foreground mt-4 list-disc space-y-2 pl-5 text-sm leading-6">
              {build.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </ConnectorSection>
  );
}

export function ConnectorLinkList({
  links,
}: {
  links: readonly { href: string; label: string; description?: string }[];
}): ReactElement {
  return (
    <ul className="border-t">
      {links.map((link) => (
        <li key={link.href} className="border-b">
          <Link
            href={link.href}
            className="group flex items-start justify-between gap-6 py-5 hover:underline"
          >
            <span>
              <span className="font-medium">{link.label}</span>
              {link.description && (
                <span className="text-muted-foreground mt-1 block text-sm leading-6">
                  {link.description}
                </span>
              )}
            </span>
            <ArrowUpRight size={16} aria-hidden="true" className="mt-1 shrink-0" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function ConnectorClosing({ title, body }: { title: string; body: string }): ReactElement {
  return (
    <section aria-labelledby="connector-next-step" className="border-t py-16 sm:py-20">
      <div className="editorial-rail flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2
            id="connector-next-step"
            className="font-heading max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl"
          >
            {title}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl leading-7">{body}</p>
        </div>
        <Button size="lg" asChild>
          <Link href="/book-demo">
            Book a scoping call <ArrowUpRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
