import { PageHero } from "../../components/PageHero";
import { getWhatsAppUrl, siteConfig } from "../../lib/content";

export default function ContactoPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contacto"
        title="Cuéntanos que detalle tienes en mente."
        description="Responde algunas preguntas basicas y preparamos una propuesta segun tu ocasion, estilo y presupuesto."
      />
      <section className="contact-panel">
        <a className="contact-card" href={getWhatsAppUrl()}>
          <span>WhatsApp</span>
          <strong>Cotizar ahora</strong>
        </a>
        <a className="contact-card" href={siteConfig.facebook} target="_blank" rel="noreferrer">
          <span>Facebook</span>
          <strong>Ver pagina</strong>
        </a>
        <div className="contact-card">
          <span>Zona</span>
          <strong>{siteConfig.location}</strong>
        </div>
      </section>
    </main>
  );
}
