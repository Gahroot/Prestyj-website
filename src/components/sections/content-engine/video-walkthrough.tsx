import { Badge } from "@/components/ui/badge";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import {
  defaultContentEngineConfig,
  type VideoWalkthroughConfig,
} from "@/lib/content-engine";

interface ContentEngineVideoWalkthroughProps {
  config?: VideoWalkthroughConfig;
}

export function ContentEngineVideoWalkthrough({
  config = defaultContentEngineConfig.videoWalkthrough,
}: ContentEngineVideoWalkthroughProps) {
  const { badgeIcon: BadgeIcon, badgeText, headline, subhead, embedUrl, iframeTitle } = config;

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12">
          <Badge variant="outline" className="border-primary/50 text-primary mb-4">
            {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5 mr-1.5" />}
            {badgeText}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            {headline}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {subhead}
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <div className="relative w-full rounded-xl border border-border overflow-hidden bg-card shadow-lg">
            <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
              <iframe
                src={embedUrl}
                title={iframeTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
