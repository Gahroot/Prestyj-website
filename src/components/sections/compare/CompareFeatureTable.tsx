"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { fadeInUp, transitions, viewport } from "@/lib/compare/animations";
import type { FeatureComparison } from "@/lib/compare/types";

interface CompareFeatureTableProps {
  features: FeatureComparison[];
  competitorName: string;
}

export function CompareFeatureTable({ features, competitorName }: CompareFeatureTableProps) {
  const renderValue = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="mx-auto h-5 w-5 text-green-500" />
      ) : (
        <X className="mx-auto h-5 w-5 text-muted-foreground" />
      );
    }
    return <span className="text-sm">{value}</span>;
  };

  return (
    <section className="border-b py-20">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Feature Comparison
            </h2>
            <p className="text-lg text-muted-foreground">
              Compare PrestyJ with {competitorName} feature by feature
            </p>
          </div>

          <motion.div
            className="overflow-hidden rounded-lg border"
            {...fadeInUp}
            transition={transitions.default}
            viewport={viewport}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">
                      PrestyJ
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">
                      {competitorName}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {features.map((feature, index) => (
                    <tr key={index} className="bg-card">
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-medium">{feature.feature}</div>
                          {feature.note && (
                            <div className="mt-1 text-xs text-muted-foreground">
                              {feature.note}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        {renderValue(feature.prestyj)}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {renderValue(feature.competitor)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
