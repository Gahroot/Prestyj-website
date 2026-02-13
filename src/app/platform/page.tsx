import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Zap, Bot, Calendar, Shield, Code, Plug, Server, Cpu, Headphones, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Platform | Custom AI Sales Agents & Automation Workflows | Prestyj",
  description: "Build custom AI sales agents with Prestyj's platform. Multi-agent workflows, CRM integrations, custom voice agents, and enterprise-grade automation for high-growth service businesses.",
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
    title: "Platform | Custom AI Sales Agents & Automation Workflows | Prestyj",
    description: "Build custom AI sales agents with multi-agent workflows, CRM integrations, and enterprise-grade automation.",
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
    description: "Purpose-built voice agents trained on your scripts, objection handling, and qualification criteria. Not a generic chatbot—a sales agent that speaks your language.",
  },
  {
    icon: Plug,
    title: "Deep CRM Integrations",
    description: "Native connections to ServiceTitan, Jobber, Follow Up Boss, HubSpot, Salesforce, and 50+ platforms. Bi-directional sync keeps your pipeline current in real-time.",
  },
  {
    icon: Code,
    title: "Custom Automation Workflows",
    description: "Build multi-step workflows that trigger based on lead source, urgency, time of day, or any custom criteria. Route, qualify, and book with zero manual intervention.",
  },
  {
    icon: Server,
    title: "Multi-Agent Architecture",
    description: "Deploy specialized agents for different functions: inbound qualification, outbound follow-up, appointment confirmation, and review collection. Each agent purpose-built for its role.",
  },
  {
    icon: Headphones,
    title: "Omni-Channel Response",
    description: "Phone calls, SMS, email, web chat, and social media DMs—all handled by AI from a single platform. Consistent experience across every touchpoint.",
  },
  {
    icon: Shield,
    title: "Enterprise Security & Compliance",
    description: "SOC 2 compliant infrastructure, HIPAA-ready configurations, call recording with consent management, and role-based access controls for multi-location businesses.",
  },
];

const integrations = [
  "ServiceTitan", "Jobber", "Housecall Pro", "Follow Up Boss", "kvCORE",
  "HubSpot", "Salesforce", "Pipedrive", "Google Calendar", "Outlook",
  "Twilio", "RingCentral", "Zapier", "Make", "Slack",
];

const useCases = [
  {
    icon: Zap,
    title: "Inbound Lead Qualification",
    description: "AI answers every inbound call and web lead instantly. Asks qualifying questions, scores the lead, and routes to the right team member or books directly.",
  },
  {
    icon: Calendar,
    title: "Automated Appointment Setting",
    description: "Book appointments directly into your calendar based on availability, service area, and job type. Sends confirmations and reminders automatically.",
  },
  {
    icon: Cpu,
    title: "Dead Lead Reactivation",
    description: "AI reaches out to your cold database with personalized messages. Identifies who's ready to buy now and re-engages them before competitors do.",
  },
  {
    icon: BarChart3,
    title: "After-Hours Coverage",
    description: "24/7 response that doesn't miss a beat. Emergency triage, appointment booking, and qualification—even at 2 AM on a Sunday.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center pt-16 overflow-hidden">
          <div className="relative z-10 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <Badge variant="outline" className="border-primary/50 text-primary mb-6">
              Platform & Technology
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-[1.1] mb-6">
              Build Your{" "}
              <span className="text-primary">Custom AI Workforce</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Not a one-size-fits-all chatbot. Prestyj is a platform for building purpose-built AI sales agents with custom workflows, deep integrations, and enterprise-grade reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/book-demo">Book a Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/solutions/home-services">See Solutions</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Enterprise Capabilities, Startup Speed
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need to deploy AI agents that actually drive revenue—not just answer questions.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((cap) => (
                <div key={cap.title} className="bg-card border border-border rounded-xl p-6">
                  <cap.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground">{cap.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Built for Revenue-Critical Workflows
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From inbound qualification to dead lead reactivation, deploy AI agents for every stage of your sales process.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((uc) => (
                <div key={uc.title} className="flex gap-4 p-6 bg-background border border-border rounded-xl">
                  <uc.icon className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{uc.title}</h3>
                    <p className="text-sm text-muted-foreground">{uc.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Connects to Your Existing Stack
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
              Native integrations with the tools you already use. No rip-and-replace required.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {integrations.map((name) => (
                <span key={name} className="px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Ready to Build Your AI Workforce?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Whether you need a single AI receptionist or a full multi-agent sales system, we build it custom for your business.
            </p>
            <Button size="lg" asChild>
              <Link href="/book-demo">Book a Demo</Link>
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              No commitment required. See a live demo customized to your industry.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
