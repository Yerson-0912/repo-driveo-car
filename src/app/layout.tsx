import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Driveo Car | Viaja a tu manera",
  description:
    "Transporte interurbano cómodo y confiable. Planea tu viaje y solicita una cotización por WhatsApp.",
  applicationName: "Driveo Car",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
