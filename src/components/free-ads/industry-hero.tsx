"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

const VIMEO_VIDEO_ID = "1169158190";

interface IndustryHeroProps {
  industry: string;
  headline: string;
  subheadline: string;
  description: string;
  ctaText?: string;
}

export function IndustryHero({
  industry,
  headline,
  subheadline,
  description,
  ctaText = "Get My FREE Ads",
}: IndustryHeroProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);

  const handleUnmute = () => {
    setIsMuted(false);
    setShowOverlay(false);
  };

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-0 md:h-dvh flex flex-col items-center justify-start px-4 pt-8 md:pt-12 pb-6 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center gap-3 md:gap-4 text-center">
        <motion.span
          className="inline-block text-sm md:text-base font-semibold text-primary tracking-wide uppercase mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          For {industry} Companies
        </motion.span>

        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-[1.1] tracking-tight text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {headline}
        </motion.h1>

        <motion.p
          className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {subheadline}
        </motion.p>

        <motion.div
          className="relative w-full max-w-3xl aspect-video rounded-lg overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <iframe
            src={`https://player.vimeo.com/video/${VIMEO_VIDEO_ID}?autoplay=1&muted=${isMuted ? "1" : "0"}&loop=0&background=0`}
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title={`Free video ads for ${industry}`}
          />

          {showOverlay && (
            <div
              onClick={handleUnmute}
              className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center cursor-pointer transition-all hover:bg-black/30 z-10"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-6 flex flex-col items-center gap-2 shadow-2xl">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <VolumeX className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground font-heading font-semibold text-base">
                  Your Video Is Playing
                </p>
                <p className="text-muted-foreground text-sm">
                  Click To Unmute
                </p>
              </div>
            </div>
          )}
        </motion.div>

        <motion.p
          className="text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {description}
        </motion.p>

        <motion.div
          className="flex justify-center pt-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Button
            size="lg"
            onClick={scrollToForm}
            className="font-bold text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-lg shadow-lg shadow-primary/25"
          >
            {ctaText}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
