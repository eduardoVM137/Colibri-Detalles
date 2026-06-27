import Image from "next/image";
import Link from "next/link";
import { getWhatsAppUrl, siteConfig } from "../lib/content";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <Image src="/logo-colibri-oficial.jpg" alt="" width={40} height={40} />
        <div><strong>{siteConfig.brandName}</strong><small>Detalles hechos con intención.</small></div>
      </div>
      <nav className="footer-links" aria-label="Enlaces del pie">
        <Link href="/trabajos">Trabajos</Link>
        <Link href="/servicios">Servicios</Link>
        <Link href="/contacto">Contacto</Link>
        <a href={siteConfig.facebook} target="_blank" rel="noreferrer">Facebook</a>
        <a href={getWhatsAppUrl()}>WhatsApp</a>
      </nav>
      <small className="footer-copy">© {new Date().getFullYear()} Colibrí Detalles</small>
    </footer>
  );
}
