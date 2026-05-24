import type { ReactElement } from "react";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { findStatById } from "@/lib/statistics";
import { cn } from "@/lib/utils";

interface CitationStatsSectionProps {
  statIds: string[];
  eyebrow?: string;
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
  className?: string;
}

export function CitationStatsSection({
  statIds,
  eyebrow = "Citable benchmarks",
  title,
  description,
  cta,
  className,
}: CitationStatsSectionProps): ReactElement | null {
  const stats = statIds.map((id) => findStatById(id)).filter((stat) => stat !== undefined);

  if (stats.length === 0) {
    return null;
  }

  return (
    <section className={cn("px-4 py-20 sm:px-6 lg:px-8", className)}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <Badge variant="outline" className="border-primary/50 text-primary mb-4">
            <Quote className="h-3.5 w-3.5" />
            {eyebrow}
          </Badge>
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-5xl">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Link
              key={stat.id}
              href={`/stat/${stat.id}`}
              className="border-border bg-background/70 hover:border-primary/50 group flex h-full flex-col rounded-2xl border p-5 transition-colors"
            >
              <p className="font-heading text-primary mb-3 text-3xl font-bold">{stat.value}</p>
              <p className="text-foreground mb-4 flex-1 text-sm leading-relaxed">
                {stat.description}
              </p>
              <div className="border-border/60 mt-auto border-t pt-3">
                <p className="text-muted-foreground mb-3 text-xs">
                  Source: {stat.source.name} ({stat.source.year})
                </p>
                <span className="text-primary inline-flex items-center gap-1 text-xs font-semibold">
                  Cite this stat
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted-foreground text-sm">
            Each number has a permanent URL, source note, embed widget, and citation format.
          </p>
          <Button asChild>
            <Link href={cta.href}>
              {cta.label}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
