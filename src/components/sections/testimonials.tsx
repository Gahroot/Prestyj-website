import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import SpotlightCard from "@/components/ui/spotlight-card";

const testimonials = [
  {
    quote:
      "I was skeptical. An AI representing my team? But it booked 12 qualified appointments the first week. My agents are spending time closing, not chasing.",
    name: "Sarah Mitchell",
    role: "Team Leader, 32-Agent Brokerage, Austin TX",
    initials: "SM",
    image: "/images/testimonials/testimonial-portrait-sarah-mitchell.png",
  },
  {
    quote:
      "My response time went from 4 hours to 47 seconds. We're closing deals we used to lose to whoever called back first. The ROI paid for itself in the first month.",
    name: "Marcus Chen",
    role: "Broker-Owner, Seattle WA",
    initials: "MC",
    image: "/images/testimonials/testimonial-portrait-marcus-chen.png",
  },
  {
    quote:
      "Replaced my ISA with Prestyj. Better results, fraction of the cost, zero HR headaches. My team focuses on closings. The AI handles the rest.",
    name: "Jennifer Adams",
    role: "Real Estate Team Lead, Miami FL",
    initials: "JA",
    image: "/images/testimonials/testimonial-portrait-jennifer-adams.png",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-16 text-center">
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            How businesses use Prestyj to respond, qualify, and book leads automatically.
          </p>
        </AnimateOnScroll>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll key={testimonial.name} delay={index * 0.15}>
              <SpotlightCard
                spotlightColor="rgba(94, 229, 179, 0.15)"
                className="border-border bg-card h-full rounded-xl border"
              >
                <div className="relative p-6">
                  <p className="text-foreground mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback className="bg-primary/20 text-primary">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-foreground font-semibold">{testimonial.name}</p>
                      <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
