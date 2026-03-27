"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/app/components/ui/Container";
import { Heading } from "@/app/components/ui/Heading";
import { FadeIn } from "@/app/components/animations/FadeIn";
import { PortfolioGallery } from "@/app/components/portfolio/PortfolioGallery";
import { PORTFOLIO_IMAGES, PORTFOLIO_CATEGORIES, MAILTO_CTA } from "@/app/lib/constants";

const otherCategories = PORTFOLIO_CATEGORIES.filter((c) => c.id !== "mode");

export default function ModePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <Container>
          <FadeIn>
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 font-accent text-xs tracking-wider uppercase text-accent hover:text-accent-hover transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Portfolio
            </Link>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Heading as="h1" label="Mode">
              Campagnes publicitaires et d&eacute;fil&eacute;s — Chaussea, Les Touristes, Fashion Week Luxembourg.
            </Heading>
          </FadeIn>
        </Container>
      </section>

      <div className="accent-line" />

      {/* Chaussea */}
      <section className="py-16 md:py-24">
        <Container>
          <FadeIn>
            <Heading as="h2" label="Campagne publicitaire">
              Chaussea
            </Heading>
          </FadeIn>
          <PortfolioGallery images={PORTFOLIO_IMAGES.mode.chaussea} />
        </Container>
      </section>

      <div className="accent-line" />

      {/* Les Touristes */}
      <section className="py-16 md:py-24">
        <Container>
          <FadeIn>
            <Heading as="h2" label="Collection mode">
              Les Touristes
            </Heading>
          </FadeIn>
          <PortfolioGallery images={PORTFOLIO_IMAGES.mode.lesTouristes} />
        </Container>
      </section>

      <div className="accent-line" />

      {/* Other categories */}
      <section className="py-16 md:py-24">
        <Container>
          <FadeIn>
            <Heading as="h2" label="Explorer" className="text-center">
              Autres r&eacute;alisations
            </Heading>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherCategories.map((cat, i) => (
              <FadeIn key={cat.id} delay={i * 0.08}>
                <Link
                  href={cat.slug}
                  className="group relative overflow-hidden rounded-lg aspect-[3/4] block"
                >
                  <img
                    src={cat.cover}
                    alt={cat.coverAlt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="font-accent text-xs tracking-wider uppercase text-accent">
                      {cat.title}
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <div className="accent-line" />

      {/* CTA */}
      <section className="py-16 md:py-24">
        <Container size="sm">
          <FadeIn>
            <div className="text-center">
              <p className="font-heading font-light fluid-subheading text-foreground mb-6">
                Un projet en t&ecirc;te&nbsp;?
              </p>
              <a
                href={MAILTO_CTA}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 font-accent text-sm tracking-wider uppercase"
              >
                Discutons de votre projet
              </a>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
