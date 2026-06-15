import type { Metadata } from "next";
import { GroupsConnectionPage } from "@/features/groups/groups-connection-page";

export const metadata: Metadata = {
  title: "Grupos Conexión",
  description:
    "Conecta con grupos pequeños de Lluvias de Gloria Eterna para crecer en la fe, hacer comunidad y servir.",
};

export default function GruposConexionPage() {
  return <GroupsConnectionPage />;
}
