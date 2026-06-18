import type { Metadata } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frutiva | Aguas Frescas Naturales para Restaurantes",
  description: "Aguas de sabor artesanales hechas con fruta 100% natural. Proveedores locales para restaurantes, cafeterías y eventos. Distribución a domicilio.",
  keywords: ["aguas frescas", "aguas de sabor", "restaurantes", "distribución", "fruta natural", "bebidas naturales"],
  openGraph: {
    title: "Frutiva | Aguas Frescas Naturales",
    description: "El sabor natural que tu restaurante necesita. Distribución local de aguas frescas artesanales.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${dmSerif.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-frutiva-cream text-foreground">
        {children}
      </body>
    </html>
  );
}
