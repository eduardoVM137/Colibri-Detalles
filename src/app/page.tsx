import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "../components/ProjectCard";
import { ServiceCard } from "../components/ServiceCard";
import { getFeaturedProjects, getWhatsAppUrl, services, siteConfig } from "../lib/content";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Colibri Detalles</p>
          <h1>{siteConfig.headline}</h1>
          <p>{siteConfig.subheadline}</p>
          <div className="actions">
            <Link className="button primary" href="/trabajos">Ver trabajos</Link>
            <a className="button secondary" href={getWhatsAppUrl()}>Cotizar por WhatsApp</a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Identidad visual de Colibri Detalles">
          <span className="flight-path" />
          <Image className="hero-logo" src="/logo-colibri.svg" alt="Colibri Detalles" width={520} height={520} priority />
        </div>
      </section>

      <section className="service-grid visual-only-grid" aria-label="Servicios destacados">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </section>

      <section className="section section-dark compact-section">
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <Link className="gallery-link" href="/trabajos">Ver mas trabajos</Link>
      </section>

      <section className="soft-close" aria-label="Cotizacion">
        <a className="button primary" href={getWhatsAppUrl()}>Quiero cotizar</a>
      </section>
    </main>
  );
}
