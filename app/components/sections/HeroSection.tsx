"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/app/components/ui/Button";
import { PlaceholderImage } from "@/app/components/ui/PlaceholderImage";
import { MAILTO_CTA } from "@/app/lib/constants";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fullscreen background image */}
      <div className="absolute inset-0">
        <PlaceholderImage
          aspect="hero"
          label="Cyrielle Thiebaut, maquilleuse professionnelle à Metz"
          src="/images/optimized/cyrielle-thiebaut-hero.webp"
          className="rounded-none h-full"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
      </div>

      {/* Content — centered */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-accent text-xs tracking-[0.4em] uppercase text-accent mb-8"
        >
          Pro Makeup Artist
        </motion.span>

        {/* Name — oversized */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fluid-display font-display leading-[0.9] tracking-tight text-foreground mb-2"
        >
          <span className="italic">Cyrielle</span>
        </motion.h1>
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-3xl sm:text-4xl md:text-5xl tracking-[0.15em] uppercase text-muted mb-10"
        >
          Thiebaut
        </motion.span>

        {/* Descriptors */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="font-accent text-xs sm:text-sm tracking-[0.3em] uppercase text-muted mb-12"
        >
          Mode · Shooting · Mariage
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button variant="primary" size="lg" href="#portfolio">
            Voir mon travail
          </Button>
          <Button variant="outline" size="lg" href={MAILTO_CTA}>
            Me contacter
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:flex"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center gap-2 text-muted"
        >
          <span className="font-accent text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
