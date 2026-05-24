import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { FlatStatistic } from "@/lib/statistics";

interface StatEmbedCardProps {
  stat: FlatStatistic;
  /**
   * When true (i.e. inside /embed/stat/[id] iframe), render the visible
   * "Powered by Prestyj" footer with a backlink. This is the entire point
   * of the embed surface — every iframe a host site renders becomes a
   * visible, clickable backlink.
   */
  withAttribution?: boolean;
}

export function StatEmbedCard({ stat, withAttribution = true }: StatEmbedCardProps) {
  return (
    <article className="bg-card text-card-foreground border-border/60 mx-auto flex h-full max-w-2xl flex-col justify-between gap-4 rounded-2xl border p-6 shadow-sm sm:p-8">
      <header className="flex flex-col gap-3">
        <span className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
          {stat.categoryTitle}
        </span>
        <p className="font-heading text-primary text-5xl leading-none font-bold sm:text-6xl">
          {stat.value}
        </p>
        <p className="text-foreground text-base leading-relaxed sm:text-lg">{stat.description}</p>
      </header>

      <footer className="text-muted-foreground flex flex-col gap-2 text-xs sm:flex-row sm:items-center sm:justify-between">
        <span>
          Source: {stat.source.name}
          {stat.source.year ? `, ${stat.source.year}` : null}
        </span>
        {withAttribution ? (
          <Link
            href={stat.permalink}
            target="_top"
            rel="noopener"
            className="text-primary inline-flex items-center gap-1 font-medium hover:underline"
          >
            Prestyj <ExternalLink className="h-3 w-3" aria-hidden />
          </Link>
        ) : null}
      </footer>
    </article>
  );
}
