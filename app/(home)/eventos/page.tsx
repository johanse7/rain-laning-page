import type { Metadata } from "next";
import { EventsPage } from "@/features/events/events-page";

export const metadata: Metadata = {
  title: "Eventos",
  description:
    "Descubre los próximos eventos de Lluvias de Gloria Eterna: reuniones, adoración y actividades para la comunidad.",
};

export default function EventosPage() {
  return <EventsPage />;
}
