import site from "../../content/site.json";
import servicios from "../../content/servicios.json";
import trabajos from "../../content/trabajos.json";

export type Project = (typeof trabajos)[number];

export const siteConfig = site;
export const services = servicios;
export const projects = trabajos;

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getWhatsAppUrl(message = "Hola, vengo del sitio web de Colibri Detalles. Quiero cotizar un detalle personalizado.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
