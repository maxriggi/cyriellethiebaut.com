import { Camera, Sparkles, Heart } from "lucide-react";

// Navigation
export const NAV_LINKS = [
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Services", href: "/#prestations" },
  { label: "À propos", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;

// Contact
export const CONTACT = {
  email: "cyriellethiebautmua@gmail.com",
  instagram: "@cyriellethiebaut",
  instagramBrides: "@bridesbycyrielle",
  instagramUrl: "https://www.instagram.com/cyriellethiebaut",
  instagramBridesUrl: "https://www.instagram.com/bridesbycyrielle",
  mariagesNetUrl: "https://www.mariages.net/esthetique-coiffure-mariage/cyrielle-thiebaut-mua--e328316",
  zone: "Metz · Grand Est · Luxembourg",
  travelNote: "Déplacement gratuit dans un rayon de 10km · 0,50€/km au-delà · Grand Est · Luxembourg · France entière",
} as const;

export const MAILTO_CTA = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Demande de collaboration — Maquillage")}&body=${encodeURIComponent("Bonjour Cyrielle,\n\nJe souhaiterais discuter d'un projet maquillage.\n\nType de projet : \nDate : \nLieu : \n\nMerci !")}`;

// Services
export const SERVICES = [
  {
    icon: Camera,
    title: "Shooting & Éditorial",
    description:
      "Shootings mode, lookbooks, campagnes publicitaires. Un maquillage créatif et photogénique, pensé pour sublimer chaque image.",
    price: "Sur devis",
    link: "/portfolio/editorial",
  },
  {
    icon: Sparkles,
    title: "Mode & Spectacle",
    description:
      "Fashion Week, opéra, concours, galas. Une expertise scénique et créative adaptée à chaque univers artistique.",
    price: "Sur devis",
    link: "/portfolio/mode",
  },
  {
    icon: Heart,
    title: "Mariage",
    description:
      "Essai à domicile + mise en beauté le jour J + kit de retouches et faux-cils inclus. Un maquillage élégant qui tient du matin jusqu'au bout de la nuit.",
    price: "À partir de 90€",
    link: "/mariage",
  },
] as const;

// Portfolio categories
export const PORTFOLIO_CATEGORIES = [
  {
    id: "editorial",
    title: "Éditorial",
    slug: "/portfolio/editorial",
    description: "Shootings mode, lookbooks et séries créatives pour la presse et les marques.",
    cover: "/images/optimized/portfolio/editorial/maquillage-editorial-loft-session-02.webp",
    coverAlt: "Maquillage éditorial par Cyrielle Thiebaut — shooting mode en studio loft",
    aspect: "portrait" as const,
  },
  {
    id: "mode",
    title: "Mode",
    slug: "/portfolio/mode",
    description: "Campagnes publicitaires et défilés — Chaussea, Les Touristes, Fashion Week Luxembourg.",
    cover: "/images/optimized/portfolio/mode/chaussea/maquillage-mode-chaussea-campagne-06.webp",
    coverAlt: "Maquillage mode campagne Chaussea par Cyrielle Thiebaut",
    aspect: "landscape" as const,
  },
  {
    id: "mariage",
    title: "Mariage",
    slug: "/portfolio/mariage",
    description: "Mises en beauté mariées — un maquillage élégant et longue tenue du matin au bout de la nuit.",
    cover: "/images/optimized/portfolio/mariage/maquillage-mariee-naturel-romantique.webp",
    coverAlt: "Maquillage mariée naturel et romantique par Cyrielle Thiebaut à Metz",
    aspect: "portrait" as const,
  },
  {
    id: "opera",
    title: "Opéra",
    slug: "/portfolio/opera",
    description: "Maquillage scénique pour l'Opéra-Théâtre de Metz — caractérisation et transformations artistiques.",
    cover: "/images/optimized/portfolio/opera/maquillage-opera-scene-theatre-metz-01.webp",
    coverAlt: "Maquillage scénique Opéra-Théâtre de Metz par Cyrielle Thiebaut",
    aspect: "landscape" as const,
  },
  {
    id: "beaute",
    title: "Beauté",
    slug: "/portfolio/beaute",
    description: "Portraits beauté, tests maquillage et looks créatifs en lumière naturelle et studio.",
    cover: "/images/optimized/portfolio/beaute/maquillage-beaute-naturel-eclat.webp",
    coverAlt: "Maquillage beauté naturel et éclat par Cyrielle Thiebaut",
    aspect: "portrait" as const,
  },
] as const;

// Portfolio images by category with descriptive alt texts
export const PORTFOLIO_IMAGES = {
  beaute: [
    { src: "/images/optimized/portfolio/beaute/maquillage-beaute-naturel-eclat.webp", alt: "Maquillage beauté naturel avec teint lumineux et éclat — portrait studio par Cyrielle Thiebaut" },
    { src: "/images/optimized/portfolio/beaute/maquillage-beaute-portrait-studio.webp", alt: "Portrait studio maquillage beauté professionnel — mise en lumière du teint" },
    { src: "/images/optimized/portfolio/beaute/maquillage-beaute-peau-parfaite.webp", alt: "Maquillage beauté peau parfaite — technique de teint zéro défaut" },
    { src: "/images/optimized/portfolio/beaute/maquillage-beaute-glamour-dore.webp", alt: "Look beauté glamour aux reflets dorés — maquillage sophistiqué" },
    { src: "/images/optimized/portfolio/beaute/maquillage-beaute-teint-lumineux.webp", alt: "Maquillage beauté teint lumineux et frais — close-up visage" },
    { src: "/images/optimized/portfolio/beaute/maquillage-beaute-regard-sophistique.webp", alt: "Regard sophistiqué — maquillage des yeux professionnel par Cyrielle Thiebaut" },
    { src: "/images/optimized/portfolio/beaute/maquillage-beaute-levres-nude.webp", alt: "Maquillage lèvres nude et teint naturel — portrait beauté" },
    { src: "/images/optimized/portfolio/beaute/maquillage-beaute-smoky-eye.webp", alt: "Smoky eye intense et charbonneux — maquillage regard de soirée" },
  ],
  editorial: [
    { src: "/images/optimized/portfolio/editorial/maquillage-editorial-loft-session-01.webp", alt: "Shooting éditorial en loft — maquillage mode et lumière naturelle" },
    { src: "/images/optimized/portfolio/editorial/maquillage-editorial-loft-session-02.webp", alt: "Séance photo éditorial en loft — look mode et maquillage créatif" },
    { src: "/images/optimized/portfolio/editorial/maquillage-editorial-loft-session-03.webp", alt: "Portrait éditorial en loft industriel — maquillage tendance" },
    { src: "/images/optimized/portfolio/editorial/maquillage-editorial-beaute-close-up-01.webp", alt: "Close-up beauté éditorial — détails du maquillage professionnel" },
    { src: "/images/optimized/portfolio/editorial/maquillage-editorial-beaute-close-up-02.webp", alt: "Gros plan maquillage éditorial — teint et regard sublimés" },
    { src: "/images/optimized/portfolio/editorial/maquillage-editorial-shooting-studio-01.webp", alt: "Shooting studio éditorial — maquillage mode par Cyrielle Thiebaut" },
    { src: "/images/optimized/portfolio/editorial/maquillage-editorial-shooting-studio-02.webp", alt: "Séance photo studio — maquillage éditorial sophistiqué" },
    { src: "/images/optimized/portfolio/editorial/maquillage-editorial-shooting-studio-03.webp", alt: "Portrait studio éditorial — mise en beauté artistique" },
    { src: "/images/optimized/portfolio/editorial/maquillage-editorial-shooting-studio-04.webp", alt: "Look éditorial studio — maquillage créatif et photogénique" },
    { src: "/images/optimized/portfolio/editorial/maquillage-editorial-shooting-studio-05.webp", alt: "Shooting éditorial en studio — regard maquillé avec précision" },
    { src: "/images/optimized/portfolio/editorial/maquillage-editorial-shooting-studio-06.webp", alt: "Portrait éditorial studio — maquillage professionnel lumière artificielle" },
    { src: "/images/optimized/portfolio/editorial/maquillage-editorial-mode-lumiere-naturelle-01.webp", alt: "Éditorial mode en lumière naturelle — maquillage frais et lumineux" },
    { src: "/images/optimized/portfolio/editorial/maquillage-editorial-mode-lumiere-naturelle-02.webp", alt: "Shooting mode lumière naturelle — maquillage naturel sublimé" },
    { src: "/images/optimized/portfolio/editorial/maquillage-editorial-mode-lumiere-naturelle-03.webp", alt: "Portrait mode en lumière du jour — maquillage éditorial par Cyrielle Thiebaut" },
    { src: "/images/optimized/portfolio/editorial/maquillage-editorial-regard-intense-01.webp", alt: "Regard intense — maquillage éditorial yeux charbonneux et dramatique" },
    { src: "/images/optimized/portfolio/editorial/maquillage-editorial-regard-intense-02.webp", alt: "Maquillage éditorial regard profond — intensité et précision" },
    { src: "/images/optimized/portfolio/editorial/maquillage-editorial-creative-look-01.webp", alt: "Look créatif éditorial — maquillage artistique et audacieux" },
    { src: "/images/optimized/portfolio/editorial/maquillage-editorial-creative-look-02.webp", alt: "Maquillage créatif éditorial — couleurs et textures originales" },
    { src: "/images/optimized/portfolio/editorial/maquillage-editorial-creative-look-03.webp", alt: "Look artistique éditorial — maquillage d'exception" },
    { src: "/images/optimized/portfolio/editorial/maquillage-editorial-creative-look-04.webp", alt: "Maquillage créatif haute couture — éditorial mode par Cyrielle Thiebaut" },
    { src: "/images/optimized/portfolio/editorial/maquillage-editorial-portrait-creatif.webp", alt: "Portrait créatif éditorial — maquillage conceptuel et artistique" },
    { src: "/images/optimized/portfolio/editorial/maquillage-editorial-beaute-artistique.webp", alt: "Beauté artistique éditorial — maquillage d'art et expression" },
  ],
  mariage: [
    { src: "/images/optimized/portfolio/mariage/maquillage-mariee-naturel-romantique.webp", alt: "Maquillage mariée naturel et romantique — mise en beauté jour J à Metz" },
    { src: "/images/optimized/portfolio/mariage/maquillage-mariee-bouquet-elegance.webp", alt: "Mariée avec bouquet — maquillage élégant longue tenue par Cyrielle Thiebaut" },
    { src: "/images/optimized/portfolio/mariage/maquillage-mariee-ceremonie-plein-air.webp", alt: "Cérémonie en plein air — maquillage mariée résistant et lumineux" },
    { src: "/images/optimized/portfolio/mariage/maquillage-mariee-portrait-voile.webp", alt: "Portrait mariée avec voile — maquillage délicat et raffiné" },
    { src: "/images/optimized/portfolio/mariage/maquillage-mariee-preparation-jour-j.webp", alt: "Préparation du jour J — maquilleuse mariée à domicile" },
    { src: "/images/optimized/portfolio/mariage/maquillage-mariee-mise-en-beaute-01.webp", alt: "Mise en beauté mariée — teint frais et regard sublimé" },
    { src: "/images/optimized/portfolio/mariage/maquillage-mariee-mise-en-beaute-02.webp", alt: "Mise en beauté mariée — maquillage classique et intemporel" },
    { src: "/images/optimized/portfolio/mariage/maquillage-mariee-mise-en-beaute-03.webp", alt: "Mise en beauté mariée — finitions et détails du maquillage" },
    { src: "/images/optimized/portfolio/mariage/maquillage-mariee-portrait-lumiere-douce.webp", alt: "Portrait mariée en lumière douce — maquillage photogénique" },
    { src: "/images/optimized/portfolio/mariage/maquillage-mariee-sourire-bonheur.webp", alt: "Sourire de la mariée — maquillage naturel et joyeux" },
    { src: "/images/optimized/portfolio/mariage/maquillage-mariee-couple-emotion.webp", alt: "Couple le jour du mariage — émotion et maquillage longue tenue" },
    { src: "/images/optimized/portfolio/mariage/maquillage-mariee-regard-doux.webp", alt: "Regard doux de la mariée — maquillage yeux nude et lumineux" },
    { src: "/images/optimized/portfolio/mariage/maquillage-mariee-details-bijoux.webp", alt: "Détails bijoux et maquillage mariée — harmonie et élégance" },
    { src: "/images/optimized/portfolio/mariage/maquillage-mariee-preparation-coiffure.webp", alt: "Préparation coiffure et maquillage mariée — getting ready" },
    { src: "/images/optimized/portfolio/mariage/maquillage-mariee-reflet-miroir.webp", alt: "Reflet miroir de la mariée — dernières retouches maquillage" },
  ],
  mode: {
    chaussea: [
      { src: "/images/optimized/portfolio/mode/chaussea/maquillage-mode-chaussea-campagne-01.webp", alt: "Campagne Chaussea — maquillage mode par Cyrielle Thiebaut" },
      { src: "/images/optimized/portfolio/mode/chaussea/maquillage-mode-chaussea-campagne-02.webp", alt: "Shooting Chaussea — maquillage naturel et frais pour campagne publicitaire" },
      { src: "/images/optimized/portfolio/mode/chaussea/maquillage-mode-chaussea-campagne-03.webp", alt: "Campagne publicitaire Chaussea — maquillage mode professionnel" },
      { src: "/images/optimized/portfolio/mode/chaussea/maquillage-mode-chaussea-campagne-04.webp", alt: "Chaussea campagne mode — mise en beauté modèle" },
      { src: "/images/optimized/portfolio/mode/chaussea/maquillage-mode-chaussea-campagne-05.webp", alt: "Shooting mode Chaussea — look naturel et contemporain" },
      { src: "/images/optimized/portfolio/mode/chaussea/maquillage-mode-chaussea-campagne-06.webp", alt: "Campagne Chaussea — maquillage tendance et photogénique" },
      { src: "/images/optimized/portfolio/mode/chaussea/maquillage-mode-chaussea-campagne-07.webp", alt: "Chaussea lookbook — maquillage mode élégant" },
      { src: "/images/optimized/portfolio/mode/chaussea/maquillage-mode-chaussea-campagne-08.webp", alt: "Campagne Chaussea — maquillage frais pour shooting publicitaire" },
      { src: "/images/optimized/portfolio/mode/chaussea/maquillage-mode-chaussea-campagne-09.webp", alt: "Shooting Chaussea — maquillage mode lumineux" },
      { src: "/images/optimized/portfolio/mode/chaussea/maquillage-mode-chaussea-campagne-10.webp", alt: "Campagne Chaussea — maquillage beauté et mode par Cyrielle Thiebaut" },
      { src: "/images/optimized/portfolio/mode/chaussea/maquillage-mode-chaussea-campagne-11.webp", alt: "Chaussea campagne — maquillage naturel professionnel" },
      { src: "/images/optimized/portfolio/mode/chaussea/maquillage-mode-chaussea-campagne-12.webp", alt: "Campagne Chaussea — maquillage mode finale" },
    ],
    lesTouristes: [
      { src: "/images/optimized/portfolio/mode/les-touristes/maquillage-mode-les-touristes-look-creatif-01.webp", alt: "Les Touristes — maquillage mode créatif par Cyrielle Thiebaut" },
      { src: "/images/optimized/portfolio/mode/les-touristes/maquillage-mode-les-touristes-look-creatif-02.webp", alt: "Shooting Les Touristes — look créatif et audacieux" },
      { src: "/images/optimized/portfolio/mode/les-touristes/maquillage-mode-les-touristes-look-creatif-03.webp", alt: "Les Touristes collection — maquillage mode artistique" },
      { src: "/images/optimized/portfolio/mode/les-touristes/maquillage-mode-les-touristes-look-creatif-04.webp", alt: "Campagne Les Touristes — maquillage créatif et coloré" },
      { src: "/images/optimized/portfolio/mode/les-touristes/maquillage-mode-les-touristes-look-creatif-05.webp", alt: "Les Touristes — maquillage mode expressif et vivant" },
      { src: "/images/optimized/portfolio/mode/les-touristes/maquillage-mode-les-touristes-look-creatif-06.webp", alt: "Shooting Les Touristes — regard maquillé avec caractère" },
      { src: "/images/optimized/portfolio/mode/les-touristes/maquillage-mode-les-touristes-look-creatif-07.webp", alt: "Les Touristes — maquillage éditorial mode" },
      { src: "/images/optimized/portfolio/mode/les-touristes/maquillage-mode-les-touristes-look-creatif-08.webp", alt: "Campagne Les Touristes — portrait mode maquillé" },
      { src: "/images/optimized/portfolio/mode/les-touristes/maquillage-mode-les-touristes-look-creatif-09.webp", alt: "Les Touristes — maquillage créatif final par Cyrielle Thiebaut" },
      { src: "/images/optimized/portfolio/mode/les-touristes/maquillage-mode-les-touristes-ambiance-editoriale-01.webp", alt: "Les Touristes ambiance éditoriale — maquillage et mise en scène" },
      { src: "/images/optimized/portfolio/mode/les-touristes/maquillage-mode-les-touristes-ambiance-editoriale-02.webp", alt: "Ambiance éditoriale Les Touristes — maquillage mode atmosphérique" },
      { src: "/images/optimized/portfolio/mode/les-touristes/maquillage-mode-les-touristes-ambiance-editoriale-03.webp", alt: "Les Touristes édito — maquillage mode et direction artistique" },
      { src: "/images/optimized/portfolio/mode/les-touristes/maquillage-mode-les-touristes-portrait-01.webp", alt: "Portrait Les Touristes — maquillage mode close-up" },
      { src: "/images/optimized/portfolio/mode/les-touristes/maquillage-mode-les-touristes-portrait-02.webp", alt: "Les Touristes portrait — maquillage mode naturel et expressif" },
    ],
  },
  opera: [
    { src: "/images/optimized/portfolio/opera/maquillage-opera-scene-theatre-metz-01.webp", alt: "Maquillage scénique Opéra-Théâtre de Metz — caractérisation artistique" },
    { src: "/images/optimized/portfolio/opera/maquillage-opera-scene-theatre-metz-02.webp", alt: "Scène de l'Opéra de Metz — maquillage de spectacle par Cyrielle Thiebaut" },
    { src: "/images/optimized/portfolio/opera/maquillage-opera-scene-theatre-metz-03.webp", alt: "Opéra-Théâtre de Metz — maquillage scénique et transformation" },
    { src: "/images/optimized/portfolio/opera/maquillage-opera-coulisses-artiste-01.webp", alt: "Coulisses de l'opéra — maquillage artiste avant la représentation" },
    { src: "/images/optimized/portfolio/opera/maquillage-opera-coulisses-artiste-02.webp", alt: "Backstage opéra — mise en beauté scénique d'un artiste lyrique" },
    { src: "/images/optimized/portfolio/opera/maquillage-opera-coulisses-artiste-03.webp", alt: "Coulisses Opéra-Théâtre de Metz — préparation maquillage spectacle" },
    { src: "/images/optimized/portfolio/opera/maquillage-opera-spectacle-costume-01.webp", alt: "Spectacle opéra — maquillage et costume d'époque" },
    { src: "/images/optimized/portfolio/opera/maquillage-opera-spectacle-costume-02.webp", alt: "Opéra de Metz — maquillage scénique avec costume de scène" },
    { src: "/images/optimized/portfolio/opera/maquillage-opera-spectacle-costume-03.webp", alt: "Maquillage opéra — transformation complète artiste et costume" },
  ],
} as const;

// Testimonials — real reviews from mariages.net
export const TESTIMONIALS = [
  {
    name: "Margot",
    date: "Octobre 2025",
    text: "D'une douceur et d'une gentillesse ! Je me suis mariée le 18 octobre, maquillée à 13h, le maquillage a tenu jusqu'au dimanche 5h du matin ! Beaucoup d'humour et une belle écoute.",
    rating: 5,
  },
  {
    name: "Lea",
    date: "Octobre 2025",
    text: "Exceptionnelle ! Le maquillage était magnifique et a tenu toute la soirée malgré la chaleur. Une vraie artiste qui sait sublimer chaque visage.",
    rating: 5,
  },
  {
    name: "Morgane",
    date: "Juillet 2025",
    text: "Sa douceur, sa disponibilité et sa gentillesse m'ont tout de suite mise en confiance. Un maquillage naturel et élégant, exactement ce que je voulais.",
    rating: 5,
  },
] as const;

// Rating summary
export const RATING = {
  score: "5.0/5",
  count: 17,
  recommendation: "100%",
} as const;

// About badges
export const ABOUT_BADGES = [
  "Fashion Week Luxembourg",
  "Opéra-Théâtre de Metz",
  "EPEC Gaspard",
] as const;

// Social links
export const SOCIALS = [
  {
    label: "Instagram",
    href: CONTACT.instagramUrl,
    handle: CONTACT.instagram,
  },
  {
    label: "Instagram Brides",
    href: CONTACT.instagramBridesUrl,
    handle: CONTACT.instagramBrides,
  },
  {
    label: "Mariages.net",
    href: CONTACT.mariagesNetUrl,
    handle: "mariages.net",
  },
] as const;
