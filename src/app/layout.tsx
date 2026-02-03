import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll"; 
import TopBar from "@/components/TopBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aqua Sanitarios Tandil",
  description: "Venta de materiales de agua, gas y sanitarios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <SmoothScroll> 
          <TopBar />
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
