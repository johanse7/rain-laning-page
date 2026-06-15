import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/Header";
import { SiteSidebar } from "@/components/site-sidebar";

export default function InternalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-dvh bg-brand-background text-brand-foreground md:pl-72">
      <SiteSidebar />
      <div className="flex min-h-dvh flex-col">
        <Header />
        <main className="flex-1 px-4 py-6 pb-28 md:px-8 md:pb-32">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
