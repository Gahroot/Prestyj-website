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

export const metadata: Metadata = {
  title: "Platform | Custom AI Sales Agents & Automation Workflows",
  description:
    "Build custom AI sales agents with Prestyj's platform. Multi-agent workflows, CRM integrations, custom voice agents, and enterprise-grade automation for high-growth service businesses.",
  keywords: [
    "custom sales automation workflows",
    "multi-agent sales outreach systems",
    "headless AI sales rep",
    "AI sales implementation",
    "business automation platform",
    "custom AI voice agent",
    "CRM AI integration",
    "enterprise sales automation",
  ],
  openGraph: {
    title: "Platform | Custom AI Sales Agents & Automation Workflows",
    description:
      "Build custom AI sales agents with multi-agent workflows, CRM integrations, and enterprise-grade automation.",
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
    title: "Enterprise Security & Compliance",
    description:
      "SOC 2 compliant infrastructure, HIPAA-ready configurations, call recording with consent management, and role-based access controls for multi-location businesses.",
  },
];

const integrations = [
  "ServiceTitan",
  "Jobber",
  "Housecall Pro",
  "Follow Up Boss",
  "kvCORE",
  "HubSpot",
  "Salesforce",
  "Pipedrive",
  "Google Calendar",
  "Outlook",
  "Twilio",
  "RingCentral",
  "Zapier",
  "Make",
  "Slack",
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
      "Build custom AI sales agents with multi-agent workflows, CRM integrations, custom voice agents, and enterprise-grade automation for high-growth service businesses.",
    url: "https://prestyj.com/platform",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "1997",
      highPrice: "5997",
      offerCount: 3,
      availability: "https://schema.org/InStock",
    },
    featureList: capabilities.map((cap) => cap.title),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom AI Sales Agent Development",
    description:
      "Platform for building purpose-built AI sales agents with custom workflows, deep integrations, and enterprise-grade reliability for service businesses.",
    provider: {
      "@type": "Organization",
      name: "Prestyj",
      url: "https://prestyj.com",
    },
    serviceType: [
      "AI Sales Agent Development",
      "Custom AI Workflows",
      "Multi-Agent Architecture",
      "AI Voice Agent Development",
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
              Build Your <span className="text-primary">Custom AI Workforce</span>
            </h1>
            <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
              Not a one-size-fits-all chatbot. Prestyj is a platform for building purpose-built AI
              sales agents with custom workflows, deep integrations, and enterprise-grade
              reliability.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/book-demo">Book a Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">See Pricing</Link>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/free-ads"
                className="text-primary hover:text-primary/80 underline underline-offset-2"
              >
                Free batch video ads →
              </Link>
              <Link
                href="/batch-video-ads"
                className="text-primary hover:text-primary/80 underline underline-offset-2"
              >
                Batch ad production →
              </Link>
              <Link
                href="/solutions/speed-to-lead"
                className="text-primary hover:text-primary/80 underline underline-offset-2"
              >
                Speed-to-lead solutions →
              </Link>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <PlatformStatsSection />

        {/* Capabilities Grid */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-4xl">
                Enterprise Capabilities, Startup Speed
              </h2>
              <p className="text-muted-foreground mx-auto max-w-2xl">
                Everything you need to deploy AI agents that actually drive revenue—not just answer
                questions.
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
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-4xl">
              Connects to Your Existing Stack
            </h2>
            <p className="text-muted-foreground mx-auto mb-10 max-w-2xl">
              Native integrations with the tools you already use. No rip-and-replace required.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {integrations.map((name) => (
                <span
                  key={name}
                  className="bg-card border-border text-foreground rounded-full border px-4 py-2 text-sm"
                >
                  {name}
                </span>
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
              Ready to Build Your AI Workforce?
            </h2>
            <p className="text-muted-foreground mx-auto mb-8 max-w-xl">
              Whether you need a single AI receptionist or a full multi-agent sales system, we build
              it custom for your business.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/book-demo">Book a Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/free-ads"
                className="text-primary hover:text-primary/80 underline underline-offset-2"
              >
                Try free batch video ads →
              </Link>
              <Link
                href="/batch-video-ads"
                className="text-primary hover:text-primary/80 underline underline-offset-2"
              >
                Learn about batch ads →
              </Link>
            </div>
            <p className="text-muted-foreground mt-4 text-xs">
              No commitment required. See a live demo customized to your industry.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
