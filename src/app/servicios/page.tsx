import { PageHero } from "../../components/PageHero";
import { ServiceCard } from "../../components/ServiceCard";
import { services } from "../../lib/content";

export default function ServiciosPage() {
  return (
    <main>
      <PageHero
        eyebrow="Servicios"
        title="Soluciones visuales para regalar, decorar y sorprender."
        description="Elige una categoria base y la adaptamos a tu ocasion, colores, presupuesto y estilo."
      />
      <section className="service-grid page-grid">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </section>
    </main>
  );
}
