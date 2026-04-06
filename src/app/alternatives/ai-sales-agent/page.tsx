import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Bot, Phone, MessageSquare, Zap, Clock, DollarSign, CheckCircle2 } from "lucide-react";
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
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-success/5" />
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
                <Bot className="w-3.5 h-3.5 mr-1.5" />
                AI Sales Agent Hub
              </Badge>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
                Compare Top
                <br />
                <span className="text-primary">AI Sales Agent Solutions</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                An AI sales agent responds to leads instantly, qualifies prospects, and books appointments 24/7. 
                Compare the leading platforms to find the right fit for your business.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>Voice AI</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <span>Text & Chat</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Zap className="h-5 w-5 text-primary" />
                  <span>Instant Response</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>24/7 Availability</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is an AI Sales Agent */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
                  What is an AI Sales Agent?
                </h2>
                <p className="text-muted-foreground mb-4">
                  An AI Sales Agent is software that uses artificial intelligence to handle initial lead conversations 
                  automatically. It responds to inquiries via phone, text, or chat—qualifying prospects, answering 
                  questions, and booking appointments without human intervention.
                </p>
                <p className="text-muted-foreground mb-6">
                  Unlike chatbots of the past, modern AI sales agents use natural language processing to have 
                  fluid, human-like conversations. They understand context, remember previous interactions, 
                  and can handle complex multi-turn conversations.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Instant Lead Response</p>
                      <p className="text-sm text-muted-foreground">Respond in seconds, not hours. 78% of buyers choose the first responder.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">24/7/365 Coverage</p>
                      <p className="text-sm text-muted-foreground">Never miss a lead at 3am on a Sunday or during peak business hours.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Consistent Qualification</p>
                      <p className="text-sm text-muted-foreground">Every lead gets the same thorough qualification—no variation, no bad days.</p>
                    </div>
                  </div>
                </div>
              </div>
              <BorderGlow borderRadius={14} innerClassName="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-4">
                  Key Capabilities
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Voice Calls</p>
                      <p className="text-sm text-muted-foreground">Answer calls, qualify leads, book appointments</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Text Messaging</p>
                      <p className="text-sm text-muted-foreground">Two-way SMS conversations with leads</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Bot className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Lead Qualification</p>
                      <p className="text-sm text-muted-foreground">Ask the right questions, score leads</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">CRM Integration</p>
                      <p className="text-sm text-muted-foreground">Sync data automatically to your systems</p>
                    </div>
                  </div>
                </div>
              </BorderGlow>
            </div>
          </div>
        </section>

        {/* Quick Comparison Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-3">
                Quick Comparison: AI Sales Agent Platforms
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See how the top AI sales agent solutions compare at a glance. Click any platform for a detailed comparison with Prestyj.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {aiSalesAgentAlternatives.map((alt) => (
                <Link
                  key={alt.slug}
                  href={`/alternatives/${alt.slug}`}
                  className="group"
                >
                  <Card className="h-full hover:border-primary/50 transition-all hover:shadow-md cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {alt.name}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          {alt.category}
                        </Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Pricing:</span>
                          <span className="font-medium text-foreground">{alt.pricing}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Best for:</span>
                          <span className="text-foreground">{alt.bestFor}</span>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-border">
                        <span className="text-primary text-sm font-medium inline-flex items-center group-hover:underline">
                          Compare vs Prestyj
                          <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
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
        <section className="py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-3">
                Detailed Comparisons
              </h2>
              <p className="text-muted-foreground">
                Explore how Prestyj compares to each AI sales agent platform in detail.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiSalesAgentAlternatives.slice(0, 9).map((alt) => (
                <Link key={alt.slug} href={`/alternatives/${alt.slug}`}>
                  <Card className="h-full hover:border-primary/50 transition-colors cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">
                          Prestyj vs {alt.name}
                        </CardTitle>
                        <Badge variant="outline" className="text-xs">
                          {alt.category}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        <strong>Prestyj advantage:</strong> {alt.prestyjAdvantage}
                      </p>
                      <div className="flex items-center text-primary font-medium text-sm">
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
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-3">
                Why Choose Prestyj as Your AI Sales Agent?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Compare the key advantages that set Prestyj apart from other AI sales agent platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">47-Second Response</h3>
                  <p className="text-sm text-muted-foreground">
                    Average response time. Most platforms take minutes to hours.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Same-Day Setup</h3>
                  <p className="text-sm text-muted-foreground">
                    Done-for-you deployment. No developers, no weeks of configuration.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">No Hidden Costs</h3>
                  <p className="text-sm text-muted-foreground">
                    Transparent pricing. No per-minute surprises or seat-based add-ons.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Industry-Optimized</h3>
                  <p className="text-sm text-muted-foreground">
                    Pre-built for real estate and home services. Not a generic chatbot.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Everything you need to know about choosing an AI sales agent solution.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <BorderGlow key={index} borderRadius={10} innerClassName="px-6">
                <AccordionItem
                  value={`item-${index}`}
                  className="border-none"
                >
                  <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline">
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
        <section className="py-24 relative overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Ready to See Prestyj in Action?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a personalized demo to see how Prestyj handles lead response and qualification. 
              Compare it side-by-side with your current solution or other platforms you&apos;re evaluating.
            </p>
            <Button size="lg" className="text-lg px-10 py-6" asChild>
              <Link href="/book-demo">
                Book Your Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-6">
              No credit card required. See results in minutes.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
