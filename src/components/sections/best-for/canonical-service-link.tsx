"use client";

import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

interface CanonicalServiceLinkProps {
  /** Niche short name, e.g. "Coaches" — woven into the heading. */
  nicheLabel: string;
  /** Path of the canonical service page. */
  href?: string;
  /** Display label for the canonical service. */
  serviceLabel?: string;
}

/**
 * Reusable cross-link callout that points an avatar/best-for page UP to
 * the canonical service page (Done-For-You Social Media). Renders inside
 * the BestForPageClient so every social-content-for-* avatar links to
 * the same parent service.
 */
export function CanonicalServiceLink({
  nicheLabel,
  href = "/done-for-you-social-media",
  serviceLabel = "Done-For-You Social Media",
}: CanonicalServiceLinkProps) {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <Card className="border-primary/30 bg-gradient-to-br from-primary/5 via-background to-success/5">
            <CardContent className="p-8 sm:p-10">
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Layers className="w-7 h-7 text-primary" />
                  </div>
                </div>

                <div className="flex-1">
                  <Badge variant="outline" className="mb-3 border-primary/50 text-primary">
                    Part of the Prestyj Content Swarm
                  </Badge>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-2">
                    The same engine that powers {nicheLabel} runs every avatar.
                  </h2>
                  <p className="text-muted-foreground">
                    See the full {serviceLabel} service — pricing, the live
                    swarm, and how we ship 30–50 posts per day across every
                    major platform.
                  </p>
                </div>

                <div className="shrink-0">
                  <Button size="lg" asChild>
                    <Link href={href}>
                      Explore {serviceLabel}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
