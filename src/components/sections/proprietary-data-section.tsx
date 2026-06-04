"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ResolvedProprietaryDataBlock } from "@/lib/proprietary-data";

interface ProprietaryDataSectionProps {
  block: ResolvedProprietaryDataBlock;
  /** Visual variant so the section blends into either page background. */
  surface?: "default" | "muted";
}

/**
 * Renders a page's proprietary-statistics block: Prestyj-owned numbers from
 * src/lib/statistics-data paired with page-specific original analysis. Each
 * value links to its permanent /stat/[id] page, reinforcing that the number is
 * a citable Prestyj data point — and giving the page unique, query-specific
 * substance no template-swap sibling carries.
 */
export function ProprietaryDataSection({
  block,
  surface = "default",
}: ProprietaryDataSectionProps) {
  const bg = surface === "muted" ? "bg-muted/30" : "";
  const gridCols =
    block.stats.length >= 3 ? "lg:grid-cols-3" : "lg:grid-cols-2";

  return (
    <section className={`py-20 ${bg}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-3xl"
        >
          <span className="text-primary mb-3 inline-block text-sm font-semibold tracking-widest uppercase">
            Prestyj Proprietary Data
          </span>
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            {block.heading}
          </h2>
          <p className="text-muted-foreground text-lg">{block.intro}</p>
        </motion.div>

        <div className={`grid grid-cols-1 gap-6 md:grid-cols-2 ${gridCols}`}>
          {block.stats.map(({ stat, analysis }, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-border/60 bg-card flex h-full flex-col rounded-2xl border p-6"
            >
              <div className="text-primary font-heading text-4xl font-bold sm:text-5xl">
                {stat.value}
              </div>
              <p className="text-foreground mt-3 text-base leading-relaxed font-medium">
                {stat.description}
              </p>
              <p className="text-muted-foreground mt-4 grow text-sm leading-relaxed">
                {analysis}
              </p>
              <Link
                href={`/stat/${stat.id}`}
                className="text-primary mt-5 inline-flex items-center gap-1 text-sm font-medium hover:underline"
              >
                See the data &amp; sources
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </motion.div>
          ))}
        </div>

        {block.footnote && (
          <p className="text-muted-foreground mt-8 max-w-3xl text-xs leading-relaxed">
            {block.footnote}
          </p>
        )}
      </div>
    </section>
  );
}
