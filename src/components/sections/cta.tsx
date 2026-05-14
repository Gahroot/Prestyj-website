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
            Book a 30-minute demo.
          </h2>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
            In 30 minutes we&apos;ll show you exactly how Prestyj&apos;s AI agents respond to your
            leads, qualify them, and book meetings on your calendar.
          </p>
          <ClickSpark sparkColor="#7058e3" sparkCount={10} sparkRadius={25}>
            <Button size="lg" className="px-10 py-6 text-lg" asChild>
              <Link href="/book-demo">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </ClickSpark>
          <p className="text-muted-foreground mt-6 text-sm">
            Free 30-minute demo. We&apos;ll show our AI agent responding to a test lead in real
            time.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
