function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-4 gap-10 border-b border-gray-800 pb-12">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-blue-500 mb-5">SaaSify</h2>
            <p className="text-gray-400 leading-7">
              Build modern SaaS applications with a beautiful, responsive
              landing page powered by React & Tailwind CSS.
            </p>
            <div className="flex gap-4 mt-6 text-gray-400 text-xl">
              <span className="hover:text-white cursor-pointer transition">𝕏</span>
              <span className="hover:text-white cursor-pointer transition">in</span>
              <span className="hover:text-white cursor-pointer transition">▶</span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Product</h3>
            <ul className="space-y-3 text-gray-400">
              {["Features", "Pricing", "Integrations", "Updates"].map((item) => (
                <li key={item} className="hover:text-white cursor-pointer transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Company</h3>
            <ul className="space-y-3 text-gray-400">
              {["About", "Careers", "Blog", "Contact"].map((item) => (
                <li key={item} className="hover:text-white cursor-pointer transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Newsletter</h3>
            <p className="text-gray-400 mb-5">Get the latest updates every week.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-3 rounded-l-xl bg-gray-800 border border-gray-700 outline-none text-sm focus:border-blue-500 transition"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-5 rounded-r-xl transition font-medium">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-gray-500 text-sm gap-4">
          <p>© 2025 SaaSify. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Support"].map((item) => (
              <a key={item} href="#" className="hover:text-white transition">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;