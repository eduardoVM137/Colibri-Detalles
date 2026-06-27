import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../lib/content";

const navItems = [
  { href: "/trabajos", label: "Trabajos" },
  { href: "/servicios", label: "Servicios" },
  { href: "/sobre-nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" }
];

export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Ir al inicio">
        <Image src="/logo-colibri.svg" alt="Logo Colibri Detalles" width={42} height={42} priority />
        <span>{siteConfig.brandName}</span>
      </Link>
      <nav className="main-nav" aria-label="Navegacion principal">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
