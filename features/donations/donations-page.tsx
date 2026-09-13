import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Building2,
  HandHeart,
  HeartHandshake,
  MessageCircle,
  QrCode,
  Smartphone,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionReveal } from "@/shared/components/section-reveal";
import { CopyButton } from "@/features/donations/copy-button";

// ─────────────────────────────────────────────────────────────
// DATOS DE EJEMPLO — reemplazar por las cuentas reales.
// Titular, banco, números y enlaces son placeholders.
// ─────────────────────────────────────────────────────────────
const donationMethods = [
  {
    icon: Building2,
    title: "Transferencia bancaria",
    description: "Diezmos y ofrendas por PSE o transferencia directa.",
    details: [
      ["Banco (ejemplo)", "Bancolombia"],
      ["Tipo de cuenta", "Ahorros"],
      ["Número", "000-000000-00"],
      ["Titular", "Iglesia Lluvias de Gloria Eterna"],
      ["NIT", "900.000.000-0"],
    ],
    copyValue: "000-000000-00",
    copyLabel: "Copiar número",
  },
  {
    icon: Smartphone,
    title: "Nequi / Daviplata",
    description: "La forma más rápida para sembrar desde tu celular.",
    details: [
      ["Nequi (ejemplo)", "300 000 0000"],
      ["Daviplata (ejemplo)", "300 000 0000"],
      ["Titular", "Lluvias de Gloria Eterna"],
    ],
    copyValue: "3000000000",
    copyLabel: "Copiar número",
  },
  {
    icon: Banknote,
    title: "Siembra presencial",
    description: "En cada reunión hay un tiempo especial para ofrendar.",
    details: [
      ["Cuándo", "Viernes 7:00 PM y reuniones especiales"],
      ["Cómo", "Efectivo o datáfono en el punto de bienvenida"],
    ],
    copyValue: null as string | null,
    copyLabel: "",
  },
];

const steps = [
  {
    title: "1. Elige el medio",
    text: "Transferencia, Nequi/Daviplata, botón en línea o de forma presencial.",
  },
  {
    title: "2. Copia los datos",
    text: "Usa el botón de copiar para evitar errores en el número de cuenta.",
  },
  {
    title: "3. Envía tu comprobante",
    text: "Compártelo por WhatsApp para registrar tu siembra y recibir confirmación.",
  },
];

const fundUse = [
  {
    title: "Adoración y reuniones",
    text: "Sonido, espacios y encuentros para que cada persona viva una experiencia con Dios.",
  },
  {
    title: "Ministerio juvenil",
    text: "Grupos de conexión, discipulado y actividades que forman a la próxima generación.",
  },
  {
    title: "Obra social y misión",
    text: "Ayuda a familias, jornadas solidarias y expansión del evangelio en Colombia.",
  },
];

const faqs = [
  {
    q: "¿Recibo un comprobante o certificado?",
    a: "Sí. Envíanos tu comprobante por WhatsApp y te confirmamos la recepción. Si necesitas certificado de donación, indícanos tu nombre completo y documento.",
  },
  {
    q: "¿Puedo donar desde otro país?",
    a: "Sí. Escríbenos por WhatsApp y te compartimos la opción internacional disponible (enlace de pago o cuenta habilitada).",
  },
  {
    q: "¿A quién contacto si tengo dudas?",
    a: "Al equipo de bienvenida o por WhatsApp. Te acompañamos en todo el proceso de tu siembra.",
  },
];

