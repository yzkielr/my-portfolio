import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Pastikan path ini sesuai dengan lokasi file Navbar kamu

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mi Portfolio | Hire Me Pls",
  description: "Portfolio profesional yang menjembatani desain antarmuka intuitif dengan analisis data yang mendalam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Menambahkan scroll-smooth agar navigasi anchor (#) terasa halus
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#020617]`}
      >
        {/* Navbar diletakkan di sini agar muncul di semua halaman */}
        <Navbar />
        
        {/* Konten utama dari page.tsx akan muncul di sini */}
        {children}
      </body>
    </html>
  );
}