import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Zap,
  Bot,
  Calendar,
  Shield,
  Code,
  Plug,
  Server,
  Cpu,
  Headphones,
  BarChart3,
  CheckCircle,
} from "lucide-react";
import BorderGlow from "@/components/ui/border-glow";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { PlatformStatsSection } from "@/components/sections/platform/platform-stats";
import { CitationStatsSection } from "@/components/sections/citation-stats-section";
import { PlatformComparisonSection } from "@/components/sections/platform/platform-comparison";
import { PlatformFAQSection } from "@/components/sections/platform/platform-faq";
import { platformFaqs } from "@/lib/platform-data";
import { pricingTiers } from "@/lib/pricing-data";
import { getIntegrationGroups } from "@/lib/integrations";

export const metadata: Metadata = {
  title: "How It Works | AI Agents, Batch Video Ads & Managed Ad Spend",
  description:
    "How Prestyj works: AI agents that answer calls and book appointments, batch video ads from one recording, and managed Google & Meta ad spend — all done for you.",
  keywords: [
    "AI agents for marketing and sales",
    "batch video ads",
    "managed ad spend",
    "AI sales agent",
    "AI voice agent",
    "AI receptionist",
    "done-for-you AI marketing",
  ],
  openGraph: {
    title: "How It Works | AI Agents, Batch Video Ads & Managed Ad Spend",
    description:
      "How Prestyj works: AI agents that answer calls and book appointments, batch video ads from one recording, and managed Google & Meta ad spend — all done for you.",
    type: "website",
    url: "https://prestyj.com/platform",
  },
  alternates: {
    canonical: "https://prestyj.com/platform",
  },
};

const capabilities = [
  {
    icon: Bot,
    title: "Custom AI Voice Agents",
    description:
      "Purpose-built voice agents trained on your scripts, objection handling, and qualification criteria. Not a generic chatbot—a sales agent that speaks your language.",
  },
  {
    icon: Plug,
    title: "Deep CRM Integrations",
    description:
      "Native Follow Up Boss connector live today, with kvCORE, Sierra Interactive, ServiceTitan, Jobber, HubSpot, Salesforce, and more built during onboarding. Bi-directional sync keeps your pipeline current in real-time.",
  },
  {
    icon: Code,
    title: "Custom Automation Workflows",
    description:
      "Build multi-step workflows that trigger based on lead source, urgency, time of day, or any custom criteria. Route, qualify, and book with zero manual intervention.",
  },
  {
    icon: Server,
    title: "Multi-Agent Architecture",
    description:
      "Deploy specialized agents for different functions: inbound qualification, outbound follow-up, appointment confirmation, and review collection. Each agent purpose-built for its role.",
  },
  {
    icon: Headphones,
    title: "Omni-Channel Response",
    description:
      "Phone calls, SMS, email, web chat, and social media DMs—all handled by AI from a single platform. Consistent experience across every touchpoint.",
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description:
      "Encrypted infrastructure, call recording with consent management, and role-based access controls — the same platform protecting every Prestyj customer.",
  },
];

const integrationGroups = getIntegrationGroups();

const useCases = [
  {
    icon: Zap,
    title: "Inbound Lead Qualification",
    description:
      "AI answers every inbound call and web lead instantly. Asks qualifying questions, scores the lead, and routes to the right team member or books directly.",
  },
  {
    icon: Calendar,
    title: "Automated Appointment Setting",
    description:
      "Book appointments directly into your calendar based on availability, service area, and job type. Sends confirmations and reminders automatically.",
  },
  {
    icon: Cpu,
    title: "Dead Lead Reactivation",
    description:
      "AI reaches out to your cold database with personalized messages. Identifies who's ready to buy now and re-engages them before competitors do.",
  },
  {
    icon: BarChart3,
    title: "After-Hours Coverage",
    description:
      "24/7 response that doesn't miss a beat. Emergency triage, appointment booking, and qualification—even at 2 AM on a Sunday.",
  },
];

