"use client"

import { motion } from "framer-motion"
import { SITE_CONFIG } from "@/lib/config"

export function RelatedGames() {
  const games = SITE_CONFIG.games

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          className="text-4xl md:text-5xl font-black text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 inline-block">
            Permainan Lainnya yang Seru
          </span>
          <span className="inline-block"> 😳❤️</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game, i) => (
            <motion.a
              key={i}
              href={game.url}
              target={game.url.startsWith("http") ? "_blank" : "_self"}
              rel={game.url.startsWith("http") ? "noopener noreferrer" : ""}
              className={`bg-gradient-to-br ${game.color} rounded-2xl p-8 text-white text-center cursor-pointer shadow-lg hover:shadow-2xl transition-all group block`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <motion.div
                className="text-5xl mb-4"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2
                }}
              >
                {game.icon}
              </motion.div>

              <h3 className="text-2xl font-bold mb-2">
                {game.title}
              </h3>

              <p className="text-sm font-semibold opacity-90">
                {game.desc}
              </p>

              <motion.div
                className="mt-6 opacity-100 transition-all"
              >
                <button
                  className="bg-white/20 backdrop-blur-sm border border-white/40 text-white drop-shadow-sm px-6 py-2 rounded-full font-semibold text-sm hover:bg-white/30 hover:border-white/60 transition-all"
                >
                  {game.url === "#" ? "Coming Soon" : "Main Sekarang"}
                </button>
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
