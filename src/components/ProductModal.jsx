import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function ProductModal({ product, onClose }) {

  /* 🔥 CONTROL BODY SCROLL SAFELY */
  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [product]);

  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* 🔥 BLUR BACKDROP */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-lg"
          onClick={onClose}
        />

        {/* 🔥 MODAL CARD */}
        <motion.div
          initial={{ scale: 0.96, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.96, opacity: 0, y: 30 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="
            relative
            bg-white
            rounded-3xl
            w-full
            max-w-4xl
            max-h-[85vh]
            overflow-hidden
            shadow-2xl
            z-10
          "
        >
          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute top-5 right-6 text-gray-400 hover:text-gray-700 text-2xl"
          >
            ✕
          </button>

          <div className="overflow-y-auto max-h-[85vh] p-8">

            <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
              {product.category}
            </span>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {product.name}
            </h2>

            {product.image && (
              <div className="mb-8 rounded-xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a
                href={`https://wa.me/91XXXXXXXXXX?text=I'm interested in ${product.name}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-primary text-white text-center py-2.5 text-sm rounded-xl font-medium hover:bg-primary/90 transition"
              >
                WhatsApp Enquiry
              </a>

              <button className="flex-1 border border-gray-300 py-2.5 text-sm rounded-xl font-medium hover:bg-gray-100 transition">
                Submit Enquiry
              </button>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-2">Specifications</h4>
              <p className="text-gray-600 text-sm">{product.specs}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Description</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {product.description ||
                  "High-quality EV spare part designed for durability and performance."}
              </p>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
