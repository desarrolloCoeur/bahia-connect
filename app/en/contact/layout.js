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
    "Contact | Bahía Connect - Property Management in Bahía de Banderas",
  description:
    "Contact us for condominium management services, real estate consulting and property management in Bahía de Banderas, Nayarit. Located in Nuevo Vallarta Business Center.",
  keywords:
    "Bahía Connect contact, condominium management, real estate consulting, Bahía de Banderas, Nayarit, Nuevo Vallarta, Business Center, property management, real estate contact",
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
