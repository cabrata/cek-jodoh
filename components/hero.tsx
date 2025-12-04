"use client"

import { motion } from "framer-motion"

interface HeroProps {
  onStartClick: () => void
}

export function Hero({ onStartClick }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full">
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated Title */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black">
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600"
                animate={{ backgroundPositionX: ["0%", "100%"] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                Cek Jodoh
              </motion.span>
            </h1>
            <motion.p
              className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500 font-bold"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              Nama Kalian
            </motion.p>
            <motion.a
              href="https://caliph.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base text-purple-500 font-semibold hover:text-purple-700 transition-colors inline-block"
              whileHover={{ scale: 1.1 }}
            >
              by @caliphdev
            </motion.a>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-purple-600 font-semibold max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Iseng-iseng doang buat tau seberapa cocok kamu sama crush, tapi jangan dijadiin patokan hidup ya 😆
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="pt-8"
          >
            <motion.button
              onClick={onStartClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-600 hover:via-rose-600 hover:to-purple-700 text-white font-bold py-5 px-10 rounded-full transition-all duration-300 shadow-2xl hover:shadow-3xl text-lg md:text-xl uppercase tracking-wider"
            >
              <span>💘 Mulai Cek Jodoh</span>
              <span className="text-2xl">→</span>
            </motion.button>
          </motion.div>

          {/* Floating Icons */}
          <motion.div
            className="flex justify-center gap-8 pt-12 text-5xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {["💕", "✨", "💘"].map((emoji, i) => (
              <motion.span
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}