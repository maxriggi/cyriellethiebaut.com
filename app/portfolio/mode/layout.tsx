import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Mode | Cyrielle Thiebaut — Maquilleuse Mode & Fashion Week",
  description:
    "Campagnes mode Chaussea, Les Touristes et Fashion Week Luxembourg par Cyrielle Thiebaut, maquilleuse professionnelle à Metz. Maquillage publicitaire et défilés.",
  alternates: { canonical: "https://cyriellethiebaut.com/portfolio/mode" },
  openGraph: {
    title: "Portfolio Mode | Cyrielle Thiebaut",
    description: "Maquillage mode — campagnes Chaussea, Les Touristes, Fashion Week Luxembourg.",
    url: "https://cyriellethiebaut.com/portfolio/mode",
  },
};

export default function ModeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
