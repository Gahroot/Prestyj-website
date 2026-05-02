import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Image,
  Wand2,
  LayoutTemplate,
  Share2,
  Megaphone,
  Palette,
  Layers,
  CheckCircle2,
  Monitor,
  ArrowRight,
  Mail,
  Shield,
} from "lucide-react";
import BorderGlow from "@/components/ui/border-glow";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { WaitlistForm } from "@/components/media-master-waitlist-form";

export const metadata: Metadata = {
  title: "Download Media Master | AI Creative Studio for Service Businesses",
  description:
    "Download Media Master — the desktop app that generates AI-powered creatives, manages offers and characters, and publishes to Facebook, Instagram, TikTok, LinkedIn, YouTube, and more. Built for coaches, consultants, agencies, and home service businesses.",
  keywords: [
    "Media Master download",
    "AI creative studio",
    "AI image generation for service businesses",
    "social media creative tool",
    "desktop app for content creation",
    "AI ad creative generator",
    "testimonial graphic maker",
    "before after photo generator",
    "carousel builder",
    "multi-platform publishing tool",
  ],
  openGraph: {
    title: "Download Media Master | AI Creative Studio for Service Businesses",
    description:
      "Generate AI-powered creatives, manage your brand, and publish to every platform — all from one desktop app.",
    type: "website",
    url: "https://prestyj.com/media-master",
  },
  alternates: {
    canonical: "https://prestyj.com/media-master",
  },
};

const features = [
  {
    icon: Wand2,
    title: "AI Image Generation",
    description:
      "Generate testimonial graphics, before/after shots, case-study heroes, UGC-style social proof, team portraits, lead magnets, ads, and more — powered by fal.ai.",
  },
  {
    icon: Megaphone,
    title: "Offer Management",
    description:
      "Define your services, packages, and products once. Reuse them across every creative generation — coaching, consulting, agency retainers, home services, and more.",
  },
  {
    icon: LayoutTemplate,
    title: "85+ Prompt Templates",
    description:
      "Built-in prompt library with 85 original templates plus 20 service-specific prompts for every content type — from YouTube thumbnails to podcast covers.",
  },
  {
    icon: Share2,
    title: "Multi-Platform Publishing",
    description:
      "Publish directly to Facebook, Instagram, LinkedIn, TikTok, X, YouTube, Threads, Pinterest, and Reddit from a single app.",
  },
  {
    icon: Palette,
    title: "Brand Kits",
    description:
      "Maintain consistent branding across every output. Colors, fonts, logos — your brand, everywhere, automatically.",
  },
  {
    icon: Layers,
    title: "Carousel Builder",
    description:
      "Build scroll-stopping carousels with hook-seeded templates — HookSlide, TipSlide, BigIdeaSlide, RehookSlide, and CtaSlide.",
  },
];

const platforms = [
  "Facebook",
  "Instagram",
  "TikTok",
  "LinkedIn",
  "YouTube",
  "X (Twitter)",
  "Threads",
  "Pinterest",
  "Reddit",
];

const systemRequirements = [
  { label: "OS", value: "Windows 10+ or macOS 12+" },
  { label: "RAM", value: "8 GB minimum" },
  { label: "Disk", value: "500 MB free space" },
  { label: "Internet", value: "Required for AI generation & publishing" },
];

const screenshots = [
  {
    src: "/images/media-master/image_gallery.png",
    caption: "AI Image Generation",
  },
  {
    src: "/images/media-master/prompt_gallery.png",
    caption: "85+ Prompt Templates",
  },
  {
    src: "/images/media-master/post_composer.png",
    caption: "Multi-Platform Publishing",
  },
  {
    src: "/images/media-master/brand_kits.png",
    caption: "Brand Kits",
  },
  {
    src: "/images/media-master/ai_agent.png",
    caption: "AI Agent",
  },
];

