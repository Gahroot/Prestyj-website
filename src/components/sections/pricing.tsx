import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const included = [
  "Instant lead response (under 60 seconds)",
  "Smart qualification conversations",
  "Calendar integration & appointment booking",
  "Lead recovery & re-engagement",
  "24/7 availability",
  "Dedicated onboarding support",
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Pricing That Makes Sense
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Less than the cost of one missed deal. Way less than hiring a sales assistant.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <Card className="bg-background border-primary/50 border-2">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <p className="text-muted-foreground mb-2">
                  Custom pricing based on your lead volume
                </p>
                <p className="text-4xl font-heading font-bold text-foreground">
                  Let&apos;s Talk
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {included.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button size="lg" className="text-lg px-8" asChild>
                  <Link href="/book-demo">
                    Get Your Custom Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  No commitment. Just a conversation.
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
