import { useEffect, useState } from "react";

function Navbar({ darkMode, setDarkMode }) {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", id: "home" },
    { label: "Features", id: "features" },
    { label: "Pricing", id: "pricing" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scroll
        ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl shadow-lg"
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="text-3xl font-extrabold text-blue-600 cursor-pointer"
        >
          SaaSify
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700 dark:text-gray-300">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:scale-110 transition text-xl"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button className="hidden md:block border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-5 py-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            Login
          </button>

          <button
            onClick={() => scrollTo("pricing")}
            className="bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 hover:scale-105 transition shadow-lg"
          >
            Get Started →
          </button>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-2xl text-gray-700 dark:text-gray-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-950 border-t dark:border-gray-800 px-8 py-5 flex flex-col gap-4">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 transition font-medium py-1"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("pricing")}
            className="bg-blue-600 text-white py-3 rounded-xl font-semibold"
          >
            Get Started →
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;