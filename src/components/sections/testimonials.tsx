import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const testimonials = [
  {
    quote:
      "I was skeptical at first. An AI handling my leads? But it booked 12 appointments in the first week. I'm a believer now.",
    name: "Sarah Mitchell",
    role: "Real Estate Agent, Austin TX",
    initials: "SM",
    image: "/images/testimonials/testimonial-portrait-sarah-mitchell.png",
  },
  {
    quote:
      "My response time went from 4 hours to 47 seconds. I'm closing deals I would have lost before.",
    name: "Marcus Chen",
    role: "Broker, Seattle WA",
    initials: "MC",
    image: "/images/testimonials/testimonial-portrait-marcus-chen.png",
  },
  {
    quote:
      "Fired my ISA and replaced it with PRESTYJ. Better results, fraction of the cost. No more HR headaches.",
    name: "Jennifer Adams",
    role: "Team Lead, Miami FL",
    initials: "JA",
    image: "/images/testimonials/testimonial-portrait-jennifer-adams.png",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Agents Like You Are Winning
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don&apos;t take our word for it. Here&apos;s what happens when you let AI handle your leads.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll key={testimonial.name} delay={index * 0.15}>
              <Card className="bg-card border-border h-full">
                <CardContent className="p-6">
                  <p className="text-foreground mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback className="bg-primary/20 text-primary">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
