"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, X, Clock, DollarSign, Zap, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const featureComparison = [
  {
    feature: "Built for Real Estate",
    prestyj: true,
    conversica: false,
    note: "Conversica is industry-agnostic, requires customization for RE workflows",
  },
  {
    feature: "Multi-Office Management",
    prestyj: true,
    conversica: "Limited",
    note: "Prestyj built for 50+ office operations from day one",
  },
  {
    feature: "AI Text Conversations",
    prestyj: true,
    conversica: true,
  },
  {
    feature: "AI Voice Assistants",
    prestyj: true,
    conversica: true,
  },
  {
    feature: "24/7 Lead Response",
    prestyj: true,
    conversica: true,
  },
  {
    feature: "Same-Day Implementation",
    prestyj: true,
    conversica: false,
    note: "Conversica requires 2+ weeks of setup and strategy calls",
  },
  {
    feature: "Transparent Pricing",
    prestyj: true,
    conversica: false,
    note: "Conversica pricing excludes customization, training, and maintenance",
  },
  {
    feature: "Responsive Support",
    prestyj: true,
    conversica: false,
    note: "Conversica users report difficulty reaching support",
  },
];

const whyOperationsSwitch = [
  {
    icon: Building2,
    title: "Purpose-Built for Real Estate",
    description:
      "Conversica serves 20+ industries. Prestyj is built exclusively for real estate with workflows, compliance, and terminology your teams already understand.",
  },
  {
    icon: Clock,
    title: "Faster Time to Value",
    description:
      "Conversica requires 2+ weeks of setup plus ongoing strategy calls. Prestyj deploys across your offices in days, not months.",
  },
  {
    icon: DollarSign,
    title: "Predictable Total Cost",
    description:
      "Conversica's $2,999/month is just the start—customization, training, and maintenance add significantly. Prestyj pricing includes everything.",
  },
  {
    icon: Zap,
    title: "Enterprise Operations Focus",
    description:
      "Multi-location dashboards, standardized workflows, and portfolio-level reporting designed for VPs managing 50+ offices.",
  },
];

const enterpriseStats = [
  {
    stat: "$2,999+",
    description: "Conversica monthly minimum",
  },
  {
    stat: "2+ weeks",
    description: "Conversica implementation time",
  },
  {
    stat: "48%",
    description: "of buyer inquiries get no response",
  },
  {
    stat: "78%",
    description: "of buyers work with first responder",
  },
];

export default function PrestyJVsConversicaPage() {
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
                Prestyj vs Conversica
                <br />
                <span className="text-primary">For Enterprise Real Estate Operations</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
              >
                Conversica is a proven enterprise AI assistant—but it wasn&apos;t built for real estate.
                Compare how each platform serves 50+ office operations managing thousands of monthly leads.
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
                Understanding the true cost of enterprise AI lead response
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Conversica Pricing */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl">Conversica</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-3xl font-bold">
                      $2,999+<span className="text-lg font-normal text-muted-foreground">/month</span>
                    </div>
                    <div className="text-warning font-medium">+ Hidden enterprise costs</div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>10+ years in market, proven technology</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>Unlimited seats included</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                        <span>Annual commitment required</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                        <span>Customization, training, maintenance extra</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                        <span>Not optimized for real estate workflows</span>
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
                    <div className="text-success font-medium">Scaled for your operation</div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>Built exclusively for real estate</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>Multi-office management included</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>Implementation, training, support included</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>Deploys in days, not weeks</span>
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
                      Conversica
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
                        {typeof row.conversica === "boolean" ? (
                          row.conversica ? (
                            <Check className="h-6 w-6 text-success mx-auto" />
                          ) : (
                            <X className="h-6 w-6 text-destructive mx-auto" />
                          )
                        ) : (
                          <span className="text-muted-foreground">{row.conversica}</span>
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
                Why Enterprise Operations Choose Prestyj
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Key reasons VPs and Directors at 50+ office operations make the switch
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
              {/* When Conversica Fits */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">When Conversica Is Right</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>You need cross-industry AI (auto, insurance, education)</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>You have IT resources for custom implementation</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>Budget includes ongoing customization costs</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>You prefer established enterprise vendors</span>
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
                        <span>You want fast deployment without months of setup</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>You need portfolio-level visibility and reporting</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>You prefer transparent, all-inclusive pricing</span>
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
                href="/compare/prestyj-vs-structurely"
                className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <p className="font-medium text-foreground mb-1">Prestyj vs Structurely</p>
                <p className="text-sm text-muted-foreground">
                  Compare to Structurely&apos;s real estate AI
                </p>
              </Link>
              <Link
                href="/compare/prestyj-vs-isa"
                className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <p className="font-medium text-foreground mb-1">AI vs Human ISA</p>
                <p className="text-sm text-muted-foreground">
                  The full cost comparison for enterprise teams
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
                Ready for a Real Estate-First Solution?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book a demo to see how Prestyj handles lead response across your entire operation—no
                lengthy implementation required.
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
