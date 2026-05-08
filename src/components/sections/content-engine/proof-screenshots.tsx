import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const SHOTS = [
  {
    src: "/images/content-engine/proof-1.webp",
    fallback: "/images/content-engine/proof-1.png",
    alt: "Prestyj brand Instagram — posting daily",
    caption: "Our brand IG — posting daily.",
  },
  {
    src: "/images/content-engine/proof-2.webp",
    fallback: "/images/content-engine/proof-2.png",
    alt: "Founder personal LinkedIn powered by the same content engine",
    caption: "Founder personal LinkedIn — same engine.",
  },
  {
    src: "/images/content-engine/proof-3.webp",
    fallback: "/images/content-engine/proof-3.png",
    alt: "Multi-platform content queue with 30+ posts per day",
    caption: "Multi-platform queue — 30+ posts/day.",
  },
];

export function ContentEngineProofScreenshots() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            We Run This for Ourselves.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Same swarm, shipping every day for Prestyj.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <div className="grid md:grid-cols-3 gap-6">
            {SHOTS.map((shot) => (
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
