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

  useEffect(() => {
    let rafId;
    const onScroll = () => {
      if (!sectionRef.current) return;

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const sectionTop = sectionRef.current.offsetTop;
        const scrollY = window.scrollY;
        const progress = (scrollY - sectionTop) / window.innerHeight;
        const newIndex = Math.floor(progress);

        if (newIndex !== active) {
          setDirection(newIndex > active ? 1 : -1);
          setActive(Math.max(0, Math.min(newIndex, segments.length - 1)));
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [active]);

  const enterY = 120;
  const exitY = -120;

  // Mobile-க்கு optimized shadow & radius
  const cardShadow = "0 20px 40px rgba(0,0,0,0.15)"; // Reduced shadow intensity

  return (
    <section
      ref={sectionRef}
      style={{ height: `${(segments.length + 1) * 100}vh` }}
      className="relative"
    >
      <div 
        className="sticky top-0 h-screen flex items-center justify-center"
        style={{ perspective: '1200px' }} // Slightly higher perspective for better 3D feel
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            initial={{ opacity: 0, y: enterY, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: exitY, scale: 0.98 }}
            transition={{
              duration: 0.35, // Slightly faster & smoother
              ease: [0.25, 0.1, 0.25, 1], // Custom bezier curve - very smooth
              type: "tween" // Explicitly use tween for better mobile perf
            }}
            style={{
              backgroundColor: segments[active].bg,
              willChange: "transform, opacity", // GPU acceleration
            }}
            className={`
              w-[92vw] max-w-[1500px]
              h-[78vh] md:h-[85vh]
              rounded-3xl md:rounded-[48px]  // Smaller radius on mobile
              shadow-[${cardShadow}]
              cursor-pointer
              grid grid-cols-1 md:grid-cols-2
              items-center gap-6 md:gap-20
              px-6 md:px-24
              overflow-hidden
              transform-gpu  // Force GPU rendering
            `}
            onClick={() =>
              navigate(`/products?category=${encodeURIComponent(segments[active].title)}`)
            }
          >
            {/* IMAGE */}
            <motion.div
              initial={{ x: direction > 0 ? -40 : 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                transform: 'rotateY(12deg)', // Slightly reduced tilt for mobile
                transformStyle: 'preserve-3d',
                willChange: "transform",
              }}
              className="order-1 md:order-none flex justify-center items-center"
            >
              <img
                src={segments[active].image}
                alt={segments[active].title}
                className="max-h-[220px] md:max-h-[420px] object-contain drop-shadow-xl"
                loading="lazy" // Performance boost
              />
            </motion.div>

            {/* TEXT */}
            <motion.div
              initial={{ x: direction > 0 ? 40 : -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="order-2 md:order-none text-center md:text-left px-4 md:px-0"
            >
              <span className="inline-block mb-3 text-xs md:text-sm font-semibold tracking-wide text-primary">
                EV SEGMENT
              </span>
              <h3 className="text-2xl md:text-5xl font-semibold mb-3 md:mb-4 leading-tight">
                {segments[active].title}
              </h3>
              <p className="text-sm md:text-xl text-gray-600 max-w-xl mx-auto md:mx-0">
                {segments[active].desc}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}