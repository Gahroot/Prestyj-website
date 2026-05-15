import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function HomeHeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      <div
        className="relative z-10 mx-auto w-full max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8"
        style={{ animation: "fade-up 0.6s ease-out forwards" }}
      >
        <div className="flex justify-center">
          <Badge variant="outline" className="border-primary/50 text-primary">
            AI Agents for Marketing & Sales · 5★ on Google
          </Badge>
        </div>

        <h1 className="font-heading text-foreground mt-6 text-4xl leading-[1.1] font-bold md:text-5xl lg:text-6xl">
          100 video ads. <span className="text-primary">$497.</span> Delivered in 24 hours.
        </h1>

        <p className="text-muted-foreground mt-4 text-sm md:text-base">
          For anyone running paid ads.
        </p>

        <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg">
          One recording session. We script, edit, and ship 100 vertical ads built for Meta, TikTok,
          and YouTube Shorts. Want more angles? Scale to 300, 500, or 1,000 — same engine, same
          day.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="w-full px-8 text-lg font-bold sm:w-auto" asChild>
            <Link href="/batch-video-ads">
              Get 100 ads for $497
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full px-8 text-lg font-bold sm:w-auto"
            asChild
          >
            <Link href="/bulk-video-ad-pricing">See pricing</Link>
          </Button>
        </div>

        <div className="text-muted-foreground mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="fill-success text-success h-4 w-4" aria-hidden="true" />
              ))}
            </div>
            <span>5★ Google Reviews</span>
          </div>
          <span className="text-border hidden sm:inline">•</span>
          <span>
            <span className="text-foreground font-semibold">&lt;60s</span> lead response
          </span>
          <span className="text-border hidden sm:inline">•</span>
          <span>
            <span className="text-foreground font-semibold">24/7</span> availability
          </span>
          <span className="text-border hidden sm:inline">•</span>
          <span>For anyone running paid ads</span>
        </div>
      </div>
    </section>
  );
}
