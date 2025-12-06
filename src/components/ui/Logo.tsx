import { motion } from "framer-motion";

export const Logo = () => (
  <div className="flex items-center gap-2">
    <motion.div
      initial={{ rotate: -90, scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center shadow-lg"
    >
      <span className="text-white font-extrabold text-lg">B</span>
    </motion.div>
    <span className="font-extrabold text-2xl tracking-tighter text-slate-900">
      bg.removal
    </span>
  </div>
);
