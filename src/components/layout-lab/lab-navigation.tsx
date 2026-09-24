import Link from "next/link";
import type { ReactElement } from "react";
import { ArrowLeft, ArrowRight, Grid2X2 } from "lucide-react";

import type { LayoutRecipe } from "@/lib/layout-lab/layouts";
import { cn } from "@/lib/utils";

const linkClasses =
  "inline-flex min-h-11 items-center gap-2 px-2 text-sm transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none";

export function LabNavigation({
  recipe,
  previous,
  next,
  total,
}: {
  recipe: LayoutRecipe;
  previous: LayoutRecipe;
  next: LayoutRecipe;
  total: number;
}): ReactElement {
  return (
    <div className="bg-background sticky top-0 z-40 border-b">
      <div className="mx-auto flex min-h-14 max-w-[112rem] items-center justify-between gap-2 px-2 sm:px-6 lg:px-8">
        <nav aria-label="Layout lab navigation" className="flex items-center gap-1">
          <Link href="/layout-lab" className={linkClasses}>
            <Grid2X2 aria-hidden="true" className="size-4" />
            <span className="hidden sm:inline">All layouts</span>
            <span className="sr-only sm:hidden">All layouts</span>
          </Link>
          <Link
            href={`/layout-lab/${previous.slug}`}
            className={linkClasses}
            aria-label={`Previous layout: ${previous.title}`}
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            <span className="hidden lg:inline">Previous</span>
          </Link>
        </nav>

        <p className="min-w-0 text-center text-xs sm:text-sm">
          <span className="font-heading hidden truncate font-bold md:inline">{recipe.title}</span>
          <span className={cn("text-muted-foreground tabular-nums", "md:ml-3")}>
            {String(recipe.number).padStart(2, "0")} / {total}
          </span>
        </p>

        <Link
          href={`/layout-lab/${next.slug}`}
          className={linkClasses}
          aria-label={`Next layout: ${next.title}`}
        >
          <span className="hidden lg:inline">Next</span>
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </div>
  );
}
