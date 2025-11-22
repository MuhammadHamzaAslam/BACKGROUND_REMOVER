import type React from "react";
import { ArrowUp, Wand2, Download } from "lucide-react";

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: <ArrowUp className="w-8 h-8" />,
    title: "Upload image",
    description:
      "This is a demo text, will replace it later.\nThis is a demo..",
  },
  {
    icon: <Wand2 className="w-8 h-8" />,
    title: "Remove background",
    description:
      "This is a demo text, will replace it later.\nThis is a demo..",
  },
  {
    icon: <Download className="w-8 h-8" />,
    title: "Download image",
    description:
      "This is a demo text, will replace it later.\nThis is a demo..",
  },
];

export function StepsSection() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 bg-slate-50">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16">
        Steps to remove background
        <br />
        image in seconds
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition border border-slate-200"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6">
              {step.icon}
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              {step.title}
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
