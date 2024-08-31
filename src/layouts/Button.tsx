import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { ComponentProps } from "react";

export const buttonStyles = cva(
  [
    "transition-colors",
    "text-secondary-button-text",
    "flex",
    "justify-center",
    "items-center",
  ],
  {
    variants: {
      variant: {
        default: ["bg-secondary", "hover:bg-secondary-hover"],
        dark: [
          "bg-secondary-dark",
          "hover:bg-secondary-dark-hover",
          "text-secondary",
        ],
        inverse: [
          "bg-secondary-button-text",
          "hover:bg-secondary-button-text-hover",
          "text-secondary",
        ],
      },
      size: {
        default: ["rounded-full", "py-2", "px-8"],
        icon: ["bg-transparent", "hover:bg-transparent", "w-10", "h-10", "p-0"],
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = VariantProps<typeof buttonStyles> &
  ComponentProps<"button"> &
  ComponentProps<"a"> & { href?: string };

export default function Button({
  variant,
  size,
  className,
  href,
  ...props
}: ButtonProps) {
  const Component = href ? "a" : "button";
  return (
    <Component
      {...props}
      href={href}
      className={twMerge(buttonStyles({ variant, size }), className)}
      target={href ? "_blank" : undefined}
    ></Component>
  );
}
