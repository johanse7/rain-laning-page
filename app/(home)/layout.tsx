import { HomeShell } from "@/shared/layouts/home-shell";

export default function InternalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <HomeShell>{children}</HomeShell>;
}
