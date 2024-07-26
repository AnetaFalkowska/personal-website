import { cva,VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { ComponentProps } from "react";

export const buttonStyles = cva(["transition-colors", "text-secondary-button-text"], {
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
      default: ["rounded-full", "p-2"],
      icon: [
        "rounded-full",
        "w-10",
        "h-10",
        "flex",
        "items-center",
        "justify-center",
        "p-2.5",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button"> & ComponentProps<"a"> & { href?: string };


export default function Button({variant, size, className, href, ...props}:ButtonProps) {
  const Component = href ? 'a' : 'button';
  return <Component {...props} href={href} className={twMerge(buttonStyles({variant, size}), className)} target={href ? "_blank" : undefined}></Component>;
}
