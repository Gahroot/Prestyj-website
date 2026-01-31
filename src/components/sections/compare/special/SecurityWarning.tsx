"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { fadeInUp, transitions, viewport } from "@/lib/compare/animations";

export function SecurityWarning() {
  return (
    <section className="border-b bg-destructive/5 py-16">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <motion.div
            {...fadeInUp}
            transition={transitions.default}
            viewport={viewport}
            className="text-center"
          >
            <AlertTriangle className="mx-auto mb-4 h-12 w-12 text-destructive" />
            <h3 className="mb-4 text-2xl font-bold">
              August 2025 Security Incident
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
              An OAuth exploit compromised Drift&apos;s Salesforce and Google Workspace integrations from August 8-18, 2025.
              Attackers used stolen tokens to export data via Salesforce Bulk API.
              Salesforce and Salesloft revoked all Drift access on August 20, 2025, forcing enterprises to disable Drift across their websites.
            </p>
            <p className="text-sm text-muted-foreground">
              Security considerations matter when evaluating enterprise platforms.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
