"use client"

import { motion } from "framer-motion"
import type { ChangeEvent, KeyboardEvent } from "react"

interface MatchFormProps {
  nama1: string
  nama2: string
  error: string
  loading: boolean
  onNama1Change: (value: string) => void
  onNama2Change: (value: string) => void
  onCheck: () => void
}

export function MatchForm({
  nama1,
  nama2,
  error,
  loading,
  onNama1Change,
  onNama2Change,
  onCheck,
}: MatchFormProps) {
  const handleNama1KeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !loading) {
      onCheck()
    }
  }

  const handleNama2KeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !loading) {
      onCheck()
    }
  }

  const handleNama1Change = (e: ChangeEvent<HTMLInputElement>) => {
    onNama1Change(e.target.value)
  }

  const handleNama2Change = (e: ChangeEvent<HTMLInputElement>) => {
    onNama2Change(e.target.value)
  }

  return (
    <div className="space-y-6">
      {/* Input Fields */}
      <div className="space-y-5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <label className="block text-sm font-bold text-purple-700 mb-3 uppercase tracking-wide">
            💜 Nama Kamu
          </label>
          <motion.input
            type="text"
            value={nama1}
            onChange={handleNama1Change}
            onKeyDown={handleNama1KeyDown}
            placeholder="Masukkin nama kamu deh"
            className="w-full px-5 py-4 border-2 border-pink-200 rounded-2xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-300/50 transition-all bg-white/80 hover:bg-white text-gray-800 placeholder-gray-400"
            whileFocus={{ scale: 1.02 }}
            whileHover={{ scale: 1.01 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <label className="block text-sm font-bold text-purple-700 mb-3 uppercase tracking-wide">
            💕 Nama Doi
          </label>
          <motion.input
            type="text"
            value={nama2}
            onChange={handleNama2Change}
            onKeyDown={handleNama2KeyDown}
            placeholder="Nama cewe/cowo impian kamu"
            className="w-full px-5 py-4 border-2 border-pink-200 rounded-2xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-300/50 transition-all bg-white/80 hover:bg-white text-gray-800 placeholder-gray-400"
            whileFocus={{ scale: 1.02 }}
            whileHover={{ scale: 1.01 }}
          />
        </motion.div>
      </div>

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg font-semibold text-sm"
        >
          {error}
        </motion.div>
      )}

      {/* Submit Button */}
      <motion.button
        onClick={onCheck}
        disabled={loading}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-600 hover:via-rose-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-400 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:shadow-none uppercase tracking-wider text-lg"
      >
        {loading ? "Lagi cek vibing hati kalian…" : "🔥 Cek Jodoh Kita"}
      </motion.button>
    </div>
  )
}
