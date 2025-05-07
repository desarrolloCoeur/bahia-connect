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
  title: "About Us | Bahía Connect - Condominium Management Experts",
  description:
    "Meet our team of experts with over 23 years of experience in property and condominium management in Bahía de Banderas, Nayarit.",
  keywords:
    "Bahía Connect team, property management, real estate experience, Bahía de Banderas, Nayarit, Punta Mita, condominium management, real estate professionals, real estate company history",
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
