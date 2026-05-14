import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Bot,
  Phone,
  MessageSquare,
  Zap,
  Clock,
  DollarSign,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import BorderGlow from "@/components/ui/border-glow";

export const metadata: Metadata = {
  title: "AI Sales Agent Alternatives | Compare Top Solutions | Prestyj",
  description:
    "Compare Prestyj to top AI sales agent alternatives. See how we stack up against Conversica, Drift, Structurely, Retell AI, and more for lead response and qualification.",
  keywords: [
    "ai sales agent",
    "ai sales agent alternatives",
    "conversica alternative",
    "drift alternative",
    "structurely alternative",
    "retell ai alternative",
    "vapi alternative",
    "ai voice agent",
    "ai lead qualification",
    "sales automation ai",
  ],
  alternates: {
    canonical: "https://prestyj.com/alternatives/ai-sales-agent",
  },
};

// AI Sales Agent alternatives with key comparison data
const aiSalesAgentAlternatives = [
  {
    slug: "conversica",
    name: "Conversica",
    category: "Enterprise AI",
    pricing: "$2,999+/mo",
    bestFor: "Large enterprises",
    keyDifferentiator: "Multi-industry, enterprise focus",
    prestyjAdvantage: "Real estate-specific, faster deployment",
  },
  {
    slug: "drift",
    name: "Drift",
    category: "Conversational AI",
    pricing: "$60K+/yr",
    bestFor: "B2B sales teams",
    keyDifferentiator: "Chat-first, marketing automation",
    prestyjAdvantage: "RE-native, no per-seat costs",
  },
  {
    slug: "structurely",
    name: "Structurely",
    category: "Real Estate AI",
    pricing: "$450/mo",
    bestFor: "Real estate agents",
    keyDifferentiator: "Text + voice AI for RE",
    prestyjAdvantage: "Lead reactivation, no lead caps",
  },
  {
    slug: "retell-ai",
    name: "Retell AI",
    category: "Voice AI Platform",
    pricing: "$0.07-0.31/min",
    bestFor: "Developers",
    keyDifferentiator: "DIY voice agent builder",
    prestyjAdvantage: "Done-for-you service",
  },
  {
    slug: "vapi",
    name: "Vapi",
    category: "Voice AI Infrastructure",
    pricing: "$0.05/min+",
    bestFor: "Engineering teams",
    keyDifferentiator: "API-first infrastructure",
    prestyjAdvantage: "No-code, business-ready",
  },
  {
    slug: "human-isa",
    name: "Human ISA",
    category: "Inside Sales",
    pricing: "$4,000+/mo + commission",
    bestFor: "Luxury markets",
    keyDifferentiator: "Human rapport building",
    prestyjAdvantage: "24/7, no commission splits",
  },
  {
    slug: "bland-ai",
    name: "Bland AI",
    category: "Voice AI Platform",
    pricing: "Usage-based",
    bestFor: "Technical teams",
    keyDifferentiator: "Custom voice agent development",
    prestyjAdvantage: "Pre-built workflows, full service",
  },
  {
    slug: "synthflow",
    name: "Synthflow",
    category: "Voice AI Platform",
    pricing: "Per-minute",
    bestFor: "SMBs building bots",
    keyDifferentiator: "No-code voice builder",
    prestyjAdvantage: "Managed service, RE-optimized",
  },
  {
    slug: "lindy",
    name: "Lindy",
    category: "AI Assistant",
    pricing: "Subscription",
    bestFor: "General automation",
    keyDifferentiator: "Multi-purpose AI assistant",
    prestyjAdvantage: "Sales-focused, industry-optimized",
  },
  {
    slug: "eliseai",
    name: "EliseAI",
    category: "Property AI",
    pricing: "Enterprise pricing",
    bestFor: "Property management",
    keyDifferentiator: "Multifamily housing focus",
    prestyjAdvantage: "Sales & lead qualification focus",
  },
  {
    slug: "smart-alto",
    name: "Smart Alto",
    category: "Real Estate AI",
    pricing: "Subscription",
    bestFor: "Real estate teams",
    keyDifferentiator: "RE lead engagement",
    prestyjAdvantage: "Lead reactivation specialist",
  },
  {
    slug: "goodcall",
    name: "Goodcall",
    category: "AI Phone Answering",
    pricing: "Per-minute",
    bestFor: "Small businesses",
    keyDifferentiator: "Simple phone answering",
    prestyjAdvantage: "Full sales qualification workflow",
  },
];

