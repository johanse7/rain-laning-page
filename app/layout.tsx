import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.somoslluvias.com/"),
  title: {
    default: "Lluvias de Gloria Eterna",
    template: "%s | Lluvias de Gloria Eterna",
  },
  description:
    "Lluvias de Gloria Eterna es una comunidad cristiana con música, encuentros y contenido para fortalecer tu fe.",
  keywords: [
    "Lluvias de Gloria Eterna",
    "ministerio juvenil cristiano",
    "iglesia cristiana",
    "adoración",
    "eventos cristianos",
  ],
  applicationName: "Lluvias de Gloria Eterna",
  authors: [{ name: "Lluvias de Gloria Eterna" }],
  creator: "Lluvias de Gloria Eterna",
  publisher: "Lluvias de Gloria Eterna",
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Lluvias de Gloria Eterna",
    title: "Lluvias de Gloria Eterna",
    description:
      "Comunidad cristiana con música, encuentros y contenido para fortalecer tu fe.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Lluvias de Gloria Eterna",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lluvias de Gloria Eterna",
    description:
      "Comunidad cristiana con música, encuentros y contenido para fortalecer tu fe.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6912891959088671"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
