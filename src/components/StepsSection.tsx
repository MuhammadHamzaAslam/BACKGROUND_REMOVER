import { motion, type Variants } from "framer-motion";
import { ArrowUpToLine, Wand2, Download } from "lucide-react";

export function StepsSection() {
  const steps = [
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
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
            <p className="text-xl font-bold text-slate-900 mb-3">
              {step.title}
            </p>
            <p className="text-slate-600">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
