import { Trophy } from "lucide-react";

import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Badge } from "@/components/ui/badge";
import {
  defaultContentEngineConfig,
  type ProofBarConfig,
} from "@/lib/content-engine";

interface ContentEngineProofBarProps {
  config?: ProofBarConfig;
}

export function ContentEngineProofBar({
  config = defaultContentEngineConfig.proofBar,
}: ContentEngineProofBarProps) {
  const { stats } = config;

  return (
    <section className="py-12 border-y border-border bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}

            {/* 5th stat: real client results — enable once we have paying clients */}
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Trophy className="size-8 text-muted-foreground/40" />
                <Badge variant="secondary">Pending</Badge>
              </div>
              <div className="text-sm text-muted-foreground">
                Real client results coming soon
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
