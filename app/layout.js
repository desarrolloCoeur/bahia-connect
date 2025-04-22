import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import "./general-sans.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhastappButton from "./components/WhastappButton";

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
  description: "Evaluación integral para la mejora continua y sostenibilidad de su condominio.",
  keywords:
    "Restaurant La Peñita, La Peñita de Jaltemba, Koral La Peñita, Mixologia la Peñita, Comida La Peñita, Cena La Peñita",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo-dp.png",
    apple: "/logo-dp.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
        <WhastappButton/>
      </body>
    </html>
  );
}
