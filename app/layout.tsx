import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import "../lib/fontawesome"; 
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsappbutton";


const inter = Inter(
  {
    subsets: ["latin"],
    variable: "--font-inter",
  }
);

const montserrat = Montserrat(
  {
    subsets: ["latin"],
    variable: "--font-montserrat",
  }
);

export const metadata: Metadata = {
  title: "Fixum | Reparación de dispositivos móviles",
  description: "Fixum es tu solución confiable para el diagnóstico y reparación de tu teléfono celular. Ofrecemos servicios rápidos y profesionales para que tu dispositivo vuelva a funcionar como nuevo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased`}
      >
        <header className="sticky top-0 z-50 bg-background">
          <Navbar/>
        </header>
        {children}
        <Footer/>
        <WhatsAppButton/>
      </body>
    </html>
  );
}
