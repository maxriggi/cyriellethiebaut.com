"use client";

import { Container } from "@/app/components/ui/Container";
import { Badge } from "@/app/components/ui/Badge";
import { PlaceholderImage } from "@/app/components/ui/PlaceholderImage";
import { FadeIn } from "@/app/components/animations/FadeIn";
import { ABOUT_BADGES } from "@/app/lib/constants";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text — left on desktop */}
          <FadeIn direction="left">
            <span className="font-accent text-xs tracking-[0.3em] uppercase text-accent mb-4 block">
              À propos
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 tracking-tight italic">
              L&apos;art du regard
            </h2>
            <div className="space-y-4 text-muted leading-relaxed mb-8">
              <p>
                Formée à l&apos;école EPEC Gaspard à Metz, je travaille
                aujourd&apos;hui entre la mode, le spectacle vivant et les
                univers créatifs. Collaboratrice de la Fashion Week de
                Luxembourg, maquilleuse pour l&apos;Opéra-Théâtre de Metz, je
                conçois chaque maquillage comme une direction artistique à part
                entière.
              </p>
              <p>
                Shootings éditoriaux, campagnes, backstage — mon approche est
                précise, créative et adaptée à chaque projet. J&apos;accompagne
                également les mariées qui recherchent un maquillage élégant et
                tenu.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              {ABOUT_BADGES.map((badge) => (
                <Badge key={badge} variant="gold">
                  {badge}
                </Badge>
              ))}
            </div>
          </FadeIn>

          {/* Image — right on desktop */}
          <FadeIn direction="right" delay={0.2}>
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Accent glow behind image */}
              <div className="absolute -inset-4 bg-accent/5 rounded-2xl blur-2xl" />
              <div className="absolute -top-3 -right-3 w-full h-full border border-accent/15 rounded-lg" />
              <PlaceholderImage
                aspect="portrait"
                label="Portrait de Cyrielle Thiebaut, maquilleuse professionnelle à Metz — mode, opéra, mariage"
                src="/images/optimized/about/cyrielle-thiebaut-portrait-maquilleuse-professionnelle.webp"
                className="relative image-glow"
              />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
