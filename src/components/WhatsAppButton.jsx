import { SITE_CONFIG } from "../config/site";

export default function WhatsAppButton({ productName }) {
  const { whatsapp } = SITE_CONFIG;
  
  const msg = productName 
    ? encodeURIComponent(`Hi, I am interested in ${productName}. Please share details.`)
    : encodeURIComponent(whatsapp.defaultMessage);

  return (
    <a
      href={`https://wa.me/${whatsapp.phone}?text=${msg}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition"
    >
      WhatsApp
    </a>
  );
}