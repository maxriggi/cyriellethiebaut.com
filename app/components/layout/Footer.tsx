import Link from "next/link";
import { Container } from "@/app/components/ui/Container";
import { NAV_LINKS, SOCIALS, CONTACT, PORTFOLIO_CATEGORIES } from "@/app/lib/constants";
import { Instagram, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <span className="font-display text-xl text-foreground tracking-wide block mb-2">
              Cyrielle Thiebaut
            </span>
            <p className="text-sm text-muted">
              Pro Makeup Artist — Metz
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="font-accent text-xs tracking-[0.2em] uppercase text-accent mb-4 block">
              Navigation
            </span>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <span className="font-accent text-xs tracking-[0.2em] uppercase text-accent mb-3 mt-6 block">
              Portfolio
            </span>
            <ul className="space-y-2">
              {PORTFOLIO_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={cat.slug}
                    className="text-sm text-muted hover:text-accent transition-colors"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <span className="font-accent text-xs tracking-[0.2em] uppercase text-accent mb-4 block">
              Réseaux
            </span>
            <ul className="space-y-2">
              {SOCIALS.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
                  >
                    {social.label === "Mariages.net" ? (
                      <ExternalLink className="w-4 h-4" />
                    ) : (
                      <Instagram className="w-4 h-4" />
                    )}
                    {social.handle}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="accent-line mt-10 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>&copy; 2026 Cyrielle Thiebaut. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <Link
              href="/mentions-legales"
              className="hover:text-accent transition-colors"
            >
              Mentions légales
            </Link>
            <span>{CONTACT.zone}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
