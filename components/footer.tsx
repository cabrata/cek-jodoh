"use client"

import { motion } from "framer-motion"
import { SITE_CONFIG } from "@/lib/config"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { author } = SITE_CONFIG

  return (
    <footer className="bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 text-white py-12 px-4 mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid md:grid-cols-3 gap-12 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black mb-2">💘 Cek Jodoh</h3>
            <motion.a
              href={author.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/90 font-semibold hover:text-white transition-colors inline-block mb-4"
              whileHover={{ x: 5 }}
            >
              by {author.handle}
            </motion.a>
            <p className="text-white/80">
              Aplikasi iseng untuk tau seberapa cocok kamu sama crush. Cuma buat hiburan doang!
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Menu</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#" className="hover:text-white transition-all">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-all">
                  Cek Jodoh
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-all">
                  Permainan Lain
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-bold mb-4">Hubungi Kami</h4>
            <div className="flex gap-4">
              {["📱", "💬", "✉️"].map((icon, i) => (
                <motion.button
                  key={i}
                  className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {icon}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <motion.div
            className="text-center text-white/70 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="mb-2">Made with 💜 for people in love (or think they are)</p>
            <p>© {currentYear} Cek Jodoh. Cuma buat hiburan doang ya! 😆</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
