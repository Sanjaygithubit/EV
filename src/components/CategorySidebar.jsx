import { motion } from "framer-motion";

export default function CategorySidebar({
  categories,
  activeCategory,
  setActiveCategory,
  isMobile = false,
  onClose
}) {
  return (
    <aside
      className="
        bg-white
        border
        rounded-2xl
        p-4
        h-fit
      "
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Categories</h3>

        {isMobile && (
          <button
            onClick={onClose}
            className="text-gray-500 text-xl"
          >
            ✕
          </button>
        )}
      </div>

      <div className="space-y-1">
        {categories.map(cat => {
          const isActive = activeCategory === cat;

          return (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileTap={{ scale: 0.98 }}
              className={`
                w-full text-left px-4 py-2 rounded-lg text-sm transition
                ${
                  isActive
                    ? "bg-primary text-white font-medium"
                    : "hover:bg-gray-100"
                }
              `}
            >
              {cat}
            </motion.button>
          );
        })}
      </div>
    </aside>
  );
}
