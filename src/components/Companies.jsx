import { motion } from "framer-motion";

function Companies() {
  const companies = ["Google", "Microsoft", "Stripe", "Slack", "Shopify", "Notion"];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
            Trusted Worldwide
          </span>
          <h2 className="text-4xl font-black mt-4 text-gray-900 dark:text-white">
            Trusted by Innovative Companies
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto">
            Thousands of startups and enterprises rely on SaaSify every day.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {companies.map((company, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.05 }}
              className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-md p-6 flex items-center justify-center hover:shadow-xl transition-all"
            >
              <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300">{company}</h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Companies;