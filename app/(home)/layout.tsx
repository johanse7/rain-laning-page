import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-dvh w-full relative">
      <Header className="fixed inset-x-0 top-0" />
      {children}
      <Footer />
    </main>
  );
}
