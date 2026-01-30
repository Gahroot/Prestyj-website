"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, X, Clock, TrendingDown, Building2, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const featureComparison = [
  {
    feature: "Response Consistency",
    prestyj: true,
    competitor: "Varies",
    note: "ISA performance varies by individual skill, motivation, and day-to-day factors",
  },
  {
    feature: "24/7 Lead Coverage",
    prestyj: true,
    competitor: false,
    note: "ISAs work business hours; nights/weekends require expensive shift premiums",
  },
  {
    feature: "Multi-Office Scalability",
    prestyj: true,
    competitor: "Difficult",
    note: "Scaling ISA teams across 50+ offices requires proportional hiring and management",
  },
  {
    feature: "No Turnover Risk",
    prestyj: true,
    competitor: false,
    note: "30% annual turnover means constant recruitment and retraining cycles",
  },
  {
    feature: "Instant Deployment",
    prestyj: true,
    competitor: false,
    note: "New ISAs need 4-5 months of salary before producing results",
  },
  {
    feature: "Consistent Lead Qualification",
    prestyj: true,
    competitor: "Varies",
    note: "Qualification rigor varies wildly across individual ISAs",
  },
  {
    feature: "Portfolio-Level Visibility",
    prestyj: true,
    competitor: false,
    note: "ISA performance data often siloed by location",
  },
  {
    feature: "TCPA Compliance Built-In",
    prestyj: true,
    competitor: "Manual",
    note: "Requires ongoing training and monitoring to ensure ISA compliance",
  },
];

const whyOperationsSwitch = [
  {
    icon: TrendingDown,
    title: "Eliminate Turnover Costs",
    description:
      "At 30% annual turnover, a 50-office operation loses ~15 ISAs per year. At $18K per failed hire plus recruitment, turnover alone costs hundreds of thousands annually.",
  },
  {
    icon: Clock,
    title: "Skip the 4-5 Month Ramp Period",
    description:
      "New ISAs require $10K-$12.5K in salary before producing results. AI deploys fully operational in days, not months.",
  },
  {
    icon: Building2,
    title: "Scale Without Linear Cost Increase",
    description:
      "Doubling your offices doesn't mean doubling ISA headcount. AI scales to handle increased volume without proportional cost increases.",
  },
  {
    icon: BarChart3,
    title: "Unified Performance Visibility",
    description:
      "See lead response metrics across all 50+ offices in real-time. No more waiting for monthly reports or reconciling data from different locations.",
  },
];

const enterpriseStats = [
  {
    stat: "30%",
    description: "annual ISA turnover rate",
  },
  {
    stat: "4-5 mo",
    description: "before ISAs become productive",
  },
  {
    stat: "$18K",
    description: "average cost per failed hire",
  },
  {
    stat: "<50%",
    description: "of ISAs profitable at 10 months",
  },
];

export default function PrestyJVsInternalIsaPage() {
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
                  Build vs Buy Analysis
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
                <span className="text-primary">Internal ISA Teams</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
              >
                Internal ISA teams have worked for decades—but at enterprise scale, the math changes.
                Compare total cost of ownership for 50+ office operations.
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
                Total Cost of Ownership
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The real cost of ISA teams goes far beyond salary
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* ISA Team Costs */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl">Internal ISA Team</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-3xl font-bold">
                      $57K-$69K<span className="text-lg font-normal text-muted-foreground">/year per ISA</span>
                    </div>
                    <div className="text-warning font-medium">+ benefits, taxes, management, turnover</div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>Human judgment for complex situations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>Relationship building capability</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                        <span>30% annual turnover industry-wide</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                        <span>4-5 months before new ISAs produce</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                        <span>$18K average cost per failed hire</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                        <span>Less than 50% profitable at 10 months</span>
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
                      <Badge>Zero Turnover</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-3xl font-bold">
                      Custom pricing
                    </div>
                    <div className="text-success font-medium">Scaled for enterprise operations</div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>Zero turnover risk</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>Deploys in days, not months</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>24/7/365 coverage included</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>Consistent quality across all offices</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>Portfolio-level reporting built-in</span>
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
                How enterprise capabilities compare at 50+ office scale
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
                      Internal ISA Team
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
                Why Enterprise Operations Are Switching
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The economics change at scale—here&apos;s why VPs and Directors make the move
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
              {/* When ISA Teams Fit */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">When Internal ISAs Are Right</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>You need human judgment for ultra-high-value negotiations</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>Leads require extensive relationship building</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>You have a proven training program with below-industry turnover</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <span>Volume is low enough that 1-2 ISAs can handle coverage</span>
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
                        <span>You operate 50+ offices and can&apos;t manage ISA teams at scale</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Turnover is killing lead response consistency</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>You need 24/7 coverage without overnight premiums</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>You want portfolio-level visibility into performance</span>
                      </li>
                      <li className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>You&apos;re tired of the 4-5 month ramp cycle</span>
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
                href="/alternatives/internal-isa"
                className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <p className="font-medium text-foreground mb-1">Internal ISA Alternative</p>
                <p className="text-sm text-muted-foreground">
                  Full comparison page with more details
                </p>
              </Link>
              <Link
                href="/compare/prestyj-vs-offshore-isa"
                className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <p className="font-medium text-foreground mb-1">AI vs Offshore ISA</p>
                <p className="text-sm text-muted-foreground">
                  Compare to outsourced ISA services
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
                Ready to Move Beyond ISA Challenges?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                See how enterprise brokerages are replacing unpredictable ISA teams with consistent AI lead response.
                Calculate your potential savings.
              </p>
              <Button size="lg" className="text-lg px-10 py-6" asChild>
                <Link href="/book-demo">
                  Book Your Enterprise Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground mt-6">
                See multi-office deployment. Calculate your ISA cost savings.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
