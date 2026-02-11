import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const categories = [
    "EV Bike Spare Parts",
    "EV Rickshaw Spare Parts",
    "EV Bicycle Conversion Kit",
    "EV Conversion Kit",
    "EV Charger",
    "EV Batteries"
  ];

  const linkClass = ({ isActive }) =>
    `relative px-4 py-2 transition ${
      isActive
        ? "text-primary font-semibold"
        : "text-slate-300 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-navy/90 backdrop-blur-xl border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <NavLink to="/" className="text-xl font-bold text-white tracking-wide">
          EV<span className="text-primary">Parts</span>
        </NavLink>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">

          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          {/* PRODUCTS DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <NavLink to="/products" className={linkClass}>
              <span className="flex items-center gap-1">
                Products
                <span className={`transition-transform duration-300 ${showDropdown ? "rotate-180" : ""}`}>
                  ▾
                </span>
              </span>
            </NavLink>

            <AnimatePresence>
              {showDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="
                    absolute left-1/2 -translate-x-1/2
                    top-full mt-6
                    w-[340px]
                    z-50
                  "
                >
                  <div
                    className="
                      relative
                      rounded-2xl
                      bg-white/80
                      backdrop-blur-xl
                      border border-white/40
                      shadow-[0_20px_60px_rgba(34,197,94,0.15)]
                      p-6
                    "
                  >
                    {/* Soft green glow */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

                    <ul className="space-y-3 relative z-10">
                      {categories.map((cat, index) => (
                        <li key={index}>
                          <Link
                            to={`/products?category=${encodeURIComponent(cat)}`}
                            className="
                              flex items-center justify-between
                              px-4 py-2 rounded-xl text-sm
                              text-gray-700
                              hover:bg-primary hover:text-white
                              transition-all duration-300
                              group
                            "
                          >
                            {cat}
                            <span className="opacity-0 group-hover:opacity-100 transition">
                              →
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>

          {/* WHATSAPP CTA */}
          <a
            href="https://wa.me/919XXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            className="
              relative overflow-hidden
              bg-primary text-white
              px-5 py-2.5 rounded-xl text-sm font-medium
              shadow-lg
              hover:shadow-primary/40
              transition-all
              after:absolute after:inset-0
              after:bg-white/20 after:translate-x-[-100%]
              hover:after:translate-x-0
              after:transition after:duration-300
            "
          >
            <span className="relative z-10">WhatsApp</span>
          </a>

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-navy border-t border-white/10 px-4 pb-6">
          <NavLink to="/" onClick={() => setOpen(false)} className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/products" onClick={() => setOpen(false)} className={linkClass}>
            Products
          </NavLink>

          <NavLink to="/contact" onClick={() => setOpen(false)} className={linkClass}>
            Contact
          </NavLink>

          <a
            href="https://wa.me/919XXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            className="block mt-4 bg-primary text-white text-center px-4 py-2 rounded-xl font-medium"
          >
            WhatsApp Enquiry
          </a>
        </div>
      )}
    </header>
  );
}
