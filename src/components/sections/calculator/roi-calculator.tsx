"use client";

import { useState } from "react";
import { Calculator, TrendingUp, DollarSign, Phone, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface CalculatorInputs {
  businessType: string;
  monthlyCallVolume: string;
  currentAnswerRate: string;
  averageJobValue: string;
}

interface ROIResults {
  missedCallsPerMonth: number;
  missedCallsPerYear: number;
  annualRevenueLost: number;
  potentialRecoveredRevenue: number;
  estimatedAICost: number;
  netAnnualBenefit: number;
  roi: number;
  additionalJobsPerMonth: number;
  paybackPeriod: number;
}

export function RoiCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    businessType: "",
    monthlyCallVolume: "",
    currentAnswerRate: "",
    averageJobValue: "",
  });

  const [results, setResults] = useState<ROIResults | null>(null);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadFormData, setLeadFormData] = useState({
    firstName: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field: keyof CalculatorInputs, value: string) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  const calculateROI = () => {
    const monthlyCallVolume = parseFloat(inputs.monthlyCallVolume) || 0;
    const currentAnswerRate = parseFloat(inputs.currentAnswerRate) || 0;
    const averageJobValue = parseFloat(inputs.averageJobValue) || 0;

    // Calculate missed calls
    const missedCallPercentage = (100 - currentAnswerRate) / 100;
    const missedCallsPerMonth = monthlyCallVolume * missedCallPercentage;
    const missedCallsPerYear = missedCallsPerMonth * 12;

    // Industry average: 30-40% of missed calls convert when followed up properly
    const conversionRate = 0.35;

    // Calculate lost revenue
    const annualRevenueLost = missedCallsPerYear * conversionRate * averageJobValue;

    // AI agents can recover approximately 80% of missed calls
    const aiRecoveryRate = 0.8;
    const potentialRecoveredRevenue = annualRevenueLost * aiRecoveryRate;

    // Estimated AI cost (conservative estimate based on typical pricing)
    // $500-2000/month depending on volume. Use tiered pricing.
    let monthlyAICost = 0;
    if (monthlyCallVolume < 100) {
      monthlyAICost = 500;
    } else if (monthlyCallVolume < 300) {
      monthlyAICost = 900;
    } else if (monthlyCallVolume < 500) {
      monthlyAICost = 1400;
    } else {
      monthlyAICost = 2000;
    }
    const estimatedAICost = monthlyAICost * 12;

    // Net benefit
    const netAnnualBenefit = potentialRecoveredRevenue - estimatedAICost;

    // ROI percentage
    const roi = ((netAnnualBenefit / estimatedAICost) * 100);

    // Additional jobs per month
    const additionalJobsPerMonth = (missedCallsPerMonth * aiRecoveryRate * conversionRate);

    // Payback period in months
    const paybackPeriod = estimatedAICost / (netAnnualBenefit / 12);

    const calculatedResults: ROIResults = {
      missedCallsPerMonth: Math.round(missedCallsPerMonth),
      missedCallsPerYear: Math.round(missedCallsPerYear),
      annualRevenueLost: Math.round(annualRevenueLost),
      potentialRecoveredRevenue: Math.round(potentialRecoveredRevenue),
      estimatedAICost: Math.round(estimatedAICost),
      netAnnualBenefit: Math.round(netAnnualBenefit),
      roi: Math.round(roi),
      additionalJobsPerMonth: Math.round(additionalJobsPerMonth * 10) / 10,
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
    };

    setResults(calculatedResults);
    setShowLeadForm(false);
  };

  const handleGetDetailedReport = () => {
    setShowLeadForm(true);
  };

  const handleLeadFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Store results in session storage for thank you page
      if (results) {
        sessionStorage.setItem("calculatorResults", JSON.stringify(results));
        sessionStorage.setItem("calculatorInputs", JSON.stringify(inputs));
      }

      const response = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: leadFormData.firstName,
          email: leadFormData.email,
          resourceId: "roi-calculator",
          businessType: inputs.businessType,
          metadata: {
            monthlyCallVolume: inputs.monthlyCallVolume,
            currentAnswerRate: inputs.currentAnswerRate,
            averageJobValue: inputs.averageJobValue,
            estimatedROI: results?.roi,
          },
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        // Redirect to thank you page after short delay
        setTimeout(() => {
          window.location.href = "/ai-calculator-results";
        }, 1000);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    inputs.businessType &&
    inputs.monthlyCallVolume &&
    inputs.currentAnswerRate &&
    inputs.averageJobValue;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="mx-auto max-w-5xl">
      <Card className="border-2">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Calculator className="h-6 w-6 text-primary" />
            <CardTitle>Your Business Information</CardTitle>
          </div>
          <CardDescription>
            Enter your business details to calculate your personalized ROI
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Input Form */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="businessType">Business Type</Label>
              <Select
                value={inputs.businessType}
                onValueChange={(value) =>
                  handleInputChange("businessType", value)
                }
              >
                <SelectTrigger id="businessType">
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hvac">HVAC</SelectItem>
                  <SelectItem value="plumbing">Plumbing</SelectItem>
                  <SelectItem value="roofing">Roofing</SelectItem>
                  <SelectItem value="electrical">Electrical</SelectItem>
                  <SelectItem value="landscaping">Landscaping</SelectItem>
                  <SelectItem value="cleaning">Cleaning Services</SelectItem>
                  <SelectItem value="pest-control">Pest Control</SelectItem>
                  <SelectItem value="general-contractor">
                    General Contractor
                  </SelectItem>
                  <SelectItem value="other">Other Home Services</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="monthlyCallVolume">
                Monthly Call Volume
              </Label>
              <Input
                id="monthlyCallVolume"
                type="number"
                placeholder="e.g., 200"
                value={inputs.monthlyCallVolume}
                onChange={(e) =>
                  handleInputChange("monthlyCallVolume", e.target.value)
                }
                min="0"
              />
              <p className="text-xs text-muted-foreground">
                Approximate number of calls you receive per month
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="currentAnswerRate">
                Current Answer Rate (%)
              </Label>
              <Input
                id="currentAnswerRate"
                type="number"
                placeholder="e.g., 65"
                value={inputs.currentAnswerRate}
                onChange={(e) =>
                  handleInputChange("currentAnswerRate", e.target.value)
                }
                min="0"
                max="100"
              />
              <p className="text-xs text-muted-foreground">
                Percentage of calls you currently answer (0-100)
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="averageJobValue">Average Job Value ($)</Label>
              <Input
                id="averageJobValue"
                type="number"
                placeholder="e.g., 2500"
                value={inputs.averageJobValue}
                onChange={(e) =>
                  handleInputChange("averageJobValue", e.target.value)
                }
                min="0"
              />
              <p className="text-xs text-muted-foreground">
                Average revenue per completed job
              </p>
            </div>
          </div>

          <Button
            onClick={calculateROI}
            disabled={!isFormValid}
            size="lg"
            className="w-full"
          >
            <Calculator className="mr-2 h-5 w-5" />
            Calculate My ROI
          </Button>

          {/* Results Display */}
          {results && (
            <>
              <Separator className="my-8" />

              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold">Your Personalized ROI Report</h3>
                  <p className="text-muted-foreground mt-2">
                    Based on your business data
                  </p>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="bg-destructive/5 border-destructive/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium flex items-center gap-2">
                        <Phone className="h-4 w-4 text-destructive" />
                        Missed Calls
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-destructive">
                        {results.missedCallsPerMonth}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        per month ({results.missedCallsPerYear}/year)
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-destructive/5 border-destructive/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-destructive" />
                        Revenue Lost
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-destructive">
                        {formatCurrency(results.annualRevenueLost)}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        annually from missed calls
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary/5 border-primary/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        Potential Recovery
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-primary">
                        {formatCurrency(results.potentialRecoveredRevenue)}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        with AI voice agents
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary/5 border-primary/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium flex items-center gap-2">
                        <Award className="h-4 w-4 text-primary" />
                        Net Annual Benefit
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-primary">
                        {formatCurrency(results.netAnnualBenefit)}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        after AI service costs
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary/5 border-primary/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium">
                        ROI
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-primary">
                        {results.roi}%
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        return on investment
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary/5 border-primary/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium">
                        Additional Jobs
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-primary">
                        {results.additionalJobsPerMonth}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        per month with AI
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Summary Card */}
                <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary">
                  <CardContent className="pt-6">
                    <div className="text-center space-y-4">
                      <h4 className="text-xl font-semibold">
                        Bottom Line: You could add {formatCurrency(results.netAnnualBenefit)} to your bottom line this year
                      </h4>
                      <p className="text-muted-foreground">
                        That&apos;s {results.additionalJobsPerMonth} more jobs per month, with a payback period of just {results.paybackPeriod} months.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Lead Capture Form */}
                {!showLeadForm && !submitted && (
                  <div className="text-center space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Want a detailed PDF report with personalized recommendations?
                    </p>
                    <Button
                      onClick={handleGetDetailedReport}
                      size="lg"
                      className="w-full md:w-auto"
                    >
                      Get My Free Detailed Report
                    </Button>
                  </div>
                )}

                {showLeadForm && !submitted && (
                  <Card className="border-primary">
                    <CardHeader>
                      <CardTitle>Get Your Detailed PDF Report</CardTitle>
                      <CardDescription>
                        Enter your details to receive your personalized ROI report and next steps
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleLeadFormSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            type="text"
                            placeholder="Your first name"
                            value={leadFormData.firstName}
                            onChange={(e) =>
                              setLeadFormData((prev) => ({
                                ...prev,
                                firstName: e.target.value,
                              }))
                            }
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={leadFormData.email}
                            onChange={(e) =>
                              setLeadFormData((prev) => ({
                                ...prev,
                                email: e.target.value,
                              }))
                            }
                            required
                          />
                        </div>
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          size="lg"
                          className="w-full"
                        >
                          {isSubmitting
                            ? "Sending..."
                            : "Get My Free Report"}
                        </Button>
                        <p className="text-xs text-center text-muted-foreground">
                          We respect your privacy. Unsubscribe anytime.
                        </p>
                      </form>
                    </CardContent>
                  </Card>
                )}

                {submitted && (
                  <Card className="bg-primary/5 border-primary">
                    <CardContent className="pt-6 text-center space-y-2">
                      <h3 className="text-xl font-semibold">Check Your Email!</h3>
                      <p className="text-muted-foreground">
                        We&apos;ve sent your detailed ROI report to {leadFormData.email}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Redirecting you to your results page...
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Trust Indicators */}
      <div className="mt-8 text-center space-y-4">
        <p className="text-sm text-muted-foreground">
          Join 500+ home service businesses using AI to never miss a call
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Award className="h-3 w-3" /> No credit card required
          </span>
          <span>•</span>
          <span>Instant results</span>
          <span>•</span>
          <span>100% free calculator</span>
        </div>
      </div>
    </div>
  );
}
