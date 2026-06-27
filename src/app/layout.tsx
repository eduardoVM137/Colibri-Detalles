import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { siteConfig } from "../lib/content";

const display = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });
const sans = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: `${siteConfig.brandName} | Detalles personalizados`,
  description: siteConfig.subheadline,
  icons: {
    icon: "/logo-colibri.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${display.variable} ${sans.variable}`}>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
