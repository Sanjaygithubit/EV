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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
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
            transition-all
            duration-300
          
            hover:border-primary/40
          "
        >
         

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-10">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <p className="
                  text-3xl md:text-5xl font-extrabold
               text-emerald-600
group-hover:text-emerald-700

                ">
                  {item.value}
                </p>

                <p className="  mt-2 font-semibold text-gray-900">
                  {item.title}
                </p>

                <p className="  mt-1 text-sm text-gray-600">
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
