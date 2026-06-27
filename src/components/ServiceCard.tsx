import Image from "next/image";

type Service = {
  title: string;
  description: string;
  image: string;
};

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="service-card">
      <Image src={service.image} alt={service.title} width={900} height={680} className="service-image" />
      <div>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    </article>
  );
}
