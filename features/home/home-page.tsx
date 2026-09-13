import { VIDEO_CLIPS } from "@/lib/constants";
import { ArrowRight, CalendarDays, HeartHandshake, Music3, Users2 } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionReveal } from "@/shared/components/section-reveal";
import { CarouselHero } from "@/shared/components/hero/CarouselHero";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Conoce Lluvias de Gloria Eterna, una comunidad cristiana con adoracion, eventos y espacios para crecer en la fe.",
};

const pillars = [
  {
    title: "Adoracion viva",
    description:
      "Encuentros con musica, oracion y un ambiente preparado para buscar a Dios con libertad.",
    icon: Music3,
  },
  {
    title: "Comunidad real",
    description:
      "Espacios para hacer amigos, compartir cargas y crecer rodeado de personas que te impulsan.",
    icon: Users2,
  },
  {
    title: "Servicio con proposito",
    description:
      "Jovenes que sirven en la iglesia y en la ciudad con accion, fe y compromiso.",
    icon: HeartHandshake,
  },
];

const schedule = [
  {
    title: "Viernes de encuentro",
    time: "7:00 PM",
    text: "Una noche para adorar, conectar y comenzar el fin de semana con enfoque espiritual.",
  },
  {
    title: "Grupo de crecimiento",
    time: "Semana a semana",
    text: "Tiempo para estudiar la Biblia, conversar y fortalecer la fe en un ambiente cercano.",
  },
  {
    title: "Servicio y mision",
    time: "Cada mes",
    text: "Actividades para bendecir a otros y llevar esperanza fuera de las paredes de la iglesia.",
  },
];

export function HomePage() {
  return (
    <div className="space-y-16 pb-16 md:space-y-24 md:pb-24">
      <section className="relative w-full min-h-dvh overflow-hidden rounded-b-[2rem] border-b border-brand-border bg-brand-background">
        <CarouselHero contentMediaUrls={VIDEO_CLIPS} />

        <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent px-4 pb-10 pt-24 md:px-8 md:pb-14">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 text-brand-foreground">
            <Badge variant="brandSoft" className="w-fit">Comunidad cristiana juvenil</Badge>
            <div className="max-w-4xl space-y-4">
              <h1 className="max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
                Una generacion que adora, sirve y crece con fe real.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-brand-foreground/85 sm:text-lg">
                En Lluvias de Gloria Eterna creamos espacios para que cada joven encuentre
                pertenencia, direccion y una experiencia viva con Dios.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button variant="brand" asChild className="rounded-full px-6">
                <Link href="/ministerio-juvenil">
                  Conocer ministerio juvenil
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button variant="brandOutline" asChild className="rounded-full px-6">
                <Link href="/eventos">Ver eventos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <SectionReveal>
          <div className="grid gap-4 md:grid-cols-3">
            {pillars.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} variant="surfaceSoft" className="h-full">
                  <CardHeader>
                    <div className="mb-2 inline-flex size-12 items-center justify-center rounded-2xl bg-brand-primary/15 text-brand-primary">
                      <Icon className="size-6" />
                    </div>
                    <CardTitle className="text-2xl text-brand-foreground">{item.title}</CardTitle>
                    <CardDescription className="text-brand-muted">{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </SectionReveal>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-4 px-4 md:grid-cols-[0.95fr_1.05fr] md:px-8">
        <SectionReveal>
          <Card variant="gradient" className="h-full">
            <CardHeader>
              <Badge variant="brandSecondary" className="w-fit">Nuestro enfoque</Badge>
              <CardTitle className="text-3xl text-brand-foreground sm:text-4xl">
                Una iglesia que acompana a los jovenes de cerca.
              </CardTitle>
              <CardDescription className="text-brand-foreground/80">
                No solo organizamos reuniones. Construimos procesos, amistades y discipulado
                para que la fe tenga raiz y fruto.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pb-6">
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["+120", "jovenes activos"],
                  ["3", "espacios mensuales"],
                  ["1", "misma vision"],
                  ["100%", "comunidad real"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-brand-border/60 bg-black/10 p-4">
                    <div className="text-2xl font-black text-brand-foreground">{value}</div>
                    <div className="text-sm text-brand-foreground/80">{label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </SectionReveal>

        <SectionReveal>
          <Card variant="elevated" className="h-full">
            <CardHeader>
              <Badge variant="brandSoft" className="w-fit">Agenda base</Badge>
              <CardTitle className="text-3xl text-brand-foreground">Lo que hacemos durante el mes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pb-6">
              {schedule.map((item) => (
                <div key={item.title} className="rounded-2xl border border-brand-border bg-brand-surface p-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-bold text-brand-foreground">{item.title}</h3>
                    <span className="inline-flex items-center gap-2 text-sm text-brand-primary">
                      <CalendarDays className="size-4" />
                      {item.time}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-brand-muted">{item.text}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </SectionReveal>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <SectionReveal>
          <Card variant="surfaceSoft">
            <CardContent className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                  Da el siguiente paso
                </p>
                <h2 className="text-3xl font-black text-brand-foreground">Queremos conocerte</h2>
                <p className="max-w-2xl text-brand-muted">
                  Si buscas un lugar para adorar, crecer y servir, aqui hay un espacio para ti.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button variant="brand" asChild className="rounded-full px-6">
                  <Link href="/grupos-conexion">Unirme a un grupo</Link>
                </Button>
                <Button variant="brandOutline" asChild className="rounded-full px-6">
                  <Link href="/quienes-somos">Nuestra misión y visión</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </SectionReveal>
      </section>
    </div>
  );
}
