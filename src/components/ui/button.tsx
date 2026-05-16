import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/btn relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[10px] text-[13px] font-medium tracking-[0.04em] ring-offset-background transition-[background,box-shadow,border-color,color,transform] duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:translate-y-px [&_svg]:pointer-events-none [&_svg]:size-[15px] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_1px_0_0_hsl(var(--primary-foreground)/0.18)_inset,0_10px_24px_-14px_hsl(var(--primary)/0.55)] hover:bg-[hsl(var(--primary)/0.94)] hover:shadow-[0_1px_0_0_hsl(var(--primary-foreground)/0.18)_inset,0_18px_36px_-18px_hsl(var(--primary)/0.65)]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-[0_10px_24px_-14px_hsl(var(--destructive)/0.55)] hover:bg-[hsl(var(--destructive)/0.92)]",
        outline:
          "border border-foreground/20 bg-transparent text-foreground hover:border-primary hover:text-primary hover:bg-primary/[0.04]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-[0_10px_24px_-14px_hsl(var(--secondary)/0.55)] hover:bg-[hsl(var(--secondary)/0.94)]",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-[6px] decoration-[hsl(var(--gold))] decoration-1 hover:underline rounded-none px-0",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-7 text-[13px]",
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
