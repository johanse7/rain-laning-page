import type { Metadata } from "next";
import { DonationsPage } from "@/features/donations/donations-page";

export const metadata: Metadata = {
  title: "Donaciones",
  description:
    "Siembra en Lluvias de Gloria Eterna: diezmos y ofrendas por transferencia, Nequi, Daviplata, PSE o de forma presencial.",
};

export default function DonacionesPageRoute() {
  return <DonationsPage />;
}
