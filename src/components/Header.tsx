import { ArrowRight } from "lucide-react";
import { Logo } from "./ui/Logo";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-white/80 border-b border-slate-100 px-6 py-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />
        <Button
          className="px-5 py-2.5 text-sm group"
          variant="default"
          onClick={() => document.getElementById("upload-input")?.click()}
        >
          <span className="mr-2">Get started</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </header>
  );
}
