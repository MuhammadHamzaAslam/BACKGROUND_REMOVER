import { motion, Variants } from "framer-motion";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "bg.removal is a game-changer for my e-commerce business. The quality is consistently excellent, saving me hours of manual editing every week.",
      author: "Richard Nelson",
      title: "E-commerce Founder",
      avatar: "RN",
      color: "bg-blue-600",
    },
    {
      quote:
        "The precision is incredible. I had a fantastic experience, and the output is flawless. I highly recommend this app to every designer.",
      author: "Donald Jackman",
      title: "Lead UI Designer",
      avatar: "DJ",
      color: "bg-amber-600",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 bg-white">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-slate-900 mb-16 tracking-tight">
        Trusted by Professionals Globally
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -4, boxShadow: "0 15px 30px rgba(0,0,0,0.08)" }}
            className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg transition-all"
          >
            <Quote className="w-8 h-8 text-purple-300 mb-6" />
            <p className="text-xl italic text-slate-700 leading-relaxed mb-8">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md`}
              >
                {testimonial.avatar}
              </div>
              <div>
                <p className="font-semibold text-slate-900">
                  {testimonial.author}
                </p>
                <p className="text-sm text-slate-500">{testimonial.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
