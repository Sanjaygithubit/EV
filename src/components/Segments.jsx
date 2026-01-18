import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

/* SEGMENTS DATA */
const segments = [
  {
    title: "EV Bike Spare Parts",
    desc: "Batteries, chargers, displays & motors",
    bg: "#ECFDF5",
    image: "/images/ev-bike.png"
  },
  {
    title: "EV Rickshaw Spare Parts",
    desc: "Motors, controllers, wiring & accessories",
    bg: "#EFF6FF",
    image: "/images/ev-rickshaw.png"
  },
  {
    title: "EV Bicycle Conversion Kit",
    desc: "Convert bicycles into electric vehicles",
    bg: "#FFF7ED",
    image: "/images/ev-cycle.png"
  },
  {
    title: "EV Conversion Kit",
    desc: "Complete EV conversion solutions",
    bg: "#F5F3FF",
    image: "/images/ev-kit.png"
  },
  {
    title: "EV Charger",
    desc: "AC & DC fast charging solutions",
    bg: "#ECFEFF",
    image: "/images/ev-charger.png"
  },
  {
    title: "EV Batteries",
    desc: "Lithium-ion & lead-acid battery packs",
    bg: "#F8FAFC",
    image: "/images/ev-battery.png"
  }
];

export default function Segments() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  /* ======================================================
     📱 MOBILE VERSION — SIMPLE, NO STICKY, NO SCROLL LOGIC
     ====================================================== */
  if (isMobile) {
    return (
      <section className="py-16 bg-light">
        <h2 className="text-2xl font-bold px-6 mb-6">
          EV Segments We Serve
        </h2>

        <div className="flex flex-col gap-8 px-6">
          {segments.map((seg, i) => (
            <motion.div
              key={i}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                navigate(
                  `/products?category=${encodeURIComponent(seg.title)}`
                )
              }
              style={{ backgroundColor: seg.bg }}
              className="
                rounded-3xl
                p-6
                shadow-lg
                cursor-pointer
              "
            >
              <img
                src={seg.image}
                alt={seg.title}
                className="h-40 mx-auto mb-6 object-contain"
              />

              <h3 className="text-xl font-semibold mb-2 text-center">
                {seg.title}
              </h3>

              <p className="text-sm text-gray-600 text-center">
                {seg.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  /* ======================================================
     🖥 DESKTOP VERSION — YOUR ORIGINAL CODE (UNCHANGED)
     ====================================================== */

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const scrollY = window.scrollY;
      const progress = (scrollY - sectionTop) / window.innerHeight;
      const newIndex = Math.floor(progress);

      if (newIndex !== active) {
        setDirection(newIndex > active ? 1 : -1);
        setActive(Math.max(0, Math.min(newIndex, segments.length - 1)));
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [active]);

  const enterY = 120;
  const exitY = -120;

  return (
    <section
      ref={sectionRef}
      style={{ height: `${(segments.length + 1) * 100}vh` }}
      className="relative"
    >
      <div
        className="sticky top-0 h-screen flex items-center justify-center"
        style={{ perspective: "1000px" }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            initial={{ opacity: 0, y: enterY, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: exitY, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ backgroundColor: segments[active].bg }}
            onClick={() =>
              navigate(
                `/products?category=${encodeURIComponent(
                  segments[active].title
                )}`
              )
            }
            className="
              w-[92vw]
              h-[78vh]
              max-w-[1500px]
              rounded-[48px]
              shadow-[0_80px_160px_rgba(0,0,0,0.25)]
              cursor-pointer
              grid
              grid-cols-1
              md:grid-cols-2
              items-center
              gap-10
              md:gap-20
              px-8
              md:px-24
            "
          >
            {/* IMAGE */}
            <motion.div
              initial={{ x: direction > 0 ? -60 : 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{
                transform: "rotateY(15deg)",
                transformStyle: "preserve-3d"
              }}
              className="flex justify-center"
            >
              <img
                src={segments[active].image}
                alt={segments[active].title}
                className="max-h-[260px] md:max-h-[420px] object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* TEXT */}
            <motion.div
              initial={{ x: direction > 0 ? 60 : -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center md:text-left"
            >
              <span className="inline-block mb-4 text-sm font-semibold tracking-wide text-primary">
                EV SEGMENT
              </span>

              <h3 className="text-3xl md:text-5xl font-semibold mb-4">
                {segments[active].title}
              </h3>

              <p className="text-base md:text-xl text-gray-600 max-w-xl mx-auto md:mx-0">
                {segments[active].desc}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
