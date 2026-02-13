"use client";

import { Container } from "@/app/components/ui/Container";
import { Button } from "@/app/components/ui/Button";
import { FadeIn } from "@/app/components/animations/FadeIn";
import { MAILTO_CTA, CONTACT } from "@/app/lib/constants";

export function MariageCta() {
  return (
    <section className="py-20 md:py-32">
      <Container size="md">
        <FadeIn>
          <div className="card-gold p-10 md:p-16 text-center">
            <span className="font-accent text-xs tracking-[0.3em] uppercase text-accent mb-4 block">
              Réservation
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-4">
              Prête à être sublimée ?
            </h2>
            <p className="text-muted leading-relaxed mb-8 max-w-md mx-auto">
              Réservez votre essai maquillage et discutons ensemble de votre
              projet pour le jour J. Je me déplace chez vous pour un moment
              serein et personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href={MAILTO_CTA}>
                Réserver un essai
              </Button>
              <Button variant="outline" size="lg" href={CONTACT.instagramBridesUrl}>
                Voir les mariées sur Instagram
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
