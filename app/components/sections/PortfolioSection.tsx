"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/app/components/ui/Container";
import { Heading } from "@/app/components/ui/Heading";
import { FadeIn } from "@/app/components/animations/FadeIn";
import { PORTFOLIO_CATEGORIES } from "@/app/lib/constants";
import { img } from "@/app/lib/utils";
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
          {PORTFOLIO_CATEGORIES.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.08}>
              <Link href={item.slug}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`relative overflow-hidden rounded-lg cursor-pointer group image-glow ${
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
                      src={img(item.cover)}
                      alt={item.coverAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300" />

                  {/* Category label + arrow */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent flex items-end justify-between">
                    <span className="font-accent text-xs tracking-wider uppercase text-accent">
                      {item.title}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
