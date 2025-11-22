import { Facebook, Twitter, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-20 py-12 border-t border-slate-200 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Logo and Copyright */}
        <div className="flex items-center gap-8 mb-6 md:mb-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center transform -skew-x-12">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="font-bold text-lg text-slate-900">bg.removal</span>
          </div>

          <p className="text-slate-600 text-sm">
            Copyright @GreatStack.dev | All right reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <button className="text-slate-600 hover:text-slate-900 transition">
            <Facebook className="w-5 h-5" />
          </button>
          <button className="text-slate-600 hover:text-slate-900 transition">
            <Twitter className="w-5 h-5" />
          </button>
          <button className="text-slate-600 hover:text-slate-900 transition">
            <Globe className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
