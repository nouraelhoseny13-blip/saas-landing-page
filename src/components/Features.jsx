import { motion } from "framer-motion";

function Features() {
  const features = [
    { icon: "⚡", title: "Lightning Fast", desc: "Optimized performance that delivers an ultra-fast experience for your users.", color: "from-blue-500 to-cyan-500" },
    { icon: "🔒", title: "Enterprise Security", desc: "Advanced security, encryption, and privacy for your business data.", color: "from-green-500 to-emerald-500" },
    { icon: "📈", title: "Analytics", desc: "Track growth with real-time dashboards and detailed business insights.", color: "from-purple-500 to-pink-500" },
    { icon: "🤖", title: "AI Automation", desc: "Automate repetitive tasks using powerful AI-driven workflows.", color: "from-indigo-500 to-violet-500" },
    { icon: "☁️", title: "Cloud Sync", desc: "Access your projects securely from anywhere across all devices.", color: "from-sky-500 to-blue-600" },
    { icon: "💬", title: "24/7 Support", desc: "Our support team is always available whenever you need help.", color: "from-orange-500 to-red-500" },
  ];

  return (
    <section id="features" className="relative py-28 bg-white dark:bg-gray-950 overflow-hidden">

      <div className="absolute -top-20 left-0 w-72 h-72 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-5 py-2 rounded-full font-semibold text-sm">
            WHY CHOOSE US
          </span>
          <h2 className="text-5xl font-black text-gray-900 dark:text-white mt-6">
            Everything You Need
            <br />To Build Your SaaS
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-5 max-w-2xl mx-auto text-lg">
            Powerful tools, beautiful interface and enterprise-grade technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group relative bg-white dark:bg-gray-800/80 dark:border dark:border-gray-700/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${item.color} transition duration-500`}></div>
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl shadow-lg mb-6`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-7">{item.desc}</p>
              <div className="mt-6 text-blue-600 dark:text-blue-400 font-semibold opacity-0 group-hover:opacity-100 transition duration-300 text-sm">
                Learn More →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;