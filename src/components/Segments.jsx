import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

/* SEGMENTS DATA */
const segments = [
  {
    title: "EV Bike Spare Parts",
    desc: "Batteries, chargers, displays & motors",
    bgImage: "/images/bg-bike.jpg"
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
  const [isManualScroll, setIsManualScroll] = useState(false);

  /* ===============================
     SCROLL → CARD CHANGE
  =============================== */
  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current || isManualScroll) return;

      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY;

      if (
        scrollY < sectionTop ||
        scrollY > sectionTop + sectionHeight
      ) {
        return;
      }

      const scrollInside = scrollY - sectionTop;
      const newIndex = Math.floor(
        scrollInside / window.innerHeight
      );

      setActive(
        Math.max(0, Math.min(newIndex, segments.length - 1))
      );
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isManualScroll]);

  /* ===============================
     ARROW CLICK → NEXT CARD
  =============================== */
  const handleArrowClick = (e) => {
    e.stopPropagation();

    if (active < segments.length - 1) {
      const nextIndex = active + 1;

      setIsManualScroll(true); // prevent scroll override
      setActive(nextIndex);

      const sectionTop = sectionRef.current.offsetTop;

      window.scrollTo({
        top: sectionTop + nextIndex * window.innerHeight,
        behavior: "smooth"
      });

      // re-enable scroll listener after animation
      setTimeout(() => {
        setIsManualScroll(false);
      }, 700);
    }
  };

  return (
    <section
      ref={sectionRef}
      style={{ height: `${segments.length * 100}vh` }}
      className="relative"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">

        <AnimatePresence mode="wait" initial={false}>
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
            {/* BACKGROUND IMAGE */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${segments[active].bgImage})`
              }}
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/60" />

            {/* RIGHT SIDE TEXT */}
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

            {/* SCROLL BUTTON (HIDE ON LAST CARD) */}
            {active < segments.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50"
              >
                <button
                  onClick={handleArrowClick}
                  className="
                    flex flex-col items-center
                    text-white text-sm font-medium
                    tracking-wide
                    group
                  "
                >
                  <span className="opacity-80 group-hover:opacity-100 transition">
                    Scroll to View More
                  </span>

                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut"
                    }}
                    className="mt-2 text-lg"
                  >
                    ↓
                  </motion.div>
                </button>
              </motion.div>
            )}

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
