import type { Metadata } from "next";
import { PortfolioPageLayout } from "@/app/components/portfolio/PortfolioPageLayout";
import { PortfolioGallery } from "@/app/components/portfolio/PortfolioGallery";
import { PORTFOLIO_IMAGES } from "@/app/lib/constants";

export const metadata: Metadata = {
  title: "Portfolio Éditorial | Cyrielle Thiebaut — Maquilleuse Shooting & Mode",
  description:
    "Shootings éditoriaux, séries mode et lookbooks par Cyrielle Thiebaut, maquilleuse professionnelle à Metz. Maquillage créatif et photogénique pour la presse et les marques.",
  alternates: { canonical: "https://cyriellethiebaut.com/portfolio/editorial" },
  openGraph: {
    title: "Portfolio Éditorial | Cyrielle Thiebaut",
    description: "Shootings éditoriaux et maquillage mode — Cyrielle Thiebaut, Metz.",
    url: "https://cyriellethiebaut.com/portfolio/editorial",
  },
};

export default function EditorialPage() {
  return (
    <PortfolioPageLayout
      categoryId="editorial"
      title="Éditorial"
      description="Shootings mode, lookbooks et séries créatives pour la presse et les marques."
    >
      <PortfolioGallery images={PORTFOLIO_IMAGES.editorial} />
    </PortfolioPageLayout>
  );
}
