import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { SITE_CONFIG } from "../config/site";

export default function ProductModal({ product, onClose }) {

  /* 🔥 LOCK BODY SCROLL */
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

  /* 🔥 ESC KEY TO CLOSE */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (product) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [product, onClose]);

  if (!product) return null;

  const whatsappUrl = SITE_CONFIG.social.whatsapp;
  const whatsappMessage = encodeURIComponent(
    `Hi, I am interested in ${product.name}. Please share details.`
  );

  return (
    <AnimatePresence>
      <motion.div
        className="
          fixed inset-0 z-[9999]
          flex items-center justify-center
          px-4 py-6
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >

        {/* 🔥 BACKDROP */}
        <div
          className="
            absolute inset-0
            bg-black/50
            backdrop-blur-md
          "
          onClick={onClose}
        />

        {/* 🔥 MODAL */}
        <motion.div
          initial={{ scale: 0.96, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.96, opacity: 0, y: 30 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 22
          }}
          className="
            relative
            bg-white
            rounded-3xl
            w-full
            max-w-4xl
            max-h-[90vh]
            overflow-y-auto
            shadow-[0_30px_80px_rgba(0,0,0,0.25)]
            z-10

            scrollbar-thin
            scrollbar-thumb-gray-300
            scrollbar-track-transparent
          "
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >

          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="
              absolute top-5 right-6
              text-gray-400
              hover:text-black
              text-3xl
              transition
              z-20
            "
            aria-label="Close modal"
          >
            ✕
          </button>

          {/* CONTENT */}
          <div className="p-6 md:p-8">

            {/* CATEGORY */}
            <span
              className="
                inline-block
                mb-4
                px-4 py-1.5
                rounded-full
                text-xs
                font-semibold
                bg-primary/10
                text-primary
              "
            >
              {product.category}
            </span>

            {/* TITLE */}
            <h2
              id="modal-title"
              className="
                text-2xl
                md:text-4xl
                font-bold
                text-gray-900
                leading-tight
                mb-6
              "
            >
              {product.name}
            </h2>

            {/* 🔥 PRODUCT IMAGE */}
            {product.image && (
              <div className="mb-8">

                <div
                  className="
                    w-full
                    h-[260px]
                    md:h-[420px]

                    rounded-2xl
                    overflow-hidden

                    bg-gradient-to-b
                    from-gray-50
                    to-white

                    border border-gray-100

                    flex
                    items-center
                    justify-center
                  "
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="
                      max-h-full
                      max-w-full
                      object-contain
                      p-4
                    "
                  />
                </div>

              </div>
            )}

            {/* BUTTONS */}
            <div
              className="
                flex flex-col
                sm:flex-row
                gap-4
                mb-8
              "
            >

              {/* WHATSAPP */}
              <a
                href={`${whatsappUrl}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="
                  flex-1
                  bg-primary
                  text-white
                  text-center
                  py-3
                  rounded-2xl
                  font-medium
                  transition-all
                  hover:scale-[1.01]
                  hover:shadow-lg
                "
              >
                WhatsApp Enquiry
              </a>

              {/* ENQUIRY */}
              <button
                className="
                  flex-1
                  border border-gray-300
                  py-3
                  rounded-2xl
                  font-medium
                  transition-all
                  hover:bg-gray-100
                "
              >
                Submit Enquiry
              </button>

            </div>

            {/* SPECIFICATIONS */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-3">
                Specifications
              </h4>

              <div
                className="
                  bg-gray-50
                  rounded-2xl
                  p-5
                  text-gray-700
                  leading-relaxed
                "
              >
                {product.specs}
              </div>
            </div>

            {/* DESCRIPTION */}
            <div>
              <h4 className="text-lg font-semibold mb-3">
                Description
              </h4>

              <div
                className="
                  bg-gray-50
                  rounded-2xl
                  p-5
                  text-gray-700
                  leading-relaxed
                "
              >
                {product.description ||
                  "High-quality EV spare part designed for durability, efficiency, and long-term performance."}
              </div>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}