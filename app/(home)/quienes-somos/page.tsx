import type { Metadata } from "next";
import { MissionVisionPage } from "@/features/church/mission-vision-page";

export const metadata: Metadata = {
  title: "Quiénes Somos",
  description:
    "Conoce la visión, misión y valores de Lluvias de Gloria Eterna: avivamiento permanente, discipulado y bendición a Colombia y las naciones.",
};

export default function QuienesSomosPage() {
  return <MissionVisionPage />;
}
