"use client"

import { motion } from "framer-motion"

export function ResultCard({ result, statusInfo, onReset, onBackHome }) {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div className="max-w-2xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
      {/* Header */}
      <motion.div className="text-center mb-8" variants={itemVariants}>
        <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 mb-2">
          Hasil Cek Jodoh
        </h1>
        <p className="text-lg text-gray-600 font-medium">
          Antara <span className="font-bold text-purple-600">{result.nama1}</span> &{" "}
          <span className="font-bold text-purple-600">{result.nama2}</span>
        </p>
      </motion.div>

      {/* Main Card */}
      <motion.div
        className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/50 space-y-8"
        variants={itemVariants}
      >
        {/* Percentage Display */}
        <motion.div className="text-center" variants={itemVariants}>
          <motion.div
            className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-3"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY }}
          >
            {result.percentage}%
          </motion.div>
          <p className="text-gray-600 font-semibold text-sm">Tingkat Kecocokan</p>
        </motion.div>

        {/* Status Bubble */}
        <motion.div
          className={`bg-gradient-to-br ${statusInfo.bg} rounded-3xl p-8 text-white text-center space-y-3`}
          variants={itemVariants}
          animate={{ rotate: [0, 1, -1, 0], y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        >
          <motion.div
            className="text-6xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
          >
            {statusInfo.emoji}
          </motion.div>
          <motion.p className="text-3xl font-bold">{statusInfo.label}</motion.p>
          <motion.p className="text-lg font-semibold leading-relaxed">{statusInfo.desc}</motion.p>
        </motion.div>

        {/* Disclaimer */}
        <motion.div className="bg-purple-50 border-l-4 border-purple-300 rounded-lg p-4" variants={itemVariants}>
          <p className="text-sm text-purple-700 font-semibold">
            💬 Cuma buat hiburan doang ya, jangan dijadiin patokan hidup!
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div className="flex flex-col sm:flex-row gap-4 pt-4" variants={itemVariants}>
          <motion.button
            onClick={onReset}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-600 hover:via-rose-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wider text-lg"
          >
            🔄 Cek Lagi
          </motion.button>
          <motion.button
            onClick={() => {
              navigator.clipboard.writeText(
                `Aku & ${result.nama2} cocok ${result.percentage}%! 😳❤️ Cek juga nama kamu di sini: ${window.location.href}`,
              )
              alert("Sudah dicopy ke clipboard!")
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 bg-white border-2 border-purple-300 text-purple-600 font-bold py-4 px-6 rounded-2xl transition-all duration-300 hover:bg-purple-50 uppercase tracking-wider text-lg"
          >
            📱 Share Hasil
          </motion.button>
        </motion.div>

        {/* Back Button */}
        <motion.button
          onClick={onBackHome}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-purple-100 text-purple-600 font-bold py-3 px-6 rounded-2xl transition-all duration-300 hover:bg-purple-200"
        >
          ← Kembali ke Beranda
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
