import type { Metadata } from "next";
import Image from "next/image";
import { getWhatsAppUrl } from "../../lib/content";

export const metadata: Metadata = {
  title: "Nosotros | Colibrí Detalles",
  description: "Conoce la intención y el cuidado detrás de Colibrí Detalles."
};

export default function SobreNosotrosPage() {
  return (
    <main className="about-page">
      <section className="about-simple">
        <div className="about-simple-copy">
          <p className="eyebrow">Nuestra esencia</p>
          <h1>Creamos para hacer sentir <em>especial</em> a alguien.</h1>
          <p>Colibrí Detalles nace del gusto por convertir una idea sencilla en un regalo con significado. Escuchamos, proponemos y cuidamos la presentación para que cada pieza se sienta verdaderamente personal.</p>
          <div className="about-values">
            <span>Cuidado</span><i>✦</i><span>Calidez</span><i>✦</i><span>Intención</span>
          </div>
          <a className="button primary" href={getWhatsAppUrl("Hola, me gustaría crear un detalle personalizado con ustedes.")}>Conócenos creando juntos <span>↗</span></a>
        </div>
        <div className="about-simple-visual">
          <div className="about-logo-ring">
            <Image src="/logo-colibri-oficial.jpg" alt="Logo oficial de Colibrí Detalles" width={620} height={620} priority />
          </div>
          <p>Detalles que vuelan contigo</p>
          <span className="about-star star-a">✦</span>
          <span className="about-star star-b">✦</span>
        </div>
      </section>
      <section className="about-note">
        <span>01</span>
        <p>No buscamos hacer muchas cosas iguales.</p>
        <h2>Buscamos que la tuya se sienta hecha para ese momento y para esa persona.</h2>
      </section>
    </main>
  );
}
