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
 * the canonical AI Content Department service page (the AI agent for
 * social media inside Prestyj's marketing & sales AI agent suite).
 * Renders inside the BestForPageClient so every social-content-for-*
 * avatar links to the same parent service.
 */
export function CanonicalServiceLink({
  nicheLabel,
  href = "/ai-content-department",
  serviceLabel = "AI Content Department",
}: CanonicalServiceLinkProps) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <Card className="border-primary/30 from-primary/5 via-background to-success/5 bg-gradient-to-br">
            <CardContent className="p-8 sm:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="shrink-0">
                  <div className="bg-primary/10 flex h-14 w-14 items-center justify-center rounded-xl">
                    <Layers className="text-primary h-7 w-7" />
                  </div>
                </div>

                <div className="flex-1">
                  <Badge variant="outline" className="border-primary/50 text-primary mb-3">
                    Part of the Prestyj Content Swarm
                  </Badge>
                  <h2 className="font-heading text-foreground mb-2 text-2xl font-bold sm:text-3xl">
                    The same engine that powers {nicheLabel} runs every avatar.
                  </h2>
                  <p className="text-muted-foreground">
                    See the full {serviceLabel} service — pricing, the live swarm, and how we ship
                    30–50 posts per day across every major platform.
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
