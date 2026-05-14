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
        Want AI agents like this in your business?
      </h3>
      <p className="text-muted-foreground mb-6 text-base sm:text-lg">
        Prestyj builds AI agents for marketing &amp; sales — so your team books more demos and
        closes more deals.
      </p>
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
        <Button size="lg" asChild>
          <Link href="/book-demo">
            Book a Demo
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
