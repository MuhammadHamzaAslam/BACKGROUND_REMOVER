import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloudUpload, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "./ui/button";

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  // Function to simulate upload
  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
    }, 2000);
  };

  const beforeUrl =
    "https://placehold.co/400x400/F5F5F4/3F3F46?text=Original+Image";
  const afterUrl =
    "https://placehold.co/400x400/9333ea/FFFFFF?text=Background+Removed";

  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tighter leading-tight">
            <span className="text-purple-600">Instantly</span> Remove Image
            Backgrounds. 100% Free.
          </h1>
          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
            Get high-quality, transparent backgrounds in seconds with our
            state-of-the-art AI technology. No logins, no hassle.
          </p>
        </motion.div>

        {/* Upload Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            type: "spring",
            stiffness: 50,
          }}
          className="mt-12 bg-slate-50 border-4 border-dashed border-purple-300 rounded-3xl p-6 md:p-12 shadow-2xl relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Before/After Visual */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
            <div className="relative">
              <img
                src={beforeUrl}
                alt="Original Image"
                className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-xl shadow-lg border border-slate-200"
                onError={(e) => {
                  e.currentTarget.src = beforeUrl;
                  e.currentTarget.alt = "Placeholder: Original Image";
                }}
              />
              <span className="absolute bottom-0 right-0 bg-slate-900 text-white text-xs font-semibold px-2 py-0.5 rounded-tl-lg rounded-br-lg">
                Original
              </span>
            </div>
            <ArrowRight className="w-8 h-8 text-purple-600 my-4 md:my-0 md:rotate-0 rotate-90" />
            <div className="relative">
              <motion.img
                key="after-image"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                src={afterUrl}
                alt="Removed Background"
                className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-xl shadow-lg border border-purple-600/50"
                onError={(e) => {
                  e.currentTarget.src = afterUrl;
                  e.currentTarget.alt = "Placeholder: Background Removed";
                }}
              />
              <span className="absolute bottom-0 right-0 bg-purple-600 text-white text-xs font-semibold px-2 py-0.5 rounded-tl-lg rounded-br-lg">
                Result
              </span>
            </div>
          </div>

          {/* Upload Button */}
          <motion.div
            initial={{ scale: 1 }}
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-full max-w-sm mx-auto"
          >
            <Button
              className="w-full px-10 py-4 text-xl flex items-center justify-center gap-3 shadow-purple-500/50"
              onClick={handleUpload}
              disabled={isUploading}
            >
              <AnimatePresence mode="wait">
                {isUploading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0, rotate: 0 }}
                    animate={{ opacity: 1, rotate: 360 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-3"
                  >
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Processing...
                  </motion.div>
                ) : (
                  <motion.div
                    key="upload"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-3"
                  >
                    <CloudUpload className="w-6 h-6" />
                    Upload Your Image
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>

          <p className="mt-4 text-sm text-slate-500">
            Supports PNG, JPG, up to 12MB. Drag and drop file anywhere.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
