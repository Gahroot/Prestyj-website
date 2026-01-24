"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, X, Clock, DollarSign, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const featureComparison = [
  {
    feature: "AI Text Conversations",
    prestyj: true,
    ylopo: true,
  },
  {
    feature: "AI Voice Assistants",
    prestyj: true,
    ylopo: true,
  },
  {
    feature: "24/7 Lead Response",
    prestyj: true,
    ylopo: true,
  },
  {
    feature: "Built-in CRM",
    prestyj: true,
    ylopo: false,
    note: "Ylopo requires separate CRM integration",
  },
  {
    feature: "Appointment Booking",
    prestyj: true,
    ylopo: true,
  },
  {
    feature: "Lead Qualification",
    prestyj: true,
    ylopo: true,
  },
  {
    feature: "No Ad Spend Required",
    prestyj: true,
    ylopo: false,
    note: "Ylopo pricing requires additional ad spend",
  },
  {
    feature: "Calendar Integration",
    prestyj: true,
    ylopo: true,
  },
];

const whyAgentsSwitch = [
  {
    icon: DollarSign,
    title: "Simpler Pricing Structure",
    description:
      "No required ad spend on top of monthly fees. Prestyj offers transparent, custom pricing tailored to your needs.",
  },
  {
    icon: Zap,
    title: "All-in-One Platform",
    description:
      "Built-in CRM eliminates the need for separate integrations. Everything you need in one place.",
  },
  {
    icon: Clock,
    title: "Faster Implementation",
    description:
      "Get up and running quickly without complex third-party CRM setup and configuration.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description:
      "Personalized onboarding and ongoing support to ensure your success with the platform.",
  },
];

const industryStats = [
  {
    stat: "78%",
    description: "of buyers work with the first agent to respond",
  },
  {
    stat: "80%",
    description: "of leads go cold due to slow response times",
  },
  {
    stat: "$4k+/mo",
    description: "average cost of an ISA plus commission",
  },
];

export default function PrestyJVsYlopoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-success/5" />
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
                  Comparison Guide
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-6"
              >
                Prestyj vs Ylopo
                <br />
                <span className="text-primary">Which AI Sales Agent Is Right for You?</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
              >
                Both platforms offer AI-powered lead engagement for real estate professionals.
                Here&apos;s an honest comparison to help you make the right choice for your business.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Industry Stats */}
        <section className="py-12 bg-card border-y border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {industryStats.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-primary mb-2">{item.stat}</div>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                Pricing Comparison
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Understanding the true cost of each platform
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Ylopo Pricing */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl">Ylopo</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-3xl font-bold">
                      $395<span className="text-lg font-normal text-muted-foreground">/month</span>
                    </div>
                    <div className="text-warning font-medium">+ Required ad spend</div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                        <span>Additional ad spend required on top of monthly fee</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                        <span>Separate CRM integration costs may apply</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>AI trained on 50M+ conversations</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Prestyj Pricing */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full border-primary">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl">Prestyj</CardTitle>
                      <Badge>Recommended</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-3xl font-bold">
                      Custom pricing
                    </div>
                    <div className="text-success font-medium">Tailored to your needs</div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>No required ad spend</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>Built-in CRM included</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>All-in-one platform</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-20 bg-card/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                Feature Comparison
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See how the platforms stack up side by side
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="overflow-x-auto"
            >
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-heading font-semibold text-foreground">
                      Feature
                    </th>
                    <th className="text-center py-4 px-4 font-heading font-semibold text-primary">
                      Prestyj
                    </th>
                    <th className="text-center py-4 px-4 font-heading font-semibold text-muted-foreground">
                      Ylopo
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {featureComparison.map((row, index) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="py-4 px-4">
                        <div className="font-medium text-foreground">{row.feature}</div>
                        {row.note && (
                          <div className="text-sm text-muted-foreground mt-1">{row.note}</div>
                        )}
                      </td>
                      <td className="text-center py-4 px-4">
                        {row.prestyj ? (
                          <Check className="h-6 w-6 text-success mx-auto" />
                        ) : (
                          <X className="h-6 w-6 text-destructive mx-auto" />
                        )}
                      </td>
                      <td className="text-center py-4 px-4">
                        {row.ylopo ? (
                          <Check className="h-6 w-6 text-success mx-auto" />
                        ) : (
                          <X className="h-6 w-6 text-destructive mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        {/* Why Agents Switch Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                Why Agents Switch from Ylopo
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Key reasons real estate professionals choose Prestyj
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyAgentsSwitch.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Resources Section */}
        <section className="py-16 bg-card/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-6 text-center">
              Related Resources
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/compare/prestyj-vs-isa"
                className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <p className="font-medium text-foreground mb-1">AI vs Human ISA</p>
                <p className="text-sm text-muted-foreground">
                  Compare AI agents to traditional inside sales agents
                </p>
              </Link>
              <Link
                href="/blog/why-leads-go-cold"
                className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <p className="font-medium text-foreground mb-1">Why 80% of Leads Go Cold</p>
                <p className="text-sm text-muted-foreground">
                  The data behind lead response times
                </p>
              </Link>
              <Link
                href="/results"
                className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <p className="font-medium text-foreground mb-1">See Real Results</p>
                <p className="text-sm text-muted-foreground">
                  Case studies from agents using Prestyj
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-success/10" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                Ready to See Prestyj in Action?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book a personalized demo to see how Prestyj can transform your lead management
                and help you close more deals.
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
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
