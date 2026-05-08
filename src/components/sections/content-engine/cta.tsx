import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import ClickSpark from "@/components/ui/click-spark";

export function ContentEngineCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Stop Posting Once a Day. Run the Swarm.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Live in 24 hours. Cancel anytime. Talk to us before you renew with your
            agency.
          </p>
          <ClickSpark sparkColor="#7058e3" sparkCount={10} sparkRadius={25}>
            <Button size="lg" className="text-lg px-10 py-6" asChild>
              <Link href="/book-demo">
                Book Your Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </ClickSpark>
          <p className="text-sm text-muted-foreground mt-6">
            See it running live before you commit.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
