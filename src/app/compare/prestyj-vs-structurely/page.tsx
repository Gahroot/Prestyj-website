"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, X, Clock, DollarSign, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const featureComparison = [
  {
    feature: "Built for Enterprise Scale",
    prestyj: true,
    structurely: false,
    note: "Structurely targets agents handling 50-225 leads/month",
  },
  {
    feature: "Multi-Office Management",
    prestyj: true,
    structurely: false,
    note: "No documented enterprise features for 50+ office operations",
  },
  {
    feature: "AI Text Conversations",
    prestyj: true,
    structurely: true,
  },
  {
    feature: "AI Voice Assistants",
    prestyj: true,
    structurely: true,
  },
  {
    feature: "Proprietary AI Technology",
    prestyj: true,
    structurely: false,
    note: "Structurely AI is shared via CINC partnership",
  },
  {
    feature: "Predictable Billing",
    prestyj: true,
    structurely: false,
    note: "Users report billing issues including post-cancellation charges",
  },
  {
    feature: "Enterprise Support",
    prestyj: true,
    structurely: "Limited",
    note: "Reports of poor support responsiveness and ghosting",
  },
  {
    feature: "Portfolio-Level Reporting",
    prestyj: true,
    structurely: false,
  },
];

const whyOperationsSwitch = [
  {
    icon: Building2,
    title: "Built for Enterprise Scale",
    description:
      "Structurely's pricing tiers cap at 30 seats and 225 leads/month. Prestyj is architected for franchise operations handling thousands of leads across 50+ offices.",
  },
  {
    icon: Users,
    title: "Proprietary Technology",
    description:
      "Structurely's AI powers CINC's platform too—you're using shared technology. Prestyj's AI is built exclusively for your operation.",
  },
  {
    icon: DollarSign,
    title: "Reliable Billing",
    description:
      "Multiple reports of Structurely billing issues including $1,300+ charged after cancellation. Prestyj pricing is transparent with no billing surprises.",
  },
  {
    icon: Clock,
    title: "True Multi-Location Support",
    description:
      "Coordinate lead response across your entire portfolio with centralized dashboards, standardized workflows, and office-level accountability.",
  },
];

const enterpriseStats = [
  {
    stat: "$179-499",
    description: "Structurely monthly range",
  },
  {
    stat: "30 seats",
    description: "max on Structurely's top tier",
  },
  {
    stat: "225",
    description: "leads/month max on Build tier",
  },
  {
    stat: "50+",
    description: "offices Prestyj serves",
  },
];

export default function PrestyJVsStructurelyPage() {
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
                  Enterprise Comparison
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-6"
              >
                Prestyj vs Structurely
                <br />
                <span className="text-primary">Which Scales for Enterprise?</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
              >
                Structurely (Aisa Holmes) is popular with individual agents and small teams.
                But can it handle the demands of 50+ office franchise operations?
              </motion.p>
            </div>
          </div>
        </section>

        {/* Enterprise Stats */}
        <section className="py-12 border-y border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {enterpriseStats.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{item.stat}</div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
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
                Understanding where each platform fits
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Structurely Pricing */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl">Structurely</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-3xl font-bold">
                      $179-499<span className="text-lg font-normal text-muted-foreground">/month</span>
                    </div>
                    <div className="text-muted-foreground font-medium">Or $3/lead pricing</div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>Good for small teams and individual agents</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>57% reported response rate</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                        <span>Max 30 seats, 225 leads/month on top tier</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                        <span>AI shared with CINC platform</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                        <span>Reported billing/cancellation issues</span>
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
                      <Badge>Enterprise</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-3xl font-bold">
                      Custom pricing
                    </div>
                    <div className="text-success font-medium">Scaled for your operation</div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>Built for 50+ office operations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>Unlimited leads and locations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>Proprietary AI technology</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>Transparent billing, no surprises</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
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
                Feature Comparison
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                How enterprise capabilities compare
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
                      Structurely
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
                        {typeof row.prestyj === "boolean" ? (
                          row.prestyj ? (
                            <Check className="h-6 w-6 text-success mx-auto" />
                          ) : (
                            <X className="h-6 w-6 text-destructive mx-auto" />
                          )
                        ) : (
                          <span className="text-foreground">{row.prestyj}</span>
                        )}
                      </td>
                      <td className="text-center py-4 px-4">
                        {typeof row.structurely === "boolean" ? (
                          row.structurely ? (
                            <Check className="h-6 w-6 text-success mx-auto" />
                          ) : (
                            <X className="h-6 w-6 text-destructive mx-auto" />
                          )
                        ) : (
                          <span className="text-muted-foreground">{row.structurely}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        {/* Why Operations Switch Section */}
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
                Why Franchise Operations Choose Prestyj
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Key reasons enterprise operations outgrow Structurely
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyOperationsSwitch.map((item, index) => (
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

        {/* When Each Fits Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* When Structurely Fits */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">When Structurely Is Right</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>Individual agent or small team (under 30 users)</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>Lead volume under 225/month</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>Single office or small team operation</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>Budget-conscious with lower volume</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* When Prestyj Fits */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full border-primary">
                  <CardHeader>
                    <CardTitle className="text-xl">When Prestyj Is Right</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Franchise or regional brokerage (50+ offices)</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Thousands of monthly leads across locations</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Need portfolio-level visibility and control</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Require standardized workflows across offices</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Want proprietary, not shared, AI technology</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related Resources Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-6 text-center">
              Related Resources
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/compare/prestyj-vs-conversica"
                className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <p className="font-medium text-foreground mb-1">Prestyj vs Conversica</p>
                <p className="text-sm text-muted-foreground">
                  Compare enterprise AI platforms
                </p>
              </Link>
              <Link
                href="/alternatives/structurely"
                className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <p className="font-medium text-foreground mb-1">Structurely Alternative</p>
                <p className="text-sm text-muted-foreground">
                  Full alternative analysis
                </p>
              </Link>
              <Link
                href="/best-for/real-estate-franchises"
                className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <p className="font-medium text-foreground mb-1">Best for Franchises</p>
                <p className="text-sm text-muted-foreground">
                  Why franchise operations choose Prestyj
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                Ready to Scale Beyond Structurely?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book a demo to see how Prestyj handles enterprise-scale lead response across your
                entire franchise or regional network.
              </p>
              <Button size="lg" className="text-lg px-10 py-6" asChild>
                <Link href="/book-demo">
                  Book Your Enterprise Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground mt-6">
                See multi-office capabilities. No commitment required.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
