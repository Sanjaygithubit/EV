import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

/* SEGMENTS DATA */
const segments = [
  {
    title: "EV Bike Spare Parts",
    desc: "Batteries, chargers, displays & motors",
    bgImage: "/images/bike.jpg"
  },
  {
    title: "EV Rickshaw Spare Parts",
    desc: "Motors, controllers, wiring & accessories",
    bgImage: "/images/bg-rickshaw.jpg"
  },
  {
    title: "EV Bicycle Conversion Kit",
    desc: "Convert bicycles into electric vehicles",
    bgImage: "/images/bg-cycle.jpg"
  },
  {
    title: "EV Conversion Kit",
    desc: "Complete EV conversion solutions",
    bgImage: "/images/bg-kit.jpg"
  },
  {
    title: "EV Charger",
    desc: "AC & DC fast charging solutions",
    bgImage: "/images/bg-charger.jpg"
  },
  {
    title: "EV Batteries",
    desc: "Lithium-ion & lead-acid battery packs",
    bgImage: "/images/bg-battery.jpg"
  }
];

export default function Segments() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const [active, setActive] = useState(0);

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  /* ==============================
     📱 MOBILE — SIMPLE CARDS
  ============================== */
  if (isMobile) {
    return (
      <section className="py-16 bg-light">
        <h2 className="text-2xl font-bold px-6 mb-8">
          EV Segments We Serve
        </h2>

        <div className="flex flex-col gap-8 px-6">
          {segments.map((seg, i) => (
            <motion.div
              key={i}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                navigate(`/products?category=${encodeURIComponent(seg.title)}`)
              }
              className="relative rounded-3xl overflow-hidden cursor-pointer h-[220px]"
            >
              {/* Background with pixel control */}
              <div
                className="absolute inset-0 bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${seg.bgImage})`,
                  backgroundSize: "900px 600px"
                }}
              />

              <div className="absolute inset-0 bg-black/60" />

              <div className="relative z-10 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">
                  {seg.title}
                </h3>
                <p className="text-sm text-gray-200">
                  {seg.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  /* ==============================
     🖥 DESKTOP — SCROLL SECTIONS
  ============================== */

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const scrollY = window.scrollY;
      const progress = (scrollY - sectionTop) / window.innerHeight;
      const newIndex = Math.floor(progress);

      setActive(
        Math.max(0, Math.min(newIndex, segments.length - 1))
      );
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ height: `${segments.length * 100}vh` }}
      className="relative"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 120, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -120, scale: 0.96 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            onClick={() =>
              navigate(
                `/products?category=${encodeURIComponent(
                  segments[active].title
                )}`
              )
            }
            className="
              relative
              w-[92vw]
              h-[78vh]
              max-w-[1500px]
              rounded-[48px]
              overflow-hidden
              cursor-pointer
              shadow-[0_60px_120px_rgba(0,0,0,0.25)]
              flex
              items-center
              justify-end
              px-24
            "
          >
            {/* Background Image with pixel control */}
            <div
              className="absolute inset-0 bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${segments[active].bgImage})`,
                backgroundSize: "1600px 900px"
              }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Right Text */}
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="relative z-10 text-white max-w-xl"
            >
              <span className="text-primary text-sm font-semibold tracking-wide uppercase">
                EV Segment
              </span>

              <h3 className="text-5xl font-semibold mt-4 mb-6 leading-tight">
                {segments[active].title}
              </h3>

              <p className="text-xl text-gray-200">
                {segments[active].desc}
              </p>
            </motion.div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
