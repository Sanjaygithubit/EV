import { motion, AnimatePresence } from "framer-motion";

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* BACKDROP */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={onClose}
        />

        {/* MODAL */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260 }}
          className="
            relative
            bg-white
            rounded-3xl
            w-full
            max-w-4xl
            max-h-[85vh]
            overflow-hidden
            shadow-xl
            z-50
          "
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl"
          >
            ✕
          </button>

          {/* SCROLLABLE CONTENT */}
          <div className="overflow-y-auto max-h-[85vh] p-8">
            {/* CATEGORY TAG */}
            <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
              {product.category}
            </span>

            {/* TITLE */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {product.name}
            </h2>

            {/* IMAGE */}
            {product.image && (
              <div className="mb-6 rounded-xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
              </div>
            )}

            {/* SPECIFICATIONS */}
            <div className="mb-5">
              <h4 className="font-semibold text-gray-900 mb-1">
                Specifications
              </h4>
              <p className="text-gray-600 text-sm">
                {product.specs}
              </p>
            </div>

            {/* DESCRIPTION */}
            <div className="mb-8">
              <h4 className="font-semibold text-gray-900 mb-1">
                Description
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {product.description ||
                  "High-quality EV spare part designed for durability and performance."}
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/91XXXXXXXXXX?text=I'm interested in ${product.name}`}
                target="_blank"
                className="
                  flex-1
                  bg-primary
                  text-white
                  text-center
                  py-3
                  rounded-xl
                  font-medium
                  hover:bg-primary/90
                  transition
                "
              >
                WhatsApp Enquiry
              </a>

              <button
                className="
                  flex-1
                  border
                  border-gray-300
                  py-3
                  rounded-xl
                  font-medium
                  hover:bg-gray-100
                  transition
                "
              >
                Submit Enquiry
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
