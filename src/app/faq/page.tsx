import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { ArrowRight, Bot, Phone, MessageSquare, RefreshCw, Zap, Megaphone, DollarSign } from "lucide-react";

const siteUrl = "https://prestyj.com";

export const metadata: Metadata = {
  title: "AI Sales & Lead Generation FAQ | Common Questions Answered | Prestyj",
  description:
    "Get answers to common questions about AI lead generation, sales automation, AI receptionists, lead reactivation, and more. Everything service businesses need to know about AI sales agents.",
  keywords: [
    "AI lead generation FAQ",
    "AI sales agent questions",
    "AI receptionist FAQ",
    "lead reactivation questions",
    "sales automation FAQ",
    "marketing automation FAQ",
    "AI chatbot leads",
    "AI voice agent questions",
    "automated lead qualification",
    "AI sales assistant FAQ",
  ],
  openGraph: {
    title: "AI Sales & Lead Generation FAQ | Common Questions Answered | Prestyj",
    description:
      "Get answers to common questions about AI lead generation, sales automation, AI receptionists, lead reactivation, and more.",
    type: "website",
    url: `${siteUrl}/faq`,
  },
  alternates: {
    canonical: `${siteUrl}/faq`,
  },
};

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  id: string;
  title: string;
  icon: typeof Bot;
  description: string;
  link: {
    href: string;
    text: string;
  };
  faqs: FAQItem[];
}

// AI Lead Generation FAQs
const aiLeadGenerationFaqs: FAQItem[] = [
  {
    question: "How does AI lead generation work?",
    answer:
      "Our AI lead generation system uses intelligent chatbots, web forms, and voice agents to engage with potential customers 24/7. When a visitor lands on your website or calls your business, the AI instantly responds, asks qualifying questions, captures contact information, and can even book appointments directly into your calendar—all without human intervention.",
  },
  {
    question: "What's the difference between AI lead generation and traditional lead capture?",
    answer:
      "Traditional lead capture relies on static forms and manual follow-up, which means delayed responses and missed opportunities. AI lead generation engages visitors instantly, qualifies leads in real-time through conversation, and automates the entire capture-to-booking process. Studies show AI chatbots convert 3-5x more visitors than static forms.",
  },
  {
    question: "Can AI really qualify leads as well as a human?",
    answer:
      "Yes—for initial qualification. Our AI is trained to ask the right questions based on your criteria: budget, timeline, location, service needs, and more. It scores leads in real-time and can differentiate between hot prospects ready to book and tire-kickers who need nurturing. Complex situations are escalated to your team.",
  },
  {
    question: "How quickly can I get AI lead generation set up?",
    answer:
      "Most businesses are up and running within 1-2 weeks. This includes customizing the AI to your industry, training it on your specific services and qualification criteria, integrating with your CRM and calendar, and testing to ensure everything works flawlessly.",
  },
  {
    question: "Will AI lead generation work for my industry?",
    answer:
      "Our AI lead generation is particularly effective for home services (HVAC, plumbing, roofing), real estate, legal services, financial services, and any business where quick response times and lead qualification matter. If you have a website and receive inquiries, AI can help you capture more of them.",
  },
  {
    question: "What happens after the AI captures a lead?",
    answer:
      "Captured leads are instantly added to your CRM with full conversation history and qualification notes. Hot leads can be routed to your sales team for immediate follow-up, or if you prefer, the AI can book appointments directly into your calendar. You maintain full visibility and control over the entire process.",
  },
];

