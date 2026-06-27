import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "../components/ProjectCard";
import { ServiceCard } from "../components/ServiceCard";
import { getFeaturedProjects, getWhatsAppUrl, services, siteConfig } from "../lib/content";

const processSteps = [
  "Cuéntanos tu idea o la ocasion especial.",
  "Definimos estilo, colores y detalles.",
  "Preparamos tu pedido con cuidado.",
  "Recibes un detalle listo para sorprender."
];

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Detalles personalizados</p>
          <h1>{siteConfig.headline}</h1>
          <p>{siteConfig.subheadline}</p>
          <div className="actions">
            <Link className="button primary" href="/trabajos">Ver trabajos</Link>
            <a className="button secondary" href={getWhatsAppUrl()}>Cotizar por WhatsApp</a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Identidad visual de Colibri Detalles">
          <Image src="/logo-colibri.svg" alt="Colibri Detalles" width={520} height={520} priority />
        </div>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">Servicios</p>
          <h2>Ideas personalizadas con acabado profesional.</h2>
        </div>
        <p>Desde regalos hasta recuerdos para eventos, cada pieza se piensa para verse especial, armonica y lista para entregar.</p>
      </section>

      <section className="service-grid">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </section>

      <section className="section section-dark">
        <div className="section-heading">
          <p className="eyebrow">Portafolio</p>
          <h2>Trabajos recientes para inspirar tu siguiente pedido.</h2>
          <Link href="/trabajos">Ver galeria completa</Link>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="section process-section">
        <p className="eyebrow">Proceso</p>
        <h2>Simple para ti, cuidado en cada detalle.</h2>
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <article key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <p className="eyebrow">Cotiza tu idea</p>
        <h2>Un detalle especial empieza con una conversacion.</h2>
        <a className="button primary" href={getWhatsAppUrl()}>Quiero cotizar</a>
      </section>
    </main>
  );
}
