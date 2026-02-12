import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Ready to Stop Losing Leads?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every hour you wait, potential clients are slipping away to faster competitors.
            Let your AI agent work while you sleep.
          </p>
          <Button size="lg" className="text-lg px-10 py-6" asChild>
            <Link href="/book-demo">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground mt-6">
            Free demo. No credit card required.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
