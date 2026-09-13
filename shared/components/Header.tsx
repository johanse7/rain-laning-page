import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-brand-border/80 bg-[linear-gradient(180deg,rgba(18,25,51,0.96)_0%,rgba(13,18,35,0.88)_100%)] backdrop-blur-xl shadow-[0_10px_30px_rgba(7,11,23,0.22)]">
      <div className="flex items-center flex-col md:flex-row  md:justify-between gap-4 px-4 py-4 md:px-8 md:py-5">
        <div className="flex min-w-0 items-center gap-3 md:gap-4">
          <div className="relative size-16 shrink-0 overflow-hidden rounded-3xl border border-brand-border/80 bg-brand-surface shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_14px_30px_rgba(0,0,0,0.18)] ring-1 ring-brand-primary/10">
            <Image
              fill
              src="/images/logo.png"
              alt="Logo de lluvias de gloria eterna"
              className="object-contain p-2.5"
              loading="eager"
            />
          </div>
          <div className="min-w-0">
            <h1 className="truncate text-lg font-black tracking-tight text-brand-foreground sm:text-2xl">
              Lluvias de Gloria Eterna
            </h1>
            <p className="mt-1 max-w-[36ch] text-sm text-brand-muted sm:text-base">
              Un espacio vivo para conectar, servir y crecer.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <Button
            variant="brandOutline"
            asChild
            className="rounded-full px-4 text-xs sm:px-5 sm:text-sm"
          >
            <Link href="/quienes-somos">Quiénes Somos</Link>
          </Button>
          <Button
            variant="brandOutline"
            asChild
            className="rounded-full px-4 text-xs sm:px-5 sm:text-sm"
          >
            <Link href="/ministerio-juvenil">Ministerio Juvenil</Link>
          </Button>
          <Button
            variant="brandOutline"
            asChild
            className="rounded-full px-4 text-xs sm:px-5 sm:text-sm"
          >
            <Link href="/">Inicio</Link>
          </Button>
          <Button
            variant="brand"
            asChild
            className="rounded-full px-4 text-xs sm:px-5 sm:text-sm"
          >
            <Link href="/donaciones">Donar</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