const faqs = [
  {
    question: "What is an AI Sales Agent?",
    answer:
      "An AI Sales Agent is an artificial intelligence system that handles lead response, qualification, and engagement automatically. It can interact with leads via text, voice, or chat—responding instantly 24/7, qualifying prospects, booking appointments, and nurturing leads through the sales funnel without human intervention.",
  },
  {
    question: "How do I choose the right AI sales agent platform?",
    answer:
      "Consider these factors: (1) Industry specialization—some platforms are built for specific verticals like real estate, (2) Deployment model—DIY platforms require technical resources, while done-for-you services handle everything, (3) Pricing structure—per-minute vs. flat monthly rates, (4) Integration needs—does it work with your existing CRM and tools, (5) Scalability—can it grow with your lead volume without exploding costs.",
  },
  {
    question: "What's the difference between DIY platforms and done-for-you services?",
    answer:
      "DIY platforms (like Vapi, Retell AI, Bland AI) give you infrastructure to build custom voice agents—you need developers to implement and maintain them. Done-for-you services (like Prestyj) come pre-configured with industry-specific workflows and are managed by the provider. DIY offers more flexibility but requires technical resources; done-for-you offers faster time-to-value with less overhead.",
  },
  {
    question: "Can AI sales agents replace human ISAs?",
    answer:
      "AI sales agents excel at high-volume, instant response, and 24/7 availability—areas where human ISAs struggle. They're ideal for initial lead qualification, appointment setting, and consistent follow-up. However, human ISAs still excel at complex negotiations, building deep rapport, and handling nuanced conversations. Many teams use AI for volume and speed, with humans handling qualified, high-value conversations.",
  },
  {
    question: "What industries do AI sales agents work best for?",
    answer:
      "AI sales agents are most effective in industries with high lead volumes, time-sensitive responses, and standardized qualification criteria. Real estate, home services, insurance, and property management see strong results. The key is having clear qualification questions and predictable conversation flows.",
  },
  {
    question: "How quickly can I get started with an AI sales agent?",
    answer:
      "Implementation time varies widely: DIY platforms can take weeks to months of development and testing. Done-for-you services like Prestyj can be live the same day with pre-built workflows. Enterprise platforms like Conversica or Drift typically require 2-12 weeks for implementation and customization.",
  },
  {
    question: "What's the typical ROI of an AI sales agent?",
    answer:
      "ROI comes from three areas: (1) Faster response time—78% of buyers choose the first responder, (2) 24/7 coverage—capture leads that come in outside business hours, (3) Lead reactivation—revive dead leads already in your database. Most teams see positive ROI within 30-90 days through increased conversions and reduced staffing costs.",
  },
  {
    question: "Do AI sales agents integrate with my CRM?",
    answer:
      "Most AI sales agent platforms offer CRM integrations, but depth varies. Some (like Prestyj) have native integrations with real estate CRMs like Follow Up Boss, BoomTown, and kvCORE. Others require custom API work. Always verify integration capabilities and whether data sync is real-time or batch.",
  },
];

