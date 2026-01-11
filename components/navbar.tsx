import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="flex border-b border-[#0000000f] shadow-sm items-center justify-between p-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
                <span className="flex items-center justify-between text-xl text-primary-100 gap-2"><FontAwesomeIcon icon={faMobileScreenButton} className="bg-primary-100 text-background p-1 py-2 rounded-lg"/>Fixum</span>
            </div>
            <ul className="hidden md:flex gap-6 text-secondary-100">
                <li><Link className=" hover:text-accent-100 transition-colors" href="#servicios">Servicios</Link></li>
                <li><Link className=" hover:text-accent-100 transition-colors" href="#sobre-mi">Sobre mí</Link></li>
                <li><Link className=" hover:text-accent-100 transition-colors" href="#contacto">Contacto</Link></li>
            </ul>
            <Link href="#contacto" className="bg-primary-100 text-background p-2 px-3 text-sm font-bold rounded-lg primary-button">Cotizar</Link>
        </nav>
    )
}