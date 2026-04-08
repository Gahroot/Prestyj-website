import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import ClickSpark from "@/components/ui/click-spark";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Your Leads Shouldn&apos;t Wait. Neither Should You.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every hour without a response is a lead your competitor is closing. Book a demo and see how your AI team member gets set up and running — usually in under a week.
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
            Free demo. See it working on a real lead scenario before you commit.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
