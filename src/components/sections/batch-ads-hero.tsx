import Link from "next/link";
import { ArrowRight, Play, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { VideoCarousel } from "@/components/sections/video-carousel";

const HERO_SAMPLE_VIDEOS = [
  "1182069557",
  "1182069871",
  "1173092805",
  "1173092688",
  "1171065337",
];

export function BatchAdsHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div
        className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        style={{ animation: "fade-up 0.6s ease-out forwards" }}
      >
        {/* Left side - Headline */}
        <div
          className="space-y-6 text-center lg:text-left"
          style={{ animation: "fade-up 0.5s ease-out 0.15s both" }}
        >
          <div className="flex justify-center lg:justify-start">
            <Badge variant="outline" className="border-primary/50 text-primary">
              Batch Video Ads for Service Businesses · 5★ on Google
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-[1.1]">
            Find Your Winning Ad
            <br />
            <span className="text-primary">in a Week — Not Six Months.</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0">
            300+ video ads from one 15-minute recording. Test every hook, angle, and pitch — walk away with the data on what actually converts, so you (or your team, or your agency) can double down on winners instead of guessing.
          </p>

          <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 pt-2">
            <Button size="lg" className="text-lg px-8 font-bold w-full sm:w-auto" asChild>
              <Link href="/batch-video-ads#pricing">
                See Pricing — from $1,497
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 font-bold w-full sm:w-auto"
              asChild
            >
              <Link href="/samples">
                <Play className="mr-2 h-5 w-5" />
                Watch Real Client Ads
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-success text-success"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span>5★ Google Reviews</span>
            </div>
            <span className="hidden sm:inline text-border">•</span>
            <span>
              <span className="text-foreground font-semibold">300+</span> ads per batch
            </span>
            <span className="hidden sm:inline text-border">•</span>
            <span>
              <span className="text-foreground font-semibold">24hr</span> turnaround
            </span>
            <span className="hidden sm:inline text-border">•</span>
            <span>
              <span className="text-foreground font-semibold">1</span> recording session
            </span>
          </div>
        </div>

        {/* Right side - Sample video carousel */}
        <div
          className="relative"
          style={{ animation: "fade-up 0.5s ease-out 0.3s both" }}
        >
          <VideoCarousel videos={HERO_SAMPLE_VIDEOS} />
        </div>
      </div>
    </section>
  );
}
