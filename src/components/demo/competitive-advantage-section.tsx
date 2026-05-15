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
    <section className="border-t border-zinc-800/50 py-24 group-data-[demo-light]:border-gray-200/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="bg-primary/10 text-primary mb-4 inline-block rounded-full px-3 py-1 text-sm font-medium">
            The Competitive Advantage
          </span>
          <h2 className="font-heading mb-4 text-3xl font-bold text-white group-data-[demo-light]:text-zinc-900 sm:text-4xl">
            One Recording. 300 Ready-to-Run Ads.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400 group-data-[demo-light]:text-zinc-600">
            AI-powered — not just AI-assisted. Your competitors are still editing by hand.
          </p>
        </motion.div>

        {/* Stat cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 grid gap-6 md:grid-cols-3"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={itemVariants}>
              <Card className="hover:border-primary/50 h-full border-zinc-800 bg-zinc-900 transition-colors group-data-[demo-light]:border-gray-200 group-data-[demo-light]:bg-white">
                <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
                  <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                    <stat.icon className="text-primary h-6 w-6" />
                  </div>
                  <span className="font-heading text-primary text-6xl leading-none font-extrabold">
                    {stat.value}
                  </span>
                  <div>
                    <p className="font-heading text-lg font-semibold text-white group-data-[demo-light]:text-zinc-900">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-sm text-zinc-400 group-data-[demo-light]:text-zinc-600">
                      {stat.description}
                    </p>
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
          className="grid gap-6 md:grid-cols-2"
        >
          {/* BatchEdit screenshot */}
          <motion.div variants={itemVariants}>
            <Card className="h-full overflow-hidden border-zinc-800 bg-zinc-900 group-data-[demo-light]:border-gray-200 group-data-[demo-light]:bg-white">
              <div className="relative aspect-video w-full bg-black group-data-[demo-light]:bg-gray-200">
                <Image
                  src="/images/demo/batcheditapp.png"
                  alt="BatchEdit AI Video Engine"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading mb-1 text-lg font-semibold text-white group-data-[demo-light]:text-zinc-900">
                  BatchEdit — AI Video Engine
                </h3>
                <p className="text-sm text-zinc-400 group-data-[demo-light]:text-zinc-600">
                  Drop in your raw clips. BatchEdit splits every hook, meat, and CTA combination
                  automatically — no timeline, no manual exports, no editor.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 300 rendered files screenshot */}
          <motion.div variants={itemVariants}>
            <Card className="h-full overflow-hidden border-zinc-800 bg-zinc-900 group-data-[demo-light]:border-gray-200 group-data-[demo-light]:bg-white">
              <div className="relative aspect-video w-full bg-black group-data-[demo-light]:bg-gray-200">
                <Image
                  src="/images/demo/300_ready_to_go_video_ads.png"
                  alt="300 rendered video ads ready to deploy"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading mb-1 text-lg font-semibold text-white group-data-[demo-light]:text-zinc-900">
                  300 Files Rendered — Ready to Deploy
                </h3>
                <p className="text-sm text-zinc-400 group-data-[demo-light]:text-zinc-600">
                  Every file named, organized, and ready to upload. Your ad manager gets a full
                  creative library delivered — nothing touched by hand.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
