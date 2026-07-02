import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-500">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Hero />
      <Companies />
      <Features />
      <Stats />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;