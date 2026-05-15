import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { defaultContentEngineConfig, type ProofScreenshotsConfig } from "@/lib/content-engine";

interface ContentEngineProofScreenshotsProps {
  config?: ProofScreenshotsConfig;
}

export function ContentEngineProofScreenshots({
  config = defaultContentEngineConfig.proofScreenshots,
}: ContentEngineProofScreenshotsProps) {
  const { headline, subhead, shots } = config;

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-12 text-center">
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            {headline}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">{subhead}</p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <div className="grid gap-6 md:grid-cols-3">
            {shots.map((shot) => (
              <div
                key={shot.src}
                className="group bg-card border-border hover:border-primary/40 overflow-hidden rounded-lg border transition-colors"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-black/50">
                  <picture>
                    <source srcSet={shot.src} type="image/webp" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={shot.fallback}
                      alt={shot.alt}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div className="p-4">
                  <p className="text-muted-foreground text-sm">{shot.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
