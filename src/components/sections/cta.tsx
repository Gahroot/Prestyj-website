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
            Ready to stop guessing which ad angle works?
          </h2>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
            Start with 300 scripted vertical video ads across 3 customer problems. One recording,
            one-time payment, finished files delivered in 1–2 business days.
          </p>
          <ClickSpark sparkColor="#7058e3" sparkCount={10} sparkRadius={25}>
            {/* CTA-sweep: cold traffic → batch offer */}
            <Button size="lg" className="px-10 py-6 text-lg" asChild>
              <Link href="/batch-video-ads#pricing">
                Get 300 ads for $1,497
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </ClickSpark>
          <p className="text-muted-foreground mt-6 text-sm">
            No subscription. No agency retainer. No media buying required.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
