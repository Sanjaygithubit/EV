import WhatsAppButton from "./WhatsAppButton";

export default function ProductOverlay({ product, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center justify-center">
      <div className="bg-white w-full md:max-w-lg rounded-t-2xl md:rounded-xl p-6 relative">
        <button onClick={onClose} className="absolute right-4 top-4">✕</button>

        <div className="h-40 bg-border rounded mb-4" />
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="text-muted mt-2">{product.description}</p>

        <div className="mt-4 flex gap-3">
          <WhatsAppButton productName={product.name} />
          <button className="border px-4 py-2 rounded">Enquiry</button>
        </div>
      </div>
    </div>
  );
}
