import Image from "next/image";
import { cn, img } from "@/app/lib/utils";

interface PlaceholderImageProps {
  className?: string;
  aspect?: "portrait" | "landscape" | "square" | "hero";
  label?: string;
  src?: string;
}

const aspects = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
  hero: "aspect-[4/3] md:aspect-auto md:h-full",
};

export function PlaceholderImage({
  className,
  aspect = "portrait",
  label,
  src,
}: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-lg",
        !src && "bg-gradient-to-br from-surface via-surface to-background",
        aspects[aspect],
        className
      )}
    >
      {src ? (
        <Image
          src={img(src)}
          alt={label || ""}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      {label && (
        <span className="absolute bottom-4 left-4 font-accent text-xs tracking-wider uppercase text-accent/60">
          {label}
        </span>
      )}
    </div>
  );
}
