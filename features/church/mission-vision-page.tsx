import Link from "next/link";
import { ArrowRight, Church, Eye, HeartHandshake, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionReveal } from "@/shared/components/section-reveal";

const valores = [
  "Amor",
  "Fe",
  "Verdad",
  "Sujeción",
  "Unidad",
  "Sacrificio",
  "Justicia",
  "Lealtad",
  "Humildad",
  "Santidad",
  "Compromiso",
  "Obediencia",
  "Generosidad",
  "Integridad",
];

export function MissionVisionPage() {
  return (
    <div className="min-h-dvh bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.22),_transparent_32%),linear-gradient(180deg,var(--brand-background)_0%,#0b1020_100%)] text-brand-foreground">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 pb-6 pt-2 md:pt-4">
        <SectionReveal>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
            <Badge variant="brandSoft" className="w-fit">
              <Church className="mr-1 size-3.5" />
              Quiénes somos
            </Badge>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Una iglesia con visión, misión y valores claros
            </h1>
            <p className="max-w-2xl text-base leading-7 text-brand-muted sm:text-lg">
              Somos Lluvias de Gloria Eterna: una comunidad viva que proclama,
              practica y enseña el evangelio para bendecir a Colombia y a las
              naciones.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal>
          <Card variant="surfaceSoft" className="overflow-hidden">
            <CardHeader className="items-center text-center">
              <div className="flex items-center gap-0">
                <span
                  aria-hidden="true"
                  className="flex size-16 items-center justify-center rounded-full border-4 border-brand-vision text-4xl font-black text-brand-vision sm:size-20 sm:text-5xl"
                >
                  1
                </span>
                <span className="-ml-4 rounded-r-lg bg-brand-vision-pink px-8 py-2 text-2xl font-black tracking-wide text-brand-ink sm:px-12 sm:text-4xl">
                  VISIÓN
                </span>
              </div>
              <CardTitle className="sr-only">Visión</CardTitle>
            </CardHeader>
            <CardContent className="pb-8 text-center">
              <div className="mx-auto mb-4 inline-flex size-12 items-center justify-center rounded-2xl bg-brand-vision/15 text-brand-vision-soft">
                <Eye className="size-6" />
              </div>
              <p className="mx-auto max-w-3xl text-lg font-medium normal-case leading-8 tracking-wide text-brand-foreground sm:text-xl sm:leading-9">
                Desarrollar un avivamiento espiritual permanente que genere
                crecimiento integral en las personas para la gloria de Dios.
              </p>
            </CardContent>
          </Card>
        </SectionReveal>

        <SectionReveal>
          <Card variant="surfaceSoft" className="overflow-hidden">
            <CardHeader className="items-center text-center">
              <div className="flex items-center gap-0">
                <span
                  aria-hidden="true"
                  className="flex size-16 items-center justify-center rounded-full border-4 border-brand-mission text-4xl font-black text-brand-mission sm:size-20 sm:text-5xl"
                >
                  2
                </span>
                <span className="-ml-4 rounded-r-lg bg-brand-mission-mint px-8 py-2 text-2xl font-black tracking-wide text-brand-ink sm:px-12 sm:text-4xl">
                  MISIÓN
                </span>
              </div>
              <CardTitle className="sr-only">Misión</CardTitle>
            </CardHeader>
            <CardContent className="pb-8 text-center">
              <div className="mx-auto mb-4 inline-flex size-12 items-center justify-center rounded-2xl bg-brand-mission/15 text-brand-mission">
                <HeartHandshake className="size-6" />
              </div>
              <p className="mx-auto max-w-4xl text-lg font-medium normal-case leading-8 tracking-wide text-brand-foreground sm:text-xl sm:leading-9">
                Somos una comunidad viva, sin ánimo de lucro, que proclama,
                practica y enseña el evangelio de la fe y poder, formando
                discípulos para nuestro Señor Jesucristo, quien es el único
                mediador entre Dios y los hombres, con el fin de bendecir a
                Colombia y a las naciones.
              </p>
            </CardContent>
          </Card>
        </SectionReveal>

        <SectionReveal>
          <Card variant="gradient">
            <CardHeader className="items-center text-center">
              <div className="flex items-center gap-0">
                <span
                  aria-hidden="true"
                  className="z-10 flex size-16 items-center justify-center rounded-full border-4 border-brand-values bg-brand-background text-4xl font-black text-brand-values sm:size-20 sm:text-5xl"
                >
                  3
                </span>
                <span className="-ml-4 rounded-r-lg bg-brand-values-cream px-8 py-2 text-2xl font-black tracking-wide text-brand-ink sm:px-12 sm:text-4xl">
                  VALORES
                </span>
              </div>
              <CardDescription className="max-w-2xl text-brand-foreground/80">
                Los principios que guían lo que creemos, cómo servimos y cómo
                vivimos en comunidad.
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-8">
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {valores.map((valor) => (
                  <li
                    key={valor}
                    className="flex items-center justify-center gap-2 rounded-2xl border border-brand-border bg-brand-surface px-4 py-3 text-sm font-bold uppercase tracking-wider text-brand-foreground"
                  >
                    <Sparkles className="size-4 shrink-0 text-brand-values" />
                    {valor}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </SectionReveal>

        <SectionReveal>
          <Card variant="surfaceSoft">
            <CardContent className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                  Da el siguiente paso
                </p>
                <h2 className="text-3xl font-black text-brand-foreground">
                  Queremos conocerte
                </h2>
                <p className="max-w-2xl text-brand-muted">
                  Si buscas un lugar para adorar, crecer y servir, aquí hay un
                  espacio para ti.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button variant="brand" asChild className="rounded-full px-6">
                  <Link href="/grupos-conexion">
                    Unirme a un grupo
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  variant="brandOutline"
                  asChild
                  className="rounded-full px-6"
                >
                  <Link href="/eventos">Ver eventos</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </SectionReveal>
      </section>
    </div>
  );
}
