import { motion } from "framer-motion";

export default function ProductCard({ product, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      onClick={onClick}
      className="
        group
        bg-white
        border border-gray-200
        rounded-2xl
        overflow-hidden
        cursor-pointer
        w-full
        max-w-[360px]
        hover:shadow-hover
        transition-shadow
      "
    >
      {/* IMAGE */}
      <div className="h-52 w-full overflow-hidden bg-gray-50">
       <img
  src={product.image}
  alt={product.name}
  className="
    h-full w-full object-cover
    transition-transform duration-500 ease-out
    group-hover:scale-[1.04]
  "
/>

      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col h-[190px]">
        {/* CATEGORY */}
        <p className="text-xs font-medium text-primary mb-1">
          {product.category}
        </p>

        {/* TITLE */}
        <h3 className="text-base font-semibold text-gray-900 mb-1 line-clamp-2">
          {product.name}
        </h3>

        {/* SPECS */}
        <p className="text-sm text-gray-500 mb-4 line-clamp-1">
          {product.specs}
        </p>

        {/* SPACER */}
        <div className="flex-1" />

        {/* BUTTON */}
       <button
  onClick={(e) => {
    e.stopPropagation();
    onClick();
  }}
  className="
    relative overflow-hidden
    w-full
    border border-gray-200
    rounded-xl
    py-2.5
    text-sm font-medium
    text-gray-800
    transition
    after:absolute after:inset-0
    after:bg-primary after:translate-x-[-100%]
    after:transition-transform after:duration-300
    hover:after:translate-x-0
    hover:text-white hover:border-primary
  "
>
  <span className="relative z-10">
    View Details
  </span>
</button>

      </div>
    </motion.div>
  );
}
