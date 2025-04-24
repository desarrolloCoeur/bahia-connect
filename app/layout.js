import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import "./general-sans.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhastappButton from "./components/WhastappButton";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bahía Connect",
  description:
    "Expertos en administración de condominios, asociaciones civiles y consultoría 360° en Bahía de Banderas, Nayarit. Más de 23 años de experiencia en gestión de propiedades.",
  keywords:
    " Bahía Connect, bahiaconnect ,administración de condominios, gestión de propiedades, Bahía de Banderas, Nayarit, Punta Mita, asociaciones civiles, consultoría inmobiliaria, mantenimiento de propiedades, administración de áreas comunes, servicios inmobiliarios, propiedades vacacionales, inversión inmobiliaria, condominios en playa",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo-dp.png",
    apple: "/logo-dp.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-T2LDE068C6"
        />
        <Script id="google-analytics-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', process.env.GA_ID);
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <WhastappButton />
      </body>
    </html>
  );
}
