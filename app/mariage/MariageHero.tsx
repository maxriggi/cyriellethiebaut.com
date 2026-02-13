"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Container } from "@/app/components/ui/Container";
import { Button } from "@/app/components/ui/Button";
import { Badge } from "@/app/components/ui/Badge";
import { PlaceholderImage } from "@/app/components/ui/PlaceholderImage";
import { MAILTO_CTA, RATING } from "@/app/lib/constants";

export function MariageHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <PlaceholderImage
          aspect="hero"
          label="Maquillage mariée"
          src="https://images.unsplash.com/photo-1682226335318-f1911fdef7c1?w=1920&q=80"
          className="rounded-none h-full"
        />
        <div className="absolute inset-0 bg-background/75" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center py-20">
          {/* Award badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <Badge variant="gold" className="text-sm px-5 py-2">
              <Star className="w-4 h-4 mr-2 fill-accent text-accent" />
              Wedding Awards 2026
            </Badge>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight text-foreground mb-6"
          >
            Maquillage{" "}
            <span className="gradient-text-gold italic">Mariée</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="font-heading text-xl md:text-2xl font-light text-muted mb-4"
          >
            Un maquillage French-Style, naturel et élégant,
            <br className="hidden sm:block" /> pour le plus beau jour de votre vie
          </motion.p>

          {/* Rating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-10"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-muted text-sm">
              {RATING.score} · {RATING.count} avis · {RATING.recommendation} recommandé
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="primary" size="lg" href={MAILTO_CTA}>
              Réserver un essai
            </Button>
            <Button variant="outline" size="lg" href="/">
              Retour à l&apos;accueil
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
