import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const tiers = [
  { price: "$1,497", label: "300 ads" },
  { price: "$2,497", label: "600 ads", featured: true },
  { price: "$3,997", label: "1,000 ads" },
];

export function BatchVideoAdsCrossSellSection() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="border-primary/30 bg-card rounded-2xl border p-8 sm:p-10">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div className="space-y-3">
                <h3 className="font-heading text-foreground text-2xl font-bold sm:text-3xl">
                  Need more video ads? Add a Batch Video Ad pack to your plan.
                </h3>
                <p className="text-muted-foreground">
                  An AI-produced add-on for clients already on an AI marketing agent plan. 300+
                  scripted vertical video ads from a single recording session, delivered in 1–2
                  business days — ready to run on Meta, TikTok, and YouTube Shorts.
                </p>
                <div className="flex flex-wrap gap-4 pt-1">
                  {tiers.map((tier) => (
                    <div
                      key={tier.price}
                      className={
                        tier.featured
                          ? "border-primary rounded-lg border-2 px-4 py-2"
                          : "border-border rounded-lg border px-4 py-2"
                      }
                    >
                      <span className="font-heading text-foreground font-bold">{tier.price}</span>
                      <span className="text-muted-foreground ml-2 text-sm">{tier.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Button size="lg" asChild>
                <Link href="/book-demo">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
