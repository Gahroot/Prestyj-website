import { Star } from "lucide-react";
import { CLIENT_TESTIMONIALS, GMB_REVIEWS_URL } from "@/lib/testimonials";
import { cn } from "@/lib/utils";

/**
 * Above-the-fold social proof for the founding-cohort page. Surfaces the
 * same three client testimonials shown on /batch-video-ads, but in a
 * tighter strip that doesn't push the form below the fold.
 */
export function SocialProofStrip({ className }: { className?: string }) {
  return (
    <section className={cn("mt-12", className)} aria-labelledby="social-proof-heading">
      <div className="text-muted-foreground mb-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="fill-success text-success h-4 w-4" />
            ))}
          </div>
          <p id="social-proof-heading" className="text-foreground text-sm font-semibold">
            Real clients. Real batches shipped.
          </p>
        </div>
        <a
          href={GMB_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hidden text-xs hover:underline sm:inline"
        >
          Read on Google →
        </a>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {CLIENT_TESTIMONIALS.map((t) => (
          <figure
            key={t.author}
            className="border-border/80 bg-card flex flex-col rounded-xl border p-5"
          >
            <div className="mb-3 flex gap-0.5">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="fill-success text-success h-3.5 w-3.5" />
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
          </figure>
        ))}
      </div>
    </section>
  );
}
