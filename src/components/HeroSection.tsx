import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
              Remove the <span className="text-purple-600">background</span>{" "}
              from images for free.
            </h1>
          </div>

          <p className="text-lg text-slate-600 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever.
          </p>

          <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-6 text-lg flex items-center gap-2 w-fit group">
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            Upload your image
          </Button>
        </div>

        {/* Right Image Showcase */}
        <div className="relative flex justify-center">
          <div className="w-full max-w-md">
            {/* Main image container with gradient background */}
            <div className="relative bg-gradient-to-br from-pink-300 via-purple-200 to-blue-200 rounded-3xl p-1 overflow-hidden shadow-2xl">
              <div className="bg-white rounded-3xl p-8 relative overflow-hidden">
                {/* Placeholder for girl image */}
                <div className="w-full h-96 bg-gradient-to-br from-pink-200 via-purple-100 to-blue-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-slate-400">
                    <p className="text-sm">Image with transparent background</p>
                  </div>
                </div>

                {/* UI Elements Overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Remove background label */}
                  <div className="absolute top-20 left-16 bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium shadow-lg flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Remove background
                  </div>

                  {/* Action buttons */}
                  <div className="absolute top-40 left-20 flex gap-2">
                    <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition">
                      Erase
                    </button>
                    <button className="bg-slate-200 text-slate-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-300 transition">
                      Restore
                    </button>
                  </div>

                  {/* Decorative sparkles */}
                  <div className="absolute top-24 right-32 text-slate-300 text-2xl">
                    ✨
                  </div>
                  <div className="absolute bottom-40 left-32 text-slate-300 text-2xl">
                    ✨
                  </div>

                  {/* Social interaction circles */}
                  <div className="absolute top-16 right-8 w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                    </svg>
                  </div>

                  <div className="absolute bottom-32 right-8 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
                    </svg>
                  </div>

                  <div className="absolute bottom-20 left-16 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>

                  {/* Share button */}
                  <div className="absolute bottom-8 right-12 bg-blue-600 text-white px-6 py-3 rounded-full font-medium text-sm shadow-lg flex items-center gap-2 hover:bg-blue-700 transition">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0V5m0 8h.01"
                      />
                    </svg>
                    Share
                  </div>

                  {/* Social icons at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-slate-100 p-4 flex justify-center gap-6 rounded-b-2xl">
                    <svg
                      className="w-6 h-6 text-slate-900"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
                    </svg>
                    <svg
                      className="w-6 h-6 text-pink-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle cx="12" cy="12" r="3" />
                      <circle cx="17.5" cy="6.5" r="1.5" />
                    </svg>
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    <svg
                      className="w-6 h-6 text-blue-700"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.474-2.237-1.666-2.237-.909 0-1.449.613-1.687 1.205-.087.216-.11.516-.11.816v5.785h-3.554s.047-9.383 0-10.365h3.554v1.468c-.009.015-.021.029-.033.042h.033v-.042c.466-.718 1.291-1.742 3.142-1.742 2.298 0 4.022 1.502 4.022 4.735v5.904zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.951.771-1.71 1.96-1.71 1.188 0 1.913.759 1.938 1.71 0 .951-.75 1.71-1.983 1.71zm1.581 11.597H3.755V9.087h3.163v11.365zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <image
          src={
            "https://bg-remover-gs.vercel.app/assets/header_img-mdrOD-tk.png"
          }
          alt="Hero Image"
        />
      </div>
    </section>
  );
}
