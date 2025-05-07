import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nosotros | Bahía Connect - Expertos en Administración de Condominios",
  description:
    "Conoce nuestro equipo de expertos con más de 23 años de experiencia en administración de propiedades y condominios en Bahía de Banderas, Nayarit.",
  keywords:
    "equipo Bahía Connect, administración de propiedades, experiencia inmobiliaria, Bahía de Banderas, Nayarit, Punta Mita, gestión de condominios, profesionales inmobiliarios, historia empresa inmobiliaria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
