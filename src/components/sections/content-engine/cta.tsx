import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import ClickSpark from "@/components/ui/click-spark";
import { TrackedLink } from "@/components/ui/tracked-link";
import {
  defaultContentEngineConfig,
  type CTAConfig,
} from "@/lib/content-engine";

interface ContentEngineCTAProps {
  config?: CTAConfig;
}

export function ContentEngineCTA({
  config = defaultContentEngineConfig.cta,
}: ContentEngineCTAProps) {
  const {
    headline,
    subhead,
    buttonLabel,
    buttonHref,
    eventName,
    eventLabel,
    footnote,
    sparkColor,
  } = config;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            {headline}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {subhead}
          </p>
          <ClickSpark sparkColor={sparkColor} sparkCount={10} sparkRadius={25}>
            <Button size="lg" className="text-lg px-10 py-6" asChild>
              <TrackedLink
                href={buttonHref}
                eventName={eventName}
                eventLabel={eventLabel}
              >
                {buttonLabel}
                <ArrowRight className="ml-2 h-5 w-5" />
              </TrackedLink>
            </Button>
          </ClickSpark>
          <p className="text-sm text-muted-foreground mt-6">
            {footnote}
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
