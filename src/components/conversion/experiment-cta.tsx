"use client";

import Link from "next/link";
import { useEffect, useState, type ReactElement, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CTA_ID_ATTR, CTA_VARIANT_ATTR } from "@/lib/attribution/cta";
import {
  defaultVariant,
  fillCtaCopy,
  pickVariant,
  type CtaExperiment,
  type CtaVariant,
} from "@/lib/conversion/cta-experiments";
import { getOrCreateVisitorId } from "@/lib/conversion/visitor-id";

type ExperimentCtaProps = {
  experiment: CtaExperiment;
  ctaId: string;
  href: string;
  workflow: string;
  headingLevel?: "h2" | "h3";
  className?: string;
  children?: ReactNode;
};

/**
 * Renders the default variant on the server, then the visitor's bucketed variant after
 * hydration. The variant attribute appears only once resolved, so cta_view reports the
 * variant actually seen.
 */
export function ExperimentCta({
  experiment,
  ctaId,
  href,
  workflow,
  headingLevel = "h2",
  className,
  children,
}: ExperimentCtaProps): ReactElement | null {
  const [variant, setVariant] = useState<CtaVariant | undefined>(() => defaultVariant(experiment));
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    const visitorId = getOrCreateVisitorId();
    queueMicrotask(() => {
      if (visitorId) setVariant(pickVariant(experiment, visitorId));
      setResolved(true);
    });
  }, [experiment]);

  if (!variant) return null;
  const Heading = headingLevel;
  const variantAttr = resolved ? { [CTA_VARIANT_ATTR]: variant.id } : {};

  return (
    <aside
      className={className}
      aria-label="Book a workflow demo"
      {...{ [CTA_ID_ATTR]: ctaId }}
      {...variantAttr}
    >
      <Heading className="font-heading text-2xl font-bold tracking-tight text-balance">
        {fillCtaCopy(variant.headline, workflow)}
      </Heading>
      {variant.body ? (
        <p className="text-muted-foreground mt-3 max-w-2xl leading-7">
          {fillCtaCopy(variant.body, workflow)}
        </p>
      ) : null}
      <div className="mt-5">
        <Button asChild>
          <Link href={href} {...{ [CTA_ID_ATTR]: ctaId }} {...variantAttr}>
            {fillCtaCopy(variant.buttonLabel, workflow)} <ArrowUpRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
      {children}
    </aside>
  );
}
