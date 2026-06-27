import Image from "next/image";
import Link from "next/link";
import type { Project } from "../lib/content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/trabajos/${project.slug}`} className="project-card">
      <Image src={project.images[0]} alt={project.title} width={900} height={1100} className="project-image" />
      <div className="project-overlay">
        <span>{project.category}</span>
        <h3>{project.title}</h3>
      </div>
    </Link>
  );
}
