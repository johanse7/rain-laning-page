import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eventos",
  description:
    "Descubre los próximos eventos de Lluvias de Gloria Eterna: reuniones, adoración y actividades para la comunidad.",
};

export default function EventosPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-black text-brand-foreground">Eventos</h1>
      <Card variant="surfaceSoft">
        <CardHeader>
          <CardTitle className="text-brand-foreground">Próximamente</CardTitle>
        </CardHeader>
        <CardContent className="text-brand-muted">Esta sección ya tiene shell interno y sidebar responsive.</CardContent>
      </Card>
    </div>
  );
}
