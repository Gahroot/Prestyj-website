import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/ui/tracked-link";
import {
  defaultContentEngineConfig,
  type HeroConfig,
} from "@/lib/content-engine";

interface ContentEngineHeroProps {
  config?: HeroConfig;
}

export function ContentEngineHero({
  config = defaultContentEngineConfig.hero,
}: ContentEngineHeroProps) {
  const { badge, headline, headlineAccent, subhead, ctas, videoSrc, videoPoster, videoAriaLabel, platforms } =
    config;

  const BadgeIcon = badge.icon;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div
        className="relative z-10 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center"
        style={{ animation: "fade-up 0.6s ease-out forwards" }}
      >
        <div className="flex justify-center mb-5">
          <Badge variant="outline" className="border-primary/50 text-primary">
            {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5 mr-1.5" />}
            {badge.text}
          </Badge>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-[1.05] mb-5">
          {headline}
          <br />
          <span className="text-primary">{headlineAccent}</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
          {subhead}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-1 mb-6">
          {ctas.map((cta) => (
            <Button
              key={cta.eventLabel}
              size="lg"
              variant={cta.variant ?? "default"}
              className="text-lg px-8 font-bold w-full sm:w-auto"
              asChild
            >
              <TrackedLink
                href={cta.href}
                eventName={cta.eventName}
                eventLabel={cta.eventLabel}
              >
                {cta.label}
                {cta.variant !== "outline" && (
                  <ArrowRight className="ml-2 h-5 w-5" />
                )}
              </TrackedLink>
            </Button>
          ))}
        </div>

        {videoSrc && (
          <div className="relative w-full max-w-3xl mx-auto mb-6 rounded-xl border border-primary/30 bg-card overflow-hidden shadow-lg shadow-primary/10">
            <div className="aspect-video relative bg-muted">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster={videoPoster}
                aria-label={videoAriaLabel}
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            </div>
          </div>
        )}

        {platforms.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Posts to:</span>
            {platforms.map((p, i) => (
              <span key={p} className="flex items-center gap-2">
                <span className="text-foreground">{p}</span>
                {i < platforms.length - 1 && (
                  <span className="text-border">&middot;</span>
                )}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
