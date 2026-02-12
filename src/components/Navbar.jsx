import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

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

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden md:flex items-center gap-6">

          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          {/* PRODUCTS DROPDOWN (DESKTOP ONLY HOVER) */}
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
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-6 w-[340px] z-50"
                >
                  <div className="rounded-2xl bg-white shadow-xl p-6">
                    <ul className="space-y-3">
                      {categories.map((cat, index) => (
                        <li key={index}>
                          <Link
                            to={`/products?category=${encodeURIComponent(cat)}`}
                            className="flex justify-between px-4 py-2 rounded-xl text-sm text-gray-700 hover:bg-primary hover:text-white transition"
                          >
                            {cat}
                            <span>→</span>
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
            className="bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-medium shadow-md hover:shadow-lg transition"
          >
            WhatsApp
          </a>
        </div>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-navy border-t border-white/10 px-4 pb-6 overflow-hidden"
          >
            <NavLink to="/" onClick={() => setOpen(false)} className={linkClass}>
              Home
            </NavLink>

            {/* MOBILE PRODUCTS ACCORDION */}
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="flex justify-between w-full text-left px-4 py-2 text-slate-300 hover:text-white transition"
            >
              Products
              <span className={`transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`}>
                ▾
              </span>
            </button>

            <AnimatePresence>
              {mobileProductsOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  <ul className="pl-4 space-y-2">
                    {categories.map((cat, index) => (
                      <li key={index}>
                        <Link
                          to={`/products?category=${encodeURIComponent(cat)}`}
                          onClick={() => {
                            setOpen(false);
                            setMobileProductsOpen(false);
                          }}
                          className="block text-sm text-slate-400 hover:text-white py-1"
                        >
                          {cat}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>

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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
