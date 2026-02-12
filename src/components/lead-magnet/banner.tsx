"use client";

import { motion } from "framer-motion";
import { FileText, Download, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface LeadMagnetBannerProps {
  variant?: "default" | "compact" | "roofing";
}

export function LeadMagnetBanner({ variant = "default" }: LeadMagnetBannerProps) {
  if (variant === "compact") {
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary/10 via-primary/5 to-background border-b border-primary/20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-primary" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                <span className="font-medium text-sm">Free Guide:</span>
                <span className="text-sm text-muted-foreground">The Roofer&apos;s 24/7 Lead Response Playbook</span>
              </div>
            </div>
            <Button variant="outline" size="sm" asChild className="shrink-0">
              <Link href="/lead-magnet">
                Download <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === "roofing") {
    return (
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              Free Download
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
              The Roofer&apos;s 24/7 Lead Response Playbook
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Storm hits. Phones explode. Are you capturing every lead or giving them to competitors?
              Download our complete guide to AI-powered instant response.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm">
                <Download className="w-4 h-4" />
                <span>50+ pages of actionable content</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FileText className="w-4 h-4" />
                <span>Checklists, scripts, and ROI calculators</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-primary-foreground/60">No email required</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                <Link href="/lead-magnet">
                  <Download className="mr-2 h-5 w-5" />
                  Download Free Playbook
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link href="/book-demo">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-muted/30 border-y border-border py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <FileText className="w-4 h-4" />
            Free Guide
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-3">
            The Roofer&apos;s 24/7 Lead Response Playbook
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Stop missing $15,000 storm jobs. Learn the 60-second standard, emergency triage,
            and storm surge handling.
          </p>
          <Button size="lg" asChild>
            <Link href="/lead-magnet">
              <Download className="mr-2 h-4 w-4" />
              Download Free Playbook
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
