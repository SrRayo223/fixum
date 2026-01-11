import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMobileScreen, faDroplet, faBolt, faMicrochip, faWrench, faBattery, faHeart, faClock, faDollarSign, faShield, faEnvelope, faLocation, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

const servicios = [
  {
    icon: faMobileScreen,
    title: 'Reparación de Pantalla',
    description: 'Cambio de pantallas rotas o astilladas con repuestos de calidad para todas las marcas.',
  },
  {
    icon: faBattery,
    title: 'Cambio de Batería',
    description: 'Instalación de baterías nuevas para que tu celular vuelva a durar todo el día.',
  },
  {
    icon: faDroplet,
    title: 'Daño por Agua',
    description: 'Evaluación y limpieza de dispositivos con daño por líquidos para intentar recuperarlos.',
  },
  {
    icon: faWrench,
    title: 'Reparación de Hardware',
    description: 'Soluciono problemas de botones, cámaras, altavoces y otros componentes.',
  },
  {
    icon: faBolt,
    title: 'Puerto de Carga',
    description: 'Reparación o reemplazo de puertos de carga que no funcionan correctamente.',
  },
  {
    icon: faMicrochip,
    title: 'Problemas de Software',
    description: 'Ayuda con actualizaciones, reseteos y optimización del rendimiento de tu celular.',
  },
];

const caracteristicas = [
  {
    icon: faHeart,
    title: 'Atención Personalizada',
    description: 'Cada reparación recibe mi total atención',
  },
  {
    icon: faClock,
    title: 'Tiempo de Respuesta',
    description: 'Trabajo rápido sin comprometer la calidad',
  },
  {
    icon: faDollarSign,
    title: 'Precios Justos',
    description: 'Presupuestos claros sin sorpresas',
  },
  {
    icon: faShield,
    title: 'Compromiso con la Calidad',
    description: 'Repuestos confiables y trabajo cuidadoso',
  },
];

const contactInfo = [
  {
    icon: faWhatsapp,
    title: 'WhatsApp',
    content: '11 4038-6681',
    href: 'https://wa.me/541140386681',
  },
  {
    icon: faEnvelope,
    title: 'Email',
    content: 'fixum.reparaciones@outlook.com',
    href: 'mailto:fixum.reparaciones@outlook.com',
  },
  {
    icon: faLocationDot,
    title: 'Zona de encuentro',
    content: 'San Miguel, Buenos Aires',
    href: 'https://maps.app.goo.gl/DXJu3nfmMkTgJjgs7',
  },
];

export const metadata: Metadata = {
  title: 'Fixum | Reparación de Celulares en San Miguel',
  description: 'Reparación de celulares en San Miguel con atención personalizada y repuestos de calidad. ¡Contactame hoy mismo!',
  keywords: ['reparación de celulares', 'reparación de teléfonos', 'servicio técnico móvil', 'reparación de pantallas', 'cambio de baterías', 'reparación de hardware', 'San Miguel', 'Buenos Aires', 'técnico', 'fixum', 'pin de carga', 'daño por agua', 'problemas de software', 'servicio rápido', 'barato', 'calidad', 'premium', 'atención personalizada', 'cámara', 'altavoz', 'botones', 'diagnóstico gratuito', 'presupuesto'],
  openGraph: {
    title: 'Fixum | Reparación de Celulares en San Miguel',
    description: 'Reparación de celulares en San Miguel con atención personalizada y repuestos de calidad. ¡Contactame hoy mismo!',
    url: 'https://fixum-reparaciones.vercel.app',
    siteName: 'Fixum Reparaciones',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    title: 'Fixum | Reparación de Celulares en San Miguel',
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      nocache: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  }
};

export default function Home() {
  return (
    <main>
      <section className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen p-4 gap-4 bg-linear-to-br from-primary-100 to-[#3b4ac2] py-20">
        <div className="flex flex-col text-background gap-4">
          <h1 className="text-4xl font-bold">Reparación de Celulares con dedicación</h1>
          <p className="text-lg">Reparo tu celular con atención personalizada y repuestos de calidad. Cada dispositivo recibe mi total dedicación para dejarlo como nuevo.</p>
          <div className="self-start flex gap-4 mt-2 flex-wrap">
            <Link href="#servicios" className="bg-accent-100 text-background p-3 px-5 text-sm font-bold rounded-lg secondary-button">Ver Servicios</Link>
            <Link href="#contacto" className="bg-background text-primary-100 p-3 px-5 text-sm font-bold rounded-lg primary-button">Contactame</Link>
          </div>
        </div>
        <Image
          src="/images/hero-image.jpg"
          alt="Técnico reparando un celular dañado en San Miguel."
          width={1080}
          height={720}
          className="rounded-lg shadow-lg mt-4 lg:max-w-1/2 h-auto"
        />
      </section>
      <section id="servicios" className="bg-[#e0e0e0] flex flex-col items-center gap-6 text-center py-20 px-4">
        <h2 className="text-3xl text-primary-100">Servicios que Ofrezco</h2>
        <p className="text-xl text-secondary-100 mx-auto">Diagnósticos y restauraciones realizados con cuidado para las necesidades de tu celular.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {servicios.map((servicio, index) => (
            <article key={index}>
              <Card className="p-6 hover:shadow-lg transition-shadow text-start flex flex-col justify-between min-h-full">
                <div className="bg-accent-100/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={servicio.icon} className="w-6 h-6 text-accent-100" />
                </div>
                  <CardTitle className="text-xl mb-2 text-accent-100">{servicio.title}</CardTitle>
                  <CardDescription className="text-secondary-100">{servicio.description}</CardDescription>
              </Card>
            </article>
          ))}
        </div>
      </section>
      <section id="sobre-mi" className="grid grid-cols-1 lg:grid-cols-2 items-center bg-background text-secondary-100 py-20 px-4 gap-12">
        <div>
          <Image alt="Celular con daño en la tapa trasera." src="/images/celular-roto.jpg" width={1080} height={648} className="rounded-lg shadow-lg w-full h-auto"/>
        </div>
        <div className="mt-8">
          <h2 className="text-3xl text-primary-100 mb-4">¿Por Qué Elegirme?</h2>
          <p className="text-lg mb-6">Como técnico independiente, ofrezco un servicio personalizado y atención al detalle que las grandes tiendas no pueden igualar. Cada reparación recibe mi total dedicación para asegurar que tu celular funcione perfectamente.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {caracteristicas.map((caracteristica, index) => (
              <article key={index} className="flex items-center gap-4 mb-6">
                <div className="bg-accent-100/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={caracteristica.icon} className="w-6 h-6 text-accent-100" />
                </div>
                <div>
                  <h3 className="text-xl text-primary-100 mb-1">{caracteristica.title}</h3>
                  <p className="text-sm">{caracteristica.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="contacto" className="bg-[#e0e0e0] flex flex-col items-center gap-6 text-center py-20 px-4">
        <h2 className="text-primary-100 text-3xl">Contactame</h2>
        <p className="text-secondary-100 text-xl mx-auto">¿Tenés preguntas o querés reservar una reparación? Estoy para ayudarte!</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 w-full max-w-4xl">
          {contactInfo.map((info, index) => (
            <article key={index}>
              <Link key={index} href={info.href} target="_blank" className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center gap-4 min-h-full">
                <div className="bg-accent-100/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={info.icon} className="w-6 h-6 text-accent-100" />
                </div>
                <h3 className="text-xl text-primary-100">{info.title}</h3>
                <p className="text-secondary-100">{info.content}</p>
              </Link>
            </article>

          ))}
        </div>
      </section>
    </main>
  );
}
