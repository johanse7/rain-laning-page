import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, HeartHandshake, Users2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Grupos Conexión",
  description:
    "Conecta con grupos pequenos de Lluvias de Gloria Eterna para crecer en la fe, hacer comunidad y servir.",
};

const groups = [
  {
    title: "Primeros pasos",
    text: "Ideal para quienes se estan integrando y quieren conocer la comunidad.",
  },
  {
    title: "Fe en crecimiento",
    text: "Un espacio para profundizar en Biblia, oracion y discipulado practico.",
  },
  {
    title: "Liderazgo joven",
    text: "Pensado para quienes desean servir, liderar y multiplicar impacto.",
  },
];

export function GroupsConnectionPage() {
  return (
    <div className="space-y-6 pb-8">
      <div className="space-y-3">
        <Badge variant="brandSoft" className="w-fit">Discipulado y comunidad</Badge>
        <h1 className="text-3xl font-black text-brand-foreground sm:text-4xl">Grupos Conexión</h1>
        <p className="max-w-2xl text-brand-muted">
          Pequeños grupos para crecer en la fe, crear amistades y recibir acompanamiento mas cercano.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {groups.map((group) => (
          <Card key={group.title} variant="surfaceSoft" className="h-full">
            <CardHeader>
              <Badge variant="brandSecondary" className="w-fit">Grupo</Badge>
              <CardTitle className="text-2xl text-brand-foreground">{group.title}</CardTitle>
            </CardHeader>
            <CardContent className="pb-6 text-brand-muted">{group.text}</CardContent>
          </Card>
        ))}
      </div>

      <Card variant="elevated">
        <CardContent className="grid gap-4 py-8 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-3">
            <h2 className="text-2xl font-black text-brand-foreground">Como funcionan los grupos?</h2>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { icon: Users2, text: "Nos reunimos en grupos pequenos y cercanos." },
                { icon: BookOpen, text: "Compartimos la palabra y aplicacion practica." },
                { icon: HeartHandshake, text: "Terminamos con oracion y acompanamiento." },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="rounded-2xl border border-brand-border bg-brand-surface p-4 text-sm text-brand-muted">
                    <Icon className="mb-2 size-5 text-brand-primary" />
                    {item.text}
                  </div>
                );
              })}
            </div>
          </div>
          <Button variant="brand" asChild className="rounded-full px-6">
            <Link href="/ministerio-juvenil">
              Quiero unirme
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
