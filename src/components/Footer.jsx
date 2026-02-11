import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-300">

      {/* TOP GRADIENT LINE */}
      <div className="h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">

        {/* ABOUT */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            EV Spare Parts
          </h3>
          <p className="text-sm leading-relaxed">
            Trusted supplier of genuine EV spare parts, chargers, batteries,
            and conversion kits with fast delivery across India.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-primary transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-primary transition">
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* CATEGORIES */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Categories
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/products?category=EV Rickshaw Spare Parts"
                className="hover:text-primary transition"
              >
                EV Rickshaw Parts
              </Link>
            </li>
            <li>
              <Link
                to="/products?category=EV Bike Spare Parts"
                className="hover:text-primary transition"
              >
                EV Bike Parts
              </Link>
            </li>
            <li>
              <Link
                to="/products?category=EV Charger"
                className="hover:text-primary transition"
              >
                EV Chargers
              </Link>
            </li>
            <li>
              <Link
                to="/products?category=EV Batteries"
                className="hover:text-primary transition"
              >
                EV Batteries
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Contact
          </h4>
          <ul className="space-y-2 text-sm">
            <li>+91 XXXXXXXXXX</li>
            <li>info@example.com</li>
            <li>India</li>
          </ul>

          {/* WHATSAPP CTA — SWEEP */}
          
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} EV Spare Parts. All rights reserved.
      </div>
    </footer>
  );
}
