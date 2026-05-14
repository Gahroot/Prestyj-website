import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import ClickSpark from "@/components/ui/click-spark";
import { TrackedLink } from "@/components/ui/tracked-link";
import { defaultContentEngineConfig, type CTAConfig } from "@/lib/content-engine";

interface ContentEngineCTAProps {
  config?: CTAConfig;
  contentName?: string;
}

export function ContentEngineCTA({
  config = defaultContentEngineConfig.cta,
  contentName = defaultContentEngineConfig.contentName,
}: ContentEngineCTAProps) {
  const { headline, subhead, buttonLabel, buttonHref, eventLabel, footnote, sparkColor } = config;

  return (
    <section className="relative overflow-hidden py-24">
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <h2 className="font-heading text-foreground mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
            {headline}
          </h2>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">{subhead}</p>
          <ClickSpark sparkColor={sparkColor} sparkCount={10} sparkRadius={25}>
            <Button size="lg" className="px-10 py-6 text-lg" asChild>
              <TrackedLink href={buttonHref} contentName={contentName} eventLabel={eventLabel}>
                {buttonLabel}
                <ArrowRight className="ml-2 h-5 w-5" />
              </TrackedLink>
            </Button>
          </ClickSpark>
          <p className="text-muted-foreground mt-6 text-sm">{footnote}</p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
