import { motion } from "framer-motion";

export default function CheckIcon() {
  return (
    <motion.svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      className="mt-1 flex-shrink-0"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <circle cx="12" cy="12" r="11" stroke="#1DB954" strokeWidth="2" />
      <motion.path
        d="M7 12.5L10.5 16L17 9"
        stroke="#1DB954"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </motion.svg>
  );
}
