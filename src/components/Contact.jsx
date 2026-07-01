import { motion } from "framer-motion";
import { useState } from "react";

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-28 bg-white dark:bg-gray-950">
      
      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-5 py-2 rounded-full font-semibold text-sm">
            CONTACT
          </span>
          <h2 className="text-5xl font-black mt-5 text-gray-900 dark:text-white">Let's Build Something Amazing</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 text-lg">We'd love to hear from you. Send us a message anytime.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}
          <div className="flex flex-col gap-5">
            {[
              { icon: "📍", title: "Address", value: "Cairo, Egypt" },
              { icon: "📧", title: "Email", value: "hello@saasify.com" },
              { icon: "📞", title: "Phone", value: "+20 100 123 4567" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 flex items-center gap-4 hover:shadow-lg transition"
              >
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3xl shadow-xl p-8"
          >
            {sent ? (
              <div className="text-center py-10">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-gray-500 dark:text-gray-400">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                {["Full Name", "Email"].map((label) => (
                  <div key={label}>
                    <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300 text-sm">{label}</label>
                    <input
                      type={label === "Email" ? "email" : "text"}
                      placeholder={label === "Email" ? "john@email.com" : "John Smith"}
                      className="w-full border border-gray-200 dark:border-gray-600 rounded-xl px-5 py-3.5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 transition text-sm"
                    />
                  </div>
                ))}
                <div>
                  <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300 text-sm">Message</label>
                  <textarea
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full border border-gray-200 dark:border-gray-600 rounded-xl px-5 py-3.5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 transition resize-none text-sm"
                  />
                </div>
                <button
                  onClick={() => setSent(true)}
                  className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 hover:scale-[1.02] transition font-semibold shadow-lg shadow-blue-500/30"
                >
                  Send Message 🚀
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;