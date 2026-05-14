import { Badge } from "@/components/ui/badge";
import { HeroDemoForm } from "@/components/sections/hero-demo-form";

export function HeroDemoSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      <div
        className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8"
        style={{ animation: "fade-up 0.6s ease-out forwards" }}
      >
        {/* Left side - Headline */}
        <div
          className="space-y-6 text-center lg:text-left"
          style={{ animation: "fade-up 0.5s ease-out 0.15s both" }}
        >
          <div className="flex justify-center lg:justify-start">
            <Badge variant="outline" className="border-primary/50 text-primary">
              AI Agents for Marketing & Sales
            </Badge>
          </div>
          <h1 className="font-heading text-foreground text-4xl leading-[1.1] font-bold md:text-5xl lg:text-6xl">
            Your Leads Deserve a Response.
            <br />
            <span className="text-primary">Not Tomorrow. Right Now.</span>
          </h1>
          <p className="text-muted-foreground mx-auto max-w-md text-lg lg:mx-0">
            Prestyj builds AI agents that respond to every lead in under 60 seconds — day, night,
            weekends. Capture leads, qualify them, and book meetings 24/7 without the salary or
            overhead of a full-time team.
          </p>
        </div>

        {/* Right side - Form */}
        <div className="relative" style={{ animation: "fade-up 0.5s ease-out 0.3s both" }}>
          <HeroDemoForm />
        </div>
      </div>
    </section>
  );
}
