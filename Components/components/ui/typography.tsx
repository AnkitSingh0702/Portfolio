import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typography = cva(["font-bold inline-block font-ubuntu"], {
  variants: {
    variant: {
      h2: "text-2xl md:text-2xl select-none decoration-ring inline-block underline-offset-8 decoration-wavy underline decoration-[#4AC29A]",
      paragraph:
        "text-muted-foreground font-normal block text-base font-ubuntu",
    },
    size: {
      sm: "text-sm",
    },
    font: {
      sans: "font-sans",
      dank: "font-dank",
      ubuntu: "font-ubuntu",
    },
  },
  defaultVariants: {
    variant: "h2",
  },
});

export interface ButtonVariants extends VariantProps<typeof typography> {}

export const typo = (variants: ButtonVariants) => cn(typography(variants));
