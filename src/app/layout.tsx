import { Space_Grotesk } from "next/font/google";
import "@/style/globals.css";
import { Metadata } from "next";
import Header from "./_components/landing/Header";
import Footer from "./_components/landing/Footer";
import React from "react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body
        className={`${spaceGrotesk.variable} ${spaceGrotesk.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Goku - Goku Uz | Golang dasturlash tili uchun",
  description:
    "Goku Uz - Golang dasturlash tili uchun uzbekcha ochiq&tekin resurslar.",
  keywords:
    "Golang, Go, dasturlash tili, dasturlash, o'qish, o'rganish, resurslar",
  authors: [
    {
      name: "Bekzotovich",
      url: "https://bekzotovich.uz",
    },
  ],
};
