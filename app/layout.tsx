import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PR Home Tech | Washing Machine, Fridge, TV & AC Repair in Coimbatore & Pollachi",
  description:
    "Trusted doorstep appliance repair in Coimbatore and Pollachi. Washing machine, fridge, TV and AC repair with fast callback, transparent pricing and service warranty.",
  keywords: [
    "appliance repair Coimbatore",
    "washing machine repair Pollachi",
    "fridge repair Coimbatore",
    "AC service Coimbatore",
    "TV repair Pollachi",
  ],
  openGraph: {
    title: "PR Home Tech | Appliance Repair in Coimbatore & Pollachi",
    description:
      "Doorstep washing machine, fridge, TV and AC repair service. Fast callback, no hidden charges, service warranty.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
