import { motion } from "framer-motion";

const brands = [
  "/src/assets/brands/brand1.png",
  "/src/assets/brands/brand2.png",
  "/src/assets/brands/brand3.png",
  "/src/assets/brands/brand4.png"
];

export default function BrandLogos() {
  return (
    <section className="py-16 bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Trusted by Leading Brands
        </h2>

        <div className="relative">
          <motion.div
            className="flex gap-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear"
            }}
          >
            {[...brands, ...brands].map((logo, i) => (
              <div
                key={i}
                className="
                  min-w-[160px] h-20
                  flex items-center justify-center
                  grayscale hover:grayscale-0
                  transition
                "
              >
                <img
                  src={logo}
                  alt="Brand logo"
                  className="max-h-12 object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