// AI Lead Response FAQs
const aiLeadResponseFaqs: FAQItem[] = [
  {
    question: "How fast does it actually respond?",
    answer:
      "Our average response time is 47 seconds. That's from lead submission to first text message. Compare that to the industry average of 47 hours. Speed-to-lead is the #1 predictor of conversion.",
  },
  {
    question: "Does it work nights and weekends?",
    answer:
      "That's the whole point. Your agent works 24/7/365. Saturday at 11pm when you're with family? It's working. Sunday morning? It's working. Holidays? It doesn't take them off.",
  },
  {
    question: "Will my leads know they're talking to AI?",
    answer:
      "No. Your agent uses natural language that feels human. We've tested extensively - leads engage just as well (often better) than with human follow-up. The conversation flows naturally, asks relevant questions, and responds contextually.",
  },
  {
    question: "What happens when a lead asks something the agent can't answer?",
    answer:
      "Your agent is designed to handle the qualification conversation. For specific questions or complex scenarios, it smoothly hands off to you with full context. You get notified immediately so you can jump in when needed.",
  },
  {
    question: "How does it integrate with my existing tools?",
    answer:
      "Your agent works with your existing CRM and calendar. We support integrations with Follow Up Boss, ServiceTitan, Jobber, HubSpot, Salesforce, Pipedrive, Google Calendar, Outlook, and more. Setup typically takes less than 30 minutes.",
  },
];

// AI Sales Agent FAQs
const aiSalesAgentFaqs: FAQItem[] = [
  {
    question: "What is an AI sales agent?",
    answer:
      "An AI sales agent is an intelligent system that handles lead engagement, qualification, and appointment booking automatically. It responds to inquiries 24/7, asks qualifying questions, nurtures prospects through follow-up sequences, and can book appointments directly into your calendar—freeing your team to focus on closing deals.",
  },
  {
    question: "Will an AI chatbot feel impersonal and scare off leads?",
    answer:
      "Our AI is trained on millions of successful sales conversations. It responds naturally, asks relevant follow-up questions, and knows when to escalate to a human. Most leads don't even realize they're talking to AI—they just know they got instant, helpful answers.",
  },
  {
    question: "I already have a contact form on my website. Why do I need AI?",
    answer:
      "Contact forms have an average 2-3% conversion rate. AI chatbots achieve 10-15% by engaging visitors proactively, answering objections in real-time, and creating a conversation instead of a transaction. Plus, forms don't book appointments automatically.",
  },
  {
    question: "My business is too complex for AI to understand.",
    answer:
      "Our AI is customized to your specific industry, services, and qualification criteria. Whether you're in real estate, home services, or consulting, the AI learns your business inside and out before going live.",
  },
  {
    question: "What if the AI says something wrong to a potential customer?",
    answer:
      "You maintain full control. Every response is pre-approved, and the AI is trained to handle objections professionally and escalate complex questions to your team. Plus, all conversations are logged for your review.",
  },
  {
    question: "Is there a long-term contract?",
    answer:
      "No long-term commitments required. We believe in earning your business every month. Most clients see ROI within the first week and stay because results speak for themselves, not because they're locked in.",
  },
];

// AI Receptionist FAQs
const aiReceptionistFaqs: FAQItem[] = [
  {
    question: "What is an AI receptionist?",
    answer:
      "An AI receptionist is a voice-powered AI that answers incoming calls to your business 24/7. It greets callers, qualifies their needs, answers common questions, routes calls appropriately, and can even book appointments directly into your calendar. Think of it as a virtual receptionist that never takes a break.",
  },
  {
    question: "How does an AI receptionist handle after-hours calls?",
    answer:
      "Your AI receptionist works around the clock—nights, weekends, and holidays. When a customer calls at 11pm, they get a helpful response instead of voicemail. The AI can answer questions, capture their information, and book appointments for the next available slot.",
  },
  {
    question: "Will callers know they're speaking to AI?",
    answer:
      "Modern AI voice technology is remarkably natural. Our receptionist uses conversational AI that sounds human and responds contextually. Most callers don't realize they're speaking to AI—they just appreciate getting immediate help instead of voicemail.",
  },
  {
    question: "Can the AI receptionist transfer calls to humans?",
    answer:
      "Absolutely. The AI is trained to recognize when a caller needs human assistance—complex issues, angry customers, or specific requests. It can transfer calls to the appropriate team member with full context from the conversation.",
  },
  {
    question: "What about spam and robocalls?",
    answer:
      "Your AI receptionist filters out spam calls automatically. It can recognize and block robocalls, telemarketers, and other unwanted calls, so your team only deals with legitimate prospects and customers.",
  },
];

