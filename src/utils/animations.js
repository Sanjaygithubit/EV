export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const stagger = {
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

