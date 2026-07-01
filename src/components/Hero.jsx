import { motion } from "framer-motion";

const GlowingParticles = () => {
  const particles = [
    { size: 6, top: "15%", left: "10%", color: "#3b82f6", delay: 0 },
    { size: 4, top: "25%", left: "85%", color: "#8b5cf6", delay: 0.5 },
    { size: 8, top: "60%", left: "5%", color: "#06b6d4", delay: 1 },
    { size: 5, top: "70%", left: "90%", color: "#3b82f6", delay: 1.5 },
    { size: 7, top: "40%", left: "92%", color: "#8b5cf6", delay: 2 },
    { size: 4, top: "80%", left: "20%", color: "#06b6d4", delay: 0.8 },
    { size: 6, top: "10%", left: "60%", color: "#3b82f6", delay: 1.2 },
    { size: 5, top: "50%", left: "75%", color: "#8b5cf6", delay: 0.3 },
    { size: 9, top: "85%", left: "70%", color: "#3b82f6", delay: 1.8 },
    { size: 4, top: "30%", left: "30%", color: "#06b6d4", delay: 2.2 },
    { size: 6, top: "90%", left: "45%", color: "#8b5cf6", delay: 0.6 },
    { size: 5, top: "20%", left: "45%", color: "#3b82f6", delay: 1.4 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.size}px ${p.color}80`,
          }}
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
            scale: [1, 1.3, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3 + p.delay,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const GlowingMiniCards = () => {
  const cards = [
    {
      icon: "📈",
      label: "Revenue Up",
      value: "+28%",
      color: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/30",
      glow: "shadow-blue-500/20",
      top: "12%",
      left: "2%",
    },
    {
      icon: "👥",
      label: "New Users",
      value: "1,248",
      color: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/30",
      glow: "shadow-purple-500/20",
      top: "55%",
      left: "1%",
    },
    {
      icon: "⚡",
      label: "Uptime",
      value: "99.9%",
      color: "from-green-500/20 to-emerald-500/20",
      border: "border-green-500/30",
      glow: "shadow-green-500/20",
      top: "80%",
      left: "3%",
    },
    {
      icon: "🚀",
      label: "Deployments",
      value: "3,842",
      color: "from-orange-500/20 to-red-500/20",
      border: "border-orange-500/30",
      glow: "shadow-orange-500/20",
      top: "20%",
      right: "1%",
    },
    {
      icon: "💰",
      label: "MRR",
      value: "$128K",
      color: "from-blue-500/20 to-violet-500/20",
      border: "border-blue-500/30",
      glow: "shadow-blue-500/20",
      top: "65%",
      right: "0%",
    },
  ];

  return (
    <>
      {cards.map((card, i) => (
        <motion.div
          key={i}
          className={`absolute hidden lg:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl
            bg-gradient-to-r ${card.color}
            border ${card.border}
            backdrop-blur-md shadow-lg ${card.glow}
            dark:bg-gray-900/60`}
          style={{
            top: card.top,
            left: card.left,
            right: card.right,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [-4, 4, -4],
          }}
          transition={{
            opacity: { duration: 0.5, delay: i * 0.15 },
            scale: { duration: 0.5, delay: i * 0.15 },
            y: {
              duration: 3 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            },
          }}
        >
          <span className="text-lg">{card.icon}</span>
          <div>
            <p className="text-[10px] text-gray-500 dark:text-gray-400 font-medium leading-none mb-0.5">
              {card.label}
            </p>
            <p className="text-sm font-bold text-gray-900 dark:text-white leading-none">
              {card.value}
            </p>
          </div>
        </motion.div>
      ))}
    </>
  );
};

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 pt-24 pb-16">

      {/* Background Blobs */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-400/20 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl"></div>

      {/* ✨ Glowing Particles */}
      <GlowingParticles />

      {/* ✨ Floating Mini Cards */}
      <GlowingMiniCards />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-5 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              Trusted by 12,000+ Startups
            </motion.span>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white mb-6">
              Build Smarter
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                SaaS Products
              </span>
              <br />
              Faster Than Ever.
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-8 mb-10 max-w-lg">
              The modern platform to launch, manage and scale your startup.
              Beautiful UI, powerful analytics, automation and lightning-fast
              performance—all in one place.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition duration-300"></span>
                <span className="relative flex items-center gap-2">
                  Start Free Trial
                  <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                    →
                  </motion.span>
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition font-semibold"
              >
                Watch Demo
              </motion.button>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              {[
                { value: "12K+", label: "Active Users", color: "text-blue-600" },
                { value: "99.9%", label: "Uptime", color: "text-violet-600" },
                { value: "24/7", label: "Support", color: "text-green-600" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <h3 className={`text-3xl font-bold ${stat.color}`}>{stat.value}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT - Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-800/80 dark:backdrop-blur-xl dark:border dark:border-gray-700/50 rounded-3xl shadow-2xl p-6">

              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white">Dashboard</h3>
                  <p className="text-gray-400 text-sm">Analytics Overview</p>
                </div>
                <span className="flex items-center gap-2 text-green-500 font-semibold text-sm bg-green-50 dark:bg-green-900/30 px-3 py-1 rounded-full">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Live
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: "Users", value: "12.5K", change: "+12%", bg: "bg-blue-50 dark:bg-blue-900/30" },
                  { label: "Revenue", value: "$24K", change: "+18%", bg: "bg-purple-50 dark:bg-purple-900/30" },
                  { label: "Growth", value: "+28%", change: "This Month", bg: "bg-green-50 dark:bg-green-900/30" },
                  { label: "Projects", value: "145", change: "Running", bg: "bg-orange-50 dark:bg-orange-900/30" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4 }}
                    className={`${item.bg} rounded-2xl p-4`}
                  >
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">{item.label}</p>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{item.value}</h2>
                    <span className="text-green-500 text-sm font-medium">{item.change}</span>
                  </motion.div>
                ))}
              </div>

              {/* Chart */}
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold text-gray-700 dark:text-gray-300 text-sm">Monthly Revenue</span>
                  <span className="text-blue-600 font-semibold text-sm">+18%</span>
                </div>
                <div className="flex items-end gap-1.5 h-24">
                  {[40, 55, 45, 65, 75, 60, 85, 70, 90, 80, 95, 88].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.8, delay: 0.5 + i * 0.05 }}
                      className="flex-1 rounded-t-md"
                      style={{
                        background: `rgba(37, 99, 235, ${0.25 + (i / 12) * 0.75})`,
                        boxShadow: `0 0 8px rgba(37, 99, 235, ${0.2 + (i / 12) * 0.3})`,
                      }}
                    />
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;