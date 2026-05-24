"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { CopyButton } from "@/components/ui/copy-button";
import type { StatCategory } from "@/lib/statistics-data";
import Link from "next/link";

interface StatCategorySectionProps {
  category: StatCategory;
  index: number;
}

export function StatCategorySection({ category, index }: StatCategorySectionProps) {
  const isEven = index % 2 === 0;

  return (
    <section
      id={category.slug}
      className={`scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 ${isEven ? "" : "bg-card/50"}`}
    >
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll className="mb-12">
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-4xl">
            {category.title}
          </h2>
          <p className="text-muted-foreground max-w-3xl text-lg">{category.description}</p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {category.statistics.map((stat, statIdx) => {
            const citationText = `"${stat.description}" — ${stat.source.name}, ${stat.source.year}`;

            return (
              <AnimateOnScroll key={stat.id} delay={statIdx * 0.05}>
                <Card className="bg-background border-border group hover:border-primary/30 h-full transition-colors">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <p className="font-heading text-primary mb-2 text-2xl font-bold sm:text-3xl">
                          {stat.value}
                        </p>
                        <p className="text-foreground text-sm leading-relaxed">
                          {stat.description}
                        </p>
                      </div>
                      <CopyButton
                        text={citationText}
                        className="shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    </div>
                    <div className="border-border mt-3 flex flex-wrap items-center justify-between gap-2 border-t pt-3">
                      <p className="text-muted-foreground text-xs">
                        <span className="font-medium">Source:</span>{" "}
                        {stat.source.url ? (
                          <Link
                            href={stat.source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-foreground underline underline-offset-2 transition-colors"
                          >
                            {stat.source.name}
                          </Link>
                        ) : (
                          stat.source.name
                        )}{" "}
                        <span className="text-muted-foreground/70">({stat.source.year})</span>
                      </p>
                      <Link
                        href={`/stat/${stat.id}`}
                        className="text-primary text-xs font-medium underline-offset-2 hover:underline"
                      >
                        Cite / embed →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
