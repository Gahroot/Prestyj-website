import { ArrowRight, Play, Zap, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export function SpeedToLeadSection() {
  return (
    <section id="speed-to-lead" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left side - Content */}
          <div className="space-y-6">
            <Badge variant="outline" className="border-primary/50 text-primary">
              Built for Teams Running Paid Ads
            </Badge>

            <h2 className="font-heading text-foreground text-3xl font-bold sm:text-4xl md:text-5xl">
              You&apos;re Paying for Every Lead.
              <br />
              <span className="text-primary">Stop Letting Them Go Cold.</span>
            </h2>

            <p className="text-muted-foreground max-w-lg text-lg">
              Real estate team leaders spending $1,000+ a month on ads can&apos;t afford a 4-hour
              response time. Your AI team member responds in under 60 seconds — qualifying buyers,
              re-engaging sellers, and booking appointments while you&apos;re at a showing, in a
              meeting, or off the clock.
            </p>

            <div className="flex flex-col items-start gap-4 pt-4 sm:flex-row">
              {/* CTA-sweep: cold traffic → batch offer */}
              <Button size="lg" className="px-8 text-lg" asChild>
                <Link href="/batch-video-ads">
                  Get 100 ads for $497
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="lg" className="text-lg" asChild>
                <a href="#how-it-works">
                  <Play className="mr-2 h-5 w-5" />
                  See How It Works
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Stats cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="bg-background border-border rounded-xl border p-6 text-center">
              <div className="bg-success/10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                <Zap className="text-success h-6 w-6" />
              </div>
              <span className="text-success text-3xl font-bold">&lt; 60s</span>
              <p className="text-muted-foreground mt-1 text-sm">avg. lead response time</p>
            </div>

            <div className="bg-background border-border rounded-xl border p-6 text-center">
              <div className="bg-primary/10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                <Clock className="text-primary h-6 w-6" />
              </div>
              <span className="text-primary text-3xl font-bold">24/7</span>
              <p className="text-muted-foreground mt-1 text-sm">nights, weekends, holidays</p>
            </div>

            <div className="bg-background border-border rounded-xl border p-6 text-center">
              <div className="bg-warning/10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                <Calendar className="text-warning h-6 w-6" />
              </div>
              <span className="text-warning text-3xl font-bold">3x*</span>
              <p className="text-muted-foreground mt-1 text-sm">more booked appointments</p>
            </div>
          </div>
        </AnimateOnScroll>
        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-xs">
            *Results vary by industry and implementation. Average results based on client data.
          </p>
        </div>
      </div>
    </section>
  );
}
