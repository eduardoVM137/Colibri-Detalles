import Image from "next/image";
import { PageHero } from "../../components/PageHero";

export default function SobreNosotrosPage() {
  return (
    <main>
      <PageHero
        eyebrow="Nuestra marca"
        title="Un colibri como simbolo de cuidado, movimiento y belleza."
        description="Colibri Detalles nace para transformar ideas simples en piezas memorables, cuidando color, forma y presentacion."
      />
      <section className="about-section">
        <Image src="/logo-colibri-oficial.jpg" alt="Logo oficial de Colibrí Detalles" width={420} height={420} />
        <div>
          <h2>Detalles con identidad propia.</h2>
          <p>Trabajamos cada pedido como una pieza especial. La meta es que el cliente sienta confianza desde la primera conversacion y que la persona que recibe el detalle note el cuidado en la presentacion.</p>
          <p>La colorimetria dorada y blanca representa calidez, elegancia y celebracion: una base visual limpia para que cada trabajo se vea profesional.</p>
        </div>
      </section>
    </main>
  );
}
