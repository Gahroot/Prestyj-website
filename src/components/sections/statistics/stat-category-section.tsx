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

export function StatCategorySection({
  category,
  index,
}: StatCategorySectionProps) {
  const isEven = index % 2 === 0;

  return (
    <section
      id={category.slug}
      className={`py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24 ${
        isEven ? "" : "bg-card/50"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            {category.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            {category.description}
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {category.statistics.map((stat, statIdx) => {
            const citationText = `"${stat.description}" — ${stat.source.name}, ${stat.source.year}`;

            return (
              <AnimateOnScroll key={stat.id} delay={statIdx * 0.05}>
                <Card className="bg-background border-border h-full group hover:border-primary/30 transition-colors">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-2">
                          {stat.value}
                        </p>
                        <p className="text-sm text-foreground leading-relaxed">
                          {stat.description}
                        </p>
                      </div>
                      <CopyButton text={citationText} className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="mt-3 pt-3 border-t border-border">
                      <p className="text-xs text-muted-foreground">
                        <span className="font-medium">Source:</span>{" "}
                        {stat.source.url ? (
                          <Link
                            href={stat.source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline underline-offset-2 hover:text-foreground transition-colors"
                          >
                            {stat.source.name}
                          </Link>
                        ) : (
                          stat.source.name
                        )}
                        {" "}
                        <span className="text-muted-foreground/70">
                          ({stat.source.year})
                        </span>
                      </p>
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
