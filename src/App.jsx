import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-500">

        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <Companies />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />

        {showTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-500/30 hover:scale-110 transition flex items-center justify-center text-xl"
          >
            ↑
          </button>
        )}

      </div>
    </div>
  );
}

export default App;