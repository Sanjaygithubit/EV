import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const IconBox = ({ children }) => (
  <div className="bg-primary/10 p-3 rounded-xl text-primary text-lg">
    {children}
  </div>
);

export default function Contact() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-navy py-24 text-white text-center">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-bold"
        >
          Get in Touch for <span className="text-primary">EV Spare Parts</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="mt-4 text-slate-300"
        >
          We're here to help with all your EV spare part needs
        </motion.p>
      </section>

      {/* CONTENT */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

          {/* LEFT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl border p-8 space-y-8"
          >
            <h3 className="text-xl font-semibold">Contact Information</h3>

            <div className="flex gap-4">
              <IconBox>📍</IconBox>
              <div>
                <p className="font-medium">Address</p>
                <p className="text-sm text-muted">
                  123 EV Industrial Park<br />
                  Sector 15, Delhi 110001
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <IconBox>📞</IconBox>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-sm text-muted">
                  +91 123 456 7890<br />
                  +91 098 765 4321
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <IconBox>✉️</IconBox>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted">
                  info@evparts.com<br />
                  sales@evparts.com
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <IconBox>⏰</IconBox>
              <div>
                <p className="font-medium">Business Hours</p>
                <p className="text-sm text-muted">
                  Mon – Sat: 9AM – 6PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* MAP */}
            <div className="mt-6 rounded-xl overflow-hidden border h-[260px]">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=Delhi%20India&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl border p-8"
          >
            <h3 className="text-xl font-semibold mb-6">Send us a Message</h3>

            <form className="space-y-5">
              <input className="w-full border rounded-xl px-4 py-3" placeholder="Full Name *" />
              <input className="w-full border rounded-xl px-4 py-3" placeholder="Email Address *" />
              <input className="w-full border rounded-xl px-4 py-3" placeholder="Phone Number *" />
              <input className="w-full border rounded-xl px-4 py-3" placeholder="Subject *" />
              <textarea
                rows="4"
                className="w-full border rounded-xl px-4 py-3"
                placeholder="Tell us about your requirement..."
              />

              {/* SUBMIT CTA — SWEEP */}
              <button
                type="submit"
                className="
                  relative overflow-hidden
                  w-full
                  bg-primary text-white
                  py-3 rounded-xl font-medium
                  after:absolute after:inset-0
                  after:bg-white/15 after:translate-x-[-100%]
                  hover:after:translate-x-0
                  after:transition after:duration-300
                "
              >
                <span className="relative z-10">
                  Send Message
                </span>
              </button>
            </form>
          </motion.div>
        </div>

        {/* WHATSAPP CTA */}
        <div className="max-w-7xl mx-auto px-6 mt-14">
          <div className="bg-primary rounded-2xl p-10 text-center text-white">
            <h3 className="text-2xl font-bold">Prefer to Chat?</h3>
            <p className="mt-2 mb-6">Get instant responses on WhatsApp</p>

            {/* WHATSAPP CTA — SWEEP */}
            <a
              href="https://wa.me/919XXXXXXXXX"
              className="
                relative overflow-hidden
                inline-block
                bg-white text-primary
                px-8 py-3 rounded-xl font-semibold
                after:absolute after:inset-0
                after:bg-primary/10 after:translate-x-[-100%]
                hover:after:translate-x-0
                after:transition after:duration-300
              "
            >
              <span className="relative z-10">
                Chat on WhatsApp
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
