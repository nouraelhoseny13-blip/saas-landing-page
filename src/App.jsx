function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b">
        <h1 className="text-2xl font-bold text-blue-600">
          SaaSify
        </h1>

        <div className="flex items-center gap-8">
          <a href="#" className="hover:text-blue-600">
            Home
          </a>
          <a href="#" className="hover:text-blue-600">
            Features
          </a>
          <a href="#" className="hover:text-blue-600">
            Pricing
          </a>
          <a href="#" className="hover:text-blue-600">
            Contact
          </a>
        </div>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Build Your SaaS Faster 🚀
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Launch your next SaaS product with a modern landing page built using
          React and Tailwind CSS.
        </p>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Start Free Trial
        </button>
      </section>
    </div>
  );
}

export default App;