"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MatchForm } from "@/components/match-form"
import { LoadingAnimation } from "@/components/loading-animation"
import { ResultCard } from "@/components/result-card"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { RelatedGames } from "@/components/related-games"
import { Footer } from "@/components/footer"

type MatchStatusKey = "cari_lagi" | "sulit" | "mungkin" | "tidak_cocok" | "cocok"

interface StatusInfo {
  label: string
  emoji: string
  bg: string
  lightBg: string
  text: string
  desc: string
}

interface MatchResult {
  percentage: number
  status: MatchStatusKey
  nama1: string
  nama2: string
}

const statuses: Record<MatchStatusKey, StatusInfo> = {
  cari_lagi: {
    label: "Cari lagi",
    emoji: "😵",
    bg: "from-red-400 to-red-500",
    lightBg: "bg-red-100",
    text: "text-red-700",
    desc: "Fix belum jodoh, lanjut scroll chat yang lain dulu 😆",
  },
  sulit: {
    label: "Sulit",
    emoji: "😬",
    bg: "from-orange-400 to-orange-500",
    lightBg: "bg-orange-100",
    text: "text-orange-700",
    desc: "Hubungan level hard, usaha kalian harus double.",
  },
  mungkin: {
    label: "Mungkin",
    emoji: "🤔",
    bg: "from-yellow-400 to-yellow-500",
    lightBg: "bg-yellow-100",
    text: "text-yellow-700",
    desc: "Masih abu-abu, tergantung seberapa niat kalian.",
  },
  tidak_cocok: {
    label: "Tidak cocok",
    emoji: "💔",
    bg: "from-pink-400 to-pink-500",
    lightBg: "bg-pink-100",
    text: "text-pink-700",
    desc: "Lebih aman jadi temen curhat aja.",
  },
  cocok: {
    label: "Cocok",
    emoji: "💘",
    bg: "from-rose-400 to-rose-500",
    lightBg: "bg-rose-100",
    text: "text-rose-700",
    desc: "Waduh, ini sih couple goal calon chat tiap malam.",
  },
}

export default function Home() {
  const [nama1, setNama1] = useState<string>("")
  const [nama2, setNama2] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [result, setResult] = useState<MatchResult | null>(null)
  const [error, setError] = useState<string>("")
  const [showChecker, setShowChecker] = useState<boolean>(false)

  const calculateMatch = (name1: string, name2: string): number => {
    const combined = (name1 + name2).toLowerCase()
    let sum = 0
    for (const char of combined) {
      sum += char.charCodeAt(0)
    }
    return sum % 101
  }

  const getStatus = (percentage: number): MatchStatusKey => {
    if (percentage <= 20) return "cari_lagi"
    if (percentage <= 40) return "sulit"
    if (percentage <= 60) return "mungkin"
    if (percentage <= 80) return "tidak_cocok"
    return "cocok"
  }

  const handleCheck = async (): Promise<void> => {
    setError("")

    if (!nama1.trim()) {
      setError("Isi dulu namanya dong 😡")
      return
    }

    if (!nama2.trim()) {
      setError("Nama doi jangan dikosongin lah…")
      return
    }

    setLoading(true)

    await new Promise<void>((resolve) => setTimeout(resolve, 2500))

    const percentage = calculateMatch(nama1, nama2)
    const status = getStatus(percentage)

    setResult({
      percentage,
      status,
      nama1,
      nama2,
    })
    setLoading(false)
  }

  const handleReset = (): void => {
    setResult(null)
    setNama1("")
    setNama2("")
    setError("")
  }

  const statusInfo: StatusInfo | null = result ? statuses[result.status] : null

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 via-rose-50 to-purple-100">
      <AnimatePresence mode="wait">
        {showChecker && !result ? (
          <motion.div
            key="checker-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="min-h-screen flex items-center justify-center p-4 relative z-10"
          >
            <div className="w-full max-w-2xl">
              <motion.div className="text-center mb-12">
                <motion.button
                  onClick={() => setShowChecker(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mb-8 inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-pink-200 text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-white transition-all"
                >
                  ← Kembali
                </motion.button>
                <motion.h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 mb-3">
                  Cek Jodoh Nama Kalian
                </motion.h1>
                <motion.p className="text-lg text-purple-600 font-semibold">
                  Iseng-iseng doang ya, jangan baper…
                </motion.p>
              </motion.div>

              <motion.div
                className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/50"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {loading ? (
                  <LoadingAnimation />
                ) : (
                  <MatchForm
                    nama1={nama1}
                    nama2={nama2}
                    error={error}
                    loading={loading}
                    onNama1Change={setNama1}
                    onNama2Change={setNama2}
                    onCheck={handleCheck}
                  />
                )}
              </motion.div>

              <motion.p
                className="text-center text-sm text-purple-600 mt-8 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                ✨ Cuma buat hiburan doang ya, jangan baper…
              </motion.p>
            </div>
          </motion.div>
        ) : result ? (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="min-h-screen flex items-center justify-center p-4 relative z-10"
          >
            <div className="w-full max-w-2xl">
              <ResultCard
                result={result}
                statusInfo={statusInfo}
                onReset={handleReset}
                onBackHome={() => setShowChecker(false)}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-10"
          >
            <Hero onStartClick={() => setShowChecker(true)} />
            <Features />
            <Testimonials />
            <RelatedGames />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
