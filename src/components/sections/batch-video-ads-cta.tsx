import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export function BatchVideoAdsCTASection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <Badge variant="outline" className="border-primary/50 text-primary">
              Add-on to AI Marketing Agent Plans
            </Badge>

            <h2 className="font-heading text-foreground text-3xl font-bold sm:text-4xl md:text-5xl">
              Need 300+ scripted vertical video ads?
              <br />
              <span className="text-primary">Delivered in 1–2 business days.</span>
            </h2>

            <p className="text-muted-foreground max-w-lg text-lg">
              An AI-produced video ad pack you can add to your AI marketing agent plan. We mix
              different hooks, scripts, and calls to action so you get hundreds of unique ads from
              one short recording session — then run them on Meta, TikTok, and YouTube Shorts to see
              which ones actually convert.
            </p>

            <div className="flex flex-col items-start gap-4 pt-2 sm:flex-row">
              {/* CTA-sweep: cold traffic → batch offer */}
              <Button size="lg" className="px-8 text-lg" asChild>
                <Link href="/batch-video-ads">
                  Get 100 ads for $497
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="bg-background border-border rounded-xl border p-6 text-center">
              <div className="text-muted-foreground mb-2 text-sm">Starter</div>
              <span className="text-foreground text-3xl font-bold">$1,497</span>
              <p className="text-muted-foreground mt-2 text-sm">300 ads</p>
            </div>
            <div className="bg-background border-primary shadow-primary/10 rounded-xl border-2 p-6 text-center shadow-lg">
              <div className="text-primary mb-2 text-sm font-semibold">Most Popular</div>
              <span className="text-foreground text-3xl font-bold">$2,497</span>
              <p className="text-muted-foreground mt-2 text-sm">600 ads</p>
            </div>
            <div className="bg-background border-border rounded-xl border p-6 text-center">
              <div className="text-muted-foreground mb-2 text-sm">Scale</div>
              <span className="text-foreground text-3xl font-bold">$3,997</span>
              <p className="text-muted-foreground mt-2 text-sm">1,000 ads</p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
