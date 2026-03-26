import { ArrowRight, Play, Zap, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export function SpeedToLeadSection() {
  return (
    <section id="speed-to-lead" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <Badge variant="outline" className="border-primary/50 text-primary">
              Built for Teams Running Paid Ads
            </Badge>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground">
              You&apos;re Paying for Every Lead.
              <br />
              <span className="text-primary">Stop Letting Them Go Cold.</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-lg">
              Real estate team leaders spending $1,000+ a month on ads can&apos;t afford a 4-hour response time. Your AI team member responds in under 60 seconds — qualifying buyers, re-engaging sellers, and booking appointments while you&apos;re at a showing, in a meeting, or off the clock.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/book-demo">
                  Book a Demo
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-background p-6 rounded-xl border border-border text-center">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-success" />
              </div>
              <span className="text-3xl font-bold text-success">47s</span>
              <p className="text-sm text-muted-foreground mt-1">avg. lead response time</p>
            </div>

            <div className="bg-background p-6 rounded-xl border border-border text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <span className="text-3xl font-bold text-primary">24/7</span>
              <p className="text-sm text-muted-foreground mt-1">nights, weekends, holidays</p>
            </div>

            <div className="bg-background p-6 rounded-xl border border-border text-center">
              <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-warning" />
              </div>
              <span className="text-3xl font-bold text-warning">3x*</span>
              <p className="text-sm text-muted-foreground mt-1">more booked appointments</p>
            </div>
          </div>
        </AnimateOnScroll>
        <div className="text-center mt-8">
          <p className="text-xs text-muted-foreground">
            *Results vary by industry and implementation. Average results based on client data.
          </p>
        </div>
      </div>
    </section>
  );
}
