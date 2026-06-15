import type { Metadata } from "next";
import { MinistryYouthPage } from "@/features/youth/ministry-youth-page";

export const metadata: Metadata = {
  title: "Ministerio Juvenil",
  description:
    "Ministerio juvenil cristiano con adoración, amistad, servicio y encuentros para jóvenes con propósito.",
};

export default function MinisterioJuvenilPage() {
  return <MinistryYouthPage />;
}
