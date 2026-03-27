import type { Metadata } from "next";
import { PortfolioPageLayout } from "@/app/components/portfolio/PortfolioPageLayout";
import { PortfolioGallery } from "@/app/components/portfolio/PortfolioGallery";
import { PORTFOLIO_IMAGES } from "@/app/lib/constants";

export const metadata: Metadata = {
  title: "Portfolio Beauté | Cyrielle Thiebaut — Maquilleuse Professionnelle Metz",
  description:
    "Portraits beauté, looks créatifs et maquillage professionnel en studio par Cyrielle Thiebaut, maquilleuse à Metz. Teint lumineux, smoky eye, glamour.",
  alternates: { canonical: "https://cyriellethiebaut.com/portfolio/beaute" },
  openGraph: {
    title: "Portfolio Beauté | Cyrielle Thiebaut",
    description: "Portraits beauté et maquillage professionnel en studio — Cyrielle Thiebaut, Metz.",
    url: "https://cyriellethiebaut.com/portfolio/beaute",
  },
};

export default function BeautePage() {
  return (
    <PortfolioPageLayout
      categoryId="beaute"
      title="Beauté"
      description="Portraits beauté, teints sublimés et looks créatifs en lumière naturelle et studio."
    >
      <PortfolioGallery images={PORTFOLIO_IMAGES.beaute} />
    </PortfolioPageLayout>
  );
}