// Lead Reactivation FAQs
const leadReactivationFaqs: FAQItem[] = [
  {
    question: "What is lead reactivation?",
    answer:
      "Lead reactivation is the process of re-engaging leads that have gone cold in your database. Using AI-powered sequences, personalized outreach, and optimal timing, we revive dormant relationships and convert 'dead' leads into active opportunities.",
  },
  {
    question: "My leads are too old—they've moved on. Will reactivation work?",
    answer:
      "23% of 'dead' leads reactivate when contacted properly. And here's the kicker: leads who didn't convert but stayed in touch are 4x more likely to refer friends and family. Old leads are relationship gold.",
  },
  {
    question: "I already tried reaching out to cold leads. It didn't work.",
    answer:
      "One email isn't outreach—it's a whisper in a windstorm. Studies show it takes 8-12 touches to re-engage a cold lead. Our AI sequences are designed for persistence that converts, not annoys.",
  },
  {
    question: "What if this annoys my contacts and damages my reputation?",
    answer:
      "Our AI monitors sentiment in real-time. Negative responses trigger automatic suppression—no human intervention needed. We protect your reputation while maximizing reactivation.",
  },
  {
    question: "How much revenue can I recover from my dormant database?",
    answer:
      "Results vary, but our clients typically see $47K+ in recovered revenue from their existing databases. With a 23% reactivation rate and proper follow-up, most businesses have significant untapped value in their CRMs.",
  },
];

// Sales Automation FAQs
const salesAutomationFaqs: FAQItem[] = [
  {
    question: "How long does it take to implement sales automation?",
    answer:
      "Most businesses are fully operational within 2-3 weeks. This includes CRM integration, sequence setup, team training, and testing. We handle the heavy lifting so you can focus on selling.",
  },
  {
    question: "Will sales automation work with my existing CRM?",
    answer:
      "Yes. We integrate with all major CRMs including Salesforce, HubSpot, Zoho, Pipedrive, and industry-specific platforms. If your CRM has an API, we can connect to it.",
  },
  {
    question: "Can I customize the automated messages?",
    answer:
      "Absolutely. You have full control over messaging, timing, and conditions. We help you craft sequences that match your brand voice and sales process. Nothing goes out without your approval.",
  },
  {
    question: "What happens when a lead responds?",
    answer:
      "Our AI handles initial responses and qualification, then alerts your team when a lead is warm and ready for human contact. You can also set up live transfer or instant notification for high-priority leads.",
  },
  {
    question: "How do you prevent leads from feeling 'sold to'?",
    answer:
      "Our sequences are designed to provide value first—market insights, helpful resources, and relevant content. We focus on building relationships, not just pushing for appointments. Leads engage because they're getting something useful.",
  },
  {
    question: "What's the typical ROI for sales automation?",
    answer:
      "Most clients see a 3-5x increase in lead engagement and 30-50% faster sales cycles. In dollar terms, businesses typically recover the cost of automation within the first 60 days through increased conversions.",
  },
];

// Marketing Automation FAQs
const marketingAutomationFaqs: FAQItem[] = [
  {
    question: "How long does it take to set up marketing automation?",
    answer:
      "Most businesses are fully operational within 2-3 weeks. This includes ad account integration, landing page setup, lead routing configuration, and initial optimization. We handle the technical work—you just review and approve.",
  },
  {
    question: "Will this work with my existing advertising platforms?",
    answer:
      "Yes. We integrate with all major advertising platforms including Google Ads, Meta (Facebook/Instagram), TikTok, LinkedIn, and more. If you're running ads, we can optimize them.",
  },
  {
    question: "How does the A/B testing work?",
    answer:
      "Our AI automatically creates and tests multiple variations of your ads and landing pages. It identifies statistically significant winners and shifts traffic to top performers—all without manual intervention. You'll see what's being tested and what's winning in your dashboard.",
  },
  {
    question: "What happens if the AI makes changes I don't like?",
    answer:
      "You maintain full control. Set guardrails for bids, budgets, and brand guidelines. Review all changes in your dashboard. Pause automation anytime. The AI works within your parameters—you're always in the driver's seat.",
  },
  {
    question: "How do you track ROI across different channels?",
    answer:
      "We implement full-funnel tracking from ad click through to closed deal. This includes cross-device attribution, call tracking, form submissions, and CRM integration. You'll know exactly which campaigns drive revenue, not just clicks.",
  },
  {
    question: "What kind of results can I expect?",
    answer:
      "Most clients see 30-50% improvement in cost per lead within the first 90 days, with conversion rates improving 2-3x over time. The exact results depend on your starting point, but continuous optimization compounds gains over time.",
  },
];

