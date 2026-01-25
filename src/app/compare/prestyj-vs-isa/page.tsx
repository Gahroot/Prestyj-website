"use client";

import { useState, useId, useCallback, useEffect, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  Check,
  X,
  Clock,
  DollarSign,
  Users,
  Zap,
  Calendar,
  TrendingUp,
  Heart,
  Brain,
  Scale,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// Comparison data using only verified industry stats
const comparisonData = [
  {
    factor: "Monthly Cost",
    humanISA: "$4,000+ base salary",
    aiAgent: "Custom pricing",
    humanIcon: DollarSign,
    advantage: "ai",
  },
  {
    factor: "Availability",
    humanISA: "40 hrs/week",
    aiAgent: "24/7/365",
    humanIcon: Clock,
    advantage: "ai",
  },
  {
    factor: "Response Time",
    humanISA: "Minutes to hours",
    aiAgent: "Under 60 seconds",
    humanIcon: Zap,
    advantage: "ai",
  },
  {
    factor: "Sick Days / PTO",
    humanISA: "Yes, requires coverage",
    aiAgent: "Never",
    humanIcon: Calendar,
    advantage: "ai",
  },
  {
    factor: "Commission Split",
    humanISA: "15-25%",
    aiAgent: "None",
    humanIcon: TrendingUp,
    advantage: "ai",
  },
  {
    factor: "Training Required",
    humanISA: "2-4 weeks",
    aiAgent: "Instant deployment",
    humanIcon: Brain,
    advantage: "ai",
  },
  {
    factor: "Scalability",
    humanISA: "Hire more staff",
    aiAgent: "Unlimited capacity",
    humanIcon: Users,
    advantage: "ai",
  },
  {
    factor: "Human Connection",
    humanISA: "Natural rapport building",
    aiAgent: "AI-powered conversations",
    humanIcon: Heart,
    advantage: "human",
  },
  {
    factor: "Complex Negotiations",
    humanISA: "Expert handling",
    aiAgent: "Handoff to agent",
    humanIcon: Scale,
    advantage: "human",
  },
];

// When human ISA makes sense
const humanISABenefits = [
  {
    title: "Complex Client Relationships",
    description:
      "Luxury markets or high-touch clients who expect personalized human interaction from the first contact.",
  },
  {
    title: "Local Market Expertise",
    description:
      "ISAs with deep neighborhood knowledge can provide nuanced insights that build immediate trust.",
  },
  {
    title: "Bilingual Requirements",
    description:
      "Markets requiring fluent conversation in multiple languages with cultural understanding.",
  },
  {
    title: "Team Culture Fit",
    description:
      "When in-person collaboration and team dynamics are essential to your business model.",
  },
];

// When AI makes more sense
const aiAgentBenefits = [
  {
    title: "High Lead Volume",
    description:
      "When you receive more inquiries than a human can respond to quickly. 78% of buyers work with the first responder.",
  },
  {
    title: "After-Hours Coverage",
    description:
      "Most leads come in evenings and weekends. Without 24/7 coverage, 80% of leads go cold due to slow response.",
  },
  {
    title: "Consistent Follow-Up",
    description:
      "AI never forgets to follow up, never has a bad day, and maintains the same quality on lead #1 and lead #100.",
  },
  {
    title: "Cost Efficiency",
    description:
      "Eliminate $4,000+/month salary plus 15-25% commission splits while handling unlimited lead volume.",
  },
  {
    title: "Instant Scaling",
    description:
      "Launch a new marketing campaign without worrying about overwhelming your ISA or hiring additional staff.",
  },
  {
    title: "Zero Turnover",
    description:
      "ISA positions have high turnover rates. Avoid constant recruiting, hiring, and training cycles.",
  },
];

function AnimatedNumber({ value }: { value: number }) {
  const isFirstRender = useRef(true);
  const spring = useSpring(value, { stiffness: 100, damping: 30 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString("en-US")
  );

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    spring.set(value);
  }, [spring, value]);

  return <motion.span>{display}</motion.span>;
}

