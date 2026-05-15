import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import ClickSpark from "@/components/ui/click-spark";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <h2 className="font-heading text-foreground mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Get 100 ad variations for $497.
          </h2>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
            One short recording. 100 scripted vertical video ads delivered in 1–2 business days.
            Test more hooks, fight ad fatigue, and find what actually converts.
          </p>
          <ClickSpark sparkColor="#7058e3" sparkCount={10} sparkRadius={25}>
            {/* CTA-sweep: cold traffic → batch offer */}
            <Button size="lg" className="px-10 py-6 text-lg" asChild>
              <Link href="/batch-video-ads">
                Get 100 ads for $497
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </ClickSpark>
          <p className="text-muted-foreground mt-6 text-sm">
            No subscription. One recording session. Hundreds of scripted variations.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
