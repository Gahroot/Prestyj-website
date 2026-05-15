"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function OneVideoSection() {
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
            How It Works
          </span>
          <h2 className="font-heading mb-4 text-3xl font-bold text-white group-data-[demo-light]:text-zinc-900 sm:text-4xl">
            1 Video <span className="text-primary">→</span> 300 Ads
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400 group-data-[demo-light]:text-zinc-600">
            Fully automated. Zero manual editing. Runs in the background.
          </p>
        </motion.div>

        {/* Two-column flow */}
        <div className="mb-16 grid items-stretch gap-6 md:grid-cols-[1fr_auto_1fr]">
          {/* Input — raw footage */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full overflow-hidden border-zinc-800 bg-zinc-900 group-data-[demo-light]:border-gray-200 group-data-[demo-light]:bg-white">
              {/* Two stacked video thumbnails */}
              <div className="grid grid-cols-2 gap-0.5 bg-zinc-800 group-data-[demo-light]:bg-gray-200">
                <div className="relative aspect-[9/16]">
                  <Image
                    src="/images/demo/13_minutes_of_raw_footage.png"
                    alt="13 minutes of raw footage — first-time user"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute right-2 bottom-2 rounded bg-black/70 px-1.5 py-0.5 font-mono text-xs text-white">
                    13:08
                  </div>
                </div>
                <div className="relative aspect-[9/16]">
                  <Image
                    src="/images/demo/8_min_footage_for_experienced.png"
                    alt="8 minutes of raw footage — experienced user"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute right-2 bottom-2 rounded bg-black/70 px-1.5 py-0.5 font-mono text-xs text-white">
                    8:20
                  </div>
                </div>
              </div>
              <CardContent className="space-y-2 p-6">
                <Badge
                  variant="outline"
                  className="border-zinc-600 text-xs text-zinc-400 group-data-[demo-light]:border-gray-300 group-data-[demo-light]:text-zinc-600"
                >
                  Raw Footage
                </Badge>
                <p className="font-heading text-3xl leading-none font-extrabold text-white group-data-[demo-light]:text-zinc-900">
                  1 Video
                </p>
                <p className="text-sm leading-relaxed text-zinc-400 group-data-[demo-light]:text-zinc-600">
                  13 min for first-timers. 8 min for experienced users. No script, no studio, no
                  production crew.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="bg-primary/10 border-primary/30 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border">
              <ArrowRight className="text-primary h-5 w-5" />
            </div>
          </motion.div>

          {/* Output — 300 ads */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full overflow-hidden border-zinc-800 bg-zinc-900 group-data-[demo-light]:border-gray-200 group-data-[demo-light]:bg-white">
              <div className="relative aspect-video w-full bg-black group-data-[demo-light]:bg-gray-200">
                <Image
                  src="/images/demo/video_ads_mass_preview.png"
                  alt="300 ready-to-go video ads — thumbnail preview"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <CardContent className="space-y-2 p-6">
                <Badge className="bg-primary/20 text-primary border-primary/30 text-xs">
                  Output
                </Badge>
                <p className="font-heading text-primary text-3xl leading-none font-extrabold">
                  300 Ads
                </p>
                <p className="text-sm leading-relaxed text-zinc-400 group-data-[demo-light]:text-zinc-600">
                  Every hook × meat × CTA variation. Named, organized, and ready to upload to any ad
                  platform.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Final result sample */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="mb-8 text-center">
            <span className="bg-primary/10 text-primary mb-3 inline-block rounded-full px-3 py-1 text-sm font-medium">
              Final Output Sample
            </span>
            <h3 className="font-heading text-2xl font-bold text-white group-data-[demo-light]:text-zinc-900">
              Here&apos;s What One Finished Ad Looks Like
            </h3>
            <p className="mt-2 text-sm text-zinc-400 group-data-[demo-light]:text-zinc-600">
              This came out of a single raw recording — zero manual editing.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative aspect-[9/16] w-full max-w-[320px] overflow-hidden rounded-xl border border-zinc-800 shadow-lg group-data-[demo-light]:border-gray-200">
              <iframe
                src="https://www.youtube.com/embed/qh9gYvwDQQM"
                title="Final result ad sample"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          {[
            {
              number: "01",
              title: "Record Once",
              description:
                "You or your client records a single unedited video — no script, no retakes. 13 minutes for new users, 8 for experienced ones.",
            },
            {
              number: "02",
              title: "BatchEdit Runs in the Background",
              description:
                "Our AI engine segments your footage into every possible hook, body, and CTA combination automatically — no human editor involved.",
            },
            {
              number: "03",
              title: "300 Ads Delivered",
              description:
                "A full batch of ad-ready files lands in your dashboard — organized, labeled, and ready to push live across any platform.",
            },
          ].map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start gap-6"
            >
              <span className="font-heading text-primary/20 shrink-0 pt-1 text-4xl leading-none font-bold">
                {step.number}
              </span>
              <div>
                <h3 className="font-heading mb-1 text-xl font-semibold text-white group-data-[demo-light]:text-zinc-900">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400 group-data-[demo-light]:text-zinc-600">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
