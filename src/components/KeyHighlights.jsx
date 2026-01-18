import { motion } from "framer-motion";

const highlights = [
  {
    value: "100%",
    title: "Genuine EV Parts",
    desc: "Certified and quality checked components"
  },
  {
    value: "Dealer",
    title: "Best Pricing",
    desc: "Wholesale rates for bulk buyers"
  },
  {
    value: "24–48H",
    title: "Fast Dispatch",
    desc: "Quick processing & shipping"
  },
  {
    value: "PAN-India",
    title: "Delivery Network",
    desc: "Reliable logistics across India"
  }
];

export default function KeyHighlights() {
  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-6">

        {/* OUTER CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            relative
            rounded-3xl
            px-10 py-12

            bg-gradient-to-r
            from-[#ECFDF3]
            via-[#D1FAE5]
            to-[#ECFDF3]

            border border-primary/20
            shadow-xl
            overflow-hidden
          "
        >
          {/* SOFT EV GLOW (ONE TIME) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="
              absolute -top-20 -left-20
              w-[300px] h-[300px]
              bg-primary/20
              rounded-full
              blur-[120px]
              pointer-events-none
            "
          />

          {/* GRID */}
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-10">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                transition={{
                  delay: i * 0.12,
                  type: "spring",
                  stiffness: 220,
                  damping: 18
                }}
                viewport={{ once: true }}
                className="group"
              >
                {/* VALUE */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.15 + 0.2 }}
                  viewport={{ once: true }}
                  className="
                    text-3xl md:text-5xl
                    font-extrabold
                    text-emerald-600
                    group-hover:text-emerald-700
                    transition-colors
                  "
                >
                  {item.value}
                </motion.p>

                {/* TITLE */}
                <p className="mt-2 font-semibold text-gray-900">
                  {item.title}
                </p>

                {/* DESC */}
                <p className="mt-1 text-sm text-gray-600">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
