import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // librería react-icons

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/5491140386681?text=Hola%20Fixum%2C%20quiero%20consultar%20por%20una%20reparación"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white px-3 py-4 rounded-full shadow-lg hover:bg-green-600 transition justify-center items-center flex z-50"
    >
      <FontAwesomeIcon icon={faWhatsapp} className='text-3xl' />
    </Link>
  );
}
