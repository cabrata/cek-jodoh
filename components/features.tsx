"use client"

import { motion } from "framer-motion"

export function Features() {
  const features = [
    {
      icon: "🎯",
      title: "Cepat & Akurat",
      desc: "Cek hasil kecocokan hanya dalam hitungan detik",
    },
    {
      icon: "🔐",
      title: "Aman & Privat",
      desc: "Data kamu nggak disimpan, murni untuk hiburan",
    },
    {
      icon: "📱",
      title: "Gampang Dipakai",
      desc: "Tinggal iseng masukkin nama, langsung dapat hasil",
    },
    {
      icon: "🎉",
      title: "Seru Banget",
      desc: "Bisa main bareng temen dan bandingin hasilnya",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Kenapa Harus Main Cek Jodoh?
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center border border-pink-200 shadow-lg hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div
                className="text-5xl mb-4"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-purple-600 mb-3">{feature.title}</h3>
              <p className="text-gray-600 font-medium">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
