import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectBySlug, getWhatsAppUrl, projects } from "../../../lib/content";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Colibri Detalles`,
    description: project.description
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <section className="detail-hero">
        <div>
          <p className="eyebrow">{project.category}</p>
          <h1>{project.title}</h1>
          <p>{project.longDescription}</p>
          <a className="button primary" href={getWhatsAppUrl(`Hola, quiero cotizar un trabajo parecido a: ${project.title}`)}>
            Cotizar algo parecido
          </a>
        </div>
        <Image src={project.images[0]} alt={project.title} width={1200} height={1400} className="detail-image" priority />
      </section>
      <section className="gallery-strip">
        {project.images.map((image) => (
          <Image key={image} src={image} alt={project.title} width={900} height={700} />
        ))}
      </section>
    </main>
  );
}
