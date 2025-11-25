import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { CloudUpload } from "lucide-react";
export function CtaSection() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter">
          Ready to see the magic?
        </h2>
        <p className="text-xl text-purple-200">
          Join thousands of satisfied users. Get started now—it&apos;s free and
          incredibly fast.
        </p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          viewport={{ once: true }}
          className="pt-4"
        >
          <Button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white rounded-full px-12 py-6 text-xl flex items-center gap-3 mx-auto group shadow-2xl shadow-purple-500/50 transform hover:scale-[1.03]">
            <CloudUpload className="w-6 h-6" />
            Upload Your Image Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
