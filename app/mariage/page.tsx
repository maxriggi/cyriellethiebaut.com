import type { Metadata } from "next";
import { MariageHero } from "./MariageHero";
import { MariageServices } from "./MariageServices";
import { MariageTestimonials } from "./MariageTestimonials";
import { MariageCta } from "./MariageCta";

export const metadata: Metadata = {
  title: "Maquillage Mariée à Metz | Cyrielle Thiebaut — Wedding Awards 2026",
  description:
    "Maquilleuse mariage à Metz, lauréate des Wedding Awards 2026. Essai maquillage mariée, mise en beauté jour J, cortège. 5.0/5 sur mariages.net. Grand Est, Luxembourg.",
  openGraph: {
    title: "Maquillage Mariée à Metz | Cyrielle Thiebaut — Wedding Awards 2026",
    description:
      "Maquilleuse mariage à Metz, lauréate des Wedding Awards 2026. 5.0/5 sur mariages.net.",
  },
};

export default function MariagePage() {
  return (
    <>
      <MariageHero />
      <div className="accent-line" />
      <MariageServices />
      <MariageTestimonials />
      <div className="accent-line" />
      <MariageCta />
    </>
  );
}
