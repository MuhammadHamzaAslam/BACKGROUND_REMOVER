
import { motion } from "framer-motion";
import { Facebook, Globe, Instagram } from "lucide-react";
import { Logo } from "./ui/Logo";

export function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-20 py-12 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo and Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-6 md:mb-0">
          <Logo />
          <p className="text-slate-600 text-sm">
            Copyright &copy; {new Date().getFullYear()} Muhammad Hamza. All
            rights reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          {/* Placeholder for social links */}
          <motion.a
            href="https://www.facebook.com/MuhammadHamzaAslam19"
            whileHover={{ scale: 1.1, color: "#6d28d9" }}
            className="text-slate-500 transition"
            target="_blank"
          >
            <Facebook className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/muhammad_hamza_19/"
            whileHover={{ scale: 1.1, color: "#6d28d9" }}
            className="text-slate-500 transition"
          >
            <Instagram className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="https://m-hamza.vercel.app/"
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