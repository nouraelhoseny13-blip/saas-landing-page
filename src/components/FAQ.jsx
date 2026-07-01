import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function FAQ() {
  const [open, setOpen] = useState(null);

  const faqs = [
    { q: "Can I try it for free?", a: "Yes! You can start with our free plan and upgrade anytime. No credit card required." },
    { q: "Do you offer customer support?", a: "Absolutely! Our support team is available 24/7 to help you with anything." },
    { q: "Can I cancel anytime?", a: "Yes, you can cancel your subscription whenever you want with no penalties." },
    { q: "Is my data secure?", a: "Your data is protected with enterprise-grade security, encryption, and regular audits." },
    { q: "Do you offer custom integrations?", a: "Yes! Pro and Enterprise plans include custom integrations with your existing tools." },
  ];

  return (
    <section className="py-28 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-5 py-2 rounded-full font-semibold text-sm">
            FAQ
          </span>
          <h2 className="text-5xl font-black mt-5 text-gray-900 dark:text-white">Got Questions?</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4">Everything you need to know before getting started.</p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition"
              >
                <span className="font-semibold text-gray-900 dark:text-white">{faq.q}</span>
                <span className={`text-blue-600 text-2xl font-bold transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-5 text-gray-600 dark:text-gray-400 leading-7">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;