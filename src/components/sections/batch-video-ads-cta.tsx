import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export function BatchVideoAdsCTASection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <Badge variant="outline" className="border-primary/50 text-primary">
              Featured Offer
            </Badge>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground">
              Need 300–1,000 scripted vertical video ads?
              <br />
              <span className="text-primary">Done in 24 hours.</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-lg">
              Real faces beat AI avatars on Meta, TikTok, and YouTube Shorts — and winning at scale means testing at scale. We ship combinatorial creative (hooks x bodies x CTAs) so you can find the handful of ads that actually convert, instead of burning budget on one tired concept.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/batch-video-ads#pricing">
                  See Pricing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="lg" className="text-lg" asChild>
                <Link href="/samples">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Samples
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-background p-6 rounded-xl border border-border text-center">
              <div className="text-sm text-muted-foreground mb-2">Starter</div>
              <span className="text-3xl font-bold text-foreground">$1,497</span>
              <p className="text-sm text-muted-foreground mt-2">300 ads</p>
            </div>
            <div className="bg-background p-6 rounded-xl border-2 border-primary text-center shadow-lg shadow-primary/10">
              <div className="text-sm text-primary font-semibold mb-2">Most Popular</div>
              <span className="text-3xl font-bold text-foreground">$2,497</span>
              <p className="text-sm text-muted-foreground mt-2">600 ads</p>
            </div>
            <div className="bg-background p-6 rounded-xl border border-border text-center">
              <div className="text-sm text-muted-foreground mb-2">Scale</div>
              <span className="text-3xl font-bold text-foreground">$3,997</span>
              <p className="text-sm text-muted-foreground mt-2">1,000 ads</p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
