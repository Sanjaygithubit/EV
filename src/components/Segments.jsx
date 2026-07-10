import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SEGMENTS } from "../config/site";

export default function Segments() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const [active, setActive] = useState(0);

  const segments = SEGMENTS;

  /* ==============================
     📱 ALL DEVICES — SCROLL EFFECT
  ============================== */

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;

          const sectionTop = sectionRef.current.offsetTop;
          const scrollY = window.scrollY;
          const sectionHeight = sectionRef.current.offsetHeight;
          const viewportHeight = window.innerHeight;
          
          // Calculate scroll progress within the section
          const scrollProgress = scrollY - sectionTop;
          
          // Calculate which segment should be active (0 to segments.length - 1)
          const progress = scrollProgress / viewportHeight;
          const newIndex = Math.round(progress);

          setActive(
            Math.max(0, Math.min(newIndex, segments.length - 1))
          );

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollNext = (e) => {
    e.stopPropagation();

    if (active < segments.length - 1) {
      const nextIndex = active + 1;
      const sectionTop = sectionRef.current.offsetTop;
      const targetScroll = sectionTop + nextIndex * window.innerHeight;

      window.scrollTo({
        top: targetScroll,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      style={{ height: `${segments.length * 100}vh` }}
      className="relative bg-gray-900"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center px-4">

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -100, scale: 0.95 }}
            transition={{ 
              duration: 0.5, 
              ease: [0.25, 0.46, 0.45, 0.94],
              opacity: { duration: 0.3 }
            }}
            onClick={() =>
              navigate(
                `/products?category=${encodeURIComponent(
                  segments[active].title
                )}`
              )
            }
            className="
              relative
              w-[95vw]
              h-[75vh]
              md:w-[92vw]
              md:h-[78vh]
              max-w-[1500px]
              rounded-[32px]
              md:rounded-[48px]
              overflow-hidden
              cursor-pointer
              shadow-[0_40px_80px_rgba(0,0,0,0.25)]
              md:shadow-[0_60px_120px_rgba(0,0,0,0.25)]
              flex
              items-center
              justify-end
              px-6
              md:px-24
            "
          >
            {/* Background Image - Full Card */}
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{
                backgroundImage: `url(${segments[active].image})`
              }}
            />

            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-transparent" />

            {/* Right Text */}
            <motion.div
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="relative z-10 text-white max-w-xl px-6 md:px-24"
            >
              <span className="text-primary text-xs md:text-sm font-semibold tracking-wide uppercase">
                EV Segment
              </span>

              <h3 className="text-3xl md:text-5xl font-semibold mt-3 md:mt-4 mb-4 md:mb-6 leading-tight">
                {segments[active].title}
              </h3>

              <p className="text-base md:text-xl text-gray-200">
                {segments[active].desc}
              </p>
            </motion.div>

            {/* ===== Scroll To View Button ===== */}
            {active < segments.length - 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.8,
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-20"
              >
                <button
                  onClick={handleScrollNext}
                  className="flex flex-col items-center text-white text-xs md:text-sm font-medium tracking-wide group"
                >
                  <span className="opacity-80 group-hover:opacity-100 transition-opacity mb-1 md:mb-2">
                    Scroll to View More
                  </span>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut"
                    }}
                    className="text-xl md:text-2xl"
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