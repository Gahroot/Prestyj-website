import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shuffle, Layers, Zap } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export const metadata: Metadata = {
  title: "Video Ad Samples | See the Ads We Actually Run | PRESTYJ",
  description:
    "Watch real video ad samples from our production process. See how we turn one shoot into 300+ unique ads using our combinatorial creative method.",
  openGraph: {
    title: "Video Ad Samples | PRESTYJ",
    description:
      "Watch real video ad samples from our production process. See how we turn one shoot into 300+ unique ads.",
    type: "website",
  },
};

const VIDEOS = [
  {
    id: "1171065337",
    title: "300 ads from 1 hour",
    tag: "Hook A · Body 1 · CTA 1",
  },
  {
    id: "1171065301",
    title: "300 ads, 24 hours",
    tag: "Hook B · Body 1 · CTA 1",
  },
  {
    id: "1171065268",
    title: "Hook variation test",
    tag: "Hook C · Body 2 · CTA 1",
  },
  {
    id: "1171065240",
    title: "CTA swap comparison",
    tag: "Hook A · Body 1 · CTA 3",
  },
  {
    id: "1171065198",
    title: "Body recut example",
    tag: "Hook B · Body 3 · CTA 2",
  },
  {
    id: "1171065126",
    title: "Full combo variation",
    tag: "Hook D · Body 2 · CTA 4",
  },
  {
    id: "1171065094",
    title: "Multi-hook remix",
    tag: "Hook E · Body 1 · CTA 5",
  },
];

const PROCESS_STEPS = [
  {
    icon: Shuffle,
    title: "Hooks",
    description:
      "10 different opening hooks that stop the scroll — pattern interrupts, bold claims, curiosity gaps.",
  },
  {
    icon: Layers,
    title: "Bodies",
    description:
      "5 core story structures — problem-solution, testimonial, demo, before-after, and authority.",
  },
  {
    icon: Zap,
    title: "CTAs",
    description:
      "6 call-to-action variants — urgency, scarcity, social proof, direct, question, and benefit-led.",
  },
];

export default function SamplesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimateOnScroll>
              <Badge variant="secondary" className="mb-4">
                Portfolio
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
                See the Ads We Actually Run
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                These are real ads from our production process, not mockups.
                Every ad below was built from the same combinatorial system we
                use for clients.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Video Grid */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {VIDEOS.map((video, index) => (
                <AnimateOnScroll key={video.id} delay={index * 0.1}>
                  <div className="bg-card border border-border rounded-2xl overflow-hidden">
                    <div className="aspect-video">
                      <iframe
                        src={`https://player.vimeo.com/video/${video.id}?autoplay=0&background=0`}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="fullscreen"
                        allowFullScreen
                        title={video.title}
                      />
                    </div>
                    <div className="p-4">
                      <Badge variant="outline" className="mb-2">
                        {video.tag}
                      </Badge>
                      <h3 className="font-heading font-semibold text-foreground">
                        {video.title}
                      </h3>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-24 px-4 bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <AnimateOnScroll className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                How We Make 300+ Ads From One Shoot
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We don&apos;t make 300 separate ads. We film once, then remix
                every component.
              </p>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {PROCESS_STEPS.map((step, index) => (
                <AnimateOnScroll key={step.title} delay={index * 0.1}>
                  <div className="bg-card border border-border rounded-2xl p-8 text-center">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            <AnimateOnScroll className="text-center">
              <p className="text-2xl md:text-3xl font-heading font-bold text-primary">
                10 hooks &times; 5 bodies &times; 6 CTAs = 300 unique ads
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Portfolio Pitch */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Why We Offer Free Ads
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                We&apos;re building a portfolio of results across different
                industries. That means we need real businesses running real ads.
              </p>
              <p className="text-lg text-muted-foreground">
                Qualifying businesses get their first 300 ads free. You get
                production-ready video ads, and we get a case study. If the ads
                don&apos;t perform, you keep them and we part ways.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 px-4 bg-primary/5">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Ready to Be Our Next Case Study?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get 300 free video ads to start. Just cover your ad spend.
              </p>
              <Button
                size="lg"
                className="font-bold text-lg px-12 py-7 rounded-lg shadow-lg shadow-primary/25"
                asChild
              >
                <Link href="/free-ads">
                  Get My FREE Ads
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