// Pricing & Implementation FAQs
const pricingImplementationFaqs: FAQItem[] = [
  {
    question: "What does the setup fee cover?",
    answer:
      "The setup fee covers your complete onboarding: custom AI agent training on your business, landing page or website build, ad campaign creation, CRM configuration, calendar integration, and phone number provisioning. Everything is done-for-you — you're live within 7-10 business days.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Absolutely. You can upgrade at any time. We'll prorate your setup fee difference and switch you over seamlessly. Most clients who start on Minimum upgrade to Pro within 60 days once they see the ROI.",
  },
  {
    question: "What does the included ad budget cover?",
    answer:
      "Your ad budget is spent directly on Google and Meta ads targeting your service area. We manage everything — ad creation, targeting, optimization, and reporting. The budget listed is the minimum included; you can always add more to scale faster.",
  },
  {
    question: "Are there contracts or commitments?",
    answer:
      "No long-term contracts. All plans are month-to-month after the initial setup. We earn your business every month. That said, AI marketing compounds over time — the longer you run, the better your results get.",
  },
  {
    question: "What kind of results can I expect?",
    answer:
      "Results vary by market and budget, but our clients typically see their first booked appointments within the first week of going live. The AI agent responds to every lead in under 60 seconds, which alone can double your booking rate compared to manual follow-up.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We specialize in service businesses: roofing, HVAC, plumbing, windows & doors, solar, landscaping, and similar trades. Our AI agents are trained specifically for service industry conversations and objection handling.",
  },
  {
    question: "How long does onboarding take?",
    answer:
      "Most clients are fully live within 7-10 business days. This includes AI agent training, website/landing page setup, ad campaign launch, and CRM configuration. We handle everything — you just need to show up for a 30-minute kickoff call.",
  },
  {
    question: "What are batch video ads?",
    answer:
      "Batch video ads are professionally produced short-form video ads we create for your business. Each batch includes multiple ad variations optimized for different platforms and audiences. More ads means more creative variety, which improves ad performance over time.",
  },
];

const faqSections: FAQSection[] = [
  {
    id: "ai-lead-generation",
    title: "AI Lead Generation",
    icon: Bot,
    description: "Capture leads 24/7 with AI chatbots, web forms, and voice agents",
    link: {
      href: "/solutions/ai-lead-generation",
      text: "Learn about AI Lead Generation",
    },
    faqs: aiLeadGenerationFaqs,
  },
  {
    id: "ai-lead-response",
    title: "AI Lead Response",
    icon: MessageSquare,
    description: "Respond to every lead in under 60 seconds, 24/7",
    link: {
      href: "/solutions/speed-to-lead",
      text: "Explore Speed-to-Lead Solutions",
    },
    faqs: aiLeadResponseFaqs,
  },
  {
    id: "ai-sales-agent",
    title: "AI Sales Agent",
    icon: Bot,
    description: "Automate lead qualification, nurturing, and appointment booking",
    link: {
      href: "/platform",
      text: "See Our AI Sales Agent Platform",
    },
    faqs: aiSalesAgentFaqs,
  },
  {
    id: "ai-receptionist",
    title: "AI Receptionist",
    icon: Phone,
    description: "Never miss a call with 24/7 AI-powered call answering",
    link: {
      href: "/alternatives/answer-connect",
      text: "Compare AI Receptionist Options",
    },
    faqs: aiReceptionistFaqs,
  },
  {
    id: "lead-reactivation",
    title: "Lead Reactivation",
    icon: RefreshCw,
    description: "Revive dormant leads and unlock hidden revenue in your database",
    link: {
      href: "/solutions/lead-reactivation",
      text: "Discover Lead Reactivation",
    },
    faqs: leadReactivationFaqs,
  },
  {
    id: "sales-automation",
    title: "Sales Automation",
    icon: Zap,
    description: "Put your sales pipeline on autopilot with intelligent automation",
    link: {
      href: "/solutions/sales-automation",
      text: "Explore Sales Automation",
    },
    faqs: salesAutomationFaqs,
  },
  {
    id: "marketing-automation",
    title: "Marketing Automation",
    icon: Megaphone,
    description: "Optimize ads, landing pages, and lead routing with AI",
    link: {
      href: "/solutions/marketing-automation",
      text: "Learn about Marketing Automation",
    },
    faqs: marketingAutomationFaqs,
  },
  {
    id: "pricing-implementation",
    title: "Pricing & Implementation",
    icon: DollarSign,
    description: "Plans, pricing, and getting started with AI sales agents",
    link: {
      href: "/pricing",
      text: "View Pricing Plans",
    },
    faqs: pricingImplementationFaqs,
  },
];

