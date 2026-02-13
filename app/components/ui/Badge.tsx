import { cn } from "@/app/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "gold" | "rose" | "subtle";
}

export function Badge({ children, className, variant = "gold" }: BadgeProps) {
  const variants = {
    gold: "border-accent/30 text-accent bg-accent/5",
    rose: "border-foreground/20 text-foreground bg-foreground/5",
    subtle: "border-border text-muted bg-surface",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full border text-xs font-accent tracking-wider uppercase",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
