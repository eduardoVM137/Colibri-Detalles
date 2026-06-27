import { PageHero } from "../../components/PageHero";
import { ProjectCard } from "../../components/ProjectCard";
import { projects } from "../../lib/content";

export default function TrabajosPage() {
  return (
    <main>
      <PageHero
        eyebrow="Portafolio"
        title="Trabajos creados para momentos especiales."
        description="Explora ejemplos de detalles, regalos y decoraciones. Cada trabajo puede inspirar una nueva version hecha para ti."
      />
      <section className="project-grid page-grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </main>
  );
}
