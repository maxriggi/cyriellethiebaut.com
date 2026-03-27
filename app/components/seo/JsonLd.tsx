export function JsonLd() {
  const baseUrl = "https://cyriellethiebaut.com";

  const beautySalon = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": `${baseUrl}/#business`,
    name: "Cyrielle Thiebaut — Pro Makeup Artist",
    description:
      "Maquilleuse professionnelle à Metz. Mode, shootings éditoriaux, Fashion Week Luxembourg, Opéra-Théâtre de Metz, mariage.",
    url: baseUrl,
    email: "cyriellethiebautmua@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Metz",
      addressRegion: "Grand Est",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.1193,
      longitude: 6.1757,
    },
    areaServed: [
      { "@type": "City", name: "Metz" },
      { "@type": "City", name: "Nancy" },
      { "@type": "City", name: "Thionville" },
      { "@type": "City", name: "Luxembourg" },
      { "@type": "AdministrativeArea", name: "Grand Est" },
      { "@type": "Country", name: "Luxembourg" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      ratingCount: "17",
    },
    priceRange: "€€",
    image: `${baseUrl}/og-image.jpg`,
    sameAs: [
      "https://www.instagram.com/cyriellethiebaut",
      "https://www.instagram.com/bridesbycyrielle",
      "https://www.mariages.net/esthetique-coiffure-mariage/cyrielle-thiebaut-mua--e328316",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Prestations maquillage",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Maquillage Mariage",
            description:
              "Essai à domicile + mise en beauté le jour J + kit de retouches et faux-cils inclus.",
            url: `${baseUrl}/mariage`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Shooting & Éditorial",
            description:
              "Shootings mode, lookbooks, campagnes publicitaires. Maquillage créatif et photogénique.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mode & Spectacle",
            description:
              "Fashion Week, opéra, concours, galas. Expertise scénique et créative.",
          },
        },
      ],
    },
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#person`,
    name: "Cyrielle Thiebaut",
    jobTitle: "Maquilleuse professionnelle",
    knowsAbout: [
      "Maquillage mode",
      "Maquillage mariée",
      "Maquillage éditorial",
      "Maquillage scénique",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "EPEC Gaspard",
    },
    worksFor: {
      "@id": `${baseUrl}/#business`,
    },
    url: baseUrl,
    sameAs: [
      "https://www.instagram.com/cyriellethiebaut",
      "https://www.instagram.com/bridesbycyrielle",
    ],
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: baseUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(beautySalon) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
