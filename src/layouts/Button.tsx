import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { ComponentProps } from "react";

export const buttonStyles = cva(
  ["transition-colors", "flex", "justify-center", "items-center", "font-bold"],
  {
    variants: {
      variant: {
        default: [
          "bg-secondary",
          "text-secondary-button-text",
          "hover:bg-secondary-hover",
        ],
        inverse: [
          "bg-secondary-button-text",
          "text-secondary",
          "hover:bg-secondary-background",
        ],
        outline: [
          "border",
          "border-secondary",
          "bg-secondary-background",
          "text-secondary",
          "hover:bg-secondary-button-text",
        ],
      },
      size: {
        default: ["rounded-full", "py-2", "px-8"],
        icon: ["bg-transparent", "hover:bg-transparent","hover:text-secondary-background", "size-10", "p-0"],
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
