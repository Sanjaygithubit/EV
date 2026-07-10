import { motion } from "framer-motion";
import { HIGHLIGHTS } from "../config/site";

/* SIMPLE ICON SWITCH */
function HighlightIcon({ type }) {
  const common = "w-7 h-7 text-primary";

  switch (type) {
    case "shield":
      return (
        <svg className={common} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
        </svg>
      );

    case "tag":
      return (
        <svg className={common} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M20 12l-8 8-8-8 8-8 8 8z" />
        </svg>
      );

    case "truck":
      return (
        <svg className={common} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M3 7h11v10H3zM14 10h4l3 3v4h-7z" />
        </svg>
      );

    case "globe":
      return (
        <svg className={common} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c3 4 3 14 0 18M12 3c-3 4-3 14 0 18" />
        </svg>
      );

    default:
      return null;
  }
}

export default function KeyHighlights() {
  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            relative
            rounded-3xl
            px-10 py-14
            bg-gradient-to-r
            from-[#ECFDF3]
            via-[#D1FAE5]
            to-[#ECFDF3]
            border border-primary/20
            shadow-xl
          "
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

            {HIGHLIGHTS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                transition={{
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                className="text-center group"
              >
                {/* ICON BOX */}
                <div className="
                  mx-auto
                  mb-4
                  w-14 h-14
                  rounded-xl
                  bg-white
                  flex items-center justify-center
                  shadow-md
                  group-hover:shadow-lg
                  transition
                ">
                  <HighlightIcon type={item.icon} />
                </div>

                {/* VALUE */}
                <p className="
                  text-2xl md:text-4xl
                  font-bold
                  text-primary
                ">
                  {item.value}
                </p>

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