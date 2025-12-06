import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { StepsSection } from "./components/StepsSection";
import { CtaSection } from "./components/CtaSection";
import { Footer } from "./components/Footer";
import { TestimonialsSection } from "./components/TestinomialsSection";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Header />
      <main>
        <HeroSection />
        <StepsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
