export function JsonLd() {
  const beautySalon = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Cyrielle Thiebaut — Pro Makeup Artist",
    description:
      "Maquilleuse professionnelle à Metz. Mode, shootings éditoriaux, Fashion Week Luxembourg, Opéra-Théâtre de Metz, mariage.",
    url: "https://cyriellethiebaut.com",
    telephone: "",
    email: "cyriellethiebautmua@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Metz",
      addressRegion: "Grand Est",
      addressCountry: "FR",
    },
    areaServed: [
      { "@type": "City", name: "Metz" },
      { "@type": "City", name: "Nancy" },
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
    image: "https://cyriellethiebaut.com/og-image.jpg",
    sameAs: [
      "https://www.instagram.com/cyriellethiebaut",
      "https://www.instagram.com/bridesbycyrielle",
      "https://www.mariages.net/esthetique-coiffure-mariage/cyrielle-thiebaut-mua--e328316",
    ],
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Cyrielle Thiebaut",
    jobTitle: "Pro Makeup Artist",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "EPEC Gaspard",
    },
    worksFor: {
      "@type": "BeautySalon",
      name: "Cyrielle Thiebaut — Pro Makeup Artist",
    },
    url: "https://cyriellethiebaut.com",
    sameAs: [
      "https://www.instagram.com/cyriellethiebaut",
      "https://www.instagram.com/bridesbycyrielle",
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
    </>
  );
}
