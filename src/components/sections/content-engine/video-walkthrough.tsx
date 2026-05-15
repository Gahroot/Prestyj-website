import { Badge } from "@/components/ui/badge";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { defaultContentEngineConfig, type VideoWalkthroughConfig } from "@/lib/content-engine";

interface ContentEngineVideoWalkthroughProps {
  config?: VideoWalkthroughConfig;
}

export function ContentEngineVideoWalkthrough({
  config = defaultContentEngineConfig.videoWalkthrough,
}: ContentEngineVideoWalkthroughProps) {
  const { badgeIcon: BadgeIcon, badgeText, headline, subhead, embedUrl, iframeTitle } = config;

  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-12 text-center">
          <Badge variant="outline" className="border-primary/50 text-primary mb-4">
            {BadgeIcon && <BadgeIcon className="mr-1.5 h-3.5 w-3.5" />}
            {badgeText}
          </Badge>
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            {headline}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">{subhead}</p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <div className="border-border bg-card relative w-full overflow-hidden rounded-xl border shadow-lg">
            <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
              <iframe
                src={embedUrl}
                title={iframeTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
                loading="lazy"
              />
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
