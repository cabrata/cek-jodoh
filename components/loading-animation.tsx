"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const loadingTexts = [
  "Sabar ya, sistem lagi stalking hati kalian…",
  "Lagi ngitung tingkat baper kalian…",
  "Cek dulu, takut jodoh beneran 😳",
  "Lagi susun-susun hati kalian nih…",
  "Jangan gerak, lagi scan chemistry kalian…",
]

export function LoadingAnimation() {
  const [loadingText, setLoadingText] = useState(loadingTexts[0])

  useEffect(() => {
    setLoadingText(loadingTexts[Math.floor(Math.random() * loadingTexts.length)])
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <motion.div
      className="flex flex-col items-center justify-center space-y-8 py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated Hearts */}
      <motion.div className="flex gap-4 justify-center items-center" variants={itemVariants}>
        <motion.span
          className="text-6xl"
          animate={{ scale: [1, 1.3, 1], rotate: [0, -10, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          💕
        </motion.span>
        <motion.span
          className="text-7xl"
          animate={{ scale: [1.3, 1, 1.3], y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
        >
          ❤️
        </motion.span>
        <motion.span
          className="text-6xl"
          animate={{ scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          💖
        </motion.span>
      </motion.div>

      {/* Bouncing Emojis */}
      <motion.div className="flex gap-2 justify-center" variants={itemVariants}>
        <motion.span
          className="text-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
        >
          💗
        </motion.span>
        <motion.span
          className="text-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, delay: 0.1 }}
        >
          💝
        </motion.span>
        <motion.span
          className="text-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
        >
          💞
        </motion.span>
      </motion.div>

      {/* Loading Text */}
      <motion.p
        className="text-center text-lg text-purple-600 font-semibold max-w-md"
        variants={itemVariants}
        animate={{ opacity: [1, 0.7, 1] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        {loadingText}
      </motion.p>

      {/* Loading Bar */}
      <motion.div className="w-full max-w-xs h-1 bg-gray-200 rounded-full overflow-hidden" variants={itemVariants}>
        <motion.div
          className="h-full bg-gradient-to-r from-pink-500 to-purple-600"
          animate={{ x: ["0%", "100%", "-100%"] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  )
}
