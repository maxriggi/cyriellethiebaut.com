import type { Metadata } from "next";
import { PortfolioPageLayout } from "@/app/components/portfolio/PortfolioPageLayout";
import { PortfolioGallery } from "@/app/components/portfolio/PortfolioGallery";
import { PORTFOLIO_IMAGES } from "@/app/lib/constants";

export const metadata: Metadata = {
  title: "Portfolio Opéra | Cyrielle Thiebaut — Maquilleuse Opéra-Théâtre de Metz",
  description:
    "Maquillage scénique pour l'Opéra-Théâtre de Metz par Cyrielle Thiebaut. Caractérisation, transformations artistiques et maquillage de spectacle.",
  alternates: { canonical: "https://cyriellethiebaut.com/portfolio/opera" },
  openGraph: {
    title: "Portfolio Opéra | Cyrielle Thiebaut",
    description: "Maquillage scénique Opéra-Théâtre de Metz — Cyrielle Thiebaut.",
    url: "https://cyriellethiebaut.com/portfolio/opera",
  },
};

export default function OperaPage() {
  return (
    <PortfolioPageLayout
      categoryId="opera"
      title="Opéra"
      description="Maquillage scénique pour l'Opéra-Théâtre de Metz — caractérisation et transformations artistiques."
    >
      <PortfolioGallery images={PORTFOLIO_IMAGES.opera} />
    </PortfolioPageLayout>
  );
}
