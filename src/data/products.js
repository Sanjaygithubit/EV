const products = [

  /* ================= EV RICKSHAW ================= */

  { id: 1, name: "48V/60V 1000W BLDC Motor (SY Gold & Silver)", category: "EV Rickshaw", sub: "Motor",
    description: "High-performance BLDC motor suitable for e-rickshaw applications.",
    specs: "Voltage: 48V/60V | Power: 1000W | Type: BLDC | Finish: Gold & Silver"
  },

  { id: 2, name: "48V/60V 1200W BLDC Motor (SY Gold)", category: "EV Rickshaw", sub: "Motor",
    description: "Durable BLDC motor designed for heavy-duty performance.",
    specs: "Voltage: 48V/60V | Power: 1200W"
  },

  { id: 3, name: "48V/60V 1500W BLDC Motor (SY Gold)", category: "EV Rickshaw", sub: "Motor",
    description: "Heavy-duty motor for higher load capacity vehicles.",
    specs: "Voltage: 48V/60V | Power: 1500W"
  },

  { id: 4, name: "BLDC Controller Intelligent 1000W 50A", category: "EV Rickshaw", sub: "Controller",
    description: "Smart controller ensuring smooth speed control.",
    specs: "Power: 1000W | Current: 50A"
  },

  { id: 5, name: "BLDC Controller Intelligent 1250W 55A", category: "EV Rickshaw", sub: "Controller",
    description: "Advanced controller for efficient motor operation.",
    specs: "Power: 1250W | Current: 55A"
  },

  { id: 6, name: "BLDC Controller Intelligent 1500W 60A", category: "EV Rickshaw", sub: "Controller",
    description: "High-current controller for powerful EV systems.",
    specs: "Power: 1500W | Current: 60A"
  },

  { id: 7, name: "Open Gear Box", category: "EV Rickshaw", sub: "Gear Box",
    description: "Open-type gear box for efficient power transmission.",
    specs: "Type: Open Gear Box"
  },

  { id: 8, name: "Closed Gear Box", category: "EV Rickshaw", sub: "Gear Box",
    description: "Closed gear box with better durability and protection.",
    specs: "Type: Closed Gear Box"
  },

  { id: 9, name: "Rear Brake Drum (160mm / 180mm)", category: "EV Rickshaw", sub: "Rear Axle",
    description: "Reliable braking component for safety and control.",
    specs: "Size: 160mm / 180mm"
  },

  { id: 10, name: "Rear Brake Cam", category: "EV Rickshaw", sub: "Rear Axle",
    description: "Brake cam ensuring smooth brake operation.",
    specs: "Heavy-duty material"
  },

  { id: 11, name: "Rear Shaft Sizes (17–21.5)", category: "EV Rickshaw", sub: "Rear Axle",
    description: "Multiple size shaft options for compatibility.",
    specs: "Sizes: 17, 17.5, 18, 18.5, 21, 21.5"
  },

  { id: 12, name: "Shaft Key / Check Nut", category: "EV Rickshaw", sub: "Rear Axle",
    description: "Essential fitting component for axle assembly.",
    specs: "Precision fit"
  },

  { id: 13, name: "Leaf Spring (Kanami Set)", category: "EV Rickshaw", sub: "Suspension",
    description: "Strong suspension support for heavy load.",
    specs: "Multi-layer Kanami Set"
  },

  { id: 14, name: "U Bolt", category: "EV Rickshaw", sub: "Suspension",
    description: "Secure fastening for suspension system.",
    specs: "Heavy-duty steel"
  },

  { id: 15, name: "Spring Plate", category: "EV Rickshaw", sub: "Suspension",
    description: "Plate for mounting leaf spring assembly.",
    specs: "Durable metal plate"
  },

  { id: 16, name: "Auto Panels (Reep / E-Rise)", category: "EV Rickshaw", sub: "Body Parts",
    description: "Complete body panel set for e-rickshaw.",
    specs: "Brand: Reep / E-Rise"
  },

  { id: 17, name: "Front Shocker (31mm / 37mm / 43mm)", category: "EV Rickshaw", sub: "Suspension",
    description: "Front suspension for smooth ride quality.",
    specs: "Sizes: 31mm / 37mm / 43mm"
  },

  { id: 18, name: "T Type Shocker 37mm / 47mm", category: "EV Rickshaw", sub: "Suspension",
    description: "Heavy-duty shock absorber.",
    specs: "Sizes: 37mm / 47mm"
  },

  { id: 19, name: "Lead Acid Battery 12V (100Ah–140Ah)", category: "EV Rickshaw", sub: "Battery",
    description: "Affordable battery option for EV usage.",
    specs: "Capacity: 100Ah–140Ah"
  },

  { id: 20, name: "Lithium Battery 48V/60V/72V (60Ah–105Ah)", category: "EV Rickshaw", sub: "Battery",
    description: "High-performance lithium battery with long life.",
    specs: "Voltage: 48V/60V/72V | Capacity: 60Ah–105Ah"
  },

  { id: 21, name: "Lead Acid Charger 48V/60V 18A", category: "EV Rickshaw", sub: "Charger",
    description: "Efficient charger for lead acid batteries.",
    specs: "Voltage: 48V/60V | Current: 18A"
  },

  { id: 22, name: "Lithium LFP Charger 48V/60V 18A/20A", category: "EV Rickshaw", sub: "Charger",
    description: "Fast charging solution for lithium batteries.",
    specs: "18A / 20A"
  },

  { id: 23, name: "PMSM Motor 48V/72V (2kW–10kW)", category: "EV Rickshaw", sub: "Motor",
    description: "Advanced PMSM motor for high efficiency.",
    specs: "Power: 2kW–10kW"
  },

  { id: 24, name: "PMSM Controller 48V/72V (100A–300A)", category: "EV Rickshaw", sub: "Controller",
    description: "Controller for PMSM motors with high current support.",
    specs: "Current: 100A–300A"
  },



  /* ================= EV BIKE ================= */

  { id: 25, name: "10 Inch Hub Motor 1000W / 1200W", category: "EV Bike Spare Parts", sub: "Motor",
    description: "Compact hub motor for electric scooters.",
    specs: "Power: 1000W–1200W"
  },

  { id: 26, name: "12 Inch Hub Motor 1000W / 1500W", category: "EV Bike Spare Parts", sub: "Motor",
    description: "High-power hub motor for electric bikes.",
    specs: "Power: 1000W–1500W"
  },

  { id: 27, name: "Okinawa Hub Motor", category: "EV Bike Spare Parts", sub: "Motor",
    description: "Compatible motor for Okinawa EV models.",
    specs: "Brand: Okinawa"
  },

  { id: 28, name: "Optima Hub Motor", category: "EV Bike Spare Parts", sub: "Motor",
    description: "Reliable motor for Hero Optima EV.",
    specs: "Brand: Optima"
  },

  { id: 29, name: "Controller 48V/60V/72V (35A–45A)", category: "EV Bike Spare Parts", sub: "Controller",
    description: "Multi-voltage controller for EV systems.",
    specs: "Current: 35A–45A"
  },

  { id: 30, name: "Votol EM50 Controller", category: "EV Bike Spare Parts", sub: "Controller",
    description: "High-performance Votol controller.",
    specs: "Model: EM50"
  },

  { id: 31, name: "Throttle F/R & F/R 123", category: "EV Bike Spare Parts", sub: "Throttle",
    description: "Smooth throttle control for EV vehicles.",
    specs: "Type: Forward/Reverse"
  },

  { id: 32, name: "Brake Shoe 110mm / 130mm", category: "EV Bike Spare Parts", sub: "Brake",
    description: "Durable brake shoe for safe braking.",
    specs: "Sizes: 110mm / 130mm"
  },

  { id: 33, name: "Brake Drum 110mm / 130mm", category: "EV Bike Spare Parts", sub: "Brake",
    description: "Strong brake drum for efficient braking.",
    specs: "Sizes: 110mm / 130mm"
  },

  { id: 34, name: "Disc Pad", category: "EV Bike Spare Parts", sub: "Brake",
    description: "High-quality disc pad for braking system.",
    specs: "Long life material"
  },

  { id: 35, name: "Tablet Display 48V/72V", category: "EV Bike Spare Parts", sub: "Display",
    description: "Digital display showing speed, battery, and stats.",
    specs: "Voltage: 48V / 72V"
  },

  { id: 36, name: "Optima Display", category: "EV Bike Spare Parts", sub: "Display",
    description: "Display unit for Optima EV models.",
    specs: "Brand compatible"
  },



  /* ================= CONVERSION KIT ================= */

  { id: 37, name: "36V 350W Hub Motor Kit", category: "EV Conversion Kit", sub: "Bicycle Kit",
    description: "Convert bicycles into electric vehicles easily.",
    specs: "36V | 350W"
  },

  { id: 38, name: "24V 250W Hub Motor Kit", category: "EV Conversion Kit", sub: "Bicycle Kit",
    description: "Lightweight conversion kit for bicycles.",
    specs: "24V | 250W"
  },

  { id: 39, name: "TVS XL 48V/60V Hub Motor Kit", category: "EV Conversion Kit", sub: "TVS XL Kit",
    description: "Complete kit for TVS XL conversion.",
    specs: "48V/60V"
  },

  { id: 40, name: "10 Inch Hub Motor Kit (Drum / Disc)", category: "EV Conversion Kit", sub: "Scooter Kit",
    description: "Scooter conversion kit with hub motor.",
    specs: "Drum / Disc Brake"
  },

  { id: 41, name: "12 Inch Hub Motor Kit", category: "EV Conversion Kit", sub: "Scooter Kit",
    description: "High-performance scooter conversion kit.",
    specs: "12 inch motor"
  },

  { id: 42, name: "18 Inch Hub Motor Kit", category: "EV Conversion Kit", sub: "Bike Kit",
    description: "Conversion kit for motorcycles.",
    specs: "18 inch wheel"
  },

  { id: 43, name: "17 Inch Alloy Wheel Kit 1500W / 2000W", category: "EV Conversion Kit", sub: "Bike Kit",
    description: "Alloy wheel conversion kit with high power motor.",
    specs: "1500W / 2000W"
  },



  /* ================= BATTERIES ================= */

  { id: 44, name: "Lithium LFP Battery 48V/60V/72V (30Ah–60Ah)", category: "EV Batteries", sub: "Lithium",
    description: "Long-life lithium battery for EV applications.",
    specs: "30Ah–60Ah"
  },

  { id: 45, name: "Lead Acid Battery 12V (28Ah–36Ah)", category: "EV Batteries", sub: "Lead Acid",
    description: "Budget-friendly lead acid battery.",
    specs: "28Ah–36Ah"
  },



  /* ================= CHARGERS ================= */

  { id: 46, name: "Lithium Charger 48V/60V/72V (6A–10A)", category: "EV Charger", sub: "Lithium Charger",
    description: "Fast charger for lithium batteries.",
    specs: "6A–10A"
  },

  { id: 47, name: "Lead Acid Charger 48V/60V (3A–4A)", category: "EV Charger", sub: "Lead Acid Charger",
    description: "Standard charger for lead acid batteries.",
    specs: "3A–4A"
  }

];

export default products;