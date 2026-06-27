"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getWhatsAppUrl, siteConfig } from "../lib/content";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/trabajos", label: "Trabajos" },
  { href: "/contacto", label: "Contacto" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Colibrí Detalles, inicio" onClick={() => setOpen(false)}>
        <Image src="/logo-colibri.svg" alt="" width={46} height={46} priority />
        <span><strong>{siteConfig.brandName.split(" ")[0]}</strong><small>Detalles</small></span>
      </Link>
      <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Navegación principal">
        {navItems.map((item) => (
          <Link className={pathname === item.href ? "is-active" : ""} href={item.href} key={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <a className="mobile-nav-cta" href={getWhatsAppUrl()}>Cotizar por WhatsApp</a>
      </nav>
      <a className="header-cta" href={getWhatsAppUrl()}>Hablemos de tu idea</a>
      <button className="nav-toggle" type="button" aria-label={open ? "Cerrar navegación" : "Abrir navegación"} aria-expanded={open} onClick={() => setOpen(!open)}>
        <span /><span /><span />
      </button>
    </header>
  );
}
