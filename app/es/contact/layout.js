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
  title:
    "Contacto | Bahía Connect - Administración de Propiedades en Bahía de Banderas",
  description:
    "Contáctanos para servicios de administración de condominios, consultoría inmobiliaria y gestión de propiedades en Bahía de Banderas, Nayarit. Ubicados en Centro Empresarial Nuevo Vallarta.",
  keywords:
    "contacto Bahía Connect, administración condominios, consultoría inmobiliaria, Bahía de Banderas, Nayarit, Nuevo Vallarta, Centro Empresarial, gestión propiedades, contacto inmobiliaria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
