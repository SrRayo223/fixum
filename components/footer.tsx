import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons/faMobileScreenButton";
import { faFacebook, faInstagram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  {
    icon: faFacebook,
    href: 'https://www.facebook.com/people/Fixum/61586219315432/',
    label: 'Facebook',
  },
  {
    icon: faTiktok,
    href: 'https://www.tiktok.com/@fixum.reparaciones',
    label: 'TikTok',
  },
  {
    icon: faInstagram,
    href: 'https://instagram.com/fixum.reparaciones',
    label: 'Instagram',
  },
  {
    icon: faYoutube,
    href: 'https://youtube.com/@FixumReparaciones',
    label: 'YouTube',
  },
];

export default function Footer() {
    return (
        <footer className="bg-linear-to-br from-primary-100 to-[#3b4ac2] text-background p-4 py-12 border-t border-primary-100/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                    <div className="bg-accent-100 p-2 rounded-lg">
                        <FontAwesomeIcon icon={faMobileScreenButton} className="w-6 h-6 text-background" />
                    </div>
                    <span className="logo text-xl">Fixum</span>
                    </div>
                    <p className="opacity-80">
                    Reparación de celulares con dedicación y atención personalizada.
                    </p>
                </div>

                <div>
                    <h3 className="mb-4">Enlaces Rápidos</h3>
                    <ul className="space-y-2">
                    <li>
                        <a href="#servicios" className="opacity-80 hover:opacity-100 hover:text-accent-100 transition-colors">
                        Servicios
                        </a>
                    </li>
                    <li>
                        <a href="#sobre-mi" className="opacity-80 hover:opacity-100 hover:text-accent-100 transition-colors">
                        Nosotros
                        </a>
                    </li>
                    <li>
                        <a href="#contacto" className="opacity-80 hover:opacity-100 hover:text-accent-100 transition-colors">
                        Contacto
                        </a>
                    </li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-4">Seguinos</h3>
                    <div className="flex gap-4">
                    {socialLinks.map((social, index) => {
                        const Icon = social.icon;
                        return (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary-100/40 w-10 h-10 rounded-full flex items-center justify-center hover:bg-accent-100 hover:text-primary-100 transition-colors"
                            aria-label={social.label}
                        >
                            <FontAwesomeIcon icon={Icon} className="w-5 h-5" />
                        </a>
                        );
                    })}
                    </div>
                </div>
                </div>

                <div className="border-t border-primary-foreground/20 dark:border-gray-800 pt-8 text-center opacity-80">
                <p>&copy; {new Date().getFullYear()} Fixum. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}