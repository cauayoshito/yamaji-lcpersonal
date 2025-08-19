import { motion } from "framer-motion";

export default function FloatingWhatsapp({ href, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-4 right-4 z-[70] 
                 rounded-full bg-primary text-[#052a22] 
                 font-semibold shadow-lg shadow-primary/40
                 px-4 py-3 text-sm
                 sm:px-5 sm:py-3 sm:text-base
                 md:px-6 md:py-3 md:text-lg"
    >
      {label}
    </motion.a>
  );
}
