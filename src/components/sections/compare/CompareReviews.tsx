"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeInUp, transitions, viewport } from "@/lib/compare/animations";
import { CLIENT_TESTIMONIALS, GMB_REVIEWS_URL } from "@/lib/testimonials";
import BorderGlow from "@/components/ui/border-glow";

interface CompareReviewsProps {
  competitorName: string;
}

/**
 * Customer-review trust signal for the comparison listicles. Reuses the shared
 * high-signal client testimonials so every `/compare/*` page carries the same
 * social proof competitors use to dominate these searches. Pairs with the
 * Review + AggregateRating JSON-LD emitted by ComparePageWrapper.
 */
export function CompareReviews({ competitorName }: CompareReviewsProps) {
  return (
    <section className="border-b py-20" aria-labelledby="compare-reviews-heading">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="fill-success text-success h-5 w-5" />
                ))}
              </div>
              <span className="text-foreground text-sm font-semibold">5.0 average</span>
            </div>
            <h2
              id="compare-reviews-heading"
              className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Why teams choose Prestyj over {competitorName}
            </h2>
            <p className="text-muted-foreground text-lg">
              Real clients, real batches shipped — in their own words.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {CLIENT_TESTIMONIALS.map((t, index) => (
              <motion.figure
                key={t.author}
                {...fadeInUp}
                transition={transitions.staggered(index)}
                viewport={viewport}
              >
                <BorderGlow borderRadius={10} innerClassName="flex h-full flex-col p-6">
                  <div className="mb-3 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="fill-success text-success h-4 w-4" />
                    ))}
                  </div>
                  <blockquote className="text-foreground mb-4 flex-1 text-sm leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="border-border/40 border-t pt-3">
                    <p className="text-foreground text-sm font-semibold">{t.author}</p>
                    {t.href ? (
                      <a
                        href={t.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary text-xs"
                      >
                        {t.source} →
                      </a>
                    ) : (
                      <p className="text-muted-foreground text-xs">{t.source}</p>
                    )}
                  </figcaption>
                </BorderGlow>
              </motion.figure>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href={GMB_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-sm font-medium hover:underline"
            >
              Read more reviews on Google →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
