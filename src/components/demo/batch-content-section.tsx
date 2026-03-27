"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Upload, SlidersHorizontal, CheckSquare, Scissors, Zap, FolderOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Step {
  number: string;
  icon: React.ElementType;
  title: string;
  caption: string;
  image: string;
  imageAlt: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const steps: Step[] = [
  {
    number: "01",
    icon: Upload,
    title: "Drop In Your Video",
    caption: "One raw long-form recording. That's all it needs.",
    image: "/images/demo/batchcontent_upload_step1.png",
    imageAlt: "BatchContent step 1 — upload source video",
  },
  {
    number: "02",
    icon: SlidersHorizontal,
    title: "Set Your Preferences",
    caption: "Clip length, variants, stitching. Set once, runs every time.",
    image: "/images/demo/batchcontent_step2.png",
    imageAlt: "BatchContent step 2 — configure settings",
  },
  {
    number: "03",
    icon: CheckSquare,
    title: "Review AI-Scored Clips",
    caption: "Every clip scored. Approve the best — or let Hands-Free do it.",
    image: "/images/demo/batchcontent_step3.png",
    imageAlt: "BatchContent step 3 — review and approve clips",
  },
];

const statItems = [
  { value: "24", label: "Clips rendered" },
  { value: "2m 17s", label: "Total render time" },
  { value: "~6s", label: "Per clip" },
  { value: "GPU", label: "Accelerated" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function StepCard({ step, index }: { step: Step; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="bg-zinc-900 group-data-[demo-light]:bg-white border-zinc-800 group-data-[demo-light]:border-gray-200 overflow-hidden h-full">
        <div className="relative w-full aspect-video bg-black group-data-[demo-light]:bg-gray-200">
          <Image
            src={step.image}
            alt={step.imageAlt}
            fill
            className="object-cover object-top"
          />
        </div>
        <CardContent className="p-5 flex items-start gap-4">
          <span className="text-3xl font-heading font-bold text-primary/20 leading-none shrink-0 pt-0.5">
            {step.number}
          </span>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <step.icon className="h-4 w-4 text-primary shrink-0" />
              <p className="text-white group-data-[demo-light]:text-zinc-900 font-heading font-semibold">{step.title}</p>
            </div>
            <p className="text-zinc-400 group-data-[demo-light]:text-zinc-600 text-sm">{step.caption}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function BatchContentSection() {
  return (
    <section className="py-24 border-t border-zinc-800/50 group-data-[demo-light]:border-gray-200/50">
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
            BatchContent
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white group-data-[demo-light]:text-zinc-900 mb-4">
            Turn Long-Form Into a <span className="text-primary">Content Library</span>
          </h2>
          <p className="text-zinc-400 group-data-[demo-light]:text-zinc-600 text-lg max-w-xl mx-auto">
            One video. AI finds the clips, scores them, and renders everything — ready for Reels, Shorts, and TikTok.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>

        <Separator className="bg-zinc-800/50 group-data-[demo-light]:bg-gray-200/50 mb-16" />

        {/* Stitch feature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8 items-center mb-16"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Scissors className="h-4 w-4 text-primary" />
              </div>
              <span className="text-primary text-sm font-medium font-heading">Clip Stitching</span>
            </div>
            <h3 className="text-2xl font-heading font-bold text-white group-data-[demo-light]:text-zinc-900">
              Not Just Clips — Full Narratives
            </h3>
            <p className="text-zinc-400 group-data-[demo-light]:text-zinc-600 text-sm leading-relaxed">
              The AI pulls segments from across the whole video and stitches them into one cohesive short — hook, payoff, and all. No editor needed.
            </p>
          </div>
          <Card className="bg-zinc-900 group-data-[demo-light]:bg-white border-zinc-800 group-data-[demo-light]:border-gray-200 overflow-hidden">
            <div className="relative w-full aspect-video bg-black group-data-[demo-light]:bg-gray-200">
              <Image
                src="/images/demo/batchcontent_stitch_feature.png"
                alt="Clip stitching — AI assembles narrative arcs"
                fill
                className="object-cover object-top"
              />
            </div>
          </Card>
        </motion.div>

        {/* Render progress + stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-3 mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <Zap className="h-4 w-4 text-primary" />
            <p className="text-white group-data-[demo-light]:text-zinc-900 font-heading font-semibold text-sm">GPU-Accelerated Rendering</p>
          </div>

          {/* Render in progress screenshot */}
          <Card className="bg-zinc-900 group-data-[demo-light]:bg-white border-zinc-800 group-data-[demo-light]:border-gray-200 overflow-hidden">
            <div className="relative w-full" style={{ aspectRatio: "1568/226" }}>
              <Image
                src="/images/demo/rendering_clips_pt1_45percent.png"
                alt="Rendering in progress — 45% complete"
                fill
                className="object-cover"
              />
            </div>
          </Card>

          {/* Render complete screenshot */}
          <Card className="bg-zinc-900 group-data-[demo-light]:bg-white border-zinc-800 group-data-[demo-light]:border-gray-200 overflow-hidden">
            <div className="relative w-full" style={{ aspectRatio: "1541/103" }}>
              <Image
                src="/images/demo/render_done_2m17s_render_time.png"
                alt="Render complete — 24 clips in 2m 17s"
                fill
                className="object-cover"
              />
            </div>
          </Card>

          {/* Stat pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {statItems.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.07 }}
                className="text-center py-4 rounded-xl border border-zinc-800 group-data-[demo-light]:border-gray-200 bg-zinc-900 group-data-[demo-light]:bg-white"
              >
                <p className="text-2xl font-heading font-bold text-primary">{stat.value}</p>
                <p className="text-zinc-500 text-xs mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Output folder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <FolderOpen className="h-4 w-4 text-primary" />
            <p className="text-white group-data-[demo-light]:text-zinc-900 font-heading font-semibold text-sm">Ready to Post</p>
          </div>
          <Card className="bg-zinc-900 group-data-[demo-light]:bg-white border-zinc-800 group-data-[demo-light]:border-gray-200 overflow-hidden">
            <div className="relative w-full aspect-video bg-black group-data-[demo-light]:bg-gray-200">
              <Image
                src="/images/demo/rendered_videos_in_folder.png"
                alt="Output folder — scored and stitched clips ready to post"
                fill
                className="object-cover object-top"
              />
            </div>
          </Card>
          <p className="text-zinc-500 text-sm text-center mt-4">
            Named by topic. Scored by AI. Stitched composites included. Open the folder, start posting.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
