"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, X, Clock, DollarSign, Shield, Building2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const featureComparison = [
  {
    feature: "Built for Real Estate",
    prestyj: true,
    competitor: false,
    note: "Drift is a generic B2B sales platform requiring extensive customization for RE workflows",
  },
  {
    feature: "AI Text Conversations",
    prestyj: true,
    competitor: true,
  },
  {
    feature: "AI Voice Assistants",
    prestyj: true,
    competitor: "Limited",
    note: "Drift focuses on chat-first; voice is secondary",
  },
  {
    feature: "Implementation Time",
    prestyj: "Days",
    competitor: "12+ weeks",
    note: "Drift enterprise deployments require extensive configuration and custom routing",
  },
  {
    feature: "Real Estate CRM Integrations",
    prestyj: true,
    competitor: false,
    note: "No native Follow Up Boss, BoomTown, kvCORE, or Sierra Interactive integration",
  },
  {
    feature: "Multi-Office Management",
    prestyj: true,
    competitor: "Complex",
    note: "Multi-brand configurations add weeks to Drift implementation",
  },
  {
    feature: "Predictable Pricing",
    prestyj: true,
    competitor: false,
    note: "$80/seat/month adds up fast for enterprise teams",
  },
  {
    feature: "Security Track Record",
    prestyj: true,
    competitor: "Breach Aug 2025",
    note: "OAuth exploit compromised Salesforce and Google Workspace integrations",
  },
];

const whyOperationsSwitch = [
  {
    icon: Building2,
    title: "Purpose-Built for Real Estate",
    description:
      "Drift serves 20+ industries generically. Prestyj is built exclusively for real estate with workflows, terminology, and integrations your teams already understand.",
  },
  {
    icon: Clock,
    title: "Deploy in Days, Not Months",
    description:
      "Drift enterprise deployments take 12+ weeks with custom routing and multi-brand configurations. Prestyj deploys across your offices in days.",
  },
  {
    icon: DollarSign,
    title: "No Seat-Based Cost Explosion",
    description:
      "Drift charges $80/seat/month for inbox access. For 50 offices with 2 managers each, that's $96K/year in seat costs alone—on top of the $60K+ base license.",
  },
  {
    icon: Shield,
    title: "Security You Can Trust",
    description:
      "The August 2025 Drift OAuth breach forced enterprises to disconnect Salesforce integrations. We prioritize security with no history of breaches.",
  },
];

const enterpriseStats = [
  {
    stat: "$60K+",
    description: "Drift annual enterprise license",
  },
  {
    stat: "12+ weeks",
    description: "enterprise implementation time",
  },
  {
    stat: "$80/seat",
    description: "monthly add-on for team access",
  },
  {
    stat: "Aug 2025",
    description: "OAuth security breach",
  },
];

export default function PrestyJVsDriftPage() {
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
                Prestyj vs Drift
                <br />
                <span className="text-primary">For Enterprise Real Estate</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
              >
                Drift is a proven B2B conversational platform—but it wasn&apos;t built for real estate.
                Compare implementation timelines, total costs, and RE-specific capabilities.
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

        {/* Security Warning Section */}
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
                August 2025 Security Incident
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                An OAuth exploit compromised Drift&apos;s Salesforce and Google Workspace integrations from August 8-18, 2025.
                Attackers used stolen tokens to export data via Salesforce Bulk API.
                Salesforce and Salesloft revoked all Drift access on August 20, 2025, forcing enterprises to disable Drift across their websites.
              </p>
              <p className="text-sm text-muted-foreground">
                Security considerations matter when evaluating enterprise platforms.
              </p>
            </motion.div>
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
                Understanding the total cost of Drift for enterprise real estate
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Drift Pricing */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl">Drift Enterprise</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-3xl font-bold">
                      $60K+<span className="text-lg font-normal text-muted-foreground">/year license</span>
                    </div>
                    <div className="text-warning font-medium">+ $80/seat/month for team access</div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>Established enterprise platform</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>Comprehensive marketing automation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                        <span>12+ week enterprise implementation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                        <span>$80/seat adds up (50 offices × 2 = $96K/year)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                        <span>No native real estate CRM integrations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                        <span>August 2025 security breach</span>
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
                      <Badge>Built for RE</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-3xl font-bold">
                      Custom pricing
                    </div>
                    <div className="text-success font-medium">No per-seat add-ons</div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>Built specifically for real estate</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>Deploys in days, not months</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>Native RE CRM integrations included</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>Multi-office management included</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>No security breach history</span>
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
                How enterprise capabilities compare for real estate operations
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
                      Drift
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
                Why Real Estate Operations Choose Prestyj
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Key reasons VPs and Directors at 50+ office operations choose purpose-built solutions
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
              {/* When Drift Fits */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">When Drift Is Right</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>You need cross-industry capabilities beyond real estate</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>Your team already uses Salesloft for sales engagement</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>You have IT resources for 12+ week implementation</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>Budget accommodates $80/seat ongoing costs</span>
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
                        <span>You operate 50+ real estate offices</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>You need real estate-specific workflows out of the box</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>You want fast deployment without months of configuration</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>You need native RE CRM integrations</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Security track record matters to your organization</span>
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
                href="/alternatives/drift"
                className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <p className="font-medium text-foreground mb-1">Drift Alternative</p>
                <p className="text-sm text-muted-foreground">
                  Full Drift alternative comparison
                </p>
              </Link>
              <Link
                href="/compare/prestyj-vs-conversica"
                className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <p className="font-medium text-foreground mb-1">Prestyj vs Conversica</p>
                <p className="text-sm text-muted-foreground">
                  Compare to another enterprise platform
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
                Ready for a Real Estate-First Platform?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                See how enterprise real estate operations are choosing purpose-built solutions over generic B2B platforms.
                Deploy in days, not months.
              </p>
              <Button size="lg" className="text-lg px-10 py-6" asChild>
                <Link href="/book-demo">
                  Book Your Enterprise Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground mt-6">
                See multi-office capabilities. No 12-week implementation.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
