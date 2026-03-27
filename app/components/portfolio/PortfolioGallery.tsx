"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { img } from "@/app/lib/utils";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/app/components/animations/FadeIn";

interface GalleryImage {
  readonly src: string;
  readonly alt: string;
}

interface PortfolioGalleryProps {
  images: readonly GalleryImage[];
  columns?: 2 | 3;
}

export function PortfolioGallery({ images, columns = 3 }: PortfolioGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % images.length);
    }
  };

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") goNext();
    if (e.key === "ArrowLeft") goPrev();
  };

  const colsClass = columns === 2
    ? "columns-1 sm:columns-2 gap-4"
    : "columns-1 sm:columns-2 lg:columns-3 gap-4";

  return (
    <>
      {/* Masonry Grid */}
      <div className={colsClass}>
        {images.map((image, i) => (
          <FadeIn key={image.src} delay={i * 0.04}>
            <motion.button
              onClick={() => openLightbox(i)}
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.3 }}
              className="relative w-full mb-4 overflow-hidden rounded-lg cursor-pointer group block break-inside-avoid"
            >
              <Image
                src={img(image.src)}
                alt={image.alt}
                width={800}
                height={1200}
                className="w-full h-auto object-cover transition-all duration-500 group-hover:brightness-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-300" />
            </motion.button>
          </FadeIn>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-background/95 backdrop-blur-sm"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="dialog"
            aria-label="Galerie photo"
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 p-2 text-foreground/60 hover:text-foreground transition-colors"
              aria-label="Fermer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Nav buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 md:left-8 z-10 p-3 text-foreground/40 hover:text-foreground transition-colors"
              aria-label="Image précédente"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 md:right-8 z-10 p-3 text-foreground/40 hover:text-foreground transition-colors"
              aria-label="Image suivante"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-[90vw] max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={img(images[lightboxIndex].src)}
                alt={images[lightboxIndex].alt}
                width={1600}
                height={2400}
                className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg"
                sizes="90vw"
                priority
              />
              {/* Caption */}
              <p className="absolute bottom-0 left-0 right-0 p-4 text-center text-sm text-foreground/60 font-body bg-gradient-to-t from-background/60 to-transparent rounded-b-lg">
                {images[lightboxIndex].alt}
              </p>
            </motion.div>

            {/* Counter */}
            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 font-accent text-xs tracking-wider text-foreground/40">
              {lightboxIndex + 1} / {images.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
