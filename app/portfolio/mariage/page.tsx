import type { Metadata } from "next";
import { PortfolioPageLayout } from "@/app/components/portfolio/PortfolioPageLayout";
import { PortfolioGallery } from "@/app/components/portfolio/PortfolioGallery";
import { PORTFOLIO_IMAGES } from "@/app/lib/constants";

export const metadata: Metadata = {
  title: "Portfolio Mariage | Cyrielle Thiebaut — Maquilleuse Mariée Metz",
  description:
    "Mises en beauté mariées par Cyrielle Thiebaut, maquilleuse mariage à Metz. Maquillage naturel, romantique et longue tenue. Grand Est & Luxembourg.",
  alternates: { canonical: "https://cyriellethiebaut.com/portfolio/mariage" },
  openGraph: {
    title: "Portfolio Mariage | Cyrielle Thiebaut",
    description: "Maquillage mariée naturel et élégant — Cyrielle Thiebaut, Metz.",
    url: "https://cyriellethiebaut.com/portfolio/mariage",
  },
};

export default function MariagePortfolioPage() {
  return (
    <PortfolioPageLayout
      categoryId="mariage"
      title="Mariage"
      description="Mises en beauté mariées — un maquillage élégant qui tient du matin au bout de la nuit."
    >
      <PortfolioGallery images={PORTFOLIO_IMAGES.mariage} />
    </PortfolioPageLayout>
  );
}
