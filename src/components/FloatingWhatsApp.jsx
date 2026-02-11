import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919XXXXXXXXX"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 15 }}
      whileHover={{ scale: 1.1 }}
      className="
        fixed
        bottom-6
        right-6
        z-[999]
        bg-[#25D366]
        w-14 h-14
        md:w-16 md:h-16
        rounded-full
        flex items-center justify-center
        shadow-lg
      "
    >
      {/* Pulse Ring */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-40 animate-ping"></span>

      {/* WhatsApp Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="relative w-6 h-6 md:w-7 md:h-7"
      >
        <path d="M16 3C9.383 3 4 8.383 4 15c0 2.642.861 5.087 2.323 7.066L4 29l7.147-2.292A11.95 11.95 0 0016 27c6.617 0 12-5.383 12-12S22.617 3 16 3zm0 22c-1.994 0-3.877-.62-5.463-1.785l-.39-.28-4.243 1.361 1.39-4.136-.254-.4A9.945 9.945 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.35-7.606c-.293-.146-1.735-.857-2.003-.955-.268-.098-.463-.146-.658.146-.195.293-.756.955-.927 1.151-.171.195-.341.22-.634.073-.293-.146-1.237-.456-2.357-1.455-.871-.777-1.459-1.737-1.631-2.03-.171-.293-.018-.451.128-.597.131-.13.293-.341.439-.512.146-.171.195-.293.293-.488.098-.195.049-.366-.024-.512-.073-.146-.658-1.586-.902-2.171-.237-.568-.478-.49-.658-.498l-.561-.01c-.195 0-.512.073-.78.366s-1.024 1-1.024 2.439 1.049 2.829 1.195 3.024c.146.195 2.065 3.152 5.005 4.417.699.302 1.244.482 1.669.617.701.223 1.338.191 1.842.116.562-.084 1.735-.708 1.98-1.392.244-.684.244-1.27.171-1.392-.073-.122-.268-.195-.561-.341z"/>
      </svg>
    </motion.a>
  );
}
