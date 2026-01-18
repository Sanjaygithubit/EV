import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `relative block px-4 py-2 transition ${
      isActive
        ? "text-primary font-semibold after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-primary"
        : "text-slate-300 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <NavLink to="/" className="text-xl font-bold text-white">
          EV<span className="text-primary">Parts</span>
        </NavLink>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/products" className={linkClass}>
            Products
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>

          {/* WhatsApp CTA — SWEEP */}
          <a
            href="https://wa.me/919XXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            className="
              relative overflow-hidden
              bg-primary text-white
              px-4 py-2 rounded-lg text-sm font-medium
              after:absolute after:inset-0
              after:bg-white/15 after:translate-x-[-100%]
              hover:after:translate-x-0
              after:transition after:duration-300
            "
          >
            <span className="relative z-10">WhatsApp</span>
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-navy border-t border-white/10">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={linkClass}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            onClick={() => setOpen(false)}
            className={linkClass}
          >
            Products
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className={linkClass}
          >
            Contact
          </NavLink>

          {/* MOBILE WHATSAPP CTA — SWEEP */}
          <a
            href="https://wa.me/919XXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            className="
              relative overflow-hidden
              block m-4
              bg-primary text-white
              text-center
              px-4 py-2 rounded-lg font-medium
              after:absolute after:inset-0
              after:bg-white/15 after:translate-x-[-100%]
              hover:after:translate-x-0
              after:transition after:duration-300
            "
          >
            <span className="relative z-10">
              WhatsApp Enquiry
            </span>
          </a>
        </div>
      )}
    </header>
  );
}
