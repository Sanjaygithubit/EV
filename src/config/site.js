import bike from "../assets/bike.png";

<img src={bikeSeg} alt="EV Bike Spare Parts" />
// Site Configuration - Centralized constants
export const SITE_CONFIG = {
  name: "EV Spare Parts",
  tagline: "Your Trusted EV Parts Distribution Partner",
  description: "Genuine Stock • Dealer Pricing • Fast Fulfilment",
  
  // Contact Information
  contact: {
    phone: ["+91 98269 54887", "+91 98765 43210"],
    email: ["info@evspareparts.com", "sales@evspareparts.com"],
    address: {
      street: "123 EV Industrial Park",
      area: "Sector 15",
      city: "Delhi",
      pincode: "110001",
      country: "India"
    },
    businessHours: {
      weekdays: "9AM – 6PM",
      weekend: "Closed"
    }
  },
  
  // WhatsApp Configuration
  whatsapp: {
    phone: "919826954887",
    defaultMessage: "Hi, I am interested in EV spare parts. Please share details."
  },
  
  // Social Media
  social: {
    whatsapp: "https://wa.me/919826954887",
    // Add other social links as needed
  },
  
  // SEO
  seo: {
    url: "https://evspareparts.com",
    ogImage: "/og-image.jpg"
  }
};

// Product Categories
export const CATEGORIES = [
  "All",
  "EV Batteries",
  "EV Charger",
  "EV Rickshaw",
  "EV Bike Spare Parts",
  "EV Bicycle Conversion Kit",
  "EV Conversion Kit"
];

// Sub Categories
export const SUB_CATEGORIES = {
  "EV Rickshaw": ["Motor", "Controller", "Gear Box", "Battery", "Charger", "Rear Axle", "Suspension", "Body Parts"],
  "EV Bike Spare Parts": ["Motor", "Controller", "Brake", "Display", "Throttle"],
  "EV Bicycle Conversion Kit": ["Bicycle Kit"],
  "EV Conversion Kit": ["Scooter Kit", "Bike Kit", "TVS XL Kit"],
  "EV Batteries": ["Lithium", "Lead Acid"],
  "EV Charger": ["Lithium Charger", "Lead Acid Charger"]
};

// Navigation Categories (for Navbar dropdown)
export const NAV_CATEGORIES = [
  "EV Bike Spare Parts",
  "EV Rickshaw Spare Parts",
  "EV Bicycle Conversion Kit",
  "EV Conversion Kit",
  "EV Charger",
  "EV Batteries"
];

// Key Highlights
export const HIGHLIGHTS = [
  {
    icon: "shield",
    value: "100%",
    title: "Genuine EV Parts",
    desc: "Certified and quality checked components"
  },
  {
    icon: "tag",
    value: "Dealer",
    title: "Best Pricing",
    desc: "Wholesale rates for bulk buyers"
  },
  {
    icon: "truck",
    value: "24–48H",
    title: "Fast Dispatch",
    desc: "Quick processing & shipping"
  },
  {
    icon: "globe",
    value: "PAN-India",
    title: "Delivery Network",
    desc: "Reliable logistics across India"
  }
];

// Why Choose Us items
export const WHY_CHOOSE_US = [
  {
    title: "Verified EV suppliers",
    desc: "We work only with certified and trusted suppliers"
  },
  {
    title: "Genuine & compatible parts",
    desc: "100% authentic parts with quality assurance"
  },
  {
    title: "Dealer-friendly pricing",
    desc: "Competitive wholesale rates for bulk orders"
  },
  {
    title: "Fast dispatch system",
    desc: "Quick processing with PAN-India delivery"
  }
];

// Segments for Home page
export const SEGMENTS = [
  {
    title: "EV Bike Spare Parts",
    desc: "Batteries, chargers, displays & motors",
    bgImage: "/src/assets/bike.png",
    image: "/src/assets/bike.png"
  },
  {
    title: "EV Rickshaw Spare Parts",
    desc: "Motors, controllers, wiring & accessories",
    bgImage: "/src/assets/rickshaw.png",
    image: "/src/assets/rickshaw.png"
  },
  {
    title: "EV Bicycle Conversion Kit",
    desc: "Convert bicycles into electric vehicles",
    bgImage: "/src/assets/why.jpg",
    image: "/src/assets/why.jpg"
  },
  {
    title: "EV Conversion Kit",
    desc: "Complete EV conversion solutions",
    bgImage: "/images/bg-kit.jpg",
    image: "/src/assets/hero.jpg"
  },
  {
    title: "EV Charger",
    desc: "AC & DC fast charging solutions",
    bgImage: "/images/bg-charger.jpg",
    image: "/src/assets/hero.jpg"
  },
  {
    title: "EV Batteries",
    desc: "Lithium-ion & lead-acid battery packs",
    bgImage: "/images/bg-battery.jpg",
    image: "/src/assets/hero.jpg"
  }
];

// Brand Logos
export const BRANDS = [
  "/src/assets/brands/brand1.png",
  "/src/assets/brands/brand2.png",
  "/src/assets/brands/brand3.png",
  "/src/assets/brands/brand4.png"
];
