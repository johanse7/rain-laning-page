"use client";

import {
  CalendarDays,
  ChevronRight,
  Compass,
  Home,
  Menu,
  Users2,
  X,
} from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/ministerio-juvenil", label: "Ministerio Juvenil", icon: Compass },
  { href: "/eventos", label: "Eventos", icon: CalendarDays },
  { href: "/grupos-conexion", label: "Grupos Conexión", icon: Users2 },
];

export function SiteSidebar() {
  const [open, setOpen] = React.useState(false);
  const pathName = usePathname();

  return (
    <>
      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-brand-border bg-brand-background/90 px-4 py-3 backdrop-blur md:hidden">
        <Button variant="brandOutline" size="icon" onClick={() => setOpen(true)} aria-label="Abrir menú">
          <Menu className="size-5" />
        </Button>
      </div>

      <aside className="hidden md:fixed md:inset-y-0 md:left-0 md:z-40 md:flex md:w-72 md:flex-col md:border-r md:border-brand-border md:bg-brand-background/95 md:backdrop-blur-xl">
        <nav className="flex flex-1 flex-col gap-2 p-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group flex items-center justify-between rounded-2xl border border-transparent px-4 py-3 text-sm font-medium text-brand-foreground transition-colors hover:border-brand-border hover:bg-brand-surface",
                  pathName === item.href && "bg-brand-surface",
                )}
              >
                <span className="flex items-center gap-3">
                  <span className="inline-flex size-9 items-center justify-center rounded-full bg-brand-primary/15 text-brand-primary">
                    <Icon className="size-4" />
                  </span>
                  {item.label}
                </span>
                <ChevronRight className="size-4 text-brand-muted transition-transform group-hover:translate-x-1" />
              </Link>
            );
          })}
        </nav>
      </aside>

      {open ? (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-slate-950/70" onClick={() => setOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-[85%] max-w-sm border-r border-brand-border bg-brand-background p-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-brand-border pb-4">
              <div>
                <p className="text-sm font-semibold text-brand-foreground">Lluvias de Gloria Eterna</p>
                <p className="text-xs text-brand-muted">Menú interno</p>
              </div>
              <Button variant="brandGhost" size="icon" onClick={() => setOpen(false)} aria-label="Cerrar menú">
                <X className="size-5" />
              </Button>
            </div>
            <nav className="mt-4 flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-2xl border border-brand-border/60 bg-brand-surface px-4 py-3 text-sm font-medium text-brand-foreground"
                  >
                    <Icon className="size-4 text-brand-primary" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
