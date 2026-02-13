"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/app/components/ui/Container";
import { Heading } from "@/app/components/ui/Heading";
import { FadeIn } from "@/app/components/animations/FadeIn";
import { PORTFOLIO_ITEMS, CONTACT } from "@/app/lib/constants";
import { motion } from "framer-motion";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 md:py-32">
      <Container>
        <FadeIn>
          <Heading label="Portfolio" className="text-center">
            Réalisations
          </Heading>
        </FadeIn>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PORTFOLIO_ITEMS.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                  item.aspect === "portrait" ? "row-span-2" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative w-full ${
                    item.aspect === "portrait"
                      ? "aspect-[3/4]"
                      : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.category}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300" />

                {/* Category label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent">
                  <span className="font-accent text-xs tracking-wider uppercase text-accent">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Instagram link */}
        <FadeIn delay={0.4}>
          <div className="text-center mt-12">
            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-accent text-sm tracking-wider text-accent hover:text-accent-hover transition-colors"
            >
              Plus de réalisations sur Instagram
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