export function DonationsPage() {
  return (
    <div className="min-h-dvh bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.22),_transparent_32%),linear-gradient(180deg,var(--brand-background)_0%,#0b1020_100%)] text-brand-foreground">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 pb-6 pt-2 md:pt-4">
        {/* Introductorio */}
        <SectionReveal>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
            <Badge variant="brandSoft" className="w-fit">
              <HandHeart className="mr-1 size-3.5" />
              Donaciones y ofrendas
            </Badge>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Tu generosidad hace florecer la obra de Dios
            </h1>
            <p className="max-w-2xl text-base leading-7 text-brand-muted sm:text-lg">
              Cada diezmo y ofrenda sostiene la adoración, los grupos de
              conexión, el ministerio juvenil y la ayuda a quienes más lo
              necesitan. Gracias por sembrar con alegría en Lluvias de Gloria
              Eterna.
            </p>
            <p className="max-w-2xl rounded-2xl border border-brand-border/60 bg-brand-surface px-5 py-4 text-sm italic leading-6 text-brand-foreground/85 sm:text-base">
              “Cada uno dé como propuso en su corazón: no con tristeza, ni por
              necesidad, porque Dios ama al dador alegre.” — 2 Corintios 9:7
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button variant="brand" asChild className="rounded-full px-6">
                <Link href="#medios">
                  Ver medios para donar
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button variant="brandOutline" asChild className="rounded-full px-6">
                <a
                  href="https://wa.me/570000000000?text=Hola%2C%20quiero%20enviar%20mi%20comprobante%20de%20donaci%C3%B3n"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-4" />
                  Enviar comprobante
                </a>
              </Button>
            </div>
          </div>
        </SectionReveal>

        {/* Medios para donar */}
        <SectionReveal>
          <div id="medios" className="scroll-mt-24 space-y-2 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
              Cuentas y medios
            </p>
            <h2 className="text-3xl font-black sm:text-4xl">
              Elige cómo sembrar
            </h2>
            <p className="mx-auto max-w-2xl text-brand-muted">
              Datos de ejemplo: reemplázalos por las cuentas oficiales de la
              iglesia antes de publicar.
            </p>
          </div>
        </SectionReveal>

        <div className="grid gap-4 md:grid-cols-3">
          {donationMethods.map((method) => {
            const Icon = method.icon;
            return (
              <SectionReveal key={method.title}>
                <Card variant="surfaceSoft" className="h-full">
                  <CardHeader>
                    <div className="mb-2 inline-flex size-12 items-center justify-center rounded-2xl bg-brand-primary/15 text-brand-primary">
                      <Icon className="size-6" />
                    </div>
                    <CardTitle className="text-2xl text-brand-foreground">
                      {method.title}
                    </CardTitle>
                    <CardDescription className="text-brand-muted">
                      {method.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 pb-6">
                    <dl className="space-y-2 rounded-2xl border border-brand-border bg-brand-surface p-4 text-sm">
                      {method.details.map(([label, value]) => (
                        <div key={label} className="flex items-start justify-between gap-3">
                          <dt className="text-brand-muted">{label}</dt>
                          <dd className="text-right font-bold text-brand-foreground">
                            {value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                    {method.copyValue ? (
                      <CopyButton
                        value={method.copyValue}
                        label={method.copyLabel}
                      />
                    ) : (
                      <p className="flex items-center gap-2 text-sm text-brand-muted">
                        <BadgeCheck className="size-4 text-brand-primary" />
                        Pregunta en bienvenida al llegar.
                      </p>
                    )}
                  </CardContent>
                </Card>
              </SectionReveal>
            );
          })}
        </div>

        {/* Botón en línea + QR */}
        <SectionReveal>
          <div className="grid gap-4 md:grid-cols-2">
            <Card variant="gradient" className="h-full">
              <CardHeader>
                <Badge variant="brandSecondary" className="w-fit">
                  Donación en línea
                </Badge>
                <CardTitle className="text-3xl text-brand-foreground">
                  Dona con tarjeta o PSE
                </CardTitle>
                <CardDescription className="text-brand-foreground/80">
                  Reemplaza este enlace de ejemplo por tu pasarela real
                  (Bold, Wompi, Mercado Pago o PayPal).
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-6">
                <Button variant="brand" asChild className="rounded-full px-6">
                  <a href="https://example.com/donar" target="_blank" rel="noopener noreferrer">
                    <HeartHandshake className="size-4" />
                    Donar en línea (ejemplo)
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card variant="elevated" className="h-full">
              <CardHeader>
                <Badge variant="brandSoft" className="w-fit">
                  <QrCode className="mr-1 size-3.5" />
                  Código QR
                </Badge>
                <CardTitle className="text-3xl text-brand-foreground">
                  Escanea y siembra
                </CardTitle>
                <CardDescription className="text-brand-muted">
                  Agrega tu imagen QR en{" "}
                  <code className="rounded bg-brand-surface px-1.5 py-0.5 text-xs">
                    public/images/donaciones-qr.png
                  </code>{" "}
                  y aparecerá aquí.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-6">
                <div className="flex min-h-40 flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-brand-border bg-brand-surface p-6 text-center">
                  <QrCode className="size-10 text-brand-primary" />
                  <p className="text-sm font-semibold text-brand-foreground">
                    QR disponible próximamente
                  </p>
                  <p className="max-w-sm text-xs leading-5 text-brand-muted">
                    Mientras tanto usa Nequi, transferencia o el botón en
                    línea. Cuando subas el QR lo mostramos con su logo y
                    número asociado.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </SectionReveal>

        {/* Pasos */}
        <SectionReveal>
          <Card variant="surfaceSoft">
            <CardHeader>
              <Badge variant="brandSoft" className="w-fit">Cómo donar</Badge>
              <CardTitle className="text-3xl text-brand-foreground">
                Sembrar toma menos de un minuto
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 pb-6 sm:grid-cols-3">
              {steps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-brand-border bg-brand-surface p-4"
                >
                  <h3 className="font-bold text-brand-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-brand-muted">{step.text}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </SectionReveal>

        {/* Uso de fondos */}
        <SectionReveal>
          <div className="space-y-2 text-center">
            <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
              <Sparkles className="size-4" />
              Transparencia
            </p>
            <h2 className="text-3xl font-black sm:text-4xl">
              ¿En qué se usa tu siembra?
            </h2>
          </div>
        </SectionReveal>

        <div className="grid gap-4 md:grid-cols-3">
          {fundUse.map((item) => (
            <SectionReveal key={item.title}>
              <Card variant="surfaceSoft" className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-brand-foreground">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-brand-muted">
                    {item.text}
                  </CardDescription>
                </CardHeader>
              </Card>
            </SectionReveal>
          ))}
        </div>

        {/* FAQ */}
        <SectionReveal>
          <Card variant="elevated">
            <CardHeader>
              <Badge variant="brandSoft" className="w-fit">Preguntas frecuentes</Badge>
              <CardTitle className="text-3xl text-brand-foreground">
                Dudas comunes al donar
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pb-6">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-brand-border bg-brand-surface p-4"
                >
                  <h3 className="font-bold text-brand-foreground">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-6 text-brand-muted">{faq.a}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </SectionReveal>

        {/* CTA final */}
        <SectionReveal>
          <Card variant="surfaceSoft">
            <CardContent className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                  Gracias por sembrar
                </p>
                <h2 className="text-3xl font-black text-brand-foreground">
                  “Dios ama al dador alegre”
                </h2>
                <p className="max-w-2xl text-brand-muted">
                  Si tienes dudas con tu donación, escríbenos y te acompañamos
                  paso a paso.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button variant="brand" asChild className="rounded-full px-6">
                  <a
                    href="https://wa.me/570000000000?text=Hola%2C%20quiero%20donar%20y%20tengo%20una%20pregunta"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hablar por WhatsApp
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button variant="brandOutline" asChild className="rounded-full px-6">
                  <Link href="/quienes-somos">Nuestra misión y visión</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </SectionReveal>
      </section>
    </div>
  );
}
