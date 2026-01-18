export default function WhatsAppButton({ productName }) {
  const phone = "919XXXXXXXXX";
  const msg = encodeURIComponent(
    `Hi, I am interested in ${productName}. Please share details.`
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${msg}`}
      target="_blank"
      className="bg-primary text-white px-4 py-2 rounded"
    >
      WhatsApp
    </a>
  );
}
