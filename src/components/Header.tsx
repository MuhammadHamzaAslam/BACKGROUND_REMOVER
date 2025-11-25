import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import type React from "react";
import { motion } from "framer-motion";

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

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-white/80 border-b border-slate-100 px-6 py-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />
        <Button className="px-5 py-2.5 text-sm group" variant="default">
          <span className="mr-2">Get started</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </header>
  );
}
