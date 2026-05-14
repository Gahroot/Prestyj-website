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
          AI agents that run your marketing and sales —{" "}
          <span className="text-primary">24/7.</span>
        </h1>

        <p className="text-muted-foreground mt-4 text-sm md:text-base">
          Built for service businesses, real estate teams, and professional services.
        </p>

        <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg">
          We build AI agents that capture leads, respond in under 60 seconds, qualify them, and
          book meetings on your calendar — automatically. Stop duct-taping 10 SaaS tools.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="w-full px-8 text-lg font-bold sm:w-auto" asChild>
            <Link href="/book-demo">
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full px-8 text-lg font-bold sm:w-auto"
            asChild
          >
            <Link href="/pricing">See Pricing</Link>
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
          <span>Built for service businesses</span>
        </div>
      </div>
    </section>
  );
}
