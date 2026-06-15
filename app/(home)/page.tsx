import type { Metadata } from "next";
import { HomePage } from "@/features/home/home-page";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Conoce Lluvias de Gloria Eterna, una comunidad cristiana con adoracion, eventos y espacios para crecer en la fe.",
};

export default function Home() {
  return <HomePage />;
}
