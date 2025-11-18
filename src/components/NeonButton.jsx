import React from 'react'
import { motion } from 'framer-motion'

export default function NeonButton({ children, color = 'cyan', className = '', ...props }) {
  const colors = {
    cyan: {
      base: 'from-cyan-500/20 to-cyan-400/10 border-cyan-400/40 text-cyan-200 hover:text-white',
      glow: 'shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:shadow-[0_0_40px_rgba(6,182,212,0.8)]',
      ring: 'focus:ring-cyan-400/40'
    },
    purple: {
      base: 'from-purple-500/20 to-purple-400/10 border-purple-400/40 text-purple-200 hover:text-white',
      glow: 'shadow-[0_0_25px_rgba(124,58,237,0.5)] hover:shadow-[0_0_40px_rgba(124,58,237,0.8)]',
      ring: 'focus:ring-purple-400/40'
    }
  }
  const c = color === 'purple' ? colors.purple : colors.cyan

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative w-full overflow-hidden rounded-xl border ${c.base} ${c.glow} ${c.ring} 
        bg-gradient-to-b backdrop-blur-lg transition-all duration-300 px-4 py-3 ${className}`}
      {...props}
    >
      {/* inner grid glow */}
      <span className="pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_50%)]" />
      <span className="relative z-10 font-semibold tracking-wide">{children}</span>
    </motion.button>
  )
}
