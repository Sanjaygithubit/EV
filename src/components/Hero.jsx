import { motion } from "framer-motion";
import heroBg from "../assets/hero.jpg";

/* LINE ANIMATION */
const lineAnim = {
  hidden: { y: 40, opacity: 0, filter: "blur(8px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const fadeItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: `url(${heroBg})`
        }}
      />

      {/* PREMIUM OVERLAY */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-black/70
          via-black/40
          to-black/10
        "
      />

      {/* GREEN GLOW */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px]" />

      {/* CONTENT */}
      <div
        className="
          relative z-10
          max-w-7xl mx-auto
          px-6
          grid md:grid-cols-[1.3fr_0.7fr]
          gap-16
          w-full
        "
      >
        {/* LEFT SIDE */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.h1
            variants={lineAnim}
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-extrabold
              text-white
              leading-[1.1]
            "
          >
            Your Trusted{" "}
            <motion.span
              className="text-primary inline-block"
              animate={{
                textShadow: [
                  "0 0 6px rgba(34,197,94,0.5)",
                  "0 0 18px rgba(34,197,94,0.9)",
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
            Parts Distribution Partner
          </motion.h1>

          <motion.h2
            variants={lineAnim}
            className="
              mt-5
              text-xl
              sm:text-2xl
              md:text-3xl
              text-slate-200
              font-medium
              leading-relaxed
            "
          >
            Genuine Stock • Dealer Pricing • Fast Fulfilment
          </motion.h2>

          <motion.div
            variants={fadeItem}
            className="
              mt-10
              flex flex-col sm:flex-row
              gap-4
            "
          >
            <a
              href="#quick-enquiry"
              className="
                bg-primary
                text-white
                px-8 py-4
                rounded-xl
                font-semibold
                text-center
                shadow-lg
                hover:scale-105
                transition
              "
            >
              Get In Touch
            </a>

            <a
              href="/products"
              className="
                border border-white/40
                text-white
                px-8 py-4
                rounded-xl
                font-semibold
                text-center
                backdrop-blur-md
                hover:bg-white/10
                transition
              "
            >
              View Products
            </a>
          </motion.div>
        </motion.div>

      <motion.div
  id="quick-enquiry"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.6 }}
  className="
    hidden md:flex
    flex-col
    self-center

    bg-black/15
    backdrop-blur-md

    border border-white/20
    rounded-3xl

    p-8

    shadow-[0_20px_60px_rgba(0,0,0,0.25)]

    w-[380px]
    h-[450px]
  "
>
  <h3 className="font-semibold text-xl mb-5 text-white">
    Get Expert Callback
  </h3>

  <input
    className="
      w-full
      bg-white/15
      text-white
      placeholder:text-gray-300

      border border-white/20
      p-3 mb-4

      rounded-xl

      focus:outline-none
      focus:ring-2
      focus:ring-primary
    "
    placeholder="Name"
  />

  <input
    className="
      w-full
      bg-white/15
      text-white
      placeholder:text-gray-300

      border border-white/20
      p-3 mb-4

      rounded-xl

      focus:outline-none
      focus:ring-2
      focus:ring-primary
    "
    placeholder="Phone"
  />

  <textarea
    rows="4"
    className="
      w-full
      bg-white/15
      text-white
      placeholder:text-gray-300

      border border-white/20
      p-3

      rounded-xl
      resize-none

      focus:outline-none
      focus:ring-2
      focus:ring-primary
    "
    placeholder="Requirement"
  />

  <button
    className="
      mt-6
      w-full

      bg-primary
      text-white

      py-3
      rounded-xl

      font-semibold

      transition
      hover:scale-[1.02]
      hover:shadow-lg
    "
  >
    Submit
  </button>
</motion.div>
      </div>
    </section>
  );
}