export default function PlatformPage() {
  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Prestyj AI Sales Platform",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Done-for-you AI agents, batch video ads, and managed ad spend for service businesses and real estate teams.",
    url: "https://prestyj.com/platform",
    featureList: capabilities.map((cap) => cap.title),
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: String(pricingTiers[0]?.monthlyPrice ?? 0),
      highPrice: String(pricingTiers[pricingTiers.length - 1]?.monthlyPrice ?? 0),
      offerCount: pricingTiers.length,
      availability: "https://schema.org/InStock",
    },
  };

  const startingPrice = pricingTiers[0]?.monthlyPrice ?? 0;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Prestyj AI Agent Platform",
    description:
      "AI agents, batch video ads, and managed ad spend — done for you. Answer calls, follow up with leads, book appointments, and run paid social at scale.",
    provider: {
      "@type": "Organization",
      name: "Prestyj",
      url: "https://prestyj.com",
    },
    serviceType: [
      "AI Agents for Marketing",
      "AI Agents for Sales",
      "Batch Video Ads",
      "Managed Ad Spend",
      "AI Voice Agent",
      "AI Receptionist",
    ],
    areaServed: "United States",
  };

  const breadcrumbs = [
    { name: "Home", url: "https://prestyj.com" },
    { name: "How It Works", url: "https://prestyj.com/platform" },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <SafeJsonLd data={softwareAppSchema} />
      <SafeJsonLd data={serviceSchema} />
      <FAQJsonLd faqs={platformFaqs} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-16">
          <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
            <Badge variant="outline" className="border-primary/50 text-primary mb-6">
              How It Works
            </Badge>
            <h1 className="font-heading text-foreground mb-6 text-4xl leading-[1.1] font-bold md:text-5xl lg:text-6xl">
              Three systems that run your{" "}
              <span className="text-primary">marketing and sales.</span>
            </h1>
            <p className="text-muted-foreground mx-auto mb-4 max-w-2xl text-lg">
              AI agents that answer calls and book appointments, batch video ads turned out from a
              single recording, and managed Google &amp; Meta ad spend — all done for you, not a
              tool you learn.
            </p>
            <p className="text-foreground mx-auto mb-8 max-w-2xl text-base font-medium">
              Every Prestyj plan includes some combination of these three pillars. Here&rsquo;s how
              they work together.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/book-demo">Book a Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">See Pricing</Link>
              </Button>
            </div>
            <p className="text-muted-foreground mt-6 text-sm">
              Plans start at{" "}
              <span className="text-foreground font-semibold">
                ${startingPrice.toLocaleString()}/mo
              </span>
              .{" "}
              <Link
                href="/pricing"
                className="text-primary hover:text-primary/80 underline underline-offset-2"
              >
                Compare plans
              </Link>
            </p>
          </div>
        </section>

        {/* Statistics */}
        <PlatformStatsSection />

        {/* Three Pillars */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-4xl">
                The three pillars of every Prestyj plan
              </h2>
              <p className="text-muted-foreground mx-auto max-w-2xl">
                AI agents, batch video ads, and managed ad spend. Starter, Pro, and Scale each turn
                on more of all three.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <BorderGlow borderRadius={14} innerClassName="p-6">
                <Bot className="text-primary mb-4 h-8 w-8" />
                <h3 className="font-heading text-foreground mb-2 text-lg font-semibold">
                  1. AI Agents
                </h3>
                <p className="text-muted-foreground text-sm">
                  Voice agents that answer every call, sales agents that follow up with leads in
                  under 60 seconds, receptionists that book appointments, and marketing agents that
                  reactivate dead leads — 24/7.
                </p>
              </BorderGlow>
              <BorderGlow borderRadius={14} innerClassName="p-6">
                <BarChart3 className="text-primary mb-4 h-8 w-8" />
                <h3 className="font-heading text-foreground mb-2 text-lg font-semibold">
                  2. Batch Video Ads
                </h3>
                <p className="text-muted-foreground text-sm">
                  One recording session becomes hundreds of ad variants — different hooks, bodies,
                  offers, and CTAs — exported for Meta, TikTok, YouTube Shorts, and Reels so you can
                  test fast and find winners.
                </p>
              </BorderGlow>
              <BorderGlow borderRadius={14} innerClassName="p-6">
                <Server className="text-primary mb-4 h-8 w-8" />
                <h3 className="font-heading text-foreground mb-2 text-lg font-semibold">
                  3. Managed Ad Spend
                </h3>
                <p className="text-muted-foreground text-sm">
                  Google and Meta campaigns built and optimized for you. We launch, test creatives,
                  manage budgets, and report on cost per lead — so your ad dollars go toward what
                  actually converts.
                </p>
              </BorderGlow>
            </div>
          </div>
        </section>

        {/* Citation-friendly voice agent benchmarks */}
        <CitationStatsSection
          statIds={[
            "voice-agent-cost-per-minute-at-scale",
            "voice-agent-hidden-cost-percent",
            "voice-agent-pilot-setup-cost-range",
            "branded-calling-answer-rate-lift",
          ]}
          eyebrow="AI voice agent benchmarks"
          title="The numbers behind the Prestyj system."
          description="Per-minute cost at scale, hidden-cost percentage, pilot setup cost, and branded-calling answer-rate lift — each a permanent statistic with source, embed, and citation formats."
          cta={{
            label: "Browse all voice agent statistics",
            href: "/statistics#ai-voice-agent-economics",
          }}
          className="bg-muted/20 border-border/50 border-y"
        />

        {/* Comparison */}
        <PlatformComparisonSection />

        {/* Use Cases */}
        <section className="bg-card/50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-4xl">
                Built for Revenue-Critical Workflows
              </h2>
              <p className="text-muted-foreground mx-auto max-w-2xl">
                From inbound qualification to dead lead reactivation, deploy AI agents for every
                stage of your sales process.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {useCases.map((uc) => (
                <div
                  key={uc.title}
                  className="bg-background border-border flex gap-4 rounded-xl border p-6"
                >
                  <uc.icon className="text-primary mt-1 h-6 w-6 shrink-0" />
                  <div>
                    <h3 className="font-heading text-foreground mb-2 text-lg font-semibold">
                      {uc.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{uc.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-4xl">
                Connects to Your Existing Stack
              </h2>
              <p className="text-muted-foreground mx-auto max-w-2xl">
                Native integrations with the tools you already use. No rip-and-replace required.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {integrationGroups.map(({ category, integrations: tools }) => {
                const CategoryIcon = category.icon;
                return (
                  <div key={category.id} className="bg-card border-border rounded-xl border p-6">
                    <div className="mb-2 flex items-center gap-2">
                      <CategoryIcon className="text-primary h-5 w-5" />
                      <h3 className="font-heading text-foreground text-lg font-semibold">
                        {category.label}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-4 text-sm">{category.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {tools.map((tool) => (
                        <span
                          key={tool.name}
                          className={
                            tool.status === "live"
                              ? "bg-primary/10 border-primary/30 text-foreground inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm"
                              : "bg-background border-border text-foreground inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm"
                          }
                        >
                          {tool.name}
                          {tool.status === "live" ? (
                            <span className="text-primary inline-flex items-center gap-1 text-xs font-medium">
                              <CheckCircle className="h-3 w-3" />
                              Live
                            </span>
                          ) : (
                            <span className="text-muted-foreground text-xs">On request</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-muted-foreground mx-auto mt-8 max-w-2xl text-center text-sm">
              <span className="text-foreground font-medium">Honest version:</span> Follow Up Boss is
              the connector we run in production today. Everything else is built during onboarding
              using the vendor&rsquo;s API or webhooks — typically inside the 7–10 day go-live
              window. If your tool isn&rsquo;t listed and has an API, we can connect to it.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <PlatformFAQSection />

        {/* CTA */}
        <section className="bg-card/50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-4xl">
              See how it works in action.
            </h2>
            <p className="text-muted-foreground mx-auto mb-8 max-w-xl">
              Book a 30-minute demo and we&rsquo;ll show you the AI agents running live on a
              business like yours — then walk you through which plan fits.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/book-demo">Book a Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">See Pricing</Link>
              </Button>
            </div>
            <p className="text-muted-foreground mt-6 text-sm">
              Plans start at{" "}
              <span className="text-foreground font-semibold">
                ${startingPrice.toLocaleString()}/mo
              </span>
              . No long-term contracts.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
