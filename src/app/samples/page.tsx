import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shuffle, Layers, Zap } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SocialProof } from "@/components/free-ads/social-proof";
import { LiveProof } from "@/components/free-ads/live-proof";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import BorderGlow from "@/components/ui/border-glow";
import { VideoCarousel } from "@/components/sections/video-carousel";
import {
  VideoObjectJsonLd,
  type VideoDescriptor,
} from "@/components/seo/video-object-json-ld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";

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
  "1182069557",
  "1182069871",
  "1173092805",
  "1173092688",
  "1173092572",
  "1171065337",
  "1171065301",
  "1171065268",
  "1171065240",
  "1171065198",
  "1171065126",
  "1171065094",
];

const VIDEO_DESCRIPTORS: VideoDescriptor[] = [
  {
    vimeoId: "1182069557",
    name: "Vertical Video Ad Sample - Real Estate Pattern Interrupt Hook",
    description:
      "Vertical video ad sample featuring a pattern-interrupt hook for real estate agents, produced via the PRESTYJ combinatorial batch video ads method.",
    uploadDate: "2026-02-10",
  },
  {
    vimeoId: "1182069871",
    name: "Vertical Video Ad Sample - Realtor Bold Claim Hook",
    description:
      "Short-form vertical ad featuring a bold-claim opening hook for realtors, remixed from a single shoot using the PRESTYJ batch video ads production system.",
    uploadDate: "2026-02-10",
  },
  {
    vimeoId: "1173092805",
    name: "Vertical Video Ad Sample - Home Services Curiosity Gap Hook",
    description:
      "Vertical ad sample opening with a curiosity-gap hook for home services advertisers, built from the PRESTYJ 10-hook combinatorial framework.",
    uploadDate: "2026-01-22",
  },
  {
    vimeoId: "1173092688",
    name: "Vertical Video Ad Sample - Problem-Solution Body",
    description:
      "Vertical ad sample demonstrating the problem-solution body structure, one of five core body templates in the PRESTYJ batch video ads system.",
    uploadDate: "2026-01-22",
  },
  {
    vimeoId: "1173092572",
    name: "Vertical Video Ad Sample - Testimonial Body",
    description:
      "Vertical ad sample built around a testimonial body, showcasing social proof paired with a direct call to action from the PRESTYJ creative matrix.",
    uploadDate: "2026-01-22",
  },
  {
    vimeoId: "1171065337",
    name: "Vertical Video Ad Sample - Demo Body With Urgency CTA",
    description:
      "Vertical ad sample combining a product-demo body with an urgency-led CTA variant from the PRESTYJ batch video ads combinatorial system.",
    uploadDate: "2026-01-08",
  },
  {
    vimeoId: "1171065301",
    name: "Vertical Video Ad Sample - Before-After Body",
    description:
      "Vertical ad sample using a before-after body structure to demonstrate transformation outcomes, produced via the PRESTYJ batch video ads method.",
    uploadDate: "2026-01-08",
  },
  {
    vimeoId: "1171065268",
    name: "Vertical Video Ad Sample - Authority Body With Scarcity CTA",
    description:
      "Vertical ad sample pairing an authority-positioning body with a scarcity-driven CTA, remixed from the PRESTYJ combinatorial creative library.",
    uploadDate: "2026-01-08",
  },
  {
    vimeoId: "1171065240",
    name: "Vertical Video Ad Sample - Direct CTA Variant",
    description:
      "Vertical ad sample featuring a direct call-to-action variant, one of six CTA templates in the PRESTYJ batch video ads production system.",
    uploadDate: "2026-01-08",
  },
  {
    vimeoId: "1171065198",
    name: "Vertical Video Ad Sample - Question CTA Variant",
    description:
      "Vertical ad sample closing with a question-style CTA to spike engagement, drawn from the PRESTYJ batch video ads combinatorial creative matrix.",
    uploadDate: "2026-01-08",
  },
  {
    vimeoId: "1171065126",
    name: "Vertical Video Ad Sample - Benefit-Led CTA Variant",
    description:
      "Vertical ad sample closing with a benefit-led CTA that reinforces the core offer, built via the PRESTYJ 300-ad combinatorial production workflow.",
    uploadDate: "2026-01-08",
  },
  {
    vimeoId: "1171065094",
    name: "Vertical Video Ad Sample - Social Proof CTA Variant",
    description:
      "Vertical ad sample closing with a social-proof CTA for ad creative testing at scale, produced via the PRESTYJ batch video ads method.",
    uploadDate: "2026-01-08",
  },
];

const BREADCRUMB_ITEMS = [
  { name: "Home", url: "https://prestyj.com" },
  { name: "Samples", url: "https://prestyj.com/samples" },
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
      <VideoObjectJsonLd videos={VIDEO_DESCRIPTORS} />
      <BreadcrumbJsonLd items={BREADCRUMB_ITEMS} />
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

        {/* Video Carousel */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-6xl mx-auto px-8 md:px-16">
            <VideoCarousel videos={VIDEOS} />
          </div>
        </section>

        <SocialProof ctaHref="/free-ads" />
        <LiveProof ctaHref="/free-ads" />

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
                  <BorderGlow borderRadius={18} innerClassName="p-8 text-center">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </BorderGlow>
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
