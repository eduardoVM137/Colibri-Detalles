"use client";

import { FormEvent, useState } from "react";
import { getWhatsAppUrl } from "../lib/content";

export function ContactForm() {
  const [sending, setSending] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    const data = new FormData(event.currentTarget);
    const message = [
      "Hola, vengo del sitio web de Colibrí Detalles.",
      `Mi nombre es ${data.get("name")}.`,
      `Busco: ${data.get("occasion")}.`,
      `Fecha aproximada: ${data.get("date") || "por definir"}.`,
      `Mi idea: ${data.get("message")}.`
    ].join("\n");

    window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    window.setTimeout(() => setSending(false), 700);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="contact-name">Nombre</label>
        <input id="contact-name" name="name" autoComplete="name" placeholder="Tu nombre" required />
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="contact-occasion">Ocasión</label>
          <select id="contact-occasion" name="occasion" defaultValue="Cumpleaños">
            <option>Cumpleaños</option>
            <option>Evento</option>
            <option>Regalo personalizado</option>
            <option>Decoración</option>
            <option>Otro</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="contact-date">Fecha</label>
          <input id="contact-date" name="date" type="date" />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="contact-message">Cuéntanos tu idea</label>
        <textarea id="contact-message" name="message" rows={6} placeholder="Colores, temática, cantidad o cualquier detalle que imagines..." required />
      </div>
      <button type="submit" disabled={sending}>
        <span>{sending ? "Abriendo WhatsApp…" : "Enviar solicitud"}</span>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </button>
      <p className="form-note">Al enviar, continuaremos tu solicitud por WhatsApp.</p>
    </form>
  );
}
