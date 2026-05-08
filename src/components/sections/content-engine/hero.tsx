import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/ui/tracked-link";

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
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div
        className="relative z-10 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center"
        style={{ animation: "fade-up 0.6s ease-out forwards" }}
      >
        <div className="flex justify-center mb-5">
          <Badge variant="outline" className="border-primary/50 text-primary">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            Done-For-You Social Media · Live in 24 Hours
          </Badge>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-[1.05] mb-5">
          One Brand Isn&apos;t Enough Anymore.
          <br />
          <span className="text-primary">Run a Content Swarm.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
          Your brand. Your personal page. Your niche accounts.{" "}
          <span className="text-foreground font-semibold">All on autopilot.</span>{" "}
          From $1,997/mo.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-1 mb-6">
          <Button size="lg" className="text-lg px-8 font-bold w-full sm:w-auto" asChild>
            <TrackedLink
              href="#pricing"
              eventName="ContentEngineLeadIntent"
              eventLabel="hero-see-plans"
            >
              See Plans
              <ArrowRight className="ml-2 h-5 w-5" />
            </TrackedLink>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 font-bold w-full sm:w-auto"
            asChild
          >
            <TrackedLink
              href="/book-demo"
              eventName="ContentEngineLeadIntent"
              eventLabel="hero-book-demo"
            >
              Book a Demo
            </TrackedLink>
          </Button>
        </div>

        <div
          className="relative w-full max-w-3xl mx-auto mb-6 rounded-xl border border-primary/30 bg-card overflow-hidden shadow-lg shadow-primary/10"
        >
          <div className="aspect-video relative bg-muted">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/images/content-engine/vsl-poster.jpg"
              aria-label="Done-for-you social media swarm demo video"
            >
              <source src="/videos/dfy-vsl.mp4" type="video/mp4" />
            </video>
          </div>
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
