import Link from "next/link";
import { getWhatsAppUrl, siteConfig } from "../lib/content";

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="eyebrow">{siteConfig.brandName}</p>
        <h2>Hacemos realidad detalles con intencion.</h2>
      </div>
      <div className="footer-links">
        <Link href="/trabajos">Trabajos</Link>
        <Link href="/servicios">Servicios</Link>
        <a href={siteConfig.facebook} target="_blank" rel="noreferrer">Facebook</a>
        <a href={getWhatsAppUrl()}>WhatsApp</a>
      </div>
    </footer>
  );
}
