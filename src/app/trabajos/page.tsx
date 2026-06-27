import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "../../components/ProjectCard";
import { getWhatsAppUrl, projects } from "../../lib/content";

export const metadata: Metadata = {
  title: "Trabajos | Colibrí Detalles",
  description: "Explora regalos personalizados, recuerdos y decoraciones creadas por Colibrí Detalles."
};

export default function TrabajosPage() {
  const [featured, ...rest] = projects;

  return (
    <main className="work-page">
      <section className="work-hero">
        <div className="work-hero-copy">
          <p className="eyebrow"><span /> Nuestro portafolio</p>
          <h1>Ideas que se volvieron <em>recuerdos.</em></h1>
          <p>Cada pieza empieza con una persona, una ocasión y algo que vale la pena decir. Aquí reunimos algunos detalles que ya encontraron su momento.</p>
          <a className="text-link" href="#galeria">Explorar proyectos <span>↓</span></a>
        </div>
        <div className="work-collage" aria-label="Selección de trabajos de Colibrí Detalles">
          <figure className="collage-main">
            <Image src={featured.images[0]} alt={featured.title} width={1000} height={1200} priority />
          </figure>
          <figure className="collage-small">
            <Image src={projects[1].images[0]} alt={projects[1].title} width={600} height={700} />
          </figure>
          <span className="collage-seal">Hecho con<br /><strong>intención</strong></span>
          <span className="collage-spark">✦</span>
        </div>
      </section>

      <section className="work-manifesto">
        <p>De la primera idea al último listón</p>
        <h2>Diseñamos para que el detalle se sienta personal desde antes de abrirlo.</h2>
        <div className="work-stats">
          <div><strong>100%</strong><span>Personalizable</span></div>
          <div><strong>01</strong><span>Pieza a la vez</span></div>
          <div><strong>∞</strong><span>Formas de sorprender</span></div>
        </div>
      </section>

      <section className="featured-work">
        <div className="featured-media">
          <Image src={featured.images[0]} alt={featured.title} width={1500} height={1000} />
          <span>Proyecto destacado</span>
        </div>
        <div className="featured-copy">
          <p className="eyebrow">{featured.category}</p>
          <h2>{featured.title}</h2>
          <p>{featured.longDescription}</p>
          <Link className="button primary" href={`/trabajos/${featured.slug}`}>Descubrir el proyecto <span>↗</span></Link>
        </div>
      </section>

      <section className="work-gallery" id="galeria">
        <div className="work-gallery-head">
          <div>
            <p className="eyebrow">La colección</p>
            <h2>Cada ocasión tiene su propia forma.</h2>
          </div>
          <div className="work-chips" aria-label="Categorías disponibles">
            <span>Todos</span><span>Regalos</span><span>Eventos</span><span>Decoración</span>
          </div>
        </div>
        <div className="work-masonry">
          {rest.map((project, index) => (
            <div className={`work-entry entry-${index + 1}`} key={project.slug}>
              <ProjectCard project={project} />
              <div className="work-entry-meta">
                <span>0{index + 2}</span>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
          <div className="work-entry entry-repeat">
            <ProjectCard project={featured} />
            <div className="work-entry-meta">
              <span>01</span>
              <p>{featured.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="work-cta">
        <div className="work-cta-orbit" aria-hidden="true" />
        <p className="eyebrow">Ahora imagina el tuyo</p>
        <h2>Tu idea puede ser nuestro próximo trabajo favorito.</h2>
        <a className="button primary" href={getWhatsAppUrl("Hola, vi sus trabajos y quiero crear un detalle personalizado.")}>Empezar por WhatsApp <span>↗</span></a>
      </section>
    </main>
  );
}
