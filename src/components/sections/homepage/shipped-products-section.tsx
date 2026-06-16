import Link from "next/link";
import type { ReactElement } from "react";
import { Code2, ExternalLink, Megaphone, PackageCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "EZ Coder",
    url: "https://website-three-eosin-0v0xmdepg0.vercel.app",
    label: "Desktop coding agent",
    description:
      "Built by Prestyj / Nolan. Free/open-source, local-first, provider login, plan mode, and multi-window agents.",
    icon: Code2,
  },
  {
    name: "Media Master",
    url: "https://media-master-gilt.vercel.app/",
    label: "Desktop marketing agent app",
    description:
      "Brand kits, offers, cross-platform publishing, swipe ads, ads dashboards, and browser automations for marketers.",
    icon: Megaphone,
  },
] as const;

export function ShippedProductsSection(): ReactElement {
  return (
    <section id="proof" className="bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <Badge variant="outline" className="border-primary/40 text-primary">
              Proof we ship
            </Badge>
            <h2 className="font-heading text-foreground mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              Prestyj is a builder, not a slide-deck AI agency.
            </h2>
            <p className="text-muted-foreground mt-4 text-lg leading-8">
              EZ Coder and Media Master are public examples of shipped Prestyj-built
              software. They are not the main sales funnel here — they prove we can
              turn AI workflows into real products.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <article key={product.name} className="bg-card rounded-3xl border p-6 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div className="bg-primary/10 text-primary grid size-12 place-items-center rounded-2xl">
                      <Icon className="h-5 w-5" />
                    </div>
                    <PackageCheck className="text-success h-5 w-5" />
                  </div>
                  <p className="text-primary mt-6 text-sm font-semibold uppercase tracking-wide">
                    {product.label}
                  </p>
                  <h3 className="text-foreground mt-2 text-2xl font-bold">{product.name}</h3>
                  <p className="text-muted-foreground mt-3 leading-7">{product.description}</p>
                  <Button className="mt-6" variant="outline" asChild>
                    <Link href={product.url} target="_blank" rel="noreferrer">
                      Visit product
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
