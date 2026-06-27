import { getWhatsAppUrl } from "../lib/content";

export function WhatsAppButton() {
  return (
    <a className="whatsapp-float" href={getWhatsAppUrl()} aria-label="Cotizar por WhatsApp">
      Cotizar
    </a>
  );
}
