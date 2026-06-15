import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grupos Conexión",
  description:
    "Conecta con grupos pequeños de Lluvias de Gloria Eterna para crecer en la fe, hacer comunidad y servir.",
};

export default function GruposConexionPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-black text-brand-foreground">Grupos Conexión</h1>
      <Card variant="surfaceSoft">
        <CardHeader>
          <CardTitle className="text-brand-foreground">Próximamente</CardTitle>
        </CardHeader>
        <CardContent className="text-brand-muted">Esta sección compartirá el mismo layout interno.</CardContent>
      </Card>
    </div>
  );
}
