import { VariantProps, tv } from "tailwind-variants";

const container = tv(
  {
    base: "mx-auto",
    variants: {
      size: {
        "7xl": "max-w-6xl 2xl:max-w-7xl",
        "7xl2":
          "max-w-[17rem] sm:max-w-lg md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl",
        "6xl": "max-w-4xl lg:max-w-5xl xl:max-w-6xl",
        "4xl": "max-w-4xl",
        "3xl": "max-w-3xl",
        "2xl": "max-w-lg sm:max-w-xl md:max-w-2xl",
        xl: "max-w-[26rem] sm:max-w-xl",
      },
    },
    defaultVariants: {
      size: "7xl",
    },
  },
  { twMerge: false }
);

interface Props extends VariantProps<typeof container> {
  className?: string;
  children?: React.ReactNode;
}

export default function Container({ children, className, size }: Props) {
  return <div className={container({ size, className })}>{children}</div>;
}
