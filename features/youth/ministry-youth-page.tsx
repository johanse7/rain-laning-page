import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, CalendarDays, Music3, Users2, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionReveal } from "@/shared/components/section-reveal";

const highlights = [
  {
    title: "Adoración y fuego",
    description:
      "Encuentros con música viva, oración y un ambiente pensado para conectar con Dios sin formalidades.",
    icon: Music3,
  },
  {
    title: "Amistades reales",
    description:
      "Espacios para hacer comunidad, crecer en la fe y encontrar un grupo que camine contigo.",
    icon: Users2,
  },
  {
    title: "Encuentros dinámicos",
    description:
      "Reuniones con conversación, talleres, juegos y momentos que sí valen la pena compartir.",
    icon: CalendarDays,
  },
];

const events = [
  {
    title: "Noche de Conexión",
    date: "Viernes 7:00 PM",
    description: "Una noche para adorar, compartir y conocer nuevos amigos.",
  },
  {
    title: "Retiros Juveniles",
    date: "Próximamente",
    description: "Un tiempo intenso para renovar visión y fortalecer tu fe.",
  },
  {
    title: "Servicio y misión",
    date: "Cada mes",
    description: "Jóvenes sirviendo en la iglesia y en la ciudad con propósito.",
  },
];

const connectionGroups = [
  {
    title: "Primeros pasos",
    subtitle: "Para quienes recién llegan",
  },
  {
    title: "Fe en crecimiento",
    subtitle: "Para profundizar Biblia y oración",
  },
  {
    title: "Líderes jóvenes",
    subtitle: "Para servir y multiplicar impacto",
  },
];

export const metadata: Metadata = {
  title: "Ministerio Juvenil",
  description:
    "Ministerio juvenil cristiano con adoración, amistad, servicio y encuentros para jóvenes con propósito.",
};

export function MinistryYouthPage() {
  return (
    <div className="min-h-dvh bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.22),_transparent_32%),linear-gradient(180deg,var(--brand-background)_0%,#0b1020_100%)] text-brand-foreground">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 pb-6 pt-2 md:pt-4">
        <SectionReveal>
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-6">
              <Badge variant="brandSoft">Ministerio Juvenil</Badge>
              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
                  Una generación con <span className="text-brand-primary">propósito</span>,
                  pasión y una fe real.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-brand-muted sm:text-lg">
                  Creamos espacios para jóvenes que quieren crecer, adorar,
                  servir y construir amistades genuinas en Lluvias de Gloria Eterna.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button variant="brand" className="rounded-full px-6">
                  Únete ahora
                  <ArrowRight className="size-4" />
                </Button>
                <Button variant="brandOutline" className="rounded-full px-6">
                  Ver próximos eventos
                </Button>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["+120", "jóvenes activos"],
                  ["3", "reuniones al mes"],
                  ["100%", "comunidad real"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-brand-border bg-brand-surface p-4 backdrop-blur">
                    <div className="text-2xl font-black text-brand-primary">{value}</div>
                    <div className="text-sm text-brand-muted">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-primary/30 via-brand-secondary/20 to-brand-accent/20 blur-2xl" />
              <Card variant="glass" className="relative overflow-hidden backdrop-blur-xl">
                <div className="relative h-[420px] sm:h-[520px]">
                  <Image
                    src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80"
                    alt="Jóvenes celebrando en un encuentro"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="brandOutline">Adoración</Badge>
                      <Badge variant="brandOutline">Amigos</Badge>
                      <Badge variant="brandOutline">Conexión</Badge>
                    </div>
                    <p className="mt-4 max-w-md text-sm leading-6 text-brand-foreground/90">
                      Un ambiente diseñado para que cada joven encuentre dirección,
                      pertenencia y una experiencia vibrante de fe.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} variant="surfaceSoft" className="transition-transform duration-300 hover:-translate-y-1 hover:bg-brand-surface-strong">
                  <CardHeader>
                    <div className="mb-2 inline-flex size-12 items-center justify-center rounded-2xl bg-brand-primary/15 text-brand-primary">
                      <Icon className="size-6" />
                    </div>
                    <CardTitle className="text-2xl text-brand-foreground">{item.title}</CardTitle>
                    <CardDescription className="text-brand-muted">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <Card variant="elevated">
              <CardHeader>
                <Badge variant="brandSecondary" className="w-fit">Eventos</Badge>
                <CardTitle className="text-3xl text-brand-foreground sm:text-4xl">
                  Lo que viene para la juventud
                </CardTitle>
                <CardDescription className="text-brand-muted">
                  Agenda hecha para invitar, sumar y mantener el ritmo de la comunidad.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 pb-6">
                {events.map((event) => (
                  <div key={event.title} className="rounded-2xl border border-brand-border bg-brand-surface p-4">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-bold text-brand-foreground">{event.title}</h3>
                      <span className="text-sm text-brand-primary">{event.date}</span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-brand-muted">{event.description}</p>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="pb-6">
                <Button variant="brandSecondary" className="w-full rounded-full px-6">
                  Quiero participar
                </Button>
              </CardFooter>
            </Card>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card variant="glass" className="overflow-hidden sm:col-span-2">
                <div className="relative h-60">
                  <Image
                    src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=1200&q=80"
                    alt="Reunión juvenil dinámica"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                </div>
              </Card>

              {connectionGroups.map((group) => (
                <Card key={group.title} variant="surfaceSoft" className="transition-transform duration-300 hover:-translate-y-1 hover:bg-brand-surface-strong">
                  <CardHeader>
                    <Badge variant="brandSuccess" className="w-fit">
                      Grupo Conexión
                    </Badge>
                    <CardTitle className="text-xl text-brand-foreground">{group.title}</CardTitle>
                    <CardDescription className="text-brand-muted">{group.subtitle}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </SectionReveal>

        <SectionReveal>
          <Card variant="gradient">
            <CardContent className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                  Ubicación y horario
                </p>
                <h2 className="text-3xl font-black text-brand-foreground">Te esperamos este viernes</h2>
                <div className="flex flex-col gap-2 text-sm text-brand-foreground/90 sm:flex-row sm:items-center sm:gap-4">
                  <span className="inline-flex items-center gap-2"><MapPin className="size-4 text-brand-primary" /> Lluvias de Gloria Eterna</span>
                  <span className="inline-flex items-center gap-2"><CalendarDays className="size-4 text-brand-primary" /> 7:00 PM</span>
                </div>
              </div>
              <Button variant="brandOutline" className="rounded-full px-6">
                Guardar fecha
              </Button>
            </CardContent>
          </Card>
        </SectionReveal>
      </section>
    </div>
  );
}
