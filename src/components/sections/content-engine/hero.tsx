import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const PLATFORMS = [
  "Instagram",
  "Facebook",
  "TikTok",
  "YouTube",
  "LinkedIn",
  "Threads",
  "X",
];

export function ContentEngineHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-16 overflow-hidden">
      <div
        className="relative z-10 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
        style={{ animation: "fade-up 0.6s ease-out forwards" }}
      >
        <div className="flex justify-center mb-6">
          <Badge variant="outline" className="border-primary/50 text-primary">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            Done-For-You Social Media · 1,500+ Posts/Month
          </Badge>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-[1.05] mb-6">
          50+ Social Media Posts a Day.
          <br />
          <span className="text-primary">Across 7 Platforms. On Autopilot.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Most agencies charge $5K/mo to ship 30 posts. We run an AI content engine that ships{" "}
          <span className="text-foreground font-semibold">1,500+ posts a month</span> across every
          major platform — formatted, on-brand, and posted for you. No content calendars to
          approve. No freelancers to manage. Just compounding reach, every day.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 mb-10">
          <Button size="lg" className="text-lg px-8 font-bold w-full sm:w-auto" asChild>
            <Link href="#pricing">
              See Plans — from $2,000/mo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 font-bold w-full sm:w-auto"
            asChild
          >
            <Link href="/book-demo">Book a Demo</Link>
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Posts to:</span>
          {PLATFORMS.map((p, i) => (
            <span key={p} className="flex items-center gap-2">
              <span className="text-foreground">{p}</span>
              {i < PLATFORMS.length - 1 && <span className="text-border">·</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
