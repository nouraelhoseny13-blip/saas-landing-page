import { motion } from "framer-motion";

function Testimonials() {
  const testimonials = [
    { name: "Sarah Johnson", role: "CEO, StartupX", image: "https://i.pravatar.cc/100?img=1", text: "This platform completely changed the way we launch products. Amazing experience!" },
    { name: "Michael Brown", role: "Founder, DevFlow", image: "https://i.pravatar.cc/100?img=2", text: "Beautiful design, excellent performance, and super easy to customize." },
    { name: "Emily Davis", role: "Marketing Lead", image: "https://i.pravatar.cc/100?img=3", text: "Our conversions increased by 35% after switching to this landing page." },
  ];

  return (
    <section id="testimonials" className="py-28 bg-white dark:bg-gray-950">
      
      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-5 py-2 rounded-full font-semibold text-sm">
            TESTIMONIALS
          </span>
          <h2 className="text-5xl font-black mt-5 text-gray-900 dark:text-white">Loved by Thousands</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 text-lg">See what our customers are saying.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gray-50 dark:bg-gray-800/80 dark:border dark:border-gray-700/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="text-yellow-400 text-xl mb-5">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 dark:text-gray-300 italic leading-7 mb-8">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500/30" />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">{item.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;