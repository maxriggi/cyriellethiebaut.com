"use client";

import { Star, ArrowUpRight } from "lucide-react";
import { Container } from "@/app/components/ui/Container";
import { Heading } from "@/app/components/ui/Heading";
import { FadeIn } from "@/app/components/animations/FadeIn";
import { TESTIMONIALS, RATING, CONTACT } from "@/app/lib/constants";

export function MariageTestimonials() {
  return (
    <section className="py-20 md:py-32 bg-surface">
      <Container>
        <FadeIn>
          <Heading label="Avis mariées" className="text-center">
            Elles ont dit oui
          </Heading>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-foreground font-heading text-lg">
              {RATING.score}
            </span>
            <span className="text-muted text-sm">
              · {RATING.count} avis · {RATING.recommendation} recommandé
            </span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <FadeIn key={testimonial.name} delay={i * 0.1}>
              <div className="card-gold p-8 h-full flex flex-col">
                <span className="font-display text-5xl text-accent/30 leading-none mb-4">
                  &ldquo;
                </span>
                <p className="text-muted text-sm leading-relaxed flex-1 mb-6">
                  {testimonial.text}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-foreground text-sm font-medium block">
                      {testimonial.name}
                    </span>
                    <span className="text-muted text-xs">
                      {testimonial.date}
                    </span>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <Star key={j} className="w-3 h-3 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center mt-12">
            <a
              href={CONTACT.mariagesNetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-accent text-sm tracking-wider text-accent hover:text-accent-hover transition-colors"
            >
              Voir tous les avis sur mariages.net
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
