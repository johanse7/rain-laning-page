import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover",
        brand: "border-transparent bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover",
        brandSoft: "border-brand-border bg-brand-primary/15 text-brand-primary hover:bg-brand-primary/20",
        brandSecondary: "border-brand-border bg-brand-secondary/15 text-brand-secondary hover:bg-brand-secondary/20",
        brandOutline: "border-brand-border bg-transparent text-brand-foreground",
        brandSuccess: "border-brand-success/25 bg-brand-success/15 text-brand-success hover:bg-brand-success/20",
      },
    },
    defaultVariants: {
      variant: "brand",
    },
  }
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge };
