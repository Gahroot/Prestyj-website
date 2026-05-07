import Image from "next/image";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const SHOTS = [
  {
    src: "/images/content-engine/proof-1.png",
    alt: "Prestyj Content Engine — daily posts shipping across platforms",
    caption: "Daily output across Instagram, Facebook, TikTok & more",
  },
  {
    src: "/images/content-engine/proof-2.png",
    alt: "Prestyj Content Engine — multi-platform content queue",
    caption: "The queue: 50+ posts scheduled and shipping every day",
  },
  {
    src: "/images/content-engine/proof-3.png",
    alt: "Prestyj Content Engine — AI-generated content variety",
    caption: "Hook variety, format variety, avatar rotation — at scale",
  },
];

export function ContentEngineProofScreenshots() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            We Run This for Ourselves Every Day.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            This isn&apos;t a pitch deck. It&apos;s the same engine that&apos;s shipping 50+
            posts a day for Prestyj right now.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <div className="grid md:grid-cols-3 gap-6">
            {SHOTS.map((shot) => (
              <div
                key={shot.src}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-colors"
              >
                <div className="relative aspect-[3/4] bg-muted overflow-hidden">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                  />
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
