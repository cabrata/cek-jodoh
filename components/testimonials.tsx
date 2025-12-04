"use client"

import { motion } from "framer-motion"

export function Testimonials() {
  const testimonials = [
    {
      name: "Dinda",
      text: "Hahahaha hasil kita 87%! Doi langsung baper 😆",
      emoji: "😂",
    },
    {
      name: "Reza",
      text: "Gila cocok banget sama dia! Jadi semangat ngajak kencan 💪",
      emoji: "😍",
    },
    {
      name: "Rina",
      text: "Cuma iseng tapi hasil yang keluar bikin kaget lah 😳",
      emoji: "😲",
    },
    {
      name: "Budi",
      text: "Yang paling seru dipake bareng temen, trus bandingin hasil 🤣",
      emoji: "🤪",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Kata Temen-Temen Tentang Ini
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-8 border border-pink-200 shadow-lg"
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <motion.div
                className="text-4xl mb-4"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                {test.emoji}
              </motion.div>
              <p className="text-gray-700 font-medium mb-4 italic">"{test.text}"</p>
              <p className="text-purple-600 font-bold">- {test.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
