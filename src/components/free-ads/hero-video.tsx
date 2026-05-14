"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pricingTiers } from "@/lib/pricing-data";

const VIMEO_VIDEO_ID = "1169158190";

const starterTier = pricingTiers.find((t) => t.id === "starter");
if (!starterTier) {
  throw new Error("Starter tier not found in pricing-data.ts");
}
const STARTER_MONTHLY = `$${starterTier.monthlyPrice.toLocaleString("en-US")}`;
const STARTER_SETUP = `$${starterTier.setupFee.toLocaleString("en-US")}`;

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
    <section className="relative flex flex-col items-center justify-start overflow-hidden px-4 pt-8 pb-6 md:pt-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-3 text-center md:gap-4">
        <motion.h1
          className="font-heading text-foreground text-3xl leading-[1.1] font-bold tracking-tight md:text-4xl lg:text-5xl xl:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Get 300 free video ads when you start a Prestyj plan from {STARTER_MONTHLY}/mo.
        </motion.h1>

        <motion.p
          className="text-muted-foreground max-w-3xl text-base md:text-lg lg:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Setup fee applies (from {STARTER_SETUP}). We send you the scripts and help you film — just
          stand in front of the camera and read. 300 ads delivered in 24 hours.
        </motion.p>

        {/* Stats row */}
        <motion.div
          className="text-muted-foreground flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <span>
            <span className="text-foreground font-semibold">300+</span> unique ad variations
          </span>
          <span className="text-border hidden sm:inline">·</span>
          <span>
            <span className="text-foreground font-semibold">24hr</span> turnaround
          </span>
          <span className="text-border hidden sm:inline">·</span>
          <span>
            <span className="text-foreground font-semibold">1</span> recording session
          </span>
        </motion.div>

        <motion.div
          className="relative aspect-video w-full max-w-3xl overflow-hidden rounded-lg shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <iframe
            src={`https://player.vimeo.com/video/${VIMEO_VIDEO_ID}?autoplay=1&muted=${isMuted ? "1" : "0"}&loop=0&background=0`}
            className="absolute inset-0 h-full w-full"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Free video ads offer"
          />

          {showOverlay && (
            <div
              onClick={handleUnmute}
              className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all hover:bg-black/30"
            >
              <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-md md:p-6">
                <div className="bg-primary/20 flex h-12 w-12 items-center justify-center rounded-full">
                  <VolumeX className="text-primary h-6 w-6" />
                </div>
                <p className="text-foreground font-heading text-base font-semibold">
                  Your Video Is Playing
                </p>
                <p className="text-muted-foreground text-sm">Click To Unmute</p>
              </div>
            </div>
          )}
        </motion.div>

        <motion.p
          className="text-muted-foreground max-w-2xl text-sm leading-relaxed md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Here&apos;s the deal: start a Prestyj plan ({STARTER_SETUP} setup + {STARTER_MONTHLY}/mo,
          plus $1k/mo minimum ad spend paid to Meta) and the first 300 video ads are on us.
          We&apos;ll set up the ads, build the landing page, and have AI respond to every lead. If
          it doesn&apos;t work, you keep the ads and we part ways.
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
            className="shadow-primary/25 rounded-lg px-8 py-6 text-base font-bold shadow-lg md:px-12 md:py-7 md:text-lg"
          >
            Get My FREE Ads
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
