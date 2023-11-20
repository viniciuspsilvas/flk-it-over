"use client";
import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Text } from "../global/text";

const variants = cva("border border-2 transition-all", {
  variants: {
    variant: {
      outlined: "!bg-transparent hover:!bg-accent/90 ",
      contained: "bg-accent hover:bg-accent/90",
      text: "!bg-transparent border-0 underline-offset-4 hover:underline text-primary bg-red-500"
    },
    size: {
      xs: "text-xs h-6 min-w-6 px-2",
      sm: "text-sm h-8 min-w-8 px-4",
      md: "text-base h-10 min-w-10 px-6",
      lg: "text-lg h-12 min-w-12 px-8",
      xl: "text-xl h-14 min-w-14 px-10"
    },
    rounded: {
      none: "rounded-none",
      md: "rounded-md",
      full: "rounded-full"
    },

    intent: {
      primary:
        "bg-primary/80 border-primary/80 hover:bg-primary hover:border-primary",
      secondary:
        "bg-secondary/80 border-secondary/80 hover:bg-secondary hover:border-secondary",
      tertiary:
        "bg-tertiary/80 border-tertiary/80 hover:bg-tertiary hover:border-tertiary",
      success:
        "bg-success/80 border-success/80 hover:bg-success hover:border-success",
      info: "bg-info/80 border-info/80 hover:bg-info hover:border-info",
      warning:
        "bg-warning/80 border-warning/80 hover:bg-warning hover:border-warning",
      danger:
        "bg-danger/80 border-danger/80 hover:bg-danger hover:border-danger",
      basic: "bg-basic/80 border-basic/80 hover:bg-basic hover:border-basic",
      none: ""
    }
  },

  compoundVariants: [
    {
      intent: ["primary"],
      variant: ["outlined", "text"],
      className: "text-primary/80  hover:text-primary"
    },
    {
      intent: ["secondary"],
      variant: ["outlined", "text"],
      className: "text-secondary/80 hover:text-secondary"
    },
    {
      intent: ["tertiary"],
      variant: ["outlined", "text"],
      className: "text-tertiary/80 hover:text-tertiary"
    },
    {
      intent: ["success"],
      variant: ["outlined", "text"],
      className: "text-success/80 hover:text-success"
    },
    {
      intent: ["info"],
      variant: ["outlined", "text"],
      className: "text-info/80 hover:text-info"
    },
    {
      intent: ["warning"],
      variant: ["outlined", "text"],
      className: "text-warning/80 hover:text-warning"
    },
    {
      intent: ["danger"],
      variant: ["outlined", "text"],
      className: "text-danger/80 hover:text-danger"
    },
    {
      intent: ["basic"],
      variant: ["outlined", "text"],
      className: "text-basic/80 hover:text-basic"
    },
    {
      intent: ["primary", "secondary"],
      variant: ["contained"],
      className: "text-black hover:text-black-95"
    }
  ],

  defaultVariants: {
    variant: "contained",
    size: "md",
    rounded: "md",
    intent: "primary"
  }
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {
  label?: string;
  centerIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label, className, variant, size, intent, centerIcon, ...props }, ref) => {
    return (
      <button
        className={cn(variants({ variant, size, intent, className }))}
        ref={ref}
        {...props}
      >
        <div className="flex justify-between items-center">
          {centerIcon && <span>{centerIcon}</span>}
          {label && <Text status={"none"}>{label}</Text>}
        </div>
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;

export { variants };
