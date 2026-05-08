import { Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const LOOM_EMBED_URL =
  "https://www.loom.com/embed/PLACEHOLDER";

export function ContentEngineVideoWalkthrough() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12">
          <Badge variant="outline" className="border-primary/50 text-primary mb-4">
            <Play className="w-3.5 h-3.5 mr-1.5" />
            Watch the Engine Run
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            See It in Action
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Walk through the content engine end-to-end — from brief to published
            post across every platform.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <div className="relative w-full rounded-xl border border-border overflow-hidden bg-card shadow-lg">
            <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
              <iframe
                src={LOOM_EMBED_URL}
                title="Content engine walkthrough — see the engine running live"
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
