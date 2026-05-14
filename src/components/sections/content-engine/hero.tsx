import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/ui/tracked-link";
import { defaultContentEngineConfig, type HeroConfig } from "@/lib/content-engine";

interface ContentEngineHeroProps {
  config?: HeroConfig;
  contentName?: string;
}

export function ContentEngineHero({
  config = defaultContentEngineConfig.hero,
  contentName = defaultContentEngineConfig.contentName,
}: ContentEngineHeroProps) {
  const {
    badge,
    headline,
    headlineAccent,
    subhead,
    ctas,
    videoSrc,
    videoPoster,
    videoAriaLabel,
    platforms,
  } = config;

  const BadgeIcon = badge.icon;

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      <div
        className="relative z-10 mx-auto w-full max-w-5xl px-4 py-12 text-center sm:px-6 md:py-16 lg:px-8"
        style={{ animation: "fade-up 0.6s ease-out forwards" }}
      >
        <div className="mb-5 flex justify-center">
          <Badge variant="outline" className="border-primary/50 text-primary">
            {BadgeIcon && <BadgeIcon className="mr-1.5 h-3.5 w-3.5" />}
            {badge.text}
          </Badge>
        </div>

        <h1 className="font-heading text-foreground mb-5 text-4xl leading-[1.05] font-bold md:text-6xl lg:text-7xl">
          {headline}
          <br />
          <span className="text-primary">{headlineAccent}</span>
        </h1>

        <p className="text-muted-foreground mx-auto mb-6 max-w-2xl text-lg md:text-xl">{subhead}</p>

        <div className="mb-6 flex flex-col items-center justify-center gap-4 pt-1 sm:flex-row">
          {ctas.map((cta) => (
            <Button
              key={cta.eventLabel}
              size="lg"
              variant={cta.variant ?? "default"}
              className="w-full px-8 text-lg font-bold sm:w-auto"
              asChild
            >
              <TrackedLink href={cta.href} contentName={contentName} eventLabel={cta.eventLabel}>
                {cta.label}
                {cta.variant !== "outline" && <ArrowRight className="ml-2 h-5 w-5" />}
              </TrackedLink>
            </Button>
          ))}
        </div>

        {videoSrc && (
          <div className="border-primary/30 bg-card shadow-primary/10 relative mx-auto mb-6 w-full max-w-3xl overflow-hidden rounded-xl border shadow-lg">
            <div className="bg-muted relative aspect-video">
              <video
                className="h-full w-full object-cover"
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
          <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm">
            <span className="text-foreground font-semibold">Posts to:</span>
            {platforms.map((p, i) => (
              <span key={p} className="flex items-center gap-2">
                <span className="text-foreground">{p}</span>
                {i < platforms.length - 1 && <span className="text-border">&middot;</span>}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
