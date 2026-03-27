"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/app/components/ui/Container";
import { Heading } from "@/app/components/ui/Heading";
import { FadeIn } from "@/app/components/animations/FadeIn";
import { SERVICES, CONTACT } from "@/app/lib/constants";

export function ServicesSection() {
  return (
    <section id="prestations" className="py-20 md:py-32">
      <Container>
        <FadeIn>
          <Heading label="Services" className="text-center">
            Prestations
          </Heading>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1}>
              <div className="card-gold p-8 h-full flex flex-col">
                <service.icon className="w-8 h-8 text-accent mb-6" />
                <h3 className="font-heading text-2xl font-light text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-accent text-xs tracking-wider uppercase text-accent">
                    {service.price}
                  </span>
                  {"link" in service && (
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-1 font-accent text-xs tracking-wider text-muted hover:text-accent transition-colors"
                    >
                      En savoir plus
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Note */}
        <FadeIn delay={0.3}>
          <p className="text-center text-muted text-sm mt-10">
            {CONTACT.travelNote}
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
