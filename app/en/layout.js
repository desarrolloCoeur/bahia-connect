import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
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
  description:
    "Experts in condominium administration, civil associations, and 360° consulting in Bahía de Banderas, Nayarit. Over 23 years of experience in property management.",
  keywords:
    "Bahía Connect, bahiaconnect, condominium administration, property management, Bahía de Banderas, Nayarit, Punta Mita, civil associations, real estate consulting, property maintenance, common area management, real estate services, vacation properties, real estate investment, beach condominiums",
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
        <Navbar />
        {children}
        <Footer />
        <WhastappButton />
      </body>
    </html>
  );
}
