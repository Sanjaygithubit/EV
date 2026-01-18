import { motion } from "framer-motion";
import heroBg from "../assets/hero-ev.jpg";

/* LINE ANIMATION — BLUR → SHARP */
const lineAnim = {
  hidden: { y: 40, opacity: 0, filter: "blur(8px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const fadeItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* SOFT EV GREEN GLOW */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px]" />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-navy/80" />

      <div
        className="
          relative z-10
          max-w-7xl mx-auto px-6
          grid md:grid-cols-[1.3fr_0.7fr]
          gap-16
        "
      >
        {/* LEFT CONTENT */}
        <motion.div initial="hidden" animate="visible">
          <motion.h1
            variants={lineAnim}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1]"
          >
            Complete{" "}
            <motion.span
              className="text-primary inline-block"
              animate={{
                textShadow: [
                  "0 0 6px rgba(34,197,94,0.5)",
                  "0 0 16px rgba(34,197,94,0.9)",
                  "0 0 6px rgba(34,197,94,0.5)"
                ]
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              EV
            </motion.span>{" "}
            Spare Parts
          </motion.h1>

          <motion.h1
            variants={lineAnim}
            transition={{ delay: 0.15 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mt-2"
          >
            for Every Electric Vehicle
          </motion.h1>

          <motion.p
            variants={fadeItem}
            transition={{ delay: 0.35 }}
            className="mt-6 text-lg md:text-xl text-slate-200 max-w-xl"
          >
            Genuine EV components with fast delivery and dealer-friendly pricing.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            variants={fadeItem}
            transition={{ delay: 0.5 }}
            className="mt-10 flex gap-4"
          >
            <a
              href="#quick-enquiry"
              className="
                relative overflow-hidden
                bg-primary text-white
                px-6 py-3 rounded-lg font-medium
                after:absolute after:inset-0
                after:bg-white/10 after:translate-x-[-100%]
                hover:after:translate-x-0
                after:transition after:duration-300
              "
            >
               <span className="relative z-10">
    WhatsApp Now
  </span>
            </a>

            <a
              href="/products"
              className="
                border border-white/40
                px-6 py-3 rounded-lg
                text-white
                hover:bg-white/10
                transition
              "
            >
              Browse Products
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT FORM — CLEAN GLASS */}
        <motion.div
          id="quick-enquiry"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="
            hidden md:flex flex-col self-center
            bg-gradient-to-b
            from-primary/25 via-white/20 to-white/10
            backdrop-blur-xl
            border border-white/30
            rounded-2xl
            p-5 shadow-xl
            w-[320px] h-[360px]
          "
        >
          <h3 className="font-semibold mb-3 text-white">
            Quick Enquiry
          </h3>

          <input
            className="w-full bg-white/70 border border-white/40 p-2.5 mb-3 rounded-lg text-sm"
            placeholder="Name"
          />
          <input
            className="w-full bg-white/70 border border-white/40 p-2.5 mb-3 rounded-lg text-sm"
            placeholder="Phone"
          />
          <textarea
            rows="3"
            className="w-full bg-white/70 border border-white/40 p-2.5 rounded-lg text-sm resize-none"
            placeholder="Requirement"
          />

          <button className="mt-4 w-full bg-primary text-white py-2.5 rounded-lg font-medium">
            Submit
          </button>
        </motion.div>
      </div>
    </section>
  );
}
