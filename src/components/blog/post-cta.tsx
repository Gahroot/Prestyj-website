import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PostCta() {
  return (
    <aside
      aria-labelledby="post-cta-heading"
      className="border-primary/30 from-primary/10 to-background mt-16 rounded-2xl border bg-gradient-to-br p-8 sm:p-10"
    >
      <h3
        id="post-cta-heading"
        className="font-heading text-foreground mb-3 text-2xl font-bold sm:text-3xl"
      >
        Need fresh ad creative this week?
      </h3>
      <p className="text-muted-foreground mb-6 text-base sm:text-lg">
        One short recording. 100 scripted vertical video ads delivered in 1–2 business days — so you
        can test more hooks and beat ad fatigue.
      </p>
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
        {/* CTA-sweep: cold traffic → batch offer */}
        <Button size="lg" asChild>
          <Link href="/batch-video-ads">
            Get 100 ads for $497
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Link
          href="/pricing"
          className="text-primary text-sm font-medium underline-offset-4 hover:underline"
        >
          See Pricing →
        </Link>
      </div>
    </aside>
  );
}
