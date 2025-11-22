import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

export function CtaSection() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 bg-white">
      <div className="max-w-3xl mx-auto text-center space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
          See the magic. Try now
        </h2>

        <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-6 text-lg flex items-center gap-2 mx-auto group">
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          Upload your image
        </Button>
      </div>
    </section>
  );
}
