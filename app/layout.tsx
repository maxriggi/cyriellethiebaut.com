import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { JsonLd } from "@/app/components/seo/JsonLd";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cyriellethiebaut.com"),
  title: "Cyrielle Thiebaut | Pro Makeup Artist — Mode, Shooting, Opéra",
  description:
    "Maquilleuse professionnelle à Metz. Mode, shootings éditoriaux, Fashion Week Luxembourg, Opéra-Théâtre de Metz, mariage. Grand Est & Luxembourg.",
  keywords: [
    "maquilleuse professionnelle metz",
    "makeup artist mode",
    "maquilleuse shooting photo",
    "maquilleuse fashion week luxembourg",
    "maquilleuse opéra metz",
    "maquilleuse éditorial",
    "maquilleuse mariage metz",
    "maquilleuse mariage grand est",
    "maquilleuse mariage luxembourg",
    "pro makeup artist metz",
  ],
  authors: [{ name: "Cyrielle Thiebaut" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://cyriellethiebaut.com",
    siteName: "Cyrielle Thiebaut",
    title: "Cyrielle Thiebaut | Pro Makeup Artist — Mode, Shooting, Opéra",
    description:
      "Maquilleuse professionnelle à Metz. Mode, shootings éditoriaux, Fashion Week Luxembourg, Opéra-Théâtre de Metz, mariage.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cyrielle Thiebaut — Pro Makeup Artist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyrielle Thiebaut | Pro Makeup Artist — Mode, Shooting, Opéra",
    description:
      "Maquilleuse professionnelle à Metz. Mode, shootings éditoriaux, Fashion Week, Opéra, mariage.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${playfairDisplay.variable} ${cormorantGaramond.variable} ${inter.variable} ${montserrat.variable}`}
    >
      <body className="bg-background text-foreground antialiased grain-overlay">
        <JsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
