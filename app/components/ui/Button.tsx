"use client";

import Link from "next/link";
import { cn } from "@/app/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-accent font-medium tracking-wider uppercase transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

    const variants: Record<ButtonVariant, string> = {
      primary:
        "bg-accent text-background hover:bg-accent-hover shadow-lg hover:shadow-accent/20",
      secondary:
        "bg-foreground text-background hover:bg-foreground/90 shadow-lg hover:shadow-foreground/20",
      outline:
        "border border-accent text-accent hover:bg-accent hover:text-background",
      ghost: "text-foreground hover:bg-foreground/10",
    };

    const sizes: Record<ButtonSize, string> = {
      sm: "px-4 py-2 text-xs rounded-md",
      md: "px-6 py-3 text-sm rounded-lg",
      lg: "px-8 py-4 text-sm rounded-xl",
    };

    if (href) {
      const isExternal = href.startsWith("http") || href.startsWith("mailto:");
      const classes = cn(baseStyles, variants[variant], sizes[size], className);

      if (isExternal) {
        return (
          <motion.a
            href={href}
            className={classes}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {children}
          </motion.a>
        );
      }

      return (
        <Link href={href} className={classes}>
          {children as React.ReactNode}
        </Link>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
