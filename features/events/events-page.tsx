import { Clock3, Music3, Users2 } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Event } from "@/features/events/interfaces/event";
import { EventCard } from "./components/event-card";

export const metadata: Metadata = {
  title: "Eventos",
  description:
    "Descubre los proximo eventos de Lluvias de Gloria Eterna: reuniones, adoracion y actividades para la comunidad.",
};

const events: Event[] = [
  {
    title: "Noche de Adoracion",
    startDate: new Date("2024-06-07T19:00:00"),
    endDate: new Date("2024-06-07T21:00:00"),
    location: "Auditorio principal",
    description:
      "Un encuentro para celebrar a Dios con musica, palabra y un ambiente pensado para recibir a nuevos amigos.",
  },
  {
    title: "Tarde de Conexion",
    startDate: new Date("2026-06-30T18:50:00"),
    endDate: new Date("2026-06-30T18:55:00"),
    location: "Salones juveniles",
    description:
      "Tiempo para conversar, jugar y fortalecer amistades dentro de la comunidad.",
  },
  {
    title: "Servicio y Mision",
    startDate: new Date("2026-06-30T20:39:00"),
    endDate: new Date("2026-06-30T20:40:00"),
    location: "Ciudad y barrios cercanos",
    description:
      "Juntos servimos a otros con acciones practicas, amor y fe en movimiento.",
  },
];

export function EventsPage() {
  return (
    <div className="space-y-6 pb-8">
      <div className="space-y-3">
        <Badge variant="brandSoft" className="w-fit">
          Calendario juvenil
        </Badge>
        <h1 className="text-3xl font-black text-brand-foreground sm:text-4xl">
          Eventos
        </h1>
        <p className="max-w-2xl text-brand-muted">
          Encuentros creados para adorar, conectar y servir. Aqui puedes ver lo
          que viene para la comunidad.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.title} event={event} />
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          {
            icon: Music3,
            title: "Adoracion",
            text: "Noche centrada en musica y palabra.",
          },
          {
            icon: Users2,
            title: "Conexion",
            text: "Actividades para crear comunidad real.",
          },
          {
            icon: Clock3,
            title: "Ritmo constante",
            text: "Agenda pensada para que siempre haya un paso siguiente.",
          },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.title} variant="elevated">
              <CardHeader>
                <div className="mb-2 inline-flex size-12 items-center justify-center rounded-2xl bg-brand-primary/15 text-brand-primary">
                  <Icon className="size-6" />
                </div>
                <CardTitle className="text-xl text-brand-foreground">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-6 text-brand-muted">
                {item.text}
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card variant="gradient">
        <CardContent className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl font-black text-brand-foreground">
              Quieres participar en el proximo encuentro?
            </h2>
            <p className="text-brand-foreground/85">
              Sigue nuestras publicaciones o unete a un grupo de conexion para
              recibir novedades.
            </p>
          </div>
          <Button variant="brandOutline" asChild className="rounded-full px-6">
            <Link href="/grupos-conexion">Ver grupos de conexion</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
