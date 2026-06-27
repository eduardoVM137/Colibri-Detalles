import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import { getWhatsAppUrl, services } from "../../lib/content";

export const metadata: Metadata = {
  title: "Servicios | Colibrí Detalles",
  description: "Regalos personalizados, recuerdos para eventos y decoración temática hecha para tu ocasión."
};

const serviceDetails = [
  {
    kicker: "Para regalar",
    lead: "Un detalle que habla de esa persona.",
    bullets: ["Cumpleaños y aniversarios", "Colores y temática a elección", "Presentación lista para entregar"]
  },
  {
    kicker: "Para compartir",
    lead: "Una parte de tu celebración que todos pueden llevarse.",
    bullets: ["Bodas, bautizos y reuniones", "Opciones por cantidad", "Diseño coordinado con tu evento"]
  },
  {
    kicker: "Para transformar",
    lead: "El ambiente que imaginaste, llevado a cada rincón.",
    bullets: ["Concepto visual personalizado", "Paleta de color armonizada", "Detalles que elevan la experiencia"]
  }
];

export default function ServiciosPage() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div>
          <p className="eyebrow">Lo hacemos especial</p>
          <h1>Elige una idea.<br />Nosotros le damos <em>alma.</em></h1>
          <p>Partimos de lo que quieres celebrar y creamos una propuesta a tu estilo, presupuesto y fecha.</p>
          <a className="button primary" href="#servicios">Descubrir opciones <span>↓</span></a>
        </div>
        <div className="services-hero-stack" aria-hidden="true">
          {services.map((service, index) => (
            <figure key={service.title} style={{ "--card-index": index } as CSSProperties}>
              <Image src={service.image} alt="" width={620} height={760} priority={index === 0} />
            </figure>
          ))}
          <span>Hecho a tu medida</span>
        </div>
      </section>

      <section className="services-intro">
        <p className="eyebrow">Tres formas de sorprender</p>
        <h2>Cuéntanos el momento.<br />Nosotros encontramos la forma.</h2>
      </section>

      <section className="services-showcase" id="servicios">
        {services.map((service, index) => {
          const detail = serviceDetails[index];
          return (
            <article className="service-feature" key={service.title}>
              <div className="service-feature-image">
                <Image src={service.image} alt={service.title} width={1200} height={1000} />
                <span>0{index + 1}</span>
              </div>
              <div className="service-feature-copy">
                <p className="eyebrow">{detail.kicker}</p>
                <h2>{service.title}</h2>
                <h3>{detail.lead}</h3>
                <p>{service.description}</p>
                <ul>
                  {detail.bullets.map((bullet) => <li key={bullet}><span>✓</span>{bullet}</li>)}
                </ul>
                <a className="button primary" href={getWhatsAppUrl(`Hola, me interesa el servicio de ${service.title}. Quiero conocer opciones.`)}>
                  Quiero saber más <span>↗</span>
                </a>
              </div>
            </article>
          );
        })}
      </section>

      <section className="services-trust">
        <p>¿No sabes exactamente qué elegir?</p>
        <h2>Está bien. Cuéntanos la ocasión y te ayudamos a aterrizar una idea bonita.</h2>
        <a className="button primary" href={getWhatsAppUrl("Hola, tengo una ocasión especial pero aún no sé qué detalle elegir. ¿Me ayudan?")}>Ayúdenme a elegir <span>↗</span></a>
      </section>
    </main>
  );
}
