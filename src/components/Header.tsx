import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="px-6 py-4 md:px-12 lg:px-20">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center transform -skew-x-12">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">
            bg.removal
          </span>
        </div>

        {/* Get Started Button */}
        <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-6 py-2 flex items-center gap-2 group">
          Get started
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </header>
  );
}