// Flatten all FAQs for structured data
const allFaqs: FAQItem[] = faqSections.flatMap((section) => section.faqs);

const breadcrumbs = [
  { name: "Home", url: siteUrl },
  { name: "FAQ", url: `${siteUrl}/faq` },
];

export default function FAQPage() {
  return (
    <>
      <FAQJsonLd faqs={allFaqs} />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimateOnScroll>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
                AI Sales & Lead Generation FAQ
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Get answers to common questions about AI lead generation, sales automation, AI receptionists, lead reactivation, and more. Everything service businesses need to know about AI sales agents.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll delay={0.1}>
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="font-heading font-semibold text-foreground mb-4">
                  Jump to a Section
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {faqSections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <section.icon className="h-4 w-4 flex-shrink-0" />
                      <span className="truncate">{section.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* FAQ Sections */}
        {faqSections.map((section, sectionIndex) => (
          <section
            key={section.id}
            id={section.id}
            className="py-12 scroll-mt-24"
          >
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <AnimateOnScroll delay={sectionIndex * 0.05}>
                <div className="flex items-center gap-3 mb-2">
                  <section.icon className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
                    {section.title} FAQ
                  </h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  {section.description}
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={sectionIndex * 0.05 + 0.1}>
                <Accordion type="single" collapsible className="space-y-4">
                  {section.faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${section.id}-${index}`}
                      className="bg-card border border-border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <div className="mt-6 pt-6 border-t border-border">
                  <Link
                    href={section.link.href}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    {section.link.text}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>
          </section>
        ))}

        {/* Related Resources Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground text-center mb-8">
                Explore Our AI Solutions
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { href: "/solutions/ai-lead-generation", title: "AI Lead Generation", description: "Capture leads 24/7 with AI chatbots and voice agents" },
                  { href: "/solutions/sales-automation", title: "Sales Automation", description: "Put your sales pipeline on autopilot" },
                  { href: "/solutions/marketing-automation", title: "Marketing Automation", description: "Optimize ads and landing pages with AI" },
                  { href: "/solutions/lead-reactivation", title: "Lead Reactivation", description: "Revive dormant leads in your database" },
                  { href: "/solutions/business-automation", title: "Business Automation", description: "Eliminate manual busywork with AI workflows" },
                  { href: "/pricing", title: "Pricing Plans", description: "View plans for every business size" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
                  >
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      {link.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {link.description}
                    </p>
                  </Link>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                Still Have Questions?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book a free demo and we&apos;ll show you exactly how AI can transform your lead generation and sales process. No commitment required.
              </p>
              <Button size="lg" className="text-lg px-10 py-6" asChild>
                <Link href="/book-demo">
                  Book Your Free Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground mt-6">
                See how AI would work for your business—no credit card required.
              </p>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
