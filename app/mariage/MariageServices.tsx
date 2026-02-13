"use client";

import { Heart, Sparkles, Clock, Gift } from "lucide-react";
import { Container } from "@/app/components/ui/Container";
import { Heading } from "@/app/components/ui/Heading";
import { FadeIn } from "@/app/components/animations/FadeIn";
import { CONTACT } from "@/app/lib/constants";

const BRIDAL_SERVICES = [
  {
    icon: Sparkles,
    title: "Essai maquillage",
    description:
      "Un rendez-vous à domicile pour tester et ajuster votre look. On échange, on essaie, on trouve LE maquillage parfait ensemble.",
  },
  {
    icon: Heart,
    title: "Mise en beauté Jour J",
    description:
      "Le matin du mariage, je viens chez vous pour une mise en beauté sereine et professionnelle. Résultat : un teint lumineux et un maquillage qui tient du matin au bout de la nuit.",
  },
  {
    icon: Gift,
    title: "Kit de retouches offert",
    description:
      "Faux-cils et kit de retouches inclus pour rester parfaite toute la journée, de la cérémonie jusqu'à la dernière danse.",
  },
  {
    icon: Clock,
    title: "Cortège & invitées",
    description:
      "Mise en beauté pour les demoiselles d'honneur, mamans et invitées. Chacune sublimée selon son style avec la même attention.",
  },
];

export function MariageServices() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <FadeIn>
          <Heading label="Prestations mariage" className="text-center">
            Ce qui est inclus
          </Heading>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {BRIDAL_SERVICES.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1}>
              <div className="card-gold p-8 h-full">
                <service.icon className="w-7 h-7 text-accent mb-5" />
                <h3 className="font-heading text-xl font-light text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="text-center mt-12 space-y-2">
            <p className="font-heading text-2xl text-foreground">
              À partir de <span className="gradient-text-gold">90€</span>
            </p>
            <p className="text-muted text-sm">
              {CONTACT.travelNote}
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
