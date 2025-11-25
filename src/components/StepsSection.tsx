import { motion } from "framer-motion";
import { ArrowUpToLine, Download, Wand2 } from "lucide-react";

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: <ArrowUpToLine className="w-8 h-8" />,
    title: "Upload Your Image",
    description:
      "Simply drag and drop or select the image file you want to edit. No account needed, start instantly.",
  },
  {
    icon: <Wand2 className="w-8 h-8" />,
    title: "Instant Background Removal",
    description:
      "Our AI automatically detects the subject and instantly cuts out the background with perfect precision.",
  },
  {
    icon: <Download className="w-8 h-8" />,
    title: "Download High-Res Result",
    description:
      "Get your transparent PNG or custom background image in seconds, ready for any project.",
  },
];

export function StepsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 bg-slate-50">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-slate-900 mb-16 tracking-tight">
        The magic happens in three simple steps.
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
            }}
            className="bg-white rounded-2xl p-8 shadow-md transition border border-slate-200"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mb-6 shadow-xl">
              <span className="text-white">{step.icon}</span>
            </div>

            <p className="text-sm font-semibold text-purple-600 mb-2">
              STEP {index + 1}
            </p>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              {step.title}
            </h3>
            <p className="text-slate-600 leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
