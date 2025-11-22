import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  avatar: string;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
    author: "Richard Nelson",
    title: "Web Developer",
    avatar: "RN",
    color: "bg-blue-500",
  },
  {
    quote:
      "I've been using bg.removal for nearly 6 months, I had a fantastic experience. The quality is top-notch. I recommend others to try this app.",
    author: "Donald Jackman",
    title: "UI Designer",
    avatar: "DJ",
    color: "bg-amber-500",
  },
];

export function TestimonialsSection() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16">
        Customer Testimonials
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition"
          >
            <Quote className="w-8 h-8 text-slate-300 mb-6" />

            <p className="text-slate-700 leading-relaxed mb-8">
              {testimonial.quote}
            </p>

            <div className="flex items-center gap-3">
              <div
                className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}
              >
                {testimonial.avatar}
              </div>
              <div>
                <p className="font-semibold text-slate-900">
                  {testimonial.author}
                </p>
                <p className="text-sm text-slate-600">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