export default function MediaMasterPage() {
  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Media Master",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Windows, macOS",
    description:
      "AI-powered creative studio for service businesses. Generate images, manage offers, build carousels, and publish to every social platform from one desktop app.",
    url: "https://prestyj.com/media-master",
    downloadUrl: "https://prestyj.com/media-master",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "0",
      availability: "https://schema.org/InStock",
    },
    featureList: features.map((f) => f.title),
  };

  const breadcrumbs = [
    { name: "Home", url: "https://prestyj.com" },
    { name: "Media Master", url: "https://prestyj.com/media-master" },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <SafeJsonLd data={softwareAppSchema} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center pt-16 overflow-hidden">
          <div className="relative z-10 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <Badge variant="outline" className="border-primary/50 text-primary mb-6">
              Desktop App
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-[1.1] mb-6">
              <span className="text-primary">Media Master</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              The AI-powered creative studio for service businesses. Generate
              scroll-stopping images, manage your brand, build carousels, and publish
              to every platform — all from one desktop app.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="#waitlist">
                  <Mail className="mr-2 h-5 w-5" />
                  Join the Waitlist
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#features">
                  See What&apos;s Inside
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Everything You Need to Create &amp; Publish
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From AI image generation to multi-platform publishing — one app for
                your entire content workflow.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <BorderGlow key={feature.title} borderRadius={14} innerClassName="p-6">
                  <feature.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </BorderGlow>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                See It in Action
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A look inside Media Master — from AI image generation to multi-platform publishing.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {screenshots.map((shot) => (
                <div
                  key={shot.src}
                  className="rounded-xl border border-border overflow-hidden bg-background"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={shot.src}
                    alt={shot.caption}
                    className="w-full h-auto object-cover"
                  />
                  <div className="px-4 py-3 text-center">
                    <p className="text-sm font-medium text-foreground">{shot.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Publish Everywhere
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
              Create once, publish to every platform. Direct integrations with the
              social networks your audience actually uses.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {platforms.map((name) => (
                <span
                  key={name}
                  className="px-4 py-2 bg-background border border-border rounded-full text-sm text-foreground"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Waitlist Section */}
        <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Media Master Is Coming Soon
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Join the waitlist and be the first to know when the desktop app is
                available for download — free.
              </p>
            </div>

            <BorderGlow borderRadius={14} innerClassName="p-8">
              <WaitlistForm />
            </BorderGlow>

            {/* System Requirements */}
            <div className="bg-card border border-border rounded-xl p-6 mt-10">
              <h3 className="text-lg font-heading font-semibold text-foreground mb-4 text-center">
                System Requirements
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {systemRequirements.map((req) => (
                  <div key={req.label} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      <span className="text-foreground font-medium">{req.label}:</span>{" "}
                      {req.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact email */}
            <p className="text-center mt-8 text-muted-foreground text-sm">
              Questions? Reach us at{" "}
              <a
                href="mailto:hello@prestyj.com"
                className="text-primary hover:underline font-medium"
              >
                hello@prestyj.com
              </a>
            </p>
          </div>
        </section>

        {/* Getting Started */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Up and Running in 3 Steps
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  icon: Monitor,
                  title: "Download & Install",
                  description:
                    "Grab the installer for your platform. Install like any other desktop app.",
                },
                {
                  step: "2",
                  icon: Image,
                  title: "Add Your API Key",
                  description:
                    "Paste your fal.ai API key and connect your social accounts. Takes 60 seconds.",
                },
                {
                  step: "3",
                  icon: Wand2,
                  title: "Start Creating",
                  description:
                    "Add an offer, pick a prompt, and generate your first batch of creatives.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xl font-heading font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Ready to Level Up Your Content?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Join the waitlist and be the first to create scroll-stopping creatives
              for your service business.
            </p>
            <Button size="lg" asChild>
              <a href="#waitlist">
                <Mail className="mr-2 h-5 w-5" />
                Join the Waitlist
              </a>
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              Requires a fal.ai API key for image generation. Free tier available.
            </p>
          </div>
        </section>

        {/* Data Deletion */}
        <section id="data-deletion" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Data Deletion
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Your privacy matters. Here&apos;s how to request deletion of your
                personal data.
              </p>
            </div>

            <BorderGlow borderRadius={14} innerClassName="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                    How to Request Data Deletion
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Send an email to{" "}
                    <a
                      href="mailto:hello@prestyj.com"
                      className="text-primary hover:underline font-medium"
                    >
                      hello@prestyj.com
                    </a>{" "}
                    with the subject line{" "}
                    <span className="text-foreground font-medium">
                      &quot;Data Deletion Request&quot;
                    </span>
                    . Include the name and email address you signed up with so we can
                    locate your account.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                    What Gets Deleted
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <span>
                        <span className="text-foreground font-medium">CRM records:</span>{" "}
                        Your waitlist signup information — including your name and
                        email address — will be permanently removed from our systems.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <span>
                        <span className="text-foreground font-medium">App data:</span>{" "}
                        Media Master stores all data locally on your device. You can
                        delete this data at any time by uninstalling the app from your
                        computer.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                    Processing Time
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    CRM data deletion requests are processed within{" "}
                    <span className="text-foreground font-medium">30 days</span>. You
                    will receive a confirmation email once your data has been
                    successfully deleted.
                  </p>
                </div>
              </div>
            </BorderGlow>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
