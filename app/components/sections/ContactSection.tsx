"use client";

import { Mail, MapPin, Instagram } from "lucide-react";
import { Container } from "@/app/components/ui/Container";
import { Heading } from "@/app/components/ui/Heading";
import { Button } from "@/app/components/ui/Button";
import { FadeIn } from "@/app/components/animations/FadeIn";
import { CONTACT, MAILTO_CTA } from "@/app/lib/constants";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <Container>
        <FadeIn>
          <Heading label="Contact" className="text-center">
            Collaborons
          </Heading>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Info — left */}
          <FadeIn direction="left">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <span className="font-accent text-xs tracking-wider uppercase text-muted block mb-1">
                    Email
                  </span>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-foreground hover:text-accent transition-colors"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Instagram className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <span className="font-accent text-xs tracking-wider uppercase text-muted block mb-1">
                    Instagram
                  </span>
                  <a
                    href={CONTACT.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-accent transition-colors block"
                  >
                    {CONTACT.instagram}
                  </a>
                  <a
                    href={CONTACT.instagramBridesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors block text-sm"
                  >
                    {CONTACT.instagramBrides}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <span className="font-accent text-xs tracking-wider uppercase text-muted block mb-1">
                    Zone d&apos;intervention
                  </span>
                  <p className="text-foreground">{CONTACT.zone}</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* CTA — right */}
          <FadeIn direction="right" delay={0.2}>
            <div className="card-gold p-8 md:p-12 text-center">
              <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground mb-4">
                Un projet en tête ?
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-8 max-w-sm mx-auto">
                Shooting, événement, mariage — discutons de votre projet et
                créons ensemble quelque chose de beau.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg" href={MAILTO_CTA}>
                  Me contacter
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href={CONTACT.instagramUrl}
                >
                  Écrire sur Instagram
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
