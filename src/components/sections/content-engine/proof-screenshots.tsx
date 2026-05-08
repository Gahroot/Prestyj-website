import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import {
  defaultContentEngineConfig,
  type ProofScreenshotsConfig,
} from "@/lib/content-engine";

interface ContentEngineProofScreenshotsProps {
  config?: ProofScreenshotsConfig;
}

export function ContentEngineProofScreenshots({
  config = defaultContentEngineConfig.proofScreenshots,
}: ContentEngineProofScreenshotsProps) {
  const { headline, subhead, shots } = config;

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            {headline}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {subhead}
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <div className="grid md:grid-cols-3 gap-6">
            {shots.map((shot) => (
              <div
                key={shot.src}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-colors"
              >
                <div className="relative aspect-[3/4] bg-black/50 overflow-hidden">
                  <picture>
                    <source srcSet={shot.src} type="image/webp" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={shot.fallback}
                      alt={shot.alt}
                      className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">{shot.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
