import Link from "next/link";
import type { ReactElement } from "react";
import { ArrowUpRight } from "lucide-react";

import { LayoutThumbnail } from "@/components/layout-lab/layout-thumbnail";
import { layoutFamilies, layouts } from "@/lib/layout-lab/layouts";

export function LayoutGallery(): ReactElement {
  return (
    <main id="main-content" className="pb-20">
      <header className="border-b py-12 sm:py-16">
        <div className="mx-auto max-w-[112rem] px-4 sm:px-6 lg:px-8">
          <p className="text-primary text-sm font-semibold">Private layout lab</p>
          <div className="mt-5 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h1 className="font-heading max-w-5xl text-4xl font-bold tracking-tight lg:text-6xl">
              Twenty-four ways to explain the same controlled work.
            </h1>
            <p className="text-muted-foreground max-w-2xl leading-7">
              Compare hierarchy and scan path, then open any concept at full size. The current
              homepage remains unchanged.
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[112rem] px-4 sm:px-6 lg:px-8">
        {layoutFamilies.map((family) => {
          const familyLayouts = layouts.filter((layout) => layout.family === family.slug);
          return (
            <section
              key={family.slug}
              aria-labelledby={`${family.slug}-title`}
              className="border-b py-10"
            >
              <div className="mb-6 grid gap-3 lg:grid-cols-[0.7fr_1.3fr]">
                <h2 id={`${family.slug}-title`} className="font-heading text-2xl font-bold">
                  {family.label}
                </h2>
                <p className="text-muted-foreground max-w-2xl text-sm leading-6">
                  {family.description}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                {familyLayouts.map((layout) => (
                  <article key={layout.slug} className="bg-card flex min-w-0 flex-col border">
                    <LayoutThumbnail recipe={layout} />
                    <div className="flex flex-1 flex-col p-4">
                      <p className="text-muted-foreground font-mono text-xs tabular-nums">
                        {String(layout.number).padStart(2, "0")} / {family.label}
                      </p>
                      <h3 className="font-heading mt-3 text-lg leading-tight font-bold">
                        {layout.title}
                      </h3>
                      <ol className="text-muted-foreground mt-4 space-y-1.5 text-xs leading-5">
                        {layout.scanPath.map((stop, index) => (
                          <li key={stop} className="grid grid-cols-[1rem_1fr] gap-2">
                            <span className="font-mono">{index + 1}</span>
                            <span>{stop}</span>
                          </li>
                        ))}
                      </ol>
                      <p className="text-muted-foreground mt-4 text-xs leading-5">
                        {layout.bestFit}
                      </p>
                      <Link
                        href={`/layout-lab/${layout.slug}`}
                        className="text-primary focus-visible:ring-ring hover:text-foreground mt-auto flex min-h-11 items-center justify-between gap-2 border-t pt-4 text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:outline-none motion-reduce:transition-none"
                      >
                        Open full layout
                        <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
