import { motion } from "framer-motion";
import { useState } from "react";

function Pricing() {
  const [yearly, setYearly] = useState(false);

  const plans = [
    {
      title: "Starter",
      monthly: 0,
      yearly: 0,
      desc: "Perfect for individuals.",
      features: ["1 Project", "5 GB Storage", "Basic Analytics", "Email Support"],
      cta: "Get Started",
      highlight: false,
    },
    {
      title: "Pro",
      monthly: 29,
      yearly: 19,
      desc: "Best for growing startups.",
      features: ["Unlimited Projects", "Unlimited Storage", "Advanced Analytics", "Priority Support", "AI Automation"],
      cta: "Start Free Trial",
      highlight: true,
    },
    {
      title: "Enterprise",
      monthly: 99,
      yearly: 69,
      desc: "For large companies.",
      features: ["Unlimited Everything", "Dedicated Manager", "Custom API", "24/7 Support", "Security Suite"],
      cta: "Contact Sales",
      highlight: false,
    },
  ];

  return (
    <section className="py-28 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-5 py-2 rounded-full font-semibold text-sm">
            PRICING
          </span>
          <h2 className="text-5xl font-black mt-5 text-gray-900 dark:text-white">Simple Pricing</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 text-lg">
            Choose the perfect plan for your business.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-medium ${!yearly ? "text-gray-900 dark:text-white" : "text-gray-400"}`}>Monthly</span>
            <button
              onClick={() => setYearly(!yearly)}
              className={`relative w-12 h-6 rounded-full transition-colors ${yearly ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-600"}`}
            >
              <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${yearly ? "translate-x-7" : "translate-x-1"}`} />
            </button>
            <span className={`text-sm font-medium ${yearly ? "text-gray-900 dark:text-white" : "text-gray-400"}`}>
              Yearly <span className="text-blue-500 font-bold text-xs">Save 35%</span>
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl p-8 transition-all ${
                plan.highlight
                  ? "bg-blue-600 text-white shadow-2xl shadow-blue-500/30 scale-105"
                  : "bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1.5 rounded-full">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-2xl font-bold mb-1">{plan.title}</h3>
              <p className={`text-sm mb-6 ${plan.highlight ? "text-blue-200" : "text-gray-500 dark:text-gray-400"}`}>
                {plan.desc}
              </p>

              <div className="mb-8">
                <span className="text-5xl font-black">${yearly ? plan.yearly : plan.monthly}</span>
                <span className={`text-sm ml-1 ${plan.highlight ? "text-blue-200" : "text-gray-400"}`}>/month</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                      plan.highlight ? "bg-white/20 text-white" : "bg-blue-100 dark:bg-blue-900/40 text-blue-600"
                    }`}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3.5 rounded-xl font-semibold transition-all hover:scale-105 ${
                plan.highlight
                  ? "bg-white text-blue-600 hover:bg-blue-50"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;