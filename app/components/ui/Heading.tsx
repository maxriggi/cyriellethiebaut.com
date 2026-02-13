import { cn } from "@/app/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
  label?: string;
}

export function Heading({
  children,
  className,
  as: Tag = "h2",
  label,
}: HeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
      {label && (
        <span className="block font-accent text-xs tracking-[0.3em] uppercase text-accent mb-4">
          {label}
        </span>
      )}
      <Tag
        className={cn(
          "font-heading font-light text-foreground",
          Tag === "h2" && "fluid-heading",
          Tag === "h3" && "fluid-subheading",
          className
        )}
      >
        {children}
      </Tag>
    </div>
  );
}
