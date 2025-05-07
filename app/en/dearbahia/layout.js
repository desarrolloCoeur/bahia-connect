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
    "Dear Bahía | Bahía Connect",
  description:
    "Dear Bahía is our organization's chapter or section where we like to recognize and incentivize more actions from our clients and projects we work with. We clearly understand the importance of contributing to maintain or improve our environment, and here we'd like to invite everyone to appreciate and give back to everything the bay has offered us.",
  keywords:
    "Dear Bahia",
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