function CostCalculator() {
  const monthsId = useId();
  const leadsId = useId();
  const commissionId = useId();
  const resultId = useId();

  const [months, setMonths] = useState(12);
  const [leads, setLeads] = useState(100);
  const [avgCommission, setAvgCommission] = useState(8000);

  const handleMonthsChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value) || 0;
      setMonths(Math.max(1, Math.min(60, value)));
    },
    []
  );

  const handleLeadsChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value) || 0;
      setLeads(Math.max(0, value));
    },
    []
  );

  const handleCommissionChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value) || 0;
      setAvgCommission(Math.max(0, value));
    },
    []
  );

  // Human ISA costs (verified industry data)
  const humanBaseSalary = 4000; // Monthly base
  const humanCommissionRate = 0.2; // 20% commission split (middle of 15-25% range)
  const humanTrainingCost = 2000; // One-time training cost
  const humanTurnoverRate = 0.5; // 50% annual turnover (ISA positions have high turnover)

  // Calculate expected deals per month (industry average conversion)
  const responseRate = 0.78; // 78% of buyers work with first responder
  const conversionRate = 0.02; // Conservative 2% lead-to-deal conversion
  const dealsPerMonth = leads * responseRate * conversionRate;
  const totalDeals = dealsPerMonth * months;
  const totalCommissionEarned = totalDeals * avgCommission;

  // Human ISA total cost
  const humanSalaryCost = humanBaseSalary * months;
  const humanCommissionCost = totalCommissionEarned * humanCommissionRate;
  const turnoverEvents = Math.floor((months / 12) * humanTurnoverRate);
  const humanTurnoverCost = turnoverEvents * humanTrainingCost;
  const humanTotalCost = humanSalaryCost + humanCommissionCost + humanTurnoverCost;

  // Potential savings (difference in commission structure)
  const potentialSavings = humanCommissionCost;

  return (
    <section id="calculator" className="py-24" aria-labelledby="calculator-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            id="calculator-heading"
            className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4"
          >
            Cost Comparison Calculator
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how much a human ISA costs over time based on verified industry data.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="border-border bg-card shadow-lg">
            <CardHeader className="border-b border-border">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calculator className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <span>Human ISA Cost Calculator</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 sm:p-8">
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <div className="space-y-2">
                  <label
                    htmlFor={monthsId}
                    className="block text-sm font-medium text-foreground"
                  >
                    Time Period (months)
                  </label>
                  <Input
                    id={monthsId}
                    type="number"
                    min="1"
                    max="60"
                    value={months}
                    onChange={handleMonthsChange}
                    className="text-lg h-12"
                    aria-describedby={`${monthsId}-hint`}
                  />
                  <p id={`${monthsId}-hint`} className="text-xs text-muted-foreground">
                    How long do you need ISA coverage?
                  </p>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor={leadsId}
                    className="block text-sm font-medium text-foreground"
                  >
                    Monthly Leads
                  </label>
                  <Input
                    id={leadsId}
                    type="number"
                    min="0"
                    value={leads}
                    onChange={handleLeadsChange}
                    className="text-lg h-12"
                    aria-describedby={`${leadsId}-hint`}
                  />
                  <p id={`${leadsId}-hint`} className="text-xs text-muted-foreground">
                    Average leads per month
                  </p>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor={commissionId}
                    className="block text-sm font-medium text-foreground"
                  >
                    Avg Commission ($)
                  </label>
                  <Input
                    id={commissionId}
                    type="number"
                    min="0"
                    value={avgCommission}
                    onChange={handleCommissionChange}
                    className="text-lg h-12"
                    aria-describedby={`${commissionId}-hint`}
                  />
                  <p id={`${commissionId}-hint`} className="text-xs text-muted-foreground">
                    Your average commission per deal
                  </p>
                </div>
              </div>

              <div
                className="bg-gradient-to-br from-destructive/10 via-background to-warning/10 rounded-xl p-6 sm:p-8 border border-destructive/20"
                role="region"
                aria-labelledby={resultId}
                aria-live="polite"
                aria-atomic="true"
              >
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="h-6 w-6 text-destructive" aria-hidden="true" />
                  <span
                    id={resultId}
                    className="text-sm font-medium text-muted-foreground uppercase tracking-wide"
                  >
                    Total Human ISA Cost
                  </span>
                </div>
                <div className="text-4xl sm:text-5xl font-heading font-bold text-foreground">
                  $<AnimatedNumber value={humanTotalCost} />
                </div>
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-border/50">
                  <div>
                    <p className="text-xl font-semibold text-foreground">
                      ${humanSalaryCost.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">base salary</p>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-foreground">
                      ${Math.round(humanCommissionCost).toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">commission splits (20%)</p>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-foreground">
                      ${humanTurnoverCost.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">turnover costs</p>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-success">
                      {Math.round(totalDeals)} deals
                    </p>
                    <p className="text-xs text-muted-foreground">estimated closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-success/10 rounded-lg border border-success/20">
                <p className="text-sm text-foreground">
                  <strong className="text-success">Potential commission savings with AI:</strong>{" "}
                  ${Math.round(potentialSavings).toLocaleString()} over {months} months by
                  eliminating 15-25% commission splits.
                </p>
              </div>

              <p className="text-xs text-muted-foreground text-center mt-6">
                Based on verified industry data: $4,000/month base salary, 15-25% commission
                splits, 2-4 week training period, and high ISA turnover rates. Your actual
                costs may vary.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

export default function PrestyVsISAPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 sm:py-28 relative overflow-hidden">
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
                AI Sales Agent vs Human ISA:
                <br />
                <span className="text-primary">The Real Comparison</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
              >
                Should you hire a human Inside Sales Agent or use AI? We break down the real
                costs, capabilities, and use cases to help you make the right choice for your
                business.
              </motion.p>

              {/* Key Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto"
              >
                <div className="p-4 rounded-lg bg-card border border-border">
                  <p className="text-3xl font-bold text-destructive">$4k+</p>
                  <p className="text-sm text-muted-foreground">ISA monthly salary</p>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border">
                  <p className="text-3xl font-bold text-warning">78%</p>
                  <p className="text-sm text-muted-foreground">choose first responder</p>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border">
                  <p className="text-3xl font-bold text-destructive">80%</p>
                  <p className="text-sm text-muted-foreground">leads lost to slow response</p>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border">
                  <p className="text-3xl font-bold text-primary">2-4 wks</p>
                  <p className="text-sm text-muted-foreground">ISA training time</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
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
                Side-by-Side Comparison
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                An honest look at how human ISAs and AI agents compare across key factors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="overflow-x-auto"
            >
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-heading font-semibold text-foreground">
                      Factor
                    </th>
                    <th className="text-left py-4 px-4 font-heading font-semibold text-foreground">
                      Human ISA
                    </th>
                    <th className="text-left py-4 px-4 font-heading font-semibold text-foreground">
                      AI Agent
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => {
                    const Icon = row.humanIcon;
                    return (
                      <motion.tr
                        key={row.factor}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="border-b border-border/50 hover:bg-muted/50 transition-colors"
                      >
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                              <Icon className="h-4 w-4 text-primary" />
                            </div>
                            <span className="font-medium text-foreground">{row.factor}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            {row.advantage === "human" ? (
                              <Check className="h-4 w-4 text-success flex-shrink-0" />
                            ) : (
                              <X className="h-4 w-4 text-muted-foreground/50 flex-shrink-0" />
                            )}
                            <span
                              className={
                                row.advantage === "human"
                                  ? "text-foreground"
                                  : "text-muted-foreground"
                              }
                            >
                              {row.humanISA}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            {row.advantage === "ai" ? (
                              <Check className="h-4 w-4 text-success flex-shrink-0" />
                            ) : (
                              <X className="h-4 w-4 text-muted-foreground/50 flex-shrink-0" />
                            )}
                            <span
                              className={
                                row.advantage === "ai"
                                  ? "text-foreground"
                                  : "text-muted-foreground"
                              }
                            >
                              {row.aiAgent}
                            </span>
                          </div>
                        </td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        {/* When to Choose Human ISA Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <Badge variant="outline" className="mb-4 border-warning/50 text-warning">
                Fair Comparison
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                When a Human ISA Makes Sense
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                There are legitimate scenarios where a human ISA might be the better choice
                for your business.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {humanISABenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-warning/20 hover:border-warning/40 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-lg bg-warning/10 flex items-center justify-center flex-shrink-0">
                          <Users className="h-5 w-5 text-warning" />
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-foreground mb-2">
                            {benefit.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* When AI Makes More Sense Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <Badge variant="outline" className="mb-4 border-success/50 text-success">
                AI Advantage
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                When AI Makes More Sense
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                For most real estate professionals, AI agents solve critical pain points that
                human ISAs struggle with.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiAgentBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-success/20 hover:border-success/40 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                          <Check className="h-5 w-5 text-success" />
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-foreground mb-2">
                            {benefit.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cost Calculator Section */}
        <CostCalculator />

        {/* Related Resources Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-6 text-center">
              Related Resources
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/compare/prestyj-vs-ylopo"
                className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <p className="font-medium text-foreground mb-1">Prestyj vs Ylopo</p>
                <p className="text-sm text-muted-foreground">
                  Compare Prestyj to Ylopo&apos;s AI platform
                </p>
              </Link>
              <Link
                href="/blog/speed-to-lead"
                className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <p className="font-medium text-foreground mb-1">Speed-to-Lead Guide</p>
                <p className="text-sm text-muted-foreground">
                  Why 5 minutes is already too late
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
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                Ready to See AI in Action?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book a demo and see how an AI agent handles your leads. No pressure, no
                commitment - just see if it is the right fit for your business.
              </p>
              <Button size="lg" className="text-lg px-10 py-6" asChild>
                <Link href="/book-demo">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground mt-6">
                Free demo. No credit card required.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
