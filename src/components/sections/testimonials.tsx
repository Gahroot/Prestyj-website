import { Trophy } from "lucide-react";

import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Badge } from "@/components/ui/badge";

/**
 * Testimonials section.
 *
 * Renders a "coming soon" placeholder until we have verifiable, on-the-record
 * customer endorsements. Prior fabricated testimonials (with AI-generated
 * portraits) were removed to comply with the FTC's updated 2024 endorsement
 * rules (16 CFR Part 255) banning fake, AI-generated, or unattributable
 * consumer reviews.
 *
 * When real customer quotes are available, restore the testimonial card grid
 * with full names, roles, locations, and consent on file. Do not reintroduce
 * stock or AI-generated likenesses.
 */
export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-12 text-center">
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            We&rsquo;re onboarding our earliest customers right now. Real,
            attributable results will land here as soon as they&rsquo;re in
            the door.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="border-border bg-muted/20 mx-auto flex max-w-2xl flex-col items-center gap-3 rounded-xl border px-6 py-10 text-center">
            <div className="flex items-center gap-2">
              <Trophy className="text-muted-foreground/40 size-8" />
              <Badge variant="secondary">Pending</Badge>
            </div>
            <p className="text-muted-foreground text-sm">
              Early customer results coming soon.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
