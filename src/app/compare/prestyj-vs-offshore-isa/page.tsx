"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, X, Globe, Shield, AlertTriangle, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const featureComparison = [
  {
    feature: "Brand Voice Consistency",
    prestyj: true,
    competitor: "Varies",
    note: "Offshore agents may not match your brand tone across conversations",
  },
  {
    feature: "TCPA Compliance Built-In",
    prestyj: true,
    competitor: "Risk",
    note: "New Jan 2026 regulations require one-to-one consent tracking across 15+ state jurisdictions",
  },
  {
    feature: "24/7 Coverage",
    prestyj: true,
    competitor: true,
    note: "Both offer around-the-clock availability",
  },
  {
    feature: "Multi-Office Scalability",
    prestyj: true,
    competitor: "Limited",
    note: "Quality control becomes difficult at scale with distributed offshore teams",
  },
  {
    feature: "Response Consistency",
    prestyj: true,
    competitor: "Varies",
    note: "Different agents, different quality—hard to maintain standards",
  },
  {
    feature: "US Market Knowledge",
    prestyj: true,
    competitor: "Limited",
    note: "Offshore staff face steep learning curve on local market nuances",
  },
  {
    feature: "No Provider Turnover Impact",
    prestyj: true,
    competitor: false,
    note: "When offshore providers churn staff, your lead response suffers",
  },
  {
    feature: "Real-Time Performance Visibility",
    prestyj: true,
    competitor: "Limited",
    note: "Offshore reporting often delayed or inconsistent across locations",
  },
];

const whyOperationsSwitch = [
  {
    icon: Shield,
    title: "Eliminate TCPA Compliance Risk",
    description:
      "New 2026 regulations require one-to-one consent per seller across 15+ state mini-TCPA laws. AI has compliance built into every conversation—no training required.",
  },
  {
    icon: Globe,
    title: "Consistent Brand Voice",
    description:
      "Offshore teams struggle to match your brand tone. AI delivers the same quality conversation whether it's the first call or the ten-thousandth.",
  },
  {
    icon: AlertTriangle,
    title: "Remove Provider Risk",
    description:
      "When your offshore provider has turnover or quality issues, your lead response suffers. AI eliminates third-party dependency.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Portfolio Visibility",
    description:
      "See lead response metrics across all 50+ offices instantly. No more waiting for offshore provider reports or reconciling different data formats.",
  },
];

const enterpriseStats = [
  {
    stat: "15+",
    description: "states with mini-TCPA laws",
  },
  {
    stat: "Jan 2026",
    description: "new FCC consent rules take effect",
  },
  {
    stat: "$500-$1.5K",
    description: "TCPA violation penalty per call",
  },
  {
    stat: "285%",
    description: "TCPA class action surge (Sept 2025)",
  },
];

export default function PrestyJVsOffshoreIsaPage() {
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
                  Outsourcing Comparison
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-6"
              >
                AI Lead Response vs
                <br />
                <span className="text-primary">Offshore ISA Services</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
              >
                Offshore ISA services offer cost savings—but at what risk? Compare quality control,
                TCPA compliance, and enterprise scalability for 50+ office operations.
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

        {/* Cost Comparison */}
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
                Risk vs Cost Analysis
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The real cost of offshore ISAs includes compliance risk and quality variance
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Offshore ISA */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl">Offshore ISA Services</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-3xl font-bold">
                      $1,500-$3,000<span className="text-lg font-normal text-muted-foreground">/month per agent</span>
                    </div>
                    <div className="text-warning font-medium">+ compliance risk exposure</div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>Lower direct labor costs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>24/7 coverage available</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                        <span>TCPA compliance training and monitoring burden on you</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                        <span>Quality variance across different agents</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                        <span>Limited US market knowledge</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                        <span>Provider turnover affects your leads</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Prestyj AI */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full border-primary">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl">Prestyj AI</CardTitle>
                      <Badge>Compliance Built-In</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-3xl font-bold">
                      Custom pricing
                    </div>
                    <div className="text-success font-medium">TCPA compliance included</div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>TCPA compliance by design</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>Consistent brand voice every time</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>No third-party dependency</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>Real-time portfolio visibility</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>Scales without quality degradation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* TCPA Warning Section */}
        <section className="py-16 bg-destructive/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <AlertTriangle className="h-12 w-12 text-destructive mx-auto mb-4" />
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                2026 TCPA Compliance Warning
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                New FCC rules effective January 2026 require one-to-one consent per seller.
                15+ states have mini-TCPA laws with varying requirements. Violations cost $500-$1,500 per call—not per consumer.
                Class action filings surged 285% in September 2025 alone.
              </p>
              <p className="text-sm text-muted-foreground">
                Managing TCPA compliance across offshore teams and 50+ offices creates significant legal exposure.
              </p>
            </motion.div>
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
                How enterprise capabilities compare for 50+ office operations
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
                      Prestyj AI
                    </th>
                    <th className="text-center py-4 px-4 font-heading font-semibold text-muted-foreground">
                      Offshore ISA
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
                        {typeof row.competitor === "boolean" ? (
                          row.competitor ? (
                            <Check className="h-6 w-6 text-success mx-auto" />
                          ) : (
                            <X className="h-6 w-6 text-destructive mx-auto" />
                          )
                        ) : (
                          <span className="text-muted-foreground">{row.competitor}</span>
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
                Why Enterprise Operations Choose AI
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Risk reduction and quality consistency drive the decision
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
              {/* When Offshore Fits */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">When Offshore ISA Is Right</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>You need human conversation for complex negotiations</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>You have robust TCPA compliance infrastructure</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>You can accept quality variance between agents</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>Volume is low enough to maintain quality control</span>
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
                    <CardTitle className="text-xl">When Prestyj AI Is Right</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>TCPA compliance is a critical concern</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Brand voice consistency matters across all leads</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>You want to eliminate third-party provider risk</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>You need real-time visibility across 50+ offices</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Scale requires consistent quality without degradation</span>
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
                href="/compare/prestyj-vs-internal-isa-team"
                className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <p className="font-medium text-foreground mb-1">AI vs Internal ISA Team</p>
                <p className="text-sm text-muted-foreground">
                  Compare in-house ISA cost analysis
                </p>
              </Link>
              <Link
                href="/alternatives/internal-isa"
                className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <p className="font-medium text-foreground mb-1">ISA Alternative</p>
                <p className="text-sm text-muted-foreground">
                  Full ISA alternative comparison
                </p>
              </Link>
              <Link
                href="/best-for/real-estate-franchises"
                className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <p className="font-medium text-foreground mb-1">Best for Franchises</p>
                <p className="text-sm text-muted-foreground">
                  Why franchise operations choose AI
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
                Ready for Compliant, Consistent Lead Response?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                See how enterprise operations are replacing offshore provider risk with AI-powered consistency.
                TCPA compliance, brand voice control, and real-time visibility included.
              </p>
              <Button size="lg" className="text-lg px-10 py-6" asChild>
                <Link href="/book-demo">
                  Book Your Enterprise Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground mt-6">
                See compliance features. Evaluate quality consistency.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
