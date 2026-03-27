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
  },
  {
    icon: Sparkles,
    title: "Mode & Spectacle",
    description:
      "Fashion Week, opéra, concours, galas. Une expertise scénique et créative adaptée à chaque univers artistique.",
    price: "Sur devis",
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
export const PORTFOLIO_ITEMS = [
  { id: 1, category: "Éditorial", aspect: "portrait" as const, image: "https://images.unsplash.com/photo-1674867688810-de541c5c8b95?w=1200&q=80" },
  { id: 2, category: "Mode", aspect: "landscape" as const, image: "https://images.unsplash.com/photo-1747171053296-84c4e8015b24?w=1200&q=80" },
  { id: 3, category: "Backstage", aspect: "portrait" as const, image: "https://images.unsplash.com/photo-1758613654186-6ce234bf94ab?w=1200&q=80" },
  { id: 4, category: "Opéra", aspect: "landscape" as const, image: "https://images.unsplash.com/photo-1616923756114-9a17522a1794?w=1200&q=80" },
  { id: 5, category: "Beauté", aspect: "portrait" as const, image: "https://images.unsplash.com/photo-1697669210621-952b5342ef67?w=1200&q=80" },
  { id: 6, category: "Shooting", aspect: "landscape" as const, image: "https://images.unsplash.com/photo-1742112008263-1079370d69e7?w=1200&q=80" },
] as const;

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
