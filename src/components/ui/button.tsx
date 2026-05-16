import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-wide ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 will-change-transform",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_8px_24px_-8px_hsl(var(--primary)/0.45)] hover:bg-primary/95 hover:shadow-[0_14px_34px_-10px_hsl(var(--primary)/0.55)] hover:-translate-y-0.5 hover:scale-[1.02]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-[0_8px_24px_-8px_hsl(var(--destructive)/0.45)] hover:bg-destructive/95 hover:-translate-y-0.5 hover:scale-[1.02]",
        outline:
          "relative overflow-hidden border-2 border-primary/30 bg-transparent text-foreground hover:text-primary-foreground hover:border-primary before:absolute before:inset-0 before:-z-10 before:bg-primary before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100",
        secondary:
          "bg-secondary text-secondary-foreground shadow-[0_8px_24px_-8px_hsl(var(--secondary)/0.45)] hover:bg-secondary/90 hover:-translate-y-0.5 hover:scale-[1.02]",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline rounded-none",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
