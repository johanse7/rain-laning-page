import { HeroContainer } from "@/components/hero/HeroContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Conoce Lluvias de Gloria Eterna, una comunidad cristiana con adoración, eventos y espacios para crecer en la fe.",
};

export default function Home() {
  return <HeroContainer />;
}
