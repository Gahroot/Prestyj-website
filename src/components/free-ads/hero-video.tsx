"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

const VIMEO_VIDEO_ID = "1169158190";

export function HeroVideo() {
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
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-[1.1] tracking-tight text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          What If You Had 300 Video Ads Running By Next Week?
        </motion.h1>

        <motion.p
          className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          We send you the scripts and help you film. Just stand in front of the camera and read.
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
            title="Free video ads offer"
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
          I&apos;ll give you 300 video ads for free. In exchange, I want to run them for you — I&apos;ll set up the ads, build the landing page, and have AI respond to every lead. You pay the ad spend ($1k/mo minimum) and a setup fee. If it doesn&apos;t work, you keep the ads and we part ways.
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
            Get My FREE Ads
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
