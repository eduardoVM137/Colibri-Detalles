import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { ServiceCard } from "../components/ServiceCard";
import { getFeaturedProjects, getWhatsAppUrl, services, siteConfig } from "../lib/content";

const steps = [
  ["01", "Cuéntanos tu idea", "Compártenos la ocasión, los colores y la fecha que tienes en mente."],
  ["02", "Creamos la propuesta", "Damos forma a una opción bonita, clara y ajustada a tu presupuesto."],
  ["03", "Preparamos tu detalle", "Cuidamos cada acabado para que llegue listo para sorprender."]
];

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <main className="home">
      <section className="hero">
        <div className="hero-aurora" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Hecho especialmente para ti</p>
          <h1>Detalles que <em>vuelan</em> contigo.</h1>
          <p>{siteConfig.subheadline} Convertimos momentos importantes en algo que se puede tocar, guardar y recordar.</p>
          <div className="actions">
            <a className="button primary magnetic-button" href={getWhatsAppUrl()}>Crear mi detalle <span>↗</span></a>
            <Link className="text-link" href="/trabajos">Explorar trabajos <span>→</span></Link>
          </div>
          <div className="hero-proof">
            <span>Hecho a medida</span><i />
            <span>Atención personal</span><i />
            <span>Entrega con cuidado</span>
          </div>
        </div>
        <div className="hero-stage" aria-label="Identidad visual de Colibrí Detalles">
          <div className="logo-particles" aria-hidden="true">
            {Array.from({ length: 14 }, (_, index) => <span key={index} style={{ "--particle": index } as CSSProperties} />)}
          </div>
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-logo-wrap">
            <Image className="hero-logo" src="/logo-colibri-oficial.jpg" alt="Colibrí Detalles" width={620} height={620} priority />
          </div>
          <span className="hero-tag tag-one">Ideas únicas</span>
          <span className="hero-tag tag-two">Para celebrar</span>
          <span className="hero-spark spark-one">✦</span>
          <span className="hero-spark spark-two">✦</span>
        </div>
        <a className="scroll-cue" href="#descubre"><span /> Descubre</a>
      </section>

      <div className="home-marquee" aria-label="Servicios de Colibrí Detalles">
        <div>
          <span>Regalos personalizados</span><b>✦</b>
          <span>Momentos memorables</span><b>✦</b>
          <span>Decoración especial</span><b>✦</b>
          <span>Hecho con intención</span><b>✦</b>
          <span>Regalos personalizados</span><b>✦</b>
          <span>Momentos memorables</span><b>✦</b>
        </div>
      </div>

      <section className="home-intro" id="descubre">
        <p className="eyebrow">Pequeños detalles, grandes historias</p>
        <h2>No hacemos regalos genéricos. Creamos una pieza que diga <em>“pensé en ti”.</em></h2>
        <p className="intro-side">Cada color, textura y acabado se elige para contar algo de quien regala y de quien recibe.</p>
      </section>

      <section className="home-services">
        <div className="home-section-head">
          <div>
            <p className="eyebrow">Lo que creamos</p>
            <h2>Una idea para cada ocasión.</h2>
          </div>
          <Link className="text-link" href="/servicios">Ver servicios <span>→</span></Link>
        </div>
        <div className="service-grid visual-only-grid">
          {services.map((service, index) => (
            <div className="service-item" key={service.title}>
              <span className="service-number">0{index + 1}</span>
              <ServiceCard service={service} />
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-work section-dark">
        <div className="home-section-head">
          <div>
            <p className="eyebrow">Trabajo reciente</p>
            <h2>Detalles que ya encontraron su momento.</h2>
          </div>
          <Link className="text-link light-link" href="/trabajos">Ver portafolio <span>→</span></Link>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="home-process">
        <div className="process-title">
          <p className="eyebrow">Así de sencillo</p>
          <h2>De tu idea a sus manos.</h2>
        </div>
        <div className="process-list">
          {steps.map(([number, title, copy]) => (
            <article className="process-step" key={number}>
              <span>{number}</span>
              <div><h3>{title}</h3><p>{copy}</p></div>
              <i>↗</i>
            </article>
          ))}
        </div>
      </section>

      <section className="home-final">
        <div className="final-rings" aria-hidden="true" />
        <Image src="/logo-colibri-oficial.jpg" alt="" width={96} height={96} />
        <p className="eyebrow">Tu próximo detalle empieza aquí</p>
        <h2>¿Qué momento quieres hacer inolvidable?</h2>
        <a className="button primary" href={getWhatsAppUrl()}>Cuéntanos tu idea <span>↗</span></a>
      </section>
    </main>
  );
}
