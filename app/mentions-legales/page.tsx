import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/app/components/ui/Container";
import { Heading } from "@/app/components/ui/Heading";
import { FadeIn } from "@/app/components/animations/FadeIn";
import { CONTACT } from "@/app/lib/constants";

export const metadata: Metadata = {
  title: "Mentions légales | Cyrielle Thiebaut — Pro Makeup Artist",
  description:
    "Mentions légales du site cyriellethiebaut.com — Maquilleuse professionnelle à Metz.",
  robots: { index: false, follow: false },
};

function Section({
  title,
  children,
  delay = 0,
}: {
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <FadeIn delay={delay}>
      <div className="py-8 border-b border-border/40 last:border-b-0">
        <h2 className="font-heading text-xl md:text-2xl font-light text-foreground mb-4">
          {title}
        </h2>
        <div className="space-y-3 text-sm text-muted leading-relaxed">
          {children}
        </div>
      </div>
    </FadeIn>
  );
}

export default function MentionsLegalesPage() {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-32">
      <Container size="md">
        {/* Back link */}
        <FadeIn>
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-accent text-xs tracking-wider uppercase text-muted hover:text-accent transition-colors mb-12"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Retour à l&apos;accueil
          </Link>
        </FadeIn>

        <FadeIn>
          <Heading as="h1" label="Informations légales">
            Mentions légales
          </Heading>
        </FadeIn>

        <div className="card-gold p-8 md:p-12">
          <Section title="Éditrice du site" delay={0.05}>
            <p>
              <strong className="text-foreground">Cyrielle Thiebaut</strong>
              <br />
              Maquilleuse professionnelle — Entreprise individuelle
            </p>
            <p>
              Adresse : Metz, France
              <br />
              Email :{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-accent hover:underline"
              >
                {CONTACT.email}
              </a>
              <br />
              Zone d&apos;intervention : {CONTACT.zone}
            </p>
          </Section>

          <Section title="Hébergement" delay={0.1}>
            <p>
              Ce site est hébergé par Vercel Inc.
              <br />
              440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
            </p>
          </Section>

          <Section title="Propriété intellectuelle" delay={0.15}>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images,
              photographies, logos, icônes) est la propriété exclusive de
              Cyrielle Thiebaut ou de ses partenaires photographes, sauf
              mention contraire. Toute reproduction, représentation,
              modification ou adaptation, totale ou partielle, est interdite
              sans autorisation écrite préalable.
            </p>
          </Section>

          <Section title="Données personnelles" delay={0.2}>
            <p>
              Ce site ne collecte aucune donnée personnelle de manière
              automatisée. Aucun cookie de suivi ou de publicité n&apos;est
              utilisé. Lorsque vous nous contactez par email, vos
              informations sont utilisées uniquement pour répondre à votre
              demande et ne sont jamais transmises à des tiers.
            </p>
            <p>
              Conformément au Règlement Général sur la Protection des Données
              (RGPD) et à la loi Informatique et Libertés, vous disposez d&apos;un
              droit d&apos;accès, de rectification et de suppression de vos
              données. Pour exercer ce droit, contactez-nous à l&apos;adresse :{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-accent hover:underline"
              >
                {CONTACT.email}
              </a>
            </p>
          </Section>

          <Section title="Crédits" delay={0.25}>
            <p>
              Conception et développement du site : réalisation sur mesure.
              <br />
              Certaines images d&apos;illustration proviennent d&apos;
              <a
                href="https://unsplash.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Unsplash
              </a>
              .
            </p>
          </Section>

          <Section title="Responsabilité" delay={0.3}>
            <p>
              Cyrielle Thiebaut s&apos;efforce de fournir des informations
              exactes et à jour sur ce site. Toutefois, elle ne saurait être
              tenue responsable des erreurs, omissions ou résultats obtenus
              suite à l&apos;utilisation de ces informations. Les liens vers
              des sites externes sont fournis à titre informatif et
              n&apos;engagent pas la responsabilité de l&apos;éditrice.
            </p>
          </Section>
        </div>
      </Container>
    </section>
  );
}
