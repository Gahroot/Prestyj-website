"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function OneVideoSection() {
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
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
            1 Video <span className="text-primary">→</span> 300 Ads
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Fully automated. Zero manual editing. Runs in the background.
          </p>
        </motion.div>

        {/* Two-column flow */}
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-stretch mb-16">
          {/* Input — raw footage */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden h-full">
              {/* Two stacked video thumbnails */}
              <div className="grid grid-cols-2 gap-0.5 bg-zinc-800">
                <div className="relative aspect-[9/16]">
                  <Image
                    src="/images/demo/13_minutes_of_raw_footage.png"
                    alt="13 minutes of raw footage — first-time user"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded font-mono">
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
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded font-mono">
                    8:20
                  </div>
                </div>
              </div>
              <CardContent className="p-6 space-y-2">
                <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs">
                  Raw Footage
                </Badge>
                <p className="text-3xl font-heading font-extrabold text-white leading-none">
                  1 Video
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  13 min for first-timers. 8 min for experienced users. No script, no studio, no production crew.
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
            <div className="h-12 w-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
              <ArrowRight className="h-5 w-5 text-primary" />
            </div>
          </motion.div>

          {/* Output — 300 ads */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden h-full">
              <div className="relative w-full aspect-video bg-black">
                <Image
                  src="/images/demo/video_ads_mass_preview.png"
                  alt="300 ready-to-go video ads — thumbnail preview"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <CardContent className="p-6 space-y-2">
                <Badge className="bg-primary/20 text-primary border-primary/30 text-xs">
                  Output
                </Badge>
                <p className="text-3xl font-heading font-extrabold text-primary leading-none">
                  300 Ads
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Every hook × meat × CTA variation. Named, organized, and ready to upload to any ad platform.
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
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
              Final Output Sample
            </span>
            <h3 className="text-2xl font-heading font-bold text-white">
              Here&apos;s What One Finished Ad Looks Like
            </h3>
            <p className="text-zinc-400 text-sm mt-2">
              This came out of a single raw recording — zero manual editing.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-xl overflow-hidden border border-zinc-800 shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/qh9gYvwDQQM"
                title="Final result ad sample"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
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
              <span className="text-4xl font-heading font-bold text-primary/20 leading-none shrink-0 pt-1">
                {step.number}
              </span>
              <div>
                <h3 className="text-white font-heading font-semibold text-xl mb-1">
                  {step.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
