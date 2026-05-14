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
} from "lucide-react";
import BorderGlow from "@/components/ui/border-glow";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { PlatformStatsSection } from "@/components/sections/platform/platform-stats";
import { PlatformComparisonSection } from "@/components/sections/platform/platform-comparison";
import { PlatformFAQSection } from "@/components/sections/platform/platform-faq";
import { platformFaqs } from "@/lib/platform-data";
import { pricingTiers } from "@/lib/pricing-data";

export const metadata: Metadata = {
  title: "Platform | The AI Agent Platform That Runs Your Marketing & Sales",
  description:
    "See how Prestyj works under the hood. The AI agent platform that powers every plan — voice, chat, SMS, and CRM agents that run your marketing and sales 24/7.",
  keywords: [
    "AI agents for marketing and sales",
    "AI sales agent platform",
    "AI voice agent",
    "AI chatbot",
    "AI texting agent",
    "CRM AI integration",
    "lead reactivation AI",
    "AI receptionist",
  ],
  openGraph: {
    title: "Platform | The AI Agent Platform That Runs Your Marketing & Sales",
    description:
      "The AI agent platform under the hood of every Prestyj plan. Voice, chat, SMS, and CRM agents working together to run your marketing and sales.",
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
      "Native connections to ServiceTitan, Jobber, Follow Up Boss, HubSpot, Salesforce, and 50+ platforms. Bi-directional sync keeps your pipeline current in real-time.",
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

const integrationGroups: { category: string; description: string; tools: string[] }[] = [
  {
    category: "CRM Sync",
    description:
      "Bi-directional sync so every lead, note, and booking lands where your team already works.",
    tools: ["HubSpot", "Salesforce", "Follow Up Boss", "kvCORE", "Pipedrive"],
  },
  {
    category: "Field Service & Operations",
    description: "Jobs, dispatch, and customer history flow straight into your AI agents' context.",
    tools: ["ServiceTitan", "Jobber", "Housecall Pro"],
  },
  {
    category: "Calendar & Scheduling",
    description: "AI agents book real availability — never double-book, never overbook.",
    tools: ["Google Calendar", "Outlook"],
  },
  {
    category: "Phone & Messaging",
    description:
      "Power voice agents, SMS agents, and inbound receptionists on numbers you control.",
    tools: ["Twilio", "RingCentral"],
  },
  {
    category: "Automation & Workflow",
    description: "Trigger and extend agent workflows across the rest of your stack.",
    tools: ["Zapier", "Make", "Slack"],
  },
];

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
      "The AI agent platform that powers every Prestyj plan — voice, chat, SMS, and CRM agents that run your marketing and sales 24/7.",
    url: "https://prestyj.com/platform",
    featureList: capabilities.map((cap) => cap.title),
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: String(pricingTiers[0].monthlyPrice),
      highPrice: String(pricingTiers[pricingTiers.length - 1].monthlyPrice),
      offerCount: pricingTiers.length,
      availability: "https://schema.org/InStock",
    },
  };

  const startingPrice = pricingTiers[0].monthlyPrice;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Prestyj AI Agent Platform",
    description:
      "The AI agent platform under the hood of every Prestyj plan. Voice, chat, SMS, and CRM agents working together to run your marketing and sales.",
    provider: {
      "@type": "Organization",
      name: "Prestyj",
      url: "https://prestyj.com",
    },
    serviceType: [
      "AI Agents for Marketing",
      "AI Agents for Sales",
      "AI Voice Agent",
      "AI Chatbot",
      "AI Texting Agent",
      "CRM Integration",
    ],
    areaServed: "United States",
  };

  const breadcrumbs = [
    { name: "Home", url: "https://prestyj.com" },
    { name: "Platform", url: "https://prestyj.com/platform" },
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
              Platform & Technology
            </Badge>
            <h1 className="font-heading text-foreground mb-6 text-4xl leading-[1.1] font-bold md:text-5xl lg:text-6xl">
              How Prestyj&rsquo;s AI agents work —{" "}
              <span className="text-primary">the platform under the hood.</span>
            </h1>
            <p className="text-muted-foreground mx-auto mb-4 max-w-2xl text-lg">
              Voice, chat, SMS, and CRM agents working together to answer every lead, book every
              meeting, and reactivate every cold contact in your database — 24/7.
            </p>
            <p className="text-foreground mx-auto mb-8 max-w-2xl text-base font-medium">
              All Prestyj plans are powered by our AI agent platform. Here&rsquo;s what&rsquo;s
              inside.
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

        {/* Capabilities Grid */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-4xl">
                What&rsquo;s inside every Prestyj plan
              </h2>
              <p className="text-muted-foreground mx-auto max-w-2xl">
                The same AI agent platform powers Starter, Pro, and Scale — each plan just turns on
                more of it.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((cap) => (
                <BorderGlow key={cap.title} borderRadius={14} innerClassName="p-6">
                  <cap.icon className="text-primary mb-4 h-8 w-8" />
                  <h3 className="font-heading text-foreground mb-2 text-lg font-semibold">
                    {cap.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{cap.description}</p>
                </BorderGlow>
              ))}
            </div>
          </div>
        </section>

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
              {integrationGroups.map((group) => (
                <div key={group.category} className="bg-card border-border rounded-xl border p-6">
                  <h3 className="font-heading text-foreground mb-2 text-lg font-semibold">
                    {group.category}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">{group.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.tools.map((name) => (
                      <span
                        key={name}
                        className="bg-background border-border text-foreground rounded-full border px-3 py-1 text-sm"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <PlatformFAQSection />

        {/* CTA */}
        <section className="bg-card/50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-4xl">
              See the platform in action.
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
