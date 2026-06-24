import { motion } from "framer-motion";
import heroBg from "../assets/hero.jpg";

/* LINE ANIMATION */
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
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      {/* GREEN GLOW */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px]" />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-navy/80" />

      <div
        className="
          relative z-10
          max-w-7xl mx-auto
          px-6
          grid md:grid-cols-[1.3fr_0.7fr]
          gap-16
        "
      >
        {/* LEFT CONTENT */}
        <motion.div initial="hidden" animate="visible">
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
              max-w-3xl
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
            transition={{ delay: 0.15 }}
            className="
              mt-4
              text-xl
              sm:text-2xl
              md:text-3xl
              lg:text-4xl
              font-semibold
              text-slate-200
              leading-tight
              max-w-2xl
            "
          >
            Genuine Stock • Dealer Pricing • Fast Fulfilment
          </motion.h2>

          <motion.div
            variants={fadeItem}
            transition={{ delay: 0.5 }}
            className="
              mt-10
              flex flex-col sm:flex-row
              gap-4
            "
          >
            <a
              href="#quick-enquiry"
              className="
                relative overflow-hidden
                bg-primary text-white
                px-6 py-3 rounded-xl
                font-medium text-center
                after:absolute after:inset-0
                after:bg-white/10
                after:translate-x-[-100%]
                hover:after:translate-x-0
                after:transition after:duration-300
              "
            >
              <span className="relative z-10">
                Get In Touch
              </span>
            </a>

            <a
              href="/products"
              className="
                border border-white/40
                px-6 py-3 rounded-xl
                text-white text-center
                hover:bg-white/10
                transition
              "
            >
              View Products
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          id="quick-enquiry"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="
            hidden md:flex
            flex-col
            self-center

            bg-gradient-to-b
            from-primary/30
            via-white/20
            to-white/10

            backdrop-blur-xl
            border border-white/30

            rounded-3xl
            p-8

            shadow-2xl

            w-[380px]
            h-[450px]
          "
        >
          <h3 className="font-semibold text-lg mb-5 text-white">
            Get Expert Callback
          </h3>

          <input
            className="
              w-full
              bg-white/80
              border border-white/40
              p-3 mb-4
              rounded-xl
              text-sm
              focus:outline-none
              focus:ring-2
              focus:ring-primary
            "
            placeholder="Name"
          />

          <input
            className="
              w-full
              bg-white/80
              border border-white/40
              p-3 mb-4
              rounded-xl
              text-sm
              focus:outline-none
              focus:ring-2
              focus:ring-primary
            "
            placeholder="Phone"
          />

          <textarea
            rows="3"
            className="
              w-full
              bg-white/80
              border border-white/40
              p-3
              rounded-xl
              text-sm
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
              font-medium
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