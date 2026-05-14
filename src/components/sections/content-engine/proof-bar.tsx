import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { defaultContentEngineConfig, type ProofBarConfig } from "@/lib/content-engine";

interface ContentEngineProofBarProps {
  config?: ProofBarConfig;
}

export function ContentEngineProofBar({
  config = defaultContentEngineConfig.proofBar,
}: ContentEngineProofBarProps) {
  const { stats } = config;

  return (
    <section className="border-border bg-muted/20 border-y py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-primary mb-2 text-3xl font-bold md:text-4xl">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
