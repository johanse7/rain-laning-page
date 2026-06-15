import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-brand)] text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-brand-primary/30 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover",
        brand: "bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover",
        brandSoft:
          "border border-brand-border bg-brand-primary/15 text-brand-primary hover:bg-brand-primary/20",
        brandSecondary:
          "bg-brand-secondary text-brand-secondary-foreground hover:bg-brand-secondary-hover",
        brandOutline:
          "border border-brand-border bg-brand-surface text-brand-foreground hover:bg-brand-surface-strong",
        brandGhost: "text-brand-foreground hover:bg-brand-surface",
        brandLink: "text-brand-primary underline-offset-4 hover:underline",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-brand-border bg-brand-surface text-brand-foreground hover:bg-brand-surface-strong",
        secondary:
          "bg-brand-secondary text-brand-secondary-foreground hover:bg-brand-secondary-hover",
        ghost: "text-brand-foreground hover:bg-brand-surface",
        link: "text-brand-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "brand",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
