"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Video, Zap, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    icon: Video,
    value: "300",
    label: "Video Ads",
    description: "From one 13-minute recording",
  },
  {
    icon: Zap,
    value: "0",
    label: "Hours Manual Work",
    description: "Runs silently in the background",
  },
  {
    icon: Trophy,
    value: "∞",
    label: "Competitive Edge",
    description: "Offer 300 free ads — no one else can",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function CompetitiveAdvantageSection() {
  return (
    <section className="py-24 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            The Competitive Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
            One Recording. 300 Ready-to-Run Ads.
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            AI-powered — not just AI-assisted. Your competitors are still editing by hand.
          </p>
        </motion.div>

        {/* Stat cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={itemVariants}>
              <Card className="bg-zinc-900 border-zinc-800 hover:border-primary/50 transition-colors h-full">
                <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-6xl font-heading font-extrabold text-primary leading-none">
                    {stat.value}
                  </span>
                  <div>
                    <p className="text-white font-heading font-semibold text-lg">
                      {stat.label}
                    </p>
                    <p className="text-zinc-400 text-sm mt-1">{stat.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Proof cards with screenshots */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* BatchEdit screenshot */}
          <motion.div variants={itemVariants}>
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden h-full">
              <div className="relative w-full aspect-video bg-black">
                <Image
                  src="/images/demo/batcheditapp.png"
                  alt="BatchEdit AI Video Engine"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-white font-heading font-semibold text-lg mb-1">
                  BatchEdit — AI Video Engine
                </h3>
                <p className="text-zinc-400 text-sm">
                  Drop in your raw clips. BatchEdit splits every hook, meat, and CTA combination automatically — no timeline, no manual exports, no editor.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 300 rendered files screenshot */}
          <motion.div variants={itemVariants}>
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden h-full">
              <div className="relative w-full aspect-video bg-black">
                <Image
                  src="/images/demo/300_ready_to_go_video_ads.png"
                  alt="300 rendered video ads ready to deploy"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-white font-heading font-semibold text-lg mb-1">
                  300 Files Rendered — Ready to Deploy
                </h3>
                <p className="text-zinc-400 text-sm">
                  Every file named, organized, and ready to upload. Your ad manager gets a full creative library delivered — nothing touched by hand.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
