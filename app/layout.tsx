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
  title: "Fixum | Reparación y diagnóstico de Celulares en San Miguel",
  description: "Reparación de celulares en San Miguel con atención personalizada y repuestos de calidad. ¡Contactame hoy mismo!",
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
