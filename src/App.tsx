import "./App.css";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { TestimonialsSection } from "./components/TestinomialsSection";
import { StepsSection } from "./components/StepsSection";
import { CtaSection } from "./components/CtaSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <TestimonialsSection />
      <StepsSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default App;
