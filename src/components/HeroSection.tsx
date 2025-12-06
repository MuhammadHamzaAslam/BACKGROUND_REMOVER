import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CloudUpload,
  Loader2,
  Wand2,
  Download,
  XCircle,
  CheckCircle,
} from "lucide-react";
import { Button } from "./ui/button";

const CLIPDROP_REMOVE_BG_ENDPOINT =
  "https://clipdrop-api.co/remove-background/v1";
const CLIPDROP_API_KEY = import.meta.env.VITE_CLIPDROP_API_KEY;

const withBackoff = async (
  fetchFn: () => Promise<Response>,
  maxRetries = 5,
  delay = 1000
) => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetchFn();
      if (response.status !== 429 && response.status < 500) {
        return response;
      }
      console.warn(
        `API call failed with status ${response.status}. Retrying in ${delay}ms...`
      );
    } catch (error) {
      console.error("Fetch attempt failed:", error);
    }
    await new Promise((resolve) => setTimeout(resolve, delay * 2 ** i));
  }
  throw new Error("API call failed after maximum retries.");
};

const callClipdropApiForBackgroundRemoval = async (imageFile: File) => {
  if (!CLIPDROP_API_KEY) {
    throw new Error(
      "ClipDrop API Key is missing. Please ensure VITE_CLIPDROP_API_KEY is set in your .env file."
    );
  }

  const formData = new FormData();
  formData.append("image_file", imageFile, imageFile.name);

  const fetchFn = () =>
    fetch(CLIPDROP_REMOVE_BG_ENDPOINT, {
      method: "POST",
      headers: {
        "x-api-key": CLIPDROP_API_KEY,
        Accept: "image/png",
      },
      body: formData,
    });

  const response = await withBackoff(fetchFn);

  if (!response.ok) {
    const errorText = await response.text();
    console.error("ClipDrop API Error Detail:", errorText);
    let errorMessage = `ClipDrop API Error: Status ${response.status}.`;
    if (errorText.includes("Invalid x-api-key")) {
      errorMessage += " The API key is invalid or missing.";
    } else if (errorText.includes("file size")) {
      errorMessage += " The image file size or resolution is too large.";
    } else {
      errorMessage += " Check console for details.";
    }
    throw new Error(errorMessage);
  }

  const imageBlob = await response.blob();

  return new Promise<string>((resolve, reject) => {
    // Added string type to Promise
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string); // Added as string
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(imageBlob);
  });
};

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  // Using File | null for image state
  const [originalImage, setOriginalImage] = useState<File | null>(null);
  const [originalImageUrl, setOriginalImageUrl] = useState<string | null>(null);
  const [resultImageUrl, setResultImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Fixed ref types to HTMLInputElement and HTMLElement
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropzoneRef = useRef<HTMLElement>(null);

  const resetState = useCallback(() => {
    setOriginalImage(null);
    setOriginalImageUrl(null);
    setResultImageUrl(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, []);

  // Fixed file type to 'File'
  const processFile = useCallback(
    async (file: File) => {
      if (!file || !file.type.startsWith("image/")) {
        setError("Please select a valid image file.");
        return;
      }
      if (file.size > 12 * 1024 * 1024) {
        setError("Image size exceeds 12MB limit.");
        return;
      }

      resetState();
      setOriginalImage(file);
      setOriginalImageUrl(URL.createObjectURL(file));
      setIsProcessing(true);

      try {
        const resultUrl = await callClipdropApiForBackgroundRemoval(file);
        setResultImageUrl(resultUrl);
        setError(null);
      } catch (err) {
        console.error("Background Removal Error:", err);
        setError(
          `Failed to remove background: ${
            (err as Error).message || "An unknown error occurred."
          }` // Cast error to Error
        );
        setResultImageUrl(null);
      } finally {
        setIsProcessing(false);
      }
    },
    [resetState]
  );

  // Fixed handleFileChange type
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleUploadClick = () => {
    // Fixed click() error by correctly typing fileInputRef
    if (!isProcessing && !originalImage) {
      fileInputRef.current?.click();
    } else if (resultImageUrl) {
      handleDownload();
    } else if (originalImage && !isProcessing) {
      processFile(originalImage);
    } // else if (isProcessing) { do nothing }
  };

  // Fixed Drag and Drop Handlers types
  const handleDragEnter = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsHovered(true);
  };
  const handleDragLeave = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsHovered(false);
  };
  const handleDragOver = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsHovered(true);
  };

  const handleDrop = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsHovered(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFile(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  };

  const handleDownload = () => {
    if (resultImageUrl) {
      const link = document.createElement("a");
      link.href = resultImageUrl;
      link.download = `bg-removal-result-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section
      className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-white"
      ref={dropzoneRef}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="max-w-7xl mx-auto text-center space-y-12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 leading-tight">
            Instant, <span className="text-purple-600">AI-Powered</span>{" "}
            Background Removal
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
            Remove image backgrounds with a single click. No credits, no
            sign-up, just flawless results in seconds.
          </p>
        </motion.div>

        {/* Upload Area & Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <div className="w-full max-w-4xl bg-slate-50 border-4 border-dashed border-slate-200 rounded-3xl p-6 md:p-10 shadow-xl transition-all duration-300 relative overflow-hidden">
            {/* Drag Overlay */}
            <AnimatePresence>
              {isHovered && !originalImage && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-purple-500/80 backdrop-blur-sm flex items-center justify-center z-10 rounded-3xl cursor-pointer"
                  onClick={handleUploadClick}
                >
                  <div className="text-white text-3xl font-bold flex flex-col items-center gap-4">
                    <CloudUpload className="w-12 h-12 animate-bounce" />
                    Drop your image here!
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Error/Success Messages */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center justify-center gap-3 text-left"
                >
                  <XCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{error}</span>
                  <button
                    onClick={resetState}
                    className="text-sm font-semibold ml-auto text-red-500 hover:text-red-700"
                  >
                    Clear
                  </button>
                </motion.div>
              )}
              {resultImageUrl && !isProcessing && !error && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center justify-center gap-3 text-left"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>
                    Background successfully removed! Click Download below.
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Image Comparison Area */}
            {originalImageUrl ? (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                }}
              >
                {/* Original Image */}
                <motion.div variants={cardVariants} className="space-y-3">
                  <p className="font-semibold text-slate-800 text-lg">
                    Original Image
                  </p>
                  <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg border-4 border-slate-200 bg-white">
                    <img
                      src={originalImageUrl}
                      alt="Original"
                      className="w-full h-full object-contain p-2"
                    />
                    <div className="absolute inset-0 bg-slate-100/50 backdrop-blur-sm flex items-center justify-center opacity-0 transition-opacity hover:opacity-100">
                      <button
                        onClick={resetState}
                        className="px-4 py-2 bg-red-600 text-white rounded-full text-sm font-medium hover:bg-red-700"
                      >
                        Remove Image
                      </button>
                    </div>
                  </div>
                </motion.div>

                {/* Result Image */}
                <motion.div variants={cardVariants} className="space-y-3">
                  <p className="font-semibold text-purple-600 text-lg flex items-center justify-center">
                    <Wand2 className="w-5 h-5 mr-2" />
                    Background Removed
                  </p>
                  <div
                    className={`relative aspect-square rounded-xl overflow-hidden shadow-lg border-4 ${
                      resultImageUrl ? "border-purple-300" : "border-slate-200"
                    } bg-gray-200 grid place-items-center`}
                  >
                    {/* Checkerboard Background for Transparency Demo */}
                    <div
                      className="absolute inset-0 bg-repeat bg-center"
                      style={{
                        backgroundImage:
                          "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)",
                        backgroundSize: "20px 20px",
                        backgroundPosition:
                          "0 0, 0 10px, 10px -10px, -10px 0px",
                      }}
                    ></div>

                    <AnimatePresence mode="wait">
                      {isProcessing ? (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="flex flex-col items-center justify-center gap-4 text-purple-700 z-10 bg-white/80 p-6 rounded-xl shadow-2xl"
                        >
                          <Loader2 className="w-10 h-10 animate-spin" />
                          <span className="font-semibold text-lg">
                            Processing with AI...
                          </span>
                        </motion.div>
                      ) : resultImageUrl ? (
                        <motion.img
                          key="result"
                          src={resultImageUrl}
                          alt="Background Removed Result"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ type: "spring", stiffness: 100 }}
                          className="w-full h-full object-contain p-2 z-20"
                        />
                      ) : (
                        <motion.div
                          key="placeholder"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-slate-500 font-medium text-lg z-10"
                        >
                          Result will appear here
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <div className="py-20 text-center space-y-4">
                <CloudUpload className="w-16 h-16 text-purple-500 mx-auto" />
                <h3 className="text-2xl font-semibold text-slate-800">
                  Click or Drag & Drop an Image
                </h3>
                <p className="text-slate-500">
                  Upload a high-quality image (PNG or JPG) to begin the magic.
                </p>
              </div>
            )}

            {/* File Input (Hidden) */}
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              id="upload-input"
            />

            {/* Action Button */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="pt-8"
            >
              <Button
                className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white rounded-full px-12 py-6 text-xl flex items-center gap-3 shadow-2xl shadow-purple-500/50 transform hover:scale-[1.02]"
                onClick={resultImageUrl ? handleDownload : handleUploadClick}
                disabled={isProcessing}
              >
                <AnimatePresence mode="wait">
                  {isProcessing ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0, rotate: 0 }}
                      animate={{ opacity: 1, rotate: 360 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-3"
                    >
                      <Loader2 className="w-6 h-6 animate-spin" />
                      AI Working...
                    </motion.div>
                  ) : resultImageUrl ? (
                    <motion.div
                      key="download"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-3"
                    >
                      <Download className="w-6 h-6" />
                      Download Result (PNG)
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
                      {originalImage ? "Reprocess Image" : "Upload Your Image"}
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Supports PNG, JPG, up to 12MB. Drag and drop file anywhere.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
