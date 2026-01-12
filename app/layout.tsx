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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Fixum', // El nombre que quieres que aparezca
    alternateName: ['Fixum Reparaciones', 'Fixum San Miguel'], // Opcional
    url: 'https://fixum.vercel.app',
  };
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
