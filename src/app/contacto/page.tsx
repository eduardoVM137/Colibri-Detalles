import type { Metadata } from "next";
import { ContactForm } from "../../components/ContactForm";
import { getWhatsAppUrl, siteConfig } from "../../lib/content";

export const metadata: Metadata = {
  title: `Contacto | ${siteConfig.brandName}`,
  description: "Cuéntanos qué detalle tienes en mente y recibe una cotización personalizada."
};

function MailIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18v14H3z" /><path d="m3 7 9 6 9-6" /></svg>;
}

function MessageIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-8.5 8 9 9 0 0 1-3.8-.9L3 20l1.4-4.5A8.5 8.5 0 1 1 20 11.5Z" /></svg>;
}

function PinIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
}

export default function ContactoPage() {
  return (
    <main className="contact-main">
      <section className="contact-hero">
        <div className="contact-atmosphere" aria-hidden="true">
          <span className="contact-orb" />
          <span className="contact-glow" />
          <span className="contact-dots" />
        </div>
        <div className="contact-grid">
          <div className="contact-copy">
            <span className="contact-pill">Contacto</span>
            <h1>Hablemos de tu detalle.</h1>
            <p>Cuéntanos qué ocasión quieres celebrar, la fecha y la idea que tienes en mente. Nosotros le damos forma.</p>
            <div className="contact-lines">
              <a href={`mailto:${siteConfig.email}`}>
                <span><MailIcon /></span>
                <small>Correo</small>
                {siteConfig.email}
              </a>
              <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
                <span><MessageIcon /></span>
                <small>WhatsApp</small>
                Cotiza directamente
              </a>
              <div>
                <span><PinIcon /></span>
                <small>Zona</small>
                {siteConfig.location}
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
