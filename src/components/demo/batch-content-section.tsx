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
      <Card className="h-full overflow-hidden border-zinc-800 bg-zinc-900 group-data-[demo-light]:border-gray-200 group-data-[demo-light]:bg-white">
        <div className="relative aspect-video w-full bg-black group-data-[demo-light]:bg-gray-200">
          <Image src={step.image} alt={step.imageAlt} fill className="object-cover object-top" />
        </div>
        <CardContent className="flex items-start gap-4 p-5">
          <span className="font-heading text-primary/20 shrink-0 pt-0.5 text-3xl leading-none font-bold">
            {step.number}
          </span>
          <div>
            <div className="mb-1 flex items-center gap-2">
              <step.icon className="text-primary h-4 w-4 shrink-0" />
              <p className="font-heading font-semibold text-white group-data-[demo-light]:text-zinc-900">
                {step.title}
              </p>
            </div>
            <p className="text-sm text-zinc-400 group-data-[demo-light]:text-zinc-600">
              {step.caption}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function BatchContentSection() {
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
            BatchContent
          </span>
          <h2 className="font-heading mb-4 text-3xl font-bold text-white group-data-[demo-light]:text-zinc-900 sm:text-4xl">
            Turn Long-Form Into a <span className="text-primary">Content Library</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-zinc-400 group-data-[demo-light]:text-zinc-600">
            One video. AI finds the clips, scores them, and renders everything — ready for Reels,
            Shorts, and TikTok.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>

        <Separator className="mb-16 bg-zinc-800/50 group-data-[demo-light]:bg-gray-200/50" />

        {/* Stitch feature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 grid items-center gap-8 md:grid-cols-2"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 flex h-9 w-9 items-center justify-center rounded-lg">
                <Scissors className="text-primary h-4 w-4" />
              </div>
              <span className="text-primary font-heading text-sm font-medium">Clip Stitching</span>
            </div>
            <h3 className="font-heading text-2xl font-bold text-white group-data-[demo-light]:text-zinc-900">
              Not Just Clips — Full Narratives
            </h3>
            <p className="text-sm leading-relaxed text-zinc-400 group-data-[demo-light]:text-zinc-600">
              The AI pulls segments from across the whole video and stitches them into one cohesive
              short — hook, payoff, and all. No editor needed.
            </p>
          </div>
          <Card className="overflow-hidden border-zinc-800 bg-zinc-900 group-data-[demo-light]:border-gray-200 group-data-[demo-light]:bg-white">
            <div className="relative aspect-video w-full bg-black group-data-[demo-light]:bg-gray-200">
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
          className="mb-16 space-y-3"
        >
          <div className="mb-4 flex items-center gap-2">
            <Zap className="text-primary h-4 w-4" />
            <p className="font-heading text-sm font-semibold text-white group-data-[demo-light]:text-zinc-900">
              GPU-Accelerated Rendering
            </p>
          </div>

          {/* Render in progress screenshot */}
          <Card className="overflow-hidden border-zinc-800 bg-zinc-900 group-data-[demo-light]:border-gray-200 group-data-[demo-light]:bg-white">
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
          <Card className="overflow-hidden border-zinc-800 bg-zinc-900 group-data-[demo-light]:border-gray-200 group-data-[demo-light]:bg-white">
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
          <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
            {statItems.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.07 }}
                className="rounded-xl border border-zinc-800 bg-zinc-900 py-4 text-center group-data-[demo-light]:border-gray-200 group-data-[demo-light]:bg-white"
              >
                <p className="font-heading text-primary text-2xl font-bold">{stat.value}</p>
                <p className="mt-1 text-xs text-zinc-500">{stat.label}</p>
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
          <div className="mb-4 flex items-center gap-2">
            <FolderOpen className="text-primary h-4 w-4" />
            <p className="font-heading text-sm font-semibold text-white group-data-[demo-light]:text-zinc-900">
              Ready to Post
            </p>
          </div>
          <Card className="overflow-hidden border-zinc-800 bg-zinc-900 group-data-[demo-light]:border-gray-200 group-data-[demo-light]:bg-white">
            <div className="relative aspect-video w-full bg-black group-data-[demo-light]:bg-gray-200">
              <Image
                src="/images/demo/rendered_videos_in_folder.png"
                alt="Output folder — scored and stitched clips ready to post"
                fill
                className="object-cover object-top"
              />
            </div>
          </Card>
          <p className="mt-4 text-center text-sm text-zinc-500">
            Named by topic. Scored by AI. Stitched composites included. Open the folder, start
            posting.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