export default function AISalesAgentAlternativesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="from-primary/10 via-background to-success/5 absolute inset-0 bg-gradient-to-br" />
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge variant="outline" className="border-primary/50 text-primary mb-6">
                <Bot className="mr-1.5 h-3.5 w-3.5" />
                AI Sales Agent Hub
              </Badge>

              <h1 className="font-heading text-foreground mb-6 text-4xl font-bold sm:text-5xl md:text-6xl">
                Compare Top
                <br />
                <span className="text-primary">AI Sales Agent Solutions</span>
              </h1>

              <p className="text-muted-foreground mx-auto mb-8 max-w-3xl text-lg sm:text-xl">
                An AI sales agent responds to leads instantly, qualifies prospects, and books
                appointments 24/7. Compare the leading platforms to find the right fit for your
                business.
              </p>

              <div className="mb-8 flex flex-wrap justify-center gap-6">
                <div className="text-muted-foreground flex items-center gap-2">
                  <Phone className="text-primary h-5 w-5" />
                  <span>Voice AI</span>
                </div>
                <div className="text-muted-foreground flex items-center gap-2">
                  <MessageSquare className="text-primary h-5 w-5" />
                  <span>Text & Chat</span>
                </div>
                <div className="text-muted-foreground flex items-center gap-2">
                  <Zap className="text-primary h-5 w-5" />
                  <span>Instant Response</span>
                </div>
                <div className="text-muted-foreground flex items-center gap-2">
                  <Clock className="text-primary h-5 w-5" />
                  <span>24/7 Availability</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is an AI Sales Agent */}
        <section className="bg-muted/30 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <h2 className="font-heading text-foreground mb-4 text-2xl font-bold sm:text-3xl">
                  What is an AI Sales Agent?
                </h2>
                <p className="text-muted-foreground mb-4">
                  An AI Sales Agent is software that uses artificial intelligence to handle initial
                  lead conversations automatically. It responds to inquiries via phone, text, or
                  chat—qualifying prospects, answering questions, and booking appointments without
                  human intervention.
                </p>
                <p className="text-muted-foreground mb-6">
                  Unlike chatbots of the past, modern AI sales agents use natural language
                  processing to have fluid, human-like conversations. They understand context,
                  remember previous interactions, and can handle complex multi-turn conversations.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-success mt-0.5 h-5 w-5" />
                    <div>
                      <p className="text-foreground font-medium">Instant Lead Response</p>
                      <p className="text-muted-foreground text-sm">
                        Respond in seconds, not hours. 78% of buyers choose the first responder.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-success mt-0.5 h-5 w-5" />
                    <div>
                      <p className="text-foreground font-medium">24/7/365 Coverage</p>
                      <p className="text-muted-foreground text-sm">
                        Never miss a lead at 3am on a Sunday or during peak business hours.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-success mt-0.5 h-5 w-5" />
                    <div>
                      <p className="text-foreground font-medium">Consistent Qualification</p>
                      <p className="text-muted-foreground text-sm">
                        Every lead gets the same thorough qualification—no variation, no bad days.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <BorderGlow borderRadius={14} innerClassName="p-6">
                <h3 className="font-heading text-foreground mb-4 font-semibold">
                  Key Capabilities
                </h3>
                <div className="space-y-4">
                  <div className="bg-muted/50 flex items-center gap-4 rounded-lg p-3">
                    <div className="bg-primary/10 rounded-lg p-2">
                      <Phone className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">Voice Calls</p>
                      <p className="text-muted-foreground text-sm">
                        Answer calls, qualify leads, book appointments
                      </p>
                    </div>
                  </div>
                  <div className="bg-muted/50 flex items-center gap-4 rounded-lg p-3">
                    <div className="bg-primary/10 rounded-lg p-2">
                      <MessageSquare className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">Text Messaging</p>
                      <p className="text-muted-foreground text-sm">
                        Two-way SMS conversations with leads
                      </p>
                    </div>
                  </div>
                  <div className="bg-muted/50 flex items-center gap-4 rounded-lg p-3">
                    <div className="bg-primary/10 rounded-lg p-2">
                      <Bot className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">Lead Qualification</p>
                      <p className="text-muted-foreground text-sm">
                        Ask the right questions, score leads
                      </p>
                    </div>
                  </div>
                  <div className="bg-muted/50 flex items-center gap-4 rounded-lg p-3">
                    <div className="bg-primary/10 rounded-lg p-2">
                      <Zap className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">CRM Integration</p>
                      <p className="text-muted-foreground text-sm">
                        Sync data automatically to your systems
                      </p>
                    </div>
                  </div>
                </div>
              </BorderGlow>
            </div>
          </div>
        </section>

        {/* Quick Comparison Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <h2 className="font-heading text-foreground mb-3 text-2xl font-bold sm:text-3xl">
                Quick Comparison: AI Sales Agent Platforms
              </h2>
              <p className="text-muted-foreground mx-auto max-w-2xl">
                See how the top AI sales agent solutions compare at a glance. Click any platform for
                a detailed comparison with Prestyj.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {aiSalesAgentAlternatives.map((alt) => (
                <Link key={alt.slug} href={`/alternatives/${alt.slug}`} className="group">
                  <Card className="hover:border-primary/50 h-full cursor-pointer transition-all hover:shadow-md">
                    <CardContent className="p-4">
                      <div className="mb-3 flex items-center justify-between">
                        <h3 className="text-foreground group-hover:text-primary font-semibold transition-colors">
                          {alt.name}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          {alt.category}
                        </Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Pricing:</span>
                          <span className="text-foreground font-medium">{alt.pricing}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Best for:</span>
                          <span className="text-foreground">{alt.bestFor}</span>
                        </div>
                      </div>
                      <div className="border-border mt-3 border-t pt-3">
                        <span className="text-primary inline-flex items-center text-sm font-medium group-hover:underline">
                          Compare vs Prestyj
                          <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Cards */}
        <section className="bg-muted/30 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="font-heading text-foreground mb-3 text-2xl font-bold sm:text-3xl">
                Detailed Comparisons
              </h2>
              <p className="text-muted-foreground">
                Explore how Prestyj compares to each AI sales agent platform in detail.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {aiSalesAgentAlternatives.slice(0, 9).map((alt) => (
                <Link key={alt.slug} href={`/alternatives/${alt.slug}`}>
                  <Card className="hover:border-primary/50 h-full cursor-pointer transition-colors">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">Prestyj vs {alt.name}</CardTitle>
                        <Badge variant="outline" className="text-xs">
                          {alt.category}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3 text-sm">
                        <strong>Prestyj advantage:</strong> {alt.prestyjAdvantage}
                      </p>
                      <div className="text-primary flex items-center text-sm font-medium">
                        View full comparison <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" asChild>
                <Link href="/alternatives">
                  View All Alternatives
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Prestyj for AI Sales */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="font-heading text-foreground mb-3 text-2xl font-bold sm:text-3xl">
                Why Choose Prestyj as Your AI Sales Agent?
              </h2>
              <p className="text-muted-foreground mx-auto max-w-2xl">
                Compare the key advantages that set Prestyj apart from other AI sales agent
                platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="bg-primary/10 mx-auto mb-4 w-fit rounded-full p-3">
                    <Clock className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-foreground mb-2 font-semibold">
                    47-Second Response
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Average response time. Most platforms take minutes to hours.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="bg-primary/10 mx-auto mb-4 w-fit rounded-full p-3">
                    <Zap className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-foreground mb-2 font-semibold">
                    Same-Day Setup
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Done-for-you deployment. No developers, no weeks of configuration.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="bg-primary/10 mx-auto mb-4 w-fit rounded-full p-3">
                    <DollarSign className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-foreground mb-2 font-semibold">
                    No Hidden Costs
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Transparent pricing. No per-minute surprises or seat-based add-ons.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="bg-primary/10 mx-auto mb-4 w-fit rounded-full p-3">
                    <Bot className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-foreground mb-2 font-semibold">
                    Industry-Optimized
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Pre-built for real estate and home services. Not a generic chatbot.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-muted/30 py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="font-heading text-foreground mb-3 text-2xl font-bold sm:text-3xl">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Everything you need to know about choosing an AI sales agent solution.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <BorderGlow key={index} borderRadius={10} innerClassName="px-6">
                  <AccordionItem value={`item-${index}`} className="border-none">
                    <AccordionTrigger className="font-heading text-foreground text-left font-semibold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </BorderGlow>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden py-24">
          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-heading text-foreground mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Ready to See Prestyj in Action?
            </h2>
            <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
              Book a personalized demo to see how Prestyj handles lead response and qualification.
              Compare it side-by-side with your current solution or other platforms you&apos;re
              evaluating.
            </p>
            <Button size="lg" className="px-10 py-6 text-lg" asChild>
              <Link href="/book-demo">Book a Demo<ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="text-muted-foreground mt-6 text-sm">
              No credit card required. See results in minutes.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
