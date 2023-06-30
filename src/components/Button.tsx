import { VariantProps, tv } from "tailwind-variants";

const button = tv(
  {
    base: "flex items-center justify-center text-center max-w-full py-1 font-bold px-4 md:px-8",
    variants: {
      variant: {
        primary:
          "bg-primary text-accent hover:bg-accent hover:text-primary transition-colors",
        primary2:
          "bg-primary text-white hover:bg-accent hover:text-primary transition-colors",
        accent:
          "bg-accent text-primary shadow-button hover:opacity-70 transition-opacity",
        success:
          "bg-success-light text-white shadow-button hover:opacity-70 transition-opacity",
      },
      size: {
        base: "text-sm sm:text-base min-h-[2.5rem]",
        xl: "text-1.5lg sm:text-xl min-h-[3rem]",
        "2xl": "text-1.5xl sm:text-2xl min-h-[3.3rem]",
        "3xl": "text-1.5xl sm:text-[1.7rem] min-h-[3.3rem] sm:min-h-[3.7rem]",
        "4xl":
          "text-1.5xl min-h-[3.3rem] md:text-[1.7rem]  md:min-h-[3.7rem] lg:text-4xl lg:min-h-[4.5rem]",
      },
      radius: {
        "2xl": "rounded-2xl",
        md: "rounded-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "base",
      radius: "2xl",
    },
  },
  { twMerge: false }
);

interface ButtonProps
  extends VariantProps<typeof button>,
    React.ComponentPropsWithoutRef<"a"> {
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  children,
  variant,
  size,
  radius,
  className,
  ...rest
}: ButtonProps) {
  return (
    <a
      {...rest}
      target="_blank"
      rel="noopener noreferrer"
      className={button({ variant, size, radius, className })}
    >
      {children}
    </a>
  );
}
