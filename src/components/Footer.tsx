import { motion } from "framer-motion";
import { Facebook, Twitter, Globe } from "lucide-react";
import type React from "react";

const Logo: React.FC = () => (
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
export function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-20 py-12 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo and Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-6 md:mb-0">
          <Logo />
          <p className="text-slate-600 text-sm">
            Copyright &copy; {new Date().getFullYear()} Muhammad Hamza. All rights
            reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <motion.a
            href="#"
            whileHover={{ scale: 1.1, color: "#6d28d9" }}
            className="text-slate-500 transition"
          >
            <Facebook className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1, color: "#6d28d9" }}
            className="text-slate-500 transition"
          >
            <Twitter className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1, color: "#6d28d9" }}
            className="text-slate-500 transition"
          >
            <Globe className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
