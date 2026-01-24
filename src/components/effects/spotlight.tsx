"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpotlightProps {
  className?: string;
}

export function Spotlight({ className }: SpotlightProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute -top-20 right-0 w-[500px] h-[500px] bg-success/10 rounded-full blur-[100px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]"
      />
    </div>
  );
}
