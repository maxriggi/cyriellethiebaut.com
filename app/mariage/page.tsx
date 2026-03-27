import type { Metadata } from "next";
import { MariageHero } from "./MariageHero";
import { MariageServices } from "./MariageServices";
import { MariageTestimonials } from "./MariageTestimonials";
import { MariageCta } from "./MariageCta";

export const metadata: Metadata = {
  title: "Maquillage Mariée à Metz | Cyrielle Thiebaut — Wedding Awards 2026",
  description:
    "Maquilleuse mariage à Metz, lauréate des Wedding Awards 2026. Essai maquillage mariée, mise en beauté jour J, cortège. 5.0/5 sur mariages.net. Grand Est, Luxembourg.",
  alternates: {
    canonical: "https://cyriellethiebaut.com/mariage",
  },
  openGraph: {
    title: "Maquillage Mariée à Metz | Cyrielle Thiebaut — Wedding Awards 2026",
    description:
      "Maquilleuse mariage à Metz, lauréate des Wedding Awards 2026. 5.0/5 sur mariages.net.",
    url: "https://cyriellethiebaut.com/mariage",
  },
};

function MariageJsonLd() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://cyriellethiebaut.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Maquillage Mariée",
        item: "https://cyriellethiebaut.com/mariage",
      },
    ],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Maquillage Mariée à Metz",
    description:
      "Essai maquillage mariée à domicile, mise en beauté jour J, cortège. Kit de retouches et faux-cils inclus. 5.0/5 sur mariages.net.",
    provider: {
      "@id": "https://cyriellethiebaut.com/#business",
    },
    areaServed: [
      { "@type": "City", name: "Metz" },
      { "@type": "AdministrativeArea", name: "Grand Est" },
      { "@type": "Country", name: "Luxembourg" },
    ],
    url: "https://cyriellethiebaut.com/mariage",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
    </>
  );
}

export default function MariagePage() {
  return (
    <>
      <MariageJsonLd />
      <MariageHero />
      <div className="accent-line" />
      <MariageServices />
      <MariageTestimonials />
      <div className="accent-line" />
      <MariageCta />
    </>
  );
}